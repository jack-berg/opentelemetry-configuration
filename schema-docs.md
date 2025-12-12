<!-- This file is generated using "make generate-markdown". Do not edit directly. -->

# Overview <a id="overview"></a>


This document is an auto-generated view of the declarative configuration JSON schema and meta schema meant for improved consumability by humans.

* [Types](#types) contains descriptions of all types and properties, with convenient linking between type references. [OpenTelemetryConfiguration](#opentelemetryconfiguration) is the root type and is a good starting point.
* [Experimental Types](#experimental-types) same as [Types](#types) but for experimental types subject to breaking changes.
* [Language Support Status](#language-support-status) provides all the details about each language's support in a single place. (Alternatively, each type definition has a table showing support status across languages.)
* [SDK Extension Plugins](#sdk-extension-plugins) lists all the SDK extension plugin points.

# Types <a id="types"></a>

## Aggregation <a id="aggregation"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`base2_exponential_bucket_histogram`</td><td>[`Base2ExponentialBucketHistogramAggregation`](#base2exponentialbuckethistogramaggregation)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configures the stream to collect data for the exponential histogram metric point, which uses a base-2 exponential formula to determine bucket boundaries and an integer scale parameter to control resolution. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#base2-exponential-bucket-histogram-aggregation for details.</td>
</tr>
<tr>
<td width="5%">`default`</td><td>[`DefaultAggregation`](#defaultaggregation)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configures the stream to use the instrument kind to select an aggregation and advisory parameters to influence aggregation configuration parameters. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#default-aggregation for details.</td>
</tr>
<tr>
<td width="5%">`drop`</td><td>[`DropAggregation`](#dropaggregation)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configures the stream to ignore/drop all instrument measurements. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#drop-aggregation for details.</td>
</tr>
<tr>
<td width="5%">`explicit_bucket_histogram`</td><td>[`ExplicitBucketHistogramAggregation`](#explicitbuckethistogramaggregation)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configures the stream to collect data for the histogram metric point using a set of explicit boundary values for histogram bucketing. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#explicit-bucket-histogram-aggregation for details</td>
</tr>
<tr>
<td width="5%">`last_value`</td><td>[`LastValueAggregation`](#lastvalueaggregation)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configures the stream to collect data using the last measurement. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#last-value-aggregation for details.</td>
</tr>
<tr>
<td width="5%">`sum`</td><td>[`SumAggregation`](#sumaggregation)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configures the stream to collect the arithmetic sum of measurement values. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#sum-aggregation for details.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `base2_exponential_bucket_histogram` | supported | unknown | supported | unknown |
| `default` | supported | unknown | supported | unknown |
| `drop` | supported | unknown | supported | unknown |
| `explicit_bucket_histogram` | supported | unknown | supported | unknown |
| `last_value` | supported | unknown | supported | unknown |
| `sum` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`ViewStream.aggregation`](#viewstream)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "default": {
      "$ref": "#/$defs/DefaultAggregation"
    },
    "drop": {
      "$ref": "#/$defs/DropAggregation"
    },
    "explicit_bucket_histogram": {
      "$ref": "#/$defs/ExplicitBucketHistogramAggregation"
    },
    "base2_exponential_bucket_histogram": {
      "$ref": "#/$defs/Base2ExponentialBucketHistogramAggregation"
    },
    "last_value": {
      "$ref": "#/$defs/LastValueAggregation"
    },
    "sum": {
      "$ref": "#/$defs/SumAggregation"
    }
  }
}</pre>
</details>

## AlwaysOffSampler <a id="alwaysoffsampler"></a>

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Sampler.always_off`](#sampler)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## AlwaysOnSampler <a id="alwaysonsampler"></a>

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Sampler.always_on`](#sampler)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## AttributeLimits <a id="attributelimits"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`attribute_count_limit`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 128 is used.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure max attribute count. <br>Value must be non-negative.<br></td>
</tr>
<tr>
<td width="5%">`attribute_value_length_limit`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, there is no limit.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure max attribute value size. <br>Value must be non-negative.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `attribute_count_limit` | supported | unknown | supported | unknown |
| `attribute_value_length_limit` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OpenTelemetryConfiguration.attribute_limits`](#opentelemetryconfiguration)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/opentelemetry_configuration.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "attribute_value_length_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "attribute_count_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    }
  }
}</pre>
</details>

## AttributeNameValue <a id="attributenamevalue"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`name`</td><td>`string`</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">The attribute name.<br></td>
</tr>
<tr>
<td width="5%">`type`</td><td>[`AttributeType`](#attributetype)</td><td>`false`</td><td>If omitted, string is used.</td><td>No constraints.</td><td width="20%">The attribute type.<br></td>
</tr>
<tr>
<td width="5%">`value`</td><td>`oneOf`</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">The attribute value.<br>The type of value must match .type.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `name` | supported | unknown | supported | unknown |
| `type` | supported | unknown | supported | unknown |
| `value` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["name","value"]`

Usages:

* [`Resource.attributes`](#resource)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "name": {
      "type": "string"
    },
    "value": {
      "oneOf": [
        {
          "type": "string"
        },
        {
          "type": "number"
        },
        {
          "type": "boolean"
        },
        {
          "type": "null"
        },
        {
          "type": "array",
          "items": {
            "type": "string"
          },
          "minItems": 1
        },
        {
          "type": "array",
          "items": {
            "type": "boolean"
          },
          "minItems": 1
        },
        {
          "type": "array",
          "items": {
            "type": "number"
          },
          "minItems": 1
        }
      ]
    },
    "type": {
      "$ref": "#/$defs/AttributeType"
    }
  },
  "required": [
    "name",
    "value"
  ]
}</pre>
</details>

## AttributeType <a id="attributetype"></a>

This is a enum type.

| Value | Description |
|---|---|
| `bool` | Boolean attribute value. |
| `bool_array` | Boolean array attribute value. |
| `double` | Double attribute value. |
| `double_array` | Double array attribute value. |
| `int` | Integer attribute value. |
| `int_array` | Integer array attribute value. |
| `string` | String attribute value. |
| `string_array` | String array attribute value. |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `bool` | supported | unknown | supported | unknown |
| `bool_array` | supported | unknown | supported | unknown |
| `double` | supported | unknown | supported | unknown |
| `double_array` | supported | unknown | supported | unknown |
| `int` | supported | unknown | supported | unknown |
| `int_array` | supported | unknown | supported | unknown |
| `string` | supported | unknown | supported | unknown |
| `string_array` | supported | unknown | supported | unknown |
</details>

No constraints.

Usages:

* [`AttributeNameValue.type`](#attributenamevalue)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.yaml)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "string",
    "bool",
    "int",
    "double",
    "string_array",
    "bool_array",
    "int_array",
    "double_array"
  ]
}</pre>
</details>

## B3MultiPropagator <a id="b3multipropagator"></a>

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TextMapPropagator.b3multi`](#textmappropagator)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/propagator.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## B3Propagator <a id="b3propagator"></a>

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TextMapPropagator.b3`](#textmappropagator)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/propagator.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## BaggagePropagator <a id="baggagepropagator"></a>

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TextMapPropagator.baggage`](#textmappropagator)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/propagator.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## Base2ExponentialBucketHistogramAggregation <a id="base2exponentialbuckethistogramaggregation"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`max_scale`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 20 is used.</td><td>* `minimum`: `-10`<br>* `maximum`: `20`<br></td><td width="20%">Configure the max scale factor.</td>
</tr>
<tr>
<td width="5%">`max_size`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 160 is used.</td><td>* `minimum`: `2`<br></td><td width="20%">Configure the maximum number of buckets in each of the positive and negative ranges, not counting the special zero bucket.</td>
</tr>
<tr>
<td width="5%">`record_min_max`</td><td>one of:<br>* `boolean`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, true is used.</td><td>No constraints.</td><td width="20%">Configure whether or not to record min and max.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `max_scale` | supported | unknown | supported | unknown |
| `max_size` | supported | unknown | supported | unknown |
| `record_min_max` | supported | unknown | not_implemented | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Aggregation.base2_exponential_bucket_histogram`](#aggregation)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "max_scale": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": -10,
      "maximum": 20
    },
    "max_size": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 2
    },
    "record_min_max": {
      "type": [
        "boolean",
        "null"
      ]
    }
  }
}</pre>
</details>

## BatchLogRecordProcessor <a id="batchlogrecordprocessor"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`export_timeout`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 30000 is used.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br></td>
</tr>
<tr>
<td width="5%">`exporter`</td><td>[`LogRecordExporter`](#logrecordexporter)</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">Configure exporter.</td>
</tr>
<tr>
<td width="5%">`max_export_batch_size`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 512 is used.</td><td>* `exclusiveMinimum`: `0`<br></td><td width="20%">Configure maximum batch size. Value must be positive.<br></td>
</tr>
<tr>
<td width="5%">`max_queue_size`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 2048 is used.</td><td>* `exclusiveMinimum`: `0`<br></td><td width="20%">Configure maximum queue size. Value must be positive.<br></td>
</tr>
<tr>
<td width="5%">`schedule_delay`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 1000 is used.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure delay interval (in milliseconds) between two consecutive exports. <br>Value must be non-negative.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `export_timeout` | supported | unknown | supported | unknown |
| `exporter` | supported | unknown | supported | unknown |
| `max_export_batch_size` | supported | unknown | supported | unknown |
| `max_queue_size` | supported | unknown | supported | unknown |
| `schedule_delay` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`LogRecordProcessor.batch`](#logrecordprocessor)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "schedule_delay": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "export_timeout": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "max_queue_size": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "max_export_batch_size": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "exporter": {
      "$ref": "#/$defs/LogRecordExporter"
    }
  },
  "required": [
    "exporter"
  ]
}</pre>
</details>

## BatchSpanProcessor <a id="batchspanprocessor"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`export_timeout`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 30000 is used.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br></td>
</tr>
<tr>
<td width="5%">`exporter`</td><td>[`SpanExporter`](#spanexporter)</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">Configure exporter.</td>
</tr>
<tr>
<td width="5%">`max_export_batch_size`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 512 is used.</td><td>* `exclusiveMinimum`: `0`<br></td><td width="20%">Configure maximum batch size. Value must be positive.<br></td>
</tr>
<tr>
<td width="5%">`max_queue_size`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 2048 is used.</td><td>* `exclusiveMinimum`: `0`<br></td><td width="20%">Configure maximum queue size. Value must be positive.<br></td>
</tr>
<tr>
<td width="5%">`schedule_delay`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 5000 is used.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure delay interval (in milliseconds) between two consecutive exports. <br>Value must be non-negative.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `export_timeout` | supported | unknown | supported | unknown |
| `exporter` | supported | unknown | supported | unknown |
| `max_export_batch_size` | supported | unknown | supported | unknown |
| `max_queue_size` | supported | unknown | supported | unknown |
| `schedule_delay` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`SpanProcessor.batch`](#spanprocessor)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "schedule_delay": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "export_timeout": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "max_queue_size": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "max_export_batch_size": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "exporter": {
      "$ref": "#/$defs/SpanExporter"
    }
  },
  "required": [
    "exporter"
  ]
}</pre>
</details>

## CardinalityLimits <a id="cardinalitylimits"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`counter`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, the value from .default is used.</td><td>* `exclusiveMinimum`: `0`<br></td><td width="20%">Configure default cardinality limit for counter instruments.<br></td>
</tr>
<tr>
<td width="5%">`default`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 2000 is used.</td><td>* `exclusiveMinimum`: `0`<br></td><td width="20%">Configure default cardinality limit for all instrument types.<br>Instrument-specific cardinality limits take priority. <br></td>
</tr>
<tr>
<td width="5%">`gauge`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, the value from .default is used.</td><td>* `exclusiveMinimum`: `0`<br></td><td width="20%">Configure default cardinality limit for gauge instruments.<br></td>
</tr>
<tr>
<td width="5%">`histogram`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, the value from .default is used.</td><td>* `exclusiveMinimum`: `0`<br></td><td width="20%">Configure default cardinality limit for histogram instruments.<br></td>
</tr>
<tr>
<td width="5%">`observable_counter`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, the value from .default is used.</td><td>* `exclusiveMinimum`: `0`<br></td><td width="20%">Configure default cardinality limit for observable_counter instruments.<br></td>
</tr>
<tr>
<td width="5%">`observable_gauge`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, the value from .default is used.</td><td>* `exclusiveMinimum`: `0`<br></td><td width="20%">Configure default cardinality limit for observable_gauge instruments.<br></td>
</tr>
<tr>
<td width="5%">`observable_up_down_counter`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, the value from .default is used.</td><td>* `exclusiveMinimum`: `0`<br></td><td width="20%">Configure default cardinality limit for observable_up_down_counter instruments.<br></td>
</tr>
<tr>
<td width="5%">`up_down_counter`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, the value from .default is used.</td><td>* `exclusiveMinimum`: `0`<br></td><td width="20%">Configure default cardinality limit for up_down_counter instruments.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `counter` | not_implemented | unknown | supported | unknown |
| `default` | not_implemented | unknown | supported | unknown |
| `gauge` | not_implemented | unknown | supported | unknown |
| `histogram` | not_implemented | unknown | supported | unknown |
| `observable_counter` | not_implemented | unknown | supported | unknown |
| `observable_gauge` | not_implemented | unknown | supported | unknown |
| `observable_up_down_counter` | not_implemented | unknown | supported | unknown |
| `up_down_counter` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PeriodicMetricReader.cardinality_limits`](#periodicmetricreader)
* [`PullMetricReader.cardinality_limits`](#pullmetricreader)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "default": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "counter": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "gauge": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "histogram": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "observable_counter": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "observable_gauge": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "observable_up_down_counter": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "up_down_counter": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    }
  }
}</pre>
</details>

## ConsoleExporter <a id="consoleexporter"></a>

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LogRecordExporter.console`](#logrecordexporter)
* [`SpanExporter.console`](#spanexporter)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## ConsoleMetricExporter <a id="consolemetricexporter"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`default_histogram_aggregation`</td><td>[`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation)</td><td>`false`</td><td>If omitted, explicit_bucket_histogram is used.</td><td>No constraints.</td><td width="20%">Configure default histogram aggregation.<br></td>
</tr>
<tr>
<td width="5%">`temporality_preference`</td><td>[`ExporterTemporalityPreference`](#exportertemporalitypreference)</td><td>`false`</td><td>If omitted, cumulative is used.</td><td>No constraints.</td><td width="20%">Configure temporality preference.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `default_histogram_aggregation` | supported | unknown | not_implemented | unknown |
| `temporality_preference` | supported | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PushMetricExporter.console`](#pushmetricexporter)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "temporality_preference": {
      "$ref": "#/$defs/ExporterTemporalityPreference"
    },
    "default_histogram_aggregation": {
      "$ref": "#/$defs/ExporterDefaultHistogramAggregation"
    }
  }
}</pre>
</details>

## DefaultAggregation <a id="defaultaggregation"></a>

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Aggregation.default`](#aggregation)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## Distribution <a id="distribution"></a>

No properties.

Constraints: 

* `additionalProperties`: `{"type":"object"}`
* `minProperties`: `1`

Usages:

* [`OpenTelemetryConfiguration.distribution`](#opentelemetryconfiguration)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/opentelemetry_configuration.yaml)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": "object"
  },
  "minProperties": 1
}</pre>
</details>

## DropAggregation <a id="dropaggregation"></a>

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Aggregation.drop`](#aggregation)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## ExemplarFilter <a id="exemplarfilter"></a>

This is a enum type.

| Value | Description |
|---|---|
| `always_off` | ExemplarFilter which makes no measurements eligible for being an Exemplar. |
| `always_on` | ExemplarFilter which makes all measurements eligible for being an Exemplar. |
| `trace_based` | ExemplarFilter which makes measurements recorded in the context of a sampled parent span eligible for being an Exemplar. |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `always_off` | not_implemented | unknown | supported | unknown |
| `always_on` | not_implemented | unknown | supported | unknown |
| `trace_based` | not_implemented | unknown | supported | unknown |
</details>

No constraints.

Usages:

* [`MeterProvider.exemplar_filter`](#meterprovider)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "always_on",
    "always_off",
    "trace_based"
  ]
}</pre>
</details>

## ExplicitBucketHistogramAggregation <a id="explicitbuckethistogramaggregation"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`boundaries`</td><td>`array` of `number`</td><td>`false`</td><td>If omitted, [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500, 5000, 7500, 10000] is used.</td><td>* `minItems`: `0`<br></td><td width="20%">Configure bucket boundaries.<br></td>
</tr>
<tr>
<td width="5%">`record_min_max`</td><td>one of:<br>* `boolean`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, true is used.</td><td>No constraints.</td><td width="20%">Configure record min and max.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `boundaries` | supported | unknown | supported | unknown |
| `record_min_max` | supported | unknown | not_implemented | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Aggregation.explicit_bucket_histogram`](#aggregation)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "boundaries": {
      "type": "array",
      "minItems": 0,
      "items": {
        "type": "number"
      }
    },
    "record_min_max": {
      "type": [
        "boolean",
        "null"
      ]
    }
  }
}</pre>
</details>

## ExporterDefaultHistogramAggregation <a id="exporterdefaulthistogramaggregation"></a>

This is a enum type.

| Value | Description |
|---|---|
| `base2_exponential_bucket_histogram` | Use base2 exponential histogram as the default aggregation for histogram instruments. |
| `explicit_bucket_histogram` | Use explicit bucket histogram as the default aggregation for histogram instruments. |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `base2_exponential_bucket_histogram` | supported | unknown | supported | unknown |
| `explicit_bucket_histogram` | supported | unknown | supported | unknown |
</details>

No constraints.

Usages:

* [`OtlpHttpMetricExporter.default_histogram_aggregation`](#otlphttpmetricexporter)
* [`OtlpGrpcMetricExporter.default_histogram_aggregation`](#otlpgrpcmetricexporter)
* [`ExperimentalOtlpFileMetricExporter.default_histogram_aggregation`](#experimentalotlpfilemetricexporter)
* [`ConsoleMetricExporter.default_histogram_aggregation`](#consolemetricexporter)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "explicit_bucket_histogram",
    "base2_exponential_bucket_histogram"
  ]
}</pre>
</details>

## ExporterTemporalityPreference <a id="exportertemporalitypreference"></a>

This is a enum type.

| Value | Description |
|---|---|
| `cumulative` | Use cumulative aggregation temporality for all instrument types. |
| `delta` | Use delta aggregation for all instrument types except up down counter and asynchronous up down counter. |
| `low_memory` | Use delta aggregation temporality for counter and histogram instrument types. Use cumulative aggregation temporality for all other instrument types. |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `cumulative` | supported | unknown | supported | unknown |
| `delta` | supported | unknown | supported | unknown |
| `low_memory` | supported | unknown | supported | unknown |
</details>

No constraints.

Usages:

* [`OtlpHttpMetricExporter.temporality_preference`](#otlphttpmetricexporter)
* [`OtlpGrpcMetricExporter.temporality_preference`](#otlpgrpcmetricexporter)
* [`ExperimentalOtlpFileMetricExporter.temporality_preference`](#experimentalotlpfilemetricexporter)
* [`ConsoleMetricExporter.temporality_preference`](#consolemetricexporter)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "cumulative",
    "delta",
    "low_memory"
  ]
}</pre>
</details>

## GrpcTls <a id="grpctls"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`ca_file`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, system default certificate verification is used for secure connections.</td><td>No constraints.</td><td width="20%">Configure certificate used to verify a server's TLS credentials. <br>Absolute path to certificate file in PEM format.<br></td>
</tr>
<tr>
<td width="5%">`cert_file`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, mTLS is not used.</td><td>No constraints.</td><td width="20%">Configure mTLS client certificate. <br>Absolute path to client certificate file in PEM format. If set, .client_key must also be set.<br></td>
</tr>
<tr>
<td width="5%">`insecure`</td><td>one of:<br>* `boolean`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, false is used.</td><td>No constraints.</td><td width="20%">Configure client transport security for the exporter's connection. <br>Only applicable when .endpoint is provided without http or https scheme. Implementations may choose to ignore .insecure.<br></td>
</tr>
<tr>
<td width="5%">`key_file`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, mTLS is not used.</td><td>No constraints.</td><td width="20%">Configure mTLS private client key. <br>Absolute path to client key file in PEM format. If set, .client_certificate must also be set.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `ca_file` | unknown | unknown | not_implemented | unknown |
| `cert_file` | unknown | unknown | not_implemented | unknown |
| `insecure` | unknown | unknown | not_implemented | unknown |
| `key_file` | unknown | unknown | not_implemented | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OtlpGrpcExporter.tls`](#otlpgrpcexporter)
* [`OtlpGrpcMetricExporter.tls`](#otlpgrpcmetricexporter)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "ca_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "key_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "cert_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "insecure": {
      "type": [
        "boolean",
        "null"
      ]
    }
  }
}</pre>
</details>

## HttpTls <a id="httptls"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`ca_file`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, system default certificate verification is used for secure connections.</td><td>No constraints.</td><td width="20%">Configure certificate used to verify a server's TLS credentials. <br>Absolute path to certificate file in PEM format.<br></td>
</tr>
<tr>
<td width="5%">`cert_file`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, mTLS is not used.</td><td>No constraints.</td><td width="20%">Configure mTLS client certificate. <br>Absolute path to client certificate file in PEM format. If set, .client_key must also be set.<br></td>
</tr>
<tr>
<td width="5%">`key_file`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, mTLS is not used.</td><td>No constraints.</td><td width="20%">Configure mTLS private client key. <br>Absolute path to client key file in PEM format. If set, .client_certificate must also be set.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `ca_file` | unknown | unknown | not_implemented | unknown |
| `cert_file` | unknown | unknown | not_implemented | unknown |
| `key_file` | unknown | unknown | not_implemented | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OtlpHttpExporter.tls`](#otlphttpexporter)
* [`OtlpHttpMetricExporter.tls`](#otlphttpmetricexporter)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "ca_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "key_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "cert_file": {
      "type": [
        "string",
        "null"
      ]
    }
  }
}</pre>
</details>

## IncludeExclude <a id="includeexclude"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`excluded`</td><td>`array` of `string`</td><td>`false`</td><td>If omitted, .included attributes are included.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure list of value patterns to exclude. Applies after .included (i.e. excluded has higher priority than included).<br>Values are evaluated to match as follows:<br> * If the value exactly matches.<br> * If the value matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br></td>
</tr>
<tr>
<td width="5%">`included`</td><td>`array` of `string`</td><td>`false`</td><td>If omitted, all values are included.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure list of value patterns to include.<br>Values are evaluated to match as follows:<br> * If the value exactly matches.<br> * If the value matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `excluded` | supported | unknown | supported | unknown |
| `included` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalPrometheusMetricExporter.with_resource_constant_labels`](#experimentalprometheusmetricexporter)
* [`ViewStream.attribute_keys`](#viewstream)
* [`ExperimentalResourceDetection.attributes`](#experimentalresourcedetection)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "included": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "string"
      }
    },
    "excluded": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "string"
      }
    }
  }
}</pre>
</details>

## InstrumentType <a id="instrumenttype"></a>

This is a enum type.

| Value | Description |
|---|---|
| `counter` | Synchronous counter instruments. |
| `gauge` | Synchronous gauge instruments. |
| `histogram` | Synchronous histogram instruments. |
| `observable_counter` | Asynchronous counter instruments. |
| `observable_gauge` | Asynchronous gauge instruments. |
| `observable_up_down_counter` | Asynchronous up down counter instruments. |
| `up_down_counter` | Synchronous up down counter instruments. |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `counter` | supported | unknown | supported | unknown |
| `gauge` | supported | unknown | supported | unknown |
| `histogram` | supported | unknown | supported | unknown |
| `observable_counter` | supported | unknown | supported | unknown |
| `observable_gauge` | supported | unknown | supported | unknown |
| `observable_up_down_counter` | supported | unknown | supported | unknown |
| `up_down_counter` | supported | unknown | supported | unknown |
</details>

No constraints.

Usages:

* [`ViewSelector.instrument_type`](#viewselector)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "counter",
    "gauge",
    "histogram",
    "observable_counter",
    "observable_gauge",
    "observable_up_down_counter",
    "up_down_counter"
  ]
}</pre>
</details>

## JaegerPropagator <a id="jaegerpropagator"></a>

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TextMapPropagator.jaeger`](#textmappropagator)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/propagator.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## LastValueAggregation <a id="lastvalueaggregation"></a>

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Aggregation.last_value`](#aggregation)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## LoggerProvider <a id="loggerprovider"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`limits`</td><td>[`LogRecordLimits`](#logrecordlimits)</td><td>`false`</td><td>If omitted, default values as described in LogRecordLimits are used.</td><td>No constraints.</td><td width="20%">Configure log record limits. See also attribute_limits.</td>
</tr>
<tr>
<td width="5%">`processors`</td><td>`array` of [`LogRecordProcessor`](#logrecordprocessor)</td><td>`true`</td><td>Property is required and must be non-null.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure log record processors.</td>
</tr>
<tr>
<td width="5%">`logger_configurator/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features).</td><td>[`ExperimentalLoggerConfigurator`](#experimentalloggerconfigurator)</td><td>`false`</td><td>If omitted, all loggers use default values as described in ExperimentalLoggerConfig.</td><td>No constraints.</td><td width="20%">Configure loggers.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `limits` | supported | unknown | supported | unknown |
| `processors` | supported | unknown | supported | unknown |
| `logger_configurator/development` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["processors"]`

Usages:

* [`OpenTelemetryConfiguration.logger_provider`](#opentelemetryconfiguration)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "processors": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/LogRecordProcessor"
      }
    },
    "limits": {
      "$ref": "#/$defs/LogRecordLimits"
    },
    "logger_configurator/development": {
      "$ref": "#/$defs/ExperimentalLoggerConfigurator"
    }
  },
  "required": [
    "processors"
  ]
}</pre>
</details>

## LogRecordExporter <a id="logrecordexporter"></a>

`LogRecordExporter` is an [SDK extension plugin](#sdk-extension-plugins).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`console`</td><td>[`ConsoleExporter`](#consoleexporter)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure exporter to be console.</td>
</tr>
<tr>
<td width="5%">`otlp_grpc`</td><td>[`OtlpGrpcExporter`](#otlpgrpcexporter)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure exporter to be OTLP with gRPC transport.</td>
</tr>
<tr>
<td width="5%">`otlp_http`</td><td>[`OtlpHttpExporter`](#otlphttpexporter)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure exporter to be OTLP with HTTP transport.</td>
</tr>
<tr>
<td width="5%">`otlp_file/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features).</td><td>[`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure exporter to be OTLP with file transport.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `console` | supported | unknown | supported | unknown |
| `otlp_grpc` | supported | unknown | supported | unknown |
| `otlp_http` | supported | unknown | supported | unknown |
| `otlp_file/development` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`SimpleLogRecordProcessor.exporter`](#simplelogrecordprocessor)
* [`BatchLogRecordProcessor.exporter`](#batchlogrecordprocessor)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "otlp_http": {
      "$ref": "#/$defs/OtlpHttpExporter"
    },
    "otlp_grpc": {
      "$ref": "#/$defs/OtlpGrpcExporter"
    },
    "otlp_file/development": {
      "$ref": "#/$defs/ExperimentalOtlpFileExporter"
    },
    "console": {
      "$ref": "#/$defs/ConsoleExporter"
    }
  }
}</pre>
</details>

## LogRecordLimits <a id="logrecordlimits"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`attribute_count_limit`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 128 is used.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure max attribute count. Overrides .attribute_limits.attribute_count_limit. <br>Value must be non-negative.<br></td>
</tr>
<tr>
<td width="5%">`attribute_value_length_limit`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, there is no limit.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit. <br>Value must be non-negative.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `attribute_count_limit` | supported | unknown | supported | unknown |
| `attribute_value_length_limit` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LoggerProvider.limits`](#loggerprovider)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "attribute_value_length_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "attribute_count_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    }
  }
}</pre>
</details>

