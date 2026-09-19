export type TailoringService = {
  id: string;
  name: string;
  description: string;
  motif: "needle" | "thread" | "scissors" | "fabric" | "tape";
  accent: "terracotta" | "leaf" | "mustard";
};

export const TAILORING_SERVICES: readonly TailoringService[] = [
  {
    id: "blouse-work",
    name: "Blouse Work",
    description: "Fitted blouse stitching for everyday wear and occasions.",
    motif: "needle",
    accent: "terracotta",
  },
  {
    id: "kuchu",
    name: "Kuchu",
    description: "Delicate edge work that finishes a saree beautifully.",
    motif: "thread",
    accent: "leaf",
  },
  {
    id: "peeko",
    name: "Peeko",
    description: "Neat finishing so fabric stays strong and tidy.",
    motif: "scissors",
    accent: "mustard",
  },
  {
    id: "fall",
    name: "Fall",
    description: "Clean fall attachment for comfortable draping.",
    motif: "fabric",
    accent: "terracotta",
  },
  {
    id: "custom-designs",
    name: "Custom Designs",
    description: "Made to your measure, fabric and style preferences.",
    motif: "tape",
    accent: "leaf",
  },
] as const;

export type GalleryOrientation = "portrait" | "landscape" | "detail";

export type TailoringGalleryItem = {
  id: string;
  label: string;
  imageSrc: string;
  imageAlt: string;
  orientation: GalleryOrientation;
};

export const TAILORING_GALLERY: readonly TailoringGalleryItem[] = [
  {
    id: "blouse-front",
    label: "Blouse stitching",
    imageSrc: "/images/tailoring/img2.png",
    imageAlt: "Finished blouse work from AMMA'S MANE TINDI",
    orientation: "portrait",
  },
  {
    id: "kuchu-detail",
    label: "Kuchu detail",
    imageSrc: "/images/tailoring/kuchu.png",
    imageAlt: "Close-up of kuchu edge work",
    orientation: "detail",
  },
  {
    id: "saree-fall",
    label: "Fall & finishing",
    imageSrc: "/images/tailoring/fall-pico.png",
    imageAlt: "Saree with fall attached",
    orientation: "landscape",
  },
] as const;
