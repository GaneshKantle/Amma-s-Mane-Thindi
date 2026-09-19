import { BUSINESS } from "@/lib/constants/business";
import { whatsappDefaultHref } from "@/lib/utils/whatsapp";

export const SITE = {
  name: BUSINESS.name,
  nameKn: BUSINESS.nameKn,
  taglineKn: "ಮನೆಯ ರುಚಿ, ನಿಮ್ಮ ಮನೆಗೆ.",
  taglineEn: "From Amma's home to yours — homemade food, prepared with care.",
  description:
    "Warm homemade Karnataka food and traditional tailoring from a Kannada household — AMMA'S MANE TINDI. From Amma's home to yours.",
  phoneDisplay: BUSINESS.phoneDisplay,
  phoneHref: BUSINESS.phoneHref,
  /** Prefer contextual helpers from lib/utils/whatsapp for new CTAs */
  get whatsappHref() {
    return whatsappDefaultHref();
  },
  address: BUSINESS.addressDisplay,
  hours: BUSINESS.hoursDisplay,
  mapsHref: BUSINESS.mapsHref,
  social: BUSINESS.social,
} as const;

export type Site = typeof SITE;
