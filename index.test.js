import { expect, test } from "vitest";
import { readFile } from "fs/promises";

test("index.html contains expected title and accessible hotline", async () => {
    const html = await readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('id="copy-btn"');
    expect(html).toContain('aria-live="polite"');
});
