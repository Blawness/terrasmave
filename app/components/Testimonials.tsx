"use client";

import { Star } from "lucide-react";
import FadeIn from "./FadeIn";
import { testimonials, aggregateRating } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-stone-50 py-16 sm:py-24" aria-labelledby="testi-heading">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn direction="up">
          <h2
            id="testi-heading"
            className="font-display text-4xl sm:text-5xl font-bold text-primary text-center mb-4"
          >
            Kata Pelanggan
          </h2>
          <p className="text-stone-500 text-center mb-2">
            Rating {aggregateRating.ratingValue} dari {aggregateRating.reviewCount} ulasan
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} direction="up" delay={i * 0.1}>
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
                <figcaption className="mt-4 font-semibold text-primary">{t.name}</figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
