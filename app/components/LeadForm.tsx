"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const countries = [
  "Россия", "Казахстан", "Кыргызстан", "Узбекистан", "Таджикистан",
  "Туркменистан", "Украина", "Беларусь", "Азербайджан", "Грузия",
  "Армения", "Молдова", "Пакистан", "Индонезия", "Марокко",
  "Бангладеш", "Шри-Ланка", "Индия", "Египет", "Нигерия",
  "Турция", "Иран", "Ирак", "Другая страна",
];

const programs = [
  "Бакалавриат",
  "Магистратура",
  "Аспирантура (PhD)",
  "Языковые курсы (китайский)",
  "Другое",
];

const startDates = [
  "Осень 2026 (сентябрь)",
  "Весна 2027 (март)",
  "Осень 2027 (сентябрь)",
  "Пока не определился",
];

const steps = [
  { id: "name", label: "Как вас зовут?", subtitle: "Имя и фамилия" },
  { id: "whatsapp", label: "Ваш WhatsApp", subtitle: "Мы отправим результат сюда" },
  { id: "country", label: "Страна гражданства", subtitle: "Откуда вы?" },
  { id: "program", label: "Уровень программы", subtitle: "Что хотите изучать?" },
  { id: "startDate", label: "Когда планируете начать?", subtitle: "Примерные сроки" },
];

export default function LeadForm() {
  const ref = useRef<HTMLElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    name: "",
    whatsapp: "",
    country: "",
    program: "",
    startDate: "",
  });

  const step = steps[currentStep];
  const totalSteps = steps.length;
  const progress = ((currentStep) / totalSteps) * 100;

  const canProceed = () => {
    const key = step.id as keyof typeof data;
    return data[key].trim() !== "";
  };

  const handleNext = () => {
    if (!canProceed()) return;
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // TODO: подключить к email/CRM/webhook
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNext();
    }
  };

  useGSAP(() => {
    if (!ref.current) return;

    gsap.from("[data-form-content]", {
      y: 50,
      opacity: 0,
      filter: "blur(8px)",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: ref });

  const inputClass = "w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white text-lg placeholder:text-white/40 focus:outline-none focus:border-gold focus:bg-white/15 transition-all";
  const selectClass = "w-full px-5 py-4 min-h-14 appearance-none rounded-2xl bg-white/10 border border-white/20 text-white text-lg focus:outline-none focus:border-gold focus:bg-white/15 transition-all [&>option]:text-black";

  const perks = [
    { icon: "🎓", text: "Оценка шансов на стипендию" },
    { icon: "🏛️", text: "Подбор 3–5 подходящих университетов" },
    { icon: "💰", text: "Персональная разбивка стоимости" },
    { icon: "⏱️", text: "Ответ в WhatsApp в течение 24 ч" },
  ];

  return (
    <section ref={ref} className="bg-navy py-20 md:py-28 relative overflow-hidden" id="form">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />
      <div data-form-content className="max-w-300 mx-auto px-6 relative z-10">
        {submitted ? (
          <div className="max-w-140 mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/10">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-gold text-3xl">&#10003;</span>
            </div>
            <h3 className="text-white text-2xl font-bold mb-3">
              Спасибо, {data.name.split(" ")[0]}!
            </h3>
            <p className="text-white/70 leading-relaxed">
              Мы отправим персональный расчёт стоимости и оценку шансов на стипендию
              в ваш WhatsApp в течение 24 часов.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left — motivation */}
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-3">Бесплатная оценка</p>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-white tracking-[-0.02em] mb-4">
                Узнайте свои шансы за 2 минуты
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Заполните короткую анкету — мы подготовим персональный расчёт стоимости и оценим ваши шансы на стипендию.
              </p>
              <ul className="flex flex-col gap-4">
                {perks.map((p) => (
                  <li key={p.text} className="flex items-center gap-3">
                    <span className="text-xl">{p.icon}</span>
                    <span className="text-white/70 text-sm">{p.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — form */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-white/40 text-sm">
                  Шаг {currentStep + 1} из {totalSteps}
                </p>
                <div className="flex gap-1">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i <= currentStep ? "w-6 bg-gold" : "w-3 bg-white/15"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
                <h3 className="text-white text-xl font-bold mb-1">{step.label}</h3>
                <p className="text-white/50 text-sm mb-6">{step.subtitle}</p>

                {step.id === "name" && (
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    onKeyDown={handleKeyDown}
                    placeholder="Иван Петров"
                    className={inputClass}
                  />
                )}
                {step.id === "whatsapp" && (
                  <input
                    type="tel"
                    value={data.whatsapp}
                    onChange={(e) => setData({ ...data, whatsapp: e.target.value })}
                    onKeyDown={handleKeyDown}
                    placeholder="+7 900 123 45 67"
                    className={inputClass}
                  />
                )}
                {step.id === "country" && (
                  <select
                    value={data.country}
                    onChange={(e) => setData({ ...data, country: e.target.value })}
                    className={selectClass}
                  >
                    <option value="" disabled>Выберите страну</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                )}
                {step.id === "program" && (
                  <select
                    value={data.program}
                    onChange={(e) => setData({ ...data, program: e.target.value })}
                    className={selectClass}
                  >
                    <option value="" disabled>Выберите программу</option>
                    {programs.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                )}
                {step.id === "startDate" && (
                  <select
                    value={data.startDate}
                    onChange={(e) => setData({ ...data, startDate: e.target.value })}
                    className={selectClass}
                  >
                    <option value="" disabled>Выберите дату</option>
                    {startDates.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                )}

                <div className="flex items-center gap-3 mt-8">
                  {currentStep > 0 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3.5 rounded-xl border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all text-sm font-semibold"
                    >
                      Назад
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className={`flex-1 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all ${
                      canProceed()
                        ? "bg-gold hover:bg-gold-hover text-white hover:shadow-[0_8px_30px_rgba(212,168,67,0.3)]"
                        : "bg-white/10 text-white/30 cursor-not-allowed"
                    }`}
                  >
                    {currentStep === totalSteps - 1 ? "Получить бесплатный расчёт" : "Далее"}
                  </button>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-white/40 text-xs text-center mb-3">Или напишите нам напрямую</p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="https://wa.me/8613792888176?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D1%80%D0%BE%20%D0%BF%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%20%D0%9A%D0%B8%D1%82%D0%B0%D0%B9."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-whatsapp/20 hover:bg-whatsapp/30 border border-whatsapp/30 text-whatsapp text-sm font-semibold px-4 py-2.5 rounded-xl transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                  <a
                    href="https://t.me/milgec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#2AABEE]/20 hover:bg-[#2AABEE]/30 border border-[#2AABEE]/30 text-[#2AABEE] text-sm font-semibold px-4 py-2.5 rounded-xl transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    Telegram
                  </a>
                </div>
              </div>

              <p className="text-white/30 text-xs mt-4 text-center">
                Без спама. Без обязательств. Только честные рекомендации.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
