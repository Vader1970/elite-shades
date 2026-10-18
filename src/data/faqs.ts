export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "How much do custom blinds cost?",
    answer:
      "The cost depends on the size of your windows, the fabric or blind type you choose, and any custom options such as motorisation. As a mobile business with low overheads, we can usually offer better value than traditional showroom retailers. Get in touch for a free measure and quote.",
  },
  {
    question: "Do you offer installation?",
    answer:
      "Yes — every blind we supply is professionally installed. That means no guesswork, no DIY mistakes, and a perfect fit from the start.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We provide blinds throughout Christchurch and the Waimakariri District. If you’re just outside these areas, feel free to get in touch and we’ll let you know if we can help.",
  },
  {
    question: "How long does it take to get blinds installed?",
    answer:
      "Once your order is confirmed, custom-made blinds are generally ready in 2–3 weeks. We’ll arrange installation as soon as they arrive.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Consultation",
    body: "Talk through your needs, explore colours and fabrics from the mobile showroom, and arrange a free in-home measure.",
    lineDelay: 0,
    textDelay: 150,
  },
  {
    n: "02",
    title: "Measure & Quote",
    body: "Precise measurements are taken in your home and a tailored, same-day quote is prepared for your chosen blinds.",
    lineDelay: 350,
    textDelay: 500,
  },
  {
    n: "03",
    title: "Professional Installation",
    body: "Custom blinds are generally ready in 2–3 weeks. Installation is arranged as soon as they arrive, for a perfect fit.",
    lineDelay: 700,
    textDelay: 850,
  },
] as const;
