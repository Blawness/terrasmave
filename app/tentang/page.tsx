import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Terrasmave menghadirkan es krim sandwich homemade dari bahan organik pilihan. Dibuat dengan tangan, penuh cinta, tanpa pengawet.",
};

export default function TentangPage() {
  return <AboutContent />;
}
