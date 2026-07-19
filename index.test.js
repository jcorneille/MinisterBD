import { expect, test } from "vitest";
import fs from "fs/promises";

test("index.html content verification", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('aria-label="Call hotline 0 9 6 0 6 7 0 0 7 0 0"');
    expect(html).toContain('id="c-btn"');
    expect(html).toContain('id="c-txt"');
});
