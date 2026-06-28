"use client";

import { Leaf, Heart, Award } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    icon: Leaf,
    title: "100% Bahan Organik",
    desc: "Es krim, cokelat, dan topping dari bahan alami pilihan",
  },
  {
    icon: Heart,
    title: "Handmade Fresh",
    desc: "Setiap porsi dibuat manual dengan penuh perhatian",
  },
  {
    icon: Award,
    title: "3 Pilihan Rasa",
    desc: "Vanilla, Chocolate, dan Strawberry",
  },
];

export default function AboutContent() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section className="relative py-16 sm:py-20 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 velato-gradient-organic pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div ref={imageRef} className="relative" style={{ position: "relative" }}>
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <motion.img
                  style={{ y }}
                  src="/products/tentang-kami.webp"
                  alt="Terrasmave - Es krim scoop homemade dari dapur kami"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 sm:right-8 bg-brand-pink text-brand-dark p-4 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-display text-3xl font-bold">5+</p>
                <p className="text-sm">Tahun Pengalaman</p>
              </motion.div>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.1}>
              <p className="inline-block bg-brand-pink/30 text-brand-dark font-semibold text-sm uppercase tracking-widest mb-2 px-3 py-1 rounded-full">
                Tentang Kami
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight">
                DARI DAPUR KAMI
                <br />
                UNTUK{" "}
                <span className="box-decoration-clone bg-[linear-gradient(transparent_55%,#f798ab_55%)] px-1">
                  KAMU
                </span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-stone-600 leading-relaxed mb-8">
                Terrasmave menghadirkan es krim scoop homemade yang dibuat dengan bahan organik
                pilihan. Setiap porsi diracik dengan tangan — dari scoop es krim yang creamy hingga
                topping renyah dan choco sauce. Tanpa pengawet, tanpa pewarna buatan, murni rasa
                yang lezat.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <span className="text-primary font-semibold text-sm whitespace-nowrap">
                    2 Scoop
                  </span>
                  <span className="text-stone-500 text-sm">
                    — Rp 7.000, 2 scoop + 2 topping + choco sauce & bread
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-semibold text-sm whitespace-nowrap">
                    3 Scoop
                  </span>
                  <span className="text-stone-500 text-sm">
                    — Rp 10.000, 3 scoop + 3 topping + choco sauce & bread
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-semibold text-sm whitespace-nowrap">
                    Custom Order
                  </span>
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
