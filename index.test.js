import { expect, test } from "vitest";
import fs from "fs/promises";

test("index.html contains expected title and accessible elements", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
    expect(html).toContain('aria-label="Call hotline 0 9 6 0 6 7 0 0 7 0 0"');
    expect(html).toContain('aria-label="Copy hotline number"');
    expect(html).toContain('href="tel:09606700700"');
});
