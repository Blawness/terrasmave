import { Leaf, Heart, Award } from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "100% Bahan Organik",
    desc: "Kami memilih bahan alami tanpa pengawet dan pewarna buatan",
  },
  {
    icon: Heart,
    title: "Dibuat dengan Kasih",
    desc: "Setiap produk diracik dari dapur rumahan kami dengan penuh perhatian",
  },
  {
    icon: Award,
    title: "Kualitas Terjamin",
    desc: "Dipercaya oleh ratusan pelanggan setia di Jakarta Utara",
  },
];

export default function About() {
  return (
    <section id="tentang" className="py-16 sm:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=700&fit=crop"
                alt="Dapur Terrasmave"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:right-8 bg-primary text-white p-4 rounded-lg shadow-lg">
              <p className="font-display text-3xl font-bold">5+</p>
              <p className="text-sm">Tahun Pengalaman</p>
            </div>
          </div>

          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Tentang Kami
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight">
              CHOOSE YOUR
              <br />
              PERFECT TREAT
            </h2>
            <p className="text-stone-600 leading-relaxed mb-8">
              Terrasmave hadir dari dapur rumahan yang penuh kasih, menghadirkan camilan dan kudapan
              homemade berbahan organik pilihan. Setiap produk dibuat dengan tangan dan hati untuk
              keluarga Indonesia. Temukan cara favoritmu menikmati camilan kami!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <span className="text-primary font-semibold text-sm">Classic Box</span>
                <span className="text-stone-500 text-sm">
                  — Kemasan kotak klasik, sempurna untuk hadiah
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-semibold text-sm">Family Pack</span>
                <span className="text-stone-500 text-sm">
                  — Porsi besar untuk dinikmati bersama keluarga
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-semibold text-sm">Custom Order</span>
                <span className="text-stone-500 text-sm">
                  — Pesan sesuai keinginanmu, kami buatkan spesial
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center p-4 rounded-lg bg-secondary">
                  <Icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-stone-800 text-sm mb-1">{title}</h3>
                  <p className="text-stone-500 text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
