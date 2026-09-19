"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { MEDIA } from "@/lib/constants/media";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { PACKAGING_STEPS } from "@/lib/constants/packaging";
import { storyDuration, storyEase, viewportOnce } from "@/lib/motion/storybook";
import { cn } from "@/lib/utils/cn";

function PackagingStepVisual({
  step,
  index,
}: {
  step: (typeof PACKAGING_STEPS)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const isSticker = step.id === "sticker";
  const isReady = step.id === "ready";

  return (
    <motion.li
      className="relative flex flex-col items-center text-center"
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{
        duration: storyDuration.soft,
        ease: storyEase,
        delay: index * 0.14,
      }}
    >
      <div
        className={cn(
          "relative w-full max-w-[13rem] lg:max-w-none",
          index % 2 === 0 ? "-rotate-1" : "rotate-[1.25deg]",
        )}
      >
        <ImagePlaceholder
          label={step.title}
          aspect="square"
          alt={step.imageAlt}
          src={step.imageSrc}
          objectFit={isSticker ? "contain" : "cover"}
          className={cn(
            isSticker && "bg-cream ring-2 ring-mustard/40 ring-offset-2 ring-offset-cream",
          )}
        />

        {isSticker ? (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-2 -bottom-2 z-20 h-14 w-14 overflow-hidden rounded-full border border-ink/15 bg-cream shadow-[2px_3px_0_rgba(41,37,31,0.1)] sm:h-16 sm:w-16"
            initial={reduceMotion ? false : { opacity: 0, x: 16, y: 12, rotate: 12 }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
            viewport={viewportOnce}
            transition={{
              duration: 0.55,
              ease: storyEase,
              delay: 0.35,
            }}
          >
            <Image
              src={MEDIA.logo}
              alt=""
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </motion.div>
        ) : null}

        {isReady ? (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="absolute top-3 right-3 h-5 w-5 border-t border-r border-ink/25" />
            <span className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-terracotta/35" />
          </motion.div>
        ) : null}
      </div>

      {index < PACKAGING_STEPS.length - 1 ? (
        <span
          aria-hidden
          className="absolute top-[42%] -right-4 z-10 hidden text-terracotta/40 lg:block"
        >
          <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
            <path
              d="M2 6 H22 M18 2.5 L23 6 L18 9.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : null}

      <div className="mt-4">
        <span className="font-display text-lg font-semibold text-ink">
          {step.title}
        </span>
        <p className="mt-1 text-sm text-ink-soft">{step.description}</p>
      </div>
    </motion.li>
  );
}

export function Packaging() {
  return (
    <Section
      id="packaging"
      ariaLabelledBy="packaging-heading"
      className="ink-wash overflow-x-clip md:overflow-visible"
    >
      <Container>
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <SectionEyebrow withSprig tone="mustard" className="items-center">
              From kitchen to door
            </SectionEyebrow>
            <h2
              id="packaging-heading"
              className="font-display text-title mt-3 tracking-tight text-ink"
            >
              Packed with a little love
            </h2>
            <p className="text-lead prose-measure mx-auto mt-3 text-ink-soft">
              Orders are prepared, packed and labelled carefully — so what leaves our
              kitchen arrives ready to share.
            </p>
          </div>
        </Reveal>

        <ol className="mt-10 grid grid-cols-1 gap-8 min-[480px]:grid-cols-2 sm:mt-14 lg:grid-cols-4 lg:gap-5 xl:gap-8">
          {PACKAGING_STEPS.map((step, index) => (
            <PackagingStepVisual key={step.id} step={step} index={index} />
          ))}
        </ol>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-lg text-center text-sm text-ink-soft">
            Our branded stickers are a small part of the identity — a handmade mark on
            every parcel that leaves home.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
