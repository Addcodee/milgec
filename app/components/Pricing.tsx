"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import StaggerGrid from "./StaggerGrid";

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    name: "Бесплатная оценка",
    emoji: "🔍",
    price: "Бесплатно",
    best: "Хочу понять свои варианты",
    features: [
      "Анализ профиля",
      "Рекомендации по университетам",
      "Оценка шансов на стипендию",
      "Персональная разбивка стоимости",
    ],
    cta: "Получить бесплатную оценку",
    featured: false,
    free: true,
  },
  {
    name: "Пакет «Поступление»",
    emoji: "📋",
    price: "$—",
    best: "Я точно хочу учиться в Китае",
    features: [
      "Всё из бесплатной оценки",
      "Подготовка и оформление документов",
      "Подача заявок в несколько вузов",
      "Оптимизация заявки на стипендию",
      "Сопровождение до зачисления",
    ],
    cta: "Начать поступление",
    featured: false,
    free: false,
  },
  {
    name: "Полный пакет",
    emoji: "🚀",
    price: "$—",
    best: "Сделайте всё за меня",
    features: [
      "Всё из пакета «Поступление»",
      "Помощь с оформлением визы",
      "Подготовка к отъезду",
      "Встреча в аэропорту в Китае",
      "Регистрация в кампусе",
      "Поддержка 24/7 в первый семестр",
      "Пакет приветствия",
    ],
    cta: "Полное сопровождение",
    featured: true,
    free: false,
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

        <StaggerGrid className="grid md:grid-cols-3 gap-4 items-start">
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
              {t.free && (
                <div className="inline-flex self-start bg-success/10 text-success text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg mb-4">
                  Начните здесь
                </div>
              )}

              <h3 className={`text-[17px] font-bold mb-1 ${t.featured ? "text-white" : "text-navy"}`}>
                {t.name}
              </h3>
              <div className={`text-2xl font-extrabold mb-1 ${t.free ? "text-success" : t.featured ? "text-white" : "text-navy"}`}>
                {t.price}
              </div>
              <p className={`text-[13px] mb-6 ${t.featured ? "text-white/50" : "text-text-muted"}`}>
                &laquo;{t.best}&raquo;
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
                    : t.free
                      ? "bg-success hover:bg-success/90 text-white hover:shadow-[0_4px_20px_rgba(34,197,94,0.25)]"
                      : "border border-navy/20 text-navy hover:bg-navy hover:text-white"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </StaggerGrid>

        <p className="text-text-muted text-xs text-center mt-8 max-w-150 mx-auto">
          В стоимость не входят: плата за обучение, проживание,
          транспорт, страховка и личные расходы — они оплачиваются напрямую.
        </p>
      </div>
    </section>
  );
}
