import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  CheckCircle2,
  ExternalLink,
  Layers,
  Server,
  Code2,
  ShieldCheck,
  Calendar,
  MapPin,
  ArrowRight,
  Database,
  BarChart2,
  Search,
} from "lucide-react";
import { EXPERIENCE } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Commercial Software Development Experience",
  description:
    "Chetan Palta's commercial software development internship at Shiva Glass Group — architecting enterprise web infrastructure, SEO, and full-stack systems from scratch.",
};

export default function ExperiencePage() {
  const exp = EXPERIENCE[0];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-cosmos-void">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-soft uppercase tracking-widest">
            <span>// PROFESSIONAL EXPERIENCE</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-silver-pure tracking-[-0.03em] leading-tight">
            Commercial Software Engineering.
          </h1>
          <p className="text-base sm:text-xl text-silver-muted font-light leading-relaxed">
            Hands-on commercial delivery. Building client-facing enterprise software from zero to live production deployment.
          </p>
        </div>

        {/* Primary Role Breakdown */}
        <div className="rounded-3xl border border-white/[0.08] bg-cosmos-card p-8 lg:p-12 space-y-10 shadow-2xl backdrop-blur-xl">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-white/[0.06] gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active Commercial Role</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-silver-pure tracking-tight">
                {exp.company}
              </h2>
              <div className="text-lg text-indigo-bright font-medium">
                {exp.role}
              </div>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-3 text-xs font-mono text-silver-muted">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-soft" />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-soft" />
                <span>{exp.location}</span>
              </div>
              <a
                href="https://shivaglassgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-electric/15 hover:bg-indigo-electric/25 text-indigo-bright border border-indigo-bright/30 transition-colors"
              >
                <span>Live Site (shivaglassgroup.com)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Core Contribution Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-cosmos-elevated/70 border border-white/[0.05] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-electric/15 text-indigo-bright flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-silver-pure">
                Full-Stack Architecture
              </h3>
              <p className="text-xs sm:text-sm text-silver-muted leading-relaxed font-light">
                Single-handedly developed both frontend catalog interfaces and backend service APIs from scratch using React, TypeScript, and Node.js.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-cosmos-elevated/70 border border-white/[0.05] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-soft/10 text-cyan-soft flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-silver-pure">
                SEO & Technical Visibility
              </h3>
              <p className="text-xs sm:text-sm text-silver-muted leading-relaxed font-light">
                Structured canonical tagging, JSON-LD Schema.org product vocabulary, dynamic sitemaps, and optimized asset loading for search engine indexing.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-cosmos-elevated/70 border border-white/[0.05] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <BarChart2 className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-silver-pure">
                Analytics & Governance
              </h3>
              <p className="text-xs sm:text-sm text-silver-muted leading-relaxed font-light">
                Configured Google Analytics 4 event triggers to capture user interactions, inquiry submissions, and mobile device behavioral funnels.
              </p>
            </div>
          </div>

          {/* Deep Technical Responsibilities */}
          <div className="space-y-6 pt-4">
            <h3 className="font-heading font-bold text-xl text-silver-pure">
              Detailed Engineering Responsibilities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exp.responsibilities.map((resp, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-cosmos-elevated/70 border border-white/[0.05]"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-soft shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-silver-muted leading-relaxed font-light">
                    {resp}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Takeaways & Case Study Link */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs font-mono text-cyan-soft">
              Authentic commercial project · Built from the ground up
            </div>
            <Link
              href="/projects/shiva-glass"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-electric hover:bg-indigo-bright text-white text-xs font-mono font-medium transition-colors w-fit shadow-[0_0_20px_rgba(99,102,241,0.25)]"
            >
              <span>Explore Complete Shiva Glass Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
