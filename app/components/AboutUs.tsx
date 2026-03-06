"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import RevealOnScroll from "./RevealOnScroll";
import BlurImage from "./BlurImage";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "2020", label: "Год основания" },
  { value: "200+", label: "ВУЗов-партнёров" },
  { value: "6 000+", label: "Студентов зачислено" },
  { value: "60+", label: "Стран мира" },
];

const branches = [
  "Индонезия", "Шри-Ланка", "Марокко", "Россия",
  "Пакистан", "Бангладеш", "Кыргызстан",
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
              <p className="text-text-secondary text-base leading-relaxed max-w-lg mb-2">
                <strong className="text-text">MilGEC</strong> — образовательная компания, основанная в 2020 году
                со штаб-квартирой в Циндао, Китай. Мы предоставляем индивидуальный
                сервис подготовки документов и персональные планы поступления
                для иностранных студентов.
              </p>
              <p className="text-text-secondary text-base leading-relaxed max-w-lg mb-6">
                На сегодняшний день MilGEC установила официальное сотрудничество
                с более чем <strong className="text-text">200 университетами</strong> Китая
                и успешно помогла более чем <strong className="text-text">6 000 студентам</strong> из
                60+ стран получить образование в Китае.
              </p>
            </RevealOnScroll>

            {/* Stats grid */}
            <RevealOnScroll animation="fade-up" delay={0.1}>
              <div className="grid grid-cols-4 gap-3 mb-5">
                {stats.map((s) => (
                  <div key={s.label} className="text-center py-3 bg-white rounded-xl border border-border">
                    <div className="text-navy text-xl font-extrabold">{s.value}</div>
                    <div className="text-text-muted text-[11px] uppercase tracking-wide mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            {/* Branch offices */}
            <RevealOnScroll animation="fade-up" delay={0.2}>
              <p className="text-text-muted text-xs uppercase tracking-[0.12em] mb-2.5">
                Филиалы по всему миру
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
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
            </RevealOnScroll>
          </div>

          {/* Right — photos */}
          <div className="grid grid-cols-2 gap-3">
            <div data-about-photo className="rounded-2xl overflow-hidden aspect-[4/5]">
              <BlurImage
                src="/events/Zhongbang-Indonesia.webp"
                alt="MilGEC в Индонезии"
                className="w-full h-full"
                eager
              />
            </div>
            <div data-about-photo className="rounded-2xl overflow-hidden aspect-[4/5] mt-6">
              <BlurImage
                src="/events/Zhongbang-Sri-Lanka.webp"
                alt="MilGEC в Шри-Ланке"
                className="w-full h-full"
                eager
              />
            </div>
            <div data-about-photo className="rounded-2xl overflow-hidden aspect-[4/3] col-span-2">
              <BlurImage
                src="/events/1.webp"
                alt="EDU China Fair 2024"
                className="w-full h-full"
                eager
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
