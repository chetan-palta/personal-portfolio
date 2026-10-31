"use client";

import React from "react";
import { THREE_PILLARS } from "@/data/portfolioData";
import { Terminal, Layers, Cpu, ArrowUpRight, CheckCircle2 } from "lucide-react";

const ICONS = [Terminal, Layers, Cpu];

export const PillarsSection: React.FC = () => {
  return (
    <section className="py-28 border-t border-white/[0.06] bg-cosmos-void relative overflow-hidden">
      {/* Subtle background cosmic flare */}
      <div
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-electric/10 rounded-full blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-soft uppercase tracking-widest">
              <span>// 01 ARCHITECTURAL MANIFESTO</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-silver-pure tracking-[-0.03em] leading-tight">
              Three pillars of modern digital engineering.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-silver-muted leading-relaxed font-light">
            Software should not merely function; it should feel intentional, mathematically disciplined, and resilient in commercial production.
          </p>
        </div>

        {/* Asymmetrical High-End Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {THREE_PILLARS.map((pillar, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            const isFlagship = idx === 0;

            return (
              <div
                key={pillar.number}
                className={`${
                  isFlagship
                    ? "lg:col-span-12 xl:col-span-5 bg-gradient-to-br from-cosmos-card via-cosmos-card to-cosmos-elevated border-indigo-bright/30 shadow-[0_0_50px_rgba(99,102,241,0.08)]"
                    : "lg:col-span-6 xl:col-span-3.5 bg-cosmos-card/70"
                } relative rounded-3xl border border-white/[0.08] p-8 lg:p-10 flex flex-col justify-between group hover:border-indigo-bright/50 transition-all duration-500 backdrop-blur-md`}
              >
                <div>
                  {/* Top metadata strip */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06] font-mono text-xs">
                    <span className="text-cyan-soft font-bold tracking-wider">
                      {pillar.number} // FOUNDATION
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/[0.04] text-silver-pure group-hover:text-indigo-bright group-hover:bg-indigo-bright/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-silver-pure group-hover:text-indigo-bright transition-colors tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-xs font-mono text-cyan-soft/80">
                    {pillar.subtitle}
                  </p>

                  <p className="mt-5 text-sm sm:text-base text-silver-muted leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-white/[0.06]">
                  <div className="text-[11px] font-mono text-silver-dark uppercase tracking-wider mb-3">
                    Applied Disciplines
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-silver-muted border border-white/[0.05] group-hover:border-white/10 group-hover:text-silver-pure transition-colors"
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyan-soft" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
