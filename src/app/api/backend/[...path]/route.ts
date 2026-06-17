import { NextRequest } from "next/server";

const BACKEND_API_BASE_URL =
  process.env.BACKEND_API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

async function proxy(request: NextRequest, context: { params: { path: string[] } }) {
  const target = new URL(`/${context.params.path.join("/")}`, BACKEND_API_BASE_URL);
  target.search = request.nextUrl.search;

  const body = request.method === "GET" || request.method === "HEAD" ? undefined : await request.text();
  const response = await fetch(target, {
    method: request.method,
    headers: {
      "Content-Type": request.headers.get("Content-Type") ?? "application/json",
      Authorization: request.headers.get("Authorization") ?? "",
    },
    body,
    cache: "no-store",
  });

  return new Response(response.body, {
    status: response.status,
    headers: {
      "Content-Type": response.headers.get("Content-Type") ?? "application/json",
    },
  });
}

export const GET = proxy;
export const POST = proxy;
export const PATCH = proxy;
export const PUT = proxy;
export const DELETE = proxy;
