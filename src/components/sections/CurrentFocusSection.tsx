"use client";

import React from "react";
import { CURRENT_FOCUS } from "@/data/portfolioData";
import { ArrowUpRight, Compass, Sparkles, Terminal } from "lucide-react";

export const CurrentFocusSection: React.FC = () => {
  return (
    <section className="py-28 border-t border-white/[0.06] bg-cosmos-void relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-soft uppercase tracking-widest">
            <span>// 05 ACTIVE HORIZON</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-silver-pure tracking-[-0.03em]">
            What I'm exploring now.
          </h2>
          <p className="text-sm sm:text-base text-silver-muted font-light leading-relaxed">
            Deliberate algorithmic sharpening on LeetCode, deep dives into AI-powered architectures, and preparation for postgraduate engineering admissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CURRENT_FOCUS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-cosmos-card/70 border border-white/[0.08] hover:border-indigo-bright/40 transition-all duration-300 group flex flex-col justify-between backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-laser animate-pulse" />
                    <span className="text-xs font-mono text-cyan-soft">
                      {item.status}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-silver-dark">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-silver-pure group-hover:text-indigo-bright transition-colors tracking-tight">
                  {item.topic}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-silver-muted leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <div className="mt-8 pt-4 border-t border-white/[0.06]">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-indigo-bright hover:text-white transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentFocusSection;
