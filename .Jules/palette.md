## 2026-06-27 - [Initializing Empty Repository with UX Standards]
**Learning:** Starting an empty repository with a high-quality placeholder, a skip-to-content link, and a descriptive README sets a strong accessibility and developer experience baseline for future contributions.
**Action:** Always include a skip-to-content link in the initial index.html even for simple placeholders to ensure immediate accessibility.

## 2026-10-24 - [Accessible Phone Number Formats and Safe State Toggles]
**Learning:** For screen readers, continuous strings of digits are often spoken as a single large number rather than individual digits. Spacing digits out in an `aria-label` improves readability. Additionally, temporary feedback states (like copying) can get corrupted under rapid user interaction; tracking and clearing pending `setTimeout` calls is crucial to keep the UI state resilient.
**Action:** Use spaced digits in `aria-label` for all hotline/phone links, and store the `timeoutId` of temporary UI text changes to clear previous pending updates on repeated interactions.
