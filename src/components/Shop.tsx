"use client";
import Link from "next/link";

const products = [
  {
    name: "EMX Training T-Shirt — Black",
    price: "€45.00",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
    tag: null,
  },
  {
    name: "EMX Hoodie — Black",
    price: "€75.00",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
    tag: null,
  },
  {
    name: "EMX Training Vest — Black",
    price: "€40.00",
    image: "https://images.unsplash.com/photo-1503341504253-dff4f9fb0c84?w=500&q=80",
    tag: "New",
  },
  {
    name: "EMX Cap — Black",
    price: "€25.00",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=500&q=80",
    tag: null,
  },
];

export default function Shop() {
  return (
    <section id="shop" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 flex items-end justify-between">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl uppercase text-white">
            Shop
          </h2>
          <Link
            href="#"
            className="hidden sm:block text-gray-600 hover:text-white font-heading text-xs tracking-[0.2em] uppercase transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {products.map((product) => (
            <Link
              key={product.name}
              href="#"
              className="group block bg-[#111] hover:bg-[#161616] transition-colors duration-300"
            >
              {/* Product image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                {product.tag && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#c41e3a] text-white font-heading text-[9px] tracking-[0.2em] uppercase px-2.5 py-1">
                      {product.tag}
                    </span>
                  </div>
                )}
              </div>

              {/* Product info */}
              <div className="p-4 sm:p-5">
                <h3 className="font-heading font-bold text-xs sm:text-sm uppercase text-white leading-tight mb-2 min-h-[2.5em]">
                  {product.name}
                </h3>
                <div className="text-gray-500 font-heading text-xs sm:text-sm mb-3 sm:mb-4">
                  {product.price}
                </div>
                <span className="inline-block bg-[#c41e3a] hover:bg-[#a01830] text-white font-heading text-[9px] sm:text-[10px] tracking-[0.15em] uppercase px-3 sm:px-4 py-2 transition-colors">
                  Select Options
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
