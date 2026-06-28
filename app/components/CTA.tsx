"use client";

import { MessageCircle, Instagram } from "lucide-react";
import FadeIn from "./FadeIn";
import { motion } from "framer-motion";
import { WHATSAPP_URL, INSTAGRAM_URL } from "../data/constants";

export default function CTA() {
  return (
    <>
      <section className="relative py-16 sm:py-20 px-4 bg-brand-pink text-brand-dark text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div
            className="absolute top-10 left-10 w-24 h-24 bg-white rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </div>
        <div className="max-w-2xl mx-auto relative">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              SIAP PESAN SEKARANG?
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mb-3 text-brand-dark/80 text-lg">
              Hubungi kami langsung via WhatsApp atau ikuti kami di Instagram untuk update terbaru
            </p>
            <p className="mb-8 text-brand-dark/60 text-sm">
              Order sebelum jam 3 sore untuk pengiriman hari ini
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-dark text-brand-cream font-semibold px-8 py-4 rounded-md hover:bg-brand-dark/90 transition-colors text-lg shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-brand-dark text-brand-dark font-semibold px-8 py-4 rounded-md hover:bg-brand-dark/10 transition-colors text-lg"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden border-t border-stone-200 shadow-lg pb-[env(safe-area-inset-bottom)]">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary text-white font-semibold text-sm"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary/80 text-white font-semibold text-sm"
        >
          <Instagram className="h-5 w-5" />
          Instagram
        </a>
      </div>
    </>
  );
}
