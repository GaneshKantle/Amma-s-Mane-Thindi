import { BUSINESS } from "@/lib/constants/business";
import { whatsappDefaultHref } from "@/lib/utils/whatsapp";

export const SITE = {
  name: BUSINESS.name,
  nameKn: BUSINESS.nameKn,
  taglineKn: "ಮನೆಯ ರುಚಿ, ನಿಮ್ಮ ಮನೆಗೆ.",
  taglineEn:
    "Traditional Karnataka vegetarian cooking from a home kitchen in Kothanur — prepared with care, collected with trust.",
  description:
    "Amma's Mane Thindi is a home-based vegetarian kitchen in Kothanur, Bengaluru. Traditional Karnataka sweets, snacks and everyday meals, plus careful tailoring. Takeout only; order in advance.",
  phoneDisplay: BUSINESS.phoneDisplay,
  phoneHref: BUSINESS.phoneHref,
  /** Prefer contextual helpers from lib/utils/whatsapp for new CTAs */
  get whatsappHref() {
    return whatsappDefaultHref();
  },
  address: BUSINESS.addressDisplay,
  area: BUSINESS.areaDisplay,
  hours: BUSINESS.hoursDisplay,
  mapsHref: BUSINESS.mapsHref,
  serviceDisplay: BUSINESS.serviceDisplay,
  serviceNote: BUSINESS.serviceNote,
  cuisine: BUSINESS.cuisine,
  rating: BUSINESS.rating,
  reviewCount: BUSINESS.reviewCount,
  googleReviewsLabel: BUSINESS.googleReviewsLabel,
} as const;

export type Site = typeof SITE;
