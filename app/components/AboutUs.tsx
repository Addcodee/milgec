"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import RevealOnScroll from "./RevealOnScroll";
import BlurImage from "./BlurImage";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: "200+ ВУЗов",
    desc: "Прямые договоры с университетами по всему Китаю",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    title: "6 000+ студентов",
    desc: "Успешно зачислены из 60+ стран мира",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Аккредитация",
    desc: "Официальный представитель ведущих ВУЗов",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9 9 0 0 1 3 12c0-1.047.18-2.053.507-2.988" />
      </svg>
    ),
    title: "8 филиалов",
    desc: "Индонезия, Марокко, Россия, Казахстан и др.",
  },
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
    <section ref={ref} className="bg-bg-alt py-20 md:py-28 overflow-hidden" id="about">
      <div className="max-w-300 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — content */}
          <div>
            <RevealOnScroll animation="fade-up">
              <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-3">
                О компании
              </p>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-text tracking-[-0.03em] mb-4">
                Millennium Gateway
                <br />
                Education China
              </h2>
              <p className="text-text-secondary text-base leading-relaxed max-w-lg mb-8">
                С 2020 года помогаем студентам со всего мира поступить
                в лучшие университеты Китая по стипендиям — от подбора ВУЗа
                до встречи в аэропорту.
              </p>
            </RevealOnScroll>

            {/* Pillar cards */}
            <div className="grid grid-cols-2 gap-3">
              {pillars.map((p, i) => (
                <RevealOnScroll key={p.title} animation="fade-up" delay={0.08 * i}>
                  <div className="bg-white rounded-xl border border-border p-4 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                    <div className="w-9 h-9 rounded-lg bg-gold/10 text-gold flex items-center justify-center mb-3">
                      {p.icon}
                    </div>
                    <p className="text-text font-bold text-sm leading-tight">{p.title}</p>
                    <p className="text-text-muted text-xs mt-1.5 leading-snug">{p.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* Kazakhstan accent */}
            <RevealOnScroll animation="fade-up" delay={0.35}>
              <div className="mt-4 flex items-center gap-2.5 bg-gold/8 border border-gold/25 rounded-xl px-4 py-3">
                <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-text font-bold text-xs">
                    Официальный филиал в Казахстане
                  </p>
                  <p className="text-text-muted text-[11px] mt-0.5">
                    Прямой аккредитованный партнёр ведущих ВУЗов Китая
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right — photos */}
          <div className="grid grid-cols-2 gap-3">
            <div data-about-photo className="rounded-2xl overflow-hidden aspect-[4/5]">
              <BlurImage
                src="/events/Zhongbang-Indonesia.webp"
                alt="MilGEC в Индонезии"
                className="w-full h-full"
              />
            </div>
            <div data-about-photo className="rounded-2xl overflow-hidden aspect-[4/5] mt-6">
              <BlurImage
                src="/events/Zhongbang-Sri-Lanka.webp"
                alt="MilGEC в Шри-Ланке"
                className="w-full h-full"
              />
            </div>
            <div data-about-photo className="rounded-2xl overflow-hidden aspect-[4/3] col-span-2">
              <BlurImage
                src="/events/1.webp"
                alt="EDU China Fair 2024"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
