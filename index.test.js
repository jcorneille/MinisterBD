import { expect, test } from "vitest";
import fs from "fs/promises";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains accessible contact details and copy hotline button", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('href="mailto:info@ministerbd.com"');
    expect(html).toContain('id="copy-btn"');
    expect(html).toContain('aria-label="Copy hotline number 09606 700 700 to clipboard"');
    expect(html).toContain('Customer Care & Support');
});
