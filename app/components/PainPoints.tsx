"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import StaggerGrid from "./StaggerGrid";

gsap.registerPlugin(ScrollTrigger);

const fears = [
  {
    emoji: "🎓",
    question: "Меня точно примут?",
    answer:
      "Мы рекомендуем только те университеты, куда подходит ваш профиль. Никаких ложных обещаний — только честная оценка на основе вашего GPA, бюджета и целей.",
    variant: "white" as const,
  },
  {
    emoji: "🛡️",
    question: "Это не мошенничество?",
    answer:
      "Официальные письма-авторизации от 200+ университетов. Юридический договор каждому клиенту до начала работы.",
    variant: "white" as const,
  },
  {
    emoji: "💸",
    question: "Сколько это стоит на самом деле?",
    answer:
      "Полная разбивка стоимости до принятия решения. Никаких скрытых платежей. Вы точно знаете, за что платите.",
    variant: "white" as const,
  },
  {
    emoji: "🏠",
    question: "Мой ребёнок будет в безопасности?",
    answer:
      "Встреча в аэропорту. Помощь с регистрацией. Поддержка 24/7 на протяжении всего обучения. Мы не исчезаем после зачисления.",
    variant: "navy" as const,
  },
  {
    emoji: "🤔",
    question: "Я не понимаю китайскую систему",
    answer:
      "И не нужно. Мы проведём через каждый шаг — от выбора программы до критериев стипендии.",
    variant: "white" as const,
  },
  {
    emoji: "💰",
    question: "Что если не дадут стипендию?",
    answer:
      "90% наших студентов получают финансирование. Мы оптимизируем каждую заявку — это наша специализация.",
    variant: "gold" as const,
  },
];

function CardContent({ f, className = "" }: { f: typeof fears[number]; className?: string }) {
  if (f.variant === "navy") {
    return (
      <div className={`bg-navy rounded-2xl p-7 text-white ${className}`}>
        <div className="emoji-bounce text-3xl mb-4">{f.emoji}</div>
        <h3 className="text-base font-bold mb-2">&laquo;{f.question}&raquo;</h3>
        <p className="text-white/60 text-sm leading-relaxed">{f.answer}</p>
      </div>
    );
  }
  if (f.variant === "gold") {
    return (
      <div className={`bg-[#faf5eb] rounded-2xl p-7 border border-gold/20 ${className}`}>
        <div className="emoji-bounce text-3xl mb-4">{f.emoji}</div>
        <h3 className="text-base font-bold text-navy mb-2">&laquo;{f.question}&raquo;</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{f.answer}</p>
      </div>
    );
  }
  return (
    <div className={`bg-white rounded-2xl p-7 border border-border/60 ${className}`}>
      <div className="emoji-bounce text-3xl mb-4">{f.emoji}</div>
      <h3 className="text-base font-bold text-navy mb-2">&laquo;{f.question}&raquo;</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{f.answer}</p>
    </div>
  );
}

// Top offset for each sticky card: header(64px) + index * gap
const HEADER_H = 72;
const STACK_GAP = 10;

export default function PainPoints() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.from("[data-pain-header]", {
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
    <section ref={ref} className="bg-mesh-light py-20 md:py-24" id="fears">
      <div className="max-w-300 mx-auto px-6">
        <div data-pain-header>
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-3">Частые сомнения</p>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold text-navy tracking-[-0.02em] mb-3">
            Мы знаем, что вас беспокоит
          </h2>
          <p className="text-text-muted text-sm mb-12 max-w-105">
            Вот ответы на вопросы, которые задают 9 из 10 родителей
          </p>
        </div>

        {/* ─── Mobile: CSS sticky stacking cards ─── */}
        <div className="md:hidden">
          {fears.slice(0, 5).map((f, i) => (
            <div
              key={i}
              className="sticky mb-4"
              style={{ top: `${HEADER_H + i * STACK_GAP}px` }}
            >
              <CardContent f={f} className="shadow-[0_-2px_10px_rgba(0,0,0,0.06)]" />
            </div>
          ))}
          <div className="relative mt-4">
            <CardContent f={fears[5]} />
          </div>
        </div>

        {/* ─── Desktop: original grid layout ─── */}
        <div className="hidden md:block">
          <StaggerGrid className="grid grid-cols-3 gap-4 mb-4">
            {fears.slice(0, 3).map((f, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-7 border border-border/60">
                <div className="emoji-bounce text-3xl mb-4">{f.emoji}</div>
                <h3 className="text-base font-bold text-navy mb-2">&laquo;{f.question}&raquo;</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </StaggerGrid>

          <StaggerGrid className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-2 card-hover bg-navy rounded-2xl p-7 text-white">
              <div className="emoji-bounce text-3xl mb-4">{fears[3].emoji}</div>
              <h3 className="text-base font-bold mb-2">&laquo;{fears[3].question}&raquo;</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-125">{fears[3].answer}</p>
            </div>
            <div className="card-hover bg-white rounded-2xl p-7 border border-border/60">
              <div className="emoji-bounce text-3xl mb-4">{fears[4].emoji}</div>
              <h3 className="text-base font-bold text-navy mb-2">&laquo;{fears[4].question}&raquo;</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{fears[4].answer}</p>
            </div>
          </StaggerGrid>

          <StaggerGrid>
            <div className="card-hover bg-[#faf5eb] rounded-2xl p-7 border border-gold/20">
              <div className="flex flex-row items-center gap-4">
                <div className="emoji-bounce text-3xl">{fears[5].emoji}</div>
                <div>
                  <h3 className="text-base font-bold text-navy mb-1">&laquo;{fears[5].question}&raquo;</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{fears[5].answer}</p>
                </div>
              </div>
            </div>
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
