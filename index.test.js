import { expect, test } from "vitest";
import fs from "fs/promises";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains support card and copy buttons", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("Customer Support & Hotline");
    expect(html).toContain('aria-label="Copy hotline number"');
    expect(html).toContain('aria-label="Copy email address"');
    expect(html).toContain("function copyText");
});
