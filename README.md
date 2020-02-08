## clean-html-js

clean html content for reading. simply pass in your content as html and get a readability object

## Installation Instructions

```bash
$ yarn add clean-html-js
```

## Example

![Alt Text](https://i.imgur.com/WeROrao.gif)

```typescript
import { cleanHtml } from "clean-html-js";

const grabReaderData = async function(html, url) {
  const readabilityArticle = await cleanHtml(html, url);
  console.log(data);
};

grabReaderData("https://www.a11ywatch.com");
```

- For more help getting started checkout [Example](https://github.com/j-mendez/react-native-reader-example)

## Available Params

| param | default | type   | description                      |
| ----- | ------- | ------ | -------------------------------- |
| url   | ""      | string | Required: A valid web url source |
| html  | ""      | string | Required: html string            |
