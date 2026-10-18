import Image from "next/image";
import { blindLinks, footerExplore } from "@/data/navigation";
import { live, site } from "@/lib/site";
import { ArrowRight } from "@/components/ui/Icons";

function FooterLink({ href, children }: { href: string; children: string }) {
  return (
    <li>
      <a href={href} className="inline-flex min-h-9 items-center text-[#A8ADAD] transition-colors duration-300 ease-[ease] hover:text-accent">
        {children}
      </a>
    </li>
  );
}

export function Footer() {
  return (
    <footer data-screen-label="Footer" className="bg-black text-[#A8ADAD]">
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,4.5vw,72px)] pt-[clamp(72px,8vw,112px)] pb-8">
        <div className="flex flex-wrap gap-x-[clamp(32px,4vw,64px)] gap-y-14">
          <div className="max-w-[440px] flex-[2_1_320px]">
            <a href={live("/")} aria-label="Elite Shades — home" className="inline-flex items-center gap-3.5">
              <Image src="/images/logo-mark.png" alt="" width={332} height={281} className="h-11 w-auto" />
              <Image
                src="/images/logo-wordmark.png"
                alt="Elite Shades"
                width={459}
                height={72}
                className="h-[25px] w-auto"
              />
            </a>
            <p className="mt-7 text-[15px] leading-[1.7] text-pretty text-[#A8ADAD]">
              A local, Kiwi-owned business supplying and installing custom made-to-measure window coverings across Christchurch &amp; the Waimakariri District.
            </p>
            <a
              href={live("/contact-us")}
              className="mt-6 inline-flex min-h-11 items-center gap-2.5 font-heading text-[15px] font-semibold text-accent transition-colors duration-300 ease-[ease] hover:text-white"
            >
              Book a free measure &amp; quote
              <ArrowRight size={16} />
            </a>
          </div>

          <nav aria-label="Blinds" className="flex-[1_1_170px]">
            <h2 className="font-heading text-xs font-semibold tracking-[0.14em] text-white uppercase">Blinds</h2>
            <ul className="mt-5 flex list-none flex-col gap-0.5 p-0 text-[15px]">
              {blindLinks.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer" className="flex-[1_1_170px]">
            <h2 className="font-heading text-xs font-semibold tracking-[0.14em] text-white uppercase">Explore</h2>
            <ul className="mt-5 flex list-none flex-col gap-0.5 p-0 text-[15px]">
              {footerExplore.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </ul>
          </nav>

          <div className="flex-[1_1_220px]">
            <h2 className="font-heading text-xs font-semibold tracking-[0.14em] text-white uppercase">Contact</h2>
            <div className="mt-5 flex flex-col gap-5 text-[15px]">
              <div>
                <div className="text-[13px] text-[#7E8585]">Call</div>
                <a
                  href={site.phoneHref}
                  className="inline-flex min-h-8 items-center font-heading text-[17px] font-semibold text-white transition-colors duration-300 ease-[ease] hover:text-accent"
                >
                  {site.phoneDisplay}
                </a>
              </div>
              <div>
                <div className="text-[13px] text-[#7E8585]">Email</div>
                <a
                  href={site.emailHref}
                  className="inline-flex min-h-8 items-center font-heading text-[17px] font-semibold text-white transition-colors duration-300 ease-[ease] hover:text-accent"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <div className="text-[13px] text-[#7E8585]">Service area</div>
                <div className="mt-1 font-medium text-white">{site.areaLong}</div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-[13px] leading-relaxed text-[#7E8585]">
          A website redesign concept by Pegasus Digital. This preview is not the live Elite Shades website.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t-2 border-[#1F2323] pt-6 text-[13px] text-[#7E8585]">
          <span>© 2026 Elite Shades. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-7 gap-y-1">
            <a href={live("/privacy")} className="inline-flex min-h-11 items-center text-[#A8ADAD] transition-colors duration-300 ease-[ease] hover:text-accent">
              Privacy Policy
            </a>
            <a
              href={live("/terms-and-conditions")}
              className="inline-flex min-h-11 items-center text-[#A8ADAD] transition-colors duration-300 ease-[ease] hover:text-accent"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
