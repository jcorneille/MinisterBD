import fs from "fs/promises";
import { expect, test } from "vitest";

test("index.html title & support section", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('09606 700 700');
    expect(html).toContain('id="copy-btn"');
    expect(html).toContain('aria-label="Copy hotline number to clipboard"');
});
