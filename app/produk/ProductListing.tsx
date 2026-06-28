"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { products, flavors, toppings } from "../data/products";
import type { Product } from "../data/products";
import ProductModal from "../components/ProductModal";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductListing() {
  const [selected, setSelected] = useState<Product | null>(null);

  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <>
      <section className="relative py-16 sm:py-20 px-4 bg-secondary velato-pattern-dots">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Menu Spesial
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-4">
              PILIH VARIANMU
            </h1>
            <p className="text-stone-500 max-w-lg mx-auto">
              Dua pilihan ukuran, lengkap dengan topping pilihan, choco sauce & bread. Semua dibuat
              fresh dengan bahan organik pilihan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {products.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all group overflow-hidden cursor-pointer h-full"
                  onClick={() => setSelected(item)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.name} — es krim scoop homemade Terrasmave`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-primary font-semibold px-5 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 shadow-lg">
                      <MessageCircle className="h-4 w-4" />
                      Lihat Detail
                    </span>
                    {item.tag && (
                      <motion.span
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        className="absolute top-3 left-3 bg-gradient-to-r from-primary to-brand-brown text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md"
                      >
                        {item.tag}
                      </motion.span>
                    )}
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-display font-bold text-primary text-xl mb-1">
                      {item.name}
                    </h3>
                    <p className="text-stone-500 text-sm mb-3">{item.desc}</p>
                    <p className="text-2xl font-bold text-primary">{item.price}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8">
            <div className="bg-brand-pink/30 rounded-lg p-5 text-center">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Pilihan Rasa
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {flavors.map((flavor) => (
                  <span
                    key={flavor}
                    className="bg-white text-brand-dark text-sm font-medium px-3 py-1.5 rounded-full shadow-sm"
                  >
                    {flavor}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-brand-pink/30 rounded-lg p-5 text-center">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Pilihan Topping
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {toppings.map((topping) => (
                  <span
                    key={topping}
                    className="bg-white text-brand-dark text-sm font-medium px-3 py-1.5 rounded-full shadow-sm"
                  >
                    {topping}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductModal product={selected} onClose={handleClose} />
    </>
  );
}
