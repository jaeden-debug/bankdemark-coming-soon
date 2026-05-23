import { NextResponse } from "next/server";

const gonePatterns = [
  /^\/administrator\/?$/i,
  /^\/enz\/?$/i,
  /^\/Normal\/?$/i,
  /^\/sites\/demark\//i,

  /^\/components\//i,
  /^\/images\/stories\//i,
  /^\/media\//i,
  /^\/templates\//i,
  /^\/modules\//i,
  /^\/favicon\.ico$/i,
  /\.swf$/i,
  /\.gif$/i,
  /\.jpg$/i,
  /\.png$/i,
  /\.doc$/i,
  /\.xls$/i,
  /\.pdf$/i,

  /^\/wp-admin/i,
  /^\/administrator/i,
  /^\/wp-content/i,
  /^\/wp-includes/i,
  /^\/image\//i,
  /^\/category\//i,
  /^\/tag\//i,
  /^\/author\//i,
  /^\/slottica-casino\/?$/i,
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
  "/index.php?format=feed&type=atom": "/blog",
  "/index.php?format=feed&type=rss": "/blog",
  "/index.php?start=11": "/blog",
  "/poslugy.feed?type=atom": "/pillars/banking",
  "/poslugy.feed?type=rss": "/pillars/banking",
  "/poslugy/corpor.feed?type=atom": "/pillars/business-credit",
  "/poslugy/corpor.feed?type=rss": "/pillars/business-credit",
  "/pro-bank/arhv-novin.feed?type=atom": "/blog",
  "/pro-bank/arhv-novin.feed?type=rss": "/blog",
  "/pro-bank/rejting.feed?type=atom": "/pillars/banking",
  "/pro-bank/rejting.feed?type=rss": "/pillars/banking",
  "/contacts.html": "/contact",
  "/fin-news.html": "/blog",
  "/fin-news/249.html": "/blog",
  "/fin-news/55-dolg.html": "/pillars/debt-management",
  "/fin-news/64-minfin.html": "/pillars/personal-finance",

  "/component/content/article/1-common-category/361-02102014-l-lr-25-2014.html": "/pillars/banking",
  "/component/content/article/249.html": "/pillars/banking",
  "/component/content/article/362-29092014-l-lr-25092014-600-l-.html": "/pillars/banking",
  "/component/content/article/363-15102014.html": "/pillars/banking",
  "/component/content/article/365-17102014.html": "/pillars/banking",
  "/component/content/article/372-30102014.html": "/pillars/banking",
  "/feed/": "/blog",
  "/fin-news/fin-gram.html": "/blog",
  "/fin-news/fin-news.html": "/blog",

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
