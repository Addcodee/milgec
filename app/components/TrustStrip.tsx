"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { target: 200, suffix: "+", label: "Университетов-партнёров" },
  { target: 60, suffix: "+", label: "Стран мира" },
  { target: 6000, suffix: "+", label: "Студентов зачислено", format: true },
  { target: 2800, suffix: "", label: "Набор 2025 года", format: true },
];

export default function TrustStrip() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const numberEls = ref.current.querySelectorAll<HTMLElement>("[data-counter]");

    numberEls.forEach((el) => {
      const target = parseFloat(el.dataset.counter!);
      const doFormat = el.dataset.format === "true";
      const obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: "power2.out",
        snap: { val: 1 },
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate() {
          el.textContent = doFormat
            ? Math.floor(obj.val).toLocaleString("ru-RU")
            : String(Math.floor(obj.val));
        },
      });
    });

    // Stagger the stat blocks
    const blocks = ref.current.querySelectorAll("[data-stat-block]");
    gsap.from(blocks, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="bg-navy border-t-2 border-gold/60" id="stats">
      <div className="max-w-300 mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} data-stat-block className="text-center py-2">
              <div className="text-gold text-3xl md:text-4xl font-extrabold leading-tight">
                <span data-counter={s.target} data-format={s.format ? "true" : "false"}>
                  0
                </span>
                {s.suffix}
              </div>
              <div className="text-white/50 text-xs uppercase tracking-[0.12em] mt-1.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
