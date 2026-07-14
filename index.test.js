import { expect, test } from "vitest";
import { readFile } from "fs/promises";

test("index.html contains expected title", async () => {
    const html = await readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains contact section and copy button", async () => {
    const html = await readFile("index.html", "utf-8");
    expect(html).toContain('id="contact"');
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('href="mailto:info@ministerbd.com"');
    expect(html).toContain('id="copy-hotline"');
    expect(html).toContain('aria-label="Copy hotline number to clipboard"');
});
