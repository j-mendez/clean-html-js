import cleanHtml from "../src/clean-html";
import fetch from "isomorphic-fetch";

const URI = process.env.URI || "https://www.a11ywatch.com";
let html;

beforeAll(async () => {
  const source = await fetch(URI);
  html = await source.text();
});

describe("clean html", () => {
  const htmlSize: number[] = [];

  test("can sanatize html", async () => {
    const data = await cleanHtml(html, URI);
    expect(data).not.toBe(null);
  });

  test("can allow imgs", async () => {
    const data = await cleanHtml(html, URI, {
      allowedTags: ["img", "svg"],
    });
    expect(htmlSize[0] || 0).not.toBe(data?.content?.length);
  });
});
