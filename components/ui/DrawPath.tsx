"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils/cn";
import { storyDuration, storyEase, viewportOnce } from "@/lib/motion/storybook";

type DrawPathProps = {
  d: string;
  className?: string;
  stroke?: string;
  strokeWidth?: number;
  delay?: number;
  duration?: number;
  opacity?: number;
  dashArray?: string;
};

/** Hand-drawn stroke reveal via pathLength. Respects reduced motion. */
export function DrawPath({
  d,
  className,
  stroke = "#29251F",
  strokeWidth = 1.5,
  delay = 0,
  duration = storyDuration.draw,
  opacity = 0.55,
  dashArray,
}: DrawPathProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <path
        d={d}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={opacity}
        strokeDasharray={dashArray}
        className={className}
      />
    );
  }

  return (
    <motion.path
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={opacity}
      strokeDasharray={dashArray}
      className={cn(className)}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity }}
      viewport={viewportOnce}
      transition={{ duration, ease: storyEase, delay }}
    />
  );
}
