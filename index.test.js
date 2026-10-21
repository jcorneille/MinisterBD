import { expect, test } from "vitest";

test("index.html contains expected title", async () => {
    const fs = await import("fs/promises");
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains enhanced skip-to-content accessibility styles and CSS variables", async () => {
    const fs = await import("fs/promises");
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("--primary-hover:");
    expect(html).toContain("--success:");
    expect(html).toContain(":focus-visible");
    expect(html).toContain(".skip:focus, .skip:focus-visible");
});
