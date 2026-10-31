import React from "react";
import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import { MapPin, Mail, Sparkles, FileText, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Contact & Communication Channels",
  description:
    "Get in touch with Chetan Palta — AI + Full-Stack Developer available for software engineering roles, technical collaboration, and academic discussions.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-cosmos-void">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <ContactSection />

        {/* Detailed Channel Breakdown */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-white/[0.08]">
          <div className="p-8 rounded-3xl bg-cosmos-card border border-white/[0.08] space-y-3 backdrop-blur-md">
            <h3 className="font-heading font-bold text-lg text-silver-pure flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-bright" />
              <span>Professional Availability</span>
            </h3>
            <p className="text-xs sm:text-sm text-silver-muted leading-relaxed font-light">
              Actively exploring AI + Full-Stack Developer opportunities, software engineering internships, and preparing for postgraduate computer science studies. Based in Ludhiana, Punjab, India (IST time zone).
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-cosmos-card border border-white/[0.08] space-y-3 backdrop-blur-md">
            <h3 className="font-heading font-bold text-lg text-silver-pure flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-soft" />
              <span>Resume & Verification</span>
            </h3>
            <p className="text-xs sm:text-sm text-silver-muted leading-relaxed font-light">
              A comprehensive single-page PDF containing verified academic credentials, technical skills, and commercial deliverables is available for immediate download.
            </p>
            <div className="pt-3">
              <a
                href="/resume/chetan-palta-resume.pdf"
                download="Chetan_Palta_Resume.pdf"
                className="inline-flex items-center gap-2 text-xs font-mono text-indigo-bright hover:text-white transition-colors"
              >
                <span>Download Resume (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
