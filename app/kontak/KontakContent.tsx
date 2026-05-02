"use client";

import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    lines: ["Jl. Swasembada Barat XIX No.16", "Tanjung Priok, Jakarta Utara"],
  },
  {
    icon: Phone,
    title: "Telepon",
    lines: ["0812-8181-8892"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["hello@terrasmave.com"],
  },
];

export default function KontakContent() {
  return (
    <section className="relative py-16 sm:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Hubungi Kami
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-4">
            KONTAK KAMI
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
            <div className="bg-stone-200 rounded-lg overflow-hidden h-full min-h-[320px] flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-10 w-10 text-stone-400 mx-auto mb-4" />
                <p className="text-stone-500 text-sm">Google Maps akan ditampilkan di sini</p>
                <p className="text-stone-400 text-xs mt-2">
                  Jl. Swasembada Barat XIX No.16, Tanjung Priok
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="bg-primary rounded-lg p-8 sm:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
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
              <p className="text-white/80 mb-8 max-w-md mx-auto">
                Cukup klik tombol di bawah, ceritakan varian yang kamu mau, dan pesananmu akan kami
                siapkan dengan penuh cinta.
              </p>
              <a
                href="https://wa.me/6281281818892"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-md hover:bg-stone-100 transition-colors text-lg shadow-lg"
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
