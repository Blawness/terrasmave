import type { Metadata } from "next";
import ProductListing from "./ProductListing";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Es krim sandwich homemade berbahan organik. Pilih dari 6 varian rasa favoritmu — Cokelat, Vanilla, Strawberry, Matcha, Red Velvet, Cookies & Cream.",
};

export default function ProdukPage() {
  return <ProductListing />;
}
