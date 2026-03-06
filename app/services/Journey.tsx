"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Бесплатная консультация",
    desc: "Анализируем вашу академическую историю, GPA, бюджет и карьерные цели. Честная оценка шансов без обязательств.",
    details: [
      "Анализ академического профиля",
      "Оценка шансов на стипендию",
      "Предварительный подбор программ",
      "Разбивка стоимости обучения и проживания",
    ],
  },
  {
    num: "02",
    title: "Подбор университетов",
    desc: "Рекомендуем 3-5 лучших вузов и программ из нашей сети 200+ партнёров. Подбираем с учётом ваших целей и бюджета.",
    details: [
      "Персональная подборка университетов",
      "Сравнение программ и требований",
      "Анализ стипендиальных возможностей",
      "Рекомендации по стратегии подачи",
    ],
  },
  {
    num: "03",
    title: "Подготовка документов",
    desc: "Подготовим, проверим и оформим все документы строго по требованиям университета. Никаких ошибок и отказов из-за бумаг.",
    details: [
      "Мотивационное письмо и CV",
      "Перевод и нотариальное заверение",
      "Рекомендательные письма",
      "Подготовка учебного плана",
    ],
  },
  {
    num: "04",
    title: "Подача заявки",
    desc: "Подаём заявки в несколько вузов одновременно и оптимизируем каждую для максимального шанса на стипендию.",
    details: [
      "Подача в 3-5 университетов",
      "Оптимизация заявки на стипендию CSC/провинциальную/университетскую",
      "Отслеживание статуса заявок",
      "Коммуникация с приёмными комиссиями",
    ],
  },
  {
    num: "05",
    title: "Зачисление",
    desc: "Получаете официальное письмо о зачислении (Admission Letter) и JW202. Помогаем подтвердить поступление.",
    details: [
      "Получение Admission Letter",
      "Оформление JW201/JW202",
      "Подтверждение зачисления",
      "Инструкции по следующим шагам",
    ],
  },
  {
    num: "06",
    title: "Виза и подготовка к отъезду",
    desc: "Полное сопровождение при оформлении студенческой визы X1/X2 и подготовка к жизни в Китае.",
    details: [
      "Подготовка визовых документов",
      "Инструкция по подаче в консульство",
      "Медицинский осмотр (форма)",
      "Чек-лист для переезда",
    ],
  },
  {
    num: "07",
    title: "Встреча в Китае и поддержка",
    desc: "Встреча в аэропорту, регистрация в кампусе и постоянная поддержка на протяжении всего обучения.",
    details: [
      "Встреча в аэропорту",
      "Регистрация в общежитии и университете",
      "Открытие банковского счёта и SIM-карты",
      "Поддержка 24/7 в первый семестр",
    ],
  },
];

export default function Journey() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.fromTo("[data-journey-header]",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
      }
    );

    const cards = ref.current.querySelectorAll("[data-journey-step]");
    if (cards.length) {
      gsap.fromTo(cards,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: cards[0], start: "top 85%", toggleActions: "play none none none" },
        }
      );
    }
  }, { scope: ref });

  return (
    <section ref={ref} className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-300 mx-auto px-6">
        <div data-journey-header className="text-center mb-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-3">Путь поступления</p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-navy tracking-[-0.02em] mb-3">
            7 шагов к вашему университету
          </h2>
          <p className="text-text-muted text-sm max-w-lg mx-auto">
            Каждый этап — под нашим контролем. Вы всегда знаете, что происходит и что будет дальше.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="flex flex-col gap-8 md:gap-0">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={s.num} data-journey-step className="relative md:flex md:items-start">
                  {/* Number dot on the line */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gold text-white text-sm font-bold items-center justify-center z-10 shadow-[0_4px_12px_rgba(212,168,67,0.3)]">
                    {s.num}
                  </div>

                  {/* Left spacer / content */}
                  <div className={`md:w-1/2 ${isLeft ? "md:pr-16" : "md:order-2 md:pl-16"}`}>
                    <div className="bg-bg-alt rounded-2xl p-6 border border-border/50 hover:border-gold/30 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="md:hidden w-8 h-8 rounded-full bg-gold text-white text-xs font-bold flex items-center justify-center shrink-0">
                          {s.num}
                        </span>
                        <h3 className="text-navy font-bold text-base">{s.title}</h3>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">{s.desc}</p>
                      <ul className="flex flex-col gap-1.5">
                        {s.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-text-muted text-xs">
                            <span className="text-gold mt-0.5">&#10003;</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right spacer */}
                  <div className={`hidden md:block md:w-1/2 ${isLeft ? "md:order-2" : ""}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
