## 2026-06-27 - [Initializing Empty Repository with UX Standards]
**Learning:** Starting an empty repository with a high-quality placeholder, a skip-to-content link, and a descriptive README sets a strong accessibility and developer experience baseline for future contributions.
**Action:** Always include a skip-to-content link in the initial index.html even for simple placeholders to ensure immediate accessibility.

## 2026-06-27 - [Accessible Phone Numbers and Interactive Feedback]
**Learning:** Using spaced digits in `aria-label` for phone numbers (e.g., "0 9 6...") prevents screen readers from announcing them as single large integers. Combining this with immediate visual ("Copied!") and ARIA feedback on "Copy to Clipboard" buttons creates a delightful, accessible micro-interaction.
**Action:** Implement spaced-digit aria-labels for contact numbers and provide temporary state feedback for clipboard operations.
