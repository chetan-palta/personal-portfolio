"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, ArrowUpRight, Github, Linkedin, Twitter, Code2, Send, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-32 border-t border-white/[0.06] bg-cosmos-void relative overflow-hidden">
      {/* Background Cosmic Horizon Light */}
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-indigo-electric/25 via-violet-deep/15 to-transparent blur-[160px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-soft uppercase tracking-widest">
            <span>// 06 COLLABORATIVE HORIZON</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-silver-pure tracking-[-0.04em] leading-tight">
            Let's create something meaningful.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-silver-muted max-w-2xl mx-auto font-light leading-relaxed">
            Open to software engineering internships, AI product discussions, open-source initiatives, or postgraduate admissions dialogues.
          </p>
        </div>

        {/* Email Direct Interactive Terminal Box */}
        <div className="max-w-xl mx-auto p-5 sm:p-6 rounded-3xl bg-cosmos-card/90 border border-white/[0.1] shadow-2xl backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5 text-left">
            <div className="p-3.5 rounded-2xl bg-indigo-electric/15 text-indigo-bright border border-indigo-bright/25">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-silver-dark uppercase tracking-wider">
                Direct Transmission
              </div>
              <div className="text-sm sm:text-base font-mono text-silver-pure font-semibold">
                {PERSONAL_INFO.email}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-silver-muted hover:text-silver-pure transition-all"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied</span>
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
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-electric hover:bg-indigo-bright text-white text-xs font-mono font-medium transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            >
              <span>Transmit</span>
              <Send className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Verified Social Profile Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 text-xs font-mono">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cosmos-card hover:bg-cosmos-elevated border border-white/[0.08] text-silver-muted hover:text-silver-pure transition-all group"
          >
            <Github className="w-3.5 h-3.5 text-indigo-bright" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-silver-dark group-hover:text-silver-pure" />
          </a>

          <a
            href={PERSONAL_INFO.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cosmos-card hover:bg-cosmos-elevated border border-white/[0.08] text-silver-muted hover:text-silver-pure transition-all group"
          >
            <Code2 className="w-3.5 h-3.5 text-cyan-soft" />
            <span>LeetCode</span>
            <ArrowUpRight className="w-3 h-3 text-silver-dark group-hover:text-silver-pure" />
          </a>

          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cosmos-card hover:bg-cosmos-elevated border border-white/[0.08] text-silver-muted hover:text-silver-pure transition-all group"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-400" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-silver-dark group-hover:text-silver-pure" />
          </a>

          <a
            href={PERSONAL_INFO.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cosmos-card hover:bg-cosmos-elevated border border-white/[0.08] text-silver-muted hover:text-silver-pure transition-all group"
          >
            <Twitter className="w-3.5 h-3.5 text-sky-400" />
            <span>X (Twitter)</span>
            <ArrowUpRight className="w-3 h-3 text-silver-dark group-hover:text-silver-pure" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
