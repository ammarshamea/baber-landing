import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Process from "@/components/Process";
import BookingHighlight from "@/components/BookingHighlight";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import Trust from "@/components/Trust";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Values />
        <Process />
        <BookingHighlight />
        <Features />
        <Showcase />
        <Trust />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
