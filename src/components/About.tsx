"use client";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl uppercase text-white leading-[0.9] mb-8 sm:mb-10 text-center">
            About<br />
            <span className="text-gray-500">EMX Sports</span>
          </h2>
          <div className="space-y-5 text-gray-400 leading-relaxed text-sm sm:text-base">
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
            <p className="text-gray-300 border-l-2 border-[#c41e3a] pl-5 italic text-base sm:text-lg leading-relaxed">
              &ldquo;Our mission is to elevate professional boxing by creating
              unforgettable experiences for fans, fostering growth in the sport,
              and helping build the next generation of champions.&rdquo;
            </p>
          </div>
        </div>
      </div>

      <div className="section-divider mt-20 sm:mt-28" />
    </section>
  );
}
