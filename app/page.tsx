import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2 bg-background">
      <div className="w-16 h-0.5 bg-primary/20 rounded-full" />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SectionDivider />
      <Products />
      <SectionDivider />
      <About />
      <SectionDivider />
      <WhyUs />
      <SectionDivider />
      <CTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
