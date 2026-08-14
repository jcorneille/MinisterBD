## 2026-06-27 - [Initializing Empty Repository with UX Standards]
**Learning:** Starting an empty repository with a high-quality placeholder, a skip-to-content link, and a descriptive README sets a strong accessibility and developer experience baseline for future contributions.
**Action:** Always include a skip-to-content link in the initial index.html even for simple placeholders to ensure immediate accessibility.

## 2026-08-14 - [CSS Specificity and Dynamic State Transitions]
**Learning:** Inline styles have the highest specificity and completely override standard external/block class styling, preventing dynamic state changes (like adding a `.success` class to change background-color) from rendering.
**Action:** Avoid inline styling on elements requiring dynamic, state-based style overrides. Consolidate default element styling in the `<style>` block.
