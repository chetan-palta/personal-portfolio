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
import DecryptedText from "@/components/effects/DecryptedText";
import Magnet from "@/components/effects/Magnet";

export const metadata: Metadata = {
  title: "About & Academic Track Record",
  description:
    "Learn about Chetan Palta — education at Guru Nanak Dev Engineering College (CGPA 8.7), leadership at Computonics Club, and commercial software internship.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Top Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-accent-blue uppercase tracking-widest mb-3">
            <span>// IDENTITY & BACKGROUND</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F7] tracking-tight">
            Engineering digital experiences with curiosity & discipline.
          </h1>
          <p className="mt-4 text-[#9A9EAA] text-lg leading-relaxed">
            I am an early-career AI + Full-Stack developer based in India, building practical commercial web applications while completing my undergraduate degree in computer applications.
          </p>
        </div>

        {/* Bio + Portrait Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Portrait card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/10 bg-[#10121A] p-4 shadow-2xl">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#141722]">
                <Image
                  src={PERSONAL_INFO.profileImagePath}
                  alt="Chetan Palta portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-center"
                />
              </div>

              <div className="mt-4 p-3 rounded-xl bg-[#141722] border border-white/5 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-[#F5F5F7]">
                  <span>Status:</span>
                  <span className="text-emerald-400">Available for Opportunities</span>
                </div>
                <div className="flex items-center justify-between text-[#9A9EAA]">
                  <span>Current Role:</span>
                  <span className="text-white">Intern @ Shiva Glass Group</span>
                </div>
                <div className="flex items-center justify-between text-[#9A9EAA]">
                  <span>Graduation:</span>
                  <span className="text-[#58D8F0]">June 2026 (BCA)</span>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href="/resume/chetan-palta-resume.pdf"
                  download="Chetan_Palta_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-accent-blue hover:bg-accent-blue/90 text-white text-xs font-mono font-medium transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Verified Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Narrative bio */}
          <div className="lg:col-span-7 space-y-6 text-[#9A9EAA] leading-relaxed text-base">
            <h2 className="font-heading font-bold text-2xl text-[#F5F5F7]">
              Philosophy & Professional Direction
            </h2>

            {PERSONAL_INFO.aboutBio.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            <div className="p-6 rounded-2xl bg-[#10121A] border border-white/10 space-y-4">
              <h3 className="font-heading font-semibold text-lg text-[#F5F5F7] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-cyan" />
                <span>Leadership & Technical Governance</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F5F5F7]">
                      Technical Head at Computonics Club, GNDEC:
                    </strong>{" "}
                    Organized student developer bootcamps, algorithmic challenges, and hands-on coding seminars.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F5F5F7]">
                      Student Co-ordinator at Training & Placement Cell:
                    </strong>{" "}
                    Assisted university recruitment drives and initiated the Resuone standardization project to improve ATS resume compliance for candidates.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F5F5F7]">
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
        <div className="pt-8 space-y-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan uppercase tracking-widest mb-2">
              <span>// ACADEMIC CREDENTIALS</span>
            </div>
            <h2 className="font-heading font-bold text-3xl text-[#F5F5F7]">
              Education & Academic Milestones.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div
                key={edu.degree}
                className="rounded-2xl border border-white/10 bg-[#10121A] p-6 hover:border-accent-blue/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                    <span className="text-xs font-mono text-accent-blue">
                      {edu.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-accent-blue/10 text-accent-cyan border border-accent-blue/20">
                      {edu.grade}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#F5F5F7]">
                    {edu.degree}
                  </h3>

                  <div className="text-xs font-mono text-[#9A9EAA] mt-1">
                    {edu.institution}
                  </div>

                  <div className="text-xs text-[#5E6375] flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                    {edu.highlights.map((h, i) => (
                      <p key={i} className="text-xs text-[#9A9EAA] leading-relaxed">
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

