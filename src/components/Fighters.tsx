"use client";
import Link from "next/link";

const fighters = [
  {
    name: "Jevgenijs Aleksejevs",
    nickname: "The Latvian Lion",
    record: "20-0-0",
    kos: "14",
    weight: "Middleweight",
    ranking: "WBC #4",
    image: "https://images.unsplash.com/photo-1549476464-37392f717541?w=500&q=80",
  },
  {
    name: "Milans Volkovs",
    nickname: "The Storm",
    record: "12-4-2",
    kos: "7",
    weight: "Light Heavyweight",
    ranking: "",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
  },
  {
    name: "Arturs Melnikovs",
    nickname: "The Machine",
    record: "8-0-0",
    kos: "6",
    weight: "Welterweight",
    ranking: "WBO European #8",
    image: "https://images.unsplash.com/photo-1576669801820-a9ab287ac2d1?w=500&q=80",
  },
];

export default function Fighters() {
  return (
    <section id="fighters" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-heading font-bold text-5xl sm:text-6xl uppercase text-white">
            Fighters
          </h2>
          <Link
            href="#"
            className="hidden sm:block text-gray-500 hover:text-white font-heading text-xs tracking-widest uppercase transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800">
          {fighters.map((fighter) => (
            <div key={fighter.name} className="bg-[#0a0a0a] group cursor-pointer">
              <div className="relative overflow-hidden" style={{ height: 400 }}>
                <img
                  src={fighter.image}
                  alt={fighter.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {fighter.ranking && (
                  <div className="absolute top-4 left-4 text-[#c41e3a] font-heading text-xs tracking-widest uppercase">
                    {fighter.ranking}
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-gray-500 font-heading text-xs tracking-widest uppercase mb-1">
                    {fighter.weight}
                  </div>
                  <h3 className="font-heading font-bold text-2xl uppercase text-white leading-tight">
                    {fighter.name}
                  </h3>
                  <div className="text-gray-400 font-heading text-sm italic mt-1">
                    &ldquo;{fighter.nickname}&rdquo;
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-white font-heading font-bold text-lg">
                      {fighter.record}
                    </span>
                    <span className="text-gray-500 text-xs font-heading tracking-wider">
                      {fighter.kos} KOs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
