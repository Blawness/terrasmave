// Ulasan asli pelanggan dari Google Reviews.
// Untuk update: cukup edit `testimonials.json` (tambah/ubah/hapus entri).
// Dipakai untuk section UI (homepage + Kenapa Kami) sekaligus Review +
// AggregateRating structured data (SEO). Rating dihitung otomatis dari data.
import data from "./testimonials.json";

export type Testimonial = {
  name: string;
  rating: number;
  text: string;
  loc?: string;
};

export const testimonials: Testimonial[] = data;

const average = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

export const aggregateRating = {
  ratingValue: Number(average.toFixed(1)),
  reviewCount: testimonials.length,
  bestRating: 5,
};
