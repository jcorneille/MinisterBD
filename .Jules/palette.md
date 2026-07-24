## 2026-06-27 - [Initializing Empty Repository with UX Standards]
**Learning:** Starting an empty repository with a high-quality placeholder, a skip-to-content link, and a descriptive README sets a strong accessibility and developer experience baseline for future contributions.
**Action:** Always include a skip-to-content link in the initial index.html even for simple placeholders to ensure immediate accessibility.

## 2026-07-24 - [Accessible Hotline Integration with Clipboard Copying]
**Learning:** For phone hotline numbers, screen readers read continuous digit strings as a single large number rather than distinct digits. Adding a space-separated `aria-label` solves this. Additionally, when copy-to-clipboard functionality is added, the dynamic button labels should revert gracefully and retain accessible labels for assistive technology.
**Action:** Use spaced-out digits in screen reader labels for telephone links, and implement robust clipboard feature-detection with timeouts to handle transient feedback states.
