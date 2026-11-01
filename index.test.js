import { expect, test } from "vitest";
import fs from "fs/promises";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html includes accessible skip link targeting main", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain('<a href="#main" class="skip">Skip to content</a>');
    expect(html).toContain('id="main"');
    expect(html).toContain(".skip:focus, .skip:focus-visible");
    expect(html).toContain(":focus-visible");
});
