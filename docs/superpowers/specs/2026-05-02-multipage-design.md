# Multi-Page Terrasmave — Design Spec

**Date:** 2026-05-02
**Status:** Approved for implementation

---

## Overview

Convert single-page scroll landing into multi-page static site with 5 pages: Home, Produk, Tentang, Kenapa Kami, Kontak.

---

## Page Structure

```
app/
  layout.tsx              — Root layout (Navbar + Footer + ScrollToTop wrapper)
  page.tsx                — Home (Hero + Products preview + CTA)
  produk/
    page.tsx              — Product listing + modal detail
  tentang/
    page.tsx              — About page
  kenapa-kami/
    page.tsx              — WhyUs page
  kontak/
    page.tsx              — Contact page
```

---

## Page Details

### Home (`/`)
- Hero section (full, same as current)
- Products preview (4 produk, limit dari Products component)
- CTA singkat
- Hapus: About, WhyUs, SectionDivider

### Produk (`/produk`)
- Full 6-product listing grid
- Klik produk → modal detail (AnimatePresence)
- Modal: gambar besar, nama, deskripsi, harga, tag, tombol pesan WhatsApp
- Close: backdrop click, Escape key, close button

### Tentang (`/tentang`)
- Parallax image (About component)
- "5+ Tahun Pengalaman" badge
- Description paragraph
- Pack options (Single Pack, Family Box, Custom Order)
- 3 highlight cards

### Kenapa Kami (`/kenapa-kami`)
- 4 selling point cards
- Testimonial carousel (arrows, dots, drag, auto-play, pause on hover)

### Kontak (`/kontak`)
- Info kontak: alamat, telepon, email
- Google Maps embed placeholder
- CTA button ke WhatsApp

---

## Component Changes

### Navbar
- Ganti `navLinks` href: `#anchor` → `/route`
- Active state: `usePathname()` dari `next/navigation` (bukan IntersectionObserver)
- Hapus scroll observer logic
- Tetap `"use client"`

### Footer
- Ganti `navLinks` href: `#anchor` → `/route`

### Layout
- Pindahkan Navbar, Footer, ScrollToTop ke `app/layout.tsx` sebagai wrapper
- Semua halaman inherit shared layout

### Products
- Tambah `limit` prop untuk preview mode (Home tampilkan 4 produk)
- Full listing di `/produk` tampilkan semua 6

### ProductModal (new)
- AnimatePresence wrapper
- Backdrop blur overlay
- Close on: backdrop click, Escape, X button
- Display: image, name, desc, price, tag, WhatsApp CTA

---

## Technical Constraints

- `output: "export"` — semua halaman statically generated
- No SSR, no API routes, no server components needing runtime
- Client components tetap `"use client"` (Navbar, modal, carousel)
- Scroll behavior: setiap halaman start dari top
- Metadata per halaman via `export const metadata`

---

## Execution Order

1. Struktur folder + page files (kosong)
2. Navbar (route-based + usePathname)
3. Footer (route-based)
4. Layout (wrapper Navbar/Footer/ScrollToTop)
5. Home (simplify)
6. ProductModal component
7. /produk page
8. /tentang page
9. /kenapa-kami page
10. /kontak page
11. Metadata per halaman
12. Lint + format + build test
