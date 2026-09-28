import { expect, test } from "vitest";
import fs from "fs/promises";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html includes accessibility styles for keyboard focus and skip link", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain(":focus-visible");
    expect(html).toContain(".skip:focus, .skip:focus-visible");
});
