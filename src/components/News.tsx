"use client";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const news = [
  {
    category: "Fight News",
    title: "Aleksejevs vs Falcinelli: The WBC International Title Fight is Official",
    excerpt: "Undefeated Latvian sensation Jevgenijs Aleksejevs will put his perfect record on the line against Italy's Damiano Falcinelli on February 21 at Xiaomi Arena.",
    date: "Jan 15, 2026",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    featured: true,
  },
  {
    category: "Training",
    title: "Inside Camp: Aleksejevs Prepares for His Biggest Challenge Yet",
    excerpt: "We go inside the gym with the unbeaten middleweight as he sharpens his skills ahead of February 21.",
    date: "Jan 10, 2026",
    image: "https://images.unsplash.com/photo-1549476464-37392f717541?w=600&q=80",
    featured: false,
  },
  {
    category: "Results",
    title: "Melnikovs Blasts Out Ivanov in Three to Stay Perfect",
    excerpt: "Arturs Melnikovs maintained his unbeaten record with a stunning third-round KO at EMX Fight Night #7.",
    date: "Jun 28, 2025",
    image: "https://images.unsplash.com/photo-1576669801820-a9ab287ac2d1?w=600&q=80",
    featured: false,
  },
];

export default function News() {
  const [featured, ...others] = news;

  return (
    <section id="news" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#c41e3a]" />
              <span className="text-[#c41e3a] font-heading tracking-[0.25em] text-sm uppercase">
                Latest
              </span>
            </div>
            <h2 className="font-heading font-bold text-5xl sm:text-6xl uppercase text-white">
              News
            </h2>
          </div>
          <Link
            href="#"
            className="border border-gray-700 hover:border-white text-gray-300 hover:text-white font-heading font-semibold tracking-widest text-xs px-6 py-3 uppercase transition-colors self-start sm:self-auto"
          >
            All News
          </Link>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured */}
          <div className="lg:col-span-3 group cursor-pointer">
            <div className="relative overflow-hidden border border-gray-800 group-hover:border-[#c41e3a]/40 transition-all">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-72 object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#c41e3a] text-white text-xs font-heading font-bold tracking-widest px-3 py-1 uppercase">
                  {featured.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                  <Clock size={12} />
                  <span className="font-heading tracking-wide">{featured.date}</span>
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl uppercase text-white leading-tight">
                  {featured.title}
                </h3>
                <p className="text-gray-300 text-sm mt-3 line-clamp-2">{featured.excerpt}</p>
                <div className="flex items-center gap-2 text-[#c41e3a] font-heading text-xs tracking-widest uppercase mt-4 group-hover:gap-4 transition-all">
                  <span>Read More</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Other news */}
          <div className="lg:col-span-2 space-y-4">
            {others.map((article) => (
              <div
                key={article.title}
                className="group cursor-pointer border border-gray-800 hover:border-[#c41e3a]/40 bg-gray-900/50 flex gap-4 p-4 transition-all"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-24 h-24 object-cover flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="min-w-0">
                  <span className="text-[#c41e3a] text-xs font-heading font-bold tracking-widest uppercase">
                    {article.category}
                  </span>
                  <h3 className="font-heading font-bold text-sm uppercase text-white leading-tight mt-1 line-clamp-3">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs mt-2">
                    <Clock size={10} />
                    <span className="font-heading">{article.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
