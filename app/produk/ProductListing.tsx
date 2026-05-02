"use client";

import { useState } from "react";
import Products from "../components/Products";
import ProductModal from "../components/ProductModal";
import type { products } from "../data/products";

type Product = (typeof products)[number];

export default function ProductListing() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      <Products onProductClick={setSelected} />
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
