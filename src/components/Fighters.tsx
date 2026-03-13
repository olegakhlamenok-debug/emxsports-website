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
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="text-gray-400 font-heading text-[10px] tracking-[0.25em] uppercase mb-1.5">
                    {fighter.weightClass}
                  </div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl uppercase text-white leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,1)' }}>
                    {fighter.name}
                  </h3>
                  {fighter.nickname && (
                    <div
                      className="font-heading text-sm italic mt-1.5 text-white/90"
                      style={{ textShadow: '0 1px 6px rgba(0,0,0,1), 0 0 12px rgba(0,0,0,0.9)' }}
                    >
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
                  {fighter.titles && fighter.titles.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-white/10 flex items-start gap-2">
                      <span className="text-base leading-none mt-0.5 flex-shrink-0">🏆</span>
                      <span
                        className="text-amber-400 font-heading text-[10px] tracking-[0.15em] uppercase leading-snug"
                        style={{ textShadow: '0 1px 4px rgba(0,0,0,0.9)' }}
                      >
                        {fighter.titles[fighter.titles.length - 1].replace(/ —.*$/, '')}
                      </span>
                    </div>
                  )}
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
