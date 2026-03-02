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

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustStrip />
      <PainPoints />
      <Process />
      <Trust />
      <CaseStudies />
      <Pricing />
      <Filter />
      <LeadForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
