import { live } from "@/lib/site";

export type NavLink = {
  label: string;
  href: string;
  current?: boolean;
  sub?: { label: string; href: string }[];
};

export const blindLinks = [
  {
    label: "Roller Blinds",
    short: "Roller",
    description: "Sleek, modern and functional",
    href: live("/products/roller-blinds"),
  },
  {
    label: "Venetian Blinds",
    short: "Venetian",
    description: "Classic light and privacy control",
    href: live("/products/venetian-blinds"),
  },
  {
    label: "Honeycomb Blinds",
    short: "Honeycomb",
    description: "Thermal efficiency and coverage",
    href: live("/products/honeycomb-blinds"),
  },
  {
    label: "Vertical Blinds",
    short: "Vertical",
    description: "For sliding doors and wide windows",
    href: live("/products"),
  },
  {
    label: "Veri Shades",
    short: "Veri Shades",
    description: "Soft sheer vanes that glide",
    href: live("/products"),
  },
  {
    label: "Motorised Blinds",
    short: "Motorised",
    description: "At the touch of a button",
    href: live("/products"),
  },
] as const;

export const mainNav: NavLink[] = [
  { label: "Home", href: live("/"), current: true },
  { label: "About Us", href: live("/about") },
  {
    label: "Blinds",
    href: live("/products"),
    sub: blindLinks.map((item) => ({ label: item.short, href: item.href })),
  },
  { label: "Services", href: live("/services") },
  { label: "Contact", href: live("/contact-us") },
];

export const footerExplore = [
  { label: "Home", href: live("/") },
  { label: "About Us", href: live("/about") },
  { label: "All Blinds", href: live("/products") },
  { label: "Services", href: live("/services") },
  { label: "Contact", href: live("/contact-us") },
] as const;
