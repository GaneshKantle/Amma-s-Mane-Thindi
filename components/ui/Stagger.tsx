"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils/cn";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion/storybook";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
};

/**
 * Staggers direct motion children (use with StaggerItem).
 * Falls back to a static wrapper when reduced motion is preferred.
 */
export function Stagger({ children, className, as = "div" }: StaggerProps) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Tag
      className={cn(className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </Tag>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
};

export function StaggerItem({
  children,
  className,
  as = "div",
}: StaggerItemProps) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Tag className={cn(className)} variants={staggerItem}>
      {children}
    </Tag>
  );
}
