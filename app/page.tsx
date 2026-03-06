import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import AboutUs from "./components/AboutUs";
import PainPoints from "./components/PainPoints";
import MiniCTA from "./components/MiniCTA";
import EventsGallery from "./components/EventsGallery";
import Trust from "./components/Trust";
import Process from "./components/Process";
import OfficialPartner from "./components/OfficialPartner";
import CaseStudies from "./components/CaseStudies";
import Filter from "./components/Filter";
import Pricing from "./components/Pricing";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import GSAPProvider from "./components/GSAPProvider";

export default function Home() {
  return (
    <GSAPProvider>
      <Header />
      <Hero />
      <TrustStrip />
      <AboutUs />
      <PainPoints />
      <MiniCTA text="Узнайте свои шансы бесплатно" />
      <EventsGallery />
      <Trust />
      <Process />
      <OfficialPartner />
      <CaseStudies />
      <MiniCTA text="Получить бесплатную оценку" />
      <Filter />
      <Pricing />
      <LeadForm />
      <Footer />
      <WhatsAppButton />
    </GSAPProvider>
  );
}
