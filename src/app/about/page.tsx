import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Users,
  MapPin,
  Calendar,
  FileText,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { PERSONAL_INFO, EDUCATION, EXPERIENCE } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "About & Academic Track Record",
  description:
    "Learn about Chetan Palta — education at Guru Nanak Dev Engineering College (CGPA 8.7), leadership at Computonics Club, and commercial software internship at Shiva Glass Group.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-cosmos-void">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Top Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-soft uppercase tracking-widest">
            <span>// IDENTITY & ACADEMIC CREDENTIALS</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-silver-pure tracking-[-0.03em] leading-tight">
            Engineering with curiosity, discipline & precision.
          </h1>
          <p className="text-base sm:text-xl text-silver-muted font-light leading-relaxed">
            I am an early-career AI + Full-Stack developer based in India, building practical commercial web applications while completing my undergraduate degree in computer applications.
          </p>
        </div>

        {/* Bio + Portrait Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Portrait card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-white/[0.08] bg-cosmos-card p-4 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-cosmos-deep">
                <Image
                  src={PERSONAL_INFO.profileImagePath}
                  alt="Chetan Palta portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-center filter grayscale-[10%] contrast-[105%]"
                />
              </div>

              <div className="mt-4 p-4 rounded-xl bg-cosmos-elevated/70 border border-white/[0.05] space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-silver-pure">
                  <span>Status:</span>
                  <span className="text-emerald-400">Available for Opportunities</span>
                </div>
                <div className="flex items-center justify-between text-silver-muted">
                  <span>Current Role:</span>
                  <span className="text-silver-pure">Intern @ Shiva Glass Group</span>
                </div>
                <div className="flex items-center justify-between text-silver-muted">
                  <span>Graduation:</span>
                  <span className="text-cyan-soft">June 2026 (BCA)</span>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href="/resume/chetan-palta-resume.pdf"
                  download="Chetan_Palta_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-electric hover:bg-indigo-bright text-white text-xs font-mono font-medium transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Verified Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Narrative bio */}
          <div className="lg:col-span-7 space-y-6 text-silver-muted leading-relaxed text-base font-light">
            <h2 className="font-heading font-bold text-2xl text-silver-pure tracking-tight">
              Philosophy & Professional Direction
            </h2>

            {PERSONAL_INFO.aboutBio.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            <div className="p-8 rounded-3xl bg-cosmos-card border border-white/[0.08] space-y-5">
              <h3 className="font-heading font-bold text-lg text-silver-pure flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-soft" />
                <span>Leadership & Technical Governance</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-bright shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-silver-pure font-semibold">
                      Technical Head at Computonics Club, GNDEC:
                    </strong>{" "}
                    Organized student developer workshops, algorithmic challenges, and hands-on coding seminars.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-bright shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-silver-pure font-semibold">
                      Student Co-ordinator at Training & Placement Cell:
                    </strong>{" "}
                    Assisted university recruitment drives and initiated the Resuone standardization project to improve ATS resume compliance for candidates.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-bright shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-silver-pure font-semibold">
                      Competitive Tech Quizzing:
                    </strong>{" "}
                    Secured podium ranks in 5+ institute-level computer science competitions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="pt-8 space-y-10">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-soft uppercase tracking-widest">
              <span>// ACADEMIC TRACK RECORD</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-silver-pure tracking-tight">
              Education & Academic Milestones.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div
                key={edu.degree}
                className="rounded-3xl border border-white/[0.08] bg-cosmos-card p-7 hover:border-indigo-bright/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-4">
                    <span className="text-xs font-mono text-cyan-soft">
                      {edu.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-indigo-electric/15 text-indigo-bright border border-indigo-bright/25">
                      {edu.grade}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-silver-pure">
                    {edu.degree}
                  </h3>

                  <div className="text-xs font-mono text-silver-muted mt-1">
                    {edu.institution}
                  </div>

                  <div className="text-xs text-silver-dark flex items-center gap-1 mt-1 font-mono">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-2">
                    {edu.highlights.map((h, i) => (
                      <p key={i} className="text-xs text-silver-muted leading-relaxed font-light">
                        • {h}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
