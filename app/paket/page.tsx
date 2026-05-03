import type { Metadata } from "next";
import PaketContent from "./PaketContent";

export const metadata: Metadata = {
  title: "Paket & Harga",
  description:
    "Paket hemat es krim sandwich homemade organik. Mulai dari Paket Hemat 6 pcs hingga Paket Katering 50 pcs. Mix & match varian rasa favoritmu!",
};

export default function PaketPage() {
  return <PaketContent />;
}
