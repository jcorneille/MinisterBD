import fs from "fs/promises";
import { expect, test } from "vitest";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains accessible skip link focus styles", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain(".skip:focus, .skip:focus-visible");
    expect(html).toContain("var(--primary)");
});
