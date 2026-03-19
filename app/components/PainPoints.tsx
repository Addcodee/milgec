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
    <section ref={ref} className="bg-mesh-light py-20 md:py-24 overflow-x-clip" id="fears">
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

        {/* ─── CTA after addressing fears ─── */}
        <div className="mt-10 flex items-center justify-center gap-2.5">
          <a
            href="#form"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white text-sm font-bold px-6 py-3 rounded-xl transition-all hover:shadow-[0_4px_20px_rgba(212,168,67,0.3)]"
          >
            Получить честную оценку
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="https://wa.me/77089826615?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A3%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%B5%D1%81%D1%82%D1%8C%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%8B."
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-whatsapp/10 border border-whatsapp/20 flex items-center justify-center text-whatsapp hover:bg-whatsapp/20 transition-all"
            aria-label="WhatsApp"
          >
            <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a
            href="https://instagram.com/milgec.kz"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-[#E4405F]/10 border border-[#E4405F]/20 flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F]/20 transition-all"
            aria-label="Instagram"
          >
            <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
