export type TailoringService = {
  id: string;
  name: string;
  description: string;
  motif: "needle" | "thread" | "scissors" | "fabric" | "tape";
};

export const TAILORING_SERVICES: readonly TailoringService[] = [
  {
    id: "blouse-work",
    name: "Blouse Work",
    description: "Fitted blouse stitching for everyday wear and occasions.",
    motif: "needle",
  },
  {
    id: "kuchu",
    name: "Kuchu",
    description: "Delicate edge work that finishes a saree beautifully.",
    motif: "thread",
  },
  {
    id: "peeko",
    name: "Peeko",
    description: "Neat finishing so fabric stays strong and tidy.",
    motif: "scissors",
  },
  {
    id: "fall",
    name: "Fall",
    description: "Clean fall attachment for comfortable draping.",
    motif: "fabric",
  },
  {
    id: "custom-designs",
    name: "Custom Designs",
    description: "Made to your measure, fabric and style preferences.",
    motif: "tape",
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
    imageSrc: "/images/tailoring/blouse-front.jpg",
    imageAlt: "Finished blouse work from AMMA'S MANE TINDI",
    orientation: "portrait",
  },
  {
    id: "kuchu-detail",
    label: "Kuchu detail",
    imageSrc: "/images/tailoring/kuchu-detail.jpg",
    imageAlt: "Close-up of kuchu edge work",
    orientation: "detail",
  },
  {
    id: "saree-fall",
    label: "Fall & finishing",
    imageSrc: "/images/tailoring/saree-fall.jpg",
    imageAlt: "Saree with fall attached",
    orientation: "landscape",
  },
  {
    id: "measuring",
    label: "Measuring",
    imageSrc: "/images/tailoring/measuring.jpg",
    imageAlt: "Measuring tape and fabric for custom blouse work",
    orientation: "landscape",
  },
  {
    id: "peeko-close",
    label: "Peeko finish",
    imageSrc: "/images/tailoring/peeko-close.jpg",
    imageAlt: "Close-up of peeko finishing",
    orientation: "detail",
  },
  {
    id: "custom-blouse",
    label: "Custom blouse",
    imageSrc: "/images/tailoring/custom-blouse.jpg",
    imageAlt: "Custom designed blouse",
    orientation: "portrait",
  },
] as const;
