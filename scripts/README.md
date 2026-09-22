# scripts/

Two-layer split:

- `scripts/*.js` — generic, reusable modules. Take all inputs as arguments,
  no dependency on this project's paths or conventions. Intended for use both
  by this project (via `scripts/internal/`) and by external callers that
  check this repo out at a pinned ref and import them as ES modules.
- `scripts/internal/*.js` — this project's scripts and helpers. Bind the
  generic modules to `schema/`, `snippets/`, `opentelemetry_configuration.json`,
  etc. Includes the CLI entry points invoked by `npm run` and the `Makefile`
  (`build-schema.js`, `validate-snippets.js`, `generate-markdown.js`,
  `fix-language-implementations.js`). Not intended for external use.

## Generic modules

### `load-schema.js`

Loads source schema YAML files into an in-memory model.

```js
import {readSourceTypesByType} from './load-schema.js';

const sourceTypesByType = readSourceTypesByType(
    '/path/to/schema',              // sourceDir
    'MyRootType',                   // rootTypeName
    'my_root_type.yaml',            // rootTypeFile
    {includeFile: f => !f.startsWith('meta_')}   // optional
);
```

### `validate-schema.js`

Runs the modeling-rule validations documented in
[CONTRIBUTING.md](../CONTRIBUTING.md#schema-modeling-rules) against a loaded
source schema.

```js
import {readSourceTypesByType} from './load-schema.js';
import {validateSourceTypes} from './validate-schema.js';

const sourceTypesByType = readSourceTypesByType(/* ... */);
const messages = validateSourceTypes(Object.values(sourceTypesByType));
if (messages.length > 0) {
    messages.forEach(m => console.error(m));
    process.exit(1);
}
```

### `compile-schema.js`

Bundles a loaded source schema into a single JSON schema document. Does not
validate; call `validateSourceTypes` first if you want the source checked
against the modeling rules.

```js
import {readSourceTypesByType} from './load-schema.js';
import {compileSchema} from './compile-schema.js';

const sourceTypesByType = readSourceTypesByType(/* ... */);
const output = compileSchema(sourceTypesByType, 'MyRootType', {
    bundleId: 'https://example.com/schemas/my-schema/1.0.json',   // optional
});
fs.writeFileSync('out.json', JSON.stringify(output, null, 2));
```

## External callers

This tooling is build-time and consumed by known downstream projects (currently
[semantic-conventions](https://github.com/open-telemetry/semantic-conventions))
which pin this repo at a specific ref. Breaking changes to the module surface
are coordinated with those callers directly rather than gated behind a formal
stability policy.