## LogRecordProcessor <a id="logrecordprocessor"></a>

`LogRecordProcessor` is an [SDK extension plugin](#sdk-extension-plugins).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`batch`</td><td>[`BatchLogRecordProcessor`](#batchlogrecordprocessor)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure a batch log record processor.</td>
</tr>
<tr>
<td width="5%">`simple`</td><td>[`SimpleLogRecordProcessor`](#simplelogrecordprocessor)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure a simple log record processor.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `batch` | supported | unknown | supported | unknown |
| `simple` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`LoggerProvider.processors`](#loggerprovider)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "batch": {
      "$ref": "#/$defs/BatchLogRecordProcessor"
    },
    "simple": {
      "$ref": "#/$defs/SimpleLogRecordProcessor"
    }
  }
}</pre>
</details>

## MeterProvider <a id="meterprovider"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`exemplar_filter`</td><td>[`ExemplarFilter`](#exemplarfilter)</td><td>`false`</td><td>If omitted, trace_based is used.</td><td>No constraints.</td><td width="20%">Configure the exemplar filter. <br></td>
</tr>
<tr>
<td width="5%">`readers`</td><td>`array` of [`MetricReader`](#metricreader)</td><td>`true`</td><td>Property is required and must be non-null.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure metric readers.</td>
</tr>
<tr>
<td width="5%">`views`</td><td>`array` of [`View`](#view)</td><td>`false`</td><td>If omitted, no views are registered.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure views. <br>Each view has a selector which determines the instrument(s) it applies to, and a configuration for the resulting stream(s).<br></td>
</tr>
<tr>
<td width="5%">`meter_configurator/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features).</td><td>[`ExperimentalMeterConfigurator`](#experimentalmeterconfigurator)</td><td>`false`</td><td>If omitted, all meters use default values as described in ExperimentalMeterConfig.</td><td>No constraints.</td><td width="20%">Configure meters.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `exemplar_filter` | supported | unknown | supported | unknown |
| `readers` | supported | unknown | supported | unknown |
| `views` | supported | unknown | supported | unknown |
| `meter_configurator/development` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["readers"]`

Usages:

* [`OpenTelemetryConfiguration.meter_provider`](#opentelemetryconfiguration)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "readers": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/MetricReader"
      }
    },
    "views": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/View"
      }
    },
    "exemplar_filter": {
      "$ref": "#/$defs/ExemplarFilter"
    },
    "meter_configurator/development": {
      "$ref": "#/$defs/ExperimentalMeterConfigurator"
    }
  },
  "required": [
    "readers"
  ]
}</pre>
</details>

## MetricProducer <a id="metricproducer"></a>

`MetricProducer` is an [SDK extension plugin](#sdk-extension-plugins).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`opencensus`</td><td>[`OpenCensusMetricProducer`](#opencensusmetricproducer)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure metric producer to be opencensus.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `opencensus` | supported | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`PeriodicMetricReader.producers`](#periodicmetricreader)
* [`PullMetricReader.producers`](#pullmetricreader)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "opencensus": {
      "$ref": "#/$defs/OpenCensusMetricProducer"
    }
  }
}</pre>
</details>

## MetricReader <a id="metricreader"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`periodic`</td><td>[`PeriodicMetricReader`](#periodicmetricreader)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure a periodic metric reader.</td>
</tr>
<tr>
<td width="5%">`pull`</td><td>[`PullMetricReader`](#pullmetricreader)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure a pull based metric reader.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `periodic` | supported | unknown | supported | unknown |
| `pull` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`MeterProvider.readers`](#meterprovider)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "periodic": {
      "$ref": "#/$defs/PeriodicMetricReader"
    },
    "pull": {
      "$ref": "#/$defs/PullMetricReader"
    }
  }
}</pre>
</details>

## NameStringValuePair <a id="namestringvaluepair"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`name`</td><td>`string`</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">The name of the pair.</td>
</tr>
<tr>
<td width="5%">`value`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`true`</td><td>Property must be present, but if null the behavior is dependent on usage context.</td><td>No constraints.</td><td width="20%">The value of the pair.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `name` | supported | unknown | supported | unknown |
| `value` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["name","value"]`

Usages:

* [`OtlpHttpExporter.headers`](#otlphttpexporter)
* [`OtlpGrpcExporter.headers`](#otlpgrpcexporter)
* [`OtlpHttpMetricExporter.headers`](#otlphttpmetricexporter)
* [`OtlpGrpcMetricExporter.headers`](#otlpgrpcmetricexporter)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "name": {
      "type": "string"
    },
    "value": {
      "type": [
        "string",
        "null"
      ]
    }
  },
  "required": [
    "name",
    "value"
  ]
}</pre>
</details>

## OpenCensusMetricProducer <a id="opencensusmetricproducer"></a>

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`MetricProducer.opencensus`](#metricproducer)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## OpenTelemetryConfiguration <a id="opentelemetryconfiguration"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`attribute_limits`</td><td>[`AttributeLimits`](#attributelimits)</td><td>`false`</td><td>If omitted, default values as described in AttributeLimits are used.</td><td>No constraints.</td><td width="20%">Configure general attribute limits. See also tracer_provider.limits, logger_provider.limits.<br></td>
</tr>
<tr>
<td width="5%">`disabled`</td><td>one of:<br>* `boolean`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, false is used.</td><td>No constraints.</td><td width="20%">Configure if the SDK is disabled or not.<br></td>
</tr>
<tr>
<td width="5%">`distribution`</td><td>[`Distribution`](#distribution)</td><td>`false`</td><td>If omitted, distribution defaults are used.</td><td>No constraints.</td><td width="20%">Defines configuration parameters specific to a particular OpenTelemetry distribution or vendor.<br>This section provides a standardized location for distribution-specific settings<br>that are not part of the OpenTelemetry configuration model.<br>It allows vendors to expose their own extensions and general configuration options.<br></td>
</tr>
<tr>
<td width="5%">`file_format`</td><td>`string`</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">The file format version.<br>Represented as a string including the semver major, minor version numbers (and optionally the meta tag). For example: "0.4", "1.0-rc.2", "1.0" (after stable release).<br>See https://github.com/open-telemetry/opentelemetry-configuration/blob/main/VERSIONING.md for more details.<br>The yaml format is documented at https://github.com/open-telemetry/opentelemetry-configuration/tree/main/schema<br></td>
</tr>
<tr>
<td width="5%">`log_level`</td><td>[`SeverityNumber`](#severitynumber)</td><td>`false`</td><td>If omitted, INFO is used.</td><td>No constraints.</td><td width="20%">Configure the log level of the internal logger used by the SDK.<br></td>
</tr>
<tr>
<td width="5%">`logger_provider`</td><td>[`LoggerProvider`](#loggerprovider)</td><td>`false`</td><td>If omitted, a noop logger provider is used.</td><td>No constraints.</td><td width="20%">Configure logger provider.<br></td>
</tr>
<tr>
<td width="5%">`meter_provider`</td><td>[`MeterProvider`](#meterprovider)</td><td>`false`</td><td>If omitted, a noop meter provider is used.</td><td>No constraints.</td><td width="20%">Configure meter provider.<br></td>
</tr>
<tr>
<td width="5%">`propagator`</td><td>[`Propagator`](#propagator)</td><td>`false`</td><td>If omitted, a noop propagator is used.</td><td>No constraints.</td><td width="20%">Configure text map context propagators.<br></td>
</tr>
<tr>
<td width="5%">`resource`</td><td>[`Resource`](#resource)</td><td>`false`</td><td>If omitted, the default resource is used.</td><td>No constraints.</td><td width="20%">Configure resource for all signals.<br></td>
</tr>
<tr>
<td width="5%">`tracer_provider`</td><td>[`TracerProvider`](#tracerprovider)</td><td>`false`</td><td>If omitted, a noop tracer provider is used.</td><td>No constraints.</td><td width="20%">Configure tracer provider.<br></td>
</tr>
<tr>
<td width="5%">`instrumentation/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features).</td><td>[`ExperimentalInstrumentation`](#experimentalinstrumentation)</td><td>`false`</td><td>If omitted, instrumentation defaults are used.</td><td>No constraints.</td><td width="20%">Configure instrumentation.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `attribute_limits` | supported | unknown | supported | unknown |
| `disabled` | supported | unknown | supported | unknown |
| `distribution` | supported | unknown | supported | unknown |
| `file_format` | supported | unknown | supported | unknown |
| `log_level` | supported | unknown | not_implemented | unknown |
| `logger_provider` | supported | unknown | supported | unknown |
| `meter_provider` | supported | unknown | supported | unknown |
| `propagator` | supported | unknown | supported | unknown |
| `resource` | supported | unknown | supported | unknown |
| `tracer_provider` | supported | unknown | supported | unknown |
| `instrumentation/development` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `true`
* `required`: `["file_format"]`

No usages.

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/opentelemetry_configuration.yaml)
<pre>{
  "$id": "https://opentelemetry.io/otelconfig/opentelemetry_configuration.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "OpenTelemetryConfiguration",
  "type": "object",
  "additionalProperties": true,
  "properties": {
    "file_format": {
      "type": "string"
    },
    "disabled": {
      "type": [
        "boolean",
        "null"
      ]
    },
    "log_level": {
      "$ref": "#/$defs/SeverityNumber"
    },
    "attribute_limits": {
      "$ref": "#/$defs/AttributeLimits"
    },
    "logger_provider": {
      "$ref": "#/$defs/LoggerProvider"
    },
    "meter_provider": {
      "$ref": "#/$defs/MeterProvider"
    },
    "propagator": {
      "$ref": "#/$defs/Propagator"
    },
    "tracer_provider": {
      "$ref": "#/$defs/TracerProvider"
    },
    "resource": {
      "$ref": "#/$defs/Resource"
    },
    "instrumentation/development": {
      "$ref": "#/$defs/ExperimentalInstrumentation"
    },
    "distribution": {
      "$ref": "#/$defs/Distribution"
    }
  },
  "required": [
    "file_format"
  ]
}</pre>
</details>

## OpenTracingPropagator <a id="opentracingpropagator"></a>

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TextMapPropagator.ottrace`](#textmappropagator)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/propagator.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## OtlpGrpcExporter <a id="otlpgrpcexporter"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`compression`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, none is used.</td><td>No constraints.</td><td width="20%">Configure compression.<br>Known values include: gzip, none. Implementations may support other compression algorithms.<br></td>
</tr>
<tr>
<td width="5%">`endpoint`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, http://localhost:4317 is used.</td><td>No constraints.</td><td width="20%">Configure endpoint.<br></td>
</tr>
<tr>
<td width="5%">`headers`</td><td>`array` of [`NameStringValuePair`](#namestringvaluepair)</td><td>`false`</td><td>If omitted, no headers are added.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br></td>
</tr>
<tr>
<td width="5%">`headers_list`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, no headers are added.</td><td>No constraints.</td><td width="20%">Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br></td>
</tr>
<tr>
<td width="5%">`timeout`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 10000 is used.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br></td>
</tr>
<tr>
<td width="5%">`tls`</td><td>[`GrpcTls`](#grpctls)</td><td>`false`</td><td>If omitted, system default TLS settings are used.</td><td>No constraints.</td><td width="20%">Configure TLS settings for the exporter.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `compression` | supported | unknown | supported | unknown |
| `endpoint` | supported | unknown | supported | unknown |
| `headers` | supported | unknown | supported | unknown |
| `headers_list` | supported | unknown | supported | unknown |
| `timeout` | supported | unknown | supported | unknown |
| `tls` | supported | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LogRecordExporter.otlp_grpc`](#logrecordexporter)
* [`SpanExporter.otlp_grpc`](#spanexporter)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "endpoint": {
      "type": [
        "string",
        "null"
      ]
    },
    "tls": {
      "$ref": "#/$defs/GrpcTls"
    },
    "headers": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/NameStringValuePair"
      }
    },
    "headers_list": {
      "type": [
        "string",
        "null"
      ]
    },
    "compression": {
      "type": [
        "string",
        "null"
      ]
    },
    "timeout": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    }
  }
}</pre>
</details>

## OtlpGrpcMetricExporter <a id="otlpgrpcmetricexporter"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`compression`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, none is used.</td><td>No constraints.</td><td width="20%">Configure compression.<br>Known values include: gzip, none. Implementations may support other compression algorithms.<br></td>
</tr>
<tr>
<td width="5%">`default_histogram_aggregation`</td><td>[`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation)</td><td>`false`</td><td>If omitted, explicit_bucket_histogram is used.</td><td>No constraints.</td><td width="20%">Configure default histogram aggregation.<br></td>
</tr>
<tr>
<td width="5%">`endpoint`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, http://localhost:4317 is used.</td><td>No constraints.</td><td width="20%">Configure endpoint.<br></td>
</tr>
<tr>
<td width="5%">`headers`</td><td>`array` of [`NameStringValuePair`](#namestringvaluepair)</td><td>`false`</td><td>If omitted, no headers are added.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br></td>
</tr>
<tr>
<td width="5%">`headers_list`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, no headers are added.</td><td>No constraints.</td><td width="20%">Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br></td>
</tr>
<tr>
<td width="5%">`temporality_preference`</td><td>[`ExporterTemporalityPreference`](#exportertemporalitypreference)</td><td>`false`</td><td>If omitted, cumulative is used.</td><td>No constraints.</td><td width="20%">Configure temporality preference.<br></td>
</tr>
<tr>
<td width="5%">`timeout`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 10000 is used.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br></td>
</tr>
<tr>
<td width="5%">`tls`</td><td>[`GrpcTls`](#grpctls)</td><td>`false`</td><td>If omitted, system default TLS settings are used.</td><td>No constraints.</td><td width="20%">Configure TLS settings for the exporter.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `compression` | supported | unknown | supported | unknown |
| `default_histogram_aggregation` | supported | unknown | supported | unknown |
| `endpoint` | supported | unknown | supported | unknown |
| `headers` | supported | unknown | supported | unknown |
| `headers_list` | supported | unknown | supported | unknown |
| `temporality_preference` | supported | unknown | supported | unknown |
| `timeout` | supported | unknown | supported | unknown |
| `tls` | supported | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PushMetricExporter.otlp_grpc`](#pushmetricexporter)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "endpoint": {
      "type": [
        "string",
        "null"
      ]
    },
    "tls": {
      "$ref": "#/$defs/GrpcTls"
    },
    "headers": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/NameStringValuePair"
      }
    },
    "headers_list": {
      "type": [
        "string",
        "null"
      ]
    },
    "compression": {
      "type": [
        "string",
        "null"
      ]
    },
    "timeout": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "temporality_preference": {
      "$ref": "#/$defs/ExporterTemporalityPreference"
    },
    "default_histogram_aggregation": {
      "$ref": "#/$defs/ExporterDefaultHistogramAggregation"
    }
  }
}</pre>
</details>

## OtlpHttpEncoding <a id="otlphttpencoding"></a>

This is a enum type.

| Value | Description |
|---|---|
| `json` | Protobuf JSON encoding. |
| `protobuf` | Protobuf binary encoding. |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `json` | supported | unknown | not_implemented | unknown |
| `protobuf` | supported | unknown | not_implemented | unknown |
</details>

No constraints.

Usages:

* [`OtlpHttpExporter.encoding`](#otlphttpexporter)
* [`OtlpHttpMetricExporter.encoding`](#otlphttpmetricexporter)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.yaml)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "protobuf",
    "json"
  ]
}</pre>
</details>

