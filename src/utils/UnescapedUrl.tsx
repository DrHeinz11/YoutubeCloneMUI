export function unescapeUrl(url: string) {
  return url.replace(/\\\//g, "/").replace(/\\:/g, ":");
}
