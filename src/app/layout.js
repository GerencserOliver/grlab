import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_URL, SITE_NAME, buildPageMetadata } from "../lib/seo";

const poppinsMedium = localFont({
  src: "../fonts/Poppins-Medium.ttf",
  variable: "--font-poppins",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f766e",
};

export async function generateMetadata() {
  const base = await buildPageMetadata('home', '/');

  return {
    ...base,
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    manifest: "/manifest.json",
    verification: {
      google: "gfv02jD0bvYJIEFYuZ-fXzEupUF6MNls--gVJJzcwfw",
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/logo192.png",
    },
  };
}

// Serialise JSON-LD safely: a literal "</script>" inside any string value
// would otherwise terminate the tag early.
const serializeJsonLd = (data) => JSON.stringify(data).replace(/</g, "\\u003c");

export default async function RootLayout({ children }) {
  const [messages, t] = await Promise.all([
    getMessages(),
    getTranslations('nav'),
  ]);

  const ORGANIZATION_ID = `${SITE_URL}/#organization`;

  // Exact street address / postal code are not in the codebase. Provide them
  // via environment variables so no placeholder data is ever published to
  // Google. They are omitted from the markup until set.
  const streetAddress = process.env.BUSINESS_STREET_ADDRESS;
  const postalCode = process.env.BUSINESS_POSTAL_CODE;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ORGANIZATION_ID,
        "name": SITE_NAME,
        "url": SITE_URL,
        "image": `${SITE_URL}/logo.png`,
        "logo": `${SITE_URL}/logo.png`,
        "description": "Egyedi weboldalak, webalkalmazások és digitális üzleti rendszerek vállalkozásoknak Győrben és Magyarországon.",
        "telephone": "+36704316723",
        "email": "info@grlab.hu",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          ...(streetAddress && { "streetAddress": streetAddress }),
          ...(postalCode && { "postalCode": postalCode }),
          "addressLocality": "Győr",
          "addressRegion": "Győr-Moson-Sopron",
          "addressCountry": "HU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 47.6875,
          "longitude": 17.6504
        },
        "areaServed": [
          { "@type": "City", "name": "Győr" },
          { "@type": "City", "name": "Budapest" },
          { "@type": "Country", "name": "Magyarország" }
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "telephone": "+36704316723",
          "email": "info@grlab.hu",
          "areaServed": "HU",
          "availableLanguage": ["hu", "en"]
        },
        "sameAs": [
          "https://www.google.com/search?kgmid=/g/11p1g_qc4r&q=GRLab"
        ],
        "knowsAbout": [
          "Weboldal készítés",
          "Mobilalkalmazás fejlesztés",
          "Google Cégprofil készítés",
          "Egyedi szoftverfejlesztés",
          "Digitális üzleti rendszerek",
          "Webshop fejlesztés",
          "SEO optimalizálás",
          "UX/UI tervezés"
        ],
        "serviceType": [
          "Weboldal készítés",
          "Webshop fejlesztés",
          "Egyedi szoftverfejlesztés",
          "Mobilalkalmazás fejlesztés",
          "Technikai SEO és Google Cégprofil",
          "UX/UI tervezés"
        ],
        "foundingDate": "2026-09-01",
        "foundingLocation": {
          "@type": "Place",
          "name": "Győr, Hungary"
        },
        "openingHours": "Mo-Fr 08:00-17:00",
        "keywords": "weboldal készítés Győr, webfejlesztés, mobilalkalmazás fejlesztés, digitális üzleti rendszerek, webdesign, UX/UI tervezés, SEO optimalizálás, webshop fejlesztés, google cégprofil készítés, egyedi szoftverfejlesztés, keresőoptimalizálás"
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": SITE_NAME,
        "inLanguage": "hu-HU",
        "publisher": { "@id": ORGANIZATION_ID }
      }
    ]
  };

  return (
    <html 
      lang="hu" 
      className={`${poppinsMedium.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-poppins">
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#102a2d] focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
          >
            {t('skipToContent')}
          </a>
          <div className="wrapper">
            <ScrollToTop />
            <Navbar />
            <main id="main-content" tabIndex={-1} className="focus:outline-none">{children}</main>
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
