"use client";

import { useState } from "react";
import { faqData } from "../data/faq";
import FadeIn from "../components/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../data/constants";

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 sm:py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Informasi
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-4">
            PERTANYAAN UMUM
          </h1>
          <p className="text-stone-500 max-w-lg mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang produk dan pemesanan.
          </p>
        </FadeIn>

        <div className="space-y-3">
          {faqData.map((item, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-stone-800 pr-4 text-sm sm:text-base">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-primary" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-stone-500 text-sm leading-relaxed border-t border-stone-100 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-6">
            <p className="text-stone-600 mb-4 text-sm">
              Tidak menemukan jawaban yang kamu cari? Hubungi kami langsung!
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Tanya via WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
