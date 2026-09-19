export type PackagingStep = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export const PACKAGING_STEPS: readonly PackagingStep[] = [
  {
    id: "food",
    title: "Food",
    description: "Fresh from the kitchen",
    imageSrc: "/images/food/food2.jpeg",
    imageAlt: "Homemade snacks and powders from AMMA'S MANE TINDI",
  },
  {
    id: "packaging",
    title: "Packaging",
    description: "Wrapped with care",
    imageSrc: "/images/food/food1.jpeg",
    imageAlt: "Carefully packed AMMA'S MANE TINDI products",
  },
  {
    id: "sticker",
    title: "Sticker",
    description: "Our little mark of love",
    imageSrc: "/images/food/logo.jpeg",
    imageAlt: "AMMA'S MANE TINDI brand sticker",
  },
  {
    id: "ready",
    title: "Ready to go",
    description: "Handed over with a smile",
    imageSrc: "/images/food/food3.jpeg",
    imageAlt: "Packed order ready to go from AMMA'S MANE TINDI",
  },
] as const;
