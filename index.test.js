import { expect, test } from "vitest";

test("index.html contains expected title and hotline elements", async () => {
    const fs = await import("fs/promises");
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('id="copyBtn"');
    expect(html).toContain('aria-label="Copy hotline number 09606 700 700"');
});
