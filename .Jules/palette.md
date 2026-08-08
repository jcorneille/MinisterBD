## 2026-06-27 - [Initializing Empty Repository with UX Standards]
**Learning:** Starting an empty repository with a high-quality placeholder, a skip-to-content link, and a descriptive README sets a strong accessibility and developer experience baseline for future contributions.
**Action:** Always include a skip-to-content link in the initial index.html even for simple placeholders to ensure immediate accessibility.

## 2026-08-08 - [Hotline Contacts with Progressive Copy API Enhancements]
**Learning:** For phone hotline contact links, using spaced-out digits in an `aria-label` prevents screen readers from reading a phone number as a single large integer, vastly improving user experiences. Additionally, hiding "Copy" actions dynamically by checking browser availability of `navigator.clipboard` provides smooth degradation.
**Action:** Always format `aria-label` digits for telephone numbers with spaces, and use conditional DOM logic to toggle clipboards, ensuring cached labels/timeout tracking to avoid state corruption during rapid clicks.
