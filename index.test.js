import { expect, test } from "vitest";

test("index.html contains expected elements and patterns", async () => {
    const fs = await import("fs/promises");
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
    expect(html).toContain('aria-label="Call hotline 0 9 6 0 6 7 0 0 7 0 0"');
    expect(html).toContain('id="copy-btn"');
    expect(html).toContain('aria-label="Copy hotline number to clipboard"');
    expect(html).toContain('info@ministerbd.com');
});
