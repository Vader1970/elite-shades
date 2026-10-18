import Image from "next/image";
import { processSteps } from "@/data/faqs";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionKicker";

export function Process() {
  return (
    <section aria-labelledby="process-title" className="pt-[clamp(96px,11vw,160px)]">
      <Container>
        <SectionKicker label="How It Works" index="04" />
        <div className="mt-[clamp(40px,5vw,72px)] flex flex-wrap items-end gap-x-[clamp(40px,6vw,104px)] gap-y-10">
          <div className="flex-[1_1_420px]">
            <h2
              id="process-title"
              data-reveal="up"
              className="m-0 max-w-[10em] font-heading text-[clamp(36px,4.6vw,68px)] leading-[1.02] font-medium tracking-[-0.028em] text-balance text-black"
            >
              Simple From Start to Finish.
            </h2>
            <p data-reveal="up" data-delay="120" className="mt-7 mb-0 max-w-[30em] text-[17px] leading-[1.65] text-pretty text-body">
              No showroom visits and no guesswork. Duncan comes to you, measures precisely and looks after every step through to installation.
            </p>
          </div>
          <div data-reveal="clip" className="relative aspect-[3/2] flex-[1_1_440px] overflow-hidden bg-[#E9E7E3]">
            <Image
              src="/images/measuring.jpg"
              alt="Hands measuring a white window frame with a metal ruler and pencil"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[50%_60%]"
            />
          </div>
        </div>
        <ol className="mt-[clamp(56px,7vw,104px)] mb-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-y-10 p-0 sm:gap-y-12">
          {processSteps.map((step, index) => (
            <li key={step.n} className="relative pr-[clamp(24px,3vw,48px)] pt-8 sm:pt-11">
              <div aria-hidden className="absolute top-0 right-0 left-0 h-0.5 bg-line" />
              <div
                aria-hidden
                data-reveal="line"
                data-delay={step.lineDelay}
                className="absolute top-0 right-0 left-0 h-0.5 bg-accent"
              />
              <div
                aria-hidden
                className="absolute top-[-5px] left-0 h-3 w-7 bg-black"
                style={{ clipPath: "polygon(30% 0, 100% 0, 70% 100%, 0 100%)" }}
              />
              <div data-reveal="up" data-delay={step.textDelay} className="flex flex-row items-start gap-5 sm:flex-col sm:gap-7">
                <div
                  aria-hidden
                  className="min-w-[1.4em] flex-none font-heading text-[44px] leading-[0.9] font-medium tracking-[-0.028em] text-black tabular-nums sm:text-[clamp(56px,5vw,80px)]"
                >
                  {step.n}
                </div>
                <div className="min-w-0">
                  <h3 className="m-0 font-heading text-[clamp(21px,1.8vw,26px)] font-semibold tracking-[-0.025em] text-black">
                    <span className="sr-only">Step {index + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-3 mb-0 max-w-[24em] text-[17px] leading-[1.65] text-pretty text-body">{step.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
