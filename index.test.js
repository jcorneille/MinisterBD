import { expect, test } from "vitest";
import fs from "fs/promises";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html structure, accessibility, and interactive features are correct", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain('<a href="#main" class="skip">Skip to content</a>');
    expect(html).toContain('.skip:focus, .skip:focus-visible');
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('aria-label="Call hotline 0 9 6 0 6 7 0 0 7 0 0"');
    expect(html).toContain('id="copy-btn"');
    expect(html).toContain('aria-label="Copy hotline to clipboard"');
    expect(html).toContain("navigator.clipboard");
    expect(html).toContain("btn.textContent = 'Copied!'");
    expect(html).toContain("clearTimeout");
});
