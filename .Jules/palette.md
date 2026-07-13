## 2026-06-27 - [Initializing Empty Repository with UX Standards]
**Learning:** Starting an empty repository with a high-quality placeholder, a skip-to-content link, and a descriptive README sets a strong accessibility and developer experience baseline for future contributions.
**Action:** Always include a skip-to-content link in the initial index.html even for simple placeholders to ensure immediate accessibility.

## 2026-06-28 - [Enhancing Support Accessibility and Copy Feedback]
**Learning:** When adding contact details like phone numbers, using an `aria-label` with spaced digits (e.g., "0 9 6...") prevents screen readers from announcing the number as a single massive integer. Additionally, providing instant visual feedback ("Copied!") on a clipboard action significantly improves perceived responsiveness and user confidence.
**Action:** Always use spaced digits in `aria-label` for phone numbers and implement a clear feedback state for "Copy to Clipboard" interactions.
