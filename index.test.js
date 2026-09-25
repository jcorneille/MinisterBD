import fs from "node:fs/promises";
import { expect, test } from "vitest";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains Customer Support section and Hotline copy button", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain('id="contact-heading">Customer Support</h2>');
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('id="copy-btn"');
    expect(html).toContain('aria-label="Copy hotline number 09606 700 700"');
});
