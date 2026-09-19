export type BulkOccasion = {
  id: string;
  label: string;
  description: string;
};

export const BULK_OCCASIONS: readonly BulkOccasion[] = [
  {
    id: "family-gatherings",
    label: "Family Gatherings",
    description: "Home get-togethers where everyone expects Amma's taste.",
  },
  {
    id: "functions",
    label: "Functions",
    description: "Weddings, housewarmings and traditional celebrations.",
  },
  {
    id: "pooja",
    label: "Pooja",
    description: "Prasad and meal packs prepared with care for sacred days.",
  },
  {
    id: "birthdays",
    label: "Birthdays",
    description: "Sweet and savoury trays for small or big birthday tables.",
  },
  {
    id: "celebrations",
    label: "Celebrations",
    description: "Festivals and joyful occasions that need homemade food.",
  },
  {
    id: "office-events",
    label: "Office Events",
    description: "Packed meals and snacks for teams and workplace gatherings.",
  },
] as const;

export type BulkProcessStep = {
  number: string;
  title: string;
  mark: "phone" | "pot" | "parcel" | "plate";
  accent: "terracotta" | "mustard" | "leaf";
};

export const BULK_PROCESS_STEPS: readonly BulkProcessStep[] = [
  {
    number: "01",
    title: "Tell us about your event",
    mark: "phone",
    accent: "terracotta",
  },
  {
    number: "02",
    title: "Discuss the menu",
    mark: "plate",
    accent: "mustard",
  },
  {
    number: "03",
    title: "Confirm quantity and details",
    mark: "parcel",
    accent: "leaf",
  },
  {
    number: "04",
    title: "We prepare and pack",
    mark: "pot",
    accent: "terracotta",
  },
  {
    number: "05",
    title: "Your order is ready",
    mark: "parcel",
    accent: "mustard",
  },
] as const;
