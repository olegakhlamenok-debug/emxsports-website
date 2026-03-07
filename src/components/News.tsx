"use client";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const news = [
  {
    title: "Aleksejevs vs Falcinelli: The WBC International Title Fight is Official",
    date: "Jan 15, 2026",
    image: `${basePath}/images/gallery/1.jpg`,
  },
  {
    title: "Inside Camp: Aleksejevs Prepares for His Biggest Challenge Yet",
    date: "Jan 10, 2026",
    image: `${basePath}/images/gallery/2.jpg`,
  },
  {
    title: "Chukhadzhian Signs with EMX Sports for Multi-Fight Deal",
    date: "Dec 20, 2025",
    image: `${basePath}/images/gallery/3.jpg`,
  },
];

export default function News() {
  return (
    <section id="news" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-5xl sm:text-6xl uppercase text-white mb-12">
          Latest Media
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800">
          {news.map((article) => (
            <Link
              key={article.title}
              href="#"
              className="bg-[#0a0a0a] group block"
            >
              <div className="relative overflow-hidden" style={{ height: 250 }}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-gray-500 font-heading text-xs tracking-widest uppercase mb-2">
                    {article.date}
                  </div>
                  <h3 className="font-heading font-bold text-base uppercase text-white leading-tight line-clamp-3">
                    {article.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
