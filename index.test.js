import { expect, test } from "vitest";

test("index.html contains expected title", async () => {
    const fs = await import("fs/promises");
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html skip link has focus-visible styling and transition", async () => {
    const fs = await import("fs/promises");
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain(".skip:focus, .skip:focus-visible");
    expect(html).toContain("transition: top 0.2s ease");
    expect(html).toContain(":focus-visible");
});
