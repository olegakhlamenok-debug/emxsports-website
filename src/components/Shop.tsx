"use client";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const products = [
  {
    name: "EMX Training Shorts — Black",
    price: "€40.00",
    image: `${basePath}/images/shop/shorts.png`,
    tag: "New",
  },
  {
    name: "EMX T-Shirt — Black",
    price: "€45.00",
    image: `${basePath}/images/shop/tshirt.png`,
    tag: null,
  },
  {
    name: "EMX Hoodie — Black",
    price: "€75.00",
    image: `${basePath}/images/shop/hoodie.png`,
    tag: null,
  },
  {
    name: "EMX Cap — Black",
    price: "€25.00",
    image: `${basePath}/images/shop/cap.png`,
    tag: null,
  },
];

export default function Shop() {
  return (
    <section id="shop" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl uppercase text-white">
            Shop
          </h2>
          <Link
            href="#"
            className="hidden sm:inline-block text-gray-600 hover:text-white font-heading text-xs tracking-[0.2em] uppercase transition-colors mt-4"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {products.map((product) => (
            <Link
              key={product.name}
              href="#"
              className="group block bg-[#111] hover:bg-[#161616] transition-all duration-500 hover:shadow-[0_0_30px_rgba(196,30,58,0.15)] hover:-translate-y-2"
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
