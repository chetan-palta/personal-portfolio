"use client";

import React from "react";
import Link from "next/link";
import {
  Briefcase,
  CheckCircle2,
  ExternalLink,
  Calendar,
  MapPin,
  ArrowRight,
  Code2,
  Search,
  BarChart3,
  Layers,
  Terminal,
} from "lucide-react";
import { EXPERIENCE } from "@/data/portfolioData";

export const ExperienceSection: React.FC = () => {
  const exp = EXPERIENCE[0];

  return (
    <section className="py-28 border-t border-white/[0.06] bg-cosmos-void relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-indigo-electric/10 rounded-full blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-soft uppercase tracking-widest">
            <span>// 03 COMMERCIAL INFRASTRUCTURE</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-silver-pure tracking-[-0.03em]">
            Commercial Experience.
          </h2>
          <p className="text-sm sm:text-base text-silver-muted font-light leading-relaxed">
            Real commercial delivery. Architecting, coding, and deploying production-grade web systems for enterprise operations.
          </p>
        </div>

        {/* Major Flagship Experience Card */}
        <div className="rounded-3xl bg-cosmos-card/80 border border-white/[0.08] p-8 sm:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Subtle top indicator border */}
          <div
            className="pointer-events-none absolute top-0 left-0 w-32 h-[2px] bg-gradient-to-r from-indigo-bright to-cyan-soft"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Organization & Meta */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>ACTIVE COMMERCIAL ROLE</span>
              </div>

              <div>
                <h3 className="font-heading font-black text-3xl sm:text-4xl text-silver-pure tracking-tight">
                  {exp.company}
                </h3>
                <div className="text-lg text-indigo-bright font-medium mt-1">
                  {exp.role}
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono text-silver-muted">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-cyan-soft" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-soft" />
                  <span>{exp.location} ({exp.type})</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-silver-muted font-light leading-relaxed">
                {exp.summary}
              </p>

              <div className="pt-2">
                <a
                  href="https://shivaglassgroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-electric/15 hover:bg-indigo-electric/25 text-indigo-bright border border-indigo-bright/30 text-xs font-mono transition-colors"
                >
                  <span>Visit Production Site (shivaglassgroup.com)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Architectural Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <h4 className="font-heading font-bold text-xl text-silver-pure pb-3 border-b border-white/[0.06]">
                Engineering Responsibilities & Systems Ownership
              </h4>

              <div className="grid grid-cols-1 gap-3.5">
                {exp.responsibilities.map((resp, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-cosmos-elevated/70 border border-white/[0.05] hover:border-white/10 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-soft shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-silver-muted leading-relaxed">
                      {resp}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies Applied */}
              <div className="pt-4">
                <span className="text-[11px] font-mono text-silver-dark uppercase tracking-wider block mb-2.5">
                  Applied Technology Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-silver-pure border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-white/[0.06]">
                <span className="text-xs font-mono text-cyan-soft">
                  Full-stack implementation from zero to production
                </span>
                <Link
                  href="/projects/shiva-glass"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-bright hover:text-white transition-colors"
                >
                  <span>Read In-Depth Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
