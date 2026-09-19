/**
 * Shared storybook motion presets for AMMA'S MANE TINDI.
 * Calm, handmade — not a motion demo.
 */

export const storyEase = [0.22, 1, 0.36, 1] as const;

export const storyDuration = {
  soft: 0.5,
  page: 0.55,
  draw: 1.25,
  hero: 0.6,
} as const;

export const riseHidden = { opacity: 0, y: 30 } as const;
export const riseVisible = { opacity: 1, y: 0 } as const;

export const softHidden = { opacity: 0, y: 14 } as const;
export const softVisible = { opacity: 1, y: 0 } as const;

export const scaleHidden = { opacity: 0, y: 12, scale: 0.985 } as const;
export const scaleVisible = { opacity: 1, y: 0, scale: 1 } as const;

export const viewportOnce = { once: true, amount: 0.2 } as const;
export const viewportOnceLoose = { once: true, amount: 0.12 } as const;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
} as const;

export const staggerItem = {
  hidden: riseHidden,
  visible: {
    ...riseVisible,
    transition: {
      duration: storyDuration.soft,
      ease: storyEase,
    },
  },
} as const;

export const heroStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
} as const;

export const heroItem = {
  hidden: softHidden,
  visible: {
    ...softVisible,
    transition: {
      duration: storyDuration.hero,
      ease: storyEase,
    },
  },
} as const;
