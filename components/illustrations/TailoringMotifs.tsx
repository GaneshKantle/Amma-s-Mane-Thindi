"use client";

import { motion, useReducedMotion } from "motion/react";
import { storyDuration, storyEase, viewportOnce } from "@/lib/motion/storybook";

type MotifProps = {
  className?: string;
  /** One-shot entrance animation when scrolled into view */
  animateOnce?: boolean;
};

function Shell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function NeedleMotif({ className, animateOnce }: MotifProps) {
  const reduceMotion = useReducedMotion();
  return (
    <Shell className={className}>
      <motion.path
        d="M14 36 L30 12"
        stroke="#29251F"
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={
          animateOnce && !reduceMotion ? { pathLength: 0, opacity: 0 } : false
        }
        whileInView={
          animateOnce ? { pathLength: 1, opacity: 1 } : undefined
        }
        viewport={viewportOnce}
        transition={{ duration: storyDuration.draw, ease: storyEase }}
      />
      <path d="M30 12 L34 8" stroke="#29251F" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="35" cy="7" r="2" stroke="#B85C38" strokeWidth="1.2" />
      <motion.path
        d="M12 38 C18 34, 22 40, 28 36"
        stroke="#B85C38"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.7"
        initial={
          animateOnce && !reduceMotion ? { pathLength: 0 } : false
        }
        whileInView={animateOnce ? { pathLength: 1 } : undefined}
        viewport={viewportOnce}
        transition={{ duration: 0.9, ease: storyEase, delay: 0.35 }}
      />
    </Shell>
  );
}

export function ThreadMotif({ className, animateOnce }: MotifProps) {
  const reduceMotion = useReducedMotion();
  return (
    <Shell className={className}>
      <circle cx="24" cy="24" r="12" stroke="#29251F" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="5" stroke="#B85C38" strokeWidth="1.3" opacity="0.7" />
      <motion.path
        d="M36 24 C42 18, 40 10, 44 8"
        stroke="#B85C38"
        strokeWidth="1.3"
        strokeLinecap="round"
        initial={
          animateOnce && !reduceMotion ? { pathLength: 0, opacity: 0 } : false
        }
        whileInView={
          animateOnce ? { pathLength: 1, opacity: 1 } : undefined
        }
        viewport={viewportOnce}
        transition={{ duration: 0.8, ease: storyEase, delay: 0.15 }}
      />
    </Shell>
  );
}

export function ScissorsMotif({ className, animateOnce }: MotifProps) {
  const reduceMotion = useReducedMotion();
  return (
    <Shell className={className}>
      <circle cx="14" cy="34" r="5" stroke="#29251F" strokeWidth="1.5" />
      <circle cx="14" cy="20" r="5" stroke="#29251F" strokeWidth="1.5" />
      <motion.g
        style={{ transformOrigin: "18px 27px" }}
        initial={animateOnce && !reduceMotion ? { rotate: -8 } : false}
        whileInView={
          animateOnce
            ? { rotate: [ -8, 6, 0 ] }
            : undefined
        }
        viewport={viewportOnce}
        transition={{ duration: 0.9, ease: storyEase, delay: 0.2 }}
      >
        <path d="M18 31 L36 14" stroke="#29251F" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 23 L36 34" stroke="#29251F" strokeWidth="1.5" strokeLinecap="round" />
      </motion.g>
      <path d="M18 27 H22" stroke="#B85C38" strokeWidth="1.2" strokeLinecap="round" />
    </Shell>
  );
}

export function FabricMotif({ className, animateOnce }: MotifProps) {
  const reduceMotion = useReducedMotion();
  return (
    <Shell className={className}>
      <motion.path
        d="M10 14 C18 10, 30 12, 38 10 L36 38 C28 40, 18 38, 12 40 Z"
        stroke="#29251F"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="#EFE4C8"
        opacity="0.85"
        initial={
          animateOnce && !reduceMotion ? { x: -2, opacity: 0.5 } : false
        }
        whileInView={animateOnce ? { x: 0, opacity: 0.85 } : undefined}
        viewport={viewportOnce}
        transition={{ duration: 0.7, ease: storyEase }}
      />
      <path
        d="M16 18 C22 22, 28 16, 34 20"
        stroke="#687A52"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M14 28 C20 32, 28 26, 34 30"
        stroke="#B85C38"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </Shell>
  );
}

export function TapeMotif({ className, animateOnce }: MotifProps) {
  const reduceMotion = useReducedMotion();
  return (
    <Shell className={className}>
      <motion.path
        d="M8 28 C8 16, 40 16, 40 28 C40 36, 8 36, 8 28 Z"
        stroke="#29251F"
        strokeWidth="1.5"
        fill="#D9A441"
        opacity="0.45"
        initial={
          animateOnce && !reduceMotion ? { rotate: -4, opacity: 0 } : false
        }
        whileInView={
          animateOnce ? { rotate: 0, opacity: 0.45 } : undefined
        }
        viewport={viewportOnce}
        transition={{ duration: 0.65, ease: storyEase }}
        style={{ transformOrigin: "24px 28px" }}
      />
      <path d="M14 28 H34" stroke="#29251F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M40 28 L44 22" stroke="#B85C38" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M40 28 L44 34" stroke="#B85C38" strokeWidth="1.4" strokeLinecap="round" />
    </Shell>
  );
}

export function TailoringMotif({
  motif,
  className,
  animateOnce = true,
}: {
  motif: "needle" | "thread" | "scissors" | "fabric" | "tape";
  className?: string;
  animateOnce?: boolean;
}) {
  switch (motif) {
    case "needle":
      return <NeedleMotif className={className} animateOnce={animateOnce} />;
    case "thread":
      return <ThreadMotif className={className} animateOnce={animateOnce} />;
    case "scissors":
      return <ScissorsMotif className={className} animateOnce={animateOnce} />;
    case "fabric":
      return <FabricMotif className={className} animateOnce={animateOnce} />;
    case "tape":
      return <TapeMotif className={className} animateOnce={animateOnce} />;
  }
}
