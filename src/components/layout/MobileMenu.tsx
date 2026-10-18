"use client";

import { mainNav } from "@/data/navigation";
import { site } from "@/lib/site";
import { ArrowButton } from "@/components/ui/Button";
import { EASE } from "@/lib/animations";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile"
      inert={open ? undefined : true}
      className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-paper px-[clamp(20px,4.5vw,72px)] pt-24 pb-10 lg:hidden"
      style={{
        clipPath: open ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
        visibility: open ? "visible" : "hidden",
        transition: open
          ? "clip-path .7s cubic-bezier(.7,0,.2,1), visibility 0s"
          : "clip-path .55s cubic-bezier(.7,0,.2,1), visibility 0s linear .55s",
      }}
    >
      <nav aria-label="Mobile" className="flex flex-col border-t-2 border-black">
        {mainNav.map((item, index) => (
          <div
            key={item.label}
            className="border-b-2 border-line"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "none" : "translateY(18px)",
              transition: `opacity .5s ease ${open ? 200 + index * 60 : 0}ms, transform .7s ${EASE} ${open ? 200 + index * 60 : 0}ms`,
            }}
          >
            <a
              href={item.href}
              onClick={onClose}
              className="flex min-h-[68px] items-center justify-between font-heading text-[clamp(26px,7vw,34px)] font-semibold tracking-[-0.03em] text-black"
            >
              {item.label}
              <span className="font-sans text-[13px] font-medium tracking-normal text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
            </a>
            {item.sub ? (
              <div className="grid grid-cols-2 gap-x-4 pb-4">
                {item.sub.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    onClick={onClose}
                    className="flex min-h-11 items-center text-[15px] font-medium text-body"
                  >
                    {sub.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </nav>
      <div
        className="mt-auto flex flex-col gap-5 pt-10"
        style={{
          opacity: open ? 1 : 0,
          transition: "opacity .5s ease .45s",
        }}
      >
        <ArrowButton href={site.liveUrl + "/contact-us"} variant="menu" onClick={onClose}>
          <span className="min-[400px]:hidden">Get a Free Quote</span>
          <span className="hidden min-[400px]:inline">Get a Free Measure & Quote</span>
        </ArrowButton>
        <div className="flex flex-wrap gap-x-7 gap-y-2 text-[15px]">
          <a href={site.phoneHref} className="flex min-h-11 items-center font-semibold text-black">
            {site.phoneDisplay}
          </a>
          <a href={site.emailHref} className="flex min-h-11 items-center font-semibold text-black">
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}
