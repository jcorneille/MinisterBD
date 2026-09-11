import { expect, test } from "vitest";

test("index.html contains expected title", async () => {
    const fs = await import("fs/promises");
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains accessible skip link with focus-visible styling", async () => {
    const fs = await import("fs/promises");
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain(".skip:focus, .skip:focus-visible");
});
