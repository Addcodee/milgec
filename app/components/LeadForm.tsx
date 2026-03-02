"use client";

import { useState } from "react";

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

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: подключить к email/CRM/webhook
    setSubmitted(true);
  };

  return (
    <section className="bg-navy py-16 md:py-20" id="form">
      <div className="max-w-[600px] mx-auto px-4">
        <h2 className="text-3xl md:text-[32px] font-bold text-white text-center mb-3">
          Получите бесплатный расчёт стоимости и шансов на стипендию
        </h2>
        <p className="text-white/70 text-center mb-10">
          Заполните 5 полей. Мы отправим персональную оценку в WhatsApp в течение 24 часов.
        </p>

        {submitted ? (
          <div className="bg-white/10 rounded-xl p-10 text-center">
            <div className="text-gold text-5xl mb-4">&#10003;</div>
            <h3 className="text-white text-xl font-bold mb-2">
              Спасибо!
            </h3>
            <p className="text-white/70">
              Мы отправим персональный расчёт стоимости и оценку шансов на стипендию
              в ваш WhatsApp в течение 24 часов.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Ваше полное имя"
              className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="tel"
              name="whatsapp"
              required
              placeholder="+7 900 123 45 67 (WhatsApp)"
              className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
            />
            <select
              name="country"
              required
              defaultValue=""
              className="w-full px-4 py-3.5 min-h-[48px] appearance-none rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-gold transition-colors [&>option]:text-black"
            >
              <option value="" disabled>
                Страна гражданства
              </option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <select
              name="program"
              required
              defaultValue=""
              className="w-full px-4 py-3.5 min-h-[48px] appearance-none rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-gold transition-colors [&>option]:text-black"
            >
              <option value="" disabled>
                Уровень программы
              </option>
              {programs.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            <select
              name="startDate"
              required
              defaultValue=""
              className="w-full px-4 py-3.5 min-h-[48px] appearance-none rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-gold transition-colors [&>option]:text-black"
            >
              <option value="" disabled>
                Когда планируете начать?
              </option>
              {startDates.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-hover text-white font-bold text-base uppercase tracking-wider py-4 rounded-lg transition-colors mt-2"
            >
              Получить бесплатный расчёт
            </button>

            <div className="flex flex-col items-center gap-1 mt-2">
              <p className="text-white/50 text-xs">
                Без спама. Без обязательств. Только честные рекомендации.
              </p>
              <p className="text-white/50 text-xs">
                6 000+ студентов уже доверили нам своё будущее.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
