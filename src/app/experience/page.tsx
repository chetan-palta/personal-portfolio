import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  CheckCircle2,
  ExternalLink,
  Layers,
  Server,
  Code,
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
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-accent-blue uppercase tracking-widest mb-3">
            <span>// PROFESSIONAL EXPERIENCE</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F7] tracking-tight">
            Commercial Software Engineering.
          </h1>
          <p className="mt-4 text-[#9A9EAA] text-lg leading-relaxed">
            Hands-on commercial delivery. Building client-facing enterprise software from zero to live production deployment.
          </p>
        </div>

        {/* Primary Role Breakdown */}
        <div className="rounded-2xl border border-white/10 bg-[#10121A] p-8 lg:p-12 space-y-10 shadow-2xl">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-white/5 gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active Internship</span>
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#F5F5F7]">
                {exp.company}
              </h2>
              <div className="text-lg text-accent-blue font-medium">
                {exp.role}
              </div>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-3 text-xs font-mono text-[#9A9EAA]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent-cyan" />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-cyan" />
                <span>{exp.location}</span>
              </div>
              <a
                href="https://shivaglassgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue/10 hover:bg-accent-blue/20 text-accent-blue border border-accent-blue/30 transition-colors"
              >
                <span>Live Site (shivaglassgroup.com)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Core Contribution Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#141722] border border-white/5 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-white">
                Full-Stack Architecture
              </h3>
              <p className="text-xs text-[#9A9EAA] leading-relaxed">
                Single-handedly developed both frontend catalog interfaces and backend service APIs from scratch using React, TypeScript, and Node.js.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#141722] border border-white/5 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-accent-cyan/10 text-accent-cyan flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-white">
                SEO & Technical Visibility
              </h3>
              <p className="text-xs text-[#9A9EAA] leading-relaxed">
                Structured canonical tagging, JSON-LD Schema.org product vocabulary, dynamic sitemaps, and optimized asset loading for search engine indexing.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#141722] border border-white/5 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <BarChart2 className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-white">
                Analytics & Governance
              </h3>
              <p className="text-xs text-[#9A9EAA] leading-relaxed">
                Configured Google Analytics 4 event triggers to capture user interactions, inquiry submissions, and mobile device behavioral funnels.
              </p>
            </div>
          </div>

          {/* Deep Technical Responsibilities */}
          <div className="space-y-6 pt-4">
            <h3 className="font-heading font-bold text-xl text-[#F5F5F7]">
              Detailed Engineering Responsibilities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exp.responsibilities.map((resp, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#141722] border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#9A9EAA] leading-relaxed">
                    {resp}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Takeaways & Case Study Link */}
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#58D8F0]">
              Authentic commercial project · Built from the ground up
            </div>
            <Link
              href="/projects/shiva-glass"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-blue hover:bg-accent-blue/90 text-white text-xs font-mono font-medium transition-colors w-fit"
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

