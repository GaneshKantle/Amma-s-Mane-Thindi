/**
 * Kitchen story content — beyond-menu custom cooking.
 */

export type KitchenHighlight = {
  id: string;
  title: string;
  titleKn?: string;
  description: string;
  accent: "leaf" | "terracotta" | "mustard";
};

/** Ways Amma cooks beyond the printed card */
export const BEYOND_MENU: readonly KitchenHighlight[] = [
  {
    id: "made-for-you",
    title: "Made just for you",
    titleKn: "ನಿಮಗಾಗಿ ತಯಾರಿಸಿದ್ದು",
    description:
      "Tell us how many people, how spicy, and when you need it. Order in advance — we cook to your table, then you collect from our kitchen (takeout only).",
    accent: "terracotta",
  },
  {
    id: "todays-kitchen",
    title: "What's cooking today",
    titleKn: "ಇಂದು ಏನು ಇದೆ?",
    description:
      "Some days there is a special from Amma's kitchen that never makes the printed menu. WhatsApp us and ask.",
    accent: "leaf",
  },
  {
    id: "festival-pooja",
    title: "Festival & pooja cooking",
    titleKn: "ಹಬ್ಬ · ಪೂಜೆ",
    description:
      "Obbattu (Holige), traditional sweets and the dishes your home remembers — prepared with the same care as for our own family.",
    accent: "mustard",
  },
  {
    id: "packed-with-love",
    title: "Packed from home",
    titleKn: "ಮನೆಯಿಂದ ಪ್ಯಾಕ್",
    description:
      "Snacks, powders and pickles leave our kitchen labelled and ready — collect them from Kothanur with Amma's mark on every parcel.",
    accent: "terracotta",
  },
] as const;
