const fetchHtml = (sourceUrl: string): Promise<string> => {
  return typeof fetch !== "undefined"
    ? fetch(sourceUrl)
        .then((data) => data.text())
        .catch((e) => {
          console.error(`Issue fetching ${sourceUrl} ${e}`);
          return "";
        })
    : Promise.resolve("");
};

export { fetchHtml };