## OtlpHttpExporter <a id="otlphttpexporter"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`compression`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, none is used.</td><td>No constraints.</td><td width="20%">Configure compression.<br>Known values include: gzip, none. Implementations may support other compression algorithms.<br></td>
</tr>
<tr>
<td width="5%">`encoding`</td><td>[`OtlpHttpEncoding`](#otlphttpencoding)</td><td>`false`</td><td>If omitted, protobuf is used.</td><td>No constraints.</td><td width="20%">Configure the encoding used for messages. <br>Implementations may not support json.<br></td>
</tr>
<tr>
<td width="5%">`endpoint`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, the http://localhost:4318/v1/{signal} (where signal is 'traces', 'logs', or 'metrics') is used.</td><td>No constraints.</td><td width="20%">Configure endpoint, including the signal specific path.<br></td>
</tr>
<tr>
<td width="5%">`headers`</td><td>`array` of [`NameStringValuePair`](#namestringvaluepair)</td><td>`false`</td><td>If omitted, no headers are added.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br></td>
</tr>
<tr>
<td width="5%">`headers_list`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, no headers are added.</td><td>No constraints.</td><td width="20%">Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br></td>
</tr>
<tr>
<td width="5%">`timeout`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 10000 is used.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br></td>
</tr>
<tr>
<td width="5%">`tls`</td><td>[`HttpTls`](#httptls)</td><td>`false`</td><td>If omitted, system default TLS settings are used.</td><td>No constraints.</td><td width="20%">Configure TLS settings for the exporter.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `compression` | supported | unknown | supported | unknown |
| `encoding` | supported | unknown | not_implemented | unknown |
| `endpoint` | supported | unknown | supported | unknown |
| `headers` | supported | unknown | supported | unknown |
| `headers_list` | supported | unknown | supported | unknown |
| `timeout` | supported | unknown | supported | unknown |
| `tls` | supported | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LogRecordExporter.otlp_http`](#logrecordexporter)
* [`SpanExporter.otlp_http`](#spanexporter)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "endpoint": {
      "type": [
        "string",
        "null"
      ]
    },
    "tls": {
      "$ref": "#/$defs/HttpTls"
    },
    "headers": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/NameStringValuePair"
      }
    },
    "headers_list": {
      "type": [
        "string",
        "null"
      ]
    },
    "compression": {
      "type": [
        "string",
        "null"
      ]
    },
    "timeout": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "encoding": {
      "$ref": "#/$defs/OtlpHttpEncoding"
    }
  }
}</pre>
</details>

## OtlpHttpMetricExporter <a id="otlphttpmetricexporter"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`compression`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, none is used.</td><td>No constraints.</td><td width="20%">Configure compression.<br>Known values include: gzip, none. Implementations may support other compression algorithms.<br></td>
</tr>
<tr>
<td width="5%">`default_histogram_aggregation`</td><td>[`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation)</td><td>`false`</td><td>If omitted, explicit_bucket_histogram is used.</td><td>No constraints.</td><td width="20%">Configure default histogram aggregation.<br></td>
</tr>
<tr>
<td width="5%">`encoding`</td><td>[`OtlpHttpEncoding`](#otlphttpencoding)</td><td>`false`</td><td>If omitted, protobuf is used.</td><td>No constraints.</td><td width="20%">Configure the encoding used for messages. <br>Implementations may not support json.<br></td>
</tr>
<tr>
<td width="5%">`endpoint`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, http://localhost:4318/v1/metrics is used.</td><td>No constraints.</td><td width="20%">Configure endpoint.<br></td>
</tr>
<tr>
<td width="5%">`headers`</td><td>`array` of [`NameStringValuePair`](#namestringvaluepair)</td><td>`false`</td><td>If omitted, no headers are added.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br></td>
</tr>
<tr>
<td width="5%">`headers_list`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, no headers are added.</td><td>No constraints.</td><td width="20%">Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br></td>
</tr>
<tr>
<td width="5%">`temporality_preference`</td><td>[`ExporterTemporalityPreference`](#exportertemporalitypreference)</td><td>`false`</td><td>If omitted, cumulative is used.</td><td>No constraints.</td><td width="20%">Configure temporality preference.<br></td>
</tr>
<tr>
<td width="5%">`timeout`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 10000 is used.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br></td>
</tr>
<tr>
<td width="5%">`tls`</td><td>[`HttpTls`](#httptls)</td><td>`false`</td><td>If omitted, system default TLS settings are used.</td><td>No constraints.</td><td width="20%">Configure TLS settings for the exporter.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `compression` | supported | unknown | supported | unknown |
| `default_histogram_aggregation` | supported | unknown | supported | unknown |
| `encoding` | supported | unknown | not_implemented | unknown |
| `endpoint` | supported | unknown | supported | unknown |
| `headers` | supported | unknown | supported | unknown |
| `headers_list` | supported | unknown | supported | unknown |
| `temporality_preference` | supported | unknown | supported | unknown |
| `timeout` | supported | unknown | supported | unknown |
| `tls` | supported | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PushMetricExporter.otlp_http`](#pushmetricexporter)

Snippets:

<details>
<summary>Use Base2 Exponential Histogram</summary>

[Snippet Source File](./snippets/OtlpHttpMetricExporter_use_base2_exponential_histogram.yaml)
```yaml
endpoint: http://localhost:4317
default_histogram_aggregation: base2_exponential_bucket_histogram
```
</details>

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "endpoint": {
      "type": [
        "string",
        "null"
      ]
    },
    "tls": {
      "$ref": "#/$defs/HttpTls"
    },
    "headers": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/NameStringValuePair"
      }
    },
    "headers_list": {
      "type": [
        "string",
        "null"
      ]
    },
    "compression": {
      "type": [
        "string",
        "null"
      ]
    },
    "timeout": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "encoding": {
      "$ref": "#/$defs/OtlpHttpEncoding"
    },
    "temporality_preference": {
      "$ref": "#/$defs/ExporterTemporalityPreference"
    },
    "default_histogram_aggregation": {
      "$ref": "#/$defs/ExporterDefaultHistogramAggregation"
    }
  }
}</pre>
</details>

## ParentBasedSampler <a id="parentbasedsampler"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`local_parent_not_sampled`</td><td>[`Sampler`](#sampler)</td><td>`false`</td><td>If omitted, always_off is used.</td><td>No constraints.</td><td width="20%">Configure local_parent_not_sampled sampler.<br></td>
</tr>
<tr>
<td width="5%">`local_parent_sampled`</td><td>[`Sampler`](#sampler)</td><td>`false`</td><td>If omitted, always_on is used.</td><td>No constraints.</td><td width="20%">Configure local_parent_sampled sampler.<br></td>
</tr>
<tr>
<td width="5%">`remote_parent_not_sampled`</td><td>[`Sampler`](#sampler)</td><td>`false`</td><td>If omitted, always_off is used.</td><td>No constraints.</td><td width="20%">Configure remote_parent_not_sampled sampler.<br></td>
</tr>
<tr>
<td width="5%">`remote_parent_sampled`</td><td>[`Sampler`](#sampler)</td><td>`false`</td><td>If omitted, always_on is used.</td><td>No constraints.</td><td width="20%">Configure remote_parent_sampled sampler.<br></td>
</tr>
<tr>
<td width="5%">`root`</td><td>[`Sampler`](#sampler)</td><td>`false`</td><td>If omitted, always_on is used.</td><td>No constraints.</td><td width="20%">Configure root sampler.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `local_parent_not_sampled` | supported | unknown | supported | unknown |
| `local_parent_sampled` | supported | unknown | supported | unknown |
| `remote_parent_not_sampled` | supported | unknown | supported | unknown |
| `remote_parent_sampled` | supported | unknown | supported | unknown |
| `root` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Sampler.parent_based`](#sampler)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "root": {
      "$ref": "#/$defs/Sampler"
    },
    "remote_parent_sampled": {
      "$ref": "#/$defs/Sampler"
    },
    "remote_parent_not_sampled": {
      "$ref": "#/$defs/Sampler"
    },
    "local_parent_sampled": {
      "$ref": "#/$defs/Sampler"
    },
    "local_parent_not_sampled": {
      "$ref": "#/$defs/Sampler"
    }
  }
}</pre>
</details>

## PeriodicMetricReader <a id="periodicmetricreader"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`cardinality_limits`</td><td>[`CardinalityLimits`](#cardinalitylimits)</td><td>`false`</td><td>If omitted, default values as described in CardinalityLimits are used.</td><td>No constraints.</td><td width="20%">Configure cardinality limits.</td>
</tr>
<tr>
<td width="5%">`exporter`</td><td>[`PushMetricExporter`](#pushmetricexporter)</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">Configure exporter.</td>
</tr>
<tr>
<td width="5%">`interval`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 60000 is used.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure delay interval (in milliseconds) between start of two consecutive exports. <br>Value must be non-negative.<br></td>
</tr>
<tr>
<td width="5%">`producers`</td><td>`array` of [`MetricProducer`](#metricproducer)</td><td>`false`</td><td>If omitted, no metric producers are added.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure metric producers.</td>
</tr>
<tr>
<td width="5%">`timeout`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 30000 is used.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `cardinality_limits` | supported | unknown | supported | unknown |
| `exporter` | supported | unknown | supported | unknown |
| `interval` | supported | unknown | supported | unknown |
| `producers` | supported | unknown | not_implemented | unknown |
| `timeout` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`MetricReader.periodic`](#metricreader)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "interval": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "timeout": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "exporter": {
      "$ref": "#/$defs/PushMetricExporter"
    },
    "producers": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/MetricProducer"
      }
    },
    "cardinality_limits": {
      "$ref": "#/$defs/CardinalityLimits"
    }
  },
  "required": [
    "exporter"
  ]
}</pre>
</details>

## Propagator <a id="propagator"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`composite`</td><td>`array` of [`TextMapPropagator`](#textmappropagator)</td><td>`false`</td><td>If omitted, and .composite_list is omitted or null, a noop propagator is used.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure the propagators in the composite text map propagator. Entries from .composite_list are appended to the list here with duplicates filtered out.<br>Built-in propagator keys include: tracecontext, baggage, b3, b3multi, jaeger, ottrace. Known third party keys include: xray. <br></td>
</tr>
<tr>
<td width="5%">`composite_list`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, and .composite is omitted or null, a noop propagator is used.</td><td>No constraints.</td><td width="20%">Configure the propagators in the composite text map propagator. Entries are appended to .composite with duplicates filtered out.<br>The value is a comma separated list of propagator identifiers matching the format of OTEL_PROPAGATORS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#general-sdk-configuration for details.<br>Built-in propagator identifiers include: tracecontext, baggage, b3, b3multi, jaeger, ottrace. Known third party identifiers include: xray. <br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `composite` | supported | unknown | supported | unknown |
| `composite_list` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OpenTelemetryConfiguration.propagator`](#opentelemetryconfiguration)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/propagator.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "composite": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/TextMapPropagator"
      }
    },
    "composite_list": {
      "type": [
        "string",
        "null"
      ]
    }
  }
}</pre>
</details>

## PullMetricExporter <a id="pullmetricexporter"></a>

`PullMetricExporter` is an [SDK extension plugin](#sdk-extension-plugins).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`prometheus/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features).</td><td>[`ExperimentalPrometheusMetricExporter`](#experimentalprometheusmetricexporter)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure exporter to be prometheus.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `prometheus/development` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`PullMetricReader.exporter`](#pullmetricreader)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "prometheus/development": {
      "$ref": "#/$defs/ExperimentalPrometheusMetricExporter"
    }
  }
}</pre>
</details>

## PullMetricReader <a id="pullmetricreader"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`cardinality_limits`</td><td>[`CardinalityLimits`](#cardinalitylimits)</td><td>`false`</td><td>If omitted, default values as described in CardinalityLimits are used.</td><td>No constraints.</td><td width="20%">Configure cardinality limits.</td>
</tr>
<tr>
<td width="5%">`exporter`</td><td>[`PullMetricExporter`](#pullmetricexporter)</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">Configure exporter.</td>
</tr>
<tr>
<td width="5%">`producers`</td><td>`array` of [`MetricProducer`](#metricproducer)</td><td>`false`</td><td>If omitted, no metric producers are added.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure metric producers.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `cardinality_limits` | supported | unknown | supported | unknown |
| `exporter` | supported | unknown | supported | unknown |
| `producers` | supported | unknown | not_implemented | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`MetricReader.pull`](#metricreader)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "exporter": {
      "$ref": "#/$defs/PullMetricExporter"
    },
    "producers": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/MetricProducer"
      }
    },
    "cardinality_limits": {
      "$ref": "#/$defs/CardinalityLimits"
    }
  },
  "required": [
    "exporter"
  ]
}</pre>
</details>

## PushMetricExporter <a id="pushmetricexporter"></a>

`PushMetricExporter` is an [SDK extension plugin](#sdk-extension-plugins).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`console`</td><td>[`ConsoleMetricExporter`](#consolemetricexporter)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure exporter to be console.<br></td>
</tr>
<tr>
<td width="5%">`otlp_grpc`</td><td>[`OtlpGrpcMetricExporter`](#otlpgrpcmetricexporter)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure exporter to be OTLP with gRPC transport.<br></td>
</tr>
<tr>
<td width="5%">`otlp_http`</td><td>[`OtlpHttpMetricExporter`](#otlphttpmetricexporter)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure exporter to be OTLP with HTTP transport.<br></td>
</tr>
<tr>
<td width="5%">`otlp_file/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features).</td><td>[`ExperimentalOtlpFileMetricExporter`](#experimentalotlpfilemetricexporter)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure exporter to be OTLP with file transport.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `console` | supported | unknown | supported | unknown |
| `otlp_grpc` | supported | unknown | supported | unknown |
| `otlp_http` | supported | unknown | supported | unknown |
| `otlp_file/development` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`PeriodicMetricReader.exporter`](#periodicmetricreader)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "otlp_http": {
      "$ref": "#/$defs/OtlpHttpMetricExporter"
    },
    "otlp_grpc": {
      "$ref": "#/$defs/OtlpGrpcMetricExporter"
    },
    "otlp_file/development": {
      "$ref": "#/$defs/ExperimentalOtlpFileMetricExporter"
    },
    "console": {
      "$ref": "#/$defs/ConsoleMetricExporter"
    }
  }
}</pre>
</details>

## Resource <a id="resource"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`attributes`</td><td>`array` of [`AttributeNameValue`](#attributenamevalue)</td><td>`false`</td><td>If omitted, no resource attributes are added.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure resource attributes. Entries have higher priority than entries from .resource.attributes_list.<br></td>
</tr>
<tr>
<td width="5%">`attributes_list`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, no resource attributes are added.</td><td>No constraints.</td><td width="20%">Configure resource attributes. Entries have lower priority than entries from .resource.attributes.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_RESOURCE_ATTRIBUTES. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#general-sdk-configuration for details.<br></td>
</tr>
<tr>
<td width="5%">`schema_url`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, no schema URL is used.</td><td>No constraints.</td><td width="20%">Configure resource schema URL.<br></td>
</tr>
<tr>
<td width="5%">`detection/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features).</td><td>[`ExperimentalResourceDetection`](#experimentalresourcedetection)</td><td>`false`</td><td>If omitted, resource detection is disabled.</td><td>No constraints.</td><td width="20%">Configure resource detection.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `attributes` | supported | unknown | supported | unknown |
| `attributes_list` | supported | unknown | supported | unknown |
| `schema_url` | supported | unknown | ignored | unknown |
| `detection/development` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OpenTelemetryConfiguration.resource`](#opentelemetryconfiguration)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "attributes": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/AttributeNameValue"
      }
    },
    "detection/development": {
      "$ref": "#/$defs/ExperimentalResourceDetection"
    },
    "schema_url": {
      "type": [
        "string",
        "null"
      ]
    },
    "attributes_list": {
      "type": [
        "string",
        "null"
      ]
    }
  }
}</pre>
</details>

## Sampler <a id="sampler"></a>

`Sampler` is an [SDK extension plugin](#sdk-extension-plugins).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`always_off`</td><td>[`AlwaysOffSampler`](#alwaysoffsampler)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure sampler to be always_off.</td>
</tr>
<tr>
<td width="5%">`always_on`</td><td>[`AlwaysOnSampler`](#alwaysonsampler)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure sampler to be always_on.</td>
</tr>
<tr>
<td width="5%">`parent_based`</td><td>[`ParentBasedSampler`](#parentbasedsampler)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure sampler to be parent_based.</td>
</tr>
<tr>
<td width="5%">`trace_id_ratio_based`</td><td>[`TraceIdRatioBasedSampler`](#traceidratiobasedsampler)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure sampler to be trace_id_ratio_based.</td>
</tr>
<tr>
<td width="5%">`composite/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features).</td><td>[`ExperimentalComposableSampler`](#experimentalcomposablesampler)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure sampler to be composite.</td>
</tr>
<tr>
<td width="5%">`jaeger_remote/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features).</td><td>[`ExperimentalJaegerRemoteSampler`](#experimentaljaegerremotesampler)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure sampler to be jaeger_remote.</td>
</tr>
<tr>
<td width="5%">`probability/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features).</td><td>[`ExperimentalProbabilitySampler`](#experimentalprobabilitysampler)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure sampler to be probability.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `always_off` | supported | unknown | supported | unknown |
| `always_on` | supported | unknown | supported | unknown |
| `parent_based` | supported | unknown | supported | unknown |
| `trace_id_ratio_based` | supported | unknown | supported | unknown |
| `composite/development` | supported | unknown | supported | unknown |
| `jaeger_remote/development` | supported | unknown | supported | unknown |
| `probability/development` | supported | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`TracerProvider.sampler`](#tracerprovider)
* [`ExperimentalJaegerRemoteSampler.initial_sampler`](#experimentaljaegerremotesampler)
* [`ParentBasedSampler.root`](#parentbasedsampler)
* [`ParentBasedSampler.remote_parent_sampled`](#parentbasedsampler)
* [`ParentBasedSampler.remote_parent_not_sampled`](#parentbasedsampler)
* [`ParentBasedSampler.local_parent_sampled`](#parentbasedsampler)
* [`ParentBasedSampler.local_parent_not_sampled`](#parentbasedsampler)

Snippets:

<details>
<summary>Parent Based Typical</summary>

[Snippet Source File](./snippets/Sampler_parent_based_typical.yaml)
```yaml
# configure the parent based sampler to sample 1% of root spans, and follow the sampling decision of parent spans
parent_based:
  root:
    trace_id_ratio_based:
      ratio: 0.01
  remote_parent_sampled:
    always_on:
  remote_parent_not_sampled:
    always_off:
  local_parent_sampled:
    always_on:
  local_parent_not_sampled:
    always_off:
```
</details>

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "always_off": {
      "$ref": "#/$defs/AlwaysOffSampler"
    },
    "always_on": {
      "$ref": "#/$defs/AlwaysOnSampler"
    },
    "composite/development": {
      "$ref": "#/$defs/ExperimentalComposableSampler"
    },
    "jaeger_remote/development": {
      "$ref": "#/$defs/ExperimentalJaegerRemoteSampler"
    },
    "parent_based": {
      "$ref": "#/$defs/ParentBasedSampler"
    },
    "probability/development": {
      "$ref": "#/$defs/ExperimentalProbabilitySampler"
    },
    "trace_id_ratio_based": {
      "$ref": "#/$defs/TraceIdRatioBasedSampler"
    }
  }
}</pre>
</details>

## SeverityNumber <a id="severitynumber"></a>

This is a enum type.

| Value | Description |
|---|---|
| `debug` | debug, severity number 5. |
| `debug2` | debug2, severity number 6. |
| `debug3` | debug3, severity number 7. |
| `debug4` | debug4, severity number 8. |
| `error` | error, severity number 17. |
| `error2` | error2, severity number 18. |
| `error3` | error3, severity number 19. |
| `error4` | error4, severity number 20. |
| `fatal` | fatal, severity number 21. |
| `fatal2` | fatal2, severity number 22. |
| `fatal3` | fatal3, severity number 23. |
| `fatal4` | fatal4, severity number 24. |
| `info` | info, severity number 9. |
| `info2` | info2, severity number 10. |
| `info3` | info3, severity number 11. |
| `info4` | info4, severity number 12. |
| `trace` | trace, severity number 1. |
| `trace2` | trace2, severity number 2. |
| `trace3` | trace3, severity number 3. |
| `trace4` | trace4, severity number 4. |
| `warn` | warn, severity number 13. |
| `warn2` | warn2, severity number 14. |
| `warn3` | warn3, severity number 15. |
| `warn4` | warn4, severity number 16. |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `debug` | unknown | unknown | unknown | unknown |
| `debug2` | unknown | unknown | unknown | unknown |
| `debug3` | unknown | unknown | unknown | unknown |
| `debug4` | unknown | unknown | unknown | unknown |
| `error` | unknown | unknown | unknown | unknown |
| `error2` | unknown | unknown | unknown | unknown |
| `error3` | unknown | unknown | unknown | unknown |
| `error4` | unknown | unknown | unknown | unknown |
| `fatal` | unknown | unknown | unknown | unknown |
| `fatal2` | unknown | unknown | unknown | unknown |
| `fatal3` | unknown | unknown | unknown | unknown |
| `fatal4` | unknown | unknown | unknown | unknown |
| `info` | unknown | unknown | unknown | unknown |
| `info2` | unknown | unknown | unknown | unknown |
| `info3` | unknown | unknown | unknown | unknown |
| `info4` | unknown | unknown | unknown | unknown |
| `trace` | unknown | unknown | unknown | unknown |
| `trace2` | unknown | unknown | unknown | unknown |
| `trace3` | unknown | unknown | unknown | unknown |
| `trace4` | unknown | unknown | unknown | unknown |
| `warn` | unknown | unknown | unknown | unknown |
| `warn2` | unknown | unknown | unknown | unknown |
| `warn3` | unknown | unknown | unknown | unknown |
| `warn4` | unknown | unknown | unknown | unknown |
</details>

No constraints.

Usages:

* [`ExperimentalLoggerConfig.minimum_severity`](#experimentalloggerconfig)
* [`OpenTelemetryConfiguration.log_level`](#opentelemetryconfiguration)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.yaml)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "trace",
    "trace2",
    "trace3",
    "trace4",
    "debug",
    "debug2",
    "debug3",
    "debug4",
    "info",
    "info2",
    "info3",
    "info4",
    "warn",
    "warn2",
    "warn3",
    "warn4",
    "error",
    "error2",
    "error3",
    "error4",
    "fatal",
    "fatal2",
    "fatal3",
    "fatal4"
  ]
}</pre>
</details>

## SimpleLogRecordProcessor <a id="simplelogrecordprocessor"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`exporter`</td><td>[`LogRecordExporter`](#logrecordexporter)</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">Configure exporter.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `exporter` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`LogRecordProcessor.simple`](#logrecordprocessor)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "exporter": {
      "$ref": "#/$defs/LogRecordExporter"
    }
  },
  "required": [
    "exporter"
  ]
}</pre>
</details>

## SimpleSpanProcessor <a id="simplespanprocessor"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`exporter`</td><td>[`SpanExporter`](#spanexporter)</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">Configure exporter.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `exporter` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`SpanProcessor.simple`](#spanprocessor)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "exporter": {
      "$ref": "#/$defs/SpanExporter"
    }
  },
  "required": [
    "exporter"
  ]
}</pre>
</details>

## SpanExporter <a id="spanexporter"></a>

`SpanExporter` is an [SDK extension plugin](#sdk-extension-plugins).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`console`</td><td>[`ConsoleExporter`](#consoleexporter)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure exporter to be console.</td>
</tr>
<tr>
<td width="5%">`otlp_grpc`</td><td>[`OtlpGrpcExporter`](#otlpgrpcexporter)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure exporter to be OTLP with gRPC transport.</td>
</tr>
<tr>
<td width="5%">`otlp_http`</td><td>[`OtlpHttpExporter`](#otlphttpexporter)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure exporter to be OTLP with HTTP transport.</td>
</tr>
<tr>
<td width="5%">`otlp_file/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features).</td><td>[`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure exporter to be OTLP with file transport.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `console` | supported | unknown | supported | unknown |
| `otlp_grpc` | supported | unknown | supported | unknown |
| `otlp_http` | supported | unknown | supported | unknown |
| `otlp_file/development` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`BatchSpanProcessor.exporter`](#batchspanprocessor)
* [`SimpleSpanProcessor.exporter`](#simplespanprocessor)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "otlp_http": {
      "$ref": "#/$defs/OtlpHttpExporter"
    },
    "otlp_grpc": {
      "$ref": "#/$defs/OtlpGrpcExporter"
    },
    "otlp_file/development": {
      "$ref": "#/$defs/ExperimentalOtlpFileExporter"
    },
    "console": {
      "$ref": "#/$defs/ConsoleExporter"
    }
  }
}</pre>
</details>

## SpanKind <a id="spankind"></a>

This is a enum type.

| Value | Description |
|---|---|
| `client` | client, a client span. |
| `consumer` | consumer, a consumer span. |
| `internal` | internal, an internal span. |
| `producer` | producer, a producer span. |
| `server` | server, a server span. |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `client` | unknown | unknown | unknown | unknown |
| `consumer` | unknown | unknown | unknown | unknown |
| `internal` | unknown | unknown | unknown | unknown |
| `producer` | unknown | unknown | unknown | unknown |
| `server` | unknown | unknown | unknown | unknown |
</details>

No constraints.

Usages:

* [`ExperimentalComposableRuleBasedSamplerRule.span_kinds`](#experimentalcomposablerulebasedsamplerrule)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "internal",
    "server",
    "client",
    "producer",
    "consumer"
  ]
}</pre>
</details>

## SpanLimits <a id="spanlimits"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`attribute_count_limit`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 128 is used.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure max attribute count. Overrides .attribute_limits.attribute_count_limit. <br>Value must be non-negative.<br></td>
</tr>
<tr>
<td width="5%">`attribute_value_length_limit`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, there is no limit.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit. <br>Value must be non-negative.<br></td>
</tr>
<tr>
<td width="5%">`event_attribute_count_limit`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 128 is used.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure max attributes per span event. <br>Value must be non-negative.<br></td>
</tr>
<tr>
<td width="5%">`event_count_limit`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 128 is used.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure max span event count. <br>Value must be non-negative.<br></td>
</tr>
<tr>
<td width="5%">`link_attribute_count_limit`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 128 is used.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure max attributes per span link. <br>Value must be non-negative.<br></td>
</tr>
<tr>
<td width="5%">`link_count_limit`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 128 is used.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure max span link count. <br>Value must be non-negative.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `attribute_count_limit` | supported | unknown | supported | unknown |
| `attribute_value_length_limit` | supported | unknown | supported | unknown |
| `event_attribute_count_limit` | supported | unknown | supported | unknown |
| `event_count_limit` | supported | unknown | supported | unknown |
| `link_attribute_count_limit` | supported | unknown | supported | unknown |
| `link_count_limit` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TracerProvider.limits`](#tracerprovider)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "attribute_value_length_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "attribute_count_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "event_count_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "link_count_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "event_attribute_count_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "link_attribute_count_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    }
  }
}</pre>
</details>

## SpanProcessor <a id="spanprocessor"></a>

`SpanProcessor` is an [SDK extension plugin](#sdk-extension-plugins).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`batch`</td><td>[`BatchSpanProcessor`](#batchspanprocessor)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure a batch span processor.</td>
</tr>
<tr>
<td width="5%">`simple`</td><td>[`SimpleSpanProcessor`](#simplespanprocessor)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure a simple span processor.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `batch` | supported | unknown | supported | unknown |
| `simple` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`TracerProvider.processors`](#tracerprovider)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "batch": {
      "$ref": "#/$defs/BatchSpanProcessor"
    },
    "simple": {
      "$ref": "#/$defs/SimpleSpanProcessor"
    }
  }
}</pre>
</details>

## SumAggregation <a id="sumaggregation"></a>

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Aggregation.sum`](#aggregation)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## TextMapPropagator <a id="textmappropagator"></a>

`TextMapPropagator` is an [SDK extension plugin](#sdk-extension-plugins).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`b3`</td><td>[`B3Propagator`](#b3propagator)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Include the zipkin b3 propagator.</td>
</tr>
<tr>
<td width="5%">`b3multi`</td><td>[`B3MultiPropagator`](#b3multipropagator)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Include the zipkin b3 multi propagator.</td>
</tr>
<tr>
<td width="5%">`baggage`</td><td>[`BaggagePropagator`](#baggagepropagator)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Include the w3c baggage propagator.</td>
</tr>
<tr>
<td width="5%">`jaeger`</td><td>[`JaegerPropagator`](#jaegerpropagator)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Include the jaeger propagator.</td>
</tr>
<tr>
<td width="5%">`ottrace`</td><td>[`OpenTracingPropagator`](#opentracingpropagator)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Include the opentracing propagator.</td>
</tr>
<tr>
<td width="5%">`tracecontext`</td><td>[`TraceContextPropagator`](#tracecontextpropagator)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Include the w3c trace context propagator.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `b3` | supported | unknown | supported | unknown |
| `b3multi` | supported | unknown | supported | unknown |
| `baggage` | supported | unknown | supported | unknown |
| `jaeger` | supported | unknown | supported | unknown |
| `ottrace` | supported | unknown | supported | unknown |
| `tracecontext` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`Propagator.composite`](#propagator)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/propagator.yaml)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "tracecontext": {
      "$ref": "#/$defs/TraceContextPropagator"
    },
    "baggage": {
      "$ref": "#/$defs/BaggagePropagator"
    },
    "b3": {
      "$ref": "#/$defs/B3Propagator"
    },
    "b3multi": {
      "$ref": "#/$defs/B3MultiPropagator"
    },
    "jaeger": {
      "$ref": "#/$defs/JaegerPropagator"
    },
    "ottrace": {
      "$ref": "#/$defs/OpenTracingPropagator"
    }
  }
}</pre>
</details>

## TraceContextPropagator <a id="tracecontextpropagator"></a>

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TextMapPropagator.tracecontext`](#textmappropagator)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/propagator.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## TraceIdRatioBasedSampler <a id="traceidratiobasedsampler"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`ratio`</td><td>one of:<br>* `number`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 1.0 is used.</td><td>* `minimum`: `0`<br>* `maximum`: `1`<br></td><td width="20%">Configure trace_id_ratio.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `ratio` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Sampler.trace_id_ratio_based`](#sampler)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "ratio": {
      "type": [
        "number",
        "null"
      ],
      "minimum": 0,
      "maximum": 1
    }
  }
}</pre>
</details>

## TracerProvider <a id="tracerprovider"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`limits`</td><td>[`SpanLimits`](#spanlimits)</td><td>`false`</td><td>If omitted, default values as described in SpanLimits are used.</td><td>No constraints.</td><td width="20%">Configure span limits. See also attribute_limits.</td>
</tr>
<tr>
<td width="5%">`processors`</td><td>`array` of [`SpanProcessor`](#spanprocessor)</td><td>`true`</td><td>Property is required and must be non-null.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure span processors.</td>
</tr>
<tr>
<td width="5%">`sampler`</td><td>[`Sampler`](#sampler)</td><td>`false`</td><td>If omitted, parent based sampler with a root of always_on is used.</td><td>No constraints.</td><td width="20%">Configure the sampler.<br></td>
</tr>
<tr>
<td width="5%">`tracer_configurator/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features).</td><td>[`ExperimentalTracerConfigurator`](#experimentaltracerconfigurator)</td><td>`false`</td><td>If omitted, all tracers use default values as described in ExperimentalTracerConfig.</td><td>No constraints.</td><td width="20%">Configure tracers.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `limits` | supported | unknown | supported | unknown |
| `processors` | supported | unknown | supported | unknown |
| `sampler` | supported | unknown | supported | unknown |
| `tracer_configurator/development` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["processors"]`

Usages:

* [`OpenTelemetryConfiguration.tracer_provider`](#opentelemetryconfiguration)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "processors": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/SpanProcessor"
      }
    },
    "limits": {
      "$ref": "#/$defs/SpanLimits"
    },
    "sampler": {
      "$ref": "#/$defs/Sampler"
    },
    "tracer_configurator/development": {
      "$ref": "#/$defs/ExperimentalTracerConfigurator"
    }
  },
  "required": [
    "processors"
  ]
}</pre>
</details>

