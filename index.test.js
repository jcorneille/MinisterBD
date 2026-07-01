import { expect, test } from "vitest";
import fs from "fs/promises";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains hotline section", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain('id="num"');
    expect(html).toContain("09606 700 700");
    expect(html).toContain('id="copy-btn"');
    expect(html).toContain('aria-label="Copy hotline number"');
});
