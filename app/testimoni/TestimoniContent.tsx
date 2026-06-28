"use client";

import { useState } from "react";
import { WHATSAPP_NUMBER } from "../data/constants";
import { MessageCircle, Star } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";

const ratings = [1, 2, 3, 4, 5];

export default function TestimoniContent() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");

  const whatsappText = `Halo Terrasmave! Saya ingin berbagi testimoni:%0A%0ANama: ${encodeURIComponent(name || "(anonim)")}%0ARating: ${rating}/5%0ATestimoni: ${encodeURIComponent(message)}`;

  return (
    <section className="relative py-16 sm:py-20 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <FadeIn className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Bagikan Pengalamanmu
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-4">
            TESTIMONI
          </h1>
          <p className="text-stone-500 max-w-lg mx-auto">
            Kami senang mendengar pengalaman kamu menikmati es krim scoop Terrasmave.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 sm:p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Nama Kamu</label>
                <input
                  type="text"
                  placeholder="Masukkan namamu (opsional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Rating</label>
                <div className="flex gap-1.5">
                  {ratings.map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-1 transition-transform hover:scale-110"
                      aria-label={`Rating ${star} bintang`}
                    >
                      <Star
                        className={`h-7 w-7 ${
                          star <= rating ? "text-amber-400 fill-amber-400" : "text-stone-300"
                        } transition-colors`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Pesan Testimoni
                </label>
                <textarea
                  placeholder="Ceritakan pengalamanmu menikmati es krim scoop Terrasmave..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                />
              </div>

              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3.5 rounded-lg hover:bg-brand-pink hover:text-brand-dark transition-colors w-full shadow-lg shadow-primary/20"
              >
                <MessageCircle className="h-5 w-5" />
                Kirim Testimoni via WhatsApp
              </motion.a>

              <p className="text-stone-400 text-xs text-center">
                Testimoni akan dikirim langsung ke WhatsApp kami. Dengan mengirimkan, kamu
                menyetujui testimoni-mu ditampilkan di halaman kami.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
