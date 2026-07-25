## 2026-06-27 - [Initializing Empty Repository with UX Standards]
**Learning:** Starting an empty repository with a high-quality placeholder, a skip-to-content link, and a descriptive README sets a strong accessibility and developer experience baseline for future contributions.
**Action:** Always include a skip-to-content link in the initial index.html even for simple placeholders to ensure immediate accessibility.

## 2026-06-27 - [Accessible Phone Number Pronunciation and Robust Clipboard Feedback State]
**Learning:** Screen readers tend to pronounce long telephone numbers as single massive integers (e.g., ninety-six billion ...). Specifying an `aria-label` with spaced-out digits (e.g. '0 9 6 0 6 ...') ensures they are read out cleanly as individual digits. Additionally, caching initial labels/texts during DOM load and clearing pending timeouts before triggering new clipboard feedback prevents visual state corruption during rapid, repeated user interactions.
**Action:** Always use spaced-digit `aria-label`s on tel: links and maintain robust debouncing tracking when managing interactive temporary element feedback.
