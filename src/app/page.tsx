import { AboutDuncan } from "@/components/sections/AboutDuncan";
import { FAQs } from "@/components/sections/FAQs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Products } from "@/components/sections/Products";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <WhyChooseUs />
      <Products />
      <AboutDuncan />
      <Process />
      <Testimonials />
      <FAQs />
      <FinalCTA />
    </main>
  );
}
