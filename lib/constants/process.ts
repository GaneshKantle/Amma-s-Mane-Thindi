export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  mark: "phone" | "pot" | "parcel" | "plate";
};

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    number: "01",
    title: "You Reach Us",
    description: "Tell us what you need — a small order or something for a gathering.",
    mark: "phone",
  },
  {
    number: "02",
    title: "We Prepare",
    description: "Food is made fresh in our kitchen, with care and familiar flavours.",
    mark: "pot",
  },
  {
    number: "03",
    title: "We Pack",
    description: "Everything is packed and labelled neatly, ready for the journey home.",
    mark: "parcel",
  },
  {
    number: "04",
    title: "You Enjoy",
    description: "Open, share, and taste homemade food the way it should be.",
    mark: "plate",
  },
] as const;
