"use client";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const events = [
  {
    id: 1,
    date: "21 FEB",
    fighter1: "Aleksejevs",
    fighter2: "Falcinelli",
    title: "WBC International Title",
    venue: "Xiaomi Arena, Riga, Latvia",
    image: `${basePath}/images/fighters/jevgenijs-aleksejevs-event.jpg`,
  },
  {
    id: 2,
    date: "21 FEB",
    fighter1: "Volkovs",
    fighter2: "Christian Luis",
    title: "",
    venue: "Xiaomi Arena, Riga, Latvia",
    image: `${basePath}/images/fighters/milans-volkovs.jpg`,
  },
  {
    id: 3,
    date: "12 APR",
    fighter1: "Chukhadzhian",
    fighter2: "TBA",
    title: "",
    venue: "Arena Riga, Riga, Latvia",
    image: `${basePath}/images/fighters/karen-chukhadzhian.jpg`,
  },
];

function EventCard({
  event,
  large = false,
}: {
  event: (typeof events)[0];
  large?: boolean;
}) {
  return (
    <Link href="#" className="block group relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(196,30,58,0.15)] hover:-translate-y-1">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url('${event.image}')` }}
      />
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/45 transition-all duration-500" />
      <div
        className={`relative ${
          large ? "px-6 sm:px-10 py-16 sm:py-24 md:py-28" : "px-5 sm:px-8 py-10 sm:py-16"
        }`}
      >
        <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
          <span className="text-white/80 font-heading text-[10px] sm:text-xs tracking-[0.3em] uppercase bg-black/50 backdrop-blur-sm px-3 py-1.5">
            {event.date}
          </span>
        </div>
        {event.title && (
          <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
            <span className="text-[#c41e3a] font-heading text-[9px] sm:text-[10px] tracking-[0.2em] uppercase">
              {event.title}
            </span>
          </div>
        )}
        <div className="text-center mt-4 sm:mt-6">
          <div
            className={`font-heading font-bold text-white uppercase leading-[0.85] tracking-tight ${
              large
                ? "text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
                : "text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            }`}
          >
            {event.fighter1}
          </div>
          <div
            className={`font-heading text-gray-500 ${
              large ? "text-base sm:text-lg my-2 sm:my-3" : "text-xs sm:text-sm my-1.5"
            }`}
          >
            vs
          </div>
          <div
            className={`font-heading font-bold text-white uppercase leading-[0.85] tracking-tight ${
              large
                ? "text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
                : "text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            }`}
          >
            {event.fighter2}
          </div>
          <div
            className={`text-gray-500 mt-3 sm:mt-4 tracking-wider ${
              large ? "text-xs sm:text-sm" : "text-[10px] sm:text-xs"
            }`}
          >
            {event.venue}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Events() {
  const [featured, ...rest] = events;

  return (
    <section id="events" className="pt-8 pb-20 sm:pt-12 sm:pb-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl uppercase text-white mb-8 sm:mb-12 text-center">
          Upcoming Events
        </h2>

        {/* Featured event */}
        <EventCard event={featured} large />

        {/* Smaller events */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] mt-[1px] bg-gray-800/50">
          {rest.map((event) => (
            <div key={event.id} className="bg-[#0a0a0a]">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-20 sm:mt-28" />
    </section>
  );
}
