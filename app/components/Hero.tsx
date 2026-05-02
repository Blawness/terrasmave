"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const bannerText = "✦ Exclusively at Terrasmave";
  const repeatCount = 10;

  return (
    <section className="relative overflow-hidden bg-background velato-pattern-dots">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Homemade · Organik · Penuh Cinta
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-none tracking-tight mb-6">
              ES KRIM
              <br />
              SANDWICH
              <br />
              HOMEMADE
            </h1>
            <p className="text-stone-500 text-lg mb-8 max-w-md mx-auto lg:mx-0">
              Es krim sandwich homemade dengan bahan organik pilihan. Dibuat fresh setiap hari, tanpa pengawet dan pewarna buatan.
            </p>
            <div className="flex gap-3 justify-center lg:justify-start flex-wrap">
              <Button asChild size="lg" className="bg-primary hover:bg-red-700 text-white px-8">
                <a href="https://wa.me/6281281818892" target="_blank" rel="noopener noreferrer">
                  Pesan Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8"
              >
                <a href="#produk">Lihat Menu</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              <motion.div
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=600&fit=crop"
                  alt="Terrasmave Camilan"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold text-center leading-tight shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                100%
                <br />
                Organik
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-6 w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, 8, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-2xl">🍪</span>
              </motion.div>

              <motion.div
                className="absolute top-8 -left-8 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shadow"
                animate={{ y: [0, 6, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <span className="text-xl">🌿</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 right-8 w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center shadow"
                animate={{ y: [0, -8, 0], rotate: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <span className="text-xl">❤️</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="overflow-hidden bg-primary py-3">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {Array.from({ length: repeatCount }).map((_, i) => (
            <span
              key={i}
              className="inline-block px-6 text-white font-bold text-sm uppercase tracking-wider"
            >
              {bannerText}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
