"use client";
import Link from "next/link";
import { articles } from "@/data/articles";

export default function Articles() {
  return (
    <section id="articles" className="py-20 sm:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl uppercase text-white mb-10 sm:mb-14 text-center">
          News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}/`}
              className="group block bg-[#111] hover:bg-[#161616] transition-all duration-500 hover:shadow-[0_0_40px_rgba(196,30,58,0.12)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="text-gray-600 font-heading text-[10px] tracking-[0.25em] uppercase mb-3">
                  {article.date}
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl uppercase text-white leading-tight mb-4 group-hover:text-[#c41e3a] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
                <div className="mt-5 text-[#c41e3a] font-heading text-[10px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read Full Article →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20 sm:mt-28" />
    </section>
  );
}
