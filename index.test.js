import { expect, test } from "vitest";

import { readFile } from "fs/promises";

test("index.html contains expected title", async () => {
    const html = await readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains hotline information", async () => {
    const html = await readFile("index.html", "utf-8");
    expect(html).toContain("tel:09606700700");
    expect(html).toContain("09606 700 700");
    expect(html).toContain("aria-label=\"Copy hotline number\"");
});
