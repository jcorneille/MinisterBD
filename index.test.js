import { expect, test } from "vitest";

import fs from "fs/promises";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains official hotline", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("09606 700 700");
});
