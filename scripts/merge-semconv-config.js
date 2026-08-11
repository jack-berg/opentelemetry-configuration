// Merges semconv-owned instrumentation config into an in-memory copy of
// the otel-config schema.
//
// Reads attribute `annotations.config` blocks from semantic-conventions
// model YAML under semantic-conventions/model/**, maps logical scope
// keys to opentelemetry-configuration $defs type names, and injects the
// properties into the corresponding types.
//
// Called by source-schema.js (which is the single point that loads the
// schema into memory for compile-schema.js and other scripts).

import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import { semconvSourceDirPath } from './util.js';

const INSTRUMENTATION_FILE = 'instrumentation.yaml';

// Fields on a semconv config property that must not be copied to the
// otel-config schema (they are semconv-side metadata only).
const SEMCONV_ONLY_FIELDS = new Set(['env_var']);

// Fields that may be copied from a semconv config property to the
// otel-config schema. Anything on a property that is neither here nor in
// SEMCONV_ONLY_FIELDS is a hard error. This catches typos and prevents
// silent expansion of the semconv-exposed surface.
const ALLOWED_OTEL_CONFIG_FIELDS = new Set([
    // otel-config metadata (consumed by compile-schema.js)
    'description', 'defaultBehavior', 'nullBehavior',
    // JSON schema keywords supported for scalar / array-of-scalar properties
    'type', 'items', 'minItems', 'maxItems', 'enum',
]);

// Fields permitted inside an array property's `items`.
const ALLOWED_ITEMS_FIELDS = new Set(['type']);

// Semconv config properties are restricted to scalar types or arrays of
// scalar types. No objects, no $ref, no oneOf/allOf.
const SCALAR_TYPES = new Set(['string', 'integer', 'number', 'boolean']);

// Error prefix so failures thrown from this module are recognizable when
// surfaced by callers (compile-schema.js and friends).
const ERR_PREFIX = 'semconv config merge:';

// Logical type name (as used in semconv `annotations.config`) -> $defs
// type name in schema/instrumentation.yaml. Unknown logical names are a
// hard error.
const LOGICAL_NAME_TO_TYPE = {
    'http.client': 'ExperimentalHttpClientInstrumentation',
    'http.server': 'ExperimentalHttpServerInstrumentation',
};

class SemconvConfigProperty {
    constructor({ attribute, logicalName, propertyName, propertySchema, sourceFile }) {
        this.attribute = attribute;
        this.logicalName = logicalName;
        this.propertyName = propertyName;
        this.propertySchema = propertySchema;
        this.sourceFile = sourceFile;
    }
}

// Mutates sourceContentByFile in place, injecting semconv-sourced
// properties into the parsed instrumentation.yaml content.
export function mergeSemconvConfig(sourceContentByFile) {
    const instrumentation = sourceContentByFile[INSTRUMENTATION_FILE];
    if (!instrumentation) {
        throw new Error(`${ERR_PREFIX} ${INSTRUMENTATION_FILE} not loaded`);
    }
    const defs = instrumentation['$defs'];
    if (!defs) {
        throw new Error(`${ERR_PREFIX} ${INSTRUMENTATION_FILE} has no $defs`);
    }

    const configProps = collectSemconvConfig(semconvSourceDirPath);
    for (const prop of configProps) {
        if (!(prop.logicalName in LOGICAL_NAME_TO_TYPE)) {
            throw new Error(`${ERR_PREFIX} unknown logical type name '${prop.logicalName}' on attribute '${prop.attribute}' in ${prop.sourceFile}. Known: ${Object.keys(LOGICAL_NAME_TO_TYPE).join(', ')}`);
        }
        const typeName = LOGICAL_NAME_TO_TYPE[prop.logicalName];
        const targetType = defs[typeName];
        if (!targetType || !targetType.properties) {
            throw new Error(`${ERR_PREFIX} target type ${typeName} not found or has no properties in ${INSTRUMENTATION_FILE}`);
        }
        if (prop.propertyName in targetType.properties) {
            throw new Error(`${ERR_PREFIX} property ${typeName}.properties.${prop.propertyName} already defined in ${INSTRUMENTATION_FILE}; it must be removed to be sourced from semconv (attribute '${prop.attribute}', logical name '${prop.logicalName}').`);
        }
        validatePropertyShape(prop);
        const stripped = {};
        for (const [field, value] of Object.entries(prop.propertySchema)) {
            if (ALLOWED_OTEL_CONFIG_FIELDS.has(field)) stripped[field] = value;
        }
        targetType.properties[prop.propertyName] = stripped;
    }
}

