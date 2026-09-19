export type NavLink = {
  label: string;
  href: string;
};

/** Homepage section anchors and dedicated routes. */
export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Food", href: "/food" },
  { label: "Bulk Orders", href: "/bulk-orders" },
  { label: "Tailoring", href: "/tailoring" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const FOOTER_LINKS: readonly NavLink[] = [
  { label: "Food", href: "/food" },
  { label: "Bulk Orders", href: "/bulk-orders" },
  { label: "Tailoring", href: "/tailoring" },
  { label: "Contact", href: "/#contact" },
] as const;
