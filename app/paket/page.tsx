import type { Metadata } from "next";
import PaketContent from "./PaketContent";
import JsonLd from "../components/JsonLd";
import { breadcrumbLd } from "../data/seo";

const description =
  "Paket hemat es krim sandwich homemade organik. Mulai dari Paket Hemat 6 pcs hingga Paket Katering 50 pcs. Mix & match varian rasa favoritmu!";

export const metadata: Metadata = {
  title: "Paket & Harga",
  description,
  alternates: { canonical: "/paket" },
  openGraph: {
    title: "Paket & Harga – Terrasmave",
    description,
    url: "/paket",
    type: "website",
  },
};

export default function PaketPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Paket & Harga", "/paket")} />
      <PaketContent />
    </>
  );
}
