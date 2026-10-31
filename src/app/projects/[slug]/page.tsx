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
    <div className="pt-32 pb-24 min-h-screen bg-cosmos-void">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-indigo-bright hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects Archive</span>
          </Link>

          {/* Status Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.04] border border-white/[0.08]">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: project.statusColor }}
            />
            <span className="text-silver-pure">{project.status}</span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="space-y-6 pb-10 border-b border-white/[0.08]">
          <div className="text-xs font-mono text-cyan-soft uppercase tracking-widest">
            // {project.category}
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-silver-pure tracking-[-0.03em] leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-2xl text-cyan-soft font-mono">
            {project.tagline}
          </p>

          <p className="text-base sm:text-lg text-silver-muted leading-relaxed max-w-3xl font-light">
            {project.longDescription}
          </p>

          {/* Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-cosmos-card border border-white/[0.06]">
              <span className="text-[11px] font-mono text-silver-dark uppercase block mb-1">
                Role
              </span>
              <span className="text-xs sm:text-sm font-medium text-silver-pure">
                {project.role}
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-cosmos-card border border-white/[0.06]">
              <span className="text-[11px] font-mono text-silver-dark uppercase block mb-1">
                Timeline
              </span>
              <span className="text-xs sm:text-sm font-medium text-silver-pure">
                {project.timeline}
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-cosmos-card border border-white/[0.06]">
              <span className="text-[11px] font-mono text-silver-dark uppercase block mb-1">
                Deployment
              </span>
              <span className="text-xs sm:text-sm font-medium text-silver-pure">
                {project.status}
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-cosmos-card border border-white/[0.06]">
              <span className="text-[11px] font-mono text-silver-dark uppercase block mb-1">
                Verified Deliverable
              </span>
              <span className="text-xs sm:text-sm font-medium text-emerald-400">
                100% Authentic
              </span>
            </div>
          </div>

          {/* Direct CTA links */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-electric hover:bg-indigo-bright text-white text-xs font-mono font-medium transition-colors shadow-[0_0_20px_rgba(99,102,241,0.3)]"
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-mono font-medium transition-colors"
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
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cosmos-card hover:bg-cosmos-elevated border border-white/10 text-white text-xs font-mono transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-soft" />
                <span>View Source on GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Specific Status Callouts */}
        {project.slug === "aluminio" && (
          <div className="p-7 rounded-3xl bg-sky-950/20 border border-sky-500/30 text-xs sm:text-sm text-silver-muted space-y-2 backdrop-blur-md">
            <div className="flex items-center gap-2 text-sky-400 font-mono font-semibold">
              <ExternalLink className="w-4 h-4" />
              <span>Preview Deployment Status Notice</span>
            </div>
            <p className="font-light leading-relaxed">
              Chetan independently designed and engineered the complete web application, translating physical brochures into modern responsive web views. Main corporate domain integration remains pending; the application is fully accessible via its verified Cloudflare Pages preview URL.
            </p>
          </div>
        )}

        {project.slug === "resuone" && (
          <div className="p-7 rounded-3xl bg-amber-950/20 border border-amber-500/30 text-xs sm:text-sm text-silver-muted space-y-2 backdrop-blur-md">
            <div className="flex items-center gap-2 text-amber-400 font-mono font-semibold">
              <AlertTriangle className="w-4 h-4" />
              <span>Honest Status Notice: Maintenance & Cloud Limits</span>
            </div>
            <p className="font-light leading-relaxed">
              The previous backend cloud hosting service exhausted its tier limits, leading to intermittent availability. Rather than masking the issue, Chetan has documented the architectural post-mortem and an active containerization migration roadmap.
            </p>
          </div>
        )}

        {project.slug === "qrhythm" && (
          <div className="p-7 rounded-3xl bg-purple-950/20 border border-purple-500/30 text-xs sm:text-sm text-silver-muted space-y-2 backdrop-blur-md">
            <div className="flex items-center gap-2 text-purple-400 font-mono font-semibold">
              <Code2 className="w-4 h-4" />
              <span>Project Status: In Active Repository Development</span>
            </div>
            <p className="font-light leading-relaxed">
              QRhythm is currently staged in active local development and tracked via GitHub. It has not yet been deployed to a public URL. All code and specifications are documented in the open-source repository.
            </p>
          </div>
        )}

        {/* Key Engineering Deliverables & Highlights */}
        <div className="space-y-6">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-silver-pure tracking-tight">
            Key Engineering Highlights & Architectural Contributions
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {project.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-3.5 p-5 rounded-2xl bg-cosmos-card border border-white/[0.06]"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-soft shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-silver-muted leading-relaxed font-light">
                  {h}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Specs (if defined) */}
        {project.architecture && (
          <div className="space-y-6 pt-4">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-silver-pure tracking-tight">
              System Architecture & Infrastructure
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-5 rounded-2xl bg-cosmos-card border border-white/[0.06] space-y-1">
                <span className="text-silver-dark uppercase block">
                  Frontend Layer
                </span>
                <span className="text-silver-pure">
                  {project.architecture.frontend}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-cosmos-card border border-white/[0.06] space-y-1">
                <span className="text-silver-dark uppercase block">
                  Backend Services
                </span>
                <span className="text-silver-pure">
                  {project.architecture.backend}
                </span>
              </div>

              {project.architecture.database && (
                <div className="p-5 rounded-2xl bg-cosmos-card border border-white/[0.06] space-y-1">
                  <span className="text-silver-dark uppercase block">
                    Data Persistence
                  </span>
                  <span className="text-silver-pure">
                    {project.architecture.database}
                  </span>
                </div>
              )}

              <div className="p-5 rounded-2xl bg-cosmos-card border border-white/[0.06] space-y-1">
                <span className="text-silver-dark uppercase block">
                  Hosting & Edge Delivery
                </span>
                <span className="text-silver-pure">
                  {project.architecture.hosting}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Technologies Applied */}
        <div className="space-y-4 pt-4">
          <h2 className="font-heading font-bold text-xl text-silver-pure">
            Technologies & Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-cosmos-elevated text-silver-pure border border-white/[0.06]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="pt-12 border-t border-white/[0.08] flex items-center justify-between">
          <Link
            href="/work"
            className="text-xs font-mono text-silver-muted hover:text-white transition-colors"
          >
            ← All Engineering Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-mono text-indigo-bright hover:text-white transition-colors"
          >
            <span>Discuss this project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
