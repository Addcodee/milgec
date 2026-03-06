import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import GSAPProvider from "../components/GSAPProvider";
import UniversitiesHero from "./UniversitiesHero";
import UniversityList from "./UniversityList";
import UniversityCTA from "./UniversityCTA";

export const metadata: Metadata = {
  title: "Университеты-партнёры | MilGEC — 200+ вузов Китая",
  description:
    "Полный список университетов Китая, с которыми сотрудничает MilGEC. Официальные авторизационные письма от каждого вуза.",
};

export default function UniversitiesPage() {
  return (
    <GSAPProvider>
      <Header />
      <UniversitiesHero />
      <UniversityList />
      <UniversityCTA />
      <Footer />
      <WhatsAppButton />
    </GSAPProvider>
  );
}
