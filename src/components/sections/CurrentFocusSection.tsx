"use client";

import React from "react";
import { CURRENT_FOCUS } from "@/data/portfolioData";
import { ArrowUpRight, Compass, Sparkles } from "lucide-react";

export const CurrentFocusSection: React.FC = () => {
  return (
    <section className="py-24 border-t border-white/5 bg-[#08090D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3">
            <span>// ACTIVE ROADMAP</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#F5F5F7] tracking-tight">
            What I'm exploring now.
          </h2>
          <p className="mt-3 text-[#9A9EAA] text-base">
            Areas of deliberate technical exploration, algorithmic practice, and postgraduate academic preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CURRENT_FOCUS.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl border border-white/10 bg-[#10121A] hover:border-accent-blue/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                    <span className="text-xs font-mono text-accent-cyan">
                      {item.status}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#5E6375]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-lg text-[#F5F5F7] group-hover:text-accent-blue transition-colors">
                  {item.topic}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#9A9EAA] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <div className="mt-6 pt-4 border-t border-white/5">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-blue hover:text-white transition-colors"
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

