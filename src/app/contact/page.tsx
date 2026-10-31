import React from "react";
import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import { MapPin, Mail, Sparkles, FileText, ArrowUpRight, Github, Linkedin, Twitter, Code2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Contact & Communication Channels",
  description:
    "Get in touch with Chetan Palta — AI + Full-Stack Developer available for software engineering roles, technical collaboration, and academic discussions.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <ContactSection />

        {/* Detailed Channel Breakdown */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10">
          <div className="p-6 rounded-2xl bg-[#10121A] border border-white/5 space-y-3">
            <h3 className="font-heading font-semibold text-lg text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent-blue" />
              <span>Professional Availability</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#9A9EAA] leading-relaxed">
              Actively exploring AI + Full-Stack Developer opportunities, software engineering internships, and preparing for postgraduate computer science studies. Based in Ludhiana, Punjab, India (IST time zone).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#10121A] border border-white/5 space-y-3">
            <h3 className="font-heading font-semibold text-lg text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-accent-cyan" />
              <span>Resume & Verification</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#9A9EAA] leading-relaxed">
              A comprehensive single-page PDF containing verified academic credentials, technical skills, and commercial deliverables is available for immediate download.
            </p>
            <div className="pt-2">
              <a
                href="/resume/chetan-palta-resume.pdf"
                download="Chetan_Palta_Resume.pdf"
                className="inline-flex items-center gap-2 text-xs font-mono text-accent-blue hover:text-white transition-colors"
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

