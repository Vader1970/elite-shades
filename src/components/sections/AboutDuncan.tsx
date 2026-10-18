import Image from "next/image";
import { serviceList } from "@/data/why";
import { live } from "@/lib/site";
import { ArrowRight } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionKicker";

export function AboutDuncan() {
  return (
    <section aria-labelledby="personal-title" className="mt-[clamp(96px,11vw,160px)] bg-[#070A0A] py-[clamp(80px,10vw,144px)] text-[#C9CFCF]">
      <Container>
        <SectionKicker label="The Personal Difference" index="03" tone="dark" />
        <div className="mt-[clamp(48px,6vw,88px)] flex flex-wrap gap-x-[clamp(40px,7vw,128px)] gap-y-14">
          <div className="flex-[0_1_340px]">
            <div className="relative max-w-[300px]">
              <div aria-hidden className="absolute top-[18px] right-[-18px] bottom-[-18px] left-[18px] border-2 border-accent" />
              <div data-reveal="clip" className="relative aspect-[3/4] overflow-hidden bg-[#1B2A3A]">
                <Image
                  src="/images/duncan.png"
                  alt="Portrait of Duncan, owner of Elite Shades, wearing a black Elite Shades jacket"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-10">
              <div className="font-heading text-lg font-semibold text-white">Duncan</div>
              <div className="mt-1 text-[15px] text-[#B3BBBB]">Owner, Elite Shades</div>
            </div>
          </div>
          <div className="max-w-[760px] flex-[1_1_480px]">
            <h2
              id="personal-title"
              data-reveal="up"
              className="m-0 font-heading text-[clamp(36px,4.6vw,68px)] leading-[1.02] font-medium tracking-[-0.028em] text-balance text-white"
            >
              Personal Service.
              <br />
              <span className="text-accent">From Start to Finish.</span>
            </h2>
            <p
              data-reveal="up"
              data-delay="120"
              className="mt-9 mb-0 max-w-[36em] text-[clamp(16px,1.25vw,18px)] leading-[1.7] text-pretty text-[#C9CFCF]"
            >
              At Elite Shades you deal directly with Duncan — the person who talks through your options, brings the samples to your door, measures every window and installs your finished blinds. No hand-offs between departments, and no showroom overheads passed on to you.
            </p>
            <ul className="mt-12 mb-0 list-none border-t-2 border-[rgba(255,255,255,0.16)] p-0">
              {serviceList.map((item) => (
                <li
                  key={item.title}
                  data-reveal="up"
                  data-delay={item.delay}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b-2 border-[rgba(255,255,255,0.16)] py-5"
                >
                  <span className="font-heading text-lg font-semibold text-white">{item.title}</span>
                  <span className="text-base text-[#B3BBBB]">{item.detail}</span>
                </li>
              ))}
            </ul>
            <a
              href={live("/about")}
              className="link-grow group mt-10 inline-flex min-h-11 items-center gap-3 font-heading text-[15px] font-semibold text-accent"
            >
              More About Elite Shades
              <span className="flex transition-transform duration-[450ms] ease-[cubic-bezier(.2,.7,.1,1)] group-hover:translate-x-[5px]">
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
