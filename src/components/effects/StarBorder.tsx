"use client";

import React from "react";

interface StarBorderProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  children?: React.ReactNode;
  href?: string;
  [key: string]: any;
}

export const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = "button",
  className = "",
  color = "#6C8CFF",
  speed = "6s",
  children,
  ...rest
}) => {
  return (
    <Component
      className={`relative inline-block py-[1px] px-[1px] overflow-hidden rounded-xl group ${className}`}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="relative z-1 bg-[#10121A] text-foreground border border-white/10 rounded-xl px-5 py-2.5 transition-all duration-300 group-hover:bg-[#141722] group-hover:border-accent-blue/50 flex items-center justify-center">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
