"use client";

import React from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Code2,
  Mail,
  ArrowUpRight,
  FileText,
  MapPin,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-cosmos-void relative overflow-hidden">
      {/* Subtle top laser border */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 max-w-4xl bg-gradient-to-r from-transparent via-indigo-bright/50 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Identity column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-bright via-violet-soft to-cyan-laser p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-cosmos-void rounded-[7px] flex items-center justify-center">
                  <span className="font-heading font-black text-xs text-silver-pure">
                    CP
                  </span>
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-silver-pure tracking-tight">
                CHETAN PALTA
              </span>
            </div>

            <p className="text-sm text-silver-muted max-w-sm leading-relaxed font-light">
              AI + Full-Stack Developer engineering practical digital products, intelligent systems, and scalable web architectures.
            </p>

            <div className="pt-2 flex flex-col gap-1.5 text-xs font-mono text-silver-muted">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-soft" />
                <span>Ludhiana, Punjab, India (30.9010° N, 75.8573° E)</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-indigo-bright" />
                <span>Software Development Intern @ Shiva Glass Group</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-soft">
                <span>Guru Nanak Dev Engineering College · BCA CGPA 8.7</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-silver-pure block">
              Navigation
            </span>
            <ul className="space-y-2 text-sm font-mono text-silver-muted">
              <li>
                <Link href="/" className="hover:text-silver-pure transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-silver-pure transition-colors">
                  About & Academics
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-silver-pure transition-colors">
                  Featured Work
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-silver-pure transition-colors">
                  Commercial Experience
                </Link>
              </li>
              <li>
                <Link href="/engineering" className="hover:text-silver-pure transition-colors">
                  Engineering & DSA
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-silver-pure transition-colors">
                  Engineering Journal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-silver-pure transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-silver-pure block">
              Verified Telemetry
            </span>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-cosmos-card border border-white/[0.08] hover:border-indigo-bright/50 text-silver-muted hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-indigo-bright" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-cosmos-card border border-white/[0.08] hover:border-cyan-soft/50 text-silver-muted hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-cyan-soft" />
                  <span>LeetCode</span>
                </div>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-cosmos-card border border-white/[0.08] hover:border-blue-400/50 text-silver-muted hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-cosmos-card border border-white/[0.08] hover:border-sky-400/50 text-silver-muted hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Twitter className="w-3.5 h-3.5 text-sky-400" />
                  <span>X / Twitter</span>
                </div>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-xs font-mono text-indigo-bright hover:text-cyan-soft transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-silver-dark">
          <div>
            © {currentYear} Chetan Palta · Digital Cosmos Engineering Portfolio.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/resume/chetan-palta-resume.pdf"
              download="Chetan_Palta_Resume.pdf"
              className="text-silver-muted hover:text-white flex items-center gap-1 transition-colors"
            >
              <FileText className="w-3 h-3" />
              <span>Resume PDF</span>
            </a>
            <span>•</span>
            <span className="text-cyan-soft/80">Graduating BCA June 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
