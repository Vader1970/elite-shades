import { live } from "@/lib/site";

export type FeaturedProduct = {
  n: string;
  title: string;
  description: string;
  image: string;
  position: string;
  href: string;
  alt: string;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    n: "01",
    title: "Roller Blinds",
    description: "Sleek, modern and highly functional.",
    image: "/images/roller-blinds.png",
    position: "44% 50%",
    href: live("/products/roller-blinds"),
    alt: "Grey made-to-measure roller blind half-lowered over a living room window",
  },
  {
    n: "02",
    title: "Venetian Blinds",
    description: "Classic control over light and privacy.",
    image: "/images/venetian-blinds.png",
    position: "50% 50%",
    href: live("/products/venetian-blinds"),
    alt: "White Venetian blinds filtering soft daylight beside a vase of olive branches",
  },
  {
    n: "03",
    title: "Honeycomb Blinds",
    description: "Ultimate thermal efficiency and window coverage.",
    image: "/images/honeycomb-blinds.png",
    position: "38% 50%",
    href: live("/products/honeycomb-blinds"),
    alt: "Charcoal honeycomb blind beside a lamp and candle on a dark desk",
  },
];

export const rangeProducts = [
  {
    title: "Vertical Blinds",
    description: "Ideal for sliding doors and wide windows.",
    image: "/images/vertical-blinds.png",
    position: "60% 50%",
    href: live("/products"),
    alt: "White vertical blinds drawn across a sliding door in a modern lounge",
  },
  {
    title: "Veri Shades",
    description: "Soft sheer vanes that tilt, glide and stack.",
    image: "/images/veri-shades.jpg",
    position: "70% 50%",
    href: live("/products"),
    alt: "Sheer white Veri Shades filtering a harbour view behind a dining table",
  },
  {
    title: "Motorised Blinds",
    description: "Raise and lower at the touch of a button.",
    image: "/images/motorised-roller.png",
    position: "40% 50%",
    href: live("/products"),
    alt: "Motorised roller blind being lowered with a handheld remote",
  },
] as const;
