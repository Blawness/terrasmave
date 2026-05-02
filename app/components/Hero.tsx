"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const bannerText = "✦ Exclusively at Terrasmave";
  const repeatCount = 10;

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Homemade · Organik · Penuh Cinta
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-none tracking-tight mb-6">
              60+
              <br />
              CAMILAN
              <br />
              HOMEMADE
            </h1>
            <p className="text-stone-500 text-lg mb-8 max-w-md mx-auto lg:mx-0">
              Camilan sehat dari dapur rumahan kami. Dibuat dengan bahan organik pilihan, tanpa
              pengawet dan pewarna buatan.
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
          </div>

          <div className="relative flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=600&fit=crop"
                  alt="Terrasmave Camilan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold text-center leading-tight shadow-lg">
                100%
                <br />
                Organik
              </div>
              <div className="absolute -bottom-2 -left-6 w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🍪</span>
              </div>
              <div className="absolute top-8 -left-8 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shadow">
                <span className="text-xl"></span>
              </div>
            </div>
          </div>
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
