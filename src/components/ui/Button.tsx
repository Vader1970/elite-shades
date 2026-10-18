import type { ReactNode } from "react";
import { ArrowRight } from "@/components/ui/Icons";

const variants = {
  hero: "w-full max-w-[440px] min-h-14 justify-between gap-5 px-[22px] pr-5 text-base hover:bg-white md:w-auto md:max-w-none md:min-h-0 md:gap-7 md:py-[19px]",
  nav: "gap-5 py-[13px] pr-4 pl-[18px] text-sm hover:bg-black hover:text-white",
  cta: "justify-between gap-9 px-6 py-5 pr-[22px] text-base hover:bg-white",
  menu: "w-full justify-between px-[22px] py-5 text-base",
} as const;

export function ArrowButton({
  href,
  children,
  variant = "hero",
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center bg-accent font-heading font-semibold whitespace-nowrap text-black no-underline transition-[background-color,color] duration-300 ease-[ease] ${variants[variant]} ${className}`}
    >
      {children}
      <span className="flex transition-transform duration-[450ms] ease-[cubic-bezier(.2,.7,.1,1)] group-hover:translate-x-[5px]">
        <ArrowRight size={variant === "nav" ? 16 : 18} />
      </span>
    </a>
  );
}
