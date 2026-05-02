"use client";

import { MessageCircle, Instagram } from "lucide-react";
import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <>
      <section className="relative py-16 sm:py-20 px-4 bg-primary text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-24 h-24 bg-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full" />
        </div>
        <div className="max-w-2xl mx-auto relative">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              SIAP PESAN SEKARANG?
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mb-8 text-white/80 text-lg">
              Hubungi kami langsung via WhatsApp atau ikuti kami di Instagram untuk update terbaru
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://wa.me/6281281818892"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-md hover:bg-stone-100 transition-colors text-lg"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/namadummy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white/10 transition-colors text-lg"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden border-t border-stone-200 shadow-lg">
        <a
          href="https://wa.me/6281281818892"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary text-white font-semibold text-sm"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
        <a
          href="https://instagram.com/namadummy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-pink-500 text-white font-semibold text-sm"
        >
          <Instagram className="h-5 w-5" />
          Instagram
        </a>
      </div>
    </>
  );
}
