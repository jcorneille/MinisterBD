import { expect, test } from "vitest";
import fs from "fs/promises";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains accessible hotline section and elements", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("aria-label=\"Call hotline 0 9 6 0 6 7 0 0 7 0 0\"");
    expect(html).toContain("aria-label=\"Copy hotline number to clipboard\"");
    expect(html).toContain("id=\"tel\"");
    expect(html).toContain("id=\"copy\"");
});
