"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, FileText, MapPin, Terminal, Compass } from "lucide-react";
import CosmosCanvas from "../effects/CosmosCanvas";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-cosmos-void selection:bg-indigo-bright/30">
      {/* LAYER 0: Ambient Background Atmosphere (Always visible CSS nebula glow) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.25), transparent 70%), radial-gradient(circle at 80% 60%, rgba(139, 92, 246, 0.12), transparent 50%), radial-gradient(circle at 20% 70%, rgba(34, 211, 238, 0.1), transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* LAYER 1: Interactive 3D WebGL Cosmos Canvas (Graceful WebGL + CSS fallback) */}
      <CosmosCanvas className="absolute inset-0 z-[1]" />

      {/* LAYER 2: Subtle cosmic micro-grid mask */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] z-[2] cosmic-noise"
        aria-hidden="true"
      />

      {/* LAYER 10: HERO CONTENT (100% visible immediately, zero opacity:0 dependency) */}
      
      {/* 1. Top Telemetry Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-b border-white/[0.08] text-xs font-mono">
          {/* Status signal */}
          <div className="flex items-center gap-2.5 text-silver-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-soft opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-laser" />
            </span>
            <span className="text-silver-pure font-semibold tracking-tight">CHETAN PALTA</span>
            <span className="text-white/20">/</span>
            <span className="text-cyan-soft">AI + FULL-STACK DEVELOPER</span>
          </div>

          {/* Coordinates & Commercial Role */}
          <div className="hidden sm:flex items-center gap-5 text-white/50 text-[11px]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-indigo-bright" />
              <span>30.9010° N, 75.8573° E // INDIA</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="text-silver-muted">
              SOFTWARE DEV INTERN @ SHIVA GLASS GROUP
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Centerpiece: Monumental Editorial Typography & Portrait Composition */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Monumental Headline, Statement & CTAs */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cosmos-card/90 border border-white/[0.1] text-[11px] font-mono text-cyan-soft backdrop-blur-md shadow-lg">
                <Terminal className="w-3.5 h-3.5 text-indigo-bright" />
                <span>DIGITAL ARCHITECTURE & INTELLIGENT SYSTEMS</span>
              </div>

              {/* Monumental, unglitched, clean display typography */}
              <h1 className="font-heading font-black text-5xl sm:text-7xl md:text-8xl lg:text-[7.25rem] tracking-[-0.04em] text-silver-pure leading-[0.92] drop-shadow-2xl">
                <span className="block text-silver-pure">I BUILD</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-silver-pure via-indigo-bright to-cyan-soft">
                  DIGITAL
                </span>
                <span className="block text-silver-pure">EXPERIENCES.</span>
              </h1>
            </div>

            {/* Supporting Statement */}
            <p className="text-lg sm:text-xl md:text-2xl text-silver-muted max-w-2xl font-light leading-relaxed">
              Exploring the intersection of{" "}
              <span className="text-silver-pure font-normal">software engineering</span>{" "}
              and <span className="text-cyan-soft font-normal">intelligent systems</span>.
            </p>

            {/* Action Matrix */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href="#selected-work"
                className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-silver-pure text-cosmos-void font-bold tracking-wide transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                <span>EXPLORE SELECTED WORK</span>
                <ArrowDown className="w-4 h-4 text-indigo-electric group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="/resume/chetan-palta-resume.pdf"
                download="Chetan_Palta_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-cosmos-card hover:bg-cosmos-elevated border border-white/10 hover:border-indigo-bright/50 text-silver-pure transition-all backdrop-blur-md shadow-lg"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-bright" />
                <span>RESUME (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-silver-dark" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-silver-muted hover:text-silver-pure border border-white/[0.08] transition-all"
              >
                <span>GET IN TOUCH →</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Integration */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] group">
              {/* Outer atmospheric aura */}
              <div
                className="absolute -inset-2 rounded-3xl bg-gradient-to-b from-indigo-bright/30 via-violet-soft/20 to-transparent blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700"
                aria-hidden="true"
              />

              {/* Obsidian Editorial Card */}
              <div className="relative rounded-2xl bg-cosmos-card border border-white/10 p-3 shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Portrait Frame with subtle vignette */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-cosmos-deep">
                  <Image
                    src={PERSONAL_INFO.profileImagePath}
                    alt="Chetan Palta portrait"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 340px"
                    className="object-cover object-center filter grayscale-[8%] contrast-[108%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  />
                  {/* Bottom shadow overlay for integrated typography */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmos-void via-transparent to-transparent opacity-85" />

                  {/* Overlaid Editorial Metadata */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-cosmos-void/85 border border-white/10 backdrop-blur-md text-xs font-mono space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-silver-pure font-bold tracking-tight">
                        Chetan Palta
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-soft/10 text-cyan-soft border border-cyan-soft/20 font-semibold">
                        CGPA 8.7
                      </span>
                    </div>
                    <div className="text-[11px] text-silver-muted flex items-center justify-between">
                      <span>BCA Graduating 2026</span>
                      <span className="text-indigo-bright">GNDEC</span>
                    </div>
                  </div>
                </div>

                {/* Sub-card engineering footer */}
                <div className="mt-3 px-2 py-1 flex items-center justify-between text-[11px] font-mono text-silver-dark">
                  <span>SHIVA GLASS INTERN</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE PRODUCTION
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Telemetry Breadcrumbs */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-silver-dark border-t border-white/[0.06] pt-4">
          <div className="flex items-center gap-4">
            <span className="text-silver-muted">[01] PRODUCTION SYSTEMS</span>
            <span>•</span>
            <span className="text-silver-muted">[02] PRODUCT DEVELOPMENT</span>
            <span>•</span>
            <span className="text-silver-muted">[03] INTELLIGENT SYSTEMS</span>
          </div>

          <div className="flex items-center gap-2 text-cyan-soft/80">
            <Compass className="w-3.5 h-3.5 animate-spin-very-slow text-indigo-bright" />
            <span>SCROLL TO EXPLORE COSMOS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
