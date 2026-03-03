import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import PainPoints from "./components/PainPoints";
import Process from "./components/Process";
import Trust from "./components/Trust";
import CaseStudies from "./components/CaseStudies";
import Pricing from "./components/Pricing";
import Filter from "./components/Filter";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import RevealOnScroll from "./components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustStrip />
      <RevealOnScroll>
        <PainPoints />
      </RevealOnScroll>
      <RevealOnScroll>
        <Process />
      </RevealOnScroll>
      <RevealOnScroll>
        <Trust />
      </RevealOnScroll>
      <RevealOnScroll>
        <Pricing />
      </RevealOnScroll>
      <RevealOnScroll>
        <CaseStudies />
      </RevealOnScroll>
      <RevealOnScroll>
        <Filter />
      </RevealOnScroll>
      <RevealOnScroll>
        <LeadForm />
      </RevealOnScroll>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
