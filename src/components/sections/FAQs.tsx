"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionKicker";

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-title" className="py-[clamp(96px,11vw,160px)]">
      <Container>
        <SectionKicker label="Frequently Asked" index="06" />
        <div className="mt-[clamp(40px,5vw,72px)] flex flex-wrap gap-x-[clamp(40px,7vw,128px)] gap-y-12">
          <div className="flex-[0_1_420px]">
            <h2
              id="faq-title"
              data-reveal="up"
              className="m-0 max-w-[8em] font-heading text-[clamp(36px,4.6vw,68px)] leading-[1.02] font-medium tracking-[-0.028em] text-balance text-black"
            >
              Your Questions, Answered.
            </h2>
            <p data-reveal="up" data-delay="120" className="mt-7 mb-0 max-w-[24em] text-base leading-[1.65] text-body">
              Can’t see your question? Duncan is always happy to help.
            </p>
            <div data-reveal="up" data-delay="200" className="mt-5 flex flex-col gap-1">
              <a
                href={site.phoneHref}
                className="inline-flex min-h-11 items-center font-heading text-[17px] font-semibold text-black transition-colors duration-300 ease-[ease] hover:text-accent-deep"
              >
                {site.phoneDisplay}
              </a>
              <a
                href={site.emailHref}
                className="inline-flex min-h-11 items-center font-heading text-[17px] font-semibold text-black transition-colors duration-300 ease-[ease] hover:text-accent-deep"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div data-reveal="up" data-delay="100" className="max-w-[820px] flex-[1_1_520px] border-t-2 border-black">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-btn-${index}`;
              return (
                <div key={faq.question} className="border-b-2 border-line">
                  <h3 className="m-0">
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : index)}
                      className="flex min-h-[76px] w-full cursor-pointer items-center justify-between gap-6 border-0 bg-transparent px-0 py-[22px] text-left font-heading text-[clamp(18px,1.6vw,22px)] font-semibold tracking-[-0.02em] text-black transition-colors duration-300 hover:text-accent-deep"
                    >
                      <span>{faq.question}</span>
                      <span
                        aria-hidden
                        className="relative h-9 w-9 flex-none border-2 transition-[background-color,border-color] duration-300"
                        style={{
                          background: open ? "#0ABAB5" : "transparent",
                          borderColor: open ? "#0ABAB5" : "#000",
                        }}
                      >
                        <span className="absolute top-1/2 left-1/2 h-0.5 w-3.5 bg-black" style={{ transform: "translate(-50%, -50%)" }} />
                        <span
                          className="absolute top-1/2 left-1/2 h-3.5 w-0.5 bg-black transition-transform duration-[450ms] ease-[cubic-bezier(.2,.7,.1,1)]"
                          style={{ transform: open ? "translate(-50%, -50%) rotate(90deg)" : "translate(-50%, -50%)" }}
                        />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.2,.7,.1,1)]"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="m-0 max-w-[42em] pr-16 pb-7 text-base leading-[1.7] text-pretty text-body transition-opacity duration-[400ms]"
                        style={{ opacity: open ? 1 : 0 }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
