"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HEADER_H = 72;
const STACK_GAP = 10;

const steps = [
  {
    num: "01",
    emoji: "🔍",
    title: "Аудит профиля",
    desc: "Анализируем вашу академическую историю, документы, бюджет и карьерные цели.",
  },
  {
    num: "02",
    emoji: "🏛️",
    title: "Подбор университетов",
    desc: "Рекомендуем 3–5 лучших вузов и программ из нашей сети 200+ партнёров.",
  },
  {
    num: "03",
    emoji: "📄",
    title: "Подготовка документов",
    desc: "Подготовим, проверим и оформим все документы по требованиям университета.",
  },
  {
    num: "04",
    emoji: "🚀",
    title: "Подача заявки",
    desc: "Подаём заявки и оптимизируем каждую для максимального шанса на стипендию.",
  },
  {
    num: "05",
    emoji: "✅",
    title: "Зачисление",
    desc: "Получаете официальное письмо о зачислении. Помогаем подтвердить поступление.",
  },
  {
    num: "06",
    emoji: "🛂",
    title: "Виза и подготовка",
    desc: "Оформление визы и полная подготовка к жизни в Китае.",
  },
  {
    num: "07",
    emoji: "✈️",
    title: "Встреча в Китае",
    desc: "Встреча в аэропорту. Регистрация в кампусе. Поддержка весь период обучения.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !trackRef.current || !wrapperRef.current) return;

      // Header reveal
      gsap.from("[data-process-header]", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      const mm = gsap.matchMedia();

      // Desktop: horizontal scroll
      mm.add("(min-width: 768px)", () => {
        const track = trackRef.current!;
        const wrapper = wrapperRef.current!;

        // track is wider than its wrapper — scroll the difference
        const totalScroll = track.scrollWidth - wrapper.offsetWidth;

        if (totalScroll <= 0) return;

        gsap.to(track, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            // 1.5x multiplier = slower, more comfortable scroll pace
            end: () => `+=${totalScroll * 1.5}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      // Mobile: no GSAP animation — CSS sticky stacking handles it

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
      <section ref={sectionRef} className="bg-white py-20 md:py-24 overflow-x-clip" id="process">
        <div className="max-w-300 mx-auto px-6">
          <div data-process-header className="text-center mb-14">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-3">
              Процесс
            </p>
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold text-navy tracking-[-0.02em] mb-3">
              Ваш путь в китайский университет
            </h2>
            <p className="text-text-muted text-sm">
              7 понятных шагов. Без догадок.
            </p>
          </div>
        </div>

        {/* ─── Desktop: horizontal scroll track ─── */}
        <div className="hidden md:block">
          <div ref={wrapperRef} className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-5 px-6"
            >
              {steps.map((s) => (
                <div
                  key={s.num}
                  data-step-card
                  className="card-hover group bg-bg-alt rounded-2xl p-7 border border-border/50 relative overflow-hidden shrink-0"
                  style={{ width: "300px" }}
                >
                  <span className="absolute top-4 right-5 text-[72px] font-extrabold text-navy/4 leading-none select-none">
                    {s.num}
                  </span>
                  <div className="emoji-bounce text-3xl mb-5">{s.emoji}</div>
                  <h3 className="font-bold text-navy text-base mb-2 group-hover:text-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Mobile: sticky stacking cards ─── */}
        <div className="md:hidden">
          <div className="max-w-300 mx-auto px-6">
            {steps.map((s, i) => (
              <div
                key={s.num}
                data-step-card
                className="sticky mb-4"
                style={{ top: `${HEADER_H + i * STACK_GAP}px` }}
              >
                <div className="group bg-bg-alt rounded-2xl p-6 border border-border/50 relative overflow-hidden shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
                  <span className="absolute top-3 right-4 text-[56px] font-extrabold text-navy/4 leading-none select-none">
                    {s.num}
                  </span>
                  <div className="text-2xl mb-3">{s.emoji}</div>
                  <h3 className="font-bold text-navy text-sm mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* CTA after process steps */}
        <div className="max-w-300 mx-auto px-6 mt-12">
          <div className="bg-bg-alt rounded-2xl border border-border/50 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-navy font-bold text-base mb-1">Готовы начать свой путь?</h3>
              <p className="text-text-muted text-sm">Первый шаг — бесплатная оценка ваших шансов</p>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href="#form"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all"
              >
                Начать сейчас
              </a>
              <a
                href="https://wa.me/77089826615?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BD%D0%B0%D1%87%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-whatsapp/10 border border-whatsapp/20 flex items-center justify-center text-whatsapp hover:bg-whatsapp/20 transition-all"
                aria-label="WhatsApp"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a
                href="https://instagram.com/milgec.kz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#E4405F]/10 border border-[#E4405F]/20 flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F]/20 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}
