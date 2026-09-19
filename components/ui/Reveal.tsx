"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils/cn";
import {
  riseHidden,
  riseVisible,
  storyDuration,
  storyEase,
  viewportOnce,
} from "@/lib/motion/storybook";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article";
  /** Slightly looser viewport threshold for tall sections */
  amount?: number;
};

/** Subtle scroll-triggered fade/slide; respects reduced motion. */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  amount = 0.2,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Tag
      className={cn(className)}
      initial={riseHidden}
      whileInView={riseVisible}
      viewport={{ ...viewportOnce, amount }}
      transition={{
        duration: storyDuration.soft,
        ease: storyEase,
        delay,
      }}
    >
      {children}
    </Tag>
  );
}
