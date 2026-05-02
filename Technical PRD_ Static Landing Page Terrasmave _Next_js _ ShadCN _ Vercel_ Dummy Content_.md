# Technical PRD: Static Landing Page Terrasmave (Next.js + ShadCN + Vercel, Dummy Content)

### TL;DR

Technical PRD untuk pembuatan landing page statis Terrasmave. Implementasi menggunakan Next.js (App Router), styling dengan ShadCN UI (Tailwind), deploy ke Vercel via domain default. Semua konten dan visual awal berupa dummy/placeholder, tanpa backend atau form. Dokumen ini siap jadi referensi langsung untuk engineer atau AI code generator.

---

## Goals

### Business Goals

* Landing page online dalam 2 hari
* Info inti usaha & CTA WA/IG langsung visible
* Siap diupdate bertahap (konten dummy → real asset)

### User Goals

* Mudah akses info bisnis, menu singkat, dan kontak owner

### Non-Goals

* Tidak ada form kontak, tidak ada penyimpanan data, tidak SSR

---

## Functional Requirements

* **Static 1-page Landing Page**
  * Full statis (`next export`-compatible: no SSR, no dynamic fetch)
  * Sections utama:
    * Hero Section: logo & nama Terrasmave, alamat (Jl. Swasembada Barat XIX No.16, Tj. Priok), tombol WhatsApp (081281818892), tombol Instagram
    * About Section: cerita singkat/USP dummy, highlight homemade & bahan organik
    * Produk Section: beberapa produk/jasa dummy, model grid card sederhana
    * CTA Bar: WhatsApp/link IG selalu visible di bawah (fixed/floating on mobile)
    * Mengapa Pilih Kami: selling point, dummy testimoni/USP
    * Footer: info usaha & link navigasi
* **Styling**
  * Menggunakan ShadCN UI components
  * Konfigurasi Tailwind (bawaan dari ShadCN setup), warna lembut
  * Placeholder assets: gunakan public/fake assets (misal undraw/placeholder.com)
* **Integrasi**
  * WhatsApp deep link: `https://wa.me/6281281818892`
  * Instagram deep link: `https://instagram.com/namadummy`
  * Google Analytics (script inline/head)
* **Performance**
  * Responsive mobile-first
  * No blocking assets, load <2s di 3G/4G

---

## Technical Spec

### Stack & Tools

* Next.js (App Router, TypeScript enabled)
* shadcn/ui (Tailwind CSS already configured)
* Vercel deploy (domain: \*.vercel.app)

### Folder & File Structure (Sample)

```txt
/ (root)
├─ app/
│  ├─ page.tsx           — Landing page utama
│  ├─ components/
│  │    ├─ Hero.tsx
│  │    ├─ About.tsx
│  │    ├─ Products.tsx
│  │    ├─ WhyUs.tsx
│  │    ├─ CTA.tsx
│  │    └─ Footer.tsx
│  └─ data/
│       └─ products.ts    — Dummy array produk
├─ public/
│  └─ images/ (dummy pic/logo)
├─ styles/
│  └─ globals.css
├─ tailwind.config.js
├─ shadcn.json
├─ next.config.js
├─ package.json
└─ README.md
```

### Component Stub (contoh kode, bisa direvisi mudah):

app/components/Hero.tsx

```tsx
import { Button } from "@/components/ui/button";
export default function Hero() {
  return (
    <section className="py-16 text-center">
      <img src="/images/logo.png" alt="Terrasmave Logo" className="mx-auto mb-4 w-28 h-28" />
      <h1 className="text-3xl font-bold mb-2">Terrasmave</h1>
      <p className="mb-2">Jl. Swasembada Barat XIX No.16, Tj. Priok</p>
      <div className="flex gap-3 justify-center">
        <Button asChild><a href="https://wa.me/6281281818892" target="\_blank">WhatsApp</a></Button>
        <Button variant="outline" asChild><a href="https://instagram.com/namadummy" target="\_blank">Instagram</a></Button>
      </div>
    </section>
  );
}
```

app/components/Products.tsx (snippet)

```tsx
import { products } from "../data/products";
export default function Products() {
  return (
    <section className="py-12">
      <h2 className="text-xl font-bold mb-4">Produk</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {products.map((item) => (
          <div key={item.id} className="bg-white shadow rounded p-4 text-center">
            <img src={item.image} alt={item.name} className="w-16 h-16 mx-auto mb-2" />
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

app/data/products.ts (dummy)

```ts
export const products = \[
  { id: 1, name: "Es Krim Sandwich", image: "/images/dummy1.png" },
  { id: 2, name: "Kue Rumahan", image: "/images/dummy2.png" },
  { id: 3, name: "Camilan Sehat", image: "/images/dummy3.png" },
\];
```

### Deployment Step Summary

1. Init Next.js project: `npx create-next-app@latest terrasmave-landing --ts --app`
2. Tambah ShadCN UI: `npx shadcn-ui@latest init`
3. Tambahkan komponen (Hero, About, Products, CTA, Footer, WhyUs)
4. Push ke github/git remote (optional)
5. Deploy to Vercel: `vercel` CLI atau web GUI, gunakan domain default
6. Test mobile/responsive, pastikan semua link CTA & dummy tampil

### Analytics

* Tambahkan Google Analytics 4 script di `/app/layout.tsx` (cek docs terbaru GA)
* Tidak ada script tracking lanjutan/advance

### Note

* Konten statis, dummy bisa diganti per-bagian tanpa deploy ulang (jika setting revalidate, opsional)
* Jika ingin update real content/foto, cukup replace file di `/public/images/` + edit data/komponen
* Semua instruksi bisa diikuti langsung engineer/code-gen AI

---

## Milestones

* Hari 1: Setup project, komponen utama, dummy content, deploy initial
* Hari 2: Tes mobile, revisi minor, setup analytics

Team: 1 orang (owner/dev)

---