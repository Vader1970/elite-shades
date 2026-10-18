export type Testimonial = {
  name: string;
  quote: string;
  image?: string;
  initial?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Gabby",
    initial: "G",
    quote:
      "We were referred to Duncan by a friend, and from the very beginning he was an absolute pleasure to deal with. He was flexible, responsive, and…",
  },
  {
    name: "Anne Radonich",
    image: "/images/review-anne-radonich.png",
    quote:
      "Exceptional service from beginning to end. Duncan was a pleasure to work with, offering excellent communication, expertise…",
  },
  {
    name: "Sharon Pole",
    image: "/images/review-sharon-pole.png",
    quote:
      "Duncan at Elite Shades was very professional gave me a few tips over the care and functions of the blinds. Installation was a breeze and…",
  },
  {
    name: "P M",
    image: "/images/review-p-m.png",
    quote:
      "Fantastic experience from start to finish with Elite Shades. We had roller blinds installed and the whole process was incredibly easy. The initial…",
  },
];
