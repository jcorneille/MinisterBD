import { expect, test } from "vitest";
import fs from "fs/promises";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains the Contact Card with hotline and email", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain('id="hotline-link"');
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('aria-label="Call hotline 0 9 6 0 6 7 0 0 7 0 0"');
    expect(html).toContain('href="mailto:info@ministerbd.com"');
    expect(html).toContain('aria-label="Send email to info@ministerbd.com"');
});

test("index.html contains the copy button with correct accessibility and style properties", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain('id="copy-btn"');
    expect(html).toContain('aria-label="Copy hotline to clipboard"');
});
