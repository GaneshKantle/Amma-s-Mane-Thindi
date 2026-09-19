/** Central media paths under /public */

export const MEDIA = {
  logo: "/images/food/logo.jpeg",
  menu: "/images/food/menu.jpeg",
  food: {
    packaged1: "/images/food/food1.jpeg",
    packaged2: "/images/food/food2.jpeg",
    packaged3: "/images/food/food3.jpeg",
  },
} as const;

/** Cycle product photos for catalogue items until unique shots exist */
export const FOOD_PHOTO_POOL = [
  MEDIA.food.packaged1,
  MEDIA.food.packaged2,
  MEDIA.food.packaged3,
] as const;
