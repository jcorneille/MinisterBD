import { expect, test } from "vitest";
import { readFile } from "fs/promises";

test("index.html contains expected title and Customer Support hotline", async () => {
    const html = await readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
    expect(html).toContain('id="support-heading">Customer Support</h2>');
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('id="copy-hotline-btn"');
    expect(html).toContain('aria-label="Copy hotline number 09606 700 700 to clipboard"');
});
