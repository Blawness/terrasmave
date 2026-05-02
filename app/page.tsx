import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <WhyUs />
      <CTA />
      <Footer />
    </main>
  );
}
