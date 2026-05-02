const sellingPoints = [
  { title: "No Pengawet", desc: "Bebas bahan pengawet dan pewarna buatan" },
  { title: "Fresh Setiap Hari", desc: "Diproduksi fresh sesuai pesanan" },
  { title: "Harga Terjangkau", desc: "Kualitas premium, harga ramah di kantong" },
  { title: "Pesan Mudah", desc: "Cukup chat WhatsApp, pesanan siap diantar" },
];

const testimonials = [
  {
    name: "Ibu Rina",
    text: "Enak banget! Anakku suka banget es krim sandwichnya.",
    loc: "Tj. Priok",
  },
  {
    name: "Kak Dian",
    text: "Browniesnya lembut, bahan organiknya kerasa beda.",
    loc: "Sunter",
  },
  {
    name: "Pak Hendra",
    text: "Harga bersaing, rasa top. Cocok buat oleh-oleh!",
    loc: "Kelapa Gading",
  },
];

export default function WhyUs() {
  return (
    <section id="kenapa-kami" className="py-16 sm:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Keunggulan
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-4">
            MENGAPA PILIH KAMI?
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {sellingPoints.map(({ title, desc }) => (
            <div key={title} className="bg-secondary rounded-lg p-5 text-center">
              <h3 className="font-bold text-primary mb-2 text-sm sm:text-base">{title}</h3>
              <p className="text-stone-500 text-xs sm:text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-lg p-8 sm:p-12 text-white text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-8">Kata Pelanggan</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials.map(({ name, text, loc }) => (
              <div key={name} className="bg-white/10 backdrop-blur rounded-lg p-6">
                <p className="text-white/90 text-sm mb-4 italic leading-relaxed">
                  &ldquo;{text}&rdquo;
                </p>
                <p className="font-semibold text-white">{name}</p>
                <p className="text-white/60 text-xs">{loc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
