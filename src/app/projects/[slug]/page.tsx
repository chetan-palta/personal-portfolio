import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Layers,
  Server,
  Database,
  Cpu,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import SpotlightCard from "@/components/effects/SpotlightCard";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Case Study & Architecture`,
    description: project.description,
  };
}

export default function ProjectCaseStudyPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-accent-blue hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects Archive</span>
          </Link>

          {/* Status Badge */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: project.statusColor }}
            />
            <span className="text-[#F5F5F7]">{project.status}</span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="space-y-6 pb-8 border-b border-white/10">
          <div className="text-xs font-mono text-accent-cyan uppercase tracking-widest">
            // {project.category}
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F7] tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#58D8F0] font-mono">
            {project.tagline}
          </p>

          <p className="text-base sm:text-lg text-[#9A9EAA] leading-relaxed max-w-3xl">
            {project.longDescription}
          </p>

          {/* Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-[#10121A] border border-white/5">
              <span className="text-[11px] font-mono text-[#5E6375] uppercase block mb-1">
                Role
              </span>
              <span className="text-xs sm:text-sm font-medium text-white">
                {project.role}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#10121A] border border-white/5">
              <span className="text-[11px] font-mono text-[#5E6375] uppercase block mb-1">
                Timeline
              </span>
              <span className="text-xs sm:text-sm font-medium text-white">
                {project.timeline}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#10121A] border border-white/5">
              <span className="text-[11px] font-mono text-[#5E6375] uppercase block mb-1">
                Deployment
              </span>
              <span className="text-xs sm:text-sm font-medium text-white">
                {project.status}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#10121A] border border-white/5">
              <span className="text-[11px] font-mono text-[#5E6375] uppercase block mb-1">
                Verified Deliverable
              </span>
              <span className="text-xs sm:text-sm font-medium text-emerald-400">
                100% Authentic
              </span>
            </div>
          </div>

          {/* Direct CTA links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-blue hover:bg-accent-blue/90 text-white text-xs font-mono font-medium transition-colors"
              >
                <span>Visit Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.previewUrl && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-mono font-medium transition-colors"
              >
                <span>View Preview Deployment (Domain Pending)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141722] hover:bg-[#1A1E2D] border border-white/10 text-white text-xs font-mono transition-colors"
              >
                <Github className="w-4 h-4 text-accent-cyan" />
                <span>View Source on GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Specific Status Callouts */}
        {project.slug === "aluminio" && (
          <div className="p-6 rounded-2xl bg-sky-950/20 border border-sky-500/30 text-xs sm:text-sm text-[#9A9EAA] space-y-2">
            <div className="flex items-center gap-2 text-sky-400 font-mono font-semibold">
              <ExternalLink className="w-4 h-4" />
              <span>Preview Deployment Status Notice</span>
            </div>
            <p>
              Chetan independently designed and engineered the complete web application, translating physical brochures into modern responsive web views. Main corporate domain integration remains pending; the application is fully accessible via its verified Cloudflare Pages preview URL.
            </p>
          </div>
        )}

        {project.slug === "resuone" && (
          <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-xs sm:text-sm text-[#9A9EAA] space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-mono font-semibold">
              <AlertTriangle className="w-4 h-4" />
              <span>Honest Status Notice: Maintenance & Cloud Limits</span>
            </div>
            <p>
              The previous backend cloud hosting service exhausted its tier limits, leading to intermittent availability. Rather than masking the issue, Chetan has documented the architectural post-mortem and an active containerization migration roadmap.
            </p>
          </div>
        )}

        {project.slug === "qrhythm" && (
          <div className="p-6 rounded-2xl bg-purple-950/20 border border-purple-500/30 text-xs sm:text-sm text-[#9A9EAA] space-y-2">
            <div className="flex items-center gap-2 text-purple-400 font-mono font-semibold">
              <Code2 className="w-4 h-4" />
              <span>Project Status: In Active Repository Development</span>
            </div>
            <p>
              QRhythm is currently staged in active local development and tracked via GitHub. It has not yet been deployed to a public URL. All code and specifications are documented in the open-source repository.
            </p>
          </div>
        )}

        {/* Key Engineering Deliverables & Highlights */}
        <div className="space-y-6">
          <h2 className="font-heading font-bold text-2xl text-white">
            Key Engineering Highlights & Architectural Contributions
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {project.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#10121A] border border-white/5"
              >
                <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#9A9EAA] leading-relaxed">
                  {h}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Specs (if defined) */}
        {project.architecture && (
          <div className="space-y-6 pt-4">
            <h2 className="font-heading font-bold text-2xl text-white">
              System Architecture & Infrastructure
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-[#10121A] border border-white/5 space-y-1">
                <span className="text-[#5E6375] uppercase block">
                  Frontend Layer
                </span>
                <span className="text-white">
                  {project.architecture.frontend}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#10121A] border border-white/5 space-y-1">
                <span className="text-[#5E6375] uppercase block">
                  Backend Services
                </span>
                <span className="text-white">
                  {project.architecture.backend}
                </span>
              </div>

              {project.architecture.database && (
                <div className="p-4 rounded-xl bg-[#10121A] border border-white/5 space-y-1">
                  <span className="text-[#5E6375] uppercase block">
                    Data Persistence
                  </span>
                  <span className="text-white">
                    {project.architecture.database}
                  </span>
                </div>
              )}

              <div className="p-4 rounded-xl bg-[#10121A] border border-white/5 space-y-1">
                <span className="text-[#5E6375] uppercase block">
                  Hosting & Edge Delivery
                </span>
                <span className="text-white">
                  {project.architecture.hosting}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Technologies Applied */}
        <div className="space-y-4 pt-4">
          <h2 className="font-heading font-bold text-xl text-white">
            Technologies & Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#141722] text-[#F5F5F7] border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="pt-12 border-t border-white/10 flex items-center justify-between">
          <Link
            href="/work"
            className="text-xs font-mono text-[#9A9EAA] hover:text-white transition-colors"
          >
            ← All Engineering Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-blue hover:text-white transition-colors"
          >
            <span>Discuss this project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