## View <a id="view"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`selector`</td><td>[`ViewSelector`](#viewselector)</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">Configure view selector. <br>Selection criteria is additive as described in https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#instrument-selection-criteria.<br></td>
</tr>
<tr>
<td width="5%">`stream`</td><td>[`ViewStream`](#viewstream)</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">Configure view stream.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `selector` | supported | unknown | supported | unknown |
| `stream` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["selector","stream"]`

Usages:

* [`MeterProvider.views`](#meterprovider)

Snippets:

<details>
<summary>Override Default Histogram Buckets</summary>

[Snippet Source File](./snippets/View_override_default_histogram_buckets.yaml)
```yaml
selector:
  instrument_name: my.instrument.name
  instrument_type: histogram
stream:
  aggregation:
    explicit_bucket_histogram:
      boundaries: [0, 5, 10]
```
</details>

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "selector": {
      "$ref": "#/$defs/ViewSelector"
    },
    "stream": {
      "$ref": "#/$defs/ViewStream"
    }
  },
  "required": [
    "selector",
    "stream"
  ]
}</pre>
</details>

## ViewSelector <a id="viewselector"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`instrument_name`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, all instrument names match.</td><td>No constraints.</td><td width="20%">Configure instrument name selection criteria.<br></td>
</tr>
<tr>
<td width="5%">`instrument_type`</td><td>[`InstrumentType`](#instrumenttype)</td><td>`false`</td><td>If omitted, all instrument types match.</td><td>No constraints.</td><td width="20%">Configure instrument type selection criteria.<br></td>
</tr>
<tr>
<td width="5%">`meter_name`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, all meter names match.</td><td>No constraints.</td><td width="20%">Configure meter name selection criteria.<br></td>
</tr>
<tr>
<td width="5%">`meter_schema_url`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, all meter schema URLs match.</td><td>No constraints.</td><td width="20%">Configure meter schema url selection criteria.<br></td>
</tr>
<tr>
<td width="5%">`meter_version`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, all meter versions match.</td><td>No constraints.</td><td width="20%">Configure meter version selection criteria.<br></td>
</tr>
<tr>
<td width="5%">`unit`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, all instrument units match.</td><td>No constraints.</td><td width="20%">Configure the instrument unit selection criteria.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `instrument_name` | supported | unknown | supported | unknown |
| `instrument_type` | supported | unknown | supported | unknown |
| `meter_name` | supported | unknown | supported | unknown |
| `meter_schema_url` | supported | unknown | supported | unknown |
| `meter_version` | supported | unknown | supported | unknown |
| `unit` | supported | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`View.selector`](#view)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "instrument_name": {
      "type": [
        "string",
        "null"
      ]
    },
    "instrument_type": {
      "$ref": "#/$defs/InstrumentType"
    },
    "unit": {
      "type": [
        "string",
        "null"
      ]
    },
    "meter_name": {
      "type": [
        "string",
        "null"
      ]
    },
    "meter_version": {
      "type": [
        "string",
        "null"
      ]
    },
    "meter_schema_url": {
      "type": [
        "string",
        "null"
      ]
    }
  }
}</pre>
</details>

## ViewStream <a id="viewstream"></a>

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`aggregation`</td><td>[`Aggregation`](#aggregation)</td><td>`false`</td><td>If omitted, default is used.</td><td>No constraints.</td><td width="20%">Configure aggregation of the resulting stream(s). <br></td>
</tr>
<tr>
<td width="5%">`aggregation_cardinality_limit`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, the metric reader's default cardinality limit is used.</td><td>* `exclusiveMinimum`: `0`<br></td><td width="20%">Configure the aggregation cardinality limit.<br></td>
</tr>
<tr>
<td width="5%">`attribute_keys`</td><td>[`IncludeExclude`](#includeexclude)</td><td>`false`</td><td>If omitted, all attribute keys are retained.</td><td>No constraints.</td><td width="20%">Configure attribute keys retained in the resulting stream(s).<br></td>
</tr>
<tr>
<td width="5%">`description`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, the instrument's origin description is used.</td><td>No constraints.</td><td width="20%">Configure metric description of the resulting stream(s).<br></td>
</tr>
<tr>
<td width="5%">`name`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, the instrument's original name is used.</td><td>No constraints.</td><td width="20%">Configure metric name of the resulting stream(s).<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `aggregation` | supported | unknown | supported | unknown |
| `aggregation_cardinality_limit` | supported | unknown | supported | unknown |
| `attribute_keys` | supported | unknown | supported | unknown |
| `description` | supported | unknown | supported | unknown |
| `name` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`View.stream`](#view)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "name": {
      "type": [
        "string",
        "null"
      ]
    },
    "description": {
      "type": [
        "string",
        "null"
      ]
    },
    "aggregation": {
      "$ref": "#/$defs/Aggregation"
    },
    "aggregation_cardinality_limit": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "attribute_keys": {
      "$ref": "#/$defs/IncludeExclude"
    }
  }
}</pre>
</details>

# Experimental Types <a id="experimental-types"></a>

## ExperimentalComposableAlwaysOffSampler <a id="experimentalcomposablealwaysoffsampler"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalComposableSampler.always_off`](#experimentalcomposablesampler)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## ExperimentalComposableAlwaysOnSampler <a id="experimentalcomposablealwaysonsampler"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalComposableSampler.always_on`](#experimentalcomposablesampler)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## ExperimentalComposableParentThresholdSampler <a id="experimentalcomposableparentthresholdsampler"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`root`</td><td>[`ExperimentalComposableSampler`](#experimentalcomposablesampler)</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">Sampler to use when there is no parent.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `root` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["root"]`

Usages:

* [`ExperimentalComposableSampler.parent_threshold`](#experimentalcomposablesampler)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "root": {
      "$ref": "#/$defs/ExperimentalComposableSampler"
    }
  },
  "required": [
    "root"
  ]
}</pre>
</details>

## ExperimentalComposableProbabilitySampler <a id="experimentalcomposableprobabilitysampler"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`ratio`</td><td>one of:<br>* `number`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 1.0 is used.</td><td>* `minimum`: `0`<br>* `maximum`: `1`<br></td><td width="20%">Configure ratio.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `ratio` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalComposableSampler.probability`](#experimentalcomposablesampler)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "ratio": {
      "type": [
        "number",
        "null"
      ],
      "minimum": 0,
      "maximum": 1
    }
  }
}</pre>
</details>

## ExperimentalComposableRuleBasedSampler <a id="experimentalcomposablerulebasedsampler"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`rules`</td><td>one of:<br>* `array`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, no span is sampled.</td><td>No constraints.</td><td width="20%">The rules for the sampler, matched in order. If no rules match, the span is not sampled.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `rules` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalComposableSampler.rule_based`](#experimentalcomposablesampler)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "rules": {
      "type": [
        "array",
        "null"
      ],
      "items": {
        "$ref": "#/$defs/ExperimentalComposableRuleBasedSamplerRule"
      }
    }
  }
}</pre>
</details>

## ExperimentalComposableRuleBasedSamplerRule <a id="experimentalcomposablerulebasedsamplerrule"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`attribute_patterns`</td><td>[`ExperimentalComposableRuleBasedSamplerRuleAttributePatterns`](#experimentalcomposablerulebasedsamplerruleattributepatterns)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Patterns to match against a single attribute. Non-string attributes are matched using their string representation:<br>for example, a pattern of "4*" would match any http.response.status_code in 400-499. For array attributes, if any<br>item matches, it is considered a match.<br></td>
</tr>
<tr>
<td width="5%">`attribute_values`</td><td>[`ExperimentalComposableRuleBasedSamplerRuleAttributeValues`](#experimentalcomposablerulebasedsamplerruleattributevalues)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Values to match against a single attribute. Non-string attributes are matched using their string representation:<br>for example, a value of "404" would match the http.response.status_code 404. For array attributes, if any<br>item matches, it is considered a match.<br></td>
</tr>
<tr>
<td width="5%">`parent`</td><td>`array` of [`ExperimentalSpanParent`](#experimentalspanparent)</td><td>`false`</td><td>If omitted, ignore.</td><td>* `minItems`: `1`<br></td><td width="20%">The parent span types to match.</td>
</tr>
<tr>
<td width="5%">`sampler`</td><td>[`ExperimentalComposableSampler`](#experimentalcomposablesampler)</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">The sampler to use for matching spans.</td>
</tr>
<tr>
<td width="5%">`span_kinds`</td><td>`array` of [`SpanKind`](#spankind)</td><td>`false`</td><td>If omitted, ignore.</td><td>* `minItems`: `1`<br></td><td width="20%">The span kinds to match. If the span's kind matches any of these, it matches.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `attribute_patterns` | unknown | unknown | unknown | unknown |
| `attribute_values` | unknown | unknown | unknown | unknown |
| `parent` | unknown | unknown | unknown | unknown |
| `sampler` | unknown | unknown | unknown | unknown |
| `span_kinds` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["sampler"]`

No usages.

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": "object",
  "description": "A rule for ExperimentalComposableRuleBasedSampler. A rule can have multiple match conditions - the sampler will be applied if all match. \nIf no conditions are specified, the rule matches all spans that reach it.\n",
  "additionalProperties": false,
  "properties": {
    "attribute_values": {
      "$ref": "#/$defs/ExperimentalComposableRuleBasedSamplerRuleAttributeValues"
    },
    "attribute_patterns": {
      "$ref": "#/$defs/ExperimentalComposableRuleBasedSamplerRuleAttributePatterns"
    },
    "span_kinds": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/SpanKind"
      }
    },
    "parent": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/ExperimentalSpanParent"
      }
    },
    "sampler": {
      "$ref": "#/$defs/ExperimentalComposableSampler"
    }
  },
  "required": [
    "sampler"
  ]
}</pre>
</details>

## ExperimentalComposableRuleBasedSamplerRuleAttributePatterns <a id="experimentalcomposablerulebasedsamplerruleattributepatterns"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`excluded`</td><td>`array` of `string`</td><td>`false`</td><td>If omitted, .included attributes are included.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure list of value patterns to exclude. Applies after .included (i.e. excluded has higher priority than included).<br>Values are evaluated to match as follows:<br> * If the value exactly matches.<br> * If the value matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br></td>
</tr>
<tr>
<td width="5%">`included`</td><td>`array` of `string`</td><td>`false`</td><td>If omitted, all values are included.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure list of value patterns to include.<br>Values are evaluated to match as follows:<br> * If the value exactly matches.<br> * If the value matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br></td>
</tr>
<tr>
<td width="5%">`key`</td><td>`string`</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">The attribute key to match against.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `excluded` | unknown | unknown | unknown | unknown |
| `included` | unknown | unknown | unknown | unknown |
| `key` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["key"]`

Usages:

* [`ExperimentalComposableRuleBasedSamplerRule.attribute_patterns`](#experimentalcomposablerulebasedsamplerrule)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "key": {
      "type": "string"
    },
    "included": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "string"
      }
    },
    "excluded": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "key"
  ]
}</pre>
</details>

## ExperimentalComposableRuleBasedSamplerRuleAttributeValues <a id="experimentalcomposablerulebasedsamplerruleattributevalues"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`key`</td><td>`string`</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">The attribute key to match against.</td>
</tr>
<tr>
<td width="5%">`values`</td><td>`array` of `string`</td><td>`true`</td><td>Property is required and must be non-null.</td><td>* `minItems`: `1`<br></td><td width="20%">The attribute values to match against. If the attribute's value matches any of these, it matches.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `key` | unknown | unknown | unknown | unknown |
| `values` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["key","values"]`

Usages:

* [`ExperimentalComposableRuleBasedSamplerRule.attribute_values`](#experimentalcomposablerulebasedsamplerrule)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "key": {
      "type": "string"
    },
    "values": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "key",
    "values"
  ]
}</pre>
</details>

## ExperimentalComposableSampler <a id="experimentalcomposablesampler"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`always_off`</td><td>[`ExperimentalComposableAlwaysOffSampler`](#experimentalcomposablealwaysoffsampler)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure sampler to be always_off.</td>
</tr>
<tr>
<td width="5%">`always_on`</td><td>[`ExperimentalComposableAlwaysOnSampler`](#experimentalcomposablealwaysonsampler)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure sampler to be always_on.</td>
</tr>
<tr>
<td width="5%">`parent_threshold`</td><td>[`ExperimentalComposableParentThresholdSampler`](#experimentalcomposableparentthresholdsampler)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure sampler to be parent_threshold.<br></td>
</tr>
<tr>
<td width="5%">`probability`</td><td>[`ExperimentalComposableProbabilitySampler`](#experimentalcomposableprobabilitysampler)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure sampler to be probability.</td>
</tr>
<tr>
<td width="5%">`rule_based`</td><td>[`ExperimentalComposableRuleBasedSampler`](#experimentalcomposablerulebasedsampler)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Configure sampler to be rule_based.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `always_off` | unknown | unknown | unknown | unknown |
| `always_on` | unknown | unknown | unknown | unknown |
| `parent_threshold` | unknown | unknown | unknown | unknown |
| `probability` | unknown | unknown | unknown | unknown |
| `rule_based` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`Sampler.composite/development`](#sampler)
* [`ExperimentalComposableParentThresholdSampler.root`](#experimentalcomposableparentthresholdsampler)
* [`ExperimentalComposableRuleBasedSamplerRule.sampler`](#experimentalcomposablerulebasedsamplerrule)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "always_off": {
      "$ref": "#/$defs/ExperimentalComposableAlwaysOffSampler"
    },
    "always_on": {
      "$ref": "#/$defs/ExperimentalComposableAlwaysOnSampler"
    },
    "parent_threshold": {
      "$ref": "#/$defs/ExperimentalComposableParentThresholdSampler"
    },
    "probability": {
      "$ref": "#/$defs/ExperimentalComposableProbabilitySampler"
    },
    "rule_based": {
      "$ref": "#/$defs/ExperimentalComposableRuleBasedSampler"
    }
  }
}</pre>
</details>

## ExperimentalContainerResourceDetector <a id="experimentalcontainerresourcedetector"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalResourceDetector.container`](#experimentalresourcedetector)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## ExperimentalGeneralInstrumentation <a id="experimentalgeneralinstrumentation"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`http`</td><td>[`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation)</td><td>`false`</td><td>If omitted, defaults as described in ExperimentalHttpInstrumentation are used.</td><td>No constraints.</td><td width="20%">Configure instrumentations following the http semantic conventions.<br>See http semantic conventions: https://opentelemetry.io/docs/specs/semconv/http/<br></td>
</tr>
<tr>
<td width="5%">`peer`</td><td>[`ExperimentalPeerInstrumentation`](#experimentalpeerinstrumentation)</td><td>`false`</td><td>If omitted, defaults as described in ExperimentalPeerInstrumentation are used.</td><td>No constraints.</td><td width="20%">Configure instrumentations following the peer semantic conventions.<br>See peer semantic conventions: https://opentelemetry.io/docs/specs/semconv/attributes-registry/peer/<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `http` | not_applicable | unknown | supported | unknown |
| `peer` | not_applicable | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalInstrumentation.general`](#experimentalinstrumentation)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "peer": {
      "$ref": "#/$defs/ExperimentalPeerInstrumentation"
    },
    "http": {
      "$ref": "#/$defs/ExperimentalHttpInstrumentation"
    }
  }
}</pre>
</details>

## ExperimentalHostResourceDetector <a id="experimentalhostresourcedetector"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalResourceDetector.host`](#experimentalresourcedetector)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## ExperimentalHttpClientInstrumentation <a id="experimentalhttpclientinstrumentation"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`request_captured_headers`</td><td>`array` of `string`</td><td>`false`</td><td>If omitted, no outbound request headers are captured.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure headers to capture for outbound http requests.<br></td>
</tr>
<tr>
<td width="5%">`response_captured_headers`</td><td>`array` of `string`</td><td>`false`</td><td>If omitted, no inbound response headers are captured.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure headers to capture for inbound http responses.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `request_captured_headers` | not_applicable | unknown | supported | unknown |
| `response_captured_headers` | not_applicable | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalHttpInstrumentation.client`](#experimentalhttpinstrumentation)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "request_captured_headers": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "string"
      }
    },
    "response_captured_headers": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "string"
      }
    }
  }
}</pre>
</details>

## ExperimentalHttpInstrumentation <a id="experimentalhttpinstrumentation"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`client`</td><td>[`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation)</td><td>`false`</td><td>If omitted, defaults as described in ExperimentalHttpClientInstrumentation are used.</td><td>No constraints.</td><td width="20%">Configure instrumentations following the http client semantic conventions.</td>
</tr>
<tr>
<td width="5%">`server`</td><td>[`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation)</td><td>`false`</td><td>If omitted, defaults as described in ExperimentalHttpServerInstrumentation are used.</td><td>No constraints.</td><td width="20%">Configure instrumentations following the http server semantic conventions.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `client` | not_applicable | unknown | supported | unknown |
| `server` | not_applicable | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalGeneralInstrumentation.http`](#experimentalgeneralinstrumentation)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "client": {
      "$ref": "#/$defs/ExperimentalHttpClientInstrumentation"
    },
    "server": {
      "$ref": "#/$defs/ExperimentalHttpServerInstrumentation"
    }
  }
}</pre>
</details>

