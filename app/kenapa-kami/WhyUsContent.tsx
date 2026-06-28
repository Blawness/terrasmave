"use client";

import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, MessageCircle } from "lucide-react";
import { useCarousel } from "../hooks/useCarousel";

const DRAG_ELASTICITY = 0.3;

const sellingPoints = [
  { title: "No Pengawet", desc: "Bebas bahan pengawet dan pewarna buatan" },
  { title: "Fresh Setiap Hari", desc: "Dibuat fresh sesuai pesanan" },
  { title: "Bahan Organik", desc: "Cokelat, vanilla, dan cream premium pilihan" },
  { title: "Pesan Mudah", desc: "Cukup chat WhatsApp, pesanan siap diantar" },
];

const testimonials = [
  {
    name: "Ibu Rina",
    text: "Enak banget! Anakku suka banget yang rasa cokelat, creamy dan nggak terlalu manis.",
    loc: "Tj. Priok",
  },
  {
    name: "Kak Dian",
    text: "Strawberry-nya seger, toppingnya juga renyah. Beda banget sama yang di supermarket.",
    loc: "Sunter",
  },
  {
    name: "Pak Hendra",
    text: "Sering pesan buat acara keluarga. Semua suka, harga juga terjangkau!",
    loc: "Kelapa Gading",
  },
];

export default function WhyUsContent() {
  const { active, goTo, goNext, goPrev, setIsPaused, handleDragEnd } = useCarousel({
    itemCount: testimonials.length,
  });

  return (
    <section className="relative py-16 sm:py-20 px-4 bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <FadeIn className="text-center mb-12">
          <p className="inline-block bg-brand-pink/30 text-brand-dark font-semibold text-sm uppercase tracking-widest mb-2 px-3 py-1 rounded-full">
            Keunggulan
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-4">
            MENGAPA PILIH{" "}
            <span className="box-decoration-clone bg-[linear-gradient(transparent_55%,#f798ab_55%)] px-1">
              KAMI
            </span>
            ?
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {sellingPoints.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-background rounded-lg p-5 text-center shadow-sm"
              >
                <h3 className="font-bold text-primary mb-2 text-sm sm:text-base">{title}</h3>
                <p className="text-stone-500 text-xs sm:text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div
            className="bg-primary rounded-lg p-8 sm:p-12 text-white text-center relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-8 relative">
              Kata Pelanggan
            </h3>

            <div className="relative max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={goPrev}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Testimonial sebelumnya"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex-1 overflow-hidden">
                  <motion.div
                    className="flex"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={DRAG_ELASTICITY}
                    onDragEnd={handleDragEnd}
                    animate={{ x: `-${active * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {testimonials.map(({ name, text, loc }) => (
                      <div key={name} className="w-full flex-shrink-0 px-2">
                        <div className="bg-white/10 backdrop-blur rounded-lg p-6 sm:p-8">
                          <Quote className="h-8 w-8 text-white/30 mx-auto mb-4" />
                          <p className="text-white/90 text-base sm:text-lg mb-6 italic leading-relaxed">
                            &ldquo;{text}&rdquo;
                          </p>
                          <p className="font-semibold text-white text-lg">{name}</p>
                          <p className="text-white/60 text-sm">{loc}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                <button
                  onClick={goNext}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Testimonial berikutnya"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <a
                href="/testimoni"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors mt-6"
              >
                <MessageCircle className="h-4 w-4" />
                Bagikan Pengalamanmu
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
