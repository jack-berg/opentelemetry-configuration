// This project's source schema: binds the generic schema loader to the
// schema/ directory, the OpenTelemetryConfiguration root type, and the
// meta_schema* file-skip convention. Zero-arg helper for use across
// scripts/internal/.

import {metaSchemaFilePrefix, rootTypeName, schemaSourceDirPath} from "./util.js";
import {readSourceTypesByType as readSourceTypesByTypeGeneric} from "../load-schema.js";

export {SourceSchemaType, SourceSchemaProperty, resolveRef} from "../load-schema.js";

const rootTypeFile = 'opentelemetry_configuration.yaml';

export function readSourceTypesByType() {
    return readSourceTypesByTypeGeneric(schemaSourceDirPath, rootTypeName, rootTypeFile, {
        includeFile: file => !file.startsWith(metaSchemaFilePrefix),
    });
}
