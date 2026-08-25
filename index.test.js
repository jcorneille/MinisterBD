import { expect, test } from "vitest";
import { readFile } from "node:fs/promises";

test("index.html contains expected title and hotline support section", async () => {
    const html = await readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('aria-label="Copy hotline number"');
});
