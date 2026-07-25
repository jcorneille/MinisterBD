import { expect, test } from "vitest";

test("index.html is fully accessible and branded", async () => {
    const html = await (await import("fs/promises")).readFile("index.html", "utf-8");
    expect(html).toContain("aria-label=\"Call hotline 0 9 6 0 6 7 0 0 7 0 0\"");
    expect(html).toContain("aria-label=\"Send email to info@ministerbd.com\"");
    expect(html).toContain("--success: #1e7e34;");
    expect(html).toContain("display: flex; flex-direction: column; min-height: 100vh;");
    expect(html).toContain(".skip:focus-visible");
});
