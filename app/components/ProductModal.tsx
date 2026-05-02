"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ShoppingBag } from "lucide-react";
import { WHATSAPP_URL } from "../data/constants";
import type { Product } from "../data/products";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!product) return;

    previousFocusRef.current = document.activeElement as HTMLElement;
    modalRef.current?.focus();

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      previousFocusRef.current?.focus();
    };
  }, [product, onClose]);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            ref={modalRef}
            className="relative bg-white rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto outline-none"
            role="dialog"
            aria-modal="true"
            aria-label={product.name}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-stone-600 hover:text-stone-900 shadow transition-colors"
              aria-label="Tutup detail produk"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover rounded-t-lg"
              />
              {product.tag && (
                <span className="absolute top-4 left-4 bg-gradient-to-r from-primary to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  {product.tag}
                </span>
              )}
            </div>

            <div className="p-6">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-2">
                {product.name}
              </h2>
              <p className="text-stone-500 mb-4">{product.desc}</p>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold text-primary">{product.price}</span>
                <span className="text-stone-400 text-sm">/ pcs</span>
              </div>

              <a
                href={`${WHATSAPP_URL}?text=Halo, saya mau pesan ${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-red-700 transition-colors text-lg shadow-lg"
              >
                <ShoppingBag className="h-5 w-5" />
                Pesan via WhatsApp
              </a>

              <p className="text-center text-stone-400 text-xs mt-4 flex items-center justify-center gap-1">
                <MessageCircle className="h-3 w-3" />
                Respon cepat via WhatsApp
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
