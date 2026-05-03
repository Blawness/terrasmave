"use client";

import { Menu, X, MessageCircle, Instagram, ShoppingBag, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { WHATSAPP_URL, WHATSAPP_DISPLAY, INSTAGRAM_URL } from "../data/constants";

const navLinks = [
  { label: "Varian", href: "/produk" },
  { label: "Paket", href: "/paket" },
  { label: "Tentang", href: "/tentang" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-display text-2xl font-bold text-primary tracking-tight">
            Terrasmave
          </Link>

          <div className="hidden sm:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors uppercase tracking-wide relative ${
                  pathname === link.href ? "text-primary" : "text-stone-600 dark:text-stone-400 hover:text-primary dark:hover:text-primary"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-3">
            {mounted && (
              <button
                onClick={toggleDark}
                aria-label="Toggle dark mode"
                className="text-stone-500 dark:text-stone-400 hover:text-primary dark:hover:text-primary transition-colors p-1.5"
              >
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-red-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden md:inline">{WHATSAPP_DISPLAY}</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              <ShoppingBag className="h-4 w-4" />
              Pesan
            </a>
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            {mounted && (
              <button
                onClick={toggleDark}
                aria-label="Toggle dark mode"
                className="text-stone-500 dark:text-stone-400 hover:text-primary transition-colors p-1.5"
              >
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
            <button
              className="text-stone-600 dark:text-stone-400"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="sm:hidden pb-4 border-t border-border mt-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm font-medium uppercase tracking-wide ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-stone-600 dark:text-stone-400 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 mt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-md"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
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
