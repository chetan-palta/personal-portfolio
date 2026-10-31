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
    <section className="py-24 border-t border-white/5 bg-[#08090D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-accent-blue uppercase tracking-widest mb-3">
            <span>// TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#F5F5F7] tracking-tight">
            Categorized Technical Stack.
          </h2>
          <p className="mt-3 text-[#9A9EAA] text-base">
            Disciplined tooling for building frontend interfaces, backend APIs, machine learning pipelines, and relational database systems.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK.map((cat, idx) => (
            <div
              key={cat.category}
              className="rounded-2xl border border-white/10 bg-[#10121A] p-6 hover:border-accent-blue/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                  <h3 className="font-heading font-semibold text-base text-[#F5F5F7]">
                    {cat.category}
                  </h3>
                  <span className="font-mono text-xs text-accent-cyan">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs text-[#9A9EAA] mb-4">
                  {cat.description}
                </p>

                <div className="space-y-2.5">
                  {cat.skills.map((skill) => {
                    const IconComponent = ICON_MAP[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-[#141722] border border-white/5 hover:border-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <IconComponent className="w-3.5 h-3.5 text-accent-blue" />
                          <span className="text-xs font-medium text-[#F5F5F7]">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#58D8F0]/80">
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

