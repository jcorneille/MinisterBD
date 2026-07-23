## 2026-06-27 - [Initializing Empty Repository with UX Standards]
**Learning:** Starting an empty repository with a high-quality placeholder, a skip-to-content link, and a descriptive README sets a strong accessibility and developer experience baseline for future contributions.
**Action:** Always include a skip-to-content link in the initial index.html even for simple placeholders to ensure immediate accessibility.

## 2026-06-28 - [Accessible Telephone Formatting for Screen Readers]
**Learning:** For phone number links (`tel:`), screen readers often read continuous digits as a single massive number (e.g., billions). Using spaced digits in an `aria-label` ensures the digits are read individually and clearly.
**Action:** Always format `aria-label` for phone numbers with spaces between digits (e.g., `0 9 6 ...`) while preserving raw formatting for sighted users.
