import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Engineering Journal & Technical Articles",
  description:
    "Reflections and technical notes by Chetan Palta on commercial web engineering, SEO architecture, ATS resume systems, and machine learning pipelines.",
};

export default function JournalPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-cosmos-void">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-soft uppercase tracking-widest">
            <span>// TECHNICAL ESSAYS & NOTES</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-silver-pure tracking-[-0.03em] leading-tight">
            Engineering Journal.
          </h1>
          <p className="text-base sm:text-xl text-silver-muted font-light leading-relaxed">
            Observations, architectural post-mortems, and practical implementation lessons learned while shipping real-world software.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="p-8 sm:p-10 rounded-3xl border border-white/[0.08] bg-cosmos-card hover:border-indigo-bright/40 transition-all duration-300 group backdrop-blur-md"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-4 text-xs font-mono text-silver-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-bright" />
                    <span>{article.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-soft" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-silver-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <h2 className="font-heading font-black text-2xl sm:text-3xl text-silver-pure group-hover:text-indigo-bright transition-colors tracking-tight">
                  <Link href={`/journal/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-silver-muted leading-relaxed font-light max-w-4xl">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-soft">
                  Engineering Essay
                </span>
                <Link
                  href={`/journal/${article.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono text-indigo-bright hover:text-white transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
