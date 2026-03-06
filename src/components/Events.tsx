"use client";
import Link from "next/link";
import { MapPin, Calendar, Ticket } from "lucide-react";

const events = [
  {
    id: 1,
    date: "February 21, 2026",
    venue: "Xiaomi Arena",
    city: "Riga, Latvia",
    featured: true,
    bouts: [
      {
        fighter1: { name: "Jevgenijs Aleksejevs", record: "20-0-0", flag: "🇱🇻" },
        fighter2: { name: "Damiano Falcinelli", record: "17-2-0", flag: "🇮🇹" },
        weightClass: "Middleweight",
        title: "WBC International Title",
        main: true,
      },
      {
        fighter1: { name: "Milans Volkovs", record: "12-4-2", flag: "🇱🇻" },
        fighter2: { name: "Christian Luis", record: "13-4-0", flag: "🇩🇴" },
        weightClass: "Light Heavyweight",
        title: "",
        main: false,
      },
    ],
  },
  {
    id: 2,
    date: "April 12, 2026",
    venue: "Arena Riga",
    city: "Riga, Latvia",
    featured: false,
    bouts: [
      {
        fighter1: { name: "Arturs Melnikovs", record: "8-0-0", flag: "🇱🇻" },
        fighter2: { name: "Marco Di Luca", record: "14-3-1", flag: "🇮🇹" },
        weightClass: "Welterweight",
        title: "",
        main: true,
      },
    ],
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#c41e3a]" />
            <span className="text-[#c41e3a] font-heading tracking-[0.25em] text-sm uppercase">
              Fight Nights
            </span>
          </div>
          <h2 className="font-heading font-bold text-5xl sm:text-6xl uppercase text-white">
            Upcoming Events
          </h2>
        </div>

        <div className="space-y-8">
          {events.map((event) => (
            <div
              key={event.id}
              className={`border ${
                event.featured ? "border-[#c41e3a]/40" : "border-gray-800"
              } bg-gradient-to-r from-gray-900 to-[#0a0a0a] overflow-hidden group`}
            >
              {/* Event header */}
              <div
                className={`px-6 py-4 flex flex-wrap gap-4 items-center justify-between ${
                  event.featured ? "bg-[#c41e3a]/10" : "bg-gray-900/50"
                } border-b border-gray-800`}
              >
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <Calendar size={14} className="text-[#c41e3a]" />
                    <span className="font-heading tracking-wide">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <MapPin size={14} className="text-[#c41e3a]" />
                    <span className="font-heading tracking-wide">
                      {event.venue} · {event.city}
                    </span>
                  </div>
                </div>
                {event.featured && (
                  <span className="bg-[#c41e3a] text-white text-xs font-heading font-semibold tracking-widest px-3 py-1 uppercase">
                    Next Event
                  </span>
                )}
              </div>

              {/* Bouts */}
              <div className="divide-y divide-gray-800/50">
                {event.bouts.map((bout, i) => (
                  <div
                    key={i}
                    className="px-6 py-8 flex flex-col md:flex-row items-center gap-6"
                  >
                    {/* Fighter 1 */}
                    <div className="flex-1 text-center md:text-right">
                      <div className="text-3xl mb-2">{bout.fighter1.flag}</div>
                      <div className="font-heading font-bold text-2xl sm:text-3xl text-white uppercase leading-tight">
                        {bout.fighter1.name}
                      </div>
                      <div className="text-[#d4a017] font-heading font-medium text-sm mt-1 tracking-wider">
                        {bout.fighter1.record}
                      </div>
                    </div>

                    {/* VS */}
                    <div className="flex flex-col items-center min-w-[120px]">
                      {bout.main && bout.title && (
                        <div className="text-[10px] text-[#c41e3a] font-heading tracking-[0.2em] uppercase text-center mb-2">
                          {bout.title}
                        </div>
                      )}
                      <div className="font-heading font-bold text-4xl text-white">VS</div>
                      <div className="mt-2 bg-gray-800 text-gray-300 text-xs font-heading tracking-widest px-3 py-1 uppercase">
                        {bout.weightClass}
                      </div>
                    </div>

                    {/* Fighter 2 */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="text-3xl mb-2">{bout.fighter2.flag}</div>
                      <div className="font-heading font-bold text-2xl sm:text-3xl text-white uppercase leading-tight">
                        {bout.fighter2.name}
                      </div>
                      <div className="text-[#d4a017] font-heading font-medium text-sm mt-1 tracking-wider">
                        {bout.fighter2.record}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-800 flex justify-end">
                <Link
                  href="#"
                  className="flex items-center gap-2 bg-[#c41e3a] hover:bg-[#a01830] text-white font-heading font-semibold tracking-widest text-xs px-6 py-3 uppercase transition-colors"
                >
                  <Ticket size={14} />
                  Buy Tickets
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
