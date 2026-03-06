import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import GSAPProvider from "../components/GSAPProvider";
import ServicesHero from "./ServicesHero";
import CoreServices from "./CoreServices";

import ServiceTiers from "./ServiceTiers";
import WhyMilGEC from "./WhyMilGEC";
import ServiceCTA from "./ServiceCTA";

export const metadata: Metadata = {
  title: "Услуги | MilGEC — Полное сопровождение поступления в Китай",
  description:
    "От бесплатной оценки шансов до встречи в аэропорту. Узнайте, как MilGEC помогает на каждом этапе поступления в китайский университет.",
};

export default function ServicesPage() {
  return (
    <GSAPProvider>
      <Header />
      <ServicesHero />
      <CoreServices />
      <ServiceTiers />
      <WhyMilGEC />
      <ServiceCTA />
      <Footer />
      <WhatsAppButton />
    </GSAPProvider>
  );
}
