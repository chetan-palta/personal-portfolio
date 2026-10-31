"use client";

import React from "react";
import { THREE_PILLARS } from "@/data/portfolioData";
import DecryptedText from "../effects/DecryptedText";
import FadeContent from "../effects/FadeContent";
import { Terminal, Layers, Cpu, CheckCircle2 } from "lucide-react";

const ICONS = [Terminal, Layers, Cpu];

export const PillarsSection: React.FC = () => {
  return (
    <section className="py-24 border-t border-white/5 bg-[#08090D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-accent-blue uppercase tracking-widest mb-3">
            <span>// ARCHITECTURAL FOUNDATION</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#F5F5F7] tracking-tight">
            Engineered across three foundational disciplines.
          </h2>
          <p className="mt-4 text-[#9A9EAA] text-base leading-relaxed">
            Bridging rigorous computer science fundamentals with commercial delivery. Every project is approached through the dual lens of engineering reliability and intelligent capability.
          </p>
        </div>

        {/* Distinctive Asymmetric Pillars Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {THREE_PILLARS.map((pillar, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            const isFeatured = idx === 0;

            return (
              <div
                key={pillar.number}
                className={`${
                  isFeatured
                    ? "lg:col-span-12 xl:col-span-5 bg-gradient-to-br from-[#141722] to-[#10121A] border-accent-blue/30"
                    : "lg:col-span-6 xl:col-span-3.5 bg-[#10121A]"
                } relative rounded-2xl border border-white/10 p-7 hover:border-accent-blue/50 transition-all duration-300 group flex flex-col justify-between`}
              >
                <div>
                  {/* Pillar Telemetry Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5 font-mono text-xs">
                    <span className="text-accent-cyan font-bold tracking-wider">
                      <DecryptedText
                        text={`${pillar.number} // DISCIPLINE`}
                        speed={35}
                        animateOn="view"
                      />
                    </span>
                    <div className="p-2 rounded-lg bg-white/5 text-[#F5F5F7] group-hover:text-accent-blue group-hover:bg-accent-blue/10 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#F5F5F7] group-hover:text-accent-blue transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-xs font-mono text-[#58D8F0]">
                    {pillar.subtitle}
                  </p>

                  <p className="mt-4 text-sm text-[#9A9EAA] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <div className="text-[11px] font-mono text-[#5E6375] uppercase tracking-wider mb-2">
                    Core Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#141722] text-[#9A9EAA] border border-white/5 group-hover:border-white/10 group-hover:text-white transition-colors"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-accent-blue" />
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

