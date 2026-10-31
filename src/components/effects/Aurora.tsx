"use client";

import React, { useEffect, useState } from "react";

interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  className?: string;
  children?: React.ReactNode;
}

export const Aurora: React.FC<AuroraProps> = ({
  colorStops = ["#6C8CFF", "#58D8F0", "#3B82F6"],
  amplitude = 1.0,
  className = "",
  children,
}) => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Aurora Mesh */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 blur-[90px]"
        aria-hidden="true"
      >
        <div
          className={`absolute -top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#6C8CFF] to-transparent opacity-60 ${
            reducedMotion ? "" : "animate-pulse-slow"
          }`}
          style={{
            transform: `translate3d(0, 0, 0) scale(${amplitude})`,
          }}
        />
        <div
          className={`absolute -top-1/3 right-1/4 h-[450px] w-[450px] rounded-full bg-gradient-to-bl from-[#58D8F0] to-transparent opacity-40 ${
            reducedMotion ? "" : "animate-pulse-slow"
          }`}
          style={{
            animationDelay: "2s",
            transform: `translate3d(0, 0, 0) scale(${amplitude * 0.9})`,
          }}
        />
        <div
          className="absolute top-1/3 left-1/3 h-[350px] w-[350px] rounded-full bg-[#1E293B] opacity-30"
        />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Aurora;

