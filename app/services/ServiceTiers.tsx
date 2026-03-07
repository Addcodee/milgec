"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    name: "Стандартный",
    price: "$1 500",
    desc: "Частичная скидка на обучение",
    features: [
      "Анализ академического профиля",
      "Рекомендации по университетам",
      "Подготовка и оформление документов",
      "Мотивационное письмо и CV",
      "Подача заявок в несколько вузов",
      "Оптимизация заявки на скидку",
      "Сопровождение до зачисления",
    ],
    notIncluded: [
      "Визовая поддержка",
      "Встреча в аэропорту",
      "Поддержка после зачисления",
    ],
    cta: "Выбрать пакет",
    featured: false,
  },
  {
    name: "Под зонтом",
    price: "$2 000",
    desc: "Бесплатное обучение",
    features: [
      "Всё из пакета «Стандартный»",
      "Подача на полный грант обучения",
      "Стратегия поступления на бюджет",
      "Коммуникация с приёмной комиссией",
      "Работа с несколькими вузами",
      "Сопровождение до зачисления",
    ],
    notIncluded: [
      "Визовая поддержка",
      "Встреча в аэропорту",
      "Поддержка после зачисления",
    ],
    cta: "Выбрать пакет",
    featured: false,
  },
  {
    name: "Ударник",
    price: "$2 500",
    desc: "Обучение + проживание",
    features: [
      "Всё из пакета «Под зонтом»",
      "Грант на обучение и проживание",
      "Приоритетный подбор вузов",
      "Помощь с оформлением визы X1/X2",
      "Подготовка к отъезду и чек-лист",
    ],
    notIncluded: [
      "Встреча в аэропорту",
      "Поддержка 24/7",
    ],
    cta: "Выбрать пакет",
    featured: false,
  },
  {
    name: "Всё включено",
    price: "$3 000",
    desc: "Полный грант: обучение + проживание + стипендия",
    features: [
      "Всё из пакета «Ударник»",
      "Полный грант со стипендией",
      "Встреча в аэропорту в Китае",
      "Регистрация в кампусе и общежитии",
      "Открытие банковского счёта и SIM",
      "Поддержка 24/7 в первый семестр",
      "Пакет приветствия",
    ],
    notIncluded: [],
    cta: "Полное сопровождение",
    featured: true,
  },
];

export default function ServiceTiers() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const header = ref.current.querySelector("[data-tier-header]");
    if (header) {
      gsap.set(header, { y: 40, opacity: 0 });
      gsap.to(header, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
      });
    }

    const cards = gsap.utils.toArray<HTMLElement>(ref.current.querySelectorAll("[data-tier-card]"));
    if (cards.length) {
      gsap.set(cards, { y: 40, opacity: 0, scale: 0.97 });
      gsap.to(cards, { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: cards[0], start: "top 85%", toggleActions: "play none none none" },
      });
    }
  }, { scope: ref });

  return (
    <section ref={ref} className="bg-bg-alt py-20 md:py-28 overflow-hidden">
      <div className="max-w-300 mx-auto px-6">
        <div data-tier-header className="text-center mb-14">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-3">Тарифы</p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-navy tracking-[-0.02em] mb-3">
            Прозрачные цены. Без сюрпризов.
          </h2>
          <p className="text-text-muted text-sm max-w-lg mx-auto">
            Выберите подходящий формат сотрудничества. Все пакеты включают персональный подход.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              data-tier-card
              className={`rounded-2xl p-7 flex flex-col transition-all hover:shadow-lg ${
                t.featured
                  ? "bg-navy text-white md:-translate-y-3 shadow-[0_12px_40px_rgba(27,42,74,0.25)]"
                  : "bg-white border border-border/60 shadow-[0_2px_8px_rgba(27,42,74,0.06)]"
              }`}
            >
              {t.featured && (
                <div className="inline-flex self-start bg-gold/20 text-gold text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg mb-4">
                  Самый популярный
                </div>
              )}

              <h3 className={`text-lg font-bold mb-1 ${t.featured ? "text-white" : "text-navy"}`}>
                {t.name}
              </h3>
              <div className={`text-2xl font-extrabold mb-1 ${t.featured ? "text-white" : "text-navy"}`}>
                {t.price}
              </div>
              <p className={`text-[13px] mb-6 ${t.featured ? "text-white/50" : "text-text-muted"}`}>
                {t.desc}
              </p>

              <ul className="flex flex-col gap-2.5 mb-4 grow">
                {t.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-[13px] ${t.featured ? "text-white/70" : "text-text-secondary"}`}>
                    <span className={`w-4.5 h-4.5 rounded-full text-[10px] flex items-center justify-center shrink-0 mt-0.5 ${
                      t.featured ? "bg-gold/20 text-gold" : "bg-gold/10 text-gold"
                    }`}>&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>

              {t.notIncluded.length > 0 && (
                <ul className="flex flex-col gap-2 mb-6 pt-4 border-t border-white/10">
                  {t.notIncluded.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-[13px] ${t.featured ? "text-white/30" : "text-text-muted/50"}`}>
                      <span className={`w-4.5 h-4.5 rounded-full text-[10px] flex items-center justify-center shrink-0 mt-0.5 ${
                        t.featured ? "bg-white/5 text-white/20" : "bg-border/30 text-text-muted/30"
                      }`}>&#10007;</span>
                      <span className="line-through">{f}</span>
                    </li>
                  ))}
                </ul>
              )}

              <a
                href="/#form"
                className={`block text-center font-semibold text-sm py-3.5 rounded-xl transition-all ${
                  t.featured
                    ? "bg-gold hover:bg-gold-hover text-white hover:shadow-[0_4px_20px_rgba(212,168,67,0.35)]"
                    : "border border-navy/20 text-navy hover:bg-navy hover:text-white"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-text-muted text-xs text-center mt-8 max-w-150 mx-auto">
          Оплата в тенге по курсу Национального Банка РК на дату оплаты.
          В стоимость не входят: плата за обучение, проживание,
          транспорт, страховка и личные расходы — они оплачиваются напрямую.
        </p>
      </div>
    </section>
  );
}
