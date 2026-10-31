"use client";

import React, { useRef, useEffect, useState } from "react";

interface FadeContentProps {
  children: React.ReactNode;
  blur?: boolean;
  duration?: number;
  easing?: string;
  threshold?: number;
  initialOpacity?: number;
  className?: string;
  delay?: number;
}

export const FadeContent: React.FC<FadeContentProps> = ({
  children,
  blur = true,
  duration = 600,
  easing = "cubic-bezier(0.16, 1, 0.3, 1)",
  threshold = 0.1,
  initialOpacity = 0,
  className = "",
  delay = 0,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : initialOpacity,
        filter: inView ? "blur(0px)" : blur ? "blur(8px)" : "none",
        transform: inView ? "translate3d(0, 0, 0)" : "translate3d(0, 24px, 0)",
        transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}, transform ${duration}ms ${easing}`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;

