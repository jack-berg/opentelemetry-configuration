import fs from 'fs';
import path from 'path';
import yaml from 'yaml';

const localDefPrefix = '#/$defs/';

/**
 * Load source schema YAML files from a directory into a map of
 * type name -> {@link SourceSchemaType}.
 *
 * @param sourceDir    directory containing source schema YAML files.
 * @param rootTypeName name to assign to the root schema type.
 * @param rootTypeFile file name (within `sourceDir`) whose top-level schema
 *                     becomes the root type. Other `.yaml` files in the
 *                     directory contribute their `$defs` entries.
 * @param options      optional:
 *                       includeFile: (filename) => boolean
 *                         additional filter over the `.yaml` files in
 *                         `sourceDir`. Return false to skip a file (e.g.
 *                         meta-schemas). Defaults to accepting all files.
 */
export function readSourceTypesByType(sourceDir, rootTypeName, rootTypeFile, options = {}) {
    if (!sourceDir) throw new Error('readSourceTypesByType: sourceDir is required');
    if (!rootTypeName) throw new Error('readSourceTypesByType: rootTypeName is required');
    if (!rootTypeFile) throw new Error('readSourceTypesByType: rootTypeFile is required');
    const {includeFile = () => true} = options;

    const sourceTypesByType = {};
    const sourceContentByFile = {};

    fs.readdirSync(sourceDir)
        .filter(file => file.endsWith('.yaml') && includeFile(file))
        .forEach(file => {
            const sourceContent = yaml.parse(fs.readFileSync(path.join(sourceDir, file), "utf-8"));

            sourceContentByFile[file] = sourceContent;

            if (file === rootTypeFile) {
                sourceTypesByType[rootTypeName] = new SourceSchemaType(rootTypeName, file, sourceContent, '.', sourceContent);
            }

            Object.entries(getDefs(sourceContent)).forEach(([type, schema]) => {
                const jsonSchemaPath = `${localDefPrefix}${type}`;
                if (type in sourceTypesByType) {
                    throw new Error(`${type} already exists in schemasByName with definition: ` + sourceTypesByType[type]);
                }
                sourceTypesByType[type] = new SourceSchemaType(type, file, sourceContent, jsonSchemaPath, schema);
            });
        });

    // Resolve refs to top-level types
    Object.values(sourceTypesByType).forEach(sourceSchemaType => {
        const ref = sourceSchemaType.schema['$ref'];
        if (!ref) {
            return;
        }
        const topLevelSchema = sourceContentByFile[ref];
        if (!topLevelSchema) {
            throw new Error("Could not resolve top level $ref:" + ref);
        }
        sourceSchemaType.sourceFile = ref;
        sourceSchemaType.jsonSchemaPath = '.';
        sourceSchemaType.schema = topLevelSchema;
    });

    // Resolve properties, enum values
    Object.values(sourceTypesByType).forEach(sourceSchemaType => {
        sourceSchemaType.properties = resolveSourceSchemaProperties(sourceSchemaType.schema, sourceTypesByType);
        sourceSchemaType.enumValues = resolveEnumValues(sourceSchemaType);
        if (sourceSchemaType.properties.length > 0 && sourceSchemaType.enumValues !== null) {
            throw new Error(`${sourceSchemaType.type} has enum values and properties`);
        }
    });

    return sourceTypesByType;
}

function resolveSourceSchemaProperties(sourceSchema, typesByType) {
    const properties = sourceSchema['properties'];
    if (!properties) {
        return [];
    }
    const requiredProperties = sourceSchema['required'] || [];
    const resolvedProperties = [];
    Object.entries(properties).forEach(([propertyKey, propertySchema]) => {
        const type = propertySchema['type'];
        const items = propertySchema['items'];
        const ref = propertySchema['$ref'];
        const oneOf = propertySchema['oneOf'];

        let isSeq = false;
        const isRequired = requiredProperties.includes(propertyKey);
        const types = [];

        if (type === 'array' && items) {
            isSeq = true;
            const itemsType = items['type'];
            const itemsRef = items['$ref'];
            if (itemsType) {
                if (Array.isArray(itemsType)) {
                    types.push(...itemsType);
                } else {
                    types.push(itemsType);
                }
            } else if (itemsRef) {
                types.push(resolveRef(itemsRef, typesByType).type);
            }
        } else if (type) {
            if (Array.isArray(type)) {
                types.push(...type);
            } else {
                types.push(type);
            }
        } else if (ref) {
            types.push(resolveRef(ref, typesByType).type);
        } else if (oneOf) {
            types.push('oneOf');
            if (oneOf.some(option => option['type'] === 'null')) {
                types.push('null');
            }
        }
        resolvedProperties.push(new SourceSchemaProperty(propertyKey, types, isSeq, isRequired, propertySchema));
    });

    return resolvedProperties;
}

