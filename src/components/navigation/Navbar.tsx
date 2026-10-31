"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import Magnet from "../effects/Magnet";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Experience", href: "/experience" },
  { name: "Engineering", href: "/engineering" },
  { name: "Journal", href: "/journal" },
  { name: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090D]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C8CFF] to-[#58D8F0] p-[1px] flex items-center justify-center">
              <div className="w-full h-full bg-[#08090D] rounded-[7px] flex items-center justify-center">
                <span className="font-heading font-bold text-xs tracking-wider text-[#F5F5F7]">
                  CP
                </span>
              </div>
            </div>
            <div>
              <span className="font-heading font-semibold tracking-tight text-[#F5F5F7] text-base group-hover:text-accent-blue transition-colors">
                CHETAN PALTA
              </span>
              <span className="hidden sm:inline-block ml-2 text-[11px] font-mono text-[#58D8F0] bg-[#58D8F0]/10 px-2 py-0.5 rounded-full border border-[#58D8F0]/20">
                AI + Full-Stack
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#10121A]/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all rounded-full ${
                    isActive
                      ? "text-[#F5F5F7] bg-white/10 shadow-sm"
                      : "text-[#9A9EAA] hover:text-[#F5F5F7] hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Magnet magnetStrength={0.2}>
              <a
                href="/resume/chetan-palta-resume.pdf"
                download="Chetan_Palta_Resume.pdf"
                className="group flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono text-[#F5F5F7] bg-[#141722] hover:bg-[#1A1E2D] border border-white/10 hover:border-accent-blue/40 rounded-lg transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-accent-blue group-hover:scale-110 transition-transform" />
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3 text-[#9A9EAA] group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Magnet>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="/resume/chetan-palta-resume.pdf"
              download="Chetan_Palta_Resume.pdf"
              className="p-2 text-xs text-[#9A9EAA] hover:text-white bg-[#141722] border border-white/10 rounded-lg"
              title="Download Resume"
            >
              <FileText className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#9A9EAA] hover:text-white bg-[#141722] border border-white/10 rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-accent-blue" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08090D]/95 border-b border-white/10 backdrop-blur-xl px-6 pt-4 pb-6 mt-3 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-4">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                    isActive
                      ? "text-accent-blue bg-accent-blue/10 border border-accent-blue/20"
                      : "text-[#9A9EAA] hover:text-[#F5F5F7] bg-[#10121A]/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-[#9A9EAA]">
              Ludhiana, India (IST)
            </span>
            <a
              href="/resume/chetan-palta-resume.pdf"
              download="Chetan_Palta_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono text-white bg-accent-blue hover:bg-accent-blue/90 rounded-lg"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

