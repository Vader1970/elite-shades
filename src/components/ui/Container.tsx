import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-[clamp(20px,4.5vw,72px)] ${className}`}>
      {children}
    </div>
  );
}
