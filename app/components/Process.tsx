"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import StaggerGrid from "./StaggerGrid";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    emoji: "🔍",
    title: "Аудит профиля",
    desc: "Анализируем вашу академическую историю, документы, бюджет и карьерные цели.",
  },
  {
    num: "02",
    emoji: "🏛️",
    title: "Подбор университетов",
    desc: "Рекомендуем 3–5 лучших вузов и программ из нашей сети 200+ партнёров.",
  },
  {
    num: "03",
    emoji: "📄",
    title: "Подготовка документов",
    desc: "Подготовим, проверим и оформим все документы по требованиям университета.",
  },
  {
    num: "04",
    emoji: "🚀",
    title: "Подача заявки",
    desc: "Подаём заявки и оптимизируем каждую для максимального шанса на стипендию.",
  },
  {
    num: "05",
    emoji: "✅",
    title: "Зачисление",
    desc: "Получаете официальное письмо о зачислении. Помогаем подтвердить поступление.",
  },
  {
    num: "06",
    emoji: "🛂",
    title: "Виза и подготовка",
    desc: "Оформление визы и полная подготовка к жизни в Китае.",
  },
  {
    num: "07",
    emoji: "✈️",
    title: "Встреча в Китае",
    desc: "Встреча в аэропорту. Регистрация в кампусе. Поддержка весь период обучения.",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      gsap.from("[data-process-header]", {
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
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="bg-white py-20 md:py-24" id="process">
      <div className="max-w-300 mx-auto px-6">
        <div data-process-header className="text-center mb-14">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-3">
            Процесс
          </p>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold text-navy tracking-[-0.02em] mb-3">
            Ваш путь в китайский университет
          </h2>
          <p className="text-text-muted text-sm">
            7 понятных шагов. Без догадок.
          </p>
        </div>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.slice(0, 4).map((s) => (
            <div
              key={s.num}
              className="card-hover group bg-bg-alt rounded-2xl p-7 border border-border/50 relative overflow-hidden"
            >
              <span className="absolute top-4 right-5 text-[72px] font-extrabold text-navy/4 leading-none select-none">
                {s.num}
              </span>
              <div className="emoji-bounce text-3xl mb-5">{s.emoji}</div>
              <h3 className="font-bold text-navy text-base mb-2 group-hover:text-gold transition-colors">
                {s.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </StaggerGrid>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {steps.slice(4).map((s) => (
            <div
              key={s.num}
              className="card-hover group bg-bg-alt rounded-2xl p-7 border border-border/50 relative overflow-hidden"
            >
              <span className="absolute top-4 right-5 text-[72px] font-extrabold text-navy/4 leading-none select-none">
                {s.num}
              </span>
              <div className="emoji-bounce text-3xl mb-5">{s.emoji}</div>
              <h3 className="font-bold text-navy text-base mb-2 group-hover:text-gold transition-colors">
                {s.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
