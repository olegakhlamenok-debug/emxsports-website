"use client";

const results = [
  {
    date: "Oct 12, 2025",
    event: "EMX Fight Night #8",
    bouts: [
      { winner: "Aleksejevs", winnerRec: "20-0-0", loser: "Petrov", loserRec: "15-4-0", method: "TKO", round: "R6" },
      { winner: "Volkovs", winnerRec: "12-4-2", loser: "Grigoriev", loserRec: "10-3-0", method: "UD", round: "R10" },
    ],
  },
  {
    date: "Jun 28, 2025",
    event: "EMX Fight Night #7",
    bouts: [
      { winner: "Melnikovs", winnerRec: "8-0-0", loser: "Ivanov", loserRec: "6-2-0", method: "KO", round: "R3" },
    ],
  },
];

export default function Results() {
  return (
    <section id="results" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-heading font-bold text-5xl sm:text-6xl uppercase text-white">
            Latest Results
          </h2>
          <span className="hidden sm:block text-gray-500 font-heading text-xs tracking-widest uppercase">
            See Fight Night #8 →
          </span>
        </div>

        <div className="space-y-8">
          {results.map((event, ei) => (
            <div key={ei}>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-gray-500 font-heading text-sm tracking-wider">
                  {event.date}
                </span>
                <div className="h-px flex-1 bg-gray-800" />
                <span className="text-gray-600 font-heading text-xs tracking-widest uppercase">
                  {event.event}
                </span>
              </div>
              <div className="space-y-px">
                {event.bouts.map((bout, bi) => (
                  <div
                    key={bi}
                    className="bg-[#111] px-6 py-5 flex flex-wrap gap-4 items-center justify-between hover:bg-[#161616] transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-heading font-bold text-xl text-white uppercase">
                        {bout.winner}
                      </span>
                      <span className="text-gray-600 text-xs font-heading">{bout.winnerRec}</span>
                      <span className="text-gray-600 font-heading text-sm">def.</span>
                      <span className="font-heading text-lg text-gray-500 uppercase">
                        {bout.loser}
                      </span>
                      <span className="text-gray-700 text-xs font-heading">{bout.loserRec}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-heading font-bold text-sm text-[#c41e3a]">
                        {bout.method}
                      </span>
                      <span className="text-gray-600 text-xs font-heading">{bout.round}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
