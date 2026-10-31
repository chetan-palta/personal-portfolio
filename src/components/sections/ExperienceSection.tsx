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
  Code,
  ShieldAlert,
} from "lucide-react";
import { EXPERIENCE } from "@/data/portfolioData";
import DecryptedText from "../effects/DecryptedText";

export const ExperienceSection: React.FC = () => {
  const exp = EXPERIENCE[0];

  return (
    <section className="py-24 border-t border-white/5 bg-[#08090D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-accent-blue uppercase tracking-widest mb-3">
            <span>// COMMERCIAL TRACK RECORD</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#F5F5F7] tracking-tight">
            Commercial Experience.
          </h2>
          <p className="mt-3 text-[#9A9EAA] text-base">
            Practical development delivering production-grade web systems for enterprise operations.
          </p>
        </div>

        {/* Shiva Glass Group In-Depth Card */}
        <div className="relative rounded-2xl border border-white/10 bg-[#10121A] p-8 lg:p-12 overflow-hidden shadow-2xl hover:border-accent-blue/40 transition-all duration-300">
          {/* Subtle background glow */}
          <div
            className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Organization & Meta */}
            <div className="lg:col-span-4 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Current Role</span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#F5F5F7]">
                  {exp.company}
                </h3>
                <div className="text-base text-accent-blue font-medium mt-1">
                  {exp.role}
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono text-[#9A9EAA]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>{exp.location} ({exp.type})</span>
                </div>
              </div>

              <p className="text-sm text-[#9A9EAA] leading-relaxed">
                {exp.summary}
              </p>

              <div className="pt-2">
                <a
                  href="https://shivaglassgroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue/10 hover:bg-accent-blue/20 text-accent-blue border border-accent-blue/30 text-xs font-mono transition-colors"
                >
                  <span>Visit shivaglassgroup.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Engineering Responsibilities & Verified Deliverables */}
            <div className="lg:col-span-8 space-y-6">
              <h4 className="font-heading font-semibold text-lg text-[#F5F5F7] pb-3 border-b border-white/5">
                Key Engineering Responsibilities & Deliverables
              </h4>

              <div className="grid grid-cols-1 gap-3.5">
                {exp.responsibilities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#141722]/80 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#9A9EAA] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies Applied */}
              <div className="pt-4">
                <span className="text-xs font-mono text-[#5E6375] uppercase tracking-wider block mb-2">
                  Technology Stack Applied
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-[#F5F5F7] border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Case study deep-dive link */}
              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs font-mono text-[#58D8F0]">
                  Verified commercial development from scratch
                </span>
                <Link
                  href="/projects/shiva-glass"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-blue hover:text-white transition-colors"
                >
                  <span>Deep Dive Case Study</span>
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

