import Hero from "./components/Hero";
import Products from "./components/Products";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Products limit={3} />
      <CTA />
    </>
  );
}
