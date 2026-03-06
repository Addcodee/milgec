"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import RevealOnScroll from "./RevealOnScroll";

gsap.registerPlugin(ScrollTrigger);

const branches = [
  "Индонезия",
  "Шри-Ланка",
  "Марокко",
  "Россия",
  "Пакистан",
  "Бангладеш",
  "Кыргызстан",
];

const highlights = [
  { value: "2020", label: "Год основания" },
  { value: "200+", label: "Университетов-партнёров" },
  { value: "60+", label: "Стран мира" },
  { value: "6 000+", label: "Студентов зачислено" },
];

export default function AboutUs() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.from("[data-about-photo]", {
      scale: 0.92,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="bg-bg-alt py-20 md:py-28" id="about">
      <div className="max-w-300 mx-auto px-6">
        {/* Header */}
        <RevealOnScroll animation="fade-up">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-3">
            О компании
          </p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-text tracking-[-0.03em] mb-6">
            Millennium Gateway Education China
          </h2>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <RevealOnScroll animation="fade-up" delay={0.1}>
            <div className="space-y-5">
              <p className="text-text-secondary text-base leading-relaxed">
                <strong className="text-text">MilGEC</strong> (Millennium Gateway Education China) —
                образовательная компания, основанная в 2020 году со штаб-квартирой
                в <strong className="text-text">Циндао, Китай</strong>. С момента основания мы помогаем
                иностранным студентам поступить в лучшие университеты Китая по стипендиям.
              </p>

              <p className="text-text-secondary text-base leading-relaxed">
                Мы предоставляем индивидуальный подход — персональный сервис подготовки
                документов и подачи заявок для каждого студента. На сегодняшний день MilGEC
                работает с более чем <strong className="text-text">200 университетами</strong> Китая и
                успешно помог более <strong className="text-text">6 000 студентам</strong> из
                60+ стран мира получить образование в Китае.
              </p>

              {/* Kazakhstan badge */}
              <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mt-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text font-bold text-sm">
                      Официальный филиал в Казахстане
                    </p>
                    <p className="text-text-secondary text-sm mt-1">
                      MilGEC является официальным представительством в Казахстане —
                      прямой аккредитованный партнёр ведущих ВУЗов Китая.
                    </p>
                  </div>
                </div>
              </div>

              {/* Branch offices */}
              <div className="pt-2">
                <p className="text-text-muted text-xs uppercase tracking-[0.12em] mb-3">
                  Филиалы по всему миру
                </p>
                <div className="flex flex-wrap gap-2">
                  {branches.map((b) => (
                    <span
                      key={b}
                      className="px-3 py-1.5 bg-white rounded-full text-text-secondary text-xs font-medium border border-border"
                    >
                      {b}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 bg-gold/10 rounded-full text-gold text-xs font-bold border border-gold/30">
                    Казахстан
                  </span>
                </div>
              </div>

              {/* Stats mini grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {highlights.map((h) => (
                  <div key={h.label} className="text-center py-3 bg-white rounded-xl border border-border">
                    <div className="text-navy text-xl font-extrabold">{h.value}</div>
                    <div className="text-text-muted text-[11px] uppercase tracking-wide mt-1">{h.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Photos grid */}
          <div className="grid grid-cols-2 gap-3">
            <div data-about-photo className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="/events/Zhongbang-Indonesia.jpg"
                alt="MilGEC в Индонезии"
                className="w-full h-full object-cover"
              />
            </div>
            <div data-about-photo className="rounded-2xl overflow-hidden aspect-[4/5] mt-6">
              <img
                src="/events/Zhongbang-Sri-Lanka.jpg"
                alt="MilGEC в Шри-Ланке"
                className="w-full h-full object-cover"
              />
            </div>
            <div data-about-photo className="rounded-2xl overflow-hidden aspect-[4/3] col-span-2">
              <img
                src="/events/1.PNG"
                alt="EDU China Fair 2024"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
