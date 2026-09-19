/**
 * Central business contact config for AMMA'S MANE TINDI.
 * Replace placeholders with real details when available.
 */
export const BUSINESS = {
  name: "AMMA'S MANE TINDI",
  nameKn: "ಅಮ್ಮನ ಮನೆ ತಿಂಡಿ",
  /** Digits only, country code included — no + or spaces */
  whatsappNumber: "919000000000",
  phoneDisplay: "+91 90000 00000",
  phoneHref: "tel:+919000000000",
  addressDisplay: "Bengaluru, Karnataka (exact address coming soon)",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Bengaluru+Karnataka",
  hoursDisplay: "Mon–Sat · 9:00 AM – 7:00 PM",
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
