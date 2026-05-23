import { NextResponse } from "next/server";

const gonePatterns = [
  /^\/checkouts\//i,
  /^\/galleries\//i,
  /^\/image\//i,
  /^\/page\//i,
  /^\/products\/sw\.js$/i,
  /^\/react(-dom)?\.js$/i,
  /^\/.*\.pdf$/i,
  /^\/sites\/default\//i,
  /^\/slot-gacor-online\.jpg$/i,
  /^\/wp-content\//i,

  /^\/ua\/services_on_line\/calculator\.js$/i,
  /^\/\.well-known\//i,
  /^\/2019\//i,
  /^\/2020\//i,
  /^\/ads\.txt$/i,
  /^\/app-ads\.txt$/i,
  /^\/author\//i,
  /^\/category\//i,

  /^\/ua\/maino\/?$/i,
  /^\/ua\/map\/?$/i,
  /^\/ua\/search\/?$/i,

  /^\/ua\/activity\/?$/i,
  /^\/ua\/services\/?$/i,
  /^\/ua\/about\/archiv_news\/?$/i,

  /^\/ua\/?$/i,

  /^\/forum\/?$/i,
  /^\/maino\//i,
  /^\/news\.feed/i,
  /^\/news\/(237|244|245|259|263|265|277|293|295|347|367|368|370|371|373|374|375|376|395|396|398|399|400)-/i,

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
  "/favicon.webp": "/icon.png",

  "/ua/services/phisic/vklad": "/calculators/compound-interest-calculator",
  "/ua/services_on_line": "/calculators",
  "/ua/services_on_line/converter": "/calculators",
  "/ua/services_on_line/credit_calculator": "/calculators/debt-payoff-calculator",
  "/ua/services_on_line/depozit_calculator": "/calculators/compound-interest-calculator",
  "/ua/services_on_line/komunal": "/calculators/budget-calculator",
  "/ua/services_on_line/mail_perekaz": "/calculators/budget-calculator",
  "/ua/services_on_line/mobil": "/calculators/budget-calculator",
  "/ua/services_on_line/zakaz": "/contact",
  "/ua/useful_instructions": "/blog",
  "/ua/useful_instructions/bankomat": "/blog",
  "/ua/useful_instructions/changing_pin_code": "/blog",
  "/ua/useful_instructions/dowloading_money": "/blog",
  "/ua/useful_instructions/rulers": "/blog",

  "/ua/services/phisic": "/pillars/personal-finance",

  "/ua/about/face": "/about",
  "/ua/about/history": "/about",
  "/ua/about/partners": "/about",
  "/ua/about/vacancy": "/about",
  "/ua/about/vacancy/vacancy_donetsk": "/about",
  "/ua/about/vacancy/vacancy_kharkov": "/about",
  "/ua/about/vacancy/vacancy_kyiv": "/about",
  "/ua/about/visitka": "/about",
  "/ua/activity": "/pillars/banking",
  "/ua/activity/main_index": "/pillars/banking",
  "/ua/activity/rating": "/pillars/banking",
  "/ua/activity/year_report": "/pillars/banking",
  "/ua/contacts": "/contact",
  "/ua/finance_news": "/blog",
  "/ua/On-line": "/calculators",
  "/ua/services": "/pillars/banking",
  "/ua/services/jurist": "/pillars/banking",

  "/pro-bank/akc.html": "/pillars/banking",
  "/pro-bank/arhv-novin.html": "/blog",
  "/pro-bank/information-for-owner.html": "/about",
  "/pro-bank/information-for-owner/249.html": "/about",
  "/pro-bank/korespondentsk-rahunki.html": "/pillars/banking",
  "/pro-bank/oblichchja-banku.html": "/about",
  "/pro-bank/partneri-.html": "/about",
  "/pro-bank/povidomlennya-pro-dani.html": "/privacy",
  "/pro-bank/rejting.html": "/pillars/banking",
  "/pro-bank/storja.html": "/about",
  "/pro-bank/storja/249.html": "/about",
  "/pro-bank/vakans.html": "/about",
  "/pro-bank/vzitna-kartka.html": "/about",
  "/realzacja.html": "/pillars/banking",
  "/ru": "/about",
  "/strokov-vkladi.feed?type=atom": "/calculators/compound-interest-calculator",
  "/strokov-vkladi.feed?type=rss": "/calculators/compound-interest-calculator",
  "/strokov-vkladi.html": "/calculators/compound-interest-calculator",
  "/strokov-vkladi/173-fond.html": "/pillars/investing",
  "/strokov-vkladi/204-mukacheve.html": "/calculators/compound-interest-calculator",
  "/strokov-vkladi/205-rvne.html": "/calculators/compound-interest-calculator",
  "/strokov-vkladi/206-odesa.html": "/calculators/compound-interest-calculator",
  "/strokov-vkladi/207-mikolav.html": "/calculators/compound-interest-calculator",
  "/strokov-vkladi/208-cherkasi.html": "/calculators/compound-interest-calculator",
  "/strokov-vkladi/209-herson.html": "/calculators/compound-interest-calculator",
  "/strokov-vkladi/210-vnnicja.html": "/calculators/compound-interest-calculator",
  "/strokov-vkladi/211-lvv.html": "/calculators/compound-interest-calculator",
  "/strokov-vkladi/212-krivij-rg.html": "/calculators/compound-interest-calculator",
  "/strokov-vkladi/213-smferopol.html": "/calculators/compound-interest-calculator",
  "/strokov-vkladi/214-poltava.html": "/calculators/compound-interest-calculator",
  "/strokov-vkladi/215-brovari.html": "/calculators/compound-interest-calculator",
  "/strokov-vkladi/216-zaporzhzhja.html": "/calculators/compound-interest-calculator",
  "/strokov-vkladi/217-dnpropetrovsk.html": "/calculators/compound-interest-calculator",
  "/strokov-vkladi/218-harkv.html": "/calculators/compound-interest-calculator",
  "/strokov-vkladi/219-cherngv.html": "/calculators/compound-interest-calculator",
  "/strokov-vkladi/249.html": "/calculators/compound-interest-calculator",

  "/fin-news/67-pravah.html": "/blog",
  "/fin-news/68-kiev.html": "/blog",
  "/fin-news/69-nalogovyj-kodeks.html": "/pillars/personal-finance",
  "/fin-news/71-es.html": "/blog",
  "/fin-news/73-mvf.html": "/blog",
  "/fin-news/74-koalicija.html": "/blog",
  "/fin-news/75-minfin.html": "/pillars/personal-finance",
  "/fin-news/76-blagoprijatnosti.html": "/blog",
  "/fin-news/77-vlasti-japonii.html": "/blog",
  "/fin-news/78-zhkh.html": "/blog",
  "/fin-news/79-kipr.html": "/blog",
  "/fondi.html": "/pillars/investing",
  "/home.feed?type=atom": "/blog",
  "/home.feed?type=rss": "/blog",
  "/home.html": "/",
  "/home/1-common-category/361-02102014-l-lr-25-2014.html": "/pillars/banking",
  "/home/249.html": "/pillars/banking",
  "/home/362-29092014-l-lr-25092014-600-l-.html": "/pillars/banking",
  "/home/363-15102014.html": "/pillars/banking",
  "/home/365-17102014.html": "/pillars/banking",
  "/index.php": "/",
  "/index.php?start=22": "/blog",
  "/instructions.html": "/pillars/banking",
  "/instructions/bankomat.html": "/pillars/banking",
  "/instructions/nsmep.html": "/pillars/banking",
  "/instructions/oplata-vartost-tovarv.html": "/pillars/banking",
  "/instructions/termnal.html": "/pillars/banking",
  "/instructions/torgovij-termnal.html": "/pillars/banking",
  "/instructions/zavantazhennja.html": "/pillars/banking",
  "/instructions/zmna-pin.html": "/pillars/banking",
  "/news/243-demark-naysilnishiy.html": "/about",
  "/news/270-kapital.html": "/pillars/investing",
  "/news/349-2014-09-02-14-25-01.html": "/blog",
  "/news/350--02-2014-.html": "/blog",
  "/news/351-2014-09-03-08-29-52.html": "/blog",
  "/news/352----qq--------.html": "/blog",
  "/news/353-2014-09-24-08-41-24.html": "/blog",
  "/news/354----------lr--r--------------.html": "/blog",
  "/news/355--l-lr-.html": "/blog",
  "/news/356--qq.html": "/blog",
  "/news/357--01102014-------qq.html": "/blog",
  "/news/358-2014-10-02-08-13-00.html": "/blog",
  "/pokaznyky.html": "/pillars/banking",
  "/pokaznyky/zvitnist.html": "/pillars/banking",
  "/pokaznyky/rejting.html": "/pillars/banking",
  "/poslugy-on-line/nternet-perekazi.html": "/pillars/banking",
  "/poslugy-on-line/oplata.html": "/pillars/banking",
  "/poslugy-on-line/popovnennja-rahunkv.html": "/pillars/banking",
  "/poslugy-on-line/zamovlennja-platzhnih-kartok.html": "/pillars/banking",
  "/poslugy/239-invest.html": "/pillars/investing",
  "/poslugy/82-kredit-.html": "/calculators/mortgage-calculator",
  "/poslugy/89-cnn-paperi.html": "/pillars/investing",
  "/poslugy/91-groshov-perekazi-.html": "/pillars/banking",
  "/poslugy/93-vkladi-na-vimogu-.html": "/calculators/compound-interest-calculator",
  "/poslugy/94-platzhn-kartki.html": "/pillars/banking",
  "/poslugy/95-kredituvannja.html": "/calculators/mortgage-calculator",
  "/poslugy/corpor.html": "/pillars/business-credit",
  "/poslugy/corpor/163-kredituvannja.html": "/pillars/business-credit",
  "/poslugy/corpor/292-tarify-fop-yur.html": "/pillars/business-credit",
  "/poslugy/privat.html": "/pillars/personal-finance",
  "/pro-bank.html": "/about",
  "/pro-bank/1.html": "/about",

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
  const lookupKey = `${pathname}${url.search}`;

  
  
const normalizedPath = pathname.replace(/\/$/, "") || "/";

const isOldUaArticle =
  normalizedPath === "/ua" &&
  url.searchParams.has("article");

const isOldUaArchiveArticle =
  normalizedPath === "/ua/about/archiv_news" &&
  url.searchParams.has("article");

const isOldUaActivityArticle =
  normalizedPath === "/ua/activity" &&
  url.searchParams.has("article");

const isOldUaServicesArticle =
  normalizedPath === "/ua/services" &&
  url.searchParams.has("article");


const isOldUaServicesPhisicArticle =
  normalizedPath === "/ua/services/phisic" &&
  url.searchParams.has("article");

const isOldUaServicesJuristArticle =
  normalizedPath === "/ua/services/jurist" &&
  url.searchParams.has("article");

if (
  isOldUaArticle ||
  isOldUaArchiveArticle ||
  isOldUaActivityArticle ||
  isOldUaServicesArticle ||
  isOldUaServicesPhisicArticle ||
  isOldUaServicesJuristArticle
) {
  return new NextResponse("Gone", {
    status: 410,
    headers: {
      "Content-Type": "text/plain",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

  if (legacyRedirects[lookupKey] || legacyRedirects[pathname]) {
    return NextResponse.redirect(new URL(legacyRedirects[lookupKey] || legacyRedirects[pathname], request.url), 308);
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
