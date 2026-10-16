# Highway Roop — Annual Reports

This folder is a self-contained handoff for the Annual Reports page.

## Included

- `index.html` — Annual Reports page markup
- `site.css` — complete shared styling, responsive layout and hover animations
- `site.js` — shared header/footer, year filter and CTA behaviour
- `assets/` — complete asset library supplied with the internal-page build

## Preview

Open `index.html` in a browser. The page's own image, CSS and JavaScript paths are local to this folder. Other header/footer destinations point to the live Highway Roop website so they do not produce broken links in the standalone preview.

## Add a report

1. Copy the approved PDF into `assets/reports/` (create that subfolder when the first PDF is supplied).
2. Duplicate an `.annual-report` block in `index.html`.
3. Update its `data-report-year`, cover year, title, financial year and PDF `href`.
4. Remove `aria-disabled="true"` and the `title="PDF pending publication"` attribute from the CTA.

The financial-year filter is generated automatically from the report rows. Keep the newest report first.
