"use client";

import { motion, useReducedMotion } from "motion/react";
import { DrawPath } from "@/components/ui/DrawPath";
import {
  ScissorsMotif,
  NeedleMotif,
  ThreadMotif,
} from "@/components/illustrations/TailoringMotifs";
import { storyDuration, storyEase, viewportOnce } from "@/lib/motion/storybook";

type ThreadBridgeProps = {
  className?: string;
};

/** Hand-drawn thread that draws itself — food story into tailoring. */
export function ThreadBridge({ className }: ThreadBridgeProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={className} aria-hidden>
      <div className="relative mx-auto w-full max-w-3xl">
        <svg
          viewBox="0 0 720 100"
          className="mx-auto h-14 w-full sm:h-20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <DrawPath
            d="M20 50 C80 22, 140 78, 220 44 C300 12, 360 72, 440 40 C520 10, 580 68, 660 46 C680 42, 700 52, 710 48"
            stroke="#B85C38"
            strokeWidth={1.7}
            opacity={0.6}
            delay={0.05}
            duration={1.6}
          />
          <DrawPath
            d="M20 54 C90 82, 150 28, 230 58 C310 86, 370 30, 450 62 C530 88, 590 34, 700 56"
            stroke="#687A52"
            strokeWidth={1.1}
            opacity={0.28}
            dashArray="2 6"
            delay={0.25}
            duration={1.5}
          />

          {/* Motifs along the thread */}
          <motion.g
            initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.55, duration: storyDuration.soft, ease: storyEase }}
          >
            <circle cx="220" cy="44" r="3.5" fill="#D9A441" opacity="0.75" />
          </motion.g>
          <motion.g
            initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.75, duration: storyDuration.soft, ease: storyEase }}
          >
            <circle cx="440" cy="40" r="3" fill="#B85C38" opacity="0.65" />
          </motion.g>

          <motion.path
            d="M690 46 L710 34"
            stroke="#29251F"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.95, duration: 0.45, ease: storyEase }}
          />
          <motion.circle
            cx="712"
            cy="32"
            r="2.2"
            stroke="#29251F"
            strokeWidth="1.2"
            fill="none"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 1.1, duration: 0.3 }}
          />
        </svg>

        <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-[12%] sm:px-[18%]">
          <motion.div
            className="h-8 w-8 text-ink/70 sm:h-9 sm:w-9"
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.5, duration: 0.45, ease: storyEase }}
          >
            <ThreadMotif className="h-full w-full" />
          </motion.div>
          <motion.div
            className="h-8 w-8 text-ink/70 sm:h-9 sm:w-9"
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.7, duration: 0.45, ease: storyEase }}
          >
            <NeedleMotif className="h-full w-full" />
          </motion.div>
          <motion.div
            className="hidden h-8 w-8 text-ink/70 sm:block sm:h-9 sm:w-9"
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.85, duration: 0.45, ease: storyEase }}
          >
            <ScissorsMotif className="h-full w-full" animateOnce />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
