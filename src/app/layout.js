import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import JsonLd from "../components/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  SITE_URL,
  SITE_NAME,
  ORGANIZATION_ID,
  WEBSITE_ID,
  BUSINESS,
  SERVICE_AREA,
  buildPageMetadata,
} from "../lib/seo";

const poppinsMedium = localFont({
  src: "../fonts/Poppins-Medium.ttf",
  variable: "--font-poppins",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a66c2",
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
      "telephone": BUSINESS.phone,
      "email": BUSINESS.email,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS.streetAddress,
        "postalCode": BUSINESS.postalCode,
        "addressLocality": BUSINESS.locality,
        "addressRegion": BUSINESS.region,
        "addressCountry": BUSINESS.country
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 47.63620920699451,
        "longitude": 17.603831025997735
      },
      "areaServed": SERVICE_AREA,
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": BUSINESS.phone,
        "email": BUSINESS.email,
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
      "@id": WEBSITE_ID,
      "url": SITE_URL,
      "name": SITE_NAME,
      "inLanguage": "hu-HU",
      "publisher": { "@id": ORGANIZATION_ID }
    }
  ]
};

export default async function RootLayout({ children }) {
  const [messages, t] = await Promise.all([
    getMessages(),
    getTranslations('nav'),
  ]);

  return (
    <html 
      lang="hu" 
      className={`${poppinsMedium.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <head>
        <JsonLd data={jsonLd} />
      </head>
      <body className="min-h-full flex flex-col font-poppins">
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
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
