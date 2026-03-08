import { articles } from "@/data/articles";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} — EMX Sports`,
    description: article.summary,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      {/* Hero image */}
      <section className="relative">
        <div className="aspect-[21/9] sm:aspect-[3/1] max-h-[500px] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        </div>
      </section>

      {/* Article content */}
      <section className="relative -mt-24 sm:-mt-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white font-heading text-xs tracking-widest uppercase transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to EMX Sports
          </Link>

          {/* Date */}
          <div className="text-[#c41e3a] font-heading text-xs tracking-[0.25em] uppercase mb-4">
            {article.date}
          </div>

          {/* Title */}
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase text-white leading-[1.05] mb-10">
            {article.title}
          </h1>

          {/* Body */}
          <div className="space-y-5">
            {article.body.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-gray-400 leading-relaxed text-base sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share / tags area */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-wrap gap-3">
              {["EMX Sports", "Boxing", "KOK '128", "Dream Boxing", "DAZN"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-gray-600 font-heading text-[10px] tracking-[0.15em] uppercase bg-white/5 px-3 py-1.5"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <section className="border-t border-gray-800 mt-20 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-6">
            <Link
              href="/"
              className="text-gray-500 hover:text-white font-heading text-xs tracking-widest uppercase transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#articles"
              className="text-gray-500 hover:text-white font-heading text-xs tracking-widest uppercase transition-colors"
            >
              All News
            </Link>
            <Link
              href="/#fighters"
              className="text-gray-500 hover:text-white font-heading text-xs tracking-widest uppercase transition-colors"
            >
              Fighters
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
