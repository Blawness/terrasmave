import type { Metadata } from "next";
import KontakContent from "./KontakContent";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Terrasmave via WhatsApp di 0812-8181-8892, atau kunjungi kami di Jl. Swasembada Barat XIX No.16, Tanjung Priok, Jakarta Utara.",
};

export default function KontakPage() {
  return <KontakContent />;
}
