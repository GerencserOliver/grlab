import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppinsMedium = localFont({
  src: "../fonts/Poppins-Medium.ttf",
  variable: "--font-poppins",
  display: "swap",
});

export async function generateMetadata() {
  const t = await getTranslations('seoOptimization');

  return {
    title: t('home.title'),
    description: t('home.description'),
    metadataBase: new URL("https://www.grlab.hu"),
    alternates: {
      canonical: "/",
    },
    verification: {
      google: "gfv02jD0bvYJIEFYuZ-fXzEupUF6MNls--gVJJzcwfw",
    },
    openGraph: {
      title: t('home.title'),
      description: t('home.description'),
      url: "https://www.grlab.hu/",
      siteName: "GRLab",
      images: [
        {
          url: "https://www.grlab.hu/logo.png",
          width: 1200,
          height: 630,
          alt: "GRLab Logo",
        },
      ],
      locale: "hu_HU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t('home.title'),
      description: t('home.description'),
      images: ["https://www.grlab.hu/logo.png"],
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/logo192.png",
    },
  };
}

export default async function RootLayout({ children }) {
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "GRLab",
    "image": "https://www.grlab.hu/logo.png",
    "@id": "https://www.grlab.hu/#organization",
    "url": "https://www.grlab.hu",
    "telephone": "+36704316723",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Győr",
      "addressRegion": "Győr-Moson-Sopron",
      "addressCountry": "HU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.6875,
      "longitude": 17.6504
    },
    "areaServed": ["Győr", "Budapest", "Magyarország"],
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
    "foundingDate": "2026-09-01",
    "foundingLocation": {
      "@type": "Place",
      "name": "Győr, Hungary"
    },
    "description": "Egyedi weboldalak, webalkalmazások és digitális üzleti rendszerek vállalkozásoknak Győrben és Magyarországon.",
    "keywords": "weboldal készítés, webfejlesztés, mobilalkalmazás fejlesztés, digitális üzleti rendszerek, Győr, Magyarország, webdesign, UX/UI tervezés, SEO optimalizálás, webshop fejlesztés, google cégprofil készítés, egyedi szoftverfejlesztés, keresőoptimalizálás, online jelenlét, webes megoldások, vállalkozásfejlesztés, webes szolgáltatások",
    "email": "info@grlab.hu",
    "logo": "https://www.grlab.hu/logo.png",
    "openingHours": "Mo-Fr 08:00-17:00",
    "serviceType": "Web Development, Mobile App Development, Digital Business Solutions, SEO Optimization, UX/UI Design, E-commerce Development",
  };

  return (
    <html 
      lang="hu" 
      className={`${poppinsMedium.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-poppins">
        <NextIntlClientProvider messages={messages}>
          <div className="wrapper">
            <ScrollToTop />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
