## clean-html-js

[![A11yWatch](https://circleci.com/gh/A11yWatch/clean-html-js.svg?style=svg)](https://circleci.com/gh/A11yWatch/clean-html-js)

clean html content for reading. simply pass in your content as html and get a readability object

## Installation Instructions

```bash
$ yarn add clean-html-js
```

## Example

![Alt Text](https://i.imgur.com/WeROrao.gif)

```typescript
import cleanHtml from "clean-html-js";

const grabReaderData = async function (html, url) {
  const readabilityArticle = await cleanHtml(html, url);
};

grabReaderData("https://www.a11ywatch.com").then((data) => {
  console.log(data);
});
```

- For more help getting started checkout [Example](https://github.com/j-mendez/react-native-reader-example)

## Available Params

| param  | default | type   | description                      |
| ------ | ------- | ------ | -------------------------------- |
| url    | ""      | string | Required: A valid web url source |
| html   | ""      | string | Required: html string            |
| config | {}      | Config | optional: config object          |

## Interface

## Config

merges with [config](src/clean=html.ts)

| prop        | default | type             | description                                      |
| ----------- | ------- | ---------------- | ------------------------------------------------ |
| allowedTags | null    | array of strings | html elements allowed                            |
| nonTextTags | null    | array of strings | html elements that should not be treated as text |

allowedTags currently does not support svgs
