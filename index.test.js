import { expect, test } from "vitest";
import fs from "fs/promises";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains accessible contact features", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain('id="phone-hotline"');
    expect(html).toContain('aria-label="Call hotline 0 9 6 0 6 7 0 0 7 0 0"');
    expect(html).toContain('id="copy-btn"');
    expect(html).toContain('aria-label="Copy phone number"');
    expect(html).toContain('<footer>');
});
