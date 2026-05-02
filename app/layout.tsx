import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Terrasmave – Camilan Homemade Organik",
  description:
    "Terrasmave menyediakan camilan homemade berbahan organik. Pesan via WhatsApp – Jl. Swasembada Barat XIX No.16, Tanjung Priok.",
  openGraph: {
    title: "Terrasmave – Camilan Homemade Organik",
    description: "Camilan sehat, homemade, berbahan organik. Pesan sekarang!",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
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
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
