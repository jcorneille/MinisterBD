import { expect, test } from "vitest";

test("index.html contains expected elements and features", async () => {
    const fs = await import("fs/promises");
    const html = await fs.readFile("index.html", "utf-8");

    expect(html).toContain("<title>MinisterBD</title>");
    expect(html).toContain("tel:09606700700");
    expect(html).toContain("aria-label=\"Call hotline 0 9 6 0 6 7 0 0 7 0 0\"");
    expect(html).toContain("id=\"copyHotline\"");
    expect(html).toContain("--primary: #0056b3");
    expect(html).toContain("--primary-hover: #004494");
    expect(html).toContain("--success: #1e7e34");
});
