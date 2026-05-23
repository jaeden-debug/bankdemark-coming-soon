import { NextResponse } from "next/server";

const gonePatterns = [
  /^\/wp-admin/i,
  /^\/administrator/i,
  /^\/wp-content/i,
  /^\/wp-includes/i,
  /^\/image\//i,
  /^\/category\//i,
  /^\/tag\//i,
  /^\/author\//i,
  /^\/slottica-casino/i,
  /^\/slot-gacor-online\.jpg/i,
  /^\/2019\//i,
  /^\/2020\//i,
  /^\/\.well-known\/(nodeinfo|openid-configuration|trust\.txt|gpc\.json|dnt-policy\.txt)/i,
  /menara368/i,
  /slot/i,
  /casino/i,
  /gacor/i,
  /toto/i,
  /abadicash/i,
];

const legacyRedirects = {
  "/poslugy-on-line/kalkuljator.html": "/calculators/compound-interest-calculator",
  "/ua/services_on_line/credit_calculator": "/calculators/mortgage-calculator",
  "/ua/services_on_line/depozit_calculator": "/calculators/compound-interest-calculator",
  "/pro-bank/rejting.html": "/pillars/banking",
  "/pro-bank/storja.html": "/about",
  "/fondi.html": "/pillars/investing",
  "/strokov-vkladi.html": "/calculators/compound-interest-calculator",
  "/poslugy.html": "/pillars/banking",
  "/poslugy-on-line.html": "/calculators",
  "/fin-news.html": "/blog",
  "/contacts.html": "/contact",
};

export function middleware(request) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  if (legacyRedirects[pathname]) {
    return NextResponse.redirect(new URL(legacyRedirects[pathname], request.url), 308);
  }

  if (gonePatterns.some((pattern) => pattern.test(pathname))) {
    return new NextResponse("Gone", {
      status: 410,
      headers: {
        "Content-Type": "text/plain",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png).*)"],
};
