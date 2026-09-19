"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { MEDIA } from "@/lib/constants/media";
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
            <span className="absolute top-3 right-4 font-display text-mustard/70">✦</span>
            <span className="absolute bottom-6 left-3 font-display text-sm text-terracotta/50">
              ✦
            </span>
          </motion.div>
        ) : null}
      </div>

      {index < PACKAGING_STEPS.length - 1 ? (
        <span
          aria-hidden
          className="absolute top-[42%] -right-3 z-10 hidden font-display text-xl text-terracotta/45 lg:block"
        >
          →
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
      className="overflow-x-clip bg-cream/60 md:overflow-visible"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="packaging-heading"
              className="font-display text-[clamp(1.85rem,5vw,2.85rem)] tracking-tight text-ink"
            >
              Packed with a little love
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
              Orders are prepared, packed and labelled carefully — so what leaves our
              kitchen arrives ready to share.
            </p>
          </div>
        </Reveal>

        <ol className="mt-12 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
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
