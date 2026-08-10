import { expect, test } from "vitest";
import fs from "fs/promises";

test("index.html contains expected title", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
});

test("index.html defines required brand CSS variables", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("--primary: #0056b3");
    expect(html).toContain("--primary-hover: #004494");
    expect(html).toContain("--success: #1e7e34");
});

test("index.html supports flex column layout with footer", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("display: flex; flex-direction: column; min-height: 100vh");
    expect(html).toContain("<footer>&copy; 2026 Minister Hi-Tech Park Limited</footer>");
});

test("index.html skip link supports focus and focus-visible transition", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain(".skip { position: absolute; top: -40px; transition: top 0.2s; }");
    expect(html).toContain(".skip:focus, .skip:focus-visible { top: 0; }");
});

test("index.html contains hotline link and copy button with accessible attributes", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain('id="hotline-link"');
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('aria-label="Call hotline 0 9 6 0 6 7 0 0 7 0 0"');
    expect(html).toContain('id="copy-btn"');
    expect(html).toContain('aria-label="Copy hotline phone number"');
});

test("index.html javascript handles copy-to-clipboard gracefully", async () => {
    const html = await fs.readFile("index.html", "utf-8");
    expect(html).toContain("navigator.clipboard.writeText(rawValue)");
    expect(html).toContain("btn.textContent = 'Copied!'");
    expect(html).toContain("btn.classList.add('success')");
});
