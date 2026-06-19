"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "./FadeIn";
import { faq } from "../data/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-background py-16 sm:py-24" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4">
        <FadeIn direction="up">
          <h2
            id="faq-heading"
            className="font-display text-4xl sm:text-5xl font-bold text-primary text-center mb-4"
          >
            Pertanyaan Umum
          </h2>
          <p className="text-stone-500 text-center mb-12">
            Hal-hal yang sering ditanyakan tentang es krim sandwich Terrasmave.
          </p>
        </FadeIn>

        <div className="space-y-3">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={item.q} direction="up" delay={i * 0.05}>
                <div className="rounded-xl border border-primary/10 bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-primary">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-5 -mt-1 text-stone-600 leading-relaxed">{item.a}</p>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
