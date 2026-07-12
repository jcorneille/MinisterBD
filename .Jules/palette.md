## 2026-06-27 - [Initializing Empty Repository with UX Standards]
**Learning:** Starting an empty repository with a high-quality placeholder, a skip-to-content link, and a descriptive README sets a strong accessibility and developer experience baseline for future contributions.
**Action:** Always include a skip-to-content link in the initial index.html even for simple placeholders to ensure immediate accessibility.

## 2025-05-14 - [Accessible "Copy to Clipboard" Feedback]
**Learning:** Providing temporary visual and ARIA feedback (text change, color change, and aria-label update) for "Copy to Clipboard" operations significantly improves the user experience for both sighted and screen reader users.
**Action:** Use a combination of `.innerText`, `.classList.add()`, and `.setAttribute('aria-label', ...)` with a `setTimeout` to reset state.
