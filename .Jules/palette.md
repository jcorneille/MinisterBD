## 2026-06-27 - [Initializing Empty Repository with UX Standards]
**Learning:** Starting an empty repository with a high-quality placeholder, a skip-to-content link, and a descriptive README sets a strong accessibility and developer experience baseline for future contributions.
**Action:** Always include a skip-to-content link in the initial index.html even for simple placeholders to ensure immediate accessibility.

## 2026-06-28 - [State Tracking with Interactive Copy Feedback]
**Learning:** Storing transient UI state (like original ARIA labels or button text) in closures during repeat interactions (e.g., rapid double-clicks on Copy buttons) can overwrite cached states with transient values (like "Copied!").
**Action:** Cache the original interactive state text and attributes during component initialization rather than during the interaction event handler.
