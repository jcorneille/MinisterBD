## 2026-06-27 - [Initializing Empty Repository with UX Standards]
**Learning:** Starting an empty repository with a high-quality placeholder, a skip-to-content link, and a descriptive README sets a strong accessibility and developer experience baseline for future contributions.
**Action:** Always include a skip-to-content link in the initial index.html even for simple placeholders to ensure immediate accessibility.

## 2025-05-15 - [Persistence of Success Feedback Styles]
**Learning:** Success feedback styles (like a green background on a button) can be inadvertently overridden by `:hover` or `:focus` styles if they don't have enough specificity or are declared in the wrong order.
**Action:** To ensure success feedback remains visible while the user is still interacting with the element, combine state-specific classes with pseudo-classes (e.g., `.success, .success:hover`) or ensure they are declared after interaction pseudo-classes in the CSS.
