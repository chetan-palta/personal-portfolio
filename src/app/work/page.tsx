"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, ArrowRight, Filter } from "lucide-react";
import SpotlightCard from "@/components/effects/SpotlightCard";
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
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3">
            <span>// COMPLETE PROJECT ARCHIVE</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F7] tracking-tight">
            Engineering & Product Work.
          </h1>
          <p className="mt-4 text-[#9A9EAA] text-lg leading-relaxed">
            Detailed archive of commercial deliverables, open-source AI tooling, academic applications, and algorithmic experiments.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-white/5">
          <span className="text-xs font-mono text-[#5E6375] mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                filter === cat
                  ? "bg-accent-blue text-white font-medium"
                  : "bg-[#141722] text-[#9A9EAA] hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project, idx: number) => (
            <SpotlightCard
              key={project.slug}
              className="p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/5">
                  <span className="text-xs font-mono text-accent-blue">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: project.statusColor }}
                    />
                    <span className="text-[#F5F5F7]">{project.status}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="font-heading font-bold text-2xl text-[#F5F5F7] hover:text-accent-blue transition-colors">
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
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#9A9EAA] hover:text-white transition-colors"
                          title="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-accent-cyan hover:text-white transition-colors"
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
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-sky-400 hover:text-white transition-colors"
                          title="Preview Deployment"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs font-mono text-[#58D8F0]">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-[#9A9EAA] leading-relaxed pt-2">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-[#10121A] border border-white/5 text-xs font-mono text-[#9A9EAA] space-y-1">
                  <div>ROLE: {project.role}</div>
                  <div>TIMELINE: {project.timeline}</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-[#9A9EAA]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-blue hover:text-white transition-colors shrink-0"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
  );
}

