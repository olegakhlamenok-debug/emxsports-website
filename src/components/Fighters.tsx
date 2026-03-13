"use client";
import Link from "next/link";
import { fighters } from "@/data/fighters";

export default function Fighters() {
  return (
    <section id="fighters" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl uppercase text-gray-900">
            Our Fighters
          </h2>
          <span className="hidden sm:block text-gray-400 font-heading text-xs tracking-[0.2em] uppercase mt-4">
            View Full Roster →
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-200">
          {fighters.map((fighter) => (
            <Link
              key={fighter.slug}
              href={`/fighters/${fighter.slug}/`}
              className="bg-[#0a0a0a] group block transition-all duration-500 hover:shadow-[0_0_30px_rgba(196,30,58,0.15)] hover:-translate-y-1"
            >
              <div className="relative overflow-hidden" style={{ minHeight: 420 }}>
                <img
                  src={fighter.image}
                  alt={fighter.name}
                  className="w-full h-full object-cover object-top opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 absolute inset-0"
                  style={{ minHeight: 420 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {fighter.ranking && (
                  <div className="absolute top-5 left-5">
                    <span className="text-[#c41e3a] font-heading text-[10px] tracking-[0.2em] uppercase bg-black/60 backdrop-blur-sm px-2.5 py-1">
                      {fighter.ranking}
                    </span>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="text-gray-400 font-heading text-[10px] tracking-[0.25em] uppercase mb-1.5">
                    {fighter.weightClass}
                  </div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl uppercase text-white leading-tight">
                    {fighter.name}
                  </h3>
                  {fighter.nickname && (
                    <div className="text-gray-300 font-heading text-xs italic mt-1.5">
                      &ldquo;{fighter.nickname}&rdquo;
                    </div>
                  )}
                  <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/10">
                    <span className="text-white font-heading font-bold text-base sm:text-lg">
                      {fighter.record.wins}-{fighter.record.losses}-{fighter.record.draws}
                    </span>
                    <span className="text-gray-400 text-xs font-heading tracking-wider">
                      {fighter.kos} KOs
                    </span>
                  </div>
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
