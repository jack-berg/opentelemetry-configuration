import fs from "fs";
import yaml from "yaml";
import Ajv from "ajv/dist/2020.js";
import {rootTypeName, schemaPath, snippetsDirPath} from "./util.js";
import {readSourceTypesByType} from "./source-schema.js";

const snippetFileNameFormat = "<JsonSchemaType>_<snake_case_snippet_description>.yaml";
const yamlFileExtension = ".yaml";
const snippetStart = "# SNIPPET_START";

const ajv = new Ajv({ allErrors: true });
const outputSchema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));
ajv.addSchema(outputSchema);

const sourceTypesByType = readSourceTypesByType();

const rootJsonSchemaType = sourceTypesByType[rootTypeName];
const rootJsonSchemaTypeRef = computeJsonSchemaTypeRef(rootJsonSchemaType);

const messages = [];

readSnippets()
    .forEach(snippet => {
        const rootValidator = ajv.getSchema(rootJsonSchemaTypeRef);
        if (!rootValidator) {
            throw new Error(`Unable to resolve root schema for JSON schema type ref: ${rootJsonSchemaTypeRef}`);
        }

        const snippetJsonSchemaType = sourceTypesByType[snippet.jsonSchemaType];
        if (!snippetJsonSchemaType) {
            messages.push(`Error validating snippet ${snippet.file}. Resolved JSON schema type not found: ${snippet.jsonSchemaType}`);
            return;
        }
        const snippetTypeRef = computeJsonSchemaTypeRef(snippetJsonSchemaType);
        const snippetValidator = ajv.getSchema(snippetTypeRef);
        if (!snippetValidator) {
            messages.push(`Error validating snippet ${snippet.file}. Unable to resolve schema for JSON schema type ref: ${snippetTypeRef}`);
            return;
        }

        // Validate the snippet against the specific schema first; if invalid,
        // skip the whole-file check to avoid duplicate errors.
        if (!validate(snippet.file, snippetValidator, snippetTypeRef, snippet.parsedSnippetContent)) {
            return;
        }

        validate(snippet.file, rootValidator, rootJsonSchemaTypeRef, snippet.parsedFullContent);
    });

if (messages.length > 0) {
    messages.forEach(message => console.log(message));
    process.exit(1);
} else {
    console.log("All snippets are valid.");
    process.exit(0);
}

function readSnippets() {
    return fs.readdirSync(snippetsDirPath)
        .filter(file => file.endsWith(yamlFileExtension))
        .map(file => {
            const fileParts = file.split('_');
            if (fileParts.length < 2) {
                throw new Error(`Invalid snippet file name: ${file}. File names follow the form ${snippetFileNameFormat}`);
            }
            const jsonSchemaType = fileParts[0];
            fileParts[fileParts.length - 1] = fileParts[fileParts.length - 1].substring(0, fileParts[fileParts.length - 1].indexOf(yamlFileExtension));
            const description = fileParts.slice(1)
                .map(word => (word.charAt(0).toUpperCase() + word.slice(1)))
                .join(" ");

            // Read the full snippet file and extract the section after "# SNIPPET_START":
            // find the marker line, then strip its indentation from each following line.
            const rawFullContent = fs.readFileSync(snippetsDirPath + file, "utf-8");
            const lines = rawFullContent.split("\n");
            const snippetStartLineIndex = lines.findIndex(line => line.indexOf(snippetStart) !== -1);
            if (snippetStartLineIndex === -1) {
                throw new Error(`Snippet file ${file} does not contain ${snippetStart}`);
            }
            const snippetStartLine = lines[snippetStartLineIndex];
            const snippetStartIndentation = snippetStartLine.indexOf(snippetStart);
            const rawSnippetContent = lines.splice(snippetStartLineIndex + 1).map(line => line.substring(snippetStartIndentation)).join("\n");

            return {
                file,
                description,
                jsonSchemaType,
                rawFullContent,
                parsedFullContent: yaml.parse(rawFullContent),
                rawSnippetContent,
                parsedSnippetContent: yaml.parse(rawSnippetContent),
            };
        });
}

function validate(snippetFile, ajvValidator, ajvRef, data) {
    try {
        const valid = ajvValidator(data);
        if (!valid) {
            messages.push(`Snippet ${snippetFile} failed validation against ref ${ajvRef} with errors:`);
            ajvValidator.errors.forEach(error => messages.push(`  ${formatError(error)}`));
            return false;
        }
        return true;
    } catch (error) {
        messages.push(`Error validating snippet ${snippetFile} against ref ${ajvRef}: ${error.message}`);
        return false;
    }
}

function computeJsonSchemaTypeRef(jsonSchemaType) {
    if (jsonSchemaType.type === rootTypeName) {
        return '';
    }
    return `#/$defs/${jsonSchemaType.type}`;
}

function formatError(error) {
    const path = error.instancePath.replaceAll('\/', '.');
    return `${path} ${error.message}`;
}
