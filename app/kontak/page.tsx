import type { Metadata } from "next";
import KontakContent from "./KontakContent";
import JsonLd from "../components/JsonLd";
import { breadcrumbLd } from "../data/seo";

const description =
  "Hubungi Terrasmave via WhatsApp di 0812-8181-8892, atau kunjungi kami di Jl. Swasembada Barat XIX No.16, Tanjung Priok, Jakarta Utara.";

export const metadata: Metadata = {
  title: "Kontak",
  description,
  alternates: { canonical: "/kontak" },
  openGraph: {
    title: "Kontak – Terrasmave",
    description,
    url: "/kontak",
    type: "website",
  },
};

export default function KontakPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Kontak", "/kontak")} />
      <KontakContent />
    </>
  );
}
