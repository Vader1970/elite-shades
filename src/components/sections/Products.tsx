import Image from "next/image";
import { featuredProducts, rangeProducts } from "@/data/products";
import { live } from "@/lib/site";
import { ArrowRight } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionKicker";

export function Products() {
  return (
    <section
      id="collection"
      aria-labelledby="collection-title"
      className="scroll-mt-16 pt-[clamp(96px,11vw,160px)] lg:scroll-mt-[88px]"
    >
      <Container>
        <SectionKicker label="The Collection" index="02" />
        <div className="mt-[clamp(40px,5vw,72px)] flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
          <h2
            id="collection-title"
            data-reveal="up"
            className="m-0 max-w-[12em] flex-[1_1_520px] font-heading text-[clamp(36px,4.6vw,68px)] leading-[1.02] font-medium tracking-[-0.028em] text-balance text-black"
          >
            Find the Perfect Fit for Your Space.
          </h2>
          <div data-reveal="up" data-delay="120" className="flex-[0_1_420px]">
            <p className="m-0 text-[17px] leading-[1.65] text-pretty text-body">
              Every Elite Shades blind is made to measure — tailored to the room, the light and the way you use it. Explore our most popular styles, then see samples of the full range in your own home.
            </p>
          </div>
        </div>

        <div className="mt-[clamp(48px,6vw,88px)] grid grid-cols-1 items-start gap-x-[clamp(16px,2vw,32px)] gap-y-[clamp(40px,4vw,56px)] sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <a
              key={product.title}
              href={product.href}
              className="product-card group block text-black transition-[margin-top] duration-700 ease-[cubic-bezier(.2,.7,.1,1)]"
            >
              <div
                data-frame
                data-reveal="clip"
                data-delay={index * 140}
                className="product-frame relative overflow-hidden bg-[#E9E7E3]"
              >
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.2,.7,.1,1)] group-hover:scale-105"
                  style={{ objectPosition: product.position }}
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4 border-t-2 border-black pt-[18px]">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-heading text-[13px] font-semibold text-accent-deep">{product.n}</span>
                    <h3 className="m-0 font-heading text-[clamp(21px,1.8vw,26px)] font-semibold tracking-[-0.025em] text-black">
                      {product.title}
                    </h3>
                  </div>
                  <p className="mt-2 mb-0 text-[15px] leading-[1.55] text-body">{product.description}</p>
                </div>
                <span
                  aria-hidden
                  className="grid h-11 w-11 flex-none place-items-center border-2 border-black transition-colors duration-300 group-hover:bg-accent"
                >
                  <span className="flex transition-transform duration-[450ms] ease-[cubic-bezier(.2,.7,.1,1)] group-hover:translate-x-[3px]">
                    <ArrowRight />
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-[clamp(72px,8vw,120px)]">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pb-5">
            <h3 className="m-0 font-heading text-[22px] font-semibold tracking-[-0.02em] text-black">
              Also in the range
            </h3>
            <p className="m-0 text-[15px] leading-normal text-body">Samples of every style are brought to your home.</p>
          </div>
          <div data-reveal="up" className="overflow-hidden border-t-2 border-black">
            <div className="-ml-0.5 grid grid-cols-1 xl:grid-cols-3">
              {rangeProducts.map((product) => (
                <a
                  key={product.title}
                  href={product.href}
                  className="flex items-center gap-[clamp(16px,1.8vw,24px)] border-b-2 border-l-2 border-line p-[clamp(16px,1.8vw,24px)] text-black transition-colors duration-300 hover:bg-white"
                >
                  <span className="aspect-square w-[72px] flex-none overflow-hidden bg-[#E9E7E3] min-[480px]:w-24 xl:w-[clamp(88px,7vw,112px)]">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      width={1024}
                      height={1024}
                      sizes="112px"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: product.position }}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-heading text-lg leading-tight font-semibold tracking-[-0.015em]">
                      {product.title}
                    </span>
                    <span className="mt-1.5 block text-[15px] leading-normal text-pretty text-body">
                      {product.description}
                    </span>
                  </span>
                  <span className="hidden flex-none min-[480px]:block">
                    <ArrowRight />
                  </span>
                </a>
              ))}
            </div>
            <a
              href={live("/products")}
              className="group flex min-h-[84px] items-center justify-between gap-6 bg-black px-[clamp(20px,1.8vw,24px)] py-5 text-white transition-[background-color,color] duration-[350ms] ease-[ease] hover:bg-accent hover:text-black focus-visible:bg-accent focus-visible:text-black active:bg-accent active:text-black"
            >
              <span className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                <span className="font-heading text-xl font-semibold tracking-[-0.015em]">View All Blinds</span>
                <span className="text-[15px] opacity-[.82]">The full Elite Shades range</span>
              </span>
              <span className="flex flex-none transition-transform duration-[450ms] ease-[cubic-bezier(.2,.7,.1,1)] group-hover:translate-x-[5px]">
                <ArrowRight size={22} />
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
