import { expect, test } from "vitest";

test("index.html contains expected title", async () => {
    const fs = await import("fs/promises");
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains Contact Hotline with accessible tel link and copy button", async () => {
    const fs = await import("fs/promises");
    const html = await fs.readFile("index.html", "utf-8");

    // Check for the hotline link and its accessible spacing
    expect(html).toContain('id="hotline-link"');
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('aria-label="Call hotline 0 9 6 0 6 7 0 0 7 0 0"');

    // Check for the copy button element
    expect(html).toContain('id="copy-btn"');
    expect(html).toContain('aria-label="Copy hotline number to clipboard"');
});
