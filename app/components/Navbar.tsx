"use client";

import { Menu, X, MessageCircle, Instagram, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Varian", href: "#produk" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kenapa Kami", href: "#kenapa-kami" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "border-b border-border"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-display text-2xl font-bold text-primary tracking-tight">
            Terrasmave
          </a>

          <div className="hidden sm:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors uppercase tracking-wide relative ${
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : "text-stone-600 hover:text-primary"
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </a>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://wa.me/6281281818892"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-red-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden md:inline">+62 812-8181-8892</span>
            </a>
            <a
              href="https://instagram.com/namadummy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/6281281818892"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              <ShoppingBag className="h-4 w-4" />
              Pesan
            </a>
          </div>

          <button
            className="sm:hidden text-stone-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="sm:hidden pb-4 border-t border-border mt-2 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm font-medium uppercase tracking-wide ${
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : "text-stone-600 hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 mt-4">
              <a
                href="https://wa.me/6281281818892"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-md"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/namadummy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-primary text-primary text-sm font-semibold px-4 py-2 rounded-md"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
