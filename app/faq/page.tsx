import type { Metadata } from "next";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Pertanyaan umum seputar Terrasmave — produk, pemesanan, pengiriman, penyimpanan, dan paket bundling.",
};

export default function FAQPage() {
  return <FAQContent />;
}
