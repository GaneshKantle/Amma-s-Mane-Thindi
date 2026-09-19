"use client";

import { motion, useReducedMotion } from "motion/react";
import { KitchenScene } from "@/components/illustrations/KitchenScene";
import { InkCorner, InkSprig } from "@/components/illustrations/InkOrnaments";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
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
      className="ink-wash relative overflow-x-clip pb-10 pt-8 sm:pt-12 md:overflow-visible md:pb-16 lg:pt-16"
    >
      <Container>
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16 2xl:gap-20">
          <motion.div
            className="order-1 flex min-w-0 flex-col items-center text-center sm:items-start sm:text-left"
            variants={reduceMotion ? undefined : heroStagger}
            initial={reduceMotion ? undefined : "hidden"}
            animate={reduceMotion ? undefined : "visible"}
          >
            <motion.div variants={reduceMotion ? undefined : heroItem}>
              <SectionEyebrow withSprig tone="leaf">
                Homemade · Handcrafted · Karnataka
              </SectionEyebrow>
            </motion.div>

            <motion.div
              className="mt-5 flex w-full justify-center sm:mt-6 sm:justify-start"
              variants={reduceMotion ? undefined : heroItem}
            >
              <BrandLogo size="xl" priority />
              <h1 id="hero-heading" className="sr-only">
                {SITE.name}
              </h1>
            </motion.div>

            <motion.p
              className="mt-5 max-w-md font-display text-[0.95rem] leading-snug text-ink-soft italic sm:mt-6 sm:text-lg"
              variants={reduceMotion ? undefined : heroItem}
            >
              From Amma&apos;s home to yours
            </motion.p>

            <motion.div
              className="flex w-full justify-center sm:justify-start"
              variants={reduceMotion ? undefined : heroItem}
            >
              <Divider className="mx-0 my-5 max-w-[10rem] py-0" tone="terracotta" />
            </motion.div>

            <motion.p
              lang="kn"
              className="font-kannada text-subtitle text-ink"
              variants={reduceMotion ? undefined : heroItem}
            >
              {SITE.taglineKn}
            </motion.p>

            <motion.p
              className="text-lead prose-measure mt-3 text-ink-soft"
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
            className="ink-plate order-2 relative mx-auto w-full min-w-0 max-w-[min(100%,28rem)] lg:max-w-[min(100%,36rem)] xl:max-w-none"
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
            <InkCorner className="absolute -top-1 -left-1 z-10 h-7 w-7 opacity-70 sm:h-8 sm:w-8" />
            <InkCorner className="absolute -right-1 -bottom-1 z-10 h-7 w-7 rotate-180 opacity-70 sm:h-8 sm:w-8" />
            <KitchenScene className="w-full" />
            <InkSprig className="absolute -bottom-3 left-1/2 hidden h-6 w-12 -translate-x-1/2 sm:block" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
