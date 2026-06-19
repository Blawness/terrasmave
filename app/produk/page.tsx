import type { Metadata } from "next";
import ProductListing from "./ProductListing";
import JsonLd from "../components/JsonLd";
import { productListLd, breadcrumbLd } from "../data/seo";

const description =
  "Es krim sandwich homemade: pilih 3 scoop rasa, tambah topping favoritmu, diapit roti. 6 varian — Cokelat, Vanilla, Strawberry, Matcha, Red Velvet, Cookies & Cream.";

export const metadata: Metadata = {
  title: "Produk",
  description,
  alternates: { canonical: "/produk" },
  openGraph: {
    title: "Produk – Terrasmave",
    description,
    url: "/produk",
    type: "website",
  },
};

export default function ProdukPage() {
  return (
    <>
      <JsonLd data={productListLd} />
      <JsonLd data={breadcrumbLd("Produk", "/produk")} />
      <ProductListing />
    </>
  );
}
