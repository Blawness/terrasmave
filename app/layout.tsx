import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { SITE_URL, SITE_NAME } from "./data/constants";
import { localBusinessLd } from "./data/seo";
import JsonLd from "./components/JsonLd";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Terrasmave – Camilan Homemade Organik",
    template: "%s – Terrasmave",
  },
  description:
    "Es krim sandwich homemade Terrasmave: 3 scoop rasa pilihan, topping custom, diapit roti. Dibuat fresh dari bahan organik. Pesan via WhatsApp – Tanjung Priok, Jakarta Utara.",
  keywords: [
    "es krim sandwich",
    "es krim roti",
    "es krim homemade",
    "es krim organik",
    "es krim 3 rasa",
    "es krim topping",
    "camilan organik Jakarta",
    "Terrasmave",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Terrasmave – Camilan Homemade Organik",
    description: "Camilan sehat, homemade, berbahan organik. Pesan sekarang!",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terrasmave – Camilan Homemade Organik",
    description: "Camilan sehat, homemade, berbahan organik. Pesan sekarang!",
  },
};

export const viewport: Viewport = {
  themeColor: "#9f1239",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <JsonLd data={localBusinessLd} />
        {/* Google Analytics 4 – ganti GA_MEASUREMENT_ID */}
        {/*
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        */}
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
