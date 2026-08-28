import { expect, test } from "vitest";
import { readFile } from "fs/promises";

test("index.html contains expected title", async () => {
    const html = await readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("skip-to-content link has accessible focus-visible styles", async () => {
    const html = await readFile("index.html", "utf-8");
    expect(html).toContain(".skip:focus, .skip:focus-visible");
    expect(html).toContain("transition: top 0.2s ease");
});