function validatePropertyShape(prop) {
    const where = `${prop.attribute}[${prop.logicalName}].${prop.propertyName} in ${prop.sourceFile}`;
    const schema = prop.propertySchema;

    for (const field of Object.keys(schema)) {
        if (!ALLOWED_OTEL_CONFIG_FIELDS.has(field) && !SEMCONV_ONLY_FIELDS.has(field)) {
            throw new Error(`${ERR_PREFIX} unrecognized field '${field}' on ${where}. Allowed otel-config fields: ${[...ALLOWED_OTEL_CONFIG_FIELDS].join(', ')}. Semconv-only fields: ${[...SEMCONV_ONLY_FIELDS].join(', ')}.`);
        }
    }

    const type = schema.type;
    if (typeof type !== 'string' || (!SCALAR_TYPES.has(type) && type !== 'array')) {
        throw new Error(`${ERR_PREFIX} type on ${where} must be one of ${[...SCALAR_TYPES, 'array'].join(', ')}, got ${JSON.stringify(type)}.`);
    }

    if (type === 'array') {
        if (!schema.items || typeof schema.items !== 'object') {
            throw new Error(`${ERR_PREFIX} array property ${where} is missing 'items'.`);
        }
        for (const field of Object.keys(schema.items)) {
            if (!ALLOWED_ITEMS_FIELDS.has(field)) {
                throw new Error(`${ERR_PREFIX} unrecognized field '${field}' on items of ${where}. Allowed: ${[...ALLOWED_ITEMS_FIELDS].join(', ')}.`);
            }
        }
        if (!SCALAR_TYPES.has(schema.items.type)) {
            throw new Error(`${ERR_PREFIX} items.type on ${where} must be a scalar type (${[...SCALAR_TYPES].join(', ')}), got ${JSON.stringify(schema.items.type)}.`);
        }
    } else if ('items' in schema) {
        throw new Error(`${ERR_PREFIX} non-array property ${where} must not declare 'items'.`);
    }
}

function collectSemconvConfig(rootDir) {
    const results = [];
    for (const file of listYamlFiles(rootDir)) {
        let parsed;
        try {
            parsed = yaml.parse(fs.readFileSync(file, 'utf-8'));
        } catch (e) {
            throw new Error(`${ERR_PREFIX} failed to parse ${file}: ${e.message}`);
        }
        // yaml.parse returns null for empty files / files containing only
        // comments; guard against that before accessing properties.
        if (!parsed || !Array.isArray(parsed.groups)) continue;
        for (const group of parsed.groups) {
            if (!Array.isArray(group.attributes)) continue;
            for (const attr of group.attributes) {
                const config = attr?.annotations?.config;
                if (!config || typeof config !== 'object') continue;
                const attrName = attr.id || attr.ref || '<unknown>';
                for (const [logicalName, props] of Object.entries(config)) {
                    if (!props || typeof props !== 'object') {
                        throw new Error(`${ERR_PREFIX} invalid config entry '${logicalName}' on attribute '${attrName}' in ${file}: expected object of properties`);
                    }
                    for (const [propertyName, propertySchema] of Object.entries(props)) {
                        results.push(new SemconvConfigProperty({
                            attribute: attrName,
                            logicalName,
                            propertyName,
                            propertySchema,
                            sourceFile: file,
                        }));
                    }
                }
            }
        }
    }
    // Stable order for deterministic output.
    results.sort((a, b) =>
        a.logicalName.localeCompare(b.logicalName) ||
        a.propertyName.localeCompare(b.propertyName) ||
        a.attribute.localeCompare(b.attribute));
    return results;
}

function listYamlFiles(dir) {
    const results = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...listYamlFiles(full));
        } else if (entry.isFile() && (entry.name.endsWith('.yaml') || entry.name.endsWith('.yml'))) {
            results.push(full);
        }
    }
    return results;
}
