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
    <section id="shop" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-heading font-bold text-5xl sm:text-6xl uppercase text-white">
            Shop
          </h2>
          <Link
            href="#"
            className="hidden sm:block text-gray-500 hover:text-white font-heading text-xs tracking-widest uppercase transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800">
          {products.map((product) => (
            <Link
              key={product.name}
              href="#"
              className="bg-[#0a0a0a] group block"
            >
              {/* Product image */}
              <div className="relative overflow-hidden aspect-square bg-[#111]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                {product.tag && (
                  <div className="absolute top-3 left-3 bg-[#c41e3a] text-white font-heading text-[10px] tracking-widest uppercase px-2 py-1">
                    {product.tag}
                  </div>
                )}
              </div>

              {/* Product info */}
              <div className="p-4">
                <h3 className="font-heading font-bold text-sm uppercase text-white leading-tight mb-2">
                  {product.name}
                </h3>
                <div className="text-gray-400 font-heading text-sm">
                  {product.price}
                </div>
                <div className="mt-3">
                  <span className="inline-block bg-[#c41e3a] hover:bg-[#a01830] text-white font-heading text-[10px] tracking-widest uppercase px-4 py-2 transition-colors">
                    Select Options
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
