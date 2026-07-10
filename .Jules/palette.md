## 2026-06-27 - [Initializing Empty Repository with UX Standards]
**Learning:** Starting an empty repository with a high-quality placeholder, a skip-to-content link, and a descriptive README sets a strong accessibility and developer experience baseline for future contributions.
**Action:** Always include a skip-to-content link in the initial index.html even for simple placeholders to ensure immediate accessibility.

## 2026-06-27 - [Robust Clipboard Mocking in Playwright]
**Learning:** In some browser environments, `navigator.clipboard` is read-only. Standard reassignment in an `add_init_script` might fail with a `NotAllowedError` if the browser's security policy is strict.
**Action:** Use `delete navigator.clipboard` before assigning a mock object to ensure it is successfully overridden in all Playwright contexts.
