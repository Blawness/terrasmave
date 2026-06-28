import type { Metadata } from "next";
import TestimoniContent from "./TestimoniContent";
import JsonLd from "../components/JsonLd";
import { breadcrumbLd } from "../data/seo";

const description =
  "Bagikan pengalaman kamu menikmati es krim scoop homemade Terrasmave. Kirim testimoni via WhatsApp sekarang!";

export const metadata: Metadata = {
  title: "Testimoni",
  description,
  alternates: { canonical: "/testimoni" },
  openGraph: {
    title: "Testimoni – Terrasmave",
    description,
    url: "/testimoni",
    type: "website",
  },
};

export default function TestimoniPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Testimoni", "/testimoni")} />
      <TestimoniContent />
    </>
  );
}
