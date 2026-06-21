"use client";

import Image from "next/image";
import { useState, useCallback, useMemo } from "react";
import { products } from "../data/products";
import type { Product } from "../data/products";
import Products from "../components/Products";
import ProductModal from "../components/ProductModal";
import { Search, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const allTags = ["Best Seller", "Favorit", "Premium", "New"];

export default function ProductListing() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const handleClose = useCallback(() => setSelected(null), []);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.desc.toLowerCase().includes(search.toLowerCase());
      const matchTag = !activeTag || p.tag === activeTag;
      return matchSearch && matchTag;
    });
  }, [search, activeTag]);

  return (
    <>
      <section className="relative py-16 sm:py-20 px-4 bg-secondary velato-pattern-dots">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Varian Rasa
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-4">
              PILIH RASA FAVORITMU
            </h1>
            <p className="text-stone-500 max-w-lg mx-auto">
              Semua varian dibuat fresh dengan bahan organik pilihan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 max-w-xl mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
              <input
                type="text"
                placeholder="Cari varian..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                !activeTag
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-white text-stone-500 border border-stone-200 hover:border-primary hover:text-primary"
              }`}
            >
              Semua
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeTag === tag
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "bg-white text-stone-500 border border-stone-200 hover:border-primary hover:text-primary"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <p className="text-stone-400 text-lg mb-2">Varian tidak ditemukan</p>
                <p className="text-stone-300 text-sm">
                  Coba kata kunci lain atau reset filter
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6"
              >
                {filtered.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all group overflow-hidden cursor-pointer"
                      onClick={() => setSelected(item)}
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <a
                          href={`https://wa.me/6281281818892?text=Halo, saya mau pesan ${encodeURIComponent(item.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-primary font-semibold px-5 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 shadow-lg"
                        >
                          <Search className="h-4 w-4" />
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
                        <p className="text-primary font-bold text-sm mt-1">{item.price}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <ProductModal product={selected} onClose={handleClose} />
    </>
  );
}
