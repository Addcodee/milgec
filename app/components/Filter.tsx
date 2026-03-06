"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const notFit = [
  "Вы ожидаете гарантированное зачисление вне зависимости от вашей успеваемости",
  "Вы ищете самый дешёвый вариант, не заботясь о качестве",
  "Вам нужно зачисление за 2 недели",
  "Вы не готовы предоставить подлинные, верифицированные документы",
  "Вы хотите, чтобы кто-то «купил» вам место в университете",
];

const goodFit = [
  "Вы хотите чёткий, профессиональный процесс без догадок",
  "Вы цените прозрачность и честные рекомендации, а не пустые обещания",
  "Вы серьёзно настроены инвестировать в качественное образование",
  "Вы хотите экспертную поддержку на каждом этапе — до, во время и после зачисления",
  "Вы готовы работать над своим будущим",
];

export default function Filter() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    // Header
    gsap.from("[data-filter-header]", {
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

    // Cards slide in from opposite sides
    gsap.from("[data-filter-left]", {
      x: -60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "[data-filter-left]",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    gsap.from("[data-filter-right]", {
      x: 60,
      opacity: 0,
      duration: 0.8,
      delay: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "[data-filter-right]",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // List items stagger inside each card
    ref.current.querySelectorAll("[data-filter-list]").forEach((list) => {
      gsap.from(list.children, {
        x: -15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: list,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="bg-bg-alt py-20 md:py-24 overflow-hidden">
      <div className="max-w-300 mx-auto px-6">
        <div data-filter-header className="mb-12">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-navy tracking-[-0.02em] text-center">
            MilGEC — не для всех
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Not a fit */}
          <div data-filter-left className="card-hover bg-white rounded-2xl p-7 border border-border/50">
            <div className="text-4xl mb-5">🚫</div>
            <h3 className="text-[15px] font-bold text-navy mb-5">
              Мы НЕ подходим, если:
            </h3>
            <ul data-filter-list className="flex flex-col gap-3">
              {notFit.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] text-text-secondary leading-relaxed">
                  <span className="w-4.5 h-4.5 rounded-full bg-warning/10 text-warning text-[10px] flex items-center justify-center shrink-0 mt-0.5">&#10007;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Good fit — accent card */}
          <div data-filter-right className="card-hover bg-navy rounded-2xl p-7 text-white">
            <div className="text-4xl mb-5">✅</div>
            <h3 className="text-[15px] font-bold mb-5">
              Мы — правильный выбор, если:
            </h3>
            <ul data-filter-list className="flex flex-col gap-3">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] text-white/60 leading-relaxed">
                  <span className="w-4.5 h-4.5 rounded-full bg-gold/20 text-gold text-[10px] flex items-center justify-center shrink-0 mt-0.5">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
