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
        const stripped = { ...prop.propertySchema };
        for (const f of SEMCONV_ONLY_FIELDS) delete stripped[f];
        targetType.properties[prop.propertyName] = stripped;
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
