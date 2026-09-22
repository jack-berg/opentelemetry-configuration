import fs from 'fs';
import {rootTypeName, schemaPath} from "./util.js";
import {readSourceTypesByType} from "./source-schema.js";
import {validateSourceTypes} from "../validate-schema.js";
import {compileSchema} from "../compile-schema.js";

const sourceTypesByType = readSourceTypesByType();

const messages = validateSourceTypes(Object.values(sourceTypesByType));
if (messages.length > 0) {
    messages.forEach(message => console.log(message));
    process.exit(1);
}

const output = compileSchema(sourceTypesByType, rootTypeName);

fs.writeFileSync(schemaPath, JSON.stringify(output, null, 2));
