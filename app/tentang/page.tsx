import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import JsonLd from "../components/JsonLd";
import { breadcrumbLd } from "../data/seo";

const description =
  "Terrasmave menghadirkan es krim scoop homemade dari bahan organik pilihan. Dibuat dengan tangan, penuh cinta, tanpa pengawet.";

export const metadata: Metadata = {
  title: "Tentang",
  description,
  alternates: { canonical: "/tentang" },
  openGraph: {
    title: "Tentang – Terrasmave",
    description,
    url: "/tentang",
    type: "website",
  },
};

export default function TentangPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Tentang", "/tentang")} />
      <AboutContent />
    </>
  );
}
