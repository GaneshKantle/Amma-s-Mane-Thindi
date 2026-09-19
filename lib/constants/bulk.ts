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
  description: string;
};

export const BULK_PROCESS_STEPS: readonly BulkProcessStep[] = [
  {
    number: "01",
    title: "Tell us about your event",
    description: "Share the occasion, date, and roughly how many people you are expecting.",
  },
  {
    number: "02",
    title: "Discuss the menu",
    description: "We talk through snacks, meals and traditional items that fit your gathering.",
  },
  {
    number: "03",
    title: "Confirm quantity and details",
    description: "Together we finalise portions, packing preferences and timing.",
  },
  {
    number: "04",
    title: "We prepare and pack",
    description: "Food is made fresh in our kitchen, then packed and labelled carefully.",
  },
  {
    number: "05",
    title: "Your order is ready",
    description: "Collect or arrange handover — ready to share at your function.",
  },
] as const;
