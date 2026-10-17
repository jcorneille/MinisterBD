import { expect, test } from "vitest";
import fs from "fs/promises";

test("index.html title and customer support hotline", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
    expect(html).toContain('id="support-heading">Customer Support');
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('id="copy-hotline-btn"');
    expect(html).toContain('aria-label="Copy hotline number 09606 700 700 to clipboard"');
});
