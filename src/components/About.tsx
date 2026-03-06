"use client";
import { Users, Trophy, Globe, Star } from "lucide-react";

const stats = [
  { icon: Trophy, value: "8+", label: "Years in Business" },
  { icon: Star, value: "20+", label: "Events Produced" },
  { icon: Users, value: "50+", label: "Fighters Promoted" },
  { icon: Globe, value: "12", label: "Countries Represented" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="w-full h-full bg-gradient-to-l from-[#c41e3a] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#c41e3a]" />
              <span className="text-[#c41e3a] font-heading tracking-[0.25em] text-sm uppercase">
                Our Story
              </span>
            </div>
            <h2 className="font-heading font-bold text-5xl sm:text-6xl uppercase text-white leading-tight mb-8">
              About<br />
              <span className="text-[#c41e3a]">EMX Sports</span>
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                EMX Sports is a dynamic professional boxing promotion company dedicated to advancing the sport through high-quality events and athlete development. We specialize in organizing spectacular fight nights that deliver intense, world-class action.
              </p>
              <p>
                We carefully prepare fighters for competitive bouts and provide a platform for emerging and established talent to shine on both regional and international stages. Our events are known for their production quality and passionate storytelling.
              </p>
              <p className="text-white font-medium italic border-l-2 border-[#c41e3a] pl-4">
                "Our mission is to elevate professional boxing by creating unforgettable experiences for fans, fostering growth in the sport, and helping build the next generation of champions."
              </p>
            </div>
          </div>

          {/* Right: stats grid */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="border border-gray-800 hover:border-[#c41e3a]/40 bg-[#0a0a0a] p-8 text-center group transition-all"
                >
                  <Icon
                    size={28}
                    className="mx-auto mb-4 text-[#c41e3a] group-hover:scale-110 transition-transform"
                  />
                  <div className="font-heading font-bold text-5xl text-white mb-2">{value}</div>
                  <div className="text-gray-500 text-sm tracking-widest uppercase font-heading">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="mt-4 relative overflow-hidden border border-gray-800">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Boxing arena"
                className="w-full h-48 object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <p className="font-heading font-bold text-2xl text-white uppercase">
                  Xiaomi Arena, Riga · Our Home
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
