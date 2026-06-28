import type { Metadata } from "next";
import ProductListing from "./ProductListing";
import JsonLd from "../components/JsonLd";
import { productListLd, breadcrumbLd } from "../data/seo";

const description =
  "Es krim scoop homemade: pilih varian 2 Scoop (Rp7.000) atau 3 Scoop (Rp10.000), lengkap dengan topping pilihan, choco sauce & bread. Rasa Vanilla, Chocolate, Strawberry.";

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
