import { products } from "../data/products";

export default function Products() {
  return (
    <section id="produk" className="py-16 sm:py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Menu Kami
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-4">
            PILIH CAMILAN FAVORITMU
          </h2>
          <p className="text-stone-500 max-w-lg mx-auto">
            Setiap produk dibuat fresh dengan bahan organik pilihan. Nikmat, sehat, dan penuh cinta.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.tag && (
                  <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-stone-800 text-sm sm:text-base mb-1">
                  {item.name}
                </h3>
                <p className="text-stone-400 text-xs mb-3">{item.desc}</p>
                <p className="text-primary font-bold text-lg">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/6281281818892"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-3 rounded-md hover:bg-primary hover:text-white transition-colors"
          >
            Lihat Semua Rasa
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
