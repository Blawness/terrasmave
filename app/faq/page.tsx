import type { Metadata } from "next";
import FAQContent from "./FAQContent";
import JsonLd from "../components/JsonLd";
import { faqLd, breadcrumbLd } from "../data/seo";

const description =
  "Pertanyaan umum seputar Terrasmave — produk, pemesanan, pengiriman, penyimpanan, dan paket bundling.";

export const metadata: Metadata = {
  title: "FAQ",
  description,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ – Terrasmave",
    description,
    url: "/faq",
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumbLd("FAQ", "/faq")} />
      <FAQContent />
    </>
  );
}
