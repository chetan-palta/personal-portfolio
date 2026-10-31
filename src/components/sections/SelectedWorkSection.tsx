"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, ArrowRight, Layers, Sparkles } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";

export const SelectedWorkSection: React.FC = () => {
  return (
    <section id="selected-work" className="py-28 border-t border-white/[0.06] bg-cosmos-void relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/3 right-0 w-[500px] h-[500px] bg-violet-deep/10 rounded-full blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-soft uppercase tracking-widest">
              <span>// 02 FEATURED ARTIFACTS</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-silver-pure tracking-[-0.03em]">
              Featured Engineering Work.
            </h2>
            <p className="text-sm sm:text-base text-silver-muted font-light leading-relaxed max-w-2xl">
              Commercial enterprise systems, predictive machine learning pipelines, and academic placement tooling built for real-world reliability.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cosmos-card hover:bg-cosmos-elevated border border-white/10 hover:border-indigo-bright/50 text-xs font-mono text-silver-pure transition-all w-fit"
          >
            <span>VIEW COMPLETE ARCHIVE (7)</span>
            <ArrowRight className="w-3.5 h-3.5 text-indigo-bright" />
          </Link>
        </div>

        {/* Large Cinematic Projects Showcase */}
        <div className="space-y-12">
          {PROJECTS.map((project: Project, idx: number) => {
            const isFlagship = project.slug === "shiva-glass";

            return (
              <div
                key={project.slug}
                className="group relative rounded-3xl bg-cosmos-card/80 border border-white/[0.08] hover:border-indigo-bright/40 transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-2xl"
              >
                {/* Top ambient highlight line */}
                <div
                  className="pointer-events-none absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-bright/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                />

                <div className="p-8 sm:p-10 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left: Project Narrative & Metadata */}
                    <div className="lg:col-span-7 space-y-6">
                      {/* Telemetry Index & Category */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06] text-xs font-mono">
                        <div className="flex items-center gap-2 text-silver-dark">
                          <span className="text-cyan-soft font-bold">0{idx + 1}</span>
                          <span>/</span>
                          <span className="text-silver-muted uppercase tracking-wider">
                            {project.category}
                          </span>
                        </div>

                        {/* Status Badge */}
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: project.statusColor }}
                          />
                          <span className="text-silver-pure font-medium">
                            {project.status}
                          </span>
                        </div>
                      </div>

                      {/* Title & Tagline */}
                      <div className="space-y-2">
                        <h3 className="font-heading font-black text-3xl sm:text-4xl text-silver-pure group-hover:text-indigo-bright transition-colors tracking-tight">
                          <Link href={`/projects/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h3>
                        <p className="text-xs sm:text-sm font-mono text-cyan-soft">
                          {project.tagline}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-silver-muted leading-relaxed font-light">
                        {project.description}
                      </p>

                      {/* Role & Timeline Strip */}
                      <div className="p-4 rounded-2xl bg-cosmos-elevated/70 border border-white/[0.05] text-xs font-mono text-silver-muted flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <span className="text-silver-dark">ROLE: </span>
                          <span className="text-silver-pure font-medium">{project.role}</span>
                        </div>
                        <div>
                          <span className="text-silver-dark">TIMELINE: </span>
                          <span className="text-cyan-soft font-medium">{project.timeline}</span>
                        </div>
                      </div>

                      {/* Tech stack pill row */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-silver-muted border border-white/[0.05]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="pt-4 flex flex-wrap items-center gap-4">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-electric hover:bg-indigo-bright text-white text-xs font-mono font-medium transition-colors"
                        >
                          <span>Case Study Deep Dive</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-silver-pure text-xs font-mono border border-white/[0.08] transition-colors"
                          >
                            <span>Live Production</span>
                            <ExternalLink className="w-3.5 h-3.5 text-cyan-soft" />
                          </a>
                        )}

                        {project.previewUrl && (
                          <a
                            href={project.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-silver-pure text-xs font-mono border border-white/[0.08] transition-colors"
                          >
                            <span>Preview Deployment</span>
                            <ExternalLink className="w-3.5 h-3.5 text-cyan-soft" />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-silver-pure text-xs font-mono border border-white/[0.08] transition-colors"
                          >
                            <Github className="w-3.5 h-3.5 text-indigo-bright" />
                            <span>Repository</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right: Large Featured Composition Preview Panel */}
                    <div className="lg:col-span-5">
                      <div className="relative aspect-[4/3] w-full rounded-2xl bg-cosmos-deep border border-white/10 p-6 flex flex-col justify-between overflow-hidden group-hover:border-indigo-bright/50 transition-colors">
                        {/* Decorative visual cosmic grid */}
                        <div
                          className="pointer-events-none absolute inset-0 opacity-[0.06] cosmic-noise"
                          aria-hidden="true"
                        />
                        <div
                          className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 bg-indigo-bright/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"
                          aria-hidden="true"
                        />

                        {/* Visual Card Header */}
                        <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                          <span className="text-silver-dark flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-soft" />
                            <span>{project.slug.toUpperCase()}</span>
                          </span>
                          <span className="text-[11px] text-silver-muted px-2 py-0.5 rounded bg-white/[0.05]">
                            {project.role.split(" ")[0]}
                          </span>
                        </div>

                        {/* Centerpiece Monogram / Wireframe Visualization */}
                        <div className="relative z-10 my-auto py-8 text-center space-y-3">
                          <div className="font-heading font-black text-4xl sm:text-5xl text-white/10 tracking-widest uppercase select-none group-hover:text-indigo-bright/30 transition-colors">
                            {project.slug.replace("-", " ")}
                          </div>
                          <p className="text-xs font-mono text-silver-muted/80 max-w-xs mx-auto">
                            {project.highlights[0]}
                          </p>
                        </div>

                        {/* Bottom Telemetry Footer */}
                        <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/[0.06] text-[11px] font-mono text-silver-dark">
                          <span>DEPLOYED ON {project.architecture?.hosting?.split(" ")[0] || "CLOUD"}</span>
                          <span className="text-emerald-400 font-semibold">VERIFIED</span>
                        </div>
                      </div>
                    </div>
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

export default SelectedWorkSection;
