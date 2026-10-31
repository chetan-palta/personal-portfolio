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
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-accent-blue uppercase tracking-widest mb-3">
            <span>// TECHNICAL WRITING & NOTES</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F7] tracking-tight">
            Engineering Journal.
          </h1>
          <p className="mt-4 text-[#9A9EAA] text-lg leading-relaxed">
            Observations, architectural post-mortems, and practical implementation lessons learned while shipping real-world software.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="p-8 rounded-2xl border border-white/10 bg-[#10121A] hover:border-accent-blue/40 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-4 border-b border-white/5">
                <div className="flex items-center gap-4 text-xs font-mono text-[#9A9EAA]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent-blue" />
                    <span>{article.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-[#9A9EAA]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <h2 className="font-heading font-bold text-2xl text-[#F5F5F7] group-hover:text-accent-blue transition-colors">
                  <Link href={`/journal/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-sm text-[#9A9EAA] leading-relaxed max-w-4xl">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-[#58D8F0]">
                  Engineering Essay
                </span>
                <Link
                  href={`/journal/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-blue hover:text-white transition-colors"
                >
                  <span>Read Article</span>
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

