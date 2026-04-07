# Site Content Source

This folder stores content-only source files for the website migration.

## Purpose

- Decouple business content from component/style implementation.
- Preserve the current site's copy and media references before template rebuild.
- Provide a stable source for importing into the new template-modeled Next.js app.

## Structure

- `content/navigation.json` - primary navigation and footer social links
- `content/home.json` - hero and homepage section order
- `content/about.json` - biography and about content
- `content/leadership.json` - leadership, recognition, and board highlights
- `content/services.json` - services/approach content
- `content/engagements.json` - gallery entries
- `content/highlights.json` - recent events and testimonial text
- `content/contact.json` - contact details, form labels, and map URL
- `content/media.json` - media key-to-path manifest

## Notes

- These files are content snapshots and can be refined during import.
- Paths are currently aligned to existing `/assets/...` usage in the app.
