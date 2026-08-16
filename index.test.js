import { expect, test } from "vitest";

test("index.html contains expected title and accessible skip link", async () => {
    const fs = await import("fs/promises");
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
    expect(html).toContain(".skip:focus, .skip:focus-visible");
    expect(html).toContain("transition: top 0.2s ease");
});
