import { expect, test } from "vitest";
import { readFile } from "fs/promises";

test("index.html contains expected title and main landmark", async () => {
    const html = await readFile("index.html", "utf-8");
    expect(html).toContain("<title>MinisterBD</title>");
    expect(html).toContain('id="main"');
});

test("index.html contains customer support contact links", async () => {
    const html = await readFile("index.html", "utf-8");
    expect(html).toContain('href="tel:09606700700"');
    expect(html).toContain('href="mailto:info@ministerbd.com"');
});

test("index.html contains accessible skip link and focus styles", async () => {
    const html = await readFile("index.html", "utf-8");
    expect(html).toContain('href="#main" class="skip"');
    expect(html).toContain(":focus-visible");
});