## ExperimentalHttpServerInstrumentation <a id="experimentalhttpserverinstrumentation"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`request_captured_headers`</td><td>`array` of `string`</td><td>`false`</td><td>If omitted, no request headers are captured.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure headers to capture for inbound http requests.<br></td>
</tr>
<tr>
<td width="5%">`response_captured_headers`</td><td>`array` of `string`</td><td>`false`</td><td>If omitted, no response headers are captures.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure headers to capture for outbound http responses.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `request_captured_headers` | not_applicable | unknown | supported | unknown |
| `response_captured_headers` | not_applicable | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalHttpInstrumentation.server`](#experimentalhttpinstrumentation)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "request_captured_headers": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "string"
      }
    },
    "response_captured_headers": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "string"
      }
    }
  }
}</pre>
</details>

## ExperimentalInstrumentation <a id="experimentalinstrumentation"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`cpp`</td><td>[`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation)</td><td>`false`</td><td>If omitted, instrumentation defaults are used.</td><td>No constraints.</td><td width="20%">Configure C++ language-specific instrumentation libraries.</td>
</tr>
<tr>
<td width="5%">`dotnet`</td><td>[`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation)</td><td>`false`</td><td>If omitted, instrumentation defaults are used.</td><td>No constraints.</td><td width="20%">Configure .NET language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br></td>
</tr>
<tr>
<td width="5%">`erlang`</td><td>[`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation)</td><td>`false`</td><td>If omitted, instrumentation defaults are used.</td><td>No constraints.</td><td width="20%">Configure Erlang language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br></td>
</tr>
<tr>
<td width="5%">`general`</td><td>[`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation)</td><td>`false`</td><td>If omitted, default values as described in ExperimentalGeneralInstrumentation are used.</td><td>No constraints.</td><td width="20%">Configure general SemConv options that may apply to multiple languages and instrumentations.<br>Instrumenation may merge general config options with the language specific configuration at .instrumentation.<language>.<br></td>
</tr>
<tr>
<td width="5%">`go`</td><td>[`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation)</td><td>`false`</td><td>If omitted, instrumentation defaults are used.</td><td>No constraints.</td><td width="20%">Configure Go language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br></td>
</tr>
<tr>
<td width="5%">`java`</td><td>[`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation)</td><td>`false`</td><td>If omitted, instrumentation defaults are used.</td><td>No constraints.</td><td width="20%">Configure Java language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br></td>
</tr>
<tr>
<td width="5%">`js`</td><td>[`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation)</td><td>`false`</td><td>If omitted, instrumentation defaults are used.</td><td>No constraints.</td><td width="20%">Configure JavaScript language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br></td>
</tr>
<tr>
<td width="5%">`php`</td><td>[`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation)</td><td>`false`</td><td>If omitted, instrumentation defaults are used.</td><td>No constraints.</td><td width="20%">Configure PHP language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br></td>
</tr>
<tr>
<td width="5%">`python`</td><td>[`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation)</td><td>`false`</td><td>If omitted, instrumentation defaults are used.</td><td>No constraints.</td><td width="20%">Configure Python language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br></td>
</tr>
<tr>
<td width="5%">`ruby`</td><td>[`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation)</td><td>`false`</td><td>If omitted, instrumentation defaults are used.</td><td>No constraints.</td><td width="20%">Configure Ruby language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br></td>
</tr>
<tr>
<td width="5%">`rust`</td><td>[`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation)</td><td>`false`</td><td>If omitted, instrumentation defaults are used.</td><td>No constraints.</td><td width="20%">Configure Rust language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br></td>
</tr>
<tr>
<td width="5%">`swift`</td><td>[`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation)</td><td>`false`</td><td>If omitted, instrumentation defaults are used.</td><td>No constraints.</td><td width="20%">Configure Swift language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `cpp` | not_applicable | unknown | not_applicable | unknown |
| `dotnet` | not_applicable | unknown | not_applicable | unknown |
| `erlang` | not_applicable | unknown | not_applicable | unknown |
| `general` | not_applicable | unknown | supported | unknown |
| `go` | not_applicable | unknown | not_applicable | unknown |
| `java` | not_applicable | unknown | supported | unknown |
| `js` | not_applicable | unknown | not_applicable | unknown |
| `php` | not_applicable | unknown | not_applicable | unknown |
| `python` | not_applicable | unknown | not_applicable | unknown |
| `ruby` | not_applicable | unknown | not_applicable | unknown |
| `rust` | not_applicable | unknown | not_applicable | unknown |
| `swift` | not_applicable | unknown | not_applicable | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OpenTelemetryConfiguration.instrumentation/development`](#opentelemetryconfiguration)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "general": {
      "$ref": "#/$defs/ExperimentalGeneralInstrumentation"
    },
    "cpp": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "dotnet": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "erlang": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "go": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "java": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "js": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "php": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "python": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "ruby": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "rust": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "swift": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    }
  }
}</pre>
</details>

## ExperimentalJaegerRemoteSampler <a id="experimentaljaegerremotesampler"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`endpoint`</td><td>`string`</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">Configure the endpoint of the jaeger remote sampling service.</td>
</tr>
<tr>
<td width="5%">`initial_sampler`</td><td>[`Sampler`](#sampler)</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">Configure the initial sampler used before first configuration is fetched.</td>
</tr>
<tr>
<td width="5%">`interval`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 60000 is used.</td><td>* `minimum`: `0`<br></td><td width="20%">Configure the polling interval (in milliseconds) to fetch from the remote sampling service.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `endpoint` | not_implemented | unknown | ignored | unknown |
| `initial_sampler` | not_implemented | unknown | ignored | unknown |
| `interval` | not_implemented | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["endpoint","initial_sampler"]`

Usages:

* [`Sampler.jaeger_remote/development`](#sampler)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "endpoint": {
      "type": [
        "string"
      ]
    },
    "interval": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "initial_sampler": {
      "$ref": "#/$defs/Sampler"
    }
  },
  "required": [
    "endpoint",
    "initial_sampler"
  ]
}</pre>
</details>

## ExperimentalLanguageSpecificInstrumentation <a id="experimentallanguagespecificinstrumentation"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `{"type":"object"}`

Usages:

* [`ExperimentalInstrumentation.cpp`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.dotnet`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.erlang`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.go`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.java`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.js`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.php`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.python`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.ruby`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.rust`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.swift`](#experimentalinstrumentation)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.yaml)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": "object"
  }
}</pre>
</details>

## ExperimentalLoggerConfig <a id="experimentalloggerconfig"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`disabled`</td><td>one of:<br>* `boolean`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, false is used.</td><td>No constraints.</td><td width="20%">Configure if the logger is enabled or not.<br></td>
</tr>
<tr>
<td width="5%">`minimum_severity`</td><td>[`SeverityNumber`](#severitynumber)</td><td>`false`</td><td>If omitted, severity filtering is not applied.</td><td>No constraints.</td><td width="20%">Configure severity filtering.<br>Log records with an non-zero (i.e. unspecified) severity number which is less than minimum_severity are not processed.<br></td>
</tr>
<tr>
<td width="5%">`trace_based`</td><td>one of:<br>* `boolean`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, trace based filtering is not applied.</td><td>No constraints.</td><td width="20%">Configure trace based filtering.<br>If true, log records associated with unsampled trace contexts traces are not processed. If false, or if a log record is not associated with a trace context, trace based filtering is not applied.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `disabled` | not_implemented | unknown | supported | unknown |
| `minimum_severity` | not_implemented | unknown | not_implemented | unknown |
| `trace_based` | not_implemented | unknown | not_implemented | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalLoggerConfigurator.default_config`](#experimentalloggerconfigurator)
* [`ExperimentalLoggerMatcherAndConfig.config`](#experimentalloggermatcherandconfig)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.yaml)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "disabled": {
      "type": [
        "boolean",
        "null"
      ]
    },
    "minimum_severity": {
      "$ref": "#/$defs/SeverityNumber"
    },
    "trace_based": {
      "type": [
        "boolean",
        "null"
      ]
    }
  }
}</pre>
</details>

## ExperimentalLoggerConfigurator <a id="experimentalloggerconfigurator"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`default_config`</td><td>[`ExperimentalLoggerConfig`](#experimentalloggerconfig)</td><td>`false`</td><td>If omitted, unmatched .loggers use default values as described in ExperimentalLoggerConfig.</td><td>No constraints.</td><td width="20%">Configure the default logger config used there is no matching entry in .logger_configurator/development.loggers.</td>
</tr>
<tr>
<td width="5%">`loggers`</td><td>`array` of [`ExperimentalLoggerMatcherAndConfig`](#experimentalloggermatcherandconfig)</td><td>`false`</td><td>If omitted, all loggers use .default_config.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure loggers.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `default_config` | not_implemented | unknown | supported | unknown |
| `loggers` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LoggerProvider.logger_configurator/development`](#loggerprovider)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.yaml)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "default_config": {
      "$ref": "#/$defs/ExperimentalLoggerConfig"
    },
    "loggers": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/ExperimentalLoggerMatcherAndConfig"
      }
    }
  }
}</pre>
</details>

## ExperimentalLoggerMatcherAndConfig <a id="experimentalloggermatcherandconfig"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`config`</td><td>[`ExperimentalLoggerConfig`](#experimentalloggerconfig)</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">The logger config.</td>
</tr>
<tr>
<td width="5%">`name`</td><td>`string`</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">Configure logger names to match, evaluated as follows:<br><br> * If the logger name exactly matches.<br> * If the logger name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `config` | not_implemented | unknown | supported | unknown |
| `name` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["name","config"]`

Usages:

* [`ExperimentalLoggerConfigurator.loggers`](#experimentalloggerconfigurator)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.yaml)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "name": {
      "type": [
        "string"
      ]
    },
    "config": {
      "$ref": "#/$defs/ExperimentalLoggerConfig"
    }
  },
  "required": [
    "name",
    "config"
  ]
}</pre>
</details>

## ExperimentalMeterConfig <a id="experimentalmeterconfig"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`disabled`</td><td>`boolean`</td><td>`false`</td><td>If omitted, false is used.</td><td>No constraints.</td><td width="20%">Configure if the meter is enabled or not.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `disabled` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalMeterConfigurator.default_config`](#experimentalmeterconfigurator)
* [`ExperimentalMeterMatcherAndConfig.config`](#experimentalmetermatcherandconfig)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "disabled": {
      "type": [
        "boolean"
      ]
    }
  }
}</pre>
</details>

## ExperimentalMeterConfigurator <a id="experimentalmeterconfigurator"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`default_config`</td><td>[`ExperimentalMeterConfig`](#experimentalmeterconfig)</td><td>`false`</td><td>If omitted, unmatched .meters use default values as described in ExperimentalMeterConfig.</td><td>No constraints.</td><td width="20%">Configure the default meter config used there is no matching entry in .meter_configurator/development.meters.</td>
</tr>
<tr>
<td width="5%">`meters`</td><td>`array` of [`ExperimentalMeterMatcherAndConfig`](#experimentalmetermatcherandconfig)</td><td>`false`</td><td>If omitted, all meters used .default_config.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure meters.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `default_config` | not_implemented | unknown | supported | unknown |
| `meters` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`MeterProvider.meter_configurator/development`](#meterprovider)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "default_config": {
      "$ref": "#/$defs/ExperimentalMeterConfig"
    },
    "meters": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/ExperimentalMeterMatcherAndConfig"
      }
    }
  }
}</pre>
</details>

## ExperimentalMeterMatcherAndConfig <a id="experimentalmetermatcherandconfig"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`config`</td><td>[`ExperimentalMeterConfig`](#experimentalmeterconfig)</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">The meter config.</td>
</tr>
<tr>
<td width="5%">`name`</td><td>`string`</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">Configure meter names to match, evaluated as follows:<br><br> * If the meter name exactly matches.<br> * If the meter name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `config` | not_implemented | unknown | supported | unknown |
| `name` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["name","config"]`

Usages:

* [`ExperimentalMeterConfigurator.meters`](#experimentalmeterconfigurator)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "name": {
      "type": [
        "string"
      ]
    },
    "config": {
      "$ref": "#/$defs/ExperimentalMeterConfig"
    }
  },
  "required": [
    "name",
    "config"
  ]
}</pre>
</details>

## ExperimentalOtlpFileExporter <a id="experimentalotlpfileexporter"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`output_stream`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, stdout is used.</td><td>No constraints.</td><td width="20%">Configure output stream. <br>Values include stdout, or scheme+destination. For example: file:///path/to/file.jsonl.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `output_stream` | supported | unknown | not_implemented | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LogRecordExporter.otlp_file/development`](#logrecordexporter)
* [`SpanExporter.otlp_file/development`](#spanexporter)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "output_stream": {
      "type": [
        "string",
        "null"
      ]
    }
  }
}</pre>
</details>

## ExperimentalOtlpFileMetricExporter <a id="experimentalotlpfilemetricexporter"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`default_histogram_aggregation`</td><td>[`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation)</td><td>`false`</td><td>If omitted, explicit_bucket_histogram is used.</td><td>No constraints.</td><td width="20%">Configure default histogram aggregation.<br></td>
</tr>
<tr>
<td width="5%">`output_stream`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, stdout is used.</td><td>No constraints.</td><td width="20%">Configure output stream. <br>Values include stdout, or scheme+destination. For example: file:///path/to/file.jsonl.<br></td>
</tr>
<tr>
<td width="5%">`temporality_preference`</td><td>[`ExporterTemporalityPreference`](#exportertemporalitypreference)</td><td>`false`</td><td>If omitted, cumulative is used.</td><td>No constraints.</td><td width="20%">Configure temporality preference.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `default_histogram_aggregation` | supported | unknown | supported | unknown |
| `output_stream` | supported | unknown | not_implemented | unknown |
| `temporality_preference` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PushMetricExporter.otlp_file/development`](#pushmetricexporter)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "output_stream": {
      "type": [
        "string",
        "null"
      ]
    },
    "temporality_preference": {
      "$ref": "#/$defs/ExporterTemporalityPreference"
    },
    "default_histogram_aggregation": {
      "$ref": "#/$defs/ExporterDefaultHistogramAggregation"
    }
  }
}</pre>
</details>

## ExperimentalPeerInstrumentation <a id="experimentalpeerinstrumentation"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`service_mapping`</td><td>`array` of [`ExperimentalPeerServiceMapping`](#experimentalpeerservicemapping)</td><td>`false`</td><td>If omitted, no peer service mappings are used.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure the service mapping for instrumentations following peer.service semantic conventions.<br>See peer.service semantic conventions: https://opentelemetry.io/docs/specs/semconv/general/attributes/#general-remote-service-attributes<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `service_mapping` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalGeneralInstrumentation.peer`](#experimentalgeneralinstrumentation)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "service_mapping": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/ExperimentalPeerServiceMapping"
      }
    }
  }
}</pre>
</details>

## ExperimentalPeerServiceMapping <a id="experimentalpeerservicemapping"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`peer`</td><td>`string`</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">The IP address to map.<br></td>
</tr>
<tr>
<td width="5%">`service`</td><td>`string`</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">The logical name corresponding to the IP address of .peer.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `peer` | not_implemented | unknown | supported | unknown |
| `service` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["peer","service"]`

Usages:

* [`ExperimentalPeerInstrumentation.service_mapping`](#experimentalpeerinstrumentation)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "peer": {
      "type": "string"
    },
    "service": {
      "type": "string"
    }
  },
  "required": [
    "peer",
    "service"
  ]
}</pre>
</details>

## ExperimentalProbabilitySampler <a id="experimentalprobabilitysampler"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`ratio`</td><td>one of:<br>* `number`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 1.0 is used.</td><td>* `minimum`: `0`<br>* `maximum`: `1`<br></td><td width="20%">Configure ratio.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `ratio` | not_implemented | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Sampler.probability/development`](#sampler)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "ratio": {
      "type": [
        "number",
        "null"
      ],
      "minimum": 0,
      "maximum": 1
    }
  }
}</pre>
</details>

## ExperimentalProcessResourceDetector <a id="experimentalprocessresourcedetector"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalResourceDetector.process`](#experimentalresourcedetector)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## ExperimentalPrometheusMetricExporter <a id="experimentalprometheusmetricexporter"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`host`</td><td>one of:<br>* `string`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, localhost is used.</td><td>No constraints.</td><td width="20%">Configure host.<br></td>
</tr>
<tr>
<td width="5%">`port`</td><td>one of:<br>* `integer`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, 9464 is used.</td><td>No constraints.</td><td width="20%">Configure port.<br></td>
</tr>
<tr>
<td width="5%">`translation_strategy`</td><td>[`ExperimentalPrometheusTranslationStrategy`](#experimentalprometheustranslationstrategy)</td><td>`false`</td><td>If omitted, underscore_escaping_with_suffixes is used.</td><td>No constraints.</td><td width="20%">Configure how metric names are translated to Prometheus metric names.</td>
</tr>
<tr>
<td width="5%">`with_resource_constant_labels`</td><td>[`IncludeExclude`](#includeexclude)</td><td>`false`</td><td>If omitted, no resource attributes are added.</td><td>No constraints.</td><td width="20%">Configure Prometheus Exporter to add resource attributes as metrics attributes, where the resource attribute keys match the patterns.</td>
</tr>
<tr>
<td width="5%">`without_scope_info`</td><td>one of:<br>* `boolean`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, false is used.</td><td>No constraints.</td><td width="20%">Configure Prometheus Exporter to produce metrics without a scope info metric.<br></td>
</tr>
<tr>
<td width="5%">`without_target_info`</td><td>one of:<br>* `boolean`<br>* `null`<br></td><td>`false`</td><td>If omitted or null, false is used.</td><td>No constraints.</td><td width="20%">Configure Prometheus Exporter to produce metrics without a target info metric for the resource.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `host` | supported | unknown | supported | unknown |
| `port` | supported | unknown | supported | unknown |
| `translation_strategy` | supported | unknown | not_implemented | unknown |
| `with_resource_constant_labels` | supported | unknown | supported | unknown |
| `without_scope_info` | unknown | unknown | ignored | unknown |
| `without_target_info` | unknown | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PullMetricExporter.prometheus/development`](#pullmetricexporter)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "host": {
      "type": [
        "string",
        "null"
      ]
    },
    "port": {
      "type": [
        "integer",
        "null"
      ]
    },
    "without_scope_info": {
      "type": [
        "boolean",
        "null"
      ]
    },
    "without_target_info": {
      "type": [
        "boolean",
        "null"
      ]
    },
    "with_resource_constant_labels": {
      "$ref": "#/$defs/IncludeExclude"
    },
    "translation_strategy": {
      "$ref": "#/$defs/ExperimentalPrometheusTranslationStrategy"
    }
  }
}</pre>
</details>

## ExperimentalPrometheusTranslationStrategy <a id="experimentalprometheustranslationstrategy"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

This is a enum type.

| Value | Description |
|---|---|
| `no_translation` | Special character escaping is disabled. Type and unit suffixes are disabled. Metric names are unaltered. |
| `no_utf8_escaping_with_suffixes` | Special character escaping is disabled. Type and unit suffixes are enabled. |
| `underscore_escaping_with_suffixes` | Special character escaping is enabled. Type and unit suffixes are enabled. |
| `underscore_escaping_without_suffixes` | Special character escaping is enabled. Type and unit suffixes are disabled. This represents classic Prometheus metric name compatibility. |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `no_translation` | unknown | unknown | unknown | unknown |
| `no_utf8_escaping_with_suffixes` | unknown | unknown | unknown | unknown |
| `underscore_escaping_with_suffixes` | unknown | unknown | unknown | unknown |
| `underscore_escaping_without_suffixes` | unknown | unknown | unknown | unknown |
</details>

No constraints.

Usages:

* [`ExperimentalPrometheusMetricExporter.translation_strategy`](#experimentalprometheusmetricexporter)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "underscore_escaping_with_suffixes",
    "underscore_escaping_without_suffixes",
    "no_utf8_escaping_with_suffixes",
    "no_translation"
  ]
}</pre>
</details>

## ExperimentalResourceDetection <a id="experimentalresourcedetection"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`attributes`</td><td>[`IncludeExclude`](#includeexclude)</td><td>`false`</td><td>If omitted, all attributes from resource detectors are added.</td><td>No constraints.</td><td width="20%">Configure attributes provided by resource detectors.</td>
</tr>
<tr>
<td width="5%">`detectors`</td><td>`array` of [`ExperimentalResourceDetector`](#experimentalresourcedetector)</td><td>`false`</td><td>If omitted, no resource detectors are enabled.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure resource detectors.<br>Resource detector names are dependent on the SDK language ecosystem. Please consult documentation for each respective language. <br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `attributes` | not_implemented | unknown | supported | unknown |
| `detectors` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Resource.detection/development`](#resource)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "attributes": {
      "$ref": "#/$defs/IncludeExclude"
    },
    "detectors": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/ExperimentalResourceDetector"
      }
    }
  }
}</pre>
</details>

## ExperimentalResourceDetector <a id="experimentalresourcedetector"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

`ExperimentalResourceDetector` is an [SDK extension plugin](#sdk-extension-plugins).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`container`</td><td>[`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Enable the container resource detector, which populates container.* attributes.<br></td>
</tr>
<tr>
<td width="5%">`host`</td><td>[`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Enable the host resource detector, which populates host.* and os.* attributes.<br></td>
</tr>
<tr>
<td width="5%">`process`</td><td>[`ExperimentalProcessResourceDetector`](#experimentalprocessresourcedetector)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Enable the process resource detector, which populates process.* attributes.<br></td>
</tr>
<tr>
<td width="5%">`service`</td><td>[`ExperimentalServiceResourceDetector`](#experimentalserviceresourcedetector)</td><td>`false`</td><td>If omitted, ignore.</td><td>No constraints.</td><td width="20%">Enable the service detector, which populates service.name based on the OTEL_SERVICE_NAME environment variable and service.instance.id.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `container` | not_implemented | unknown | supported | unknown |
| `host` | not_implemented | unknown | supported | unknown |
| `process` | not_implemented | unknown | supported | unknown |
| `service` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`ExperimentalResourceDetection.detectors`](#experimentalresourcedetection)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.yaml)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "container": {
      "$ref": "#/$defs/ExperimentalContainerResourceDetector"
    },
    "host": {
      "$ref": "#/$defs/ExperimentalHostResourceDetector"
    },
    "process": {
      "$ref": "#/$defs/ExperimentalProcessResourceDetector"
    },
    "service": {
      "$ref": "#/$defs/ExperimentalServiceResourceDetector"
    }
  }
}</pre>
</details>

## ExperimentalServiceResourceDetector <a id="experimentalserviceresourcedetector"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalResourceDetector.service`](#experimentalresourcedetector)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## ExperimentalSpanParent <a id="experimentalspanparent"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

This is a enum type.

| Value | Description |
|---|---|
| `local` | local, a local parent. |
| `none` | none, no parent, i.e., the trace root. |
| `remote` | remote, a remote parent. |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `local` | unknown | unknown | unknown | unknown |
| `none` | unknown | unknown | unknown | unknown |
| `remote` | unknown | unknown | unknown | unknown |
</details>

No constraints.

Usages:

* [`ExperimentalComposableRuleBasedSamplerRule.parent`](#experimentalcomposablerulebasedsamplerrule)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "none",
    "remote",
    "local"
  ]
}</pre>
</details>

## ExperimentalTracerConfig <a id="experimentaltracerconfig"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`disabled`</td><td>`boolean`</td><td>`false`</td><td>If omitted, false is used.</td><td>No constraints.</td><td width="20%">Configure if the tracer is enabled or not.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `disabled` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalTracerConfigurator.default_config`](#experimentaltracerconfigurator)
* [`ExperimentalTracerMatcherAndConfig.config`](#experimentaltracermatcherandconfig)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "disabled": {
      "type": [
        "boolean"
      ]
    }
  }
}</pre>
</details>

