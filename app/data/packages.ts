export const packages = [
  {
    id: 1,
    name: "Paket Hemat",
    description: "Cocok untuk cemilan sendiri atau berdua",
    image:
      "https://images.unsplash.com/photo-1646321155376-8bd75e03469b?w=400&h=400&fit=crop",
    items: 6,
    originalPrice: 90000,
    price: 75000,
    savings: 15000,
    tag: "Terlaris",
  },
  {
    id: 2,
    name: "Paket Keluarga",
    description: "Untuk kumpul keluarga atau teman",
    image:
      "https://images.unsplash.com/photo-1617938547045-aafa6aadcc61?w=400&h=400&fit=crop",
    items: 12,
    originalPrice: 180000,
    price: 135000,
    savings: 45000,
    tag: "Hemat",
  },
  {
    id: 3,
    name: "Paket Pesta",
    description: "Cocok untuk arisan, ulang tahun, dan acara besar",
    image:
      "https://images.unsplash.com/photo-1558862417-37e3640112d0?w=400&h=400&fit=crop",
    items: 24,
    originalPrice: 360000,
    price: 250000,
    savings: 110000,
    tag: "Best Value",
  },
  {
    id: 4,
    name: "Paket Katering",
    description: "Untuk kantor, rapat, atau event komersial",
    image:
      "https://images.unsplash.com/photo-1608772978450-f0f377be5178?w=400&h=400&fit=crop",
    items: 50,
    originalPrice: 750000,
    price: 500000,
    savings: 250000,
    tag: "Kustom",
  },
];

export type Package = (typeof packages)[number];
