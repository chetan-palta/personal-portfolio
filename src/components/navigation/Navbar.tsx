"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, FileText, Sparkles } from "lucide-react";

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
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cosmos-void/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-bright via-violet-soft to-cyan-laser p-[1px] flex items-center justify-center">
              <div className="w-full h-full bg-cosmos-void rounded-[7px] flex items-center justify-center">
                <span className="font-heading font-black text-xs tracking-wider text-silver-pure">
                  CP
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold tracking-tight text-silver-pure text-base group-hover:text-indigo-bright transition-colors">
                CHETAN PALTA
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono text-cyan-soft bg-cyan-soft/10 px-2 py-0.5 rounded-full border border-cyan-soft/20">
                COSMOS
              </span>
            </div>
          </Link>

          {/* Desktop Floating Pill Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-cosmos-card/80 border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-xl shadow-lg">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wide transition-all rounded-full ${
                    isActive
                      ? "text-silver-pure bg-white/10 shadow-sm"
                      : "text-silver-muted hover:text-silver-pure hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/resume/chetan-palta-resume.pdf"
              download="Chetan_Palta_Resume.pdf"
              className="group flex items-center gap-2 px-4 py-2 text-xs font-mono text-silver-pure bg-cosmos-card hover:bg-cosmos-elevated border border-white/10 hover:border-indigo-bright/50 rounded-xl transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-bright group-hover:scale-110 transition-transform" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-silver-dark group-hover:text-indigo-bright group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="/resume/chetan-palta-resume.pdf"
              download="Chetan_Palta_Resume.pdf"
              className="p-2 text-xs text-silver-muted hover:text-white bg-cosmos-card border border-white/10 rounded-lg"
              title="Download Resume"
            >
              <FileText className="w-4 h-4 text-indigo-bright" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-silver-muted hover:text-white bg-cosmos-card border border-white/10 rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-indigo-bright" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cosmos-void/95 border-b border-white/10 backdrop-blur-2xl px-6 pt-4 pb-6 mt-3 space-y-3">
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
                  className={`block px-3 py-2 text-xs font-mono rounded-lg transition-all ${
                    isActive
                      ? "text-indigo-bright bg-indigo-bright/10 border border-indigo-bright/20 font-semibold"
                      : "text-silver-muted hover:text-silver-pure bg-cosmos-card/70"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] font-mono text-silver-dark">
              Ludhiana, India (IST)
            </span>
            <a
              href="/resume/chetan-palta-resume.pdf"
              download="Chetan_Palta_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono text-white bg-indigo-electric hover:bg-indigo-bright rounded-lg"
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
