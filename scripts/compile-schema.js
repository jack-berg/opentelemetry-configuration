/**
 * Compile a map of source types into a single bundled JSON schema object.
 *
 * The root type's schema becomes the top-level schema; all other types are
 * placed under `$defs`. Folds `defaultBehavior`, `nullBehavior`, and enum
 * value descriptions into property descriptions. Rewrites cross-file `$ref`s
 * to local `$defs` refs.
 *
 * @param sourceTypesByType map of type name -> SourceSchemaType, as produced
 *                          by {@link readSourceTypesByType} from
 *                          `./load-schema.js`. Must contain an entry keyed
 *                          by `rootTypeName`.
 * @param rootTypeName      name of the root type; its schema becomes the
 *                          top-level output schema.
 * @param options           optional:
 *                            bundleId: string
 *                              value to assign to the output `$id` field.
 *                              Omitted from the output if not set.
 */
export function compileSchema(sourceTypesByType, rootTypeName, options = {}) {
    if (!rootTypeName) throw new Error('compileSchema: rootTypeName is required');
    const {bundleId} = options;

    const sourceTypes = Object.values(sourceTypesByType).slice();
    sourceTypes.sort((a, b) => a.type.localeCompare(b.type));

    const defs = {};
    sourceTypes.filter(sourceSchemaType => sourceSchemaType.type !== rootTypeName)
        .forEach(sourceSchemaType => {
            defs[sourceSchemaType.type] = prepareSchemaForOutput(sourceSchemaType, sourceTypes);
        });

    const rootType = sourceTypes.find(sourceSchemaType => sourceSchemaType.type === rootTypeName);
    if (!rootType) {
        throw new Error(`Root type ${rootTypeName} not found in source schema.`);
    }
    const rootTypeSchema = prepareSchemaForOutput(rootType, sourceTypes);

    const output = {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        ...(bundleId ? {"$id": bundleId} : {}),
        "title": rootTypeName,
        ...rootTypeSchema,
        "$defs": defs
    };

    return output;
}

function prepareSchemaForOutput(sourceSchemaType, sourceTypes) {
    const schema = JSON.parse(JSON.stringify(sourceSchemaType.schema));

    delete schema['$defs'];

    stripMetadata(schema);
    replaceCrossFileRefs(schema);
    enrichDescriptions(sourceSchemaType, schema, sourceTypes);

    return schema;
}

function stripMetadata(schema) {
    delete schema['enumDescriptions'];
    delete schema['isSdkExtensionPlugin'];

    const properties = schema.properties;
    if (!properties) {
        return;
    }
    Object.values(properties).forEach(propertySchema => {
        delete propertySchema['defaultBehavior'];
        delete propertySchema['nullBehavior'];
    });
}

function replaceCrossFileRefs(schema) {
    const properties = schema.properties;
    if (!properties) {
        return;
    }
    Object.values(properties).forEach(propertySchema => {
        const ref = propertySchema['$ref'];
        if (ref) {
            propertySchema['$ref'] = ref.substring(ref.indexOf('#'));
        }
        const items = propertySchema['items'];
        if (items) {
            const itemsRef = items['$ref'];
            if (itemsRef) {
                items['$ref'] = itemsRef.substring(itemsRef.indexOf('#'));
            }
        }
    });
}

function enrichDescriptions(sourceSchemaType, schema, sourceTypes) {
    const properties = schema.properties;
    if (!properties) {
        return;
    }
    Object.entries(properties).forEach(([propertyKey, propertySchema]) => {
        const sourceProperty = sourceSchemaType.properties.find(property => property.property === propertyKey);
        let description = propertySchema['description'];

        const enumSourceType = sourceProperty.types.map(type => sourceTypes.find(sourceType => sourceType.type === type)).find(sourceType => sourceType && sourceType.isEnumType());
        if (enumSourceType) {
            description = maybeAddLineBreak(description);
            description += 'Values include:\n';
            enumSourceType.sortedEnumValues().forEach(enumValue => {
                const enumDescription = enumSourceType.schema['enumDescriptions'][enumValue];
                description += `* ${enumValue}: ${enumDescription}\n`;
            });
        }

        description = maybeAddLineBreak(description)
        description += sourceProperty.formatDefaultAndNullBehavior();
        if (!description.endsWith('\n')) {
            description += '\n';
        }
        propertySchema['description'] = description;
    });
}

function maybeAddLineBreak(str) {
    if (!str.endsWith('\n')) {
        return str + '\n';
    }
    return str;
}
