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
