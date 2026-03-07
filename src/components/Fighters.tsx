"use client";
import Link from "next/link";
import { fighters } from "@/data/fighters";

export default function Fighters() {
  return (
    <section id="fighters" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-heading font-bold text-5xl sm:text-6xl uppercase text-white">
            Fighters
          </h2>
          <span className="hidden sm:block text-gray-500 font-heading text-xs tracking-widest uppercase">
            Our Roster
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800">
          {fighters.map((fighter) => (
            <Link
              key={fighter.slug}
              href={`/fighters/${fighter.slug}/`}
              className="bg-[#0a0a0a] group block"
            >
              <div className="relative overflow-hidden" style={{ height: 400 }}>
                <img
                  src={fighter.image}
                  alt={fighter.name}
                  className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {fighter.ranking && (
                  <div className="absolute top-4 left-4 text-[#c41e3a] font-heading text-xs tracking-widest uppercase">
                    {fighter.ranking}
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-gray-500 font-heading text-xs tracking-widest uppercase mb-1">
                    {fighter.weightClass}
                  </div>
                  <h3 className="font-heading font-bold text-2xl uppercase text-white leading-tight">
                    {fighter.name}
                  </h3>
                  <div className="text-gray-400 font-heading text-sm italic mt-1">
                    &ldquo;{fighter.nickname}&rdquo;
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-white font-heading font-bold text-lg">
                      {fighter.record.wins}-{fighter.record.losses}-{fighter.record.draws}
                    </span>
                    <span className="text-gray-500 text-xs font-heading tracking-wider">
                      {fighter.kos} KOs
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
