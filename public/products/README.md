# Foto Produk Terrasmave

Foto produk dipakai website dalam format **.webp** (paling ringan & cepat).

| File              | Dipakai untuk            | Ukuran          |
| ----------------- | ------------------------ | --------------- |
| `2-scoop.webp`    | Kartu varian **2 Scoop** | 1000×1000 (1:1) |
| `3-scoop.webp`    | Kartu varian **3 Scoop** | 1000×1000 (1:1) |

## Cara ganti / tambah foto

1. Upload foto baru ke folder ini (boleh .png/.jpg dulu).
2. Minta convert ke WebP, atau jalankan sendiri (butuh `sharp`, sudah tersedia):

   ```bash
   node -e '
   const sharp = require("./node_modules/.pnpm/sharp@0.34.5/node_modules/sharp");
   sharp("public/products/NAMA-ASLI.png")
     .resize(1000, 1000, { fit: "cover", position: "centre" })
     .webp({ quality: 80 })
     .toFile("public/products/2-scoop.webp");
   '
   ```

3. Hapus file asli (.png/.jpg) biar repo tetap ringan.
4. Refresh `localhost:3000` — foto langsung muncul.

Catatan: foto di-crop **kotak 1:1** (center) supaya pas di kartu produk. File di
`public/` otomatis diakses dari root, contoh `public/products/2-scoop.webp` →
`/products/2-scoop.webp`.
