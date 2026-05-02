"use client";

import { products } from "../data/products";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

interface ProductsProps {
  limit?: number;
  onProductClick?: (product: (typeof products)[number]) => void;
}

export default function Products({ limit, onProductClick }: ProductsProps) {
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <section className="relative py-16 sm:py-20 px-4 bg-secondary velato-pattern-dots">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Varian Rasa
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-4">
            PILIH RASA FAVORITMU
          </h2>
          <p className="text-stone-500 max-w-lg mx-auto">
            Semua varian dibuat fresh dengan bahan organik pilihan. Creamy, lembut, dan penuh cinta.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {displayedProducts.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all group overflow-hidden cursor-pointer"
                onClick={() => onProductClick?.(item)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <a
                    href={`https://wa.me/6281281818892?text=Halo, saya mau pesan ${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-primary font-semibold px-5 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 shadow-lg"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Pesan
                  </a>
                  {item.tag && (
                    <motion.span
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      className="absolute top-3 left-3 bg-gradient-to-r from-primary to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md"
                    >
                      {item.tag}
                    </motion.span>
                  )}
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base mb-1">
                    {item.name}
                  </h3>
                  <p className="text-stone-400 text-xs">{item.desc}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {limit && (
          <FadeIn delay={0.4}>
            <div className="text-center mt-10">
              <Link
                href="/produk"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-3 rounded-md hover:bg-primary hover:text-white transition-colors"
              >
                Lihat Semua Varian
                <span>→</span>
              </Link>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
