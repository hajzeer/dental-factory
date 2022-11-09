import { simplyFetchFromGraph } from "../graph";

export async function getData({ query, asPath, language, preview = null }) {
  return simplyFetchFromGraph({
    query,
    variables: {
      path: asPath,
      language,
      version: preview ? "draft" : "published",
    },
  });
}
