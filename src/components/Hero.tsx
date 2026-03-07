"use client";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <img
          src={`${basePath}/images/logo.png`}
          alt="EMX Sports"
          className="h-28 sm:h-36 mx-auto mb-6"
        />

        <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-16 font-light tracking-wide">
          Where Champions Are Made
        </p>

        {/* Main event card */}
        <div className="max-w-4xl mx-auto">
          <Link href="#events" className="block group">
            <div className="relative overflow-hidden border border-gray-800 hover:border-gray-600 transition-all">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${basePath}/images/fighters/jevgenijs-aleksejevs-event.jpg')`,
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
