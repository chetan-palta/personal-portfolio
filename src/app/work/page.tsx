"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, ArrowRight, Filter } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";

export default function WorkPage() {
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    "Commercial Production",
    "AI & ML",
    "Full-Stack",
    "Computer Vision",
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Commercial Production")
      return p.category.includes("Commercial") || p.category.includes("Architectural");
    if (filter === "AI & ML")
      return p.category.includes("Machine Learning") || p.category.includes("AI");
    if (filter === "Full-Stack")
      return p.category.includes("Platform") || p.category.includes("Real-Time");
    if (filter === "Computer Vision")
      return p.category.includes("Vision");
    return true;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen bg-cosmos-void">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-soft uppercase tracking-widest">
            <span>// COMPLETE PROJECT ARCHIVE</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-silver-pure tracking-[-0.03em] leading-tight">
            Engineering & Product Work.
          </h1>
          <p className="text-base sm:text-xl text-silver-muted font-light leading-relaxed">
            Detailed archive of commercial deliverables, open-source AI tooling, academic applications, and algorithmic experiments.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-white/[0.06]">
          <span className="text-xs font-mono text-silver-dark mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-indigo-bright" />
            <span>Filter:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                filter === cat
                  ? "bg-indigo-electric text-white font-medium shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                  : "bg-cosmos-card text-silver-muted hover:text-white border border-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project, idx: number) => (
            <div
              key={project.slug}
              className="p-8 sm:p-10 rounded-3xl bg-cosmos-card/80 border border-white/[0.08] hover:border-indigo-bright/50 transition-all duration-300 flex flex-col justify-between backdrop-blur-md group"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                  <span className="text-xs font-mono text-cyan-soft">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/[0.08]">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: project.statusColor }}
                    />
                    <span className="text-silver-pure">{project.status}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="font-heading font-black text-2xl sm:text-3xl text-silver-pure group-hover:text-indigo-bright transition-colors tracking-tight">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h2>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-silver-muted hover:text-white transition-colors"
                          title="GitHub Repository"
                        >
                          <Github className="w-4 h-4 text-indigo-bright" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-cyan-soft hover:text-white transition-colors"
                          title="Live Application"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.previewUrl && (
                        <a
                          href={project.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-sky-400 hover:text-white transition-colors"
                          title="Preview Deployment"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs font-mono text-cyan-soft/80">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-silver-muted leading-relaxed font-light pt-2">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-cosmos-elevated/70 border border-white/[0.05] text-xs font-mono text-silver-muted space-y-1">
                  <div>ROLE: {project.role}</div>
                  <div>TIMELINE: {project.timeline}</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-silver-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-bright hover:text-white transition-colors shrink-0"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
