# API Expectations

The Thin Client fetches job data via a `GET /jobs` endpoint.  
The response **must** be an array of objects that may contain the following fields:

| Field         | Type    | Description                                      | Example                     |
|---------------|---------|-------------------------------------------------|-----------------------------|
| `id`          | string  | Unique job identifier                           | `"job-123"`                 |
| `title`       | string  | Job title                                       | `"Software Developer"`      |
| `company`     | string  | Company name                                    | `"BFO AG"`                  |
| `location`    | string  | City of work                                    | `"Bern"`                    |
| `category`    | string  | Professional field / category                  | `"IT"`                      |
| `region`      | string  | Region (e.g. canton code)                      | `"BE"`                      |
| `description` | string  | Short description (HTML or plain text)         | `"We are looking for ..."`  |
| `homeOffice`  | boolean | Is home office possible?                        | `true`                      |
| `language`    | string  | Main language required for the job             | `"German"`                  |
| `workplace`   | string  | Type of workplace (e.g. `"Remote"`, `"Hybrid"`, `"On‑site"`) | `"Hybrid"` |
| `url`         | string  | Link to the detailed job posting               | `"https://.../job/123"`     |
| `publishedAt` | string  | ISO 8601 date                                  | `"2026-03-15T09:00:00Z"`   |

**Example response:**
```json
[
  {
    "id": "1",
    "title": "Frontend Developer",
    "company": "BFO AG",
    "location": "Bern",
    "category": "IT",
    "region": "BE",
    "description": "Development of modern web applications...",
    "homeOffice": true,
    "language": "German",
    "workplace": "Hybrid",
    "url": "https://jobs.bfo.ch/1"
  }
]