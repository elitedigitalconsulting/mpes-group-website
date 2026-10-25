# MPES Group Aust — website

Single-page website for MPES Group Aust Pty Ltd (electrical contractors, Guildford NSW).

## Structure
- `index.html` — the whole site (HTML, CSS and JavaScript in one file)
- `assets/` — logo, hero image, project photos and builder logos
  - `assets/logo.png`, `assets/hero.jpg`
  - `assets/projects/*.jpg` — project card photos (keyed by the `ph` field in the `PROJECTS` array)
  - `assets/logos/*` — builder logos and the NECA member badge

## Publishing with GitHub Pages
1. Settings → Pages → Source: *Deploy from a branch*, Branch: `main`, folder `/ (root)`.
2. The site appears at `https://elitedigitalconsulting.github.io/mpes-group-website/`.

## Notes
- The AI scope mapper and assistant need a backend endpoint with an Anthropic API key when hosted outside claude.ai. Without one, the page falls back to the tender form and phone number automatically.
- The tender and callback forms show a confirmation but are not yet connected to an email or CRM. Wire the form handlers in `index.html` to your endpoint.
- Project data lives in the `PROJECTS` array in `index.html`; services in `GROUPS`.
