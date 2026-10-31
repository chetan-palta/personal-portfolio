"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, Code2, ArrowRight, ShieldCheck, AlertCircle, Clock } from "lucide-react";
import SpotlightCard from "../effects/SpotlightCard";
import DecryptedText from "../effects/DecryptedText";
import { PROJECTS, Project } from "@/data/portfolioData";

export const SelectedWorkSection: React.FC = () => {
  return (
    <section id="selected-work" className="py-24 border-t border-white/5 bg-[#08090D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3">
              <span>// PORTFOLIO</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#F5F5F7] tracking-tight">
              Selected Engineering Work.
            </h2>
            <p className="mt-3 text-[#9A9EAA] text-base max-w-xl">
              Commercial production platforms, academic systems, machine learning pipelines, and technical tools built with modern engineering practices.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141722] hover:bg-[#1A1E2D] border border-white/10 hover:border-accent-blue/40 text-xs font-mono text-white transition-all w-fit"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-accent-blue" />
          </Link>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project: Project, idx: number) => {
            const isFullSpan = idx === 0;

            return (
              <div
                key={project.slug}
                className={isFullSpan ? "lg:col-span-2" : "lg:col-span-1"}
              >
                <SpotlightCard className="h-full p-8 flex flex-col justify-between">
                  <div>
                    {/* Top Status & Category bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/5">
                      <div className="flex items-center gap-2 font-mono text-xs text-[#9A9EAA]">
                        <span className="text-accent-blue font-semibold">
                          0{idx + 1}
                        </span>
                        <span>/</span>
                        <span>{project.category}</span>
                      </div>

                      {/* Status indicator */}
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: project.statusColor }}
                        />
                        <span className="text-[#F5F5F7]">{project.status}</span>
                      </div>
                    </div>

                    {/* Project Title & Tagline */}
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#F5F5F7] hover:text-accent-blue transition-colors">
                          <Link href={`/projects/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h3>

                        {/* Direct Links */}
                        <div className="flex items-center gap-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#9A9EAA] hover:text-white transition-colors"
                              title="View GitHub Repository"
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
                              title="Visit Live Application"
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
                              title="View Preview Deployment"
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

                    {/* Role & Key highlights */}
                    <div className="mt-6 p-4 rounded-xl bg-[#10121A] border border-white/5 space-y-2 text-xs">
                      <div className="flex items-center justify-between font-mono text-[#9A9EAA]">
                        <span>ROLE: {project.role}</span>
                        <span>TIMELINE: {project.timeline}</span>
                      </div>
                      <div className="text-[#F5F5F7] leading-relaxed pt-1">
                        {project.highlights[0]}
                      </div>
                    </div>
                  </div>

                  {/* Footer: Tech tags + Case Study Link */}
                  <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-[#9A9EAA]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 rounded-md text-[11px] font-mono text-[#5E6375]">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-blue hover:text-accent-cyan transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorkSection;

