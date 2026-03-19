"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import StaggerGrid from "./StaggerGrid";
import BlurImage from "./BlurImage";

gsap.registerPlugin(ScrollTrigger);

const HEADER_H = 72;
const STACK_GAP = 10;

const cases = [
  {
    name: "Ахмед К.",
    from: "Пакистан",
    photo: "/students/ahmed.webp",
    initials: "АК",
    university: "Harbin Institute of Technology",
    program: "Машиностроение · Магистратура",
    scholarship: "Полная стипендия CSC",
    timeline: "3 мес.",
  },
  {
    name: "Рахмат Д.",
    from: "Индонезия",
    photo: "/students/rahmat.webp",
    initials: "РД",
    university: "HUST",
    program: "Computer Science · PhD",
    scholarship: "Стипендия правительства КНР",
    timeline: "4 мес.",
  },
  {
    name: "Кайрат А.",
    from: "Кыргызстан",
    photo: "/students/kayrat.webp",
    initials: "КА",
    university: "Shandong University",
    program: "Медицина · Бакалавриат",
    scholarship: "Полная стипендия",
    timeline: "3.5 мес.",
  },
  {
    name: "Саид М.",
    from: "Марокко",
    photo: "/students/said.webp",
    initials: "СМ",
    university: "Zhejiang University of Technology",
    program: "Бизнес · Бакалавриат",
    scholarship: "Частичная стипендия",
    timeline: "2.5 мес.",
  },
  {
    name: "Насим Т.",
    from: "Бангладеш",
    photo: "/students/nasim.webp",
    initials: "НТ",
    university: "China University of Petroleum",
    program: "Инженерия · Бакалавриат",
    scholarship: "Частичная стипендия",
    timeline: "2 мес.",
  },
  {
    name: "Лакшан Э.",
    from: "Шри-Ланка",
    photo: "/students/lachshan.webp",
    initials: "ЛЭ",
    university: "Shanghai University",
    program: "Экономика · Магистратура",
    scholarship: "50% скидка на обучение",
    timeline: "2 мес.",
  },
];

function StudentPhoto({ src, initials, name }: { src: string; initials: string; name: string }) {
  return (
    <BlurImage
      src={src}
      alt={name}
      className="absolute inset-0 w-full h-full"
      fallback={
        <div className="absolute inset-0 bg-navy/10 flex items-center justify-center">
          <span className="text-3xl font-bold text-navy/30 select-none">{initials}</span>
        </div>
      }
    />
  );
}

export default function CaseStudies() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.from("[data-cases-header]", {
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
  }, { scope: ref });

  return (
    <section ref={ref} className="bg-white py-20 md:py-28 overflow-x-clip" id="cases">
      <div className="max-w-300 mx-auto px-6">
        <div data-cases-header className="md:flex md:items-end md:justify-between mb-14">
          <div>
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-3">
              Результаты
            </p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-text tracking-[-0.03em]">
              Реальные истории поступления
            </h2>
          </div>
          <p className="text-text-muted text-sm mt-3 md:mt-0 md:max-w-xs md:text-right">
            Не отзывы — факты. Каждый кейс подтверждён документами.
          </p>
        </div>

        {/* ─── Mobile: sticky stacking cards ─── */}
        <div className="md:hidden">
          {cases.map((c, i) => (
            <div
              key={c.name}
              className="sticky mb-4"
              style={{ top: `${HEADER_H + i * STACK_GAP}px` }}
            >
              <div className="group relative rounded-2xl overflow-hidden bg-bg-alt border border-border shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
                <div className="relative h-44 overflow-hidden bg-bg-alt">
                  <StudentPhoto src={c.photo} initials={c.initials} name={c.name} />
                  <div className="absolute top-3 right-3 bg-gold text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-md">
                    {c.scholarship}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-text font-bold text-sm">{c.name}</h3>
                      <p className="text-text-muted text-xs mt-0.5">{c.from}</p>
                    </div>
                    <div className="flex items-center gap-1 text-text-muted text-xs">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {c.timeline}
                    </div>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                      </svg>
                      <div>
                        <p className="text-text font-semibold text-xs">{c.university}</p>
                        <p className="text-text-secondary text-xs">{c.program}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── Desktop: grid layout ─── */}
        <StaggerGrid className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.12}>
          {cases.map((c) => (
            <div
              key={c.name}
              className="group relative rounded-2xl overflow-hidden bg-bg-alt border border-border card-hover"
            >
              <div className="relative h-52 overflow-hidden bg-bg-alt">
                <StudentPhoto src={c.photo} initials={c.initials} name={c.name} />
                <div className="absolute top-3 right-3 bg-gold text-white text-[11px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full shadow-md">
                  {c.scholarship}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-text font-bold text-base">{c.name}</h3>
                    <p className="text-text-muted text-xs mt-0.5">{c.from}</p>
                  </div>
                  <div className="flex items-center gap-1 text-text-muted text-xs">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {c.timeline}
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                    </svg>
                    <div>
                      <p className="text-text font-semibold text-sm">{c.university}</p>
                      <p className="text-text-secondary text-xs">{c.program}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </StaggerGrid>

        {/* CTA after success stories */}
        <div className="mt-12 text-center">
          <p className="text-text-muted text-sm mb-4">Хотите так же? 90% наших студентов получают стипендию</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#form"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white text-sm font-bold px-6 py-3 rounded-xl transition-all hover:shadow-[0_4px_20px_rgba(212,168,67,0.3)]"
            >
              Узнать свои шансы
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="https://wa.me/77089826615?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B8%D1%82%D1%8C%20%D0%BA%D0%B0%D0%BA%20%D0%B2%D0%B0%D1%88%D0%B8%20%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82%D1%8B."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-whatsapp hover:text-whatsapp/80 text-sm font-semibold transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
