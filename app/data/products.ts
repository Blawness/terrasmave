export const products = [
  {
    id: 1,
    name: "2 Scoop",
    image: "/products/2-scoop.webp",
    desc: "2 scoop es krim + 2 topping pilihan + choco sauce + bread",
    price: "Rp 7.000",
    scoops: 2,
    toppings: 2,
    tag: "Hemat",
  },
  {
    id: 2,
    name: "3 Scoop",
    image: "/products/3-scoop.webp",
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
