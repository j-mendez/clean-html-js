import cleanHtml from "../src/clean-html";
import fetch from "isomorphic-fetch";

describe("clean html", () => {
  const URI = process.env.URI || "https://www.a11ywatch.com";
  let html;

  beforeAll(async () => {
    const source = await fetch(URI);
    html = await source.text();
  });

  const htmlSize: number[] = [];

  test("can sanatize html", async () => {
    const data = await cleanHtml(html, URI);
    htmlSize.push(data.content?.length || 0);

    expect(data).not.toBe(null);
  });

  test("can allow imgs", async () => {
    const data = await cleanHtml(html, URI, {
      allowedTags: ["img", "svg"],
    });

    expect(htmlSize[0]).not.toBe(data.content?.length);
  });

  test("can parse without html provided", async () => {
    const data = await cleanHtml("", URI);

    expect(data).not.toBe(null);
  });
});
