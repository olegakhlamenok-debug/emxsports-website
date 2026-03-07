"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1547153760-18fc86324498?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main headline — Matchroom style */}
        <h1 className="font-heading font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] uppercase leading-[0.9] tracking-tight mb-6">
          <span className="block text-white">EMX</span>
          <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.3em]">
            SPORTS
          </span>
        </h1>

        <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-12 font-light tracking-wide">
          Professional Boxing Promotion
        </p>

        {/* Event cards grid — Matchroom style */}
        <div className="mt-8 max-w-4xl mx-auto">
          <Link href="#events" className="block group">
            <div className="relative overflow-hidden border border-gray-800 hover:border-gray-600 transition-all">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1549476464-37392f717541?w=800&q=80')`,
                }}
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all" />
              <div className="relative px-8 py-12 sm:py-16 text-center">
                <div className="text-gray-400 font-heading text-sm tracking-widest uppercase mb-4">
                  21 FEB
                </div>
                <div className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-white uppercase leading-tight">
                  ALEKSEJEVS
                </div>
                <div className="font-heading text-gray-400 text-lg sm:text-xl my-2">vs</div>
                <div className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-white uppercase leading-tight">
                  FALCINELLI
                </div>
                <div className="text-gray-400 text-sm mt-4 tracking-wide">
                  Xiaomi Arena, Riga, Latvia
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
