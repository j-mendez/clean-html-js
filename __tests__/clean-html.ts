import "isomorphic-fetch";
import cleanHtml from "../src/clean-html";
import fs from "fs";
import path from "path";

describe("clean html", () => {
  const htmlSize: number[] = [];
  const paramKey = "-params=";
  let uri = "https://www.w3.org/";
  let html = "";
  let htmlFile = ""; // example: a11ywatch

  process.argv.forEach((item) => {
    if (item.startsWith(paramKey)) {
      const params = item.substring(paramKey.length).split(",");

      if (params.length) {
        [htmlFile, uri] = params;
      }
    }
  });

  html = fs.readFileSync(
    path.resolve(
      __dirname,
      `../examples/test-pages/${(htmlFile || "a11ywatch").replace(
        ".html",
        ""
      )}.html`
    ),
    "utf8"
  );

  test("can sanatize html", async () => {
    const data = await cleanHtml(html, uri);
    htmlSize.push(data.content?.length || 0);

    expect(data).not.toBe(null);
  });

  test("can allow imgs", async () => {
    const data = await cleanHtml(html, uri, {
      allowedTags: ["img", "svg"],
    });

    expect(htmlSize[0]).not.toBe(data.content?.length);
  });

  test("can parse without html provided", async () => {
    const data = await cleanHtml("", uri);

    expect(data).not.toBe(null);
  });
});
