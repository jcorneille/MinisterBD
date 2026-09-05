import fs from "fs/promises";
import { expect, test } from "vitest";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains hotline link and accessible copy button", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('id="copy-btn"');
    expect(html).toContain('aria-label="Copy hotline phone number"');
});
