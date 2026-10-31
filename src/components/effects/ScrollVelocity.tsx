"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

interface ScrollVelocityProps {
  items: string[];
  baseVelocity?: number;
  className?: string;
}

function VelocityLine({
  items,
  baseVelocity = 1.5,
  className = "",
}: {
  items: string[];
  baseVelocity?: number;
  className?: string;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${(v % 50) - 50}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap flex flex-nowrap py-3 ${className}`}>
      <motion.div className="flex flex-nowrap items-center gap-8" style={{ x }}>
        {repeated.map((item, idx) => (
          <span
            key={idx}
            className="flex items-center gap-6 text-sm uppercase tracking-wider font-mono text-[#9A9EAA]/60 hover:text-accent-blue transition-colors cursor-default"
          >
            <span>{item}</span>
            <span className="text-accent-cyan/40">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  items,
  baseVelocity = 1.2,
  className = "",
}) => {
  return (
    <div className={`relative border-y border-white/5 bg-[#08090D]/80 backdrop-blur-sm ${className}`}>
      <VelocityLine items={items} baseVelocity={baseVelocity} />
    </div>
  );
};

export default ScrollVelocity;

