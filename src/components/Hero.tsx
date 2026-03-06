"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

export default function Hero() {
  const nextEvent = new Date("2026-02-21T19:00:00");
  const { days, hours, minutes, seconds } = useCountdown(nextEvent);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1547153760-18fc86324498?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0a0a0a]" />

      {/* Red diagonal accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#c41e3a]" />

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-white transform -rotate-6" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-white transform rotate-3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pre-headline */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-[#c41e3a]" />
          <span className="text-[#c41e3a] font-heading tracking-[0.3em] text-sm uppercase font-medium">
            Professional Boxing
          </span>
          <div className="h-px w-16 bg-[#c41e3a]" />
        </div>

        {/* Main headline */}
        <h1 className="font-heading font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-none tracking-tight mb-6">
          <span className="block text-white">WHERE</span>
          <span className="block text-[#c41e3a]">CHAMPIONS</span>
          <span className="block text-white">ARE MADE</span>
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light">
          EMX Sports brings world-class boxing to Eastern Europe, delivering spectacular fight nights and developing the next generation of champions.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="#events"
            className="bg-[#c41e3a] hover:bg-[#a01830] text-white font-heading font-semibold tracking-widest text-sm px-10 py-4 uppercase transition-all hover:scale-105"
          >
            View Events
          </Link>
          <Link
            href="#fighters"
            className="border border-white/30 hover:border-white text-white font-heading font-semibold tracking-widest text-sm px-10 py-4 uppercase transition-all hover:bg-white/10"
          >
            Our Fighters
          </Link>
        </div>

        {/* Countdown */}
        <div className="border border-white/10 bg-black/40 backdrop-blur-sm inline-block px-8 py-6">
          <div className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-4 font-heading">
            Next Event — Feb 21, 2026 · Xiaomi Arena, Riga
          </div>
          <div className="flex gap-6 sm:gap-10 justify-center">
            {[
              { value: pad(days), label: "Days" },
              { value: pad(hours), label: "Hrs" },
              { value: pad(minutes), label: "Min" },
              { value: pad(seconds), label: "Sec" },
            ].map(({ value, label }, i) => (
              <div key={i} className="text-center">
                <div className="font-heading font-bold text-4xl sm:text-5xl text-[#c41e3a] tabular-nums">
                  {value}
                </div>
                <div className="text-gray-500 text-xs tracking-widest uppercase mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-500" size={28} />
      </div>
    </section>
  );
}
