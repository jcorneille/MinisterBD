import { expect, test } from "vitest";
import fs from "fs/promises";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html contains accessible skip link and main target", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain('class="skip"');
    expect(html).toContain('id="main"');
});

test("index.html has correct CSS root brand variables and layouts", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("--primary: #0056b3");
    expect(html).toContain("--primary-hover: #004494");
    expect(html).toContain("--success: #1e7e34");
    expect(html).toContain("display: flex; flex-direction: column; min-height: 100vh;");
});

test("index.html has accessible hotline number and email links", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('aria-label="Call hotline 0 9 6 0 6 7 0 0 7 0 0"');
    expect(html).toContain('href="mailto:info@ministerbd.com"');
});
