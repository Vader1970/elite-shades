import { reasons } from "@/data/why";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionKicker";

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="pt-[clamp(80px,10vw,144px)]">
      <Container>
        <SectionKicker label="Why Elite Shades" index="01" />
        <h2
          id="why-title"
          data-reveal="up"
          className="mt-[clamp(40px,5vw,72px)] mb-0 max-w-[17em] font-heading text-[clamp(30px,3.6vw,52px)] leading-[1.08] font-medium tracking-[-0.025em] text-balance text-black"
        >
          One local specialist, from the first sample to the final fit.
        </h2>
        <div className="mt-[clamp(48px,6vw,88px)] overflow-hidden">
          <div className="-ml-0.5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))]">
            {reasons.map((reason) => (
              <div
                key={reason.n}
                data-reveal="up"
                data-delay={reason.delay}
                className="border-t-2 border-l-2 border-line px-[clamp(20px,2.2vw,36px)] pt-7 pb-10"
              >
                <div className="font-heading text-[13px] font-semibold text-accent-deep">{reason.n}</div>
                <h3 className="mt-10 mb-0 font-heading text-xl leading-[1.25] font-semibold tracking-[-0.015em] text-black">
                  {reason.title}
                </h3>
                <p className="mt-3 mb-0 text-base leading-[1.6] text-pretty text-body">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
