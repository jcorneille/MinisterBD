## 2026-06-27 - [Initializing Empty Repository with UX Standards]
**Learning:** Starting an empty repository with a high-quality placeholder, a skip-to-content link, and a descriptive README sets a strong accessibility and developer experience baseline for future contributions.
**Action:** Always include a skip-to-content link in the initial index.html even for simple placeholders to ensure immediate accessibility.

## 2026-06-27 - [Hardening Temporary UI Feedback]
**Learning:** When using temporary text/style changes for feedback (like "Copied!"), rapid repeated clicks can corrupt the "previous state" variable if it's captured while the feedback state is already active.
**Action:** Implement a check (e.g., a class check or state flag) to prevent re-triggering the feedback cycle if it's already in progress, ensuring the original UI state is preserved and correctly restored.

## 2026-06-27 - [Mobile-First Hotline Accessibility]
**Learning:** For business hotlines, users on mobile expect direct dial functionality (`tel:`), while desktop users often need to copy the number for VOIP or reference.
**Action:** Provide the phone number as a `tel:` link for accessibility/mobile use, paired with a distinct "Copy" button for clipboard utility. Always verify the 'Skip to content' link has a corresponding target ID (e.g., `<main id="main">`).
