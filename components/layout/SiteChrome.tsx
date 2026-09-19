"use client";

import { FloatingContactBar } from "@/components/layout/FloatingContactBar";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

/** Shared interaction chrome: progress, mobile bar, WhatsApp FAB. */
export function SiteChrome() {
  return (
    <>
      <ScrollProgress />
      <FloatingContactBar />
      <FloatingWhatsApp />
    </>
  );
}
