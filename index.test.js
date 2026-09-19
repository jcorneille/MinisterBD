import fs from "fs/promises";
import { expect, test } from "vitest";

test("index.html contains expected title and hotline card", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('aria-label="Copy hotline phone number"');
});
