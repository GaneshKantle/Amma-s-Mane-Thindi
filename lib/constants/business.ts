/**
 * Central business contact config for AMMA'S MANE TINDI.
 */
export const BUSINESS = {
  name: "AMMA'S MANE TINDI",
  nameKn: "ಅಮ್ಮನ ಮನೆ ತಿಂಡಿ",
  /** Digits only, country code included — no + or spaces */
  whatsappNumber: "918088053939",
  phoneDisplay: "+91 80880 53939",
  phoneHref: "tel:+918088053939",
  addressDisplay:
    "Balaji Layout, beside Sunrise Medical Apartment, near Jerusalem Prayer House, Kothanur, Bengaluru, Karnataka 560077",
  areaDisplay: "Kothanur, Bengaluru",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Amma%27s+Mane+Thindi+Balaji+Layout+Kothanur+Bengaluru+560077",
  hoursDisplay: "Mon–Sun · 8:00 AM – 8:00 PM",
  /** Takeout only — orders in advance, collect from kitchen */
  serviceDisplay: "Takeout only · No delivery · Order in advance",
  serviceNote:
    "Takeout only — we do not offer delivery. Please place your order in advance and collect it from our kitchen in Kothanur.",
  cuisine: "Vegetarian",
  rating: 5.0,
  reviewCount: 7,
  googleReviewsLabel: "7 Google reviews",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ammasmanetindi.example",
} as const;

export type Business = typeof BUSINESS;

export const WHATSAPP_MESSAGES = {
  default:
    "Hello! I came across AMMA'S MANE TINDI online and would love to know more about your homemade food.",
  food:
    "Hello! I'd like to ask about your menu — sweets, snacks, and everyday meals from AMMA'S MANE TINDI.",
  foodItem: (name: string) =>
    `Hello! I'm interested in ${name} from AMMA'S MANE TINDI. Could you please share availability and details?`,
  bulk:
    "Hello! I'm planning a gathering and would like to enquire about a bulk food order from AMMA'S MANE TINDI.",
  tailoring:
    "Hello! I'd like to enquire about blouse work and tailoring services at AMMA'S MANE TINDI.",
} as const;
