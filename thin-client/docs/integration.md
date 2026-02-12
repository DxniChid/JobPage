# Integration Guide – BFO Job Thin Client

## 1. Define a placeholder
Insert a `<div>` with the id `job-client` at the desired position on your website.

```html
<div id="job-client"></div>
```

## 2. Include the Thin Client
Add the provided JavaScript shortly before the closing `</body>` tag.

```html
<script src="https://jobs.bfo.ch/thin-client.js"></script>
```

> **For testing without a build step:**
> Use the ES module version directly:
> `<script type="module" src="../src/index.js"></script>`

## 3. Configuration (optional)
Use **data attributes** to control the widget behaviour:

| Attribute              | Description                                                                 | Example                        |
|------------------------|-----------------------------------------------------------------------------|--------------------------------|
| `data-api-url`         | Base URL of the job API (default: `https://api.jobs.bfo.ch`)                | `https://my-api.ch`            |
| `data-category`        | Pre‑selected category                                                       | `IT`                           |
| `data-region`          | Pre‑selected region                                                         | `VS`                           |
| `data-language`        | Default language (passed to the API)                                        | `CH-de`                        |
| `data-filter-options`  | JSON array with additional filters (`HomeOffice`, `Language`, `Workplace`)  | `["HomeOffice","Language"]`    |
| `data-style-entry`     | URL to a custom CSS stylesheet                                              | `/css/jobs.css`                |
| `data-style-search-bar`| Inline CSS for the filter bar (e.g. button colour)                          | `button { background: green; }`|
| `data-use-mock`        | Force mock data for testing (`true` / `false`)                              | `true`                         |

**Example with all options:**
```html
<div id="job-client"
     data-api-url="https://api.jobs.bfo.ch"
     data-category="Marketing"
     data-region="ZH"
     data-filter-options='["HomeOffice","Language"]'
     data-style-entry="/css/custom-jobs.css"
     data-use-mock="true">
</div>
```

## 4. Custom Styling
- Override the widget’s CSS classes with your own rules.
- Or use `data-style-entry` to load a completely custom stylesheet.

## 5. Browser Compatibility
The widget works in all modern browsers (Chrome, Firefox, Safari, Edge). IE11 is not supported.