"use client";

const results = [
  {
    date: "October 12, 2025",
    event: "EMX Fight Night #8 · Riga",
    bouts: [
      {
        winner: "Aleksejevs",
        winnerRecord: "20-0-0",
        loser: "Petrov",
        loserRecord: "15-4-0",
        method: "TKO",
        round: "R6",
        weightClass: "Middleweight",
      },
      {
        winner: "Volkovs",
        winnerRecord: "12-4-2",
        loser: "Grigoriev",
        loserRecord: "10-3-0",
        method: "UD",
        round: "R10",
        weightClass: "Light Heavyweight",
      },
    ],
  },
  {
    date: "June 28, 2025",
    event: "EMX Fight Night #7 · Riga",
    bouts: [
      {
        winner: "Melnikovs",
        winnerRecord: "8-0-0",
        loser: "Ivanov",
        loserRecord: "6-2-0",
        method: "KO",
        round: "R3",
        weightClass: "Welterweight",
      },
    ],
  },
];

const methodColor: Record<string, string> = {
  KO: "text-red-400",
  TKO: "text-orange-400",
  UD: "text-blue-400",
  SD: "text-yellow-400",
  MD: "text-yellow-400",
};

export default function Results() {
  return (
    <section id="results" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#c41e3a]" />
            <span className="text-[#c41e3a] font-heading tracking-[0.25em] text-sm uppercase">
              Fight History
            </span>
          </div>
          <h2 className="font-heading font-bold text-5xl sm:text-6xl uppercase text-white">
            Latest Results
          </h2>
        </div>

        <div className="space-y-10">
          {results.map((event, ei) => (
            <div key={ei}>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-gray-400 font-heading text-sm tracking-wider">{event.date}</span>
                <div className="h-px flex-1 bg-gray-800" />
                <span className="text-gray-500 font-heading text-xs tracking-widest uppercase">{event.event}</span>
              </div>
              <div className="space-y-3">
                {event.bouts.map((bout, bi) => (
                  <div
                    key={bi}
                    className="border border-gray-800 bg-gray-900/50 px-6 py-5 flex flex-wrap gap-4 items-center justify-between hover:border-gray-700 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-wrap">
                      {/* Winner */}
                      <div>
                        <span className="font-heading font-bold text-xl text-white uppercase">
                          {bout.winner}
                        </span>
                        <span className="ml-2 text-[#d4a017] text-xs font-heading">{bout.winnerRecord}</span>
                      </div>
                      <span className="text-gray-600 font-heading text-sm">def.</span>
                      {/* Loser */}
                      <div>
                        <span className="font-heading text-lg text-gray-500 uppercase">
                          {bout.loser}
                        </span>
                        <span className="ml-2 text-gray-600 text-xs font-heading">{bout.loserRecord}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-gray-500 text-xs font-heading tracking-widest uppercase">
                        {bout.weightClass}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className={`font-heading font-bold text-sm ${methodColor[bout.method] ?? "text-white"}`}>
                          {bout.method}
                        </span>
                        <span className="text-gray-600 text-xs font-heading">{bout.round}</span>
                      </div>
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
