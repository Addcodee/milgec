"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const features = [
  { emoji: "🎓", label: "Подбор вуза" },
  { emoji: "📄", label: "Документы" },
  { emoji: "💰", label: "Стипендия" },
  { emoji: "✈️", label: "Встреча в Китае" },
];

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from("[data-hero-badge]", { y: -20, opacity: 0, duration: 0.6 })
      .from("[data-hero-headline]", { y: 40, opacity: 0, duration: 0.8 }, "-=0.3")
      .from("[data-hero-sub]", { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
      .from("[data-hero-pill]", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
      }, "-=0.3")
      .from("[data-hero-cta]", { y: 20, opacity: 0, scale: 0.95, duration: 0.6 }, "-=0.2")
      .from("[data-hero-micro]", { opacity: 0, duration: 0.5 }, "-=0.2")
      .from("[data-hero-float]", {
        y: 30,
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        stagger: 0.15,
        ease: "back.out(1.4)",
      }, "-=0.3");
  }, { scope: container });

  return (
    <section ref={container} className="relative overflow-hidden" id="hero">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/events/Zhongbang-Indonesia.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/80" />
      {/* Bottom gradient for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />

      <div className="relative max-w-300 mx-auto px-6 pt-21">
        <div className="flex flex-col items-center text-center justify-center py-10 md:py-12">

          {/* Small label */}
          <div data-hero-badge className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            <span className="text-white/70 text-xs font-medium">
              С 2020 года · 60+ стран
            </span>
          </div>

          {/* Headline */}
          <h1 data-hero-headline className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-6 max-w-3xl">
            Поступи в Китай
            <br />
            <span className="text-gold">по стипендии</span>
          </h1>

          {/* Subtext */}
          <p data-hero-sub className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
            Берём на себя всё — от подбора вуза до встречи в аэропорту.
            90% наших студентов получают финансирование.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {features.map((f) => (
              <div
                key={f.label}
                data-hero-pill
                className="flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-2 backdrop-blur-sm"
              >
                <span className="text-lg">{f.emoji}</span>
                <span className="text-white/80 text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            data-hero-cta
            href="#form"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:shadow-[0_8px_30px_rgba(212,168,67,0.35)] hover:-translate-y-0.5"
          >
            Бесплатная оценка шансов
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>

          {/* Micro trust */}
          <p data-hero-micro className="text-white/90 text-sm font-medium mt-3">
            Бесплатно · Без обязательств · Ответ за 24 часа
          </p>

          {/* Floating stats */}
          <div className="flex flex-wrap justify-center gap-4 mt-14">
            <div data-hero-float className="bg-white/10 backdrop-blur-md border border-white/12 rounded-2xl px-5 py-3 flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <div className="text-left">
                <p className="text-white font-bold text-sm">90%</p>
                <p className="text-white/40 text-[10px]">получают стипендию</p>
              </div>
            </div>
            <div data-hero-float className="bg-white/10 backdrop-blur-md border border-white/12 rounded-2xl px-5 py-3 flex items-center gap-3">
              <span className="text-2xl">🎓</span>
              <div className="text-left">
                <p className="text-white font-bold text-sm">200+</p>
                <p className="text-white/40 text-[10px]">университетов</p>
              </div>
            </div>
            <div data-hero-float className="bg-white/10 backdrop-blur-md border border-white/12 rounded-2xl px-5 py-3 flex items-center gap-3">
              <span className="text-2xl">📋</span>
              <div className="text-left">
                <p className="text-white font-bold text-sm">6 000+</p>
                <p className="text-white/40 text-[10px]">студентов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
