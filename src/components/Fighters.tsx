"use client";
import Link from "next/link";
import { Trophy, Shield } from "lucide-react";

const fighters = [
  {
    name: "Jevgenijs Aleksejevs",
    nickname: '"The Latvian Lion"',
    record: "20-0-0",
    kos: "14",
    flag: "🇱🇻",
    weight: "Middleweight",
    ranking: "WBC #4",
    image: "https://images.unsplash.com/photo-1549476464-37392f717541?w=400&q=80",
    featured: true,
  },
  {
    name: "Milans Volkovs",
    nickname: '"The Storm"',
    record: "12-4-2",
    kos: "7",
    flag: "🇱🇻",
    weight: "Light Heavyweight",
    ranking: "",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    featured: false,
  },
  {
    name: "Arturs Melnikovs",
    nickname: '"The Machine"',
    record: "8-0-0",
    kos: "6",
    flag: "🇱🇻",
    weight: "Welterweight",
    ranking: "WBO European #8",
    image: "https://images.unsplash.com/photo-1576669801820-a9ab287ac2d1?w=400&q=80",
    featured: false,
  },
];

export default function Fighters() {
  const [main, ...rest] = fighters;

  return (
    <section id="fighters" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#c41e3a]" />
              <span className="text-[#c41e3a] font-heading tracking-[0.25em] text-sm uppercase">
                Our Roster
              </span>
            </div>
            <h2 className="font-heading font-bold text-5xl sm:text-6xl uppercase text-white">
              Our Fighters
            </h2>
          </div>
          <Link
            href="#"
            className="border border-gray-700 hover:border-white text-gray-300 hover:text-white font-heading font-semibold tracking-widest text-xs px-6 py-3 uppercase transition-colors self-start sm:self-auto"
          >
            View Full Roster
          </Link>
        </div>

        {/* Featured fighter */}
        <div className="mb-8 grid md:grid-cols-2 gap-0 border border-[#c41e3a]/30 overflow-hidden group">
          <div className="relative overflow-hidden bg-gray-900" style={{ minHeight: 400 }}>
            <img
              src={main.image}
              alt={main.name}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              style={{ minHeight: 400 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
            <div className="absolute top-4 left-4 bg-[#c41e3a] text-white text-xs font-heading font-bold tracking-widest px-3 py-1 uppercase">
              Featured
            </div>
          </div>
          <div className="bg-[#0f0f0f] p-8 sm:p-12 flex flex-col justify-center">
            <div className="text-4xl mb-3">{main.flag}</div>
            <div className="text-gray-400 font-heading tracking-widest text-sm uppercase mb-1">
              {main.weight}
            </div>
            <h3 className="font-heading font-bold text-4xl sm:text-5xl uppercase text-white leading-tight mb-2">
              {main.name}
            </h3>
            <div className="text-[#d4a017] font-heading text-lg mb-6 italic">
              {main.nickname}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: "Record", value: main.record },
                { label: "KOs", value: main.kos },
                { label: "Ranking", value: main.ranking || "—" },
              ].map(({ label, value }) => (
                <div key={label} className="border border-gray-800 p-3 text-center">
                  <div className="font-heading font-bold text-2xl text-white">{value}</div>
                  <div className="text-gray-500 text-xs tracking-widest uppercase mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {main.ranking && (
              <div className="flex items-center gap-2 text-[#d4a017] mb-6">
                <Trophy size={16} />
                <span className="font-heading text-sm tracking-wider">{main.ranking}</span>
              </div>
            )}

            <Link
              href="#"
              className="border border-[#c41e3a] text-[#c41e3a] hover:bg-[#c41e3a] hover:text-white font-heading font-semibold tracking-widest text-xs px-8 py-3 uppercase transition-all self-start"
            >
              Fighter Profile
            </Link>
          </div>
        </div>

        {/* Other fighters */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((fighter) => (
            <div
              key={fighter.name}
              className="border border-gray-800 hover:border-[#c41e3a]/40 bg-gray-900 overflow-hidden group transition-all cursor-pointer"
            >
              <div className="relative overflow-hidden" style={{ height: 280 }}>
                <img
                  src={fighter.image}
                  alt={fighter.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-2xl mb-1">{fighter.flag}</div>
                  <div className="font-heading font-bold text-xl uppercase text-white leading-tight">
                    {fighter.name}
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[#d4a017] font-heading text-sm font-medium">
                      {fighter.record}
                    </span>
                    <span className="text-gray-400 text-xs font-heading tracking-wider uppercase">
                      {fighter.weight}
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                {fighter.ranking ? (
                  <div className="flex items-center gap-1.5 text-[#d4a017]">
                    <Shield size={12} />
                    <span className="text-xs font-heading tracking-wider">{fighter.ranking}</span>
                  </div>
                ) : (
                  <div />
                )}
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white font-heading text-xs tracking-widest uppercase transition-colors"
                >
                  Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
