import { expect, test } from "vitest";
import fs from "fs/promises";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains semantic footer with hotline link and copy button", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<footer");
    expect(html).toContain("tel:09606700700");
    expect(html).toContain('aria-label="Call hotline 0 9 6 0 6 7 0 0 7 0 0"');
    expect(html).toContain('id="copyBtn"');
    expect(html).toContain('aria-label="Copy hotline number to clipboard"');
});
