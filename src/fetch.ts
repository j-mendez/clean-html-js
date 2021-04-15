const fetchHtml = async (sourceUrl: string): Promise<string> => {
  let html
  try {
    if (typeof fetch !== "undefined") {
      const data = await fetch(sourceUrl)
      const source = await data.text()

      html = source
    }
  } catch (e) {
    console.error(`Issue fetching ${sourceUrl} ${e}`)
  } finally {
    return Promise.resolve(html || "")
  }
}

export { fetchHtml }
