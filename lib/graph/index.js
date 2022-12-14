import fetch from "isomorphic-unfetch";

export function safePathQuery({ variables, ...rest }) {
  if (variables && "path" in variables) {
    const safePath = (variables.path || "")
      .split("?")[0]
      .split("#")[0]
      .replace(/\/$/, "");

    return {
      variables: {
        ...variables,
        path: safePath,
      },
      ...rest,
    };
  }

  return {
    variables,
    ...rest,
  };
}

const crystallizeApiUrlBase = `https://api.crystallize.com/${process.env.CRYSTALLIZE_TENANT_IDENTIFIER}`;

export async function simplyFetchFromGraph({
  uri = `${crystallizeApiUrlBase}/catalogue`,
  query,
  variables,
}) {
  const body = JSON.stringify(safePathQuery({ query, variables }));

  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body,
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}
