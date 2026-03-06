"use client";

import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import RevealOnScroll from "./RevealOnScroll";
import BlurImage from "./BlurImage";

gsap.registerPlugin(ScrollTrigger);

const events = [
  { src: "/events/Indonesia-High-School-Presentation.webp", label: "Презентация в школах Индонезии" },
  { src: "/events/Zhongbang-Morocco.webp", label: "MilGEC в Марокко" },
  { src: "/events/Zhongbang-Seminar.webp", label: "Семинар MilGEC" },
  { src: "/events/Sri-Lanka-Wendy-Consultation.webp", label: "Консультация — Шри-Ланка" },
  { src: "/events/Moroccan-Students-Arriving-in-China.webp", label: "Марокканские студенты в Китае" },
  { src: "/events/Airport-Pickup-Morocco.webp", label: "Встреча в аэропорту — Марокко" },
  { src: "/events/Indonesia-Pre-Departure-Guidance.webp", label: "Подготовка к отъезду — Индонезия" },
  { src: "/events/Zhongbang-Airport-Pickup-Snacks.webp", label: "Приветственные наборы для студентов" },
  { src: "/events/Morocco-Exhibition-Representation.webp", label: "Выставка в Марокко" },
  { src: "/events/Indonesia-Office.webp", label: "Офис MilGEC — Индонезия" },
  { src: "/events/Zhongbang-Sri-Lanka-2.webp", label: "MilGEC в Шри-Ланке" },
  { src: "/events/Wendy-Indonesia-2.webp", label: "Визит в Индонезию" },
  { src: "/events/2.webp", label: "Студенческое мероприятие" },
  { src: "/events/3.webp", label: "Командная работа" },
  { src: "/events/4.webp", label: "Встреча со студентами" },
];

const VISIBLE_COUNT = 6;

export default function EventsGallery() {
  const ref = useRef<HTMLElement>(null);
  const [expanded, setExpanded] = useState(false);

  useGSAP(() => {
    if (!ref.current) return;

    const items = ref.current.querySelectorAll("[data-event-card]");
    gsap.set(items, { y: 40, opacity: 0, scale: 0.96 });

    gsap.to(items, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 82%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: ref });

  const handleExpand = useCallback(() => {
    setExpanded(true);
    // Animate newly visible cards after state update
    requestAnimationFrame(() => {
      if (!ref.current) return;
      const hiddenCards = ref.current.querySelectorAll("[data-event-hidden]");
      gsap.fromTo(hiddenCards,
        { y: 30, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out", stagger: 0.06 }
      );
    });
  }, []);

  const visible = expanded ? events : events.slice(0, VISIBLE_COUNT);
  const hasMore = !expanded && events.length > VISIBLE_COUNT;

  return (
    <section ref={ref} className="bg-white py-20 md:py-28 overflow-hidden" id="events">
      <div className="max-w-300 mx-auto px-6">
        <RevealOnScroll animation="fade-up">
          <div className="md:flex md:items-end md:justify-between mb-14">
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-3">
                Наша деятельность
              </p>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-text tracking-[-0.03em]">
                Мероприятия и студенты
              </h2>
            </div>
            <p className="text-text-muted text-sm mt-3 md:mt-0 md:max-w-xs md:text-right">
              Мы активно работаем по всему миру — семинары, выставки,
              встречи студентов в аэропорту и поддержка на месте.
            </p>
          </div>
        </RevealOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px] md:auto-rows-[240px]">
          {visible.map((e, i) => (
            <div
              key={e.src}
              data-event-card
              {...(i >= VISIBLE_COUNT ? { "data-event-hidden": "" } : {})}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <BlurImage
                src={e.src}
                alt={e.label}
                className="absolute inset-0 w-full h-full"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-xs font-semibold drop-shadow-md">
                  {e.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show more */}
        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleExpand}
              className="group flex items-center gap-2 bg-navy/5 hover:bg-navy/10 text-navy font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              Смотреть ещё
              <span className="text-xs text-navy/40 group-hover:text-navy/60 transition-colors">
                +{events.length - VISIBLE_COUNT}
              </span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
