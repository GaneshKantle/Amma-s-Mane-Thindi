import { whatsappFoodItemHref } from "@/lib/utils/whatsapp";
import { FOOD_PHOTO_POOL, MEDIA } from "@/lib/constants/media";

export type FoodCategory = "Snacks" | "Meals" | "Traditional" | "Specials";

export type FoodItem = {
  id: string;
  name: string;
  nameKn: string;
  category: FoodCategory;
  description: string;
  /** Path under /public */
  imageSrc: string;
  imageAlt: string;
  badge?: string;
  /** Defaults to true when omitted */
  available?: boolean;
  featured?: boolean;
  span?: "featured" | "standard" | "compact";
  rotation?: "left" | "right" | "none";
};

export const FOOD_CATEGORIES: readonly FoodCategory[] = [
  "Snacks",
  "Meals",
  "Traditional",
  "Specials",
] as const;

const P = FOOD_PHOTO_POOL;

export const FOOD_ITEMS: readonly FoodItem[] = [
  {
    id: "kodubale",
    name: "Kodubale",
    nameKn: "ಕೊಡುಬಳೆ",
    category: "Snacks",
    description:
      "Crispy ring-shaped snack, deep-fried and lightly spiced — perfect with evening chai.",
    imageSrc: P[0],
    imageAlt: "Packaged homemade snacks from AMMA'S MANE TINDI",
    badge: "Evening favourite",
    featured: true,
    span: "featured",
    rotation: "left",
  },
  {
    id: "chakli",
    name: "Chakli",
    nameKn: "ಚಕ್ಲಿ",
    category: "Snacks",
    description:
      "Crunchy spiral murukku made in small batches with rice flour and spices.",
    imageSrc: P[1],
    imageAlt: "Homemade chakli-style snacks in branded packaging",
    rotation: "right",
    span: "standard",
  },
  {
    id: "nippattu",
    name: "Nippattu",
    nameKn: "ನಿಪ್ಪಟ್ಟು",
    category: "Snacks",
    description:
      "Flat, crispy rice discs with peanuts and curry leaves — a Karnataka classic.",
    imageSrc: P[2],
    imageAlt: "Crispy homemade nippattu in clear packaging",
    rotation: "none",
    span: "compact",
  },
  {
    id: "bisi-bele-bath",
    name: "Bisi Bele Bath",
    nameKn: "ಬಿಸಿ ಬೇಳೆ ಭಾತ್",
    category: "Meals",
    description:
      "Warm rice and lentil bath with vegetables and homemade spice powder — comfort in a bowl.",
    imageSrc: P[3],
    imageAlt: "AMMA'S MANE TINDI packaged homemade foods",
    badge: "Comfort meal",
    featured: true,
    span: "featured",
    rotation: "right",
  },
  {
    id: "lemon-rice",
    name: "Lemon Rice",
    nameKn: "ನಿಂಬೆ ಅನ್ನ",
    category: "Meals",
    description:
      "Tangy tempered rice with mustard, curry leaves and peanuts — ready for tiffin or travel.",
    imageSrc: P[4],
    imageAlt: "Homemade packaged foods ready for tiffin",
    rotation: "left",
    span: "standard",
  },
  {
    id: "veg-thali",
    name: "Home Veg Thali",
    nameKn: "ಮನೆ ತಾಳಿ",
    category: "Meals",
    description:
      "A simple homemade thali with rice, sambar, vegetable palya and pickle — ask for the day's menu.",
    imageSrc: MEDIA.menu,
    imageAlt: "AMMA'S MANE TINDI menu with homemade meals",
    badge: "Ask for today's menu",
    rotation: "none",
    span: "standard",
  },
  {
    id: "obattu",
    name: "Obattu / Holige",
    nameKn: "ಒಬ್ಬಟ್ಟು",
    category: "Traditional",
    description:
      "Soft sweet flatbread stuffed with coconut or dal — made for festivals and special days.",
    imageSrc: P[5],
    imageAlt: "Festival sweets and snacks from AMMA'S MANE TINDI",
    badge: "Festival",
    featured: true,
    span: "featured",
    rotation: "left",
  },
  {
    id: "kadubu",
    name: "Kadubu",
    nameKn: "ಕಡುಬು",
    category: "Traditional",
    description:
      "Steamed rice dumplings for pooja mornings — soft, simple and made with care.",
    imageSrc: P[6],
    imageAlt: "Traditional homemade packaged foods",
    rotation: "right",
    span: "compact",
  },
  {
    id: "payasa",
    name: "Payasa",
    nameKn: "ಪಾಯಸ",
    category: "Traditional",
    description:
      "Sweet kheer prepared the traditional way — ask which variety is available this week.",
    imageSrc: P[1],
    imageAlt: "Homemade traditional sweets packaging",
    rotation: "none",
    span: "standard",
  },
  {
    id: "ragi-mudde-combo",
    name: "Ragi Mudde Combo",
    nameKn: "ರಾಗಿ ಮುದ್ದೆ",
    category: "Specials",
    description:
      "Soft ragi balls with a homemade saaru — wholesome and filling, made to order.",
    imageSrc: P[0],
    imageAlt: "Wholesome homemade specials from AMMA'S MANE TINDI",
    badge: "Made to order",
    featured: true,
    span: "standard",
    rotation: "right",
  },
  {
    id: "weekend-special",
    name: "Weekend Special",
    nameKn: "ವಾರಾಂತ್ಯ ವಿಶೇಷ",
    category: "Specials",
    description:
      "A rotating special from Amma's kitchen — call or WhatsApp to hear what's cooking this weekend.",
    imageSrc: MEDIA.menu,
    imageAlt: "AMMA'S MANE TINDI specialties from the menu",
    badge: "Limited",
    available: true,
    span: "compact",
    rotation: "left",
  },
  {
    id: "pickle-set",
    name: "Homemade Pickle Set",
    nameKn: "ಮನೆ ಉಪ್ಪಿನಕಾಯಿ",
    category: "Specials",
    description:
      "Small jars of seasonal pickle — mango, lemon or mixed, packed with our kitchen label.",
    imageSrc: P[7],
    imageAlt: "Homemade pickle tub with AMMA'S MANE TINDI sticker",
    rotation: "none",
    span: "standard",
  },
] as const;

export function isFoodAvailable(item: FoodItem): boolean {
  return item.available !== false;
}

export function getFoodWhatsAppHref(item: FoodItem): string {
  return whatsappFoodItemHref(`${item.name} (${item.nameKn})`);
}

/** Featured items for the homepage teaser (keeps home from listing the full menu). */
export function getFeaturedFoodItems(limit = 4): FoodItem[] {
  const featured = FOOD_ITEMS.filter((item) => item.featured);
  if (featured.length >= limit) return featured.slice(0, limit);
  return FOOD_ITEMS.slice(0, limit);
}

export function filterFoodByCategory(
  category: FoodCategory | "All",
): FoodItem[] {
  if (category === "All") return [...FOOD_ITEMS];
  return FOOD_ITEMS.filter((item) => item.category === category);
}
