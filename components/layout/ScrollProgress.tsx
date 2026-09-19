"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

/** Subtle hand-drawn thread scroll progress — top edge. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-0 right-0 left-0 z-[55] h-[3px]"
    >
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-terracotta/70 via-mustard/65 to-leaf/55"
        style={{ scaleX }}
      />
      <motion.div
        className="absolute top-0 h-full w-full origin-left opacity-40"
        style={{
          scaleX,
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(41,37,31,0.25) 6px, rgba(41,37,31,0.25) 8px)",
        }}
      />
    </div>
  );
}
