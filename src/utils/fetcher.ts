export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface FetcherOptions {
  method?: HttpMethod;
  body?: any;
  headers?: HeadersInit;
  cache?: RequestCache;
}

export async function fetcher<T = any>(
  url: string,
  options: FetcherOptions = {}
): Promise<T> {
  const { method = "GET", body, headers = {}, cache = "no-store" } = options;

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    cache,
    // credentials: "include",
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Unknown error" }));
    throw new Error(error.message || "Something went wrong");
  }

  return res.json();
}
