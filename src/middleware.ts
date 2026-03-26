import { NextRequest, NextResponse } from "next/server";

const locales = ["de", "en"];
const defaultLocale = "de";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale prefix
  const hasLocale = locales.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );
  if (hasLocale) return;

  // Detect preferred locale from Accept-Language header
  const acceptLang = request.headers.get("accept-language") || "";
  const preferred = acceptLang.includes("en") ? "en" : defaultLocale;

  // Redirect to locale-prefixed path
  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Match all paths except static files, API, _next, and SEO files
    "/((?!_next|api|opengraph-image|apple-icon|icon\\.svg|manifest\\.webmanifest|robots\\.txt|sitemap\\.xml|llms\\.txt|header\\.mp4|favicon\\.ico|.*\\..*).*)",
  ],
};
