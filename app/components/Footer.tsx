"use client";

import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";
import FadeIn from "./FadeIn";
import { WHATSAPP_URL, WHATSAPP_DISPLAY, INSTAGRAM_URL } from "../data/constants";

const navLinks = [
  { label: "Varian", href: "/produk" },
  { label: "Paket & Harga", href: "/paket" },
  { label: "Tentang", href: "/tentang" },
  { label: "FAQ", href: "/faq" },
  { label: "Testimoni", href: "/testimoni" },
  { label: "Kontak", href: "/kontak" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white sm:pb-0 pb-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <FadeIn direction="up">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-display text-2xl font-bold mb-4">Terrasmave</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Es krim sandwich homemade berbahan organik, dibuat dengan cinta dari dapur kami
                untuk keluarga Indonesia.
              </p>
              <div className="flex gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <div>
              <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider">Navigasi</h4>
              <ul className="space-y-3 text-sm">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-white/70 hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div>
              <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider">Kontak</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>
                    Jl. Swasembada Barat XIX No.16
                    <br />
                    Tanjung Priok, Jakarta Utara
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>{WHATSAPP_DISPLAY}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>hello@terrasmave.com</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div>
              <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider">Ikuti Kami</h4>
              <p className="text-white/70 text-sm mb-4">
                Follow Instagram kami untuk update varian baru, promo eksklusif, dan
                behind-the-scenes dapur Terrasmave.
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-md px-4 py-3 text-sm font-semibold"
              >
                <Instagram className="h-5 w-5" />
                @terrasmave
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="border-t border-white/20 pt-6 text-center">
            <p className="text-white/50 text-xs">&copy; 2026 Terrasmave. All rights reserved.</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
