"use client";

import { packages } from "../data/packages";
import { WHATSAPP_URL } from "../data/constants";
import { MessageCircle, Check, ChevronRight } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";

export default function PaketContent() {
  return (
    <section className="relative py-16 sm:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Promo Spesial
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-4">
            PAKET & Harga
          </h1>
          <p className="text-stone-500 max-w-lg mx-auto">
            Beli lebih banyak, hemat lebih besar. Semua paket bisa mix & match varian rasa.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <FadeIn key={pkg.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-stone-100 relative"
              >
                {pkg.tag && (
                  <span className="absolute top-3 left-3 z-10 bg-gradient-to-r from-primary to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    {pkg.tag}
                  </span>
                )}

                <div className="relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm font-semibold">{pkg.items} pcs</p>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-stone-800 mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-stone-400 text-sm mb-4">{pkg.description}</p>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">
                      Rp {pkg.price.toLocaleString("id-ID")}
                    </span>
                    <span className="text-sm text-stone-400 line-through">
                      Rp {pkg.originalPrice.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full inline-flex items-center gap-1 mb-5">
                    <Check className="h-3 w-3" />
                    Hemat Rp {pkg.savings.toLocaleString("id-ID")}
                  </div>

                  <a
                    href={`${WHATSAPP_URL}?text=Halo, saya mau pesan ${encodeURIComponent(pkg.name)} (${pkg.items} pcs)`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition-colors w-full mt-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Pesan Sekarang
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-12 text-center">
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 max-w-xl mx-auto">
            <p className="text-stone-600 text-sm">
              Ingin pesanan dalam jumlah besar untuk acara spesial?{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold underline hover:no-underline"
              >
                Hubungi kami
              </a>{" "}
              untuk custom paket sesuai kebutuhanmu.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
