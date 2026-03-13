"use client";
import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const moments = [
  { src: `${basePath}/images/best-moments/1.jpg`, alt: "Best Moment — Fight Night Action" },
  { src: `${basePath}/images/best-moments/2.jpg`, alt: "Best Moment — Ring Walkout" },
  { src: `${basePath}/images/best-moments/3.jpg`, alt: "Best Moment — Victory Celebration" },
  { src: `${basePath}/images/best-moments/4.jpg`, alt: "Best Moment — Knockdown" },
  { src: `${basePath}/images/best-moments/5.jpg`, alt: "Best Moment — Championship Bout" },
  { src: `${basePath}/images/best-moments/6.jpg`, alt: "Best Moment — Belt Ceremony" },
];

export default function BestMoments() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section id="best-moments" className="py-20 sm:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl uppercase text-white mb-10 sm:mb-14 text-center">
            Best Moments
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-[2px]">
            {moments.map((m, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="relative overflow-hidden group cursor-pointer aspect-[4/3]"
              >
                <img
                  src={m.src}
                  alt={m.alt}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>
        </div>

        <div className="section-divider mt-20 sm:mt-28" />
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-heading"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <button
            className="absolute left-4 sm:left-8 text-white/50 hover:text-white text-4xl font-heading"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + moments.length) % moments.length);
            }}
          >
            ‹
          </button>
          <img
            src={moments[lightbox].src}
            alt={moments[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 sm:right-8 text-white/50 hover:text-white text-4xl font-heading"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % moments.length);
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
