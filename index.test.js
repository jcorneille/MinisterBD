import { expect, test } from "vitest";
import fs from "fs/promises";

test("index.html contains expected title and hotline card", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
    expect(html).toContain("Customer Care Hotline");
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('id="copy-btn"');
    expect(html).toContain('aria-label="Copy hotline number to clipboard"');
});
