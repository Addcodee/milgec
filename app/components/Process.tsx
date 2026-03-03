"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !trackRef.current || !wrapperRef.current) return;

      // Header reveal
      gsap.from("[data-process-header]", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      const mm = gsap.matchMedia();

      // Desktop: horizontal scroll
      mm.add("(min-width: 768px)", () => {
        const track = trackRef.current!;
        const wrapper = wrapperRef.current!;

        // track is wider than its wrapper — scroll the difference
        const totalScroll = track.scrollWidth - wrapper.offsetWidth;

        if (totalScroll <= 0) return;

        gsap.to(track, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            // 1.5x multiplier = slower, more comfortable scroll pace
            end: () => `+=${totalScroll * 1.5}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      // Mobile: stagger reveal (no horizontal scroll)
      mm.add("(max-width: 767px)", () => {
        const cards = sectionRef.current!.querySelectorAll<HTMLElement>("[data-step-card]");
        gsap.set(cards, { y: 30, opacity: 0 });
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-white py-20 md:py-24" id="process">
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
      </div>

      {/* ─── Desktop: horizontal scroll track ─── */}
      <div className="hidden md:block">
        <div ref={wrapperRef} className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-5 pl-[max(1.5rem,calc((100vw-75rem)/2+1.5rem))] pr-[max(1.5rem,calc((100vw-75rem)/2+1.5rem))]"
            style={{ width: "max-content" }}
          >
            {steps.map((s) => (
              <div
                key={s.num}
                data-step-card
                className="card-hover group bg-bg-alt rounded-2xl p-7 border border-border/50 relative overflow-hidden shrink-0"
                style={{ width: "300px" }}
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
          </div>
        </div>
      </div>

      {/* ─── Mobile: vertical stack ─── */}
      <div className="md:hidden">
        <div className="max-w-300 mx-auto px-6 flex flex-col gap-4">
          {steps.map((s) => (
            <div
              key={s.num}
              data-step-card
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
        </div>
      </div>
    </section>
  );
}
