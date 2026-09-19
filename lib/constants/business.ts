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
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ammasmanetindi.example",
} as const;

export type Business = typeof BUSINESS;

export const WHATSAPP_MESSAGES = {
  default:
    "Hi! I found AMMA'S MANE TINDI through your website. I'd like to know more about your food and services.",
  food:
    "Hi! I found AMMA'S MANE TINDI through your website. I'd like to know more about your food items.",
  foodItem: (name: string) =>
    `Hi! I found AMMA'S MANE TINDI through your website. I'm interested in ${name}. Could you please share more details?`,
  bulk:
    "Hi! I found AMMA'S MANE TINDI through your website. I'd like to enquire about a bulk food order.",
  tailoring:
    "Hi! I found AMMA'S MANE TINDI through your website. I'd like to enquire about your tailoring and blouse services.",
} as const;
