import type { Metadata } from "next";
import WhyUsContent from "./WhyUsContent";
import JsonLd from "../components/JsonLd";
import { breadcrumbLd } from "../data/seo";

const description =
  "Es krim scoop tanpa pengawet, fresh setiap hari, 100% bahan organik. Pesan mudah via WhatsApp — dapur kami selalu siap.";

export const metadata: Metadata = {
  title: "Kenapa Kami",
  description,
  alternates: { canonical: "/kenapa-kami" },
  openGraph: {
    title: "Kenapa Kami – Terrasmave",
    description,
    url: "/kenapa-kami",
    type: "website",
  },
};

export default function KenapaKamiPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Kenapa Kami", "/kenapa-kami")} />
      <WhyUsContent />
    </>
  );
}
