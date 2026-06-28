"use client";

import { Star } from "lucide-react";
import FadeIn from "./FadeIn";
import { testimonials, aggregateRating } from "../data/testimonials";

export default function Testimonials() {
  // Duplikat list supaya loop horizontal-nya mulus (translateX -50%).
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="bg-stone-50 py-16 sm:py-24 overflow-hidden" aria-labelledby="testi-heading">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn direction="up">
          <h2
            id="testi-heading"
            className="font-display text-4xl sm:text-5xl font-bold text-primary text-center mb-4"
          >
            Kata Pelanggan
          </h2>
          <p className="text-stone-500 text-center mb-2">
            Rating {aggregateRating.ratingValue} dari {aggregateRating.reviewCount} ulasan Google
          </p>
          <div className="flex justify-center gap-1 mb-12" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.round(aggregateRating.ratingValue)
                    ? "fill-amber-400 text-amber-400"
                    : "text-stone-300"
                }`}
              />
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Marquee: full-bleed, fade di tepi kiri/kanan */}
      <div
        className="marquee-pause relative"
        style={
          {
            "--marquee-duration": "45s",
            maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          } as React.CSSProperties
        }
      >
        <ul className="animate-marquee-x flex w-max gap-6 px-3">
          {loop.map((t, i) => (
            <li
              key={i}
              className="w-[280px] sm:w-[340px] shrink-0"
              aria-hidden={i >= testimonials.length}
            >
              <figure className="h-full rounded-2xl bg-white border border-primary/10 p-6 flex flex-col">
                <div className="flex gap-1 mb-3" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`h-4 w-4 ${
                        s < t.rating ? "fill-amber-400 text-amber-400" : "text-stone-300"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="text-stone-600 leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4">
                  <span className="block font-semibold text-primary">{t.name}</span>
                  {t.loc && <span className="block text-stone-400 text-xs mt-0.5">{t.loc}</span>}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
