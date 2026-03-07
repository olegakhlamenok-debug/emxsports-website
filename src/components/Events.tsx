"use client";
import Link from "next/link";

const events = [
  {
    id: 1,
    date: "21 FEB",
    fighter1: "Aleksejevs",
    fighter2: "Falcinelli",
    venue: "Xiaomi Arena, Riga, Latvia",
    image: "https://images.unsplash.com/photo-1549476464-37392f717541?w=600&q=80",
    featured: true,
  },
  {
    id: 2,
    date: "21 FEB",
    fighter1: "Volkovs",
    fighter2: "Christian Luis",
    venue: "Xiaomi Arena, Riga, Latvia",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    featured: false,
  },
  {
    id: 3,
    date: "12 APR",
    fighter1: "Melnikovs",
    fighter2: "Di Luca",
    venue: "Arena Riga, Riga, Latvia",
    image: "https://images.unsplash.com/photo-1576669801820-a9ab287ac2d1?w=600&q=80",
    featured: false,
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
    <Link href="#" className="block group relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url('${event.image}')` }}
      />
      <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-all" />
      <div
        className={`relative ${large ? "px-8 py-16 sm:py-24" : "px-6 py-10 sm:py-14"}`}
      >
        <div className="absolute top-4 left-4 text-white font-heading text-xs tracking-widest uppercase bg-black/40 px-3 py-1">
          {event.date}
        </div>
        <div className="text-center mt-4">
          <div
            className={`font-heading font-bold text-white uppercase leading-tight ${
              large
                ? "text-4xl sm:text-5xl md:text-6xl"
                : "text-2xl sm:text-3xl md:text-4xl"
            }`}
          >
            {event.fighter1}
          </div>
          <div
            className={`font-heading text-gray-400 ${
              large ? "text-lg my-2" : "text-sm my-1"
            }`}
          >
            vs
          </div>
          <div
            className={`font-heading font-bold text-white uppercase leading-tight ${
              large
                ? "text-4xl sm:text-5xl md:text-6xl"
                : "text-2xl sm:text-3xl md:text-4xl"
            }`}
          >
            {event.fighter2}
          </div>
          <div
            className={`text-gray-400 mt-3 tracking-wide ${
              large ? "text-sm" : "text-xs"
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
    <section id="events" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured event — large card */}
        <EventCard event={featured} large />

        {/* Other events — 2-column grid */}
        <div className="grid sm:grid-cols-2 gap-px mt-px bg-gray-800">
          {rest.map((event) => (
            <div key={event.id} className="bg-[#0a0a0a]">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
