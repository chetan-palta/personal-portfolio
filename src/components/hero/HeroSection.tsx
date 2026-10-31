"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, FileText, Sparkles, MapPin } from "lucide-react";
import Aurora from "../effects/Aurora";
import Particles from "../effects/Particles";
import DecryptedText from "../effects/DecryptedText";
import ShinyText from "../effects/ShinyText";
import Magnet from "../effects/Magnet";
import StarBorder from "../effects/StarBorder";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* React Bits Aurora and Particles Background */}
      <Aurora className="absolute inset-0 w-full h-full pointer-events-none" />
      <Particles particleCount={30} speed={0.35} />

      {/* Grid overlay mask */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Telemetry Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#141722]/80 border border-white/10 backdrop-blur-md text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <ShinyText
                text="Software Development Intern @ Shiva Glass Group"
                className="text-xs"
              />
            </div>

            {/* Main Editorial Dual Headline with DecryptedText */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-[#F5F5F7] tracking-tight leading-[1.08]">
              <span className="block">
                <DecryptedText
                  text="Building digital products."
                  speed={40}
                  characters="_*/01#~+"
                  animateOn="view"
                />
              </span>
              <span className="block mt-1 bg-gradient-to-r from-accent-blue via-accent-cyan to-white bg-clip-text text-transparent">
                <DecryptedText
                  text="Exploring intelligent systems."
                  speed={45}
                  characters="10_#<>/x"
                  animateOn="view"
                />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#9A9EAA] text-base sm:text-lg max-w-xl leading-relaxed font-sans font-normal">
              I'm <span className="text-[#F5F5F7] font-medium">Chetan Palta</span> — an AI + Full-Stack developer interested in engineering useful products and exploring intelligent technologies.
            </p>

            {/* Metadata Chips */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#9A9EAA] pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                <span>India (Ludhiana)</span>
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
                <span>GNDEC BCA · CGPA 8.7 (2026)</span>
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Magnet magnetStrength={0.25}>
                <StarBorder
                  as="a"
                  href="#selected-work"
                  color="#6C8CFF"
                  className="cursor-pointer"
                >
                  <span className="flex items-center gap-2 text-sm font-medium text-[#F5F5F7]">
                    <span>Selected Work</span>
                    <ArrowDown className="w-4 h-4 text-accent-cyan animate-bounce" />
                  </span>
                </StarBorder>
              </Magnet>

              <Magnet magnetStrength={0.25}>
                <Link
                  href="/about"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141722] hover:bg-[#1A1E2D] border border-white/10 hover:border-accent-blue/40 text-sm font-medium text-[#F5F5F7] transition-all group"
                >
                  <span>About Me</span>
                  <ArrowRight className="w-4 h-4 text-[#9A9EAA] group-hover:text-accent-blue group-hover:translate-x-1 transition-transform" />
                </Link>
              </Magnet>

              <Magnet magnetStrength={0.25}>
                <a
                  href="/resume/chetan-palta-resume.pdf"
                  download="Chetan_Palta_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-transparent hover:bg-white/5 border border-white/10 text-xs font-mono text-[#9A9EAA] hover:text-white transition-all"
                >
                  <FileText className="w-3.5 h-3.5 text-accent-blue" />
                  <span>Resume (PDF)</span>
                </a>
              </Magnet>
            </div>
          </div>

          {/* Right Column: Authentic Profile Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              {/* Subtle back ambient glow */}
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent-blue/30 via-accent-cyan/20 to-transparent blur-xl opacity-50 group-hover:opacity-80 transition duration-500"
                aria-hidden="true"
              />

              {/* Obsidian Profile Card */}
              <div className="relative rounded-2xl border border-white/10 bg-[#10121A] p-3 shadow-2xl overflow-hidden">
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#141722]">
                  <Image
                    src={PERSONAL_INFO.profileImagePath}
                    alt="Chetan Palta - AI + Full-Stack Developer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover object-center filter grayscale-[15%] contrast-[105%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
                  />

                  {/* Gradient bottom scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-transparent opacity-80" />

                  {/* Monospaced Floating Badges */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-lg bg-[#08090D]/85 border border-white/10 backdrop-blur-md text-xs font-mono">
                    <div>
                      <div className="text-white font-semibold">Chetan Palta</div>
                      <div className="text-[11px] text-[#58D8F0]">
                        AI + Full-Stack Engineering
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-[#9A9EAA]">CGPA</div>
                      <div className="text-xs font-bold text-emerald-400">8.7 / 10</div>
                    </div>
                  </div>
                </div>

                {/* Sub-card engineering footer */}
                <div className="mt-3 px-2 py-1 flex items-center justify-between text-[11px] font-mono text-[#9A9EAA]">
                  <span>GNDEC Ludhiana (2026)</span>
                  <span className="text-accent-blue">Shiva Glass Intern</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

