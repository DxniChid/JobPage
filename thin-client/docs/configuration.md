# Configuration Options

## `data-api-url`
**Type:** `string`  
**Default:** `https://api.jobs.bfo.ch`  
Base URL of the REST interface. The widget expects the endpoint `/jobs`, which returns a JSON array of job objects.

## `data-category`
**Type:** `string`  
**Default:** `undefined`  
Filters jobs to a specific category. Also pre‑selects the category dropdown.

## `data-region`
**Type:** `string`  
**Default:** `undefined`  
Filters jobs to a specific region. Also pre‑selects the region dropdown.

## `data-language`
**Type:** `string`  
**Default:** `undefined`  
Can be used for language‑specific content (currently not processed automatically, but may be used by your API logic).

## `data-filter-options`
**Type:** `JSON array`  
**Default:** `[]`  
Defines which additional filters appear in the filter bar.  
Possible values:  
- `"HomeOffice"`  – Yes/No selection  
- `"Language"`    – Dropdown with all languages found in the job data  
- `"Workplace"`   – Dropdown with all workplace types (e.g. Remote, Hybrid, On‑site)

Example: `data-filter-options='["HomeOffice","Language"]'`

## `data-style-entry`
**Type:** `string` (URL)  
**Default:** `undefined`  
Path to an external CSS stylesheet that will be injected into the page `<head>`. Useful for complete design overrides.

## `data-style-search-bar`
**Type:** `string` (CSS rules)  
**Default:** `undefined`  
Inline CSS written directly into a `<style>` block. Handy for quick adjustments, e.g. `button { background-color: green; }`.

## `data-use-mock`
**Type:** `boolean` (`"true"` / `"false"`)  
**Default:** `undefined`  
If set to `true`, the widget **only uses the built‑in mock data** and never tries to call the real API. Ideal for testing and development.