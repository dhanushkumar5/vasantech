import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import DoorstepService from "@/components/DoorstepService";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-28 bg-surface flex-grow pb-16 lg:pb-0">
        <Hero />
        <About />
        <Services />
        <Products />
        <DoorstepService />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
