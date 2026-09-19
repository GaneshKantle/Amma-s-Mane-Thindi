"use client";

import { motion, useReducedMotion } from "motion/react";
import { ProcessMark } from "@/components/illustrations/ProcessMarks";
import { Container } from "@/components/ui/Container";
import { DrawPath } from "@/components/ui/DrawPath";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { PROCESS_STEPS } from "@/lib/constants/process";
import { storyDuration, storyEase, viewportOnce } from "@/lib/motion/storybook";
import { cn } from "@/lib/utils/cn";

function ProcessStepCard({
  step,
  index,
}: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.li
      className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{
        duration: storyDuration.soft,
        ease: storyEase,
        delay: index * 0.12,
      }}
    >
      {/* Mobile vertical connector (except last) */}
      {index < PROCESS_STEPS.length - 1 ? (
        <svg
          aria-hidden
          className="absolute top-[4.25rem] left-1/2 h-[calc(100%+1.25rem)] w-6 -translate-x-1/2 lg:hidden"
          viewBox="0 0 24 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <DrawPath
            d="M12 4 C10 40, 14 80, 12 116"
            stroke="#B85C38"
            strokeWidth={1.4}
            opacity={0.4}
            delay={0.15 + index * 0.1}
            duration={0.9}
          />
        </svg>
      ) : null}

      <div
        className={cn(
          "relative z-[1] mb-4 flex h-16 w-16 items-center justify-center rounded-[1.2rem_0.9rem_1.35rem_1rem] border border-ink/10 bg-cream shadow-[2px_2px_0_rgba(41,37,31,0.06)]",
          "transition-[box-shadow,transform] duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[3px_4px_0_rgba(41,37,31,0.08)]",
        )}
      >
        <ProcessMark mark={step.mark} className="h-12 w-12" />
      </div>
      <span className="font-display text-sm font-semibold tracking-widest text-terracotta">
        {step.number}
      </span>
      <h3 className="font-display mt-1 text-xl font-semibold text-ink sm:text-2xl">
        {step.title}
      </h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft sm:text-base">
        {step.description}
      </p>
    </motion.li>
  );
}

export function WhatWeDo() {
  return (
    <Section
      id="what-we-do"
      ariaLabelledBy="what-we-do-heading"
      className="bg-paper-deep/35"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium tracking-[0.18em] text-leaf uppercase">
              How it works
            </p>
            <h2
              id="what-we-do-heading"
              className="font-display mt-2 text-[clamp(1.75rem,5vw,2.75rem)] tracking-tight text-ink"
            >
              What we do
            </h2>
            <p lang="kn" className="font-kannada mt-3 text-base text-ink-soft sm:text-lg">
              ನೀವು ಕರೆ ಮಾಡಿ — ನಾವು ತಯಾರಿಸಿ ಕಳುಹಿಸುತ್ತೇವೆ.
            </p>
          </div>
        </Reveal>

        <ol className="relative mt-12 grid gap-10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Desktop hand-drawn path */}
          <svg
            aria-hidden
            className="pointer-events-none absolute top-[3.25rem] right-[6%] left-[6%] hidden h-10 lg:block"
            viewBox="0 0 1000 48"
            fill="none"
            preserveAspectRatio="none"
          >
            <DrawPath
              d="M40 28 C180 8, 320 40, 500 22 C680 4, 820 38, 960 20"
              stroke="#B85C38"
              strokeWidth={1.6}
              opacity={0.4}
              delay={0.1}
              duration={1.5}
            />
            <DrawPath
              d="M40 32 C200 48, 340 12, 520 34 C700 52, 840 16, 960 30"
              stroke="#687A52"
              strokeWidth={1.1}
              opacity={0.25}
              dashArray="2 7"
              delay={0.35}
              duration={1.4}
            />
          </svg>

          {PROCESS_STEPS.map((step, index) => (
            <ProcessStepCard key={step.number} step={step} index={index} />
          ))}
        </ol>
      </Container>
    </Section>
  );
}
