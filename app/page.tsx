import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import Values from "@/components/Values";
import Process from "@/components/Process";
import Features from "@/components/Features";
import BookingHighlight from "@/components/BookingHighlight";
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
        <VisionMission />
        <Values />
        <Process />
        <Features />
        <BookingHighlight />
        <Showcase />
        <Trust />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
