// Placeholder testimoni — ganti dengan ulasan asli pelanggan.
// Dipakai untuk section UI sekaligus Review + AggregateRating structured data.
export const testimonials = [
  {
    name: "Rina W.",
    rating: 5,
    text: "Es krim scoop-nya enak banget! Bisa pilih 3 rasa sekaligus dan toppingnya melimpah. Choco sauce-nya juara.",
  },
  {
    name: "Dimas A.",
    rating: 5,
    text: "Pesan via WhatsApp gampang, datangnya masih fresh. Anak-anak suka karena bisa custom rasa sendiri.",
  },
  {
    name: "Putri L.",
    rating: 4,
    text: "Rasa organiknya kerasa, tidak terlalu manis. Favoritku kombinasi chocolate, strawberry, dan vanilla.",
  },
] as const;

export const aggregateRating = {
  ratingValue: 4.8,
  reviewCount: testimonials.length,
  bestRating: 5,
};
