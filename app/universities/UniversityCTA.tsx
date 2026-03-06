"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function UniversityCTA() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const el = ref.current.querySelector("[data-ucta]");
    if (el) {
      gsap.set(el, { y: 40, opacity: 0 });
      gsap.to(el, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
      });
    }
  }, { scope: ref });

  return (
    <section ref={ref} className="bg-navy py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-[20%] left-[5%] w-72 h-72 rounded-full bg-gold/10 blur-[120px] pointer-events-none" />

      <div data-ucta className="relative max-w-200 mx-auto px-6 text-center">
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-white tracking-[-0.02em] mb-4">
          Найдём идеальный университет для вас
        </h2>
        <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md mx-auto">
          200+ вузов в нашей сети. Подберём программу под ваш профиль, бюджет и карьерные цели. Бесплатно.
        </p>
        <a
          href="/#form"
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:shadow-[0_8px_30px_rgba(212,168,67,0.35)]"
        >
          Бесплатная оценка шансов
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
        <p className="text-gold/60 text-xs mt-4 animate-pulse">
          Приём на осень 2026 — подача документов до июня
        </p>
      </div>
    </section>
  );
}
