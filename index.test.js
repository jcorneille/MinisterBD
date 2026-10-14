import { expect, test } from "vitest";
import fs from "fs/promises";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains accessible skip link styles", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain('.skip:focus, .skip:focus-visible');
    expect(html).toContain('transition: top 0.2s ease');
});
