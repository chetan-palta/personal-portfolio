"use client";

import React from "react";
import { TECH_STACK } from "@/data/portfolioData";
import {
  Code2,
  Cpu,
  FileCode,
  FileCheck,
  Atom,
  Layers,
  Palette,
  Layout,
  Server,
  Network,
  Send,
  Database,
  Boxes,
  Flame,
  Zap,
  Brain,
  Table,
  Eye,
  BookOpen,
  GitBranch,
  Globe,
  Cloud,
  Terminal,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Cpu,
  FileCode,
  FileCheck,
  Atom,
  Layers,
  Palette,
  Layout,
  Server,
  Network,
  Send,
  Database,
  Boxes,
  Flame,
  Zap,
  Brain,
  Table,
  Eye,
  BookOpen,
  GitBranch,
  Globe,
  Cloud,
  Terminal,
};

export const TechStackSection: React.FC = () => {
  return (
    <section className="py-28 border-t border-white/[0.06] bg-cosmos-void relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-soft uppercase tracking-widest">
            <span>// 04 TECHNICAL ARSENAL</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-silver-pure tracking-[-0.03em]">
            Categorized Technical Arsenal.
          </h2>
          <p className="text-sm sm:text-base text-silver-muted font-light leading-relaxed">
            Proficiencies across software engineering fundamentals, full-stack web platforms, machine learning pipelines, and relational database systems.
          </p>
        </div>

        {/* Categories Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK.map((cat, idx) => (
            <div
              key={cat.category}
              className="rounded-3xl bg-cosmos-card/70 border border-white/[0.08] p-7 hover:border-indigo-bright/40 transition-all duration-300 flex flex-col justify-between backdrop-blur-md group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-4">
                  <h3 className="font-heading font-bold text-lg text-silver-pure group-hover:text-indigo-bright transition-colors">
                    {cat.category}
                  </h3>
                  <span className="font-mono text-xs text-cyan-soft">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs text-silver-muted mb-5 leading-relaxed font-light">
                  {cat.description}
                </p>

                <div className="space-y-2.5">
                  {cat.skills.map((skill) => {
                    const IconComponent = ICON_MAP[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-3 rounded-xl bg-cosmos-elevated/60 border border-white/[0.04] hover:border-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-4 h-4 text-indigo-bright" />
                          <span className="text-xs font-medium text-silver-pure">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-cyan-soft/80">
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
