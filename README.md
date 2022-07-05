## clean-html-js

[![CircleCI](https://circleci.com/gh/j-mendez/clean-html-js/tree/master.svg?style=svg)](https://circleci.com/gh/j-mendez/clean-html-js/tree/master)

clean html content for reading. simply pass in your content as html and get a readability object

## Installation Instructions

```bash
$ yarn add clean-html-js
```

## Example

![iOS and android apps being parsed into readability views using the clean-html-js and react-native-reader package](https://i.imgur.com/WeROrao.gif)

```typescript
import cleanHtml from "clean-html-js";

const url = "https://www.a11ywatch.com";

async function grabReaderData() {
  const source = await fetch(url);
  const html = await source.text();
  return await cleanHtml(html, url);
}

async function grabReaderDataSimple() {
  const readabilityArticle = await cleanHtml("", url);
}

grabReaderData().then((data) => {
  console.log(data);
});

// or just the url
grabReaderDataSimple().then((data) => {
  console.log(data);
});
```

## Available Params

| param     | default | type   | description                                                          |
| --------- | ------- | ------ | -------------------------------------------------------------------- |
| html      | ""      | string | Required: html string to parse                                       |
| sourceUrl | ""      | string | Optional: url of the html source to prevent fetching extra resources |
| config    | {}      | Config | Optional: config object                                              |

If html is not provided and sourceUrl is found an attempt to fetch the html is done.

## Config

merges with [config](src/clean-html.ts)

| prop        | default | type             | description                                       |
| ----------- | ------- | ---------------- | ------------------------------------------------- |
| allowedTags | null    | array of strings | html elements allowed note:(svgs must be inlined) |
| nonTextTags | null    | array of strings | html elements that should not be treated as text  |

## Testing

to test custom pages pass in your params seperated by commas into the jest test example `yarn jest '-params=mozilla,https://www.mozilla.com'` or `yarn jest '-params=a11ywatch,https://www.a11ywatch.com'`. First param is the html file being pulled from the `examples` folder and the second is an optional uri for the resources.

1. `npm test`
