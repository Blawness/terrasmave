"use client";

import { Leaf, Heart, Award } from "lucide-react";
import FadeIn from "./FadeIn";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    icon: Leaf,
    title: "100% Bahan Organik",
    desc: "Cream, cokelat, dan cookies dari bahan alami pilihan",
  },
  {
    icon: Heart,
    title: "Handmade Fresh",
    desc: "Setiap sandwich dibuat manual dengan penuh perhatian",
  },
  {
    icon: Award,
    title: "6 Varian Rasa",
    desc: "Dari cokelat klasik hingga matcha premium",
  },
];

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="tentang" className="relative py-16 sm:py-20 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 velato-gradient-organic pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div ref={imageRef} className="relative" style={{ position: "relative" }}>
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <motion.img
                  style={{ y }}
                  src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=700&fit=crop"
                  alt="Terrasmave - Es krim sandwich homemade dari dapur kami"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 sm:right-8 bg-primary text-white p-4 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-display text-3xl font-bold">5+</p>
                <p className="text-sm">Tahun Pengalaman</p>
              </motion.div>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.1}>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                Tentang Kami
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight">
                DARI DAPUR KAMI
                <br />
                UNTUK KAMU
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-stone-600 leading-relaxed mb-8">
                Terrasmave menghadirkan es krim sandwich homemade yang dibuat dengan bahan organik
                pilihan. Setiap sandwich dibuat dengan tangan — dari adonan cookies hingga isian es
                krim yang creamy. Tanpa pengawet, tanpa pewarna buatan, murni rasa yang lezat.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <span className="text-primary font-semibold text-sm">Single Pack</span>
                  <span className="text-stone-500 text-sm">
                    — Satu es krim sandwich, cocok untuk ngemil sendiri
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-semibold text-sm">Family Box</span>
                  <span className="text-stone-500 text-sm">
                    — Isi 6 pcs, sempurna untuk dinikmati bersama keluarga
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-semibold text-sm">Custom Order</span>
                  <span className="text-stone-500 text-sm">
                    — Pesan untuk acara spesial, kami buatkan spesial
                  </span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {highlights.map(({ icon: Icon, title, desc }) => (
                  <motion.div
                    key={title}
                    whileHover={{ y: -4 }}
                    className="text-center p-4 rounded-lg bg-secondary"
                  >
                    <Icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-stone-800 text-sm mb-1">{title}</h3>
                    <p className="text-stone-500 text-xs">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
