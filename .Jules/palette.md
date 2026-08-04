## 2026-06-27 - [Initializing Empty Repository with UX Standards]
**Learning:** Starting an empty repository with a high-quality placeholder, a skip-to-content link, and a descriptive README sets a strong accessibility and developer experience baseline for future contributions.
**Action:** Always include a skip-to-content link in the initial index.html even for simple placeholders to ensure immediate accessibility.

## 2026-08-04 - [Hotline and Accessible Copy Interaction]
**Learning:** Enhancing mobile-accessibility with tel: links combined with spaced digit aria-labels prevents screen readers from pronouncing phone numbers as a single large number. Adding a "Copy" button with a state-resetting clearTimeout ensures robust clipboard interaction and visual/aural feedback without state corruption.
**Action:** Use spaced-digit aria-labels on tel: links and properly handle clearTimeout in interactive temporary feedback states.
