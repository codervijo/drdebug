# Screenshots for /fix/ error pages

Drop screenshots here. Anything under `public/` is served from the site root,
so a file at `public/screenshots/foo.png` is referenced in content as
`/screenshots/foo.png`.

## Naming convention

```
[platform]-[error-slug]-step-[n].png
```

- `platform` — one of `lindy`, `n8n`, `relay` (matches the entry's `platform`).
- `error-slug` — the entry's `slug` field (matches the URL: `/fix/<platform>/<slug>/`).
- `n` — the `step` number from the matching `fixSteps[]` entry (1-based).

### Examples

```
lindy-connection-expired-step-1.png
lindy-connection-expired-step-2.png
n8n-workflow-timeout-step-1.png
```

## Wiring a screenshot to a step

In the error's JSON file under `src/content/errors/`, set the optional
`screenshot` field on the relevant fix step to the root-relative path:

```json
{
  "fixSteps": [
    {
      "step": 1,
      "instruction": "Open the connections panel.",
      "screenshot": "/screenshots/lindy-connection-expired-step-1.png"
    }
  ]
}
```

If a step has no `screenshot`, the template renders a dashed placeholder slot
that names the expected filename — so you can see exactly what to capture.

## Format notes

- PNG preferred. Keep widths around 1200–1600px; they render full-width in a
  reading column (~768px) and are lazy-loaded.
- The `alt` text is generated automatically (`<Platform>: step <n>`).
