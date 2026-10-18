"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { site } from "@/lib/site";
import { ArrowLeft, ArrowRight, ArrowUpRight, Stars } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionKicker";

function ReviewControls({
  index,
  total,
  onPrev,
  onNext,
}: {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous review"
          aria-controls="review-track"
          className="grid h-[52px] w-[52px] cursor-pointer place-items-center border-2 border-black bg-transparent text-black transition-colors duration-300 hover:bg-black hover:text-white"
        >
          <ArrowLeft />
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label="Next review"
          aria-controls="review-track"
          className="grid h-[52px] w-[52px] cursor-pointer place-items-center border-2 border-black bg-transparent text-black transition-colors duration-300 hover:bg-black hover:text-white"
        >
          <ArrowRight />
        </button>
        <span className="ml-3 font-heading text-[15px] font-semibold text-black tabular-nums">
          {String(index + 1).padStart(2, "0")}
          <span className="text-[#5E6464]"> / {String(total).padStart(2, "0")}</span>
        </span>
      </div>
      <a
        href={site.googleReviews}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-11 items-center gap-2 font-heading text-[15px] font-semibold text-accent-deep transition-colors duration-300 ease-[ease] hover:text-black"
      >
        Read Our Google Reviews
        <ArrowUpRight />
      </a>
    </div>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const prev = () => setIndex((current) => (current - 1 + total) % total);
  const next = () => setIndex((current) => (current + 1) % total);

  return (
    <section
      aria-labelledby="reviews-title"
      className="mt-[clamp(96px,11vw,160px)] bg-[rgba(36,236,230,0.07)] py-[clamp(80px,10vw,144px)]"
    >
      <Container>
        <SectionKicker label="Customer Reviews" index="05" indexClassName="text-[#5E6464]" />
        <div className="mt-[clamp(40px,5vw,72px)] flex flex-wrap gap-x-[clamp(40px,7vw,128px)] gap-y-10">
          <div className="flex flex-[0_1_420px] flex-col">
            <h2
              id="reviews-title"
              data-reveal="up"
              className="m-0 max-w-[9em] font-heading text-[clamp(36px,4.6vw,68px)] leading-[1.02] font-medium tracking-[-0.028em] text-balance text-black"
            >
              Kind Words From Our Customers.
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
              <Stars />
              <span className="text-[15px] font-medium text-black">5-star reviews on Google</span>
            </div>
            <div className="mt-auto hidden xl:block" />
            <div className="mt-12 hidden xl:block">
              <ReviewControls index={index} total={total} onPrev={prev} onNext={next} />
            </div>
          </div>

          <div
            data-reveal="fade"
            role="group"
            aria-roledescription="carousel"
            aria-label="Customer reviews"
            className="max-w-[820px] flex-[1_1_520px]"
          >
            <div id="review-track" aria-live="polite" className="grid">
              {testimonials.map((review, reviewIndex) => {
                const active = reviewIndex === index;
                return (
                  <figure
                    key={review.name}
                    aria-roledescription="slide"
                    aria-label={`${reviewIndex + 1} of ${total}: ${review.name}`}
                    aria-hidden={!active}
                    className="col-start-1 row-start-1 m-0 flex flex-col"
                    style={{
                      opacity: active ? 1 : 0,
                      transform: active ? "none" : "translateY(14px)",
                      visibility: active ? "visible" : "hidden",
                      transition:
                        "opacity .6s ease, transform .8s cubic-bezier(.2,.7,.1,1), visibility .6s",
                    }}
                  >
                    <span aria-hidden className="h-12 font-heading text-[96px] leading-[0.7] font-medium text-accent">
                      “
                    </span>
                    <blockquote className="mt-7 mb-9 font-heading text-[clamp(20px,2.1vw,30px)] leading-[1.42] font-medium tracking-[-0.018em] text-pretty text-black">
                      {review.quote}
                    </blockquote>
                    <figcaption className="mt-auto flex items-center gap-4 border-t-2 border-black pt-5">
                      {review.image ? (
                        <Image
                          src={review.image}
                          alt=""
                          width={48}
                          height={48}
                          className="h-12 w-12 flex-none rounded-full object-cover"
                        />
                      ) : (
                        <span
                          aria-hidden
                          className="grid h-12 w-12 flex-none place-items-center rounded-full bg-[#1A5FA8] font-sans text-[22px] font-medium text-white"
                        >
                          {review.initial}
                        </span>
                      )}
                      <span className="min-w-0 flex-1">
                        <span className="block font-heading text-[17px] font-semibold text-black">{review.name}</span>
                        <span className="mt-1 flex items-center gap-2 text-sm text-body">
                          <span aria-hidden className="inline-flex w-[76px] origin-left scale-[0.78]">
                            <Stars size={18} label="5 stars" />
                          </span>
                          Google review
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
            <div className="mt-8 xl:hidden">
              <ReviewControls index={index} total={total} onPrev={prev} onNext={next} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
