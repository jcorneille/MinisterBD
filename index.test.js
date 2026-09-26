import fs from "fs/promises";
import { expect, test } from "vitest";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains accessible skip link and focus-visible styles", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain('<a href="#main" class="skip">Skip to content</a>');
    expect(html).toContain(":focus-visible");
    expect(html).toContain(".skip:focus, .skip:focus-visible");
    expect(html).toContain("transition: top 0.2s ease-in-out");
});
