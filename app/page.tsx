import Hero from "./components/Hero";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import JsonLd from "./components/JsonLd";
import { faqLd } from "./data/seo";

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd} />
      <Hero />
      <Products limit={3} />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
