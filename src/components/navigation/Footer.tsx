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
import Magnet from "../effects/Magnet";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#08090D] relative overflow-hidden">
      {/* Subtle top glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 max-w-4xl bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Identity column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C8CFF] to-[#58D8F0] p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#08090D] rounded-[7px] flex items-center justify-center">
                  <span className="font-heading font-bold text-xs text-[#F5F5F7]">
                    CP
                  </span>
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-[#F5F5F7] tracking-tight">
                CHETAN PALTA
              </span>
            </div>

            <p className="text-sm text-[#9A9EAA] max-w-sm leading-relaxed">
              Software developer focused on AI + Full-Stack engineering,
              transforming real-world ideas into reliable, high-performance
              digital products.
            </p>

            <div className="pt-2 flex flex-col gap-1.5 text-xs font-mono text-[#9A9EAA]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Ludhiana, Punjab, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
                <span>Software Development Intern @ Shiva Glass Group</span>
              </div>
              <div className="flex items-center gap-2 text-[#58D8F0]">
                <span>BCA @ Guru Nanak Dev Engineering College · CGPA 8.7</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F5F5F7] block">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-[#9A9EAA]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About & Education
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="hover:text-white transition-colors"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="hover:text-white transition-colors"
                >
                  Commercial Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/engineering"
                  className="hover:text-white transition-colors"
                >
                  Engineering & DSA
                </Link>
              </li>
              <li>
                <Link
                  href="/journal"
                  className="hover:text-white transition-colors"
                >
                  Technical Journal
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Profiles & Direct Contact */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F5F5F7] block">
              Verified Profiles
            </span>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#141722] border border-white/10 hover:border-accent-blue/40 text-[#9A9EAA] hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-accent-blue" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#141722] border border-white/10 hover:border-accent-blue/40 text-[#9A9EAA] hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>LeetCode</span>
                </div>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#141722] border border-white/10 hover:border-accent-blue/40 text-[#9A9EAA] hover:text-white transition-all group"
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
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#141722] border border-white/10 hover:border-accent-blue/40 text-[#9A9EAA] hover:text-white transition-all group"
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
                className="flex items-center gap-2 text-xs font-mono text-accent-blue hover:text-accent-cyan transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#5E6375]">
          <div>
            © {currentYear} Chetan Palta. Built with Next.js, TypeScript & React
            Bits.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/resume/chetan-palta-resume.pdf"
              download="Chetan_Palta_Resume.pdf"
              className="text-[#9A9EAA] hover:text-white flex items-center gap-1 transition-colors"
            >
              <FileText className="w-3 h-3" />
              <span>Resume PDF</span>
            </a>
            <span>•</span>
            <span className="text-[#58D8F0]/80">
              Graduating BCA June 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

