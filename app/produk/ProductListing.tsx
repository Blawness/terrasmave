"use client";

import { useState, useCallback } from "react";
import Products from "../components/Products";
import ProductModal from "../components/ProductModal";
import type { Product } from "../data/products";

export default function ProductListing() {
  const [selected, setSelected] = useState<Product | null>(null);

  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <>
      <Products onProductClick={setSelected} />
      <ProductModal product={selected} onClose={handleClose} />
    </>
  );
}
