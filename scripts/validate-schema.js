// See the schema modeling rules in CONTRIBUTING.md. Only /development is
// checked here; /alpha and /beta suffixes are also permitted by the rules.
const identifier = /^[A-Za-z_][A-Za-z0-9_]*$/;
const maturitySuffix = /\/development$/;
const pascalCaseTypeName = /^[A-Z][A-Za-z0-9]*$/;

/**
 * Run all source-schema modeling-rule validations against `sourceTypes`.
 *
 * Rules enforced: property/enum descriptions, SDK-extension-plugin shape,
 * no inline object subschemas, `defaultBehavior`/`nullBehavior` presence,
 * identifier naming, PascalCase type names.
 *
 * @param sourceTypes array of SourceSchemaType, typically
 *                    `Object.values(sourceTypesByType)` where
 *                    `sourceTypesByType` was produced by
 *                    {@link readSourceTypesByType} from `./load-schema.js`.
 * @returns array of human-readable error messages (empty if valid).
 */
export function validateSourceTypes(sourceTypes) {
    const messages = [];
    sourceTypes.forEach(sourceSchemaType => {
        allPropertiesShouldHaveDescriptions(sourceSchemaType, messages);
        allEnumValuesShouldHaveDescriptions(sourceSchemaType, messages);
        sdkExtensionPluginSchema(sourceSchemaType, messages);
        noSubschemas(sourceSchemaType, messages);
        optionalPropertiesHaveDefaultBehavior(sourceSchemaType, messages);
        namesShouldBeValidIdentifiers(sourceSchemaType, messages);
        typeNamesShouldBePascalCase(sourceSchemaType, messages);
    });
    return messages;
}

function allPropertiesShouldHaveDescriptions(sourceSchemaType, messages) {
    sourceSchemaType.properties.forEach(property => {
        if (!property.schema.description) {
            messages.push(`Please add 'description' to ${sourceSchemaType.type}.${property.property}.`);
        }
    });
}

function allEnumValuesShouldHaveDescriptions(sourceSchemaType, messages) {
    if (!sourceSchemaType.isEnumType()) {
        return;
    }
    const enumDescriptions = sourceSchemaType.schema['enumDescriptions'];
    if (!enumDescriptions) {
        messages.push(`Please add 'enumDescriptions' to ${sourceSchemaType.type}.`);
        return;
    }
    sourceSchemaType.enumValues.forEach(enumValue => {
        if (!enumDescriptions[enumValue]) {
            messages.push(`Please add entry for ${enumValue} to 'enumDescriptions' for ${sourceSchemaType.type}.`);
        }
    });
    Object.keys(enumDescriptions).forEach(enumValue => {
        if (!sourceSchemaType.enumValues.includes(enumValue)) {
            messages.push(`Please remove entry for ${enumValue} from 'enumDescriptions' for ${sourceSchemaType.type}.`);
        }
    });
}

function sdkExtensionPluginSchema(sourceSchemaType, messages) {
    const sdkExtensionPluginAdditionalProperties = JSON.stringify({"type": ["object", "null"]});

    const schema = sourceSchemaType.schema;
    if (!schema['isSdkExtensionPlugin']) {
        return;
    }
    const type = schema['type'];
    if (type !== 'object') {
        messages.push(`Please set 'type' to 'object' for ${sourceSchemaType.type}.`);
    }
    const additionalProperties = schema['additionalProperties'];
    if (JSON.stringify(additionalProperties) !== sdkExtensionPluginAdditionalProperties) {
        messages.push(`Please set 'additionalProperties' to ${sdkExtensionPluginAdditionalProperties} for ${sourceSchemaType.type}.`);
    }
    const minProperties = schema['minProperties'];
    if (minProperties !== 1) {
        messages.push(`Please set 'minProperties' to 1 for ${sourceSchemaType.type}.`);
    }
    const maxProperties = schema['maxProperties'];
    if (maxProperties !== 1) {
        messages.push(`Please set 'maxProperties' to 1 for ${sourceSchemaType.type}.`);
    }
}

function noSubschemas(sourceSchemaType, messages) {
    if (sourceSchemaType.isEnumType()) {
        return;
    }
    sourceSchemaType.properties.forEach(property => {
        property.types.forEach(type => {
            if (type === 'object') {
                messages.push(`Please move subschema for ${sourceSchemaType.type}.${property.property} to top level type in $defs.`)
            }
        });
    });
}

function namesShouldBeValidIdentifiers(sourceSchemaType, messages) {
    const isValidName = name => identifier.test(name.replace(maturitySuffix, ''));
    sourceSchemaType.properties.forEach(property => {
        if (!isValidName(property.property)) {
            messages.push(`Property name '${property.property}' in ${sourceSchemaType.type} must match ${identifier} (optionally followed by a /development maturity suffix)`);
        }
    });
    (sourceSchemaType.enumValues || []).forEach(enumValue => {
        if (typeof enumValue === 'string' && !isValidName(enumValue)) {
            messages.push(`Enum value '${enumValue}' in ${sourceSchemaType.type} must match ${identifier} (optionally followed by a /development maturity suffix)`);
        }
    });
}

function typeNamesShouldBePascalCase(sourceSchemaType, messages) {
    if (!pascalCaseTypeName.test(sourceSchemaType.type)) {
        messages.push(`Type name '${sourceSchemaType.type}' must match ${pascalCaseTypeName} (PascalCase)`);
    }
}

function optionalPropertiesHaveDefaultBehavior(sourceSchemaType, messages) {
    if (sourceSchemaType.isEnumType()) {
        return;
    }
    const required = sourceSchemaType.schema['required'] || [];
    sourceSchemaType.properties
        .filter(property => !required.includes(property.property) && !property.schema['defaultBehavior'])
        .forEach(property => {
            messages.push(`Please add 'defaultBehavior' to optional property ${sourceSchemaType.type}.${property.property}.`);
        });
    sourceSchemaType.properties
        .filter(property => required.includes(property.property))
        .forEach(property => {
            if (property.schema['defaultBehavior']) {
                messages.push(`Please remove 'defaultBehavior' from required property ${sourceSchemaType.type}.${property.property}.`);
            }
            if (property.isNullable && !property.schema['nullBehavior']) {
                messages.push(`Please add 'nullBehavior' to required nullable property ${sourceSchemaType.type}.${property.property}.`);
            }
            if (!property.isNullable && property.schema['nullBehavior']) {
                messages.push(`Please remove 'nullBehavior' from required property ${sourceSchemaType.type}.${property.property}.`);
            }
        });
}
