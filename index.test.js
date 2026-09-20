import fs from "fs/promises";
import { expect, test } from "vitest";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains customer support hotline section and copy button", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('aria-label="Copy hotline number 09606 700 700"');
    expect(html).toContain('Customer Support');
});
