"use client";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-24 sm:py-32 md:py-36">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-black/75" />
      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo */}
        <img
          src={`${basePath}/images/logo.png`}
          alt="EMX Sports"
          className="h-40 sm:h-56 md:h-72 lg:h-80 mx-auto mb-6 drop-shadow-2xl"
        />

        <p className="text-gray-400 text-sm sm:text-base tracking-[0.3em] uppercase font-heading mb-12 sm:mb-16">
          Where Champions Are Made
        </p>

        {/* Main event card */}
        <div className="max-w-3xl mx-auto">
          <Link href="#events" className="block group">
            <div className="relative overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${basePath}/images/fighters/jevgenijs-aleksejevs-event.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-all duration-500" />
              <div className="relative px-6 sm:px-10 py-14 sm:py-20">
                <div className="text-gray-500 font-heading text-xs tracking-[0.3em] uppercase mb-6">
                  21 February 2026
                </div>
                <div className="font-heading font-bold text-4xl sm:text-5xl md:text-7xl text-white uppercase leading-[0.85] tracking-tight">
                  Aleksejevs
                </div>
                <div className="font-heading text-gray-500 text-base sm:text-lg my-3">vs</div>
                <div className="font-heading font-bold text-4xl sm:text-5xl md:text-7xl text-white uppercase leading-[0.85] tracking-tight">
                  Falcinelli
                </div>
                <div className="text-gray-500 text-xs sm:text-sm mt-6 tracking-wider">
                  Xiaomi Arena · Riga, Latvia
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-10">
          <Link
            href="#events"
            className="bg-[#c41e3a] hover:bg-[#a01830] text-white font-heading font-semibold tracking-[0.2em] text-xs px-8 py-3.5 uppercase transition-all hover:scale-105"
          >
            Buy Tickets
          </Link>
          <Link
            href="#fighters"
            className="border border-white/20 hover:border-white/50 text-gray-300 hover:text-white font-heading font-semibold tracking-[0.2em] text-xs px-8 py-3.5 uppercase transition-all"
          >
            View Fighters
          </Link>
        </div>
      </div>
    </section>
  );
}
