import { expect, test } from "vitest";
import fs from "fs/promises";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains customer support hotline and copy button", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain('id="hotline-link" href="tel:09606700700"');
    expect(html).toContain('id="copy-hotline"');
    expect(html).toContain('aria-label="Copy hotline number to clipboard"');
});
