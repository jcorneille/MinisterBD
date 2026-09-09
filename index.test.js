import { expect, test } from "vitest";

test("index.html contains expected title and focus-visible skip link styles", async () => {
    const fs = await import("fs/promises");
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
    expect(html).toContain(".skip:focus, .skip:focus-visible");
    expect(html).toContain(":focus-visible");
});
