import Image from "next/image";
import { site } from "@/lib/site";
import { ArrowButton } from "@/components/ui/Button";
import { Diamond } from "@/components/ui/Icons";

const slatDelays = {
  mobile: [0.05, 0.085, 0.12, 0.155, 0.19, 0.225, 0.26, 0.295],
  desktop: [0.1, 0.155, 0.21, 0.265, 0.32, 0.375, 0.43, 0.485],
};

function Slats({ variant }: { variant: "mobile" | "desktop" }) {
  const delays = variant === "mobile" ? slatDelays.mobile : slatDelays.desktop;
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${variant === "mobile" ? "md:hidden" : "hidden md:block"}`}
    >
      {delays.map((delay, index) => (
        <div
          key={delay}
          className={`hero-slat ${variant === "mobile" ? "hero-slat-m" : "hero-slat-d"} ${
            index === delays.length - 1 ? "hero-slat-last" : ""
          }`}
          style={{ top: `${index * 12.5}%`, animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  );
}

function HeroMeta({ tone }: { tone: "light" | "dark" }) {
  const label = tone === "light" ? "text-white/80" : "text-muted";
  const value = tone === "light" ? "text-white" : "text-black";
  const rule = tone === "light" ? "border-white/40" : "border-line";

  return (
    <div className={`flex flex-wrap gap-x-12 gap-y-4 border-t-2 pt-[18px] ${rule}`}>
      <div>
        <div className={`font-heading text-xs font-semibold tracking-[0.14em] uppercase ${label}`}>
          Service area
        </div>
        <div className={`mt-1.5 text-[15px] font-medium ${value}`}>{site.area}</div>
      </div>
      <div>
        <div className={`font-heading text-xs font-semibold tracking-[0.14em] uppercase ${label}`}>
          Talk to Duncan
        </div>
        <a
          href={site.phoneHref}
          className={`mt-0.5 inline-flex min-h-8 items-center text-[15px] font-medium transition-colors duration-300 ease-[ease] ${value} hover:text-accent`}
        >
          {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-paper pt-16 lg:pt-[88px]">
      <div className="hero-frame relative overflow-hidden bg-[#1C2222]">
        <div
          data-hero-parallax
          className="absolute inset-0 md:-top-[8%] md:-bottom-[8%] lg:will-change-transform"
        >
          <Image
            src="/images/hero.webp"
            alt="Contemporary living room with a cream sectional sofa beneath a wall of linen-look roller blinds overlooking the garden"
            fill
            preload
            quality={90}
            sizes="100vw"
            className="hero-photo object-cover"
          />
        </div>
        <div aria-hidden className="hero-shade pointer-events-none absolute inset-0" />
        <Slats variant="mobile" />
        <Slats variant="desktop" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-end justify-between gap-x-16 gap-y-10 px-[clamp(20px,5vw,40px)] pb-7 md:px-[clamp(20px,4.5vw,72px)] md:pb-[clamp(40px,5vw,72px)]">
            <div className="w-full max-w-[680px] md:flex-[0_1_680px] md:[text-shadow:0_1px_28px_rgba(0,0,0,.28)]">
              <p className="hero-kicker m-0 flex items-center gap-2.5 font-heading text-xs font-semibold tracking-[0.16em] text-white uppercase md:gap-3 md:text-[13px] md:tracking-[0.18em]">
                <Diamond />
                Made-to-measure blinds · Christchurch
              </p>
              <h1
                id="hero-title"
                className="mt-3.5 mb-0 font-heading text-[clamp(38px,10.4vw,60px)] leading-[1.02] font-medium tracking-[-0.03em] text-white md:mt-[clamp(20px,2vw,28px)] md:text-[clamp(46px,5.8vw,92px)] md:leading-none"
              >
                <span className="block overflow-hidden pt-0 pb-[0.08em] -mb-[0.08em]">
                  <span className="hero-line block">Beautiful Blinds.</span>
                </span>
                <span className="block overflow-hidden pt-0 pb-[0.08em] -mb-[0.08em]">
                  <span className="hero-line-2 block">Perfectly Fitted.</span>
                </span>
              </h1>
              <p className="hero-copy mt-3.5 mb-0 max-w-[30em] text-base leading-[1.55] text-pretty text-white/90 md:mt-[clamp(20px,2vw,28px)] md:text-[clamp(16px,1.25vw,18px)] md:leading-[1.6]">
                Made-to-measure window coverings, personal advice and professional installation for Christchurch homes.
              </p>
              <div className="hero-actions mt-[22px] flex flex-col items-start gap-1.5 [text-shadow:none] md:mt-[clamp(28px,2.6vw,40px)] md:flex-row md:flex-wrap md:items-center md:gap-x-8 md:gap-y-3">
                <ArrowButton href={`${site.liveUrl}/contact-us`} variant="hero">
                  <span className="min-[400px]:hidden">Get a Free Quote</span>
                  <span className="hidden min-[400px]:inline">Get a Free Measure &amp; Quote</span>
                </ArrowButton>
                <a
                  href="#collection"
                  className="hero-explore-m link-rule inline-flex min-h-12 items-center font-heading text-[15px] font-semibold whitespace-nowrap text-white transition-colors duration-300 ease-[ease] hover:text-accent md:min-h-11 md:text-base"
                >
                  Explore Our Blinds
                </a>
              </div>
            </div>
            <div className="hero-meta-d hidden md:block md:flex-[0_1_auto]">
              <HeroMeta tone="light" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-[clamp(20px,5vw,40px)] pt-5 pb-2 md:hidden">
        <HeroMeta tone="dark" />
      </div>
    </section>
  );
}
