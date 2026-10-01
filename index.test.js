import { expect, test } from "vitest";
import { readFile } from "fs/promises";

test("index.html contains expected title and Customer Support Hotline", async () => {
    const html = await readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
    expect(html).toContain('id="hotline" href="tel:09606700700"');
    expect(html).toContain('id="copy-btn"');
    expect(html).toContain('aria-label="Copy hotline number to clipboard"');
});
