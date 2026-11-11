## 2026-06-27 - [Initializing Empty Repository with UX Standards]
**Learning:** Starting an empty repository with a high-quality placeholder, a skip-to-content link, and a descriptive README sets a strong accessibility and developer experience baseline for future contributions.
**Action:** Always include a skip-to-content link in the initial index.html even for simple placeholders to ensure immediate accessibility.

## 2026-11-11 - [Accessible Support Contacts and Clipboard Feedback Pattern]
**Learning:** Providing contact numbers as semantic `tel:` links alongside dedicated copy-to-clipboard buttons offers both mobile dialer convenience and desktop copy usability; clearing existing feedback timeouts prevents race conditions on rapid clicks while dynamic ARIA labels keep assistive technologies informed.
**Action:** Extract raw phone numbers directly from `href="tel:..."` for clean clipboard data, pair with dynamic ARIA feedback, and manage timeouts reliably.
