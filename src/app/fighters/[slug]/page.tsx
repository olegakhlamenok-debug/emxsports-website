import { fighters, getFighterBySlug } from "@/data/fighters";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Instagram, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return fighters.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fighter = getFighterBySlug(slug);
  if (!fighter) return { title: "Fighter Not Found" };
  return {
    title: `${fighter.name} — EMX Sports`,
    description: fighter.bio.substring(0, 160),
  };
}

export default async function FighterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fighter = getFighterBySlug(slug);
  if (!fighter) notFound();

  const { wins, losses, draws } = fighter.record;

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-top opacity-20"
          style={{ backgroundImage: `url('${fighter.imageAction}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <div className="pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-white font-heading text-xs tracking-widest uppercase transition-colors"
            >
              <ArrowLeft size={14} />
              Back to EMX Sports
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-end pt-12 pb-16">
            {/* Fighter photo */}
            <div className="relative flex justify-center md:justify-start">
              <img
                src={fighter.image}
                alt={fighter.name}
                className="w-80 h-96 object-cover object-top"
                style={{ filter: "brightness(0.9)" }}
              />
            </div>

            {/* Fighter info */}
            <div className="pb-4">
              <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl uppercase text-white leading-[0.9] mb-4">
                {fighter.name}
              </h1>
              <div className="text-gray-400 font-heading tracking-widest text-sm uppercase mb-8">
                {fighter.weightClass}
              </div>

              {/* Record stats */}
              <div className="flex items-baseline gap-6 mb-6">
                <div className="text-center">
                  <div className="font-heading font-bold text-4xl text-white">{wins}</div>
                  <div className="text-gray-600 text-[10px] font-heading tracking-widest uppercase mt-1">
                    Wins
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-bold text-4xl text-white">{losses}</div>
                  <div className="text-gray-600 text-[10px] font-heading tracking-widest uppercase mt-1">
                    Losses
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-bold text-4xl text-white">{draws}</div>
                  <div className="text-gray-600 text-[10px] font-heading tracking-widest uppercase mt-1">
                    Draws
                  </div>
                </div>
              </div>

              {/* Details grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <div>
                  <span className="text-gray-600 font-heading text-xs tracking-widest uppercase block">
                    KOs
                  </span>
                  <span className="text-white font-heading font-bold">{fighter.kos}</span>
                </div>
                <div>
                  <span className="text-gray-600 font-heading text-xs tracking-widest uppercase block">
                    Hometown
                  </span>
                  <span className="text-white font-heading">{fighter.hometown}</span>
                </div>
                <div>
                  <span className="text-gray-600 font-heading text-xs tracking-widest uppercase block">
                    Stance
                  </span>
                  <span className="text-white font-heading">{fighter.stance}</span>
                </div>
                <div>
                  <span className="text-gray-600 font-heading text-xs tracking-widest uppercase block">
                    Height
                  </span>
                  <span className="text-white font-heading">{fighter.height}</span>
                </div>
                {fighter.ranking && (
                  <div className="col-span-2">
                    <span className="text-gray-600 font-heading text-xs tracking-widest uppercase block">
                      Ranking
                    </span>
                    <span className="text-[#c41e3a] font-heading font-bold">
                      {fighter.ranking}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-800" />

      {/* Bio */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <p className="text-gray-400 leading-relaxed text-base">{fighter.bio}</p>

          {fighter.instagram && (
            <a
              href={fighter.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#c41e3a] hover:text-white font-heading text-xs tracking-widest uppercase mt-8 transition-colors"
            >
              <Instagram size={16} />
              Follow on Instagram
            </a>
          )}
        </div>
      </section>

      {/* Championships */}
      {fighter.titles && fighter.titles.length > 0 && (
        <>
          <div className="h-px bg-gray-800" />
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="font-heading font-bold text-xs tracking-widest uppercase text-gray-500 mb-8">
              Championships &amp; Titles
            </h2>
            <ul className="flex flex-col gap-3 max-w-2xl">
              {fighter.titles.map((title, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[2px] text-[#d4a017] text-sm">🏆</span>
                  <span className="font-heading text-white text-sm tracking-wide">
                    {title}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}

      {/* Related Media */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="font-heading font-bold text-4xl uppercase text-white mb-8 opacity-20">
          Fight Gallery
        </h2>
        <div className="grid grid-cols-3 gap-[2px]">
          {fighter.gallery.map((src, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] relative overflow-hidden group aspect-[4/3]"
            >
              <img
                src={src}
                alt={`${fighter.name} — fight photo ${i + 1}`}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer nav */}
      <section className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading font-bold text-3xl uppercase text-white mb-2">
            {fighter.name}
          </h3>
          <div className="flex justify-center gap-6 mt-6">
            <Link
              href="/"
              className="text-gray-500 hover:text-white font-heading text-xs tracking-widest uppercase transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#fighters"
              className="text-gray-500 hover:text-white font-heading text-xs tracking-widest uppercase transition-colors"
            >
              All Fighters
            </Link>
            <Link
              href="/#events"
              className="text-gray-500 hover:text-white font-heading text-xs tracking-widest uppercase transition-colors"
            >
              Events
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
