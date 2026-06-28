export const products = [
  {
    id: 1,
    name: "2 Scoop",
    image: "https://images.unsplash.com/photo-1617938547045-aafa6aadcc61?w=400&h=400&fit=crop",
    desc: "2 scoop es krim + 2 topping pilihan + choco sauce + bread",
    price: "Rp 7.000",
    scoops: 2,
    toppings: 2,
    tag: "Hemat",
  },
  {
    id: 2,
    name: "3 Scoop",
    image: "https://images.unsplash.com/photo-1646321155376-8bd75e03469b?w=400&h=400&fit=crop",
    desc: "3 scoop es krim + 3 topping pilihan + choco sauce + bread",
    price: "Rp 10.000",
    scoops: 3,
    toppings: 3,
    tag: "Best Seller",
  },
];

/** Pilihan rasa es krim — berlaku untuk semua varian. */
export const flavors = ["Vanilla", "Chocolate", "Strawberry"];

/** Pilihan topping — berlaku untuk semua varian. */
export const toppings = ["Oreo", "Choco Crunch", "Strawberry Crunch", "Jelly"];

export type Product = (typeof products)[number];
