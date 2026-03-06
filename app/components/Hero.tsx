"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const features = [
  { emoji: "🎓", label: "Подбор вуза" },
  { emoji: "📄", label: "Документы" },
  { emoji: "💰", label: "Стипендия" },
  { emoji: "✈️", label: "Встреча в Китае" },
];

export default function Hero() {
  const [imgFailed, setImgFailed] = useState(false);
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
      .from("[data-hero-image]", {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      }, 0.3)
      .from("[data-hero-float]", {
        y: 30,
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        stagger: 0.15,
        ease: "back.out(1.4)",
      }, "-=0.5");
  }, { scope: container });

  return (
    <section ref={container} className="relative bg-navy overflow-hidden pt-21" id="hero">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-150 h-150 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-300 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-80px)] py-20 md:py-28 lg:py-0">

          {/* Left — text */}
          <div className="max-w-xl">
            {/* Small label */}
            <div data-hero-badge className="inline-flex items-center gap-2 bg-white/6 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              <span className="text-white/60 text-xs font-medium">
                С 2020 года · 60+ стран
              </span>
            </div>

            {/* Headline */}
            <h1 data-hero-headline className="text-[clamp(2.25rem,5.5vw,4rem)] font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-6">
              Поступи в Китай
              <br />
              <span className="text-gold">по стипендии</span>
            </h1>

            {/* Subtext */}
            <p data-hero-sub className="text-white/50 text-lg leading-relaxed mb-8 max-w-md">
              Берём на себя всё — от подбора вуза до встречи в аэропорту.
              90% наших студентов получают финансирование.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {features.map((f) => (
                <div
                  key={f.label}
                  data-hero-pill
                  className="flex items-center gap-2 bg-white/6 border border-white/10 rounded-full px-4 py-2"
                >
                  <span className="text-lg">{f.emoji}</span>
                  <span className="text-white/70 text-sm font-medium">{f.label}</span>
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
            <p data-hero-micro className="text-white/25 text-xs mt-5">
              Бесплатно · Без обязательств · Ответ за 24 часа
            </p>
          </div>

          {/* Right — image */}
          <div className="relative hidden lg:block" data-hero-image>
            <div className="relative rounded-3xl overflow-hidden aspect-4/5 max-w-sm 2xl:max-w-md ml-auto">
              {!imgFailed ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/hero-student.jpg"
                  alt="Студент в Китае"
                  onError={() => setImgFailed(true)}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-navy-light flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="text-6xl mb-4 opacity-30">🎓</div>
                    <p className="text-white/20 text-sm">Фото студента</p>
                  </div>
                </div>
              )}

              {/* Floating card — scholarship */}
              <div data-hero-float className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/15">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                    <img src="/3d-icons/graduation-cap.svg" alt="" className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">200+ университетов</p>
                    <p className="text-white/40 text-xs mt-0.5">Официальные партнёры MilGEC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges around the image */}
            <div data-hero-float className="absolute -top-3 -right-3 bg-gold text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-lg flex items-center gap-1.5">
              <span className="text-base">🏆</span> 90% стипендий
            </div>
            <div data-hero-float className="absolute top-1/3 -left-4 bg-white shadow-lg rounded-2xl px-4 py-3 flex items-center gap-2.5 animate-[float_6s_ease-in-out_infinite]">
              <span className="text-2xl">📋</span>
              <div>
                <p className="text-navy font-bold text-xs">6 000+</p>
                <p className="text-text-muted text-[10px]">студентов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
