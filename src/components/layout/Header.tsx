"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { blindLinks } from "@/data/navigation";
import { live, site } from "@/lib/site";
import { ArrowButton } from "@/components/ui/Button";
import { ChevronDown, PhoneIcon } from "@/components/ui/Icons";
import { MobileMenu } from "@/components/layout/MobileMenu";

const links = [
  { label: "Home", href: live("/"), current: true },
  { label: "About Us", href: live("/about") },
  { label: "Services", href: live("/services") },
  { label: "Contact", href: live("/contact-us") },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      setDropOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        data-header
        data-screen-label="Header"
        className="fixed top-0 right-0 left-0 z-50 h-16 bg-transparent shadow-[0_2px_0_rgba(225,225,225,0)] transition-[height,background-color,box-shadow] duration-[450ms] ease-[cubic-bezier(.2,.7,.1,1)] lg:h-[88px]"
        style={{ animation: "fadeIn .9s ease both" }}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-6 px-[clamp(20px,4.5vw,72px)]">
          <a
            href={live("/")}
            aria-label="Elite Shades — home"
            className="flex flex-none items-center gap-3"
          >
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={332}
              height={281}
              className="h-9 w-auto"
            />
            <Image
              src="/images/logo-wordmark.png"
              alt="Elite Shades"
              width={459}
              height={72}
              className="h-[21px] w-auto"
            />
          </a>

          <nav aria-label="Main" className="hidden h-full items-center gap-[clamp(22px,2.6vw,44px)] lg:flex">
            <a
              href={links[0].href}
              aria-current="page"
              className="nav-link px-0 py-2 font-heading text-[15px] font-semibold text-black"
            >
              Home
            </a>
            <a href={links[1].href} className="nav-link px-0 py-2 font-heading text-[15px] font-semibold text-black">
              About Us
            </a>
            <div
              className="relative flex h-full items-center"
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setDropOpen(false);
              }}
            >
              <button
                type="button"
                aria-expanded={dropOpen}
                aria-controls="blinds-menu"
                onClick={() => setDropOpen((open) => !open)}
                data-open={dropOpen ? "true" : "false"}
                className="nav-link flex cursor-pointer items-center gap-1.5 border-0 bg-transparent px-0 py-2 font-heading text-[15px] font-semibold text-black"
              >
                Blinds
                <span
                  className="flex transition-transform duration-[350ms] ease-[cubic-bezier(.2,.7,.1,1)]"
                  style={{ transform: dropOpen ? "rotate(180deg)" : "none" }}
                >
                  <ChevronDown />
                </span>
              </button>
              <div
                id="blinds-menu"
                inert={dropOpen ? undefined : true}
                className="absolute top-full -left-8 w-[min(600px,calc(100vw-48px))] border-t-2 border-accent bg-white px-8 pt-6 pb-7 shadow-[0_32px_64px_-32px_rgba(0,0,0,.28)]"
                style={{
                  opacity: dropOpen ? 1 : 0,
                  transform: dropOpen ? "translateY(0)" : "translateY(-8px)",
                  visibility: dropOpen ? "visible" : "hidden",
                  transition: "opacity .3s ease, transform .45s cubic-bezier(.2,.7,.1,1), visibility .3s",
                }}
              >
                <div className="grid grid-cols-2 gap-x-8">
                  {blindLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block border-b-2 border-[#F0F0F0] py-3.5 text-black transition-colors duration-[250ms] ease-[ease] hover:text-accent-deep"
                    >
                      <span className="block font-heading text-[15px] font-semibold">{item.label}</span>
                      <span className="mt-0.5 block text-[13px] text-muted">{item.description}</span>
                    </a>
                  ))}
                </div>
                <a
                  href={live("/products")}
                  className="mt-5 inline-flex items-center gap-2.5 font-heading text-sm font-semibold text-accent-deep transition-colors duration-300 ease-[ease] hover:text-black"
                >
                  View all blinds
                  <span aria-hidden className="inline-flex">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                      <path d="M4 12h15" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <a href={links[2].href} className="nav-link px-0 py-2 font-heading text-[15px] font-semibold text-black">
              Services
            </a>
            <a href={links[3].href} className="nav-link px-0 py-2 font-heading text-[15px] font-semibold text-black">
              Contact
            </a>
          </nav>

          <div className="hidden flex-none items-center gap-7 lg:flex">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 font-heading text-[15px] font-semibold text-black transition-colors duration-300 ease-[ease] nav:inline-flex hover:text-accent-deep"
            >
              <PhoneIcon />
              {site.phoneDisplay}
            </a>
            <ArrowButton href={live("/contact-us")} variant="nav">
              Free Quote
            </ArrowButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={live("/contact-us")}
              className="hidden min-h-11 items-center bg-accent px-4 font-heading text-sm font-semibold text-black min-[768px]:inline-flex"
            >
              Free Quote
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid h-12 w-12 cursor-pointer place-items-center border-0 bg-transparent p-0"
            >
              <span className="flex w-6 flex-col gap-1.5">
                <span
                  className="block h-0.5 bg-black transition-transform duration-[450ms] ease-[cubic-bezier(.2,.7,.1,1)]"
                  style={{ transform: menuOpen ? "translateY(4px) rotate(45deg)" : "none" }}
                />
                <span
                  className="block h-0.5 bg-black transition-transform duration-[450ms] ease-[cubic-bezier(.2,.7,.1,1)]"
                  style={{ transform: menuOpen ? "translateY(-4px) rotate(-45deg)" : "none" }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
