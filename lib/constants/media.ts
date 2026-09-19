/** Central media paths under /public */

export const MEDIA = {
  logo: "/images/food/logo.jpeg",
  menu: "/images/food/menu.jpeg",
  banner: "/images/food/banner.jpeg",
  food: {
    packaged1: "/images/food/food1.jpeg",
    packaged2: "/images/food/food3.jpeg",
    packaged3: "/images/packaging/food2.jpeg",
  },
  packaging: {
    chatni: "/images/packaging/chatni.jpeg",
    food2: "/images/packaging/food2.jpeg",
    nipattu: "/images/packaging/nipattu.jpeg",
    package1: "/images/packaging/package1.jpeg",
    package2: "/images/packaging/package2.jpeg",
    whole: "/images/packaging/wholepackage.jpeg",
  },
} as const;

/** Cycle product photos for catalogue items until unique shots exist */
export const FOOD_PHOTO_POOL = [
  MEDIA.packaging.package1,
  MEDIA.packaging.food2,
  MEDIA.packaging.nipattu,
  MEDIA.food.packaged1,
  MEDIA.packaging.package2,
  MEDIA.packaging.whole,
  MEDIA.food.packaged2,
  MEDIA.packaging.chatni,
] as const;
