import { expect, test } from "vitest";
import fs from "fs/promises";

test("index.html contains expected elements", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
    expect(html).toContain(".skip:focus, .skip:focus-visible");
    expect(html).toContain("display: flex; flex-direction: column; min-height: 100vh;");
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('aria-label="Call hotline 0 9 6 0 6 7 0 0 7 0 0"');
    expect(html).toContain('id="copy-hotline"');
    expect(html).toContain('clearTimeout(copyTimeout)');
});
