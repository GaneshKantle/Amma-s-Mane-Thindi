"use client";

import { motion, useReducedMotion } from "motion/react";
import { KitchenScene } from "@/components/illustrations/KitchenScene";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/constants/site";
import {
  heroItem,
  heroStagger,
  storyDuration,
  storyEase,
} from "@/lib/motion/storybook";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="hero"
      ariaLabelledBy="hero-heading"
      className="relative overflow-x-clip pb-10 pt-8 sm:pt-12 md:overflow-visible md:pb-16 lg:pt-16"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: storyEase }}
      >
        <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-mustard/15 blur-3xl" />
        <div className="absolute bottom-0 left-[-8%] h-64 w-64 rounded-full bg-leaf/10 blur-3xl" />
      </motion.div>

      <Container>
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16 2xl:gap-20">
          <motion.div
            className="order-1 flex min-w-0 flex-col items-center text-center sm:items-start sm:text-left"
            variants={reduceMotion ? undefined : heroStagger}
            initial={reduceMotion ? undefined : "hidden"}
            animate={reduceMotion ? undefined : "visible"}
          >
            <motion.p
              className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-ink/10 bg-cream/80 px-3 py-1.5 text-[0.7rem] font-medium tracking-wide text-ink-soft sm:text-sm"
              variants={reduceMotion ? undefined : heroItem}
            >
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta"
              />
              <span className="truncate">Homemade · Handcrafted · Karnataka</span>
            </motion.p>

            <motion.div
              className="flex w-full justify-center sm:justify-start"
              variants={reduceMotion ? undefined : heroItem}
            >
              <BrandLogo size="xl" priority />
              <h1 id="hero-heading" className="sr-only">
                {SITE.name}
              </h1>
            </motion.div>

            <motion.p
              className="mt-4 max-w-md text-[0.7rem] font-medium tracking-[0.16em] text-leaf uppercase sm:text-sm"
              variants={reduceMotion ? undefined : heroItem}
            >
              From Amma&apos;s home to yours
            </motion.p>

            <motion.div
              className="flex w-full justify-center sm:justify-start"
              variants={reduceMotion ? undefined : heroItem}
            >
              <Divider className="mx-0 my-5 max-w-[10rem] py-0" tone="leaf" />
            </motion.div>

            <motion.p
              lang="kn"
              className="font-kannada text-subtitle text-ink"
              variants={reduceMotion ? undefined : heroItem}
            >
              {SITE.taglineKn}
            </motion.p>

            <motion.p
              className="text-lead prose-measure mt-2 text-ink-soft"
              variants={reduceMotion ? undefined : heroItem}
            >
              {SITE.taglineEn}
            </motion.p>

            <motion.div
              className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:flex-wrap"
              variants={reduceMotion ? undefined : heroItem}
            >
              <Button href="/food" variant="primary" size="lg" className="w-full sm:w-auto sm:flex-1">
                Explore Our Food
              </Button>
              <Button
                href={SITE.whatsappHref}
                external
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto sm:flex-1"
              >
                Talk to Us
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-2 mx-auto w-full min-w-0 max-w-[min(100%,28rem)] lg:max-w-[min(100%,36rem)] xl:max-w-none"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 24, scale: 0.985 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: storyDuration.page,
              ease: storyEase,
              delay: reduceMotion ? 0 : 0.12,
            }}
          >
            <KitchenScene className="w-full" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
