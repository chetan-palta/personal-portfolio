"use client";

import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${
        disabled
          ? "text-[#F5F5F7]"
          : "bg-gradient-to-r from-[#9A9EAA] via-[#F5F5F7] to-[#9A9EAA] bg-[length:200%_100%] animate-shimmer"
      } ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </span>
  );
};

export default ShinyText;