## ExperimentalTracerConfigurator <a id="experimentaltracerconfigurator"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`default_config`</td><td>[`ExperimentalTracerConfig`](#experimentaltracerconfig)</td><td>`false`</td><td>If omitted, unmatched .tracers use default values as described in ExperimentalTracerConfig.</td><td>No constraints.</td><td width="20%">Configure the default tracer config used there is no matching entry in .tracer_configurator/development.tracers.</td>
</tr>
<tr>
<td width="5%">`tracers`</td><td>`array` of [`ExperimentalTracerMatcherAndConfig`](#experimentaltracermatcherandconfig)</td><td>`false`</td><td>If omitted, all tracers use .default_config.</td><td>* `minItems`: `1`<br></td><td width="20%">Configure tracers.</td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `default_config` | not_implemented | unknown | supported | unknown |
| `tracers` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TracerProvider.tracer_configurator/development`](#tracerprovider)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "default_config": {
      "$ref": "#/$defs/ExperimentalTracerConfig"
    },
    "tracers": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/ExperimentalTracerMatcherAndConfig"
      }
    }
  }
}</pre>
</details>

## ExperimentalTracerMatcherAndConfig <a id="experimentaltracermatcherandconfig"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

<table>
<tr>
<th width='5%'>Property</th>
<th>Type</th>
<th>Required?</th>
<th>Default and Null Behavior</th>
<th>Constraints</th>
<th width='20%'>Description</th>
</tr>
<tr>
<td width="5%">`config`</td><td>[`ExperimentalTracerConfig`](#experimentaltracerconfig)</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">The tracer config.</td>
</tr>
<tr>
<td width="5%">`name`</td><td>`string`</td><td>`true`</td><td>Property is required and must be non-null.</td><td>No constraints.</td><td width="20%">Configure tracer names to match, evaluated as follows:<br><br> * If the tracer name exactly matches.<br> * If the tracer name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br></td>
</tr>
</table>
<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `config` | not_implemented | unknown | supported | unknown |
| `name` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["name","config"]`

Usages:

* [`ExperimentalTracerConfigurator.tracers`](#experimentaltracerconfigurator)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "name": {
      "type": [
        "string"
      ]
    },
    "config": {
      "$ref": "#/$defs/ExperimentalTracerConfig"
    }
  },
  "required": [
    "name",
    "config"
  ]
}</pre>
</details>

# Language Support Status <a id="language-support-status"></a>

## cpp <a id="cpp"></a>

