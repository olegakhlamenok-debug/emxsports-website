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

const methodColor: Record<string, string> = {
  KO: "text-[#c41e3a]",
  TKO: "text-[#c41e3a]",
  UD: "text-blue-400",
  SD: "text-yellow-400",
};

export default function Results() {
  return (
    <section id="results" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl uppercase text-white mb-10 sm:mb-14 text-center">
          Latest Results
        </h2>

        <div className="space-y-10 sm:space-y-12">
          {results.map((event, ei) => (
            <div key={ei}>
              {/* Event header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                <span className="text-gray-500 font-heading text-sm tracking-wider">
                  {event.date}
                </span>
                <div className="hidden sm:block h-px flex-1 bg-gray-800/50" />
                <span className="text-gray-600 font-heading text-xs tracking-[0.2em] uppercase">
                  {event.event}
                </span>
              </div>

              {/* Bouts */}
              <div className="space-y-[1px]">
                {event.bouts.map((bout, bi) => (
                  <div
                    key={bi}
                    className="bg-[#111] hover:bg-[#161616] transition-all duration-300 hover:shadow-[0_0_20px_rgba(196,30,58,0.1)] hover:translate-x-1"
                  >
                    {/* Desktop layout */}
                    <div className="hidden sm:flex px-6 py-5 items-center justify-between">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-heading font-bold text-lg sm:text-xl text-white uppercase">
                          {bout.winner}
                        </span>
                        <span className="text-gray-600 text-xs font-heading">{bout.winnerRec}</span>
                        <span className="text-gray-600 font-heading text-xs mx-1">def.</span>
                        <span className="font-heading text-base sm:text-lg text-gray-500 uppercase">
                          {bout.loser}
                        </span>
                        <span className="text-gray-700 text-xs font-heading">{bout.loserRec}</span>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                        <span className={`font-heading font-bold text-sm ${methodColor[bout.method] ?? "text-white"}`}>
                          {bout.method}
                        </span>
                        <span className="text-gray-600 text-xs font-heading">{bout.round}</span>
                      </div>
                    </div>

                    {/* Mobile layout — stacked */}
                    <div className="sm:hidden px-5 py-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="font-heading font-bold text-base text-white uppercase">
                            {bout.winner}
                          </span>
                          <span className="text-gray-600 text-xs font-heading ml-2">{bout.winnerRec}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`font-heading font-bold text-xs ${methodColor[bout.method] ?? "text-white"}`}>
                            {bout.method}
                          </span>
                          <span className="text-gray-600 text-[10px] font-heading">{bout.round}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600 font-heading text-[10px]">def.</span>
                        <span className="font-heading text-sm text-gray-500 uppercase">
                          {bout.loser}
                        </span>
                        <span className="text-gray-700 text-[10px] font-heading">{bout.loserRec}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20 sm:mt-28" />
    </section>
  );
}
