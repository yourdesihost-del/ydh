export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "What Cooking Means", href: "/philosophy" },
  { label: "Menu & Offerings", href: "/offerings" },
  { label: "Contact", href: "/contact" },
];