Latest supported file format: `1.0.0-rc.2`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| [`Aggregation`](#aggregation) | supported |  | * `base2_exponential_bucket_histogram`: supported<br>* `default`: supported<br>* `drop`: supported<br>* `explicit_bucket_histogram`: supported<br>* `last_value`: supported<br>* `sum`: supported<br> |
| [`AlwaysOffSampler`](#alwaysoffsampler) | supported |  |  |
| [`AlwaysOnSampler`](#alwaysonsampler) | supported |  |  |
| [`AttributeLimits`](#attributelimits) | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br> |
| [`AttributeNameValue`](#attributenamevalue) | supported |  | * `name`: supported<br>* `type`: supported<br>* `value`: supported<br> |
| [`AttributeType`](#attributetype) | supported |  | * `bool`: supported<br>* `bool_array`: supported<br>* `double`: supported<br>* `double_array`: supported<br>* `int`: supported<br>* `int_array`: supported<br>* `string`: supported<br>* `string_array`: supported<br> |
| [`B3MultiPropagator`](#b3multipropagator) | supported |  |  |
| [`B3Propagator`](#b3propagator) | supported |  |  |
| [`BaggagePropagator`](#baggagepropagator) | supported |  |  |
| [`Base2ExponentialBucketHistogramAggregation`](#base2exponentialbuckethistogramaggregation) | supported |  | * `max_scale`: supported<br>* `max_size`: supported<br>* `record_min_max`: supported<br> |
| [`BatchLogRecordProcessor`](#batchlogrecordprocessor) | supported |  | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| [`BatchSpanProcessor`](#batchspanprocessor) | supported |  | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| [`CardinalityLimits`](#cardinalitylimits) | not_implemented |  | * `counter`: not_implemented<br>* `default`: not_implemented<br>* `gauge`: not_implemented<br>* `histogram`: not_implemented<br>* `observable_counter`: not_implemented<br>* `observable_gauge`: not_implemented<br>* `observable_up_down_counter`: not_implemented<br>* `up_down_counter`: not_implemented<br> |
| [`ConsoleExporter`](#consoleexporter) | supported |  |  |
| [`ConsoleMetricExporter`](#consolemetricexporter) | supported |  | * `default_histogram_aggregation`: supported<br>* `temporality_preference`: supported<br> |
| [`DefaultAggregation`](#defaultaggregation) | supported |  |  |
| [`Distribution`](#distribution) | unknown |  |  |
| [`DropAggregation`](#dropaggregation) | supported |  |  |
| [`ExemplarFilter`](#exemplarfilter) | not_implemented |  | * `always_off`: not_implemented<br>* `always_on`: not_implemented<br>* `trace_based`: not_implemented<br> |
| [`ExplicitBucketHistogramAggregation`](#explicitbuckethistogramaggregation) | supported |  | * `boundaries`: supported<br>* `record_min_max`: supported<br> |
| [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | supported |  | * `base2_exponential_bucket_histogram`: supported<br>* `explicit_bucket_histogram`: supported<br> |
| [`ExporterTemporalityPreference`](#exportertemporalitypreference) | supported |  | * `cumulative`: supported<br>* `delta`: supported<br>* `low_memory`: supported<br> |
| [`GrpcTls`](#grpctls) | unknown |  | * `ca_file`: unknown<br>* `cert_file`: unknown<br>* `insecure`: unknown<br>* `key_file`: unknown<br> |
| [`HttpTls`](#httptls) | unknown |  | * `ca_file`: unknown<br>* `cert_file`: unknown<br>* `key_file`: unknown<br> |
| [`IncludeExclude`](#includeexclude) | supported |  | * `excluded`: supported<br>* `included`: supported<br> |
| [`InstrumentType`](#instrumenttype) | supported |  | * `counter`: supported<br>* `gauge`: supported<br>* `histogram`: supported<br>* `observable_counter`: supported<br>* `observable_gauge`: supported<br>* `observable_up_down_counter`: supported<br>* `up_down_counter`: supported<br> |
| [`JaegerPropagator`](#jaegerpropagator) | supported |  |  |
| [`LastValueAggregation`](#lastvalueaggregation) | supported |  |  |
| [`LoggerProvider`](#loggerprovider) | supported |  | * `limits`: supported<br>* `processors`: supported<br>* `logger_configurator/development`: supported<br> |
| [`LogRecordExporter`](#logrecordexporter) | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| [`LogRecordLimits`](#logrecordlimits) | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br> |
| [`LogRecordProcessor`](#logrecordprocessor) | supported |  | * `batch`: supported<br>* `simple`: supported<br> |
| [`MeterProvider`](#meterprovider) | supported |  | * `exemplar_filter`: supported<br>* `readers`: supported<br>* `views`: supported<br>* `meter_configurator/development`: supported<br> |
| [`MetricProducer`](#metricproducer) | supported |  | * `opencensus`: supported<br> |
| [`MetricReader`](#metricreader) | supported |  | * `periodic`: supported<br>* `pull`: supported<br> |
| [`NameStringValuePair`](#namestringvaluepair) | supported |  | * `name`: supported<br>* `value`: supported<br> |
| [`OpenCensusMetricProducer`](#opencensusmetricproducer) | supported |  |  |
| [`OpenTelemetryConfiguration`](#opentelemetryconfiguration) | supported |  | * `attribute_limits`: supported<br>* `disabled`: supported<br>* `distribution`: supported<br>* `file_format`: supported<br>* `log_level`: supported<br>* `logger_provider`: supported<br>* `meter_provider`: supported<br>* `propagator`: supported<br>* `resource`: supported<br>* `tracer_provider`: supported<br>* `instrumentation/development`: supported<br> |
| [`OpenTracingPropagator`](#opentracingpropagator) | not_implemented |  |  |
| [`OtlpGrpcExporter`](#otlpgrpcexporter) | supported |  | * `compression`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| [`OtlpGrpcMetricExporter`](#otlpgrpcmetricexporter) | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| [`OtlpHttpEncoding`](#otlphttpencoding) | supported |  | * `json`: supported<br>* `protobuf`: supported<br> |
| [`OtlpHttpExporter`](#otlphttpexporter) | supported |  | * `compression`: supported<br>* `encoding`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: supported<br>* `encoding`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| [`ParentBasedSampler`](#parentbasedsampler) | supported |  | * `local_parent_not_sampled`: supported<br>* `local_parent_sampled`: supported<br>* `remote_parent_not_sampled`: supported<br>* `remote_parent_sampled`: supported<br>* `root`: supported<br> |
| [`PeriodicMetricReader`](#periodicmetricreader) | supported |  | * `cardinality_limits`: supported<br>* `exporter`: supported<br>* `interval`: supported<br>* `producers`: supported<br>* `timeout`: supported<br> |
| [`Propagator`](#propagator) | supported |  | * `composite`: supported<br>* `composite_list`: supported<br> |
| [`PullMetricExporter`](#pullmetricexporter) | supported |  | * `prometheus/development`: supported<br> |
| [`PullMetricReader`](#pullmetricreader) | supported |  | * `cardinality_limits`: supported<br>* `exporter`: supported<br>* `producers`: supported<br> |
| [`PushMetricExporter`](#pushmetricexporter) | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| [`Resource`](#resource) | supported |  | * `attributes`: supported<br>* `attributes_list`: supported<br>* `schema_url`: supported<br>* `detection/development`: supported<br> |
| [`Sampler`](#sampler) | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `parent_based`: supported<br>* `trace_id_ratio_based`: supported<br>* `composite/development`: supported<br>* `jaeger_remote/development`: supported<br>* `probability/development`: supported<br> |
| [`SeverityNumber`](#severitynumber) | unknown |  | * `debug`: unknown<br>* `debug2`: unknown<br>* `debug3`: unknown<br>* `debug4`: unknown<br>* `error`: unknown<br>* `error2`: unknown<br>* `error3`: unknown<br>* `error4`: unknown<br>* `fatal`: unknown<br>* `fatal2`: unknown<br>* `fatal3`: unknown<br>* `fatal4`: unknown<br>* `info`: unknown<br>* `info2`: unknown<br>* `info3`: unknown<br>* `info4`: unknown<br>* `trace`: unknown<br>* `trace2`: unknown<br>* `trace3`: unknown<br>* `trace4`: unknown<br>* `warn`: unknown<br>* `warn2`: unknown<br>* `warn3`: unknown<br>* `warn4`: unknown<br> |
| [`SimpleLogRecordProcessor`](#simplelogrecordprocessor) | supported |  | * `exporter`: supported<br> |
| [`SimpleSpanProcessor`](#simplespanprocessor) | supported |  | * `exporter`: supported<br> |
| [`SpanExporter`](#spanexporter) | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| [`SpanKind`](#spankind) | unknown |  | * `client`: unknown<br>* `consumer`: unknown<br>* `internal`: unknown<br>* `producer`: unknown<br>* `server`: unknown<br> |
| [`SpanLimits`](#spanlimits) | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br>* `event_attribute_count_limit`: supported<br>* `event_count_limit`: supported<br>* `link_attribute_count_limit`: supported<br>* `link_count_limit`: supported<br> |
| [`SpanProcessor`](#spanprocessor) | supported |  | * `batch`: supported<br>* `simple`: supported<br> |
| [`SumAggregation`](#sumaggregation) | supported |  |  |
| [`TextMapPropagator`](#textmappropagator) | supported |  | * `b3`: supported<br>* `b3multi`: supported<br>* `baggage`: supported<br>* `jaeger`: supported<br>* `ottrace`: supported<br>* `tracecontext`: supported<br> |
| [`TraceContextPropagator`](#tracecontextpropagator) | supported |  |  |
| [`TraceIdRatioBasedSampler`](#traceidratiobasedsampler) | supported |  | * `ratio`: supported<br> |
| [`TracerProvider`](#tracerprovider) | supported |  | * `limits`: supported<br>* `processors`: supported<br>* `sampler`: supported<br>* `tracer_configurator/development`: supported<br> |
| [`View`](#view) | supported |  | * `selector`: supported<br>* `stream`: supported<br> |
| [`ViewSelector`](#viewselector) | supported |  | * `instrument_name`: supported<br>* `instrument_type`: supported<br>* `meter_name`: supported<br>* `meter_schema_url`: supported<br>* `meter_version`: supported<br>* `unit`: supported<br> |
| [`ViewStream`](#viewstream) | supported |  | * `aggregation`: supported<br>* `aggregation_cardinality_limit`: supported<br>* `attribute_keys`: supported<br>* `description`: supported<br>* `name`: supported<br> |
| [`ExperimentalComposableAlwaysOffSampler`](#experimentalcomposablealwaysoffsampler) | unknown |  |  |
| [`ExperimentalComposableAlwaysOnSampler`](#experimentalcomposablealwaysonsampler) | unknown |  |  |
| [`ExperimentalComposableParentThresholdSampler`](#experimentalcomposableparentthresholdsampler) | unknown |  | * `root`: unknown<br> |
| [`ExperimentalComposableProbabilitySampler`](#experimentalcomposableprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalComposableRuleBasedSampler`](#experimentalcomposablerulebasedsampler) | unknown |  | * `rules`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRule`](#experimentalcomposablerulebasedsamplerrule) | unknown |  | * `attribute_patterns`: unknown<br>* `attribute_values`: unknown<br>* `parent`: unknown<br>* `sampler`: unknown<br>* `span_kinds`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributePatterns`](#experimentalcomposablerulebasedsamplerruleattributepatterns) | unknown |  | * `excluded`: unknown<br>* `included`: unknown<br>* `key`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributeValues`](#experimentalcomposablerulebasedsamplerruleattributevalues) | unknown |  | * `key`: unknown<br>* `values`: unknown<br> |
| [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_threshold`: unknown<br>* `probability`: unknown<br>* `rule_based`: unknown<br> |
| [`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector) | not_implemented |  |  |
| [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | not_applicable |  | * `http`: not_applicable<br>* `peer`: not_applicable<br> |
| [`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector) | not_implemented |  |  |
| [`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation) | not_applicable |  | * `request_captured_headers`: not_applicable<br>* `response_captured_headers`: not_applicable<br> |
| [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | not_applicable |  | * `client`: not_applicable<br>* `server`: not_applicable<br> |
| [`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation) | not_applicable |  | * `request_captured_headers`: not_applicable<br>* `response_captured_headers`: not_applicable<br> |
| [`ExperimentalInstrumentation`](#experimentalinstrumentation) | not_applicable |  | * `cpp`: not_applicable<br>* `dotnet`: not_applicable<br>* `erlang`: not_applicable<br>* `general`: not_applicable<br>* `go`: not_applicable<br>* `java`: not_applicable<br>* `js`: not_applicable<br>* `php`: not_applicable<br>* `python`: not_applicable<br>* `ruby`: not_applicable<br>* `rust`: not_applicable<br>* `swift`: not_applicable<br> |
| [`ExperimentalJaegerRemoteSampler`](#experimentaljaegerremotesampler) | not_implemented |  | * `endpoint`: not_implemented<br>* `initial_sampler`: not_implemented<br>* `interval`: not_implemented<br> |
| [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | not_applicable |  |  |
| [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | not_implemented |  | * `disabled`: not_implemented<br>* `minimum_severity`: not_implemented<br>* `trace_based`: not_implemented<br> |
| [`ExperimentalLoggerConfigurator`](#experimentalloggerconfigurator) | not_implemented |  | * `default_config`: not_implemented<br>* `loggers`: not_implemented<br> |
| [`ExperimentalLoggerMatcherAndConfig`](#experimentalloggermatcherandconfig) | not_implemented |  | * `config`: not_implemented<br>* `name`: not_implemented<br> |
| [`ExperimentalMeterConfig`](#experimentalmeterconfig) | not_implemented |  | * `disabled`: not_implemented<br> |
| [`ExperimentalMeterConfigurator`](#experimentalmeterconfigurator) | not_implemented |  | * `default_config`: not_implemented<br>* `meters`: not_implemented<br> |
| [`ExperimentalMeterMatcherAndConfig`](#experimentalmetermatcherandconfig) | not_implemented |  | * `config`: not_implemented<br>* `name`: not_implemented<br> |
| [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | supported |  | * `output_stream`: supported<br> |
| [`ExperimentalOtlpFileMetricExporter`](#experimentalotlpfilemetricexporter) | supported |  | * `default_histogram_aggregation`: supported<br>* `output_stream`: supported<br>* `temporality_preference`: supported<br> |
| [`ExperimentalPeerInstrumentation`](#experimentalpeerinstrumentation) | not_implemented |  | * `service_mapping`: not_implemented<br> |
| [`ExperimentalPeerServiceMapping`](#experimentalpeerservicemapping) | not_implemented |  | * `peer`: not_implemented<br>* `service`: not_implemented<br> |
| [`ExperimentalProbabilitySampler`](#experimentalprobabilitysampler) | not_implemented |  | * `ratio`: not_implemented<br> |
| [`ExperimentalProcessResourceDetector`](#experimentalprocessresourcedetector) | not_implemented |  |  |
| [`ExperimentalPrometheusMetricExporter`](#experimentalprometheusmetricexporter) | supported |  | * `host`: supported<br>* `port`: supported<br>* `translation_strategy`: supported<br>* `with_resource_constant_labels`: supported<br>* `without_scope_info`: unknown<br>* `without_target_info`: unknown<br> |
| [`ExperimentalPrometheusTranslationStrategy`](#experimentalprometheustranslationstrategy) | unknown |  | * `no_translation`: unknown<br>* `no_utf8_escaping_with_suffixes`: unknown<br>* `underscore_escaping_with_suffixes`: unknown<br>* `underscore_escaping_without_suffixes`: unknown<br> |
| [`ExperimentalResourceDetection`](#experimentalresourcedetection) | not_implemented |  | * `attributes`: not_implemented<br>* `detectors`: not_implemented<br> |
| [`ExperimentalResourceDetector`](#experimentalresourcedetector) | not_implemented |  | * `container`: not_implemented<br>* `host`: not_implemented<br>* `process`: not_implemented<br>* `service`: not_implemented<br> |
| [`ExperimentalServiceResourceDetector`](#experimentalserviceresourcedetector) | not_implemented |  |  |
| [`ExperimentalSpanParent`](#experimentalspanparent) | unknown |  | * `local`: unknown<br>* `none`: unknown<br>* `remote`: unknown<br> |
| [`ExperimentalTracerConfig`](#experimentaltracerconfig) | not_implemented |  | * `disabled`: not_implemented<br> |
| [`ExperimentalTracerConfigurator`](#experimentaltracerconfigurator) | not_implemented |  | * `default_config`: not_implemented<br>* `tracers`: not_implemented<br> |
| [`ExperimentalTracerMatcherAndConfig`](#experimentaltracermatcherandconfig) | not_implemented |  | * `config`: not_implemented<br>* `name`: not_implemented<br> |


## go <a id="go"></a>

Latest supported file format: `0.3.0`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| [`Aggregation`](#aggregation) | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `default`: unknown<br>* `drop`: unknown<br>* `explicit_bucket_histogram`: unknown<br>* `last_value`: unknown<br>* `sum`: unknown<br> |
| [`AlwaysOffSampler`](#alwaysoffsampler) | unknown |  |  |
| [`AlwaysOnSampler`](#alwaysonsampler) | unknown |  |  |
| [`AttributeLimits`](#attributelimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br> |
| [`AttributeNameValue`](#attributenamevalue) | unknown |  | * `name`: unknown<br>* `type`: unknown<br>* `value`: unknown<br> |
| [`AttributeType`](#attributetype) | unknown |  | * `bool`: unknown<br>* `bool_array`: unknown<br>* `double`: unknown<br>* `double_array`: unknown<br>* `int`: unknown<br>* `int_array`: unknown<br>* `string`: unknown<br>* `string_array`: unknown<br> |
| [`B3MultiPropagator`](#b3multipropagator) | unknown |  |  |
| [`B3Propagator`](#b3propagator) | unknown |  |  |
| [`BaggagePropagator`](#baggagepropagator) | unknown |  |  |
| [`Base2ExponentialBucketHistogramAggregation`](#base2exponentialbuckethistogramaggregation) | unknown |  | * `max_scale`: unknown<br>* `max_size`: unknown<br>* `record_min_max`: unknown<br> |
| [`BatchLogRecordProcessor`](#batchlogrecordprocessor) | unknown |  | * `export_timeout`: unknown<br>* `exporter`: unknown<br>* `max_export_batch_size`: unknown<br>* `max_queue_size`: unknown<br>* `schedule_delay`: unknown<br> |
| [`BatchSpanProcessor`](#batchspanprocessor) | unknown |  | * `export_timeout`: unknown<br>* `exporter`: unknown<br>* `max_export_batch_size`: unknown<br>* `max_queue_size`: unknown<br>* `schedule_delay`: unknown<br> |
| [`CardinalityLimits`](#cardinalitylimits) | unknown |  | * `counter`: unknown<br>* `default`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| [`ConsoleExporter`](#consoleexporter) | unknown |  |  |
| [`ConsoleMetricExporter`](#consolemetricexporter) | unknown |  | * `default_histogram_aggregation`: unknown<br>* `temporality_preference`: unknown<br> |
| [`DefaultAggregation`](#defaultaggregation) | unknown |  |  |
| [`Distribution`](#distribution) | unknown |  |  |
| [`DropAggregation`](#dropaggregation) | unknown |  |  |
| [`ExemplarFilter`](#exemplarfilter) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `trace_based`: unknown<br> |
| [`ExplicitBucketHistogramAggregation`](#explicitbuckethistogramaggregation) | unknown |  | * `boundaries`: unknown<br>* `record_min_max`: unknown<br> |
| [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `explicit_bucket_histogram`: unknown<br> |
| [`ExporterTemporalityPreference`](#exportertemporalitypreference) | unknown |  | * `cumulative`: unknown<br>* `delta`: unknown<br>* `low_memory`: unknown<br> |
| [`GrpcTls`](#grpctls) | unknown |  | * `ca_file`: unknown<br>* `cert_file`: unknown<br>* `insecure`: unknown<br>* `key_file`: unknown<br> |
| [`HttpTls`](#httptls) | unknown |  | * `ca_file`: unknown<br>* `cert_file`: unknown<br>* `key_file`: unknown<br> |
| [`IncludeExclude`](#includeexclude) | unknown |  | * `excluded`: unknown<br>* `included`: unknown<br> |
| [`InstrumentType`](#instrumenttype) | unknown |  | * `counter`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| [`JaegerPropagator`](#jaegerpropagator) | unknown |  |  |
| [`LastValueAggregation`](#lastvalueaggregation) | unknown |  |  |
| [`LoggerProvider`](#loggerprovider) | unknown |  | * `limits`: unknown<br>* `processors`: unknown<br>* `logger_configurator/development`: unknown<br> |
| [`LogRecordExporter`](#logrecordexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`LogRecordLimits`](#logrecordlimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br> |
| [`LogRecordProcessor`](#logrecordprocessor) | unknown |  | * `batch`: unknown<br>* `simple`: unknown<br> |
| [`MeterProvider`](#meterprovider) | unknown |  | * `exemplar_filter`: unknown<br>* `readers`: unknown<br>* `views`: unknown<br>* `meter_configurator/development`: unknown<br> |
| [`MetricProducer`](#metricproducer) | unknown |  | * `opencensus`: unknown<br> |
| [`MetricReader`](#metricreader) | unknown |  | * `periodic`: unknown<br>* `pull`: unknown<br> |
| [`NameStringValuePair`](#namestringvaluepair) | unknown |  | * `name`: unknown<br>* `value`: unknown<br> |
| [`OpenCensusMetricProducer`](#opencensusmetricproducer) | unknown |  |  |
| [`OpenTelemetryConfiguration`](#opentelemetryconfiguration) | unknown |  | * `attribute_limits`: unknown<br>* `disabled`: unknown<br>* `distribution`: unknown<br>* `file_format`: unknown<br>* `log_level`: unknown<br>* `logger_provider`: unknown<br>* `meter_provider`: unknown<br>* `propagator`: unknown<br>* `resource`: unknown<br>* `tracer_provider`: unknown<br>* `instrumentation/development`: unknown<br> |
| [`OpenTracingPropagator`](#opentracingpropagator) | unknown |  |  |
| [`OtlpGrpcExporter`](#otlpgrpcexporter) | unknown |  | * `compression`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpGrpcMetricExporter`](#otlpgrpcmetricexporter) | unknown |  | * `compression`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `temporality_preference`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpEncoding`](#otlphttpencoding) | unknown |  | * `json`: unknown<br>* `protobuf`: unknown<br> |
| [`OtlpHttpExporter`](#otlphttpexporter) | unknown |  | * `compression`: unknown<br>* `encoding`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | unknown |  | * `compression`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `encoding`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `temporality_preference`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`ParentBasedSampler`](#parentbasedsampler) | unknown |  | * `local_parent_not_sampled`: unknown<br>* `local_parent_sampled`: unknown<br>* `remote_parent_not_sampled`: unknown<br>* `remote_parent_sampled`: unknown<br>* `root`: unknown<br> |
| [`PeriodicMetricReader`](#periodicmetricreader) | unknown |  | * `cardinality_limits`: unknown<br>* `exporter`: unknown<br>* `interval`: unknown<br>* `producers`: unknown<br>* `timeout`: unknown<br> |
| [`Propagator`](#propagator) | unknown |  | * `composite`: unknown<br>* `composite_list`: unknown<br> |
| [`PullMetricExporter`](#pullmetricexporter) | unknown |  | * `prometheus/development`: unknown<br> |
| [`PullMetricReader`](#pullmetricreader) | unknown |  | * `cardinality_limits`: unknown<br>* `exporter`: unknown<br>* `producers`: unknown<br> |
| [`PushMetricExporter`](#pushmetricexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`Resource`](#resource) | unknown |  | * `attributes`: unknown<br>* `attributes_list`: unknown<br>* `schema_url`: unknown<br>* `detection/development`: unknown<br> |
| [`Sampler`](#sampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_based`: unknown<br>* `trace_id_ratio_based`: unknown<br>* `composite/development`: unknown<br>* `jaeger_remote/development`: unknown<br>* `probability/development`: unknown<br> |
| [`SeverityNumber`](#severitynumber) | unknown |  | * `debug`: unknown<br>* `debug2`: unknown<br>* `debug3`: unknown<br>* `debug4`: unknown<br>* `error`: unknown<br>* `error2`: unknown<br>* `error3`: unknown<br>* `error4`: unknown<br>* `fatal`: unknown<br>* `fatal2`: unknown<br>* `fatal3`: unknown<br>* `fatal4`: unknown<br>* `info`: unknown<br>* `info2`: unknown<br>* `info3`: unknown<br>* `info4`: unknown<br>* `trace`: unknown<br>* `trace2`: unknown<br>* `trace3`: unknown<br>* `trace4`: unknown<br>* `warn`: unknown<br>* `warn2`: unknown<br>* `warn3`: unknown<br>* `warn4`: unknown<br> |
| [`SimpleLogRecordProcessor`](#simplelogrecordprocessor) | unknown |  | * `exporter`: unknown<br> |
| [`SimpleSpanProcessor`](#simplespanprocessor) | unknown |  | * `exporter`: unknown<br> |
| [`SpanExporter`](#spanexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`SpanKind`](#spankind) | unknown |  | * `client`: unknown<br>* `consumer`: unknown<br>* `internal`: unknown<br>* `producer`: unknown<br>* `server`: unknown<br> |
| [`SpanLimits`](#spanlimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br>* `event_attribute_count_limit`: unknown<br>* `event_count_limit`: unknown<br>* `link_attribute_count_limit`: unknown<br>* `link_count_limit`: unknown<br> |
| [`SpanProcessor`](#spanprocessor) | unknown |  | * `batch`: unknown<br>* `simple`: unknown<br> |
| [`SumAggregation`](#sumaggregation) | unknown |  |  |
| [`TextMapPropagator`](#textmappropagator) | unknown |  | * `b3`: unknown<br>* `b3multi`: unknown<br>* `baggage`: unknown<br>* `jaeger`: unknown<br>* `ottrace`: unknown<br>* `tracecontext`: unknown<br> |
| [`TraceContextPropagator`](#tracecontextpropagator) | unknown |  |  |
| [`TraceIdRatioBasedSampler`](#traceidratiobasedsampler) | unknown |  | * `ratio`: unknown<br> |
| [`TracerProvider`](#tracerprovider) | unknown |  | * `limits`: unknown<br>* `processors`: unknown<br>* `sampler`: unknown<br>* `tracer_configurator/development`: unknown<br> |
| [`View`](#view) | unknown |  | * `selector`: unknown<br>* `stream`: unknown<br> |
| [`ViewSelector`](#viewselector) | unknown |  | * `instrument_name`: unknown<br>* `instrument_type`: unknown<br>* `meter_name`: unknown<br>* `meter_schema_url`: unknown<br>* `meter_version`: unknown<br>* `unit`: unknown<br> |
| [`ViewStream`](#viewstream) | unknown |  | * `aggregation`: unknown<br>* `aggregation_cardinality_limit`: unknown<br>* `attribute_keys`: unknown<br>* `description`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalComposableAlwaysOffSampler`](#experimentalcomposablealwaysoffsampler) | unknown |  |  |
| [`ExperimentalComposableAlwaysOnSampler`](#experimentalcomposablealwaysonsampler) | unknown |  |  |
| [`ExperimentalComposableParentThresholdSampler`](#experimentalcomposableparentthresholdsampler) | unknown |  | * `root`: unknown<br> |
| [`ExperimentalComposableProbabilitySampler`](#experimentalcomposableprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalComposableRuleBasedSampler`](#experimentalcomposablerulebasedsampler) | unknown |  | * `rules`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRule`](#experimentalcomposablerulebasedsamplerrule) | unknown |  | * `attribute_patterns`: unknown<br>* `attribute_values`: unknown<br>* `parent`: unknown<br>* `sampler`: unknown<br>* `span_kinds`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributePatterns`](#experimentalcomposablerulebasedsamplerruleattributepatterns) | unknown |  | * `excluded`: unknown<br>* `included`: unknown<br>* `key`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributeValues`](#experimentalcomposablerulebasedsamplerruleattributevalues) | unknown |  | * `key`: unknown<br>* `values`: unknown<br> |
| [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_threshold`: unknown<br>* `probability`: unknown<br>* `rule_based`: unknown<br> |
| [`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector) | unknown |  |  |
| [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | unknown |  | * `http`: unknown<br>* `peer`: unknown<br> |
| [`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector) | unknown |  |  |
| [`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | unknown |  | * `client`: unknown<br>* `server`: unknown<br> |
| [`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalInstrumentation`](#experimentalinstrumentation) | unknown |  | * `cpp`: unknown<br>* `dotnet`: unknown<br>* `erlang`: unknown<br>* `general`: unknown<br>* `go`: unknown<br>* `java`: unknown<br>* `js`: unknown<br>* `php`: unknown<br>* `python`: unknown<br>* `ruby`: unknown<br>* `rust`: unknown<br>* `swift`: unknown<br> |
| [`ExperimentalJaegerRemoteSampler`](#experimentaljaegerremotesampler) | unknown |  | * `endpoint`: unknown<br>* `initial_sampler`: unknown<br>* `interval`: unknown<br> |
| [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | unknown |  |  |
| [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | unknown |  | * `disabled`: unknown<br>* `minimum_severity`: unknown<br>* `trace_based`: unknown<br> |
| [`ExperimentalLoggerConfigurator`](#experimentalloggerconfigurator) | unknown |  | * `default_config`: unknown<br>* `loggers`: unknown<br> |
| [`ExperimentalLoggerMatcherAndConfig`](#experimentalloggermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalMeterConfig`](#experimentalmeterconfig) | unknown |  | * `disabled`: unknown<br> |
| [`ExperimentalMeterConfigurator`](#experimentalmeterconfigurator) | unknown |  | * `default_config`: unknown<br>* `meters`: unknown<br> |
| [`ExperimentalMeterMatcherAndConfig`](#experimentalmetermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | unknown |  | * `output_stream`: unknown<br> |
| [`ExperimentalOtlpFileMetricExporter`](#experimentalotlpfilemetricexporter) | unknown |  | * `default_histogram_aggregation`: unknown<br>* `output_stream`: unknown<br>* `temporality_preference`: unknown<br> |
| [`ExperimentalPeerInstrumentation`](#experimentalpeerinstrumentation) | unknown |  | * `service_mapping`: unknown<br> |
| [`ExperimentalPeerServiceMapping`](#experimentalpeerservicemapping) | unknown |  | * `peer`: unknown<br>* `service`: unknown<br> |
| [`ExperimentalProbabilitySampler`](#experimentalprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalProcessResourceDetector`](#experimentalprocessresourcedetector) | unknown |  |  |
| [`ExperimentalPrometheusMetricExporter`](#experimentalprometheusmetricexporter) | unknown |  | * `host`: unknown<br>* `port`: unknown<br>* `translation_strategy`: unknown<br>* `with_resource_constant_labels`: unknown<br>* `without_scope_info`: unknown<br>* `without_target_info`: unknown<br> |
| [`ExperimentalPrometheusTranslationStrategy`](#experimentalprometheustranslationstrategy) | unknown |  | * `no_translation`: unknown<br>* `no_utf8_escaping_with_suffixes`: unknown<br>* `underscore_escaping_with_suffixes`: unknown<br>* `underscore_escaping_without_suffixes`: unknown<br> |
| [`ExperimentalResourceDetection`](#experimentalresourcedetection) | unknown |  | * `attributes`: unknown<br>* `detectors`: unknown<br> |
| [`ExperimentalResourceDetector`](#experimentalresourcedetector) | unknown |  | * `container`: unknown<br>* `host`: unknown<br>* `process`: unknown<br>* `service`: unknown<br> |
| [`ExperimentalServiceResourceDetector`](#experimentalserviceresourcedetector) | unknown |  |  |
| [`ExperimentalSpanParent`](#experimentalspanparent) | unknown |  | * `local`: unknown<br>* `none`: unknown<br>* `remote`: unknown<br> |
| [`ExperimentalTracerConfig`](#experimentaltracerconfig) | unknown |  | * `disabled`: unknown<br> |
| [`ExperimentalTracerConfigurator`](#experimentaltracerconfigurator) | unknown |  | * `default_config`: unknown<br>* `tracers`: unknown<br> |
| [`ExperimentalTracerMatcherAndConfig`](#experimentaltracermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |


## java <a id="java"></a>

Latest supported file format: `1.0.0-rc.1`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| [`Aggregation`](#aggregation) | supported |  | * `base2_exponential_bucket_histogram`: supported<br>* `default`: supported<br>* `drop`: supported<br>* `explicit_bucket_histogram`: supported<br>* `last_value`: supported<br>* `sum`: supported<br> |
| [`AlwaysOffSampler`](#alwaysoffsampler) | supported |  |  |
| [`AlwaysOnSampler`](#alwaysonsampler) | supported |  |  |
| [`AttributeLimits`](#attributelimits) | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br> |
| [`AttributeNameValue`](#attributenamevalue) | supported |  | * `name`: supported<br>* `type`: supported<br>* `value`: supported<br> |
| [`AttributeType`](#attributetype) | supported |  | * `bool`: supported<br>* `bool_array`: supported<br>* `double`: supported<br>* `double_array`: supported<br>* `int`: supported<br>* `int_array`: supported<br>* `string`: supported<br>* `string_array`: supported<br> |
| [`B3MultiPropagator`](#b3multipropagator) | supported |  |  |
| [`B3Propagator`](#b3propagator) | supported |  |  |
| [`BaggagePropagator`](#baggagepropagator) | supported |  |  |
| [`Base2ExponentialBucketHistogramAggregation`](#base2exponentialbuckethistogramaggregation) | supported |  | * `max_scale`: supported<br>* `max_size`: supported<br>* `record_min_max`: not_implemented<br> |
| [`BatchLogRecordProcessor`](#batchlogrecordprocessor) | supported |  | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| [`BatchSpanProcessor`](#batchspanprocessor) | supported |  | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| [`CardinalityLimits`](#cardinalitylimits) | supported |  | * `counter`: supported<br>* `default`: supported<br>* `gauge`: supported<br>* `histogram`: supported<br>* `observable_counter`: supported<br>* `observable_gauge`: supported<br>* `observable_up_down_counter`: supported<br>* `up_down_counter`: supported<br> |
| [`ConsoleExporter`](#consoleexporter) | supported |  |  |
| [`ConsoleMetricExporter`](#consolemetricexporter) | supported |  | * `default_histogram_aggregation`: not_implemented<br>* `temporality_preference`: ignored<br> |
| [`DefaultAggregation`](#defaultaggregation) | supported |  |  |
| [`Distribution`](#distribution) | unknown |  |  |
| [`DropAggregation`](#dropaggregation) | supported |  |  |
| [`ExemplarFilter`](#exemplarfilter) | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `trace_based`: supported<br> |
| [`ExplicitBucketHistogramAggregation`](#explicitbuckethistogramaggregation) | supported |  | * `boundaries`: supported<br>* `record_min_max`: not_implemented<br> |
| [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | supported |  | * `base2_exponential_bucket_histogram`: supported<br>* `explicit_bucket_histogram`: supported<br> |
| [`ExporterTemporalityPreference`](#exportertemporalitypreference) | supported |  | * `cumulative`: supported<br>* `delta`: supported<br>* `low_memory`: supported<br> |
| [`GrpcTls`](#grpctls) | not_implemented |  | * `ca_file`: not_implemented<br>* `cert_file`: not_implemented<br>* `insecure`: not_implemented<br>* `key_file`: not_implemented<br> |
| [`HttpTls`](#httptls) | not_implemented |  | * `ca_file`: not_implemented<br>* `cert_file`: not_implemented<br>* `key_file`: not_implemented<br> |
| [`IncludeExclude`](#includeexclude) | supported |  | * `excluded`: supported<br>* `included`: supported<br> |
| [`InstrumentType`](#instrumenttype) | supported |  | * `counter`: supported<br>* `gauge`: supported<br>* `histogram`: supported<br>* `observable_counter`: supported<br>* `observable_gauge`: supported<br>* `observable_up_down_counter`: supported<br>* `up_down_counter`: supported<br> |
| [`JaegerPropagator`](#jaegerpropagator) | supported |  |  |
| [`LastValueAggregation`](#lastvalueaggregation) | supported |  |  |
| [`LoggerProvider`](#loggerprovider) | supported |  | * `limits`: supported<br>* `processors`: supported<br>* `logger_configurator/development`: supported<br> |
| [`LogRecordExporter`](#logrecordexporter) | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| [`LogRecordLimits`](#logrecordlimits) | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br> |
| [`LogRecordProcessor`](#logrecordprocessor) | supported |  | * `batch`: supported<br>* `simple`: supported<br> |
| [`MeterProvider`](#meterprovider) | supported |  | * `exemplar_filter`: supported<br>* `readers`: supported<br>* `views`: supported<br>* `meter_configurator/development`: supported<br> |
| [`MetricProducer`](#metricproducer) | ignored |  | * `opencensus`: ignored<br> |
| [`MetricReader`](#metricreader) | supported |  | * `periodic`: supported<br>* `pull`: supported<br> |
| [`NameStringValuePair`](#namestringvaluepair) | supported |  | * `name`: supported<br>* `value`: supported<br> |
| [`OpenCensusMetricProducer`](#opencensusmetricproducer) | ignored |  |  |
| [`OpenTelemetryConfiguration`](#opentelemetryconfiguration) | supported |  | * `attribute_limits`: supported<br>* `disabled`: supported<br>* `distribution`: supported<br>* `file_format`: supported<br>* `log_level`: not_implemented<br>* `logger_provider`: supported<br>* `meter_provider`: supported<br>* `propagator`: supported<br>* `resource`: supported<br>* `tracer_provider`: supported<br>* `instrumentation/development`: supported<br> |
| [`OpenTracingPropagator`](#opentracingpropagator) | supported |  |  |
| [`OtlpGrpcExporter`](#otlpgrpcexporter) | supported |  | * `compression`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `timeout`: supported<br>* `tls`: ignored<br> |
| [`OtlpGrpcMetricExporter`](#otlpgrpcmetricexporter) | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: ignored<br> |
| [`OtlpHttpEncoding`](#otlphttpencoding) | not_implemented |  | * `json`: not_implemented<br>* `protobuf`: not_implemented<br> |
| [`OtlpHttpExporter`](#otlphttpexporter) | supported |  | * `compression`: supported<br>* `encoding`: not_implemented<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `timeout`: supported<br>* `tls`: ignored<br> |
| [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: supported<br>* `encoding`: not_implemented<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: ignored<br> |
| [`ParentBasedSampler`](#parentbasedsampler) | supported |  | * `local_parent_not_sampled`: supported<br>* `local_parent_sampled`: supported<br>* `remote_parent_not_sampled`: supported<br>* `remote_parent_sampled`: supported<br>* `root`: supported<br> |
| [`PeriodicMetricReader`](#periodicmetricreader) | supported |  | * `cardinality_limits`: supported<br>* `exporter`: supported<br>* `interval`: supported<br>* `producers`: not_implemented<br>* `timeout`: supported<br> |
| [`Propagator`](#propagator) | supported |  | * `composite`: supported<br>* `composite_list`: supported<br> |
| [`PullMetricExporter`](#pullmetricexporter) | supported |  | * `prometheus/development`: supported<br> |
| [`PullMetricReader`](#pullmetricreader) | supported |  | * `cardinality_limits`: supported<br>* `exporter`: supported<br>* `producers`: not_implemented<br> |
| [`PushMetricExporter`](#pushmetricexporter) | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| [`Resource`](#resource) | supported |  | * `attributes`: supported<br>* `attributes_list`: supported<br>* `schema_url`: ignored<br>* `detection/development`: supported<br> |
| [`Sampler`](#sampler) | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `parent_based`: supported<br>* `trace_id_ratio_based`: supported<br>* `composite/development`: supported<br>* `jaeger_remote/development`: supported<br>* `probability/development`: ignored<br> |
| [`SeverityNumber`](#severitynumber) | unknown |  | * `debug`: unknown<br>* `debug2`: unknown<br>* `debug3`: unknown<br>* `debug4`: unknown<br>* `error`: unknown<br>* `error2`: unknown<br>* `error3`: unknown<br>* `error4`: unknown<br>* `fatal`: unknown<br>* `fatal2`: unknown<br>* `fatal3`: unknown<br>* `fatal4`: unknown<br>* `info`: unknown<br>* `info2`: unknown<br>* `info3`: unknown<br>* `info4`: unknown<br>* `trace`: unknown<br>* `trace2`: unknown<br>* `trace3`: unknown<br>* `trace4`: unknown<br>* `warn`: unknown<br>* `warn2`: unknown<br>* `warn3`: unknown<br>* `warn4`: unknown<br> |
| [`SimpleLogRecordProcessor`](#simplelogrecordprocessor) | supported |  | * `exporter`: supported<br> |
| [`SimpleSpanProcessor`](#simplespanprocessor) | supported |  | * `exporter`: supported<br> |
| [`SpanExporter`](#spanexporter) | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| [`SpanKind`](#spankind) | unknown |  | * `client`: unknown<br>* `consumer`: unknown<br>* `internal`: unknown<br>* `producer`: unknown<br>* `server`: unknown<br> |
| [`SpanLimits`](#spanlimits) | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br>* `event_attribute_count_limit`: supported<br>* `event_count_limit`: supported<br>* `link_attribute_count_limit`: supported<br>* `link_count_limit`: supported<br> |
| [`SpanProcessor`](#spanprocessor) | supported |  | * `batch`: supported<br>* `simple`: supported<br> |
| [`SumAggregation`](#sumaggregation) | supported |  |  |
| [`TextMapPropagator`](#textmappropagator) | supported |  | * `b3`: supported<br>* `b3multi`: supported<br>* `baggage`: supported<br>* `jaeger`: supported<br>* `ottrace`: supported<br>* `tracecontext`: supported<br> |
| [`TraceContextPropagator`](#tracecontextpropagator) | supported |  |  |
| [`TraceIdRatioBasedSampler`](#traceidratiobasedsampler) | supported |  | * `ratio`: supported<br> |
| [`TracerProvider`](#tracerprovider) | supported |  | * `limits`: supported<br>* `processors`: supported<br>* `sampler`: supported<br>* `tracer_configurator/development`: supported<br> |
| [`View`](#view) | supported |  | * `selector`: supported<br>* `stream`: supported<br> |
| [`ViewSelector`](#viewselector) | supported |  | * `instrument_name`: supported<br>* `instrument_type`: supported<br>* `meter_name`: supported<br>* `meter_schema_url`: supported<br>* `meter_version`: supported<br>* `unit`: ignored<br> |
| [`ViewStream`](#viewstream) | supported |  | * `aggregation`: supported<br>* `aggregation_cardinality_limit`: supported<br>* `attribute_keys`: supported<br>* `description`: supported<br>* `name`: supported<br> |
| [`ExperimentalComposableAlwaysOffSampler`](#experimentalcomposablealwaysoffsampler) | unknown |  |  |
| [`ExperimentalComposableAlwaysOnSampler`](#experimentalcomposablealwaysonsampler) | unknown |  |  |
| [`ExperimentalComposableParentThresholdSampler`](#experimentalcomposableparentthresholdsampler) | unknown |  | * `root`: unknown<br> |
| [`ExperimentalComposableProbabilitySampler`](#experimentalcomposableprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalComposableRuleBasedSampler`](#experimentalcomposablerulebasedsampler) | unknown |  | * `rules`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRule`](#experimentalcomposablerulebasedsamplerrule) | unknown |  | * `attribute_patterns`: unknown<br>* `attribute_values`: unknown<br>* `parent`: unknown<br>* `sampler`: unknown<br>* `span_kinds`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributePatterns`](#experimentalcomposablerulebasedsamplerruleattributepatterns) | unknown |  | * `excluded`: unknown<br>* `included`: unknown<br>* `key`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributeValues`](#experimentalcomposablerulebasedsamplerruleattributevalues) | unknown |  | * `key`: unknown<br>* `values`: unknown<br> |
| [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_threshold`: unknown<br>* `probability`: unknown<br>* `rule_based`: unknown<br> |
| [`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector) | supported |  |  |
| [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | supported |  | * `http`: supported<br>* `peer`: supported<br> |
| [`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector) | supported |  |  |
| [`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation) | supported |  | * `request_captured_headers`: supported<br>* `response_captured_headers`: supported<br> |
| [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | supported |  | * `client`: supported<br>* `server`: supported<br> |
| [`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation) | supported |  | * `request_captured_headers`: supported<br>* `response_captured_headers`: supported<br> |
| [`ExperimentalInstrumentation`](#experimentalinstrumentation) | supported |  | * `cpp`: not_applicable<br>* `dotnet`: not_applicable<br>* `erlang`: not_applicable<br>* `general`: supported<br>* `go`: not_applicable<br>* `java`: supported<br>* `js`: not_applicable<br>* `php`: not_applicable<br>* `python`: not_applicable<br>* `ruby`: not_applicable<br>* `rust`: not_applicable<br>* `swift`: not_applicable<br> |
| [`ExperimentalJaegerRemoteSampler`](#experimentaljaegerremotesampler) | ignored |  | * `endpoint`: ignored<br>* `initial_sampler`: ignored<br>* `interval`: ignored<br> |
| [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | supported |  |  |
| [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | supported |  | * `disabled`: supported<br>* `minimum_severity`: not_implemented<br>* `trace_based`: not_implemented<br> |
| [`ExperimentalLoggerConfigurator`](#experimentalloggerconfigurator) | supported |  | * `default_config`: supported<br>* `loggers`: supported<br> |
| [`ExperimentalLoggerMatcherAndConfig`](#experimentalloggermatcherandconfig) | supported |  | * `config`: supported<br>* `name`: supported<br> |
| [`ExperimentalMeterConfig`](#experimentalmeterconfig) | supported |  | * `disabled`: supported<br> |
| [`ExperimentalMeterConfigurator`](#experimentalmeterconfigurator) | supported |  | * `default_config`: supported<br>* `meters`: supported<br> |
| [`ExperimentalMeterMatcherAndConfig`](#experimentalmetermatcherandconfig) | supported |  | * `config`: supported<br>* `name`: supported<br> |
| [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | supported |  | * `output_stream`: not_implemented<br> |
| [`ExperimentalOtlpFileMetricExporter`](#experimentalotlpfilemetricexporter) | supported |  | * `default_histogram_aggregation`: supported<br>* `output_stream`: not_implemented<br>* `temporality_preference`: supported<br> |
| [`ExperimentalPeerInstrumentation`](#experimentalpeerinstrumentation) | supported |  | * `service_mapping`: supported<br> |
| [`ExperimentalPeerServiceMapping`](#experimentalpeerservicemapping) | supported |  | * `peer`: supported<br>* `service`: supported<br> |
| [`ExperimentalProbabilitySampler`](#experimentalprobabilitysampler) | ignored |  | * `ratio`: ignored<br> |
| [`ExperimentalProcessResourceDetector`](#experimentalprocessresourcedetector) | supported |  |  |
| [`ExperimentalPrometheusMetricExporter`](#experimentalprometheusmetricexporter) | supported |  | * `host`: supported<br>* `port`: supported<br>* `translation_strategy`: not_implemented<br>* `with_resource_constant_labels`: supported<br>* `without_scope_info`: ignored<br>* `without_target_info`: ignored<br> |
| [`ExperimentalPrometheusTranslationStrategy`](#experimentalprometheustranslationstrategy) | unknown |  | * `no_translation`: unknown<br>* `no_utf8_escaping_with_suffixes`: unknown<br>* `underscore_escaping_with_suffixes`: unknown<br>* `underscore_escaping_without_suffixes`: unknown<br> |
| [`ExperimentalResourceDetection`](#experimentalresourcedetection) | supported |  | * `attributes`: supported<br>* `detectors`: supported<br> |
| [`ExperimentalResourceDetector`](#experimentalresourcedetector) | supported |  | * `container`: supported<br>* `host`: supported<br>* `process`: supported<br>* `service`: supported<br> |
| [`ExperimentalServiceResourceDetector`](#experimentalserviceresourcedetector) | supported |  |  |
| [`ExperimentalSpanParent`](#experimentalspanparent) | unknown |  | * `local`: unknown<br>* `none`: unknown<br>* `remote`: unknown<br> |
| [`ExperimentalTracerConfig`](#experimentaltracerconfig) | supported |  | * `disabled`: supported<br> |
| [`ExperimentalTracerConfigurator`](#experimentaltracerconfigurator) | supported |  | * `default_config`: supported<br>* `tracers`: supported<br> |
| [`ExperimentalTracerMatcherAndConfig`](#experimentaltracermatcherandconfig) | supported |  | * `config`: supported<br>* `name`: supported<br> |


## js <a id="js"></a>

Latest supported file format: `1.0.0-rc.2`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| [`Aggregation`](#aggregation) | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `default`: unknown<br>* `drop`: unknown<br>* `explicit_bucket_histogram`: unknown<br>* `last_value`: unknown<br>* `sum`: unknown<br> |
| [`AlwaysOffSampler`](#alwaysoffsampler) | unknown |  |  |
| [`AlwaysOnSampler`](#alwaysonsampler) | unknown |  |  |
| [`AttributeLimits`](#attributelimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br> |
| [`AttributeNameValue`](#attributenamevalue) | unknown |  | * `name`: unknown<br>* `type`: unknown<br>* `value`: unknown<br> |
| [`AttributeType`](#attributetype) | unknown |  | * `bool`: unknown<br>* `bool_array`: unknown<br>* `double`: unknown<br>* `double_array`: unknown<br>* `int`: unknown<br>* `int_array`: unknown<br>* `string`: unknown<br>* `string_array`: unknown<br> |
| [`B3MultiPropagator`](#b3multipropagator) | unknown |  |  |
| [`B3Propagator`](#b3propagator) | unknown |  |  |
| [`BaggagePropagator`](#baggagepropagator) | unknown |  |  |
| [`Base2ExponentialBucketHistogramAggregation`](#base2exponentialbuckethistogramaggregation) | unknown |  | * `max_scale`: unknown<br>* `max_size`: unknown<br>* `record_min_max`: unknown<br> |
| [`BatchLogRecordProcessor`](#batchlogrecordprocessor) | unknown |  | * `export_timeout`: unknown<br>* `exporter`: unknown<br>* `max_export_batch_size`: unknown<br>* `max_queue_size`: unknown<br>* `schedule_delay`: unknown<br> |
| [`BatchSpanProcessor`](#batchspanprocessor) | unknown |  | * `export_timeout`: unknown<br>* `exporter`: unknown<br>* `max_export_batch_size`: unknown<br>* `max_queue_size`: unknown<br>* `schedule_delay`: unknown<br> |
| [`CardinalityLimits`](#cardinalitylimits) | unknown |  | * `counter`: unknown<br>* `default`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| [`ConsoleExporter`](#consoleexporter) | unknown |  |  |
| [`ConsoleMetricExporter`](#consolemetricexporter) | unknown |  | * `default_histogram_aggregation`: unknown<br>* `temporality_preference`: unknown<br> |
| [`DefaultAggregation`](#defaultaggregation) | unknown |  |  |
| [`Distribution`](#distribution) | unknown |  |  |
| [`DropAggregation`](#dropaggregation) | unknown |  |  |
| [`ExemplarFilter`](#exemplarfilter) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `trace_based`: unknown<br> |
| [`ExplicitBucketHistogramAggregation`](#explicitbuckethistogramaggregation) | unknown |  | * `boundaries`: unknown<br>* `record_min_max`: unknown<br> |
| [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `explicit_bucket_histogram`: unknown<br> |
| [`ExporterTemporalityPreference`](#exportertemporalitypreference) | unknown |  | * `cumulative`: unknown<br>* `delta`: unknown<br>* `low_memory`: unknown<br> |
| [`GrpcTls`](#grpctls) | unknown |  | * `ca_file`: unknown<br>* `cert_file`: unknown<br>* `insecure`: unknown<br>* `key_file`: unknown<br> |
| [`HttpTls`](#httptls) | unknown |  | * `ca_file`: unknown<br>* `cert_file`: unknown<br>* `key_file`: unknown<br> |
| [`IncludeExclude`](#includeexclude) | unknown |  | * `excluded`: unknown<br>* `included`: unknown<br> |
| [`InstrumentType`](#instrumenttype) | unknown |  | * `counter`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| [`JaegerPropagator`](#jaegerpropagator) | unknown |  |  |
| [`LastValueAggregation`](#lastvalueaggregation) | unknown |  |  |
| [`LoggerProvider`](#loggerprovider) | unknown |  | * `limits`: unknown<br>* `processors`: unknown<br>* `logger_configurator/development`: unknown<br> |
| [`LogRecordExporter`](#logrecordexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`LogRecordLimits`](#logrecordlimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br> |
| [`LogRecordProcessor`](#logrecordprocessor) | unknown |  | * `batch`: unknown<br>* `simple`: unknown<br> |
| [`MeterProvider`](#meterprovider) | unknown |  | * `exemplar_filter`: unknown<br>* `readers`: unknown<br>* `views`: unknown<br>* `meter_configurator/development`: unknown<br> |
| [`MetricProducer`](#metricproducer) | unknown |  | * `opencensus`: unknown<br> |
| [`MetricReader`](#metricreader) | unknown |  | * `periodic`: unknown<br>* `pull`: unknown<br> |
| [`NameStringValuePair`](#namestringvaluepair) | unknown |  | * `name`: unknown<br>* `value`: unknown<br> |
| [`OpenCensusMetricProducer`](#opencensusmetricproducer) | unknown |  |  |
| [`OpenTelemetryConfiguration`](#opentelemetryconfiguration) | unknown |  | * `attribute_limits`: unknown<br>* `disabled`: unknown<br>* `distribution`: unknown<br>* `file_format`: unknown<br>* `log_level`: unknown<br>* `logger_provider`: unknown<br>* `meter_provider`: unknown<br>* `propagator`: unknown<br>* `resource`: unknown<br>* `tracer_provider`: unknown<br>* `instrumentation/development`: unknown<br> |
| [`OpenTracingPropagator`](#opentracingpropagator) | unknown |  |  |
| [`OtlpGrpcExporter`](#otlpgrpcexporter) | unknown |  | * `compression`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpGrpcMetricExporter`](#otlpgrpcmetricexporter) | unknown |  | * `compression`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `temporality_preference`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpEncoding`](#otlphttpencoding) | unknown |  | * `json`: unknown<br>* `protobuf`: unknown<br> |
| [`OtlpHttpExporter`](#otlphttpexporter) | unknown |  | * `compression`: unknown<br>* `encoding`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | unknown |  | * `compression`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `encoding`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `temporality_preference`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`ParentBasedSampler`](#parentbasedsampler) | unknown |  | * `local_parent_not_sampled`: unknown<br>* `local_parent_sampled`: unknown<br>* `remote_parent_not_sampled`: unknown<br>* `remote_parent_sampled`: unknown<br>* `root`: unknown<br> |
| [`PeriodicMetricReader`](#periodicmetricreader) | unknown |  | * `cardinality_limits`: unknown<br>* `exporter`: unknown<br>* `interval`: unknown<br>* `producers`: unknown<br>* `timeout`: unknown<br> |
| [`Propagator`](#propagator) | unknown |  | * `composite`: unknown<br>* `composite_list`: unknown<br> |
| [`PullMetricExporter`](#pullmetricexporter) | unknown |  | * `prometheus/development`: unknown<br> |
| [`PullMetricReader`](#pullmetricreader) | unknown |  | * `cardinality_limits`: unknown<br>* `exporter`: unknown<br>* `producers`: unknown<br> |
| [`PushMetricExporter`](#pushmetricexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`Resource`](#resource) | unknown |  | * `attributes`: unknown<br>* `attributes_list`: unknown<br>* `schema_url`: unknown<br>* `detection/development`: unknown<br> |
| [`Sampler`](#sampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_based`: unknown<br>* `trace_id_ratio_based`: unknown<br>* `composite/development`: unknown<br>* `jaeger_remote/development`: unknown<br>* `probability/development`: unknown<br> |
| [`SeverityNumber`](#severitynumber) | unknown |  | * `debug`: unknown<br>* `debug2`: unknown<br>* `debug3`: unknown<br>* `debug4`: unknown<br>* `error`: unknown<br>* `error2`: unknown<br>* `error3`: unknown<br>* `error4`: unknown<br>* `fatal`: unknown<br>* `fatal2`: unknown<br>* `fatal3`: unknown<br>* `fatal4`: unknown<br>* `info`: unknown<br>* `info2`: unknown<br>* `info3`: unknown<br>* `info4`: unknown<br>* `trace`: unknown<br>* `trace2`: unknown<br>* `trace3`: unknown<br>* `trace4`: unknown<br>* `warn`: unknown<br>* `warn2`: unknown<br>* `warn3`: unknown<br>* `warn4`: unknown<br> |
| [`SimpleLogRecordProcessor`](#simplelogrecordprocessor) | unknown |  | * `exporter`: unknown<br> |
| [`SimpleSpanProcessor`](#simplespanprocessor) | unknown |  | * `exporter`: unknown<br> |
| [`SpanExporter`](#spanexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`SpanKind`](#spankind) | unknown |  | * `client`: unknown<br>* `consumer`: unknown<br>* `internal`: unknown<br>* `producer`: unknown<br>* `server`: unknown<br> |
| [`SpanLimits`](#spanlimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br>* `event_attribute_count_limit`: unknown<br>* `event_count_limit`: unknown<br>* `link_attribute_count_limit`: unknown<br>* `link_count_limit`: unknown<br> |
| [`SpanProcessor`](#spanprocessor) | unknown |  | * `batch`: unknown<br>* `simple`: unknown<br> |
| [`SumAggregation`](#sumaggregation) | unknown |  |  |
| [`TextMapPropagator`](#textmappropagator) | unknown |  | * `b3`: unknown<br>* `b3multi`: unknown<br>* `baggage`: unknown<br>* `jaeger`: unknown<br>* `ottrace`: unknown<br>* `tracecontext`: unknown<br> |
| [`TraceContextPropagator`](#tracecontextpropagator) | unknown |  |  |
| [`TraceIdRatioBasedSampler`](#traceidratiobasedsampler) | unknown |  | * `ratio`: unknown<br> |
| [`TracerProvider`](#tracerprovider) | unknown |  | * `limits`: unknown<br>* `processors`: unknown<br>* `sampler`: unknown<br>* `tracer_configurator/development`: unknown<br> |
| [`View`](#view) | unknown |  | * `selector`: unknown<br>* `stream`: unknown<br> |
| [`ViewSelector`](#viewselector) | unknown |  | * `instrument_name`: unknown<br>* `instrument_type`: unknown<br>* `meter_name`: unknown<br>* `meter_schema_url`: unknown<br>* `meter_version`: unknown<br>* `unit`: unknown<br> |
| [`ViewStream`](#viewstream) | unknown |  | * `aggregation`: unknown<br>* `aggregation_cardinality_limit`: unknown<br>* `attribute_keys`: unknown<br>* `description`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalComposableAlwaysOffSampler`](#experimentalcomposablealwaysoffsampler) | unknown |  |  |
| [`ExperimentalComposableAlwaysOnSampler`](#experimentalcomposablealwaysonsampler) | unknown |  |  |
| [`ExperimentalComposableParentThresholdSampler`](#experimentalcomposableparentthresholdsampler) | unknown |  | * `root`: unknown<br> |
| [`ExperimentalComposableProbabilitySampler`](#experimentalcomposableprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalComposableRuleBasedSampler`](#experimentalcomposablerulebasedsampler) | unknown |  | * `rules`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRule`](#experimentalcomposablerulebasedsamplerrule) | unknown |  | * `attribute_patterns`: unknown<br>* `attribute_values`: unknown<br>* `parent`: unknown<br>* `sampler`: unknown<br>* `span_kinds`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributePatterns`](#experimentalcomposablerulebasedsamplerruleattributepatterns) | unknown |  | * `excluded`: unknown<br>* `included`: unknown<br>* `key`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributeValues`](#experimentalcomposablerulebasedsamplerruleattributevalues) | unknown |  | * `key`: unknown<br>* `values`: unknown<br> |
| [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_threshold`: unknown<br>* `probability`: unknown<br>* `rule_based`: unknown<br> |
| [`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector) | unknown |  |  |
| [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | unknown |  | * `http`: unknown<br>* `peer`: unknown<br> |
| [`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector) | unknown |  |  |
| [`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | unknown |  | * `client`: unknown<br>* `server`: unknown<br> |
| [`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalInstrumentation`](#experimentalinstrumentation) | unknown |  | * `cpp`: unknown<br>* `dotnet`: unknown<br>* `erlang`: unknown<br>* `general`: unknown<br>* `go`: unknown<br>* `java`: unknown<br>* `js`: unknown<br>* `php`: unknown<br>* `python`: unknown<br>* `ruby`: unknown<br>* `rust`: unknown<br>* `swift`: unknown<br> |
| [`ExperimentalJaegerRemoteSampler`](#experimentaljaegerremotesampler) | unknown |  | * `endpoint`: unknown<br>* `initial_sampler`: unknown<br>* `interval`: unknown<br> |
| [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | unknown |  |  |
| [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | unknown |  | * `disabled`: unknown<br>* `minimum_severity`: unknown<br>* `trace_based`: unknown<br> |
| [`ExperimentalLoggerConfigurator`](#experimentalloggerconfigurator) | unknown |  | * `default_config`: unknown<br>* `loggers`: unknown<br> |
| [`ExperimentalLoggerMatcherAndConfig`](#experimentalloggermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalMeterConfig`](#experimentalmeterconfig) | unknown |  | * `disabled`: unknown<br> |
| [`ExperimentalMeterConfigurator`](#experimentalmeterconfigurator) | unknown |  | * `default_config`: unknown<br>* `meters`: unknown<br> |
| [`ExperimentalMeterMatcherAndConfig`](#experimentalmetermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | unknown |  | * `output_stream`: unknown<br> |
| [`ExperimentalOtlpFileMetricExporter`](#experimentalotlpfilemetricexporter) | unknown |  | * `default_histogram_aggregation`: unknown<br>* `output_stream`: unknown<br>* `temporality_preference`: unknown<br> |
| [`ExperimentalPeerInstrumentation`](#experimentalpeerinstrumentation) | unknown |  | * `service_mapping`: unknown<br> |
| [`ExperimentalPeerServiceMapping`](#experimentalpeerservicemapping) | unknown |  | * `peer`: unknown<br>* `service`: unknown<br> |
| [`ExperimentalProbabilitySampler`](#experimentalprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalProcessResourceDetector`](#experimentalprocessresourcedetector) | unknown |  |  |
| [`ExperimentalPrometheusMetricExporter`](#experimentalprometheusmetricexporter) | unknown |  | * `host`: unknown<br>* `port`: unknown<br>* `translation_strategy`: unknown<br>* `with_resource_constant_labels`: unknown<br>* `without_scope_info`: unknown<br>* `without_target_info`: unknown<br> |
| [`ExperimentalPrometheusTranslationStrategy`](#experimentalprometheustranslationstrategy) | unknown |  | * `no_translation`: unknown<br>* `no_utf8_escaping_with_suffixes`: unknown<br>* `underscore_escaping_with_suffixes`: unknown<br>* `underscore_escaping_without_suffixes`: unknown<br> |
| [`ExperimentalResourceDetection`](#experimentalresourcedetection) | unknown |  | * `attributes`: unknown<br>* `detectors`: unknown<br> |
| [`ExperimentalResourceDetector`](#experimentalresourcedetector) | unknown |  | * `container`: unknown<br>* `host`: unknown<br>* `process`: unknown<br>* `service`: unknown<br> |
| [`ExperimentalServiceResourceDetector`](#experimentalserviceresourcedetector) | unknown |  |  |
| [`ExperimentalSpanParent`](#experimentalspanparent) | unknown |  | * `local`: unknown<br>* `none`: unknown<br>* `remote`: unknown<br> |
| [`ExperimentalTracerConfig`](#experimentaltracerconfig) | unknown |  | * `disabled`: unknown<br> |
| [`ExperimentalTracerConfigurator`](#experimentaltracerconfigurator) | unknown |  | * `default_config`: unknown<br>* `tracers`: unknown<br> |
| [`ExperimentalTracerMatcherAndConfig`](#experimentaltracermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |


# SDK Extension Plugins <a id="sdk-extension-plugins"></a>

[SDK extension plugins](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk.md#supported-sdk-extension-plugins) are places where custom interface implementations can be referenced and configured.

For example, you could write a custom `SpanExporter`, and indicate that it should be paired with a `BatchSpanProcessor`.

Each of the following types support referencing custom interface implementations. Each type is an object type containing exactly one property whose value is type `object` or `null`. The property key refers to the name of the custom implementation, and must be the same as the `name` of a corresponding registered [ComponentProvider](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk.md#register-componentprovider). The value passed as configuration when the [ComponentProvider.create](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk.md#create) is called.

SDK extension plugin types may have properties defined corresponding to built-in implementations of the interface. For example, the `otlp_http` property of `SpanExporter` defines the OTLP http/protobuf exporter.

* [ExperimentalResourceDetector](#ExperimentalResourceDetector)
* [LogRecordExporter](#LogRecordExporter)
* [LogRecordProcessor](#LogRecordProcessor)
* [MetricProducer](#MetricProducer)
* [PullMetricExporter](#PullMetricExporter)
* [PushMetricExporter](#PushMetricExporter)
* [Sampler](#Sampler)
* [SpanExporter](#SpanExporter)
* [SpanProcessor](#SpanProcessor)
* [TextMapPropagator](#TextMapPropagator)
