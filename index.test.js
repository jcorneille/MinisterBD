import { expect, test } from "vitest";
import { readFile } from "fs/promises";

test("index.html contains expected title and accessible Customer Care section", async () => {
    const html = await readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
    expect(html).toContain("Customer Care");
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('href="mailto:info@ministerbd.com"');
});
