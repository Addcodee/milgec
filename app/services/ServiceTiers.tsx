"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    name: "Бесплатная оценка",
    price: "Бесплатно",
    best: "Хочу понять свои варианты",
    features: [
      "Анализ академического профиля",
      "Рекомендации по университетам",
      "Оценка шансов на стипендию",
      "Персональная разбивка стоимости",
      "Консультация в WhatsApp",
    ],
    notIncluded: [
      "Подготовка документов",
      "Подача заявок",
      "Визовая поддержка",
      "Встреча в Китае",
    ],
    cta: "Получить бесплатную оценку",
    featured: false,
    free: true,
  },
  {
    name: "Пакет «Поступление»",
    price: "$—",
    best: "Я точно хочу учиться в Китае",
    features: [
      "Всё из бесплатной оценки",
      "Подготовка и оформление документов",
      "Мотивационное письмо и CV",
      "Подача заявок в 3-5 вузов",
      "Оптимизация заявки на стипендию",
      "Сопровождение до зачисления",
      "Коммуникация с приёмной комиссией",
    ],
    notIncluded: [
      "Визовая поддержка",
      "Встреча в аэропорту",
      "Поддержка после зачисления",
    ],
    cta: "Начать поступление",
    featured: false,
    free: false,
  },
  {
    name: "Полный пакет",
    price: "$—",
    best: "Сделайте всё за меня",
    features: [
      "Всё из пакета «Поступление»",
      "Помощь с оформлением визы X1/X2",
      "Подготовка к отъезду и чек-лист",
      "Встреча в аэропорту в Китае",
      "Регистрация в кампусе и общежитии",
      "Открытие банковского счёта и SIM",
      "Поддержка 24/7 в первый семестр",
      "Пакет приветствия",
    ],
    notIncluded: [],
    cta: "Полное сопровождение",
    featured: true,
    free: false,
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

        <div className="grid md:grid-cols-3 gap-5 items-start">
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
              {t.free && (
                <div className="inline-flex self-start bg-success/10 text-success text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg mb-4">
                  Начните здесь
                </div>
              )}

              <h3 className={`text-lg font-bold mb-1 ${t.featured ? "text-white" : "text-navy"}`}>
                {t.name}
              </h3>
              <div className={`text-2xl font-extrabold mb-1 ${t.free ? "text-success" : t.featured ? "text-white" : "text-navy"}`}>
                {t.price}
              </div>
              <p className={`text-[13px] mb-6 ${t.featured ? "text-white/50" : "text-text-muted"}`}>
                &laquo;{t.best}&raquo;
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
                    : t.free
                      ? "bg-success hover:bg-success/90 text-white hover:shadow-[0_4px_20px_rgba(34,197,94,0.25)]"
                      : "border border-navy/20 text-navy hover:bg-navy hover:text-white"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-text-muted text-xs text-center mt-8 max-w-150 mx-auto">
          В стоимость не входят: плата за обучение, проживание,
          транспорт, страховка и личные расходы — они оплачиваются напрямую.
        </p>
      </div>
    </section>
  );
}
