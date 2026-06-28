import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { SITE_URL, SITE_NAME } from "./data/constants";
import { localBusinessLd } from "./data/seo";
import JsonLd from "./components/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    "Es krim scoop homemade Terrasmave: pilih 2 atau 3 scoop rasa, topping custom, choco sauce & bread. Mulai Rp 7.000. Dibuat fresh dari bahan organik. Pesan via WhatsApp – Tanjung Priok, Jakarta Utara.",
  keywords: [
    "es krim scoop",
    "es krim homemade",
    "es krim organik",
    "es krim 3 rasa",
    "es krim topping",
    "es krim murah Jakarta",
    "camilan organik Jakarta",
    "Terrasmave",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Terrasmave – Es Krim Scoop Homemade Organik",
    description:
      "Es krim scoop homemade: pilih 2 atau 3 scoop rasa, topping custom, choco sauce & bread. Mulai Rp 7.000. Pesan via WhatsApp – Tanjung Priok, Jakarta Utara.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Es krim scoop homemade Terrasmave",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terrasmave – Es Krim Scoop Homemade Organik",
    description:
      "Es krim scoop homemade: pilih 2 atau 3 scoop rasa, topping custom, choco sauce & bread. Mulai Rp 7.000.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#3e170b",
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
