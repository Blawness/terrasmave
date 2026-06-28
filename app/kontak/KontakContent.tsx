"use client";

import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from "../data/constants";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    lines: ["Jl. Swasembada Barat XIX No.16", "Tanjung Priok, Jakarta Utara"],
  },
  {
    icon: Phone,
    title: "Telepon",
    lines: [WHATSAPP_DISPLAY],
  },
];

export default function KontakContent() {
  return (
    <section className="relative py-16 sm:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-12">
          <p className="inline-block bg-brand-pink/30 text-brand-dark font-semibold text-sm uppercase tracking-widest mb-2 px-3 py-1 rounded-full">
            Hubungi Kami
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-4">
            KONTAK{" "}
            <span className="box-decoration-clone bg-[linear-gradient(transparent_55%,#f798ab_55%)] px-1">
              KAMI
            </span>
          </h1>
          <p className="text-stone-500 max-w-lg mx-auto">
            Pesan mudah via WhatsApp atau kunjungi kami langsung. Dapur kami selalu siap melayani.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <FadeIn direction="right" delay={0.1}>
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="font-display text-2xl font-bold text-primary mb-6">Info Kontak</h2>
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 text-sm mb-1">{title}</h3>
                      {lines.map((line, i) => (
                        <p key={i} className="text-stone-500 text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-800 text-sm mb-1">Jam Operasional</h3>
                    <p className="text-stone-500 text-sm">
                      Senin – Sabtu: 09.00 – 17.00 WIB
                      <br />
                      Minggu &amp; Hari Libur: Tutup (pesanan tetap diterima via WhatsApp)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="bg-stone-200 rounded-lg overflow-hidden h-full min-h-[320px]">
              <iframe
                title="Lokasi Terrasmave di Google Maps"
                src="https://www.google.com/maps?q=Terrasmave,+Jl.+Swasembada+Barat+XIX+No.16,+Tanjung+Priok,+Jakarta+Utara&output=embed"
                className="w-full h-full min-h-[320px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="bg-brand-pink rounded-lg p-8 sm:p-12 text-brand-dark text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
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
            </div>
            <div className="relative">
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                Pesan Sekarang via WhatsApp
              </h2>
              <p className="text-brand-dark/80 mb-8 max-w-md mx-auto">
                Cukup klik tombol di bawah, ceritakan varian yang kamu mau, dan pesananmu akan kami
                siapkan dengan penuh cinta.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-dark text-brand-cream font-semibold px-8 py-4 rounded-md hover:bg-brand-dark/90 transition-colors text-lg shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Chat WhatsApp
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
