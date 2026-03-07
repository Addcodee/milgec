"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import StaggerGrid from "./StaggerGrid";

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    name: "Стандартный",
    emoji: "📋",
    price: "$1 500",
    desc: "Частичная скидка на обучение",
    features: [
      "Анализ профиля и подбор вузов",
      "Подготовка и оформление документов",
      "Подача заявок в несколько вузов",
      "Оптимизация заявки на скидку",
      "Сопровождение до зачисления",
    ],
    cta: "Выбрать пакет",
    featured: false,
  },
  {
    name: "Под зонтом",
    emoji: "☂️",
    price: "$2 000",
    desc: "Бесплатное обучение",
    features: [
      "Всё из пакета «Стандартный»",
      "Подача на полный грант обучения",
      "Стратегия поступления на бюджет",
      "Работа с несколькими вузами",
      "Сопровождение до зачисления",
    ],
    cta: "Выбрать пакет",
    featured: false,
  },
  {
    name: "Ударник",
    emoji: "🎯",
    price: "$2 500",
    desc: "Обучение + проживание",
    features: [
      "Всё из пакета «Под зонтом»",
      "Грант на обучение и проживание",
      "Приоритетный подбор вузов",
      "Помощь с оформлением визы",
      "Подготовка к отъезду",
    ],
    cta: "Выбрать пакет",
    featured: false,
  },
  {
    name: "Всё включено",
    emoji: "🚀",
    price: "$3 000",
    desc: "Полный грант: обучение + проживание + стипендия",
    features: [
      "Всё из пакета «Ударник»",
      "Полный грант со стипендией",
      "Встреча в аэропорту в Китае",
      "Регистрация в кампусе",
      "Поддержка 24/7 в первый семестр",
      "Пакет приветствия",
    ],
    cta: "Полное сопровождение",
    featured: true,
  },
];

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.from("[data-pricing-header]", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="bg-bg-alt py-20 md:py-24 overflow-hidden" id="pricing">
      <div className="max-w-300 mx-auto px-6">
        <div data-pricing-header className="text-center mb-12">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-3">Тарифы</p>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold text-navy tracking-[-0.02em] mb-3">
            Прозрачные цены. Без сюрпризов.
          </h2>
          <p className="text-text-muted text-sm max-w-115 mx-auto">
            Выберите подходящий формат сотрудничества
          </p>
        </div>

        <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`card-hover rounded-2xl p-7 flex flex-col ${
                t.featured
                  ? "bg-navy text-white md:-translate-y-2 shadow-[0_12px_40px_rgba(27,42,74,0.25)]"
                  : "bg-white border border-border/60 shadow-[0_2px_8px_rgba(27,42,74,0.06)]"
              }`}
            >
              {/* Emoji */}
              <div className="text-4xl mb-4">{t.emoji}</div>

              {/* Badge */}
              {t.featured && (
                <div className="inline-flex self-start bg-gold/20 text-gold text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg mb-4">
                  Самый популярный
                </div>
              )}

              <h3 className={`text-[17px] font-bold mb-1 ${t.featured ? "text-white" : "text-navy"}`}>
                {t.name}
              </h3>
              <div className={`text-2xl font-extrabold mb-1 ${t.featured ? "text-white" : "text-navy"}`}>
                {t.price}
              </div>
              <p className={`text-[13px] mb-6 ${t.featured ? "text-white/50" : "text-text-muted"}`}>
                {t.desc}
              </p>

              <ul className="flex flex-col gap-2.5 mb-8 grow">
                {t.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-[13px] ${t.featured ? "text-white/70" : "text-text-secondary"}`}>
                    <span className={`w-4.5 h-4.5 rounded-full text-[10px] flex items-center justify-center shrink-0 mt-0.5 ${
                      t.featured ? "bg-gold/20 text-gold" : "bg-gold/10 text-gold"
                    }`}>&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#form"
                className={`block text-center font-semibold text-sm py-3 rounded-xl transition-all ${
                  t.featured
                    ? "bg-gold hover:bg-gold-hover text-white hover:shadow-[0_4px_20px_rgba(212,168,67,0.35)]"
                    : "border border-navy/20 text-navy hover:bg-navy hover:text-white"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </StaggerGrid>

        <p className="text-text-muted text-xs text-center mt-8 max-w-150 mx-auto">
          Оплата в тенге по курсу Национального Банка РК на дату оплаты.
          В стоимость не входят: плата за обучение, проживание,
          транспорт, страховка и личные расходы — они оплачиваются напрямую.
        </p>
      </div>
    </section>
  );
}