function resolveEnumValues(sourceSchemaType) {
    const enumValues = sourceSchemaType.schema['enum'];
    if (!enumValues) {
        return null;
    }
    return enumValues;
}

/**
 * Resolve a JSON schema $ref (either a local `#/$defs/<type>` ref or a
 * cross-file ref) to the SourceSchemaType it points at. Throws if unresolved.
 */
export function resolveRef(ref, typesByType) {
    let response;
    if (ref.startsWith(localDefPrefix)) {
        const type = ref.substring(localDefPrefix.length);
        response = typesByType[type];
    } else {
        response = Object.values(typesByType).find(sourceSchemaType => sourceSchemaType.jsonSchemaRef() === ref);
    }
    if (!response) {
        throw new Error(`Unable to find type for JSON schema ref ${ref}`);
    }
    return response;
}

function getDefs(jsonSchema) {
    const defs = jsonSchema['$defs'];
    if (!defs) {
        return {};
    }
    return defs;
}

/**
 * True if `property` is an experimental property, denoted by the
 * `/development` maturity suffix in its name.
 */
export function isExperimentalProperty(property) {
    return property.endsWith('/development');
}

/**
 * A single property on a SourceSchemaType.
 *
 * Fields:
 *   property   property name as it appears in the source YAML.
 *   types      resolved value types (JSON schema primitive names and/or
 *              referenced source type names; `oneOf` for oneOf compositions).
 *   isSeq      true if the property is an array.
 *   isRequired true if the property is listed in the parent type's `required`.
 *   isNullable true if `null` is one of the accepted types.
 *   schema     the raw property sub-schema from the source YAML.
 */
export class SourceSchemaProperty {
    property;
    types;
    isSeq;
    isRequired;
    isNullable;
    schema;

    constructor(property, types, isSeq, isRequired, schema) {
        this.property = property;
        this.types = types;
        this.isSeq = isSeq;
        this.isRequired = isRequired;
        this.isNullable = types.includes('null');
        this.schema = schema;
    }

    /**
     * Render the `defaultBehavior` and `nullBehavior` metadata into a
     * human-readable sentence, chosen based on required/nullable status.
     */
    formatDefaultAndNullBehavior() {
        const defaultBehavior = this.schema['defaultBehavior'];
        const nullBehavior = this.schema['nullBehavior'];

        if (this.isRequired) {
            if (!this.isNullable) {
                return 'Property is required and must be non-null.';
            }
            return `Property must be present, but if null ${nullBehavior}.`;
        }
        if (!nullBehavior) {
            if (this.isNullable) {
                return `If omitted or null, ${defaultBehavior}.`;
            }
            return `If omitted, ${defaultBehavior}.`;
        }
        return `If omitted, ${defaultBehavior}. If present and null, ${nullBehavior}.`;
    }
}

/**
 * A top-level type in the source schema (either the root type or an entry
 * under `$defs`).
 *
 * Fields:
 *   type           type name.
 *   sourceFile     YAML file the type was loaded from.
 *   fileContent    parsed contents of that file.
 *   jsonSchemaPath location within the file: `.` for the top-level schema,
 *                  or `#/$defs/<name>` for a $defs entry.
 *   schema         the raw type schema.
 *   properties     resolved SourceSchemaProperty list (empty for enum types).
 *   enumValues     enum value list, or null if this type is not an enum.
 */
export class SourceSchemaType {
    type;
    sourceFile;
    fileContent;
    jsonSchemaPath;
    schema;
    properties;
    enumValues;

    constructor(type, sourceFile, fileContent, jsonSchemaPath, schema) {
        this.type = type;
        this.sourceFile = sourceFile;
        this.fileContent = fileContent;
        this.jsonSchemaPath = jsonSchemaPath;
        this.schema = schema;
        this.properties = [];
        this.enumValues = null;
    }

    isEnumType() {
        return this.enumValues !== null;
    }

    /**
     * Cross-file JSON schema reference to this type, e.g.
     * `foo.yaml#/$defs/Bar` or `foo.yaml` for a file's top-level schema.
     */
    jsonSchemaRef() {
        let ref = this.sourceFile;
        if (this.jsonSchemaPath !== '.') {
            ref += this.jsonSchemaPath;
        }
        return ref;
    }

    sortedEnumValues() {
        const sorted = this.enumValues.slice();
        sorted.sort((a, b) => a.localeCompare(b));
        return sorted;
    }

    sortedProperties() {
        const sorted = this.properties.slice();
        // Sort in lexigraphical order, with non-experimental properties first
        sorted.sort((a, b) => {
            const differentMaturities = isExperimentalProperty(a.property) - isExperimentalProperty(b.property);
            return differentMaturities === 0 ? a.property.localeCompare(b.property) : +differentMaturities;
        });
        return sorted;
    }
}
