"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import RevealOnScroll from "./RevealOnScroll";

gsap.registerPlugin(ScrollTrigger);

const events = [
  { src: "/events/Indonesia-High-School-Presentation.jpg", label: "Презентация в школах Индонезии", span: "col-span-2 row-span-2" },
  { src: "/events/Zhongbang-Morocco.jpg", label: "MilGEC в Марокко", span: "" },
  { src: "/events/Zhongbang-Seminar.jpg", label: "Семинар MilGEC", span: "" },
  { src: "/events/Sri-Lanka-Wendy-Consultation.jpg", label: "Консультация — Шри-Ланка", span: "" },
  { src: "/events/Moroccan-Students-Arriving-in-China.jpg", label: "Марокканские студенты в Китае", span: "" },
  { src: "/events/Airport-Pickup-Morocco.jpg", label: "Встреча в аэропорту — Марокко", span: "col-span-2" },
  { src: "/events/Indonesia-Pre-Departure-Guidance.jpg", label: "Подготовка к отъезду — Индонезия", span: "" },
  { src: "/events/Zhongbang-Airport-Pickup-Snacks.jpg", label: "Приветственные наборы для студентов", span: "" },
  { src: "/events/Morocco-Exhibition-Representation.jpg", label: "Выставка в Марокко", span: "" },
  { src: "/events/Indonesia-Office.jpg", label: "Офис MilGEC — Индонезия", span: "" },
  { src: "/events/Zhongbang-Sri-Lanka-2.jpg", label: "MilGEC в Шри-Ланке", span: "col-span-2" },
  { src: "/events/Wendy-Indonesia-2.jpg", label: "Визит в Индонезию", span: "" },
  { src: "/events/2.jpg", label: "Студенческое мероприятие", span: "" },
  { src: "/events/3.jpg", label: "Командная работа", span: "" },
  { src: "/events/4.jpg", label: "Встреча со студентами", span: "" },
];

export default function EventsGallery() {
  const ref = useRef<HTMLElement>(null);

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

  return (
    <section ref={ref} className="bg-white py-20 md:py-28" id="events">
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

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[200px]">
          {events.map((e, i) => (
            <div
              key={i}
              data-event-card
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${e.span}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={e.src}
                alt={e.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
      </div>
    </section>
  );
}
