"use client";

import React, { useEffect, useState, useRef } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  animateOn?: "view" | "hover";
  parentClassName?: string;
}

const DEFAULT_CHARS = "01_/*-<>~#[]{}!%&+=?";

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 50,
  maxIterations = 10,
  characters = DEFAULT_CHARS,
  className = "",
  encryptedClassName = "text-accent-cyan opacity-80",
  animateOn = "view",
  parentClassName = "",
}) => {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isScrambling, setIsScrambling] = useState<boolean>(false);
  const hasAnimatedRef = useRef<boolean>(false);
  const containerRef = useRef<HTMLSpanElement | null>(null);

  const startScramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsScrambling(false);
        setDisplayText(text);
      }

      iteration += 1 / (maxIterations / 4);
    }, speed);
  };

  useEffect(() => {
    if (animateOn === "view") {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            startScramble();
          }
        },
        { threshold: 0.15 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }
  }, [animateOn, text]);

  return (
    <span
      ref={containerRef}
      className={`inline-block ${parentClassName}`}
      onMouseEnter={() => {
        if (animateOn === "hover" || !isScrambling) {
          startScramble();
        }
      }}
    >
      <span className={isScrambling ? encryptedClassName : className}>
        {displayText}
      </span>
    </span>
  );
};

export default DecryptedText;

