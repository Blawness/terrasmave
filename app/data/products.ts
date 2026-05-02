export const products = [
  {
    id: 1,
    name: "Es Krim Sandwich Cokelat",
    image: "https://images.unsplash.com/photo-1646321155376-8bd75e03469b?w=400&h=400&fit=crop",
    desc: "Cokelat premium, creamy dan lembut",
    price: "Rp 15.000",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Es Krim Sandwich Vanilla",
    image: "https://images.unsplash.com/photo-1617938547045-aafa6aadcc61?w=400&h=400&fit=crop",
    desc: "Vanilla klasik, manis dan segar",
    price: "Rp 15.000",
    tag: "Favorit",
  },
  {
    id: 3,
    name: "Es Krim Sandwich Strawberry",
    image: "https://images.unsplash.com/photo-1542762114-de40b65f93e8?w=400&h=400&fit=crop",
    desc: "Strawberry asli, asam manis segar",
    price: "Rp 15.000",
    tag: "",
  },
  {
    id: 4,
    name: "Es Krim Sandwich Matcha",
    image: "https://images.unsplash.com/photo-1558862417-37e3640112d0?w=400&h=400&fit=crop",
    desc: "Matcha Jepang, aroma khas dan lembut",
    price: "Rp 15.000",
    tag: "Premium",
  },
  {
    id: 5,
    name: "Es Krim Sandwich Red Velvet",
    image: "https://images.unsplash.com/photo-1608772978450-f0f377be5178?w=400&h=400&fit=crop",
    desc: "Red velvet lembut, cream cheese filling",
    price: "Rp 15.000",
    tag: "",
  },
  {
    id: 6,
    name: "Es Krim Sandwich Cookies & Cream",
    image: "https://images.unsplash.com/photo-1642646669923-074199898e3c?w=400&h=400&fit=crop",
    desc: "Cookies renyah, krim vanilla premium",
    price: "Rp 15.000",
    tag: "New",
  },
];

export type Product = (typeof products)[number];
