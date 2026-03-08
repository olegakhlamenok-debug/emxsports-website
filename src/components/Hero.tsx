"use client";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-black/75" />
      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo — sized to match the tagline width */}
        <div className="inline-block mx-auto mb-5">
          <img
            src={`${basePath}/images/logo.png`}
            alt="EMX Sports"
            className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[480px] mx-auto drop-shadow-2xl"
          />
        </div>

        <p
          className="text-sm sm:text-base tracking-[0.3em] uppercase font-heading mb-10"
          style={{
            backgroundImage: "linear-gradient(90deg, #ffffff 0%, #a0a0a0 50%, #cc0000 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Where Champions Are Made
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="#fighters"
            className="bg-[#c41e3a] hover:bg-[#a01830] text-white font-heading font-semibold tracking-[0.2em] text-xs px-8 py-3.5 uppercase transition-all hover:scale-105"
          >
            View Fighters
          </Link>
          <Link
            href="#about"
            className="border border-white/20 hover:border-white/50 text-gray-300 hover:text-white font-heading font-semibold tracking-[0.2em] text-xs px-8 py-3.5 uppercase transition-all"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
