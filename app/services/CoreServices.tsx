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
              href="https://wa.me/8613792888176"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-whatsapp/20 border border-whatsapp/30 flex items-center justify-center text-whatsapp hover:bg-whatsapp/30 transition-all"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a
              href="https://t.me/milgec"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#2AABEE]/20 border border-[#2AABEE]/30 flex items-center justify-center text-[#2AABEE] hover:bg-[#2AABEE]/30 transition-all"
              aria-label="Telegram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
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
