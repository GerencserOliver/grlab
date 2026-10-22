
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SEOHead from "../components/SEOHead";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import I18nProvider from "./I18nProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GRLab | Egyedi digitális megoldások",
  description:
    "Egyedi weboldalak, webalkalmazások és digitális üzleti rendszerek vállalkozásoknak Győrben és Magyarországon.",
  metadataBase: new URL("https://www.grlab.hu"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GRLab | Egyedi digitális megoldások",
    description:
      "Egyedi weboldalak, webalkalmazások és digitális üzleti rendszerek vállalkozásoknak Győrben és Magyarországon.",
    url: "https://www.grlab.hu/",
    siteName: "GRLab",
    locale: "hu_HU",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="hu"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <I18nProvider>
          <div className="wrapper">
            <ScrollToTop />
            <SEOHead />
            <Navbar />

            <main>{children}</main>

            <Footer />
          </div>

          <Analytics />
          <SpeedInsights />
        </I18nProvider>
      </body>
    </html>
  );
}
