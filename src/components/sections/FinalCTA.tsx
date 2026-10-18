import { site } from "@/lib/site";
import { ArrowButton } from "@/components/ui/Button";
import { Diamond } from "@/components/ui/Icons";

const slatDelays = [0, 90, 180, 270, 360];

export function FinalCTA() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden text-[#D2D9D9]"
      style={{ background: "linear-gradient(115deg, #000000 18%, #021F1E 58%, #04504D 100%)" }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          data-cta-slats
          className="absolute -top-[12%] -right-[8%] flex h-[124%] w-[min(62vw,900px)] flex-col justify-center gap-[clamp(18px,2.4vw,36px)] will-change-transform"
        >
          {slatDelays.map((delay) => (
            <div
              key={delay}
              data-reveal="slat"
              data-delay={delay}
              className="h-[clamp(34px,4.4vw,70px)] skew-x-[-38deg] bg-[linear-gradient(90deg,rgba(10,186,181,0),rgba(10,186,181,0.16))]"
            />
          ))}
        </div>
      </div>
      <div className="relative mx-auto max-w-[1440px] px-[clamp(20px,4.5vw,72px)] py-[clamp(96px,12vw,176px)]">
        <p
          data-reveal="up"
          className="m-0 flex items-center gap-3 font-heading text-xs font-semibold tracking-[0.16em] text-accent uppercase"
        >
          <Diamond />
          Free in-home measure &amp; quote
        </p>
        <h2
          id="cta-title"
          className="mt-7 mb-0 font-heading text-[clamp(42px,6.4vw,104px)] leading-none font-medium tracking-[-0.03em] text-white"
        >
          <span className="block overflow-hidden pt-0 pb-[0.1em] -mb-[0.1em]">
            <span data-reveal="mask" data-delay="0" className="block">
              Ready to Transform
            </span>
          </span>
          <span className="block overflow-hidden pt-0 pb-[0.1em] -mb-[0.1em]">
            <span data-reveal="mask" data-delay="110" className="block">
              Your Windows?
            </span>
          </span>
        </h2>
        <p
          data-reveal="up"
          data-delay="250"
          className="mt-8 mb-0 max-w-[30em] text-[clamp(16px,1.3vw,19px)] leading-[1.65] text-pretty text-[#D2D9D9]"
        >
          Let’s find the perfect window coverings for your home. Arrange your free in-home measure and quote today.
        </p>
        <div data-reveal="up" data-delay="350" className="mt-11 flex flex-wrap items-center gap-x-9 gap-y-4">
          <ArrowButton href={`${site.liveUrl}/contact-us`} variant="cta">
            Get Your Free Quote
          </ArrowButton>
          <a href={site.phoneHref} className="inline-flex min-h-11 items-center font-heading text-base font-semibold text-white transition-colors duration-300 ease-[ease] hover:text-accent">
            or call Duncan on {site.phoneDisplay}
          </a>
        </div>
        <div
          data-reveal="up"
          data-delay="450"
          className="mt-[clamp(56px,7vw,96px)] flex flex-wrap gap-x-8 gap-y-3 border-t-2 border-[rgba(255,255,255,0.14)] pt-6 text-sm font-medium text-[#D2D9D9]"
        >
          {["Free in-home measure", "Same-day quote", "Christchurch & Waimakariri"].map((item) => (
            <span key={item} className="flex items-center gap-2.5">
              <Diamond className="h-1.5 w-3.5" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
