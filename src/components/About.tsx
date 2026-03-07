"use client";

const stats = [
  { value: "8+", label: "Years in Business" },
  { value: "20+", label: "Events Produced" },
  { value: "50+", label: "Fighters Promoted" },
  { value: "12", label: "Countries" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <h2 className="font-heading font-bold text-5xl sm:text-6xl uppercase text-white leading-tight mb-8">
              About EMX Sports
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-sm">
              <p>
                EMX Sports is a dynamic professional boxing promotion company
                dedicated to advancing the sport through high-quality events and
                athlete development. We specialize in organizing spectacular fight
                nights that deliver intense, world-class action.
              </p>
              <p>
                We carefully prepare fighters for competitive bouts and provide a
                platform for emerging and established talent to shine on both
                regional and international stages.
              </p>
              <p className="text-gray-300 border-l-2 border-[#c41e3a] pl-4 italic">
                &ldquo;Our mission is to elevate professional boxing by creating
                unforgettable experiences for fans, fostering growth in the sport,
                and helping build the next generation of champions.&rdquo;
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px bg-gray-800">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-[#0a0a0a] p-8 text-center">
                <div className="font-heading font-bold text-5xl text-white mb-2">
                  {value}
                </div>
                <div className="text-gray-600 text-xs tracking-widest uppercase font-heading">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
