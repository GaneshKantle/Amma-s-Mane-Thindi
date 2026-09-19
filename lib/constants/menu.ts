/**
 * Priced kitchen menu — categories, items, and soft labels for unpriced items.
 */

export type MenuItem = {
  id: string;
  name: string;
  /** e.g. "100 g", "/ pc" */
  unit?: string;
  /** Rupee amount; null means show soft label instead */
  price: number | null;
  /** Override when price is null */
  priceLabel?: string;
  /** Path under /public; omit for empty placeholder */
  imageSrc?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: readonly MenuItem[];
};

const ASK_PRICE = "Ask for today's price";
const CALL_CUSTOMISE = "Call to customise";

export const MENU_CATEGORIES: readonly MenuCategory[] = [
  {
    id: "rotis-breads",
    label: "Traditional Rotis & Breads",
    items: [
      {
        id: "obbattu",
        name: "Obbattu / Holige",
        unit: "/ pc",
        price: 25,
        imageSrc: "/images/menu/beleholige.jpeg",
      },
      {
        id: "coconut-holige",
        name: "Coconut Holige",
        unit: "/ pc",
        price: 25,
        imageSrc: "/images/menu/coconutholige.jpeg",
      },
      {
        id: "chapati",
        name: "Chapati",
        unit: "/ pc",
        price: 12,
        imageSrc: "/images/menu/chapathi.jpg",
      },
      {
        id: "jolada-rotti",
        name: "Jolada Rotti",
        unit: "/ pc",
        price: 12,
        imageSrc: "/images/menu/joladrotti.jpeg",
      },
      {
        id: "akki-rotti",
        name: "Akki Rotti",
        unit: "/ pc",
        price: 12,
        imageSrc: "/images/menu/akkirotti.jpg",
      },
    ],
  },
  {
    id: "breakfast",
    label: "Breakfast",
    items: [
      {
        id: "idli-vada",
        name: "Idli (3) + Vada (1)",
        price: 50,
        imageSrc: "/images/menu/idli-vada.jpg",
      },
    ],
  },
  {
    id: "homemade-meals",
    label: "Homemade Meals",
    items: [
      {
        id: "homemade-meals",
        name: "Homemade Meals",
        price: 150,
        imageSrc: "/images/menu/meals.jpeg",
      },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    items: [
      {
        id: "chakli",
        name: "Chakli",
        unit: "100 g",
        price: 50,
        imageSrc: "/images/menu/chakli.jpeg",
      },
      {
        id: "nippattu",
        name: "Nippattu",
        unit: "100 g",
        price: 50,
        imageSrc: "/images/menu/nippattu.jpg",
      },
      {
        id: "mixture",
        name: "Mixture",
        unit: "250 g",
        price: 100,
        imageSrc: "/images/menu/mixture.jpg",
      },
      {
        id: "rave-unde",
        name: "Rave Unde",
        price: null,
        priceLabel: ASK_PRICE,
        imageSrc: "/images/menu/raveunde.jpeg",
      },
    ],
  },
  {
    id: "sweets",
    label: "Sweets",
    items: [
      {
        id: "sweets",
        name: "Sweets",
        price: null,
        priceLabel: ASK_PRICE,
        imageSrc: "/images/menu/sweets.jpg",
      },
    ],
  },
  {
    id: "pudis-pickles",
    label: "Chutney Powders / Pudi & Pickles",
    items: [
      {
        id: "peanut-chutney-pudi",
        name: "Peanut Chutney Pudi",
        unit: "500 g",
        price: 250,
        imageSrc: "/images/menu/peanutchutneypowder.jpeg",
      },
      {
        id: "other-chutney-pudis",
        name: "Other Chutney Pudis",
        unit: "Various types",
        price: null,
        priceLabel: CALL_CUSTOMISE,
        imageSrc: "/images/menu/otherchutneypoweder.jpeg",
      },
      {
        id: "homemade-pickles",
        name: "Homemade Pickles",
        unit: "Various types",
        price: null,
        priceLabel: CALL_CUSTOMISE,
        imageSrc: "/images/menu/pickles.jpeg",
      },
    ],
  },
] as const;

export const MENU_PRICE_NOTE =
  "Prices may vary based on ingredients and seasonal availability. Please confirm when ordering.";

export const MENU_CUSTOMISE_NOTE =
  "Looking for a specific chutney pudi or pickle? Call or WhatsApp — we customise to your need.";

export function formatMenuPrice(item: MenuItem): string {
  if (item.price != null) return `₹${item.price}`;
  return item.priceLabel ?? ASK_PRICE;
}
