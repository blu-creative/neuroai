import { NextResponse } from "next/server";

export async function middleware(request) {
  const url = request.nextUrl.clone();

  const searchParams = url.searchParams;

  const searchQuery = searchParams.get("locale");

  if (!searchQuery) {
    const response = await fetch("https://freeipapi.com/api/json");
    const data = await response.json();
    if (data.regionName === "Quebec") {
      searchParams.set("locale", "fr");
      url.search = searchParams.toString();

      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/benefits",
    "/accessibility",
    "/blog/:path*",
    "/contact-us",
    "/fAQ",
    "/features",
    "/neuro-vs-competition",
  ],
};
