"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    title: "University Mapping",
    titleRu: "Подбор университетов",
    desc: "Анализируем ваш академический профиль, документы и цели. Рекомендуем наиболее подходящие университеты и программы из нашей сети 200+ партнёров.",
    details: [
      "Анализ документов и академического бэкграунда",
      "Подбор лучших университетов и программ под ваш профиль",
      "Сравнение требований и стоимости",
      "Стратегия подачи для максимального результата",
    ],
    accent: false,
  },
  {
    num: "02",
    title: "Documents Polishing",
    titleRu: "Подготовка документов",
    desc: "Проверка и оформление всех документов самой профессиональной командой. Доводим заявку до совершенства, чтобы гарантировать максимальный шанс на зачисление.",
    details: [
      "Проверка документов профессиональной командой",
      "Подготовка мотивационного письма и CV",
      "Оформление по стандартам каждого университета",
      "Гарантия качества — никаких отказов из-за бумаг",
    ],
    accent: false,
  },
  {
    num: "03",
    title: "Scholarship Application",
    titleRu: "Подача на стипендию",
    desc: "Эксклюзивные стипендиальные программы между университетами и MilGEC. 90% наших студентов успешно получают финансирование.",
    details: [
      "Эксклюзивные стипендии MilGEC-университет",
      "Стипендии CSC, провинциальные, университетские",
      "Оптимизация заявки под критерии каждой стипендии",
      "90% студентов получают стипендию",
    ],
    accent: true,
  },
  {
    num: "04",
    title: "Visa & Pre-departure",
    titleRu: "Виза и подготовка к отъезду",
    desc: "Профессиональная команда помогает с оформлением визы. Открытые семинары по подготовке к отъезду для всех зарегистрированных студентов.",
    details: [
      "Полное сопровождение при оформлении визы X1/X2",
      "Подготовка визовых документов",
      "Семинары по подготовке к жизни в Китае",
      "Чек-лист переезда и рекомендации",
    ],
    accent: false,
  },
];

const additionalServices = [
  {
    emoji: "✈️",
    title: "Welcome in China",
    titleRu: "Встреча в Китае",
    desc: "Встреча в аэропорту с приветственным набором. Помощь с регистрацией в кампусе.",
  },
  {
    emoji: "🎭",
    title: "Diverse Activities",
    titleRu: "Культурные мероприятия",
    desc: "Организуем мероприятия, чтобы студенты легче интегрировались в китайскую культуру.",
  },
  {
    emoji: "🤝",
    title: "Solve Difficulties",
    titleRu: "Решение проблем",
    desc: "Помогаем решать трудности, возникающие во время обучения в Китае.",
  },
  {
    emoji: "💼",
    title: "Employment Opportunities",
    titleRu: "Карьерные возможности",
    desc: "Рекомендуем вакансии и стажировки для наших студентов.",
  },
];

export default function CoreServices() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const header = ref.current.querySelector("[data-cs-header]");
    if (header) {
      gsap.set(header, { y: 40, opacity: 0 });
      gsap.to(header, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
      });
    }

    const cards = gsap.utils.toArray<HTMLElement>(ref.current.querySelectorAll("[data-cs-card]"));
    if (cards.length) {
      gsap.set(cards, { y: 40, opacity: 0, scale: 0.97 });
      gsap.to(cards, { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: cards[0], start: "top 85%", toggleActions: "play none none none" },
      });
    }
  }, { scope: ref });

  return (
    <section ref={ref} className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-300 mx-auto px-6">
        <div data-cs-header className="text-center mb-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-3">Our Services</p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-navy tracking-[-0.02em] mb-3">
            Полный цикл сопровождения
          </h2>
          <p className="text-text-muted text-sm max-w-lg mx-auto">
            4 ключевых этапа от первой консультации до переезда в Китай.
            Консультационная поддержка 24/7 для всех студентов.
          </p>
        </div>

        {/* 24h support banner */}
        <div className="bg-navy rounded-2xl p-5 md:p-6 mb-8 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-sm">Консультационная поддержка 24/7</p>
            <p className="text-white/50 text-xs">Доступна для всех зарегистрированных студентов на протяжении всего процесса</p>
          </div>
          <div className="sm:ml-auto flex items-center gap-2">
            <a
              href="https://wa.me/77089826615"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-whatsapp/20 border border-whatsapp/30 flex items-center justify-center text-whatsapp hover:bg-whatsapp/30 transition-all"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a
              href="https://instagram.com/milgec.kz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#E4405F]/20 border border-[#E4405F]/30 flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F]/30 transition-all"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>

        {/* Service cards grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s) => (
            <div
              key={s.num}
              data-cs-card
              className={`rounded-2xl p-7 border transition-all hover:shadow-md ${
                s.accent
                  ? "bg-[#faf5eb] border-gold/20 hover:border-gold/40"
                  : "bg-bg-alt border-border/50 hover:border-gold/30"
              }`}
            >
              <div className="flex items-start gap-4 mb-5">
                <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${
                  s.accent ? "bg-gold text-white" : "bg-navy text-white"
                }`}>
                  {s.num}
                </span>
                <div>
                  <p className="text-gold text-[11px] font-semibold uppercase tracking-wider">{s.title}</p>
                  <h3 className="text-navy font-bold text-lg">{s.titleRu}</h3>
                </div>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-5">{s.desc}</p>

              <ul className="flex flex-col gap-2">
                {s.details.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-text-muted text-xs leading-relaxed">
                    <span className={`w-4.5 h-4.5 rounded-full text-[10px] flex items-center justify-center shrink-0 mt-0.5 ${
                      s.accent ? "bg-gold/20 text-gold" : "bg-gold/10 text-gold"
                    }`}>&#10003;</span>
                    {d}
                  </li>
                ))}
              </ul>

              {s.accent && (
                <div className="mt-5 pt-4 border-t border-gold/20 flex items-center gap-2">
                  <span className="text-gold text-2xl font-extrabold">90%</span>
                  <span className="text-text-muted text-xs">студентов получают стипендию</span>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Additional services */}
        <div className="mt-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-2 text-center">After Enrollment</p>
          <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-extrabold text-navy tracking-[-0.02em] mb-8 text-center">
            Дополнительные услуги
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((s) => (
              <div
                key={s.title}
                data-cs-card
                className="bg-bg-alt rounded-2xl p-5 border border-border/50 hover:border-gold/30 hover:shadow-sm transition-all"
              >
                <div className="text-2xl mb-3">{s.emoji}</div>
                <p className="text-gold text-[11px] font-semibold uppercase tracking-wider">{s.title}</p>
                <h4 className="text-navy font-bold text-sm mb-2">{s.titleRu}</h4>
                <p className="text-text-secondary text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
