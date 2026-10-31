"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, ArrowUpRight, Github, Linkedin, Twitter, Code2, Send } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import Magnet from "../effects/Magnet";
import StarBorder from "../effects/StarBorder";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5 bg-[#08090D] relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-accent-blue/15 to-transparent blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-cyan uppercase tracking-widest mb-4">
          <span>// GET IN TOUCH</span>
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F5F5F7] tracking-tight">
          Let's create something meaningful.
        </h2>

        <p className="mt-6 text-[#9A9EAA] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Open to full-stack engineering roles, AI product discussions, collaboration on open-source initiatives, or postgraduate admissions dialogues.
        </p>

        {/* Email Action Card */}
        <div className="mt-12 max-w-xl mx-auto p-4 sm:p-6 rounded-2xl border border-white/10 bg-[#10121A] shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-3 rounded-xl bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-[#5E6375] uppercase">
                Direct Inquiries
              </div>
              <div className="text-sm sm:text-base font-mono text-[#F5F5F7] font-medium">
                {PERSONAL_INFO.email}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#9A9EAA] hover:text-white transition-all"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Engineering%20Inquiry%20-%20Chetan%20Palta`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent-blue hover:bg-accent-blue/90 text-white text-xs font-mono transition-all font-medium"
            >
              <span>Send Mail</span>
              <Send className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Social Link Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141722] hover:bg-[#1A1E2D] border border-white/10 text-[#9A9EAA] hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-accent-blue" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[#5E6375]" />
          </a>

          <a
            href={PERSONAL_INFO.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141722] hover:bg-[#1A1E2D] border border-white/10 text-[#9A9EAA] hover:text-white transition-colors"
          >
            <Code2 className="w-3.5 h-3.5 text-accent-cyan" />
            <span>LeetCode</span>
            <ArrowUpRight className="w-3 h-3 text-[#5E6375]" />
          </a>

          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141722] hover:bg-[#1A1E2D] border border-white/10 text-[#9A9EAA] hover:text-white transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-400" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-[#5E6375]" />
          </a>

          <a
            href={PERSONAL_INFO.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141722] hover:bg-[#1A1E2D] border border-white/10 text-[#9A9EAA] hover:text-white transition-colors"
          >
            <Twitter className="w-3.5 h-3.5 text-sky-400" />
            <span>X (Twitter)</span>
            <ArrowUpRight className="w-3 h-3 text-[#5E6375]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

