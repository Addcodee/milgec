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

export default function LeadForm() {
  const ref = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    whatsapp: "",
    country: "",
    program: "",
    startDate: "",
  });

  const canSubmit = data.name.trim() !== "" && data.whatsapp.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || loading) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Не удалось отправить. Попробуйте ещё раз или напишите нам напрямую.");
    } finally {
      setLoading(false);
    }
  };

  useGSAP(() => {
    if (!ref.current) return;
    const el = ref.current.querySelector("[data-form-content]");
    if (el) {
      gsap.set(el, { y: 40, opacity: 0 });
      gsap.to(el, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
      });
    }
  }, { scope: ref });

  const inputClass = "w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-gold focus:bg-white/15 transition-all";
  const selectClass = "w-full px-4 py-3.5 appearance-none rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-gold focus:bg-white/15 transition-all [&>option]:text-black";

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
              <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-white/60 text-xs font-medium mb-1.5 block">Имя *</label>
                    <input
                      type="text"
                      value={data.name}
                      onChange={(e) => setData({ ...data, name: e.target.value })}
                      placeholder="Иван Петров"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="text-white/60 text-xs font-medium mb-1.5 block">WhatsApp *</label>
                    <input
                      type="tel"
                      value={data.whatsapp}
                      onChange={(e) => setData({ ...data, whatsapp: e.target.value })}
                      placeholder="+7 900 123 45 67"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="text-white/60 text-xs font-medium mb-1.5 block">Страна</label>
                    <select
                      value={data.country}
                      onChange={(e) => setData({ ...data, country: e.target.value })}
                      className={selectClass}
                    >
                      <option value="">Выберите страну</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/60 text-xs font-medium mb-1.5 block">Программа</label>
                      <select
                        value={data.program}
                        onChange={(e) => setData({ ...data, program: e.target.value })}
                        className={selectClass}
                      >
                        <option value="">Выберите</option>
                        {programs.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-white/60 text-xs font-medium mb-1.5 block">Начало</label>
                      <select
                        value={data.startDate}
                        onChange={(e) => setData({ ...data, startDate: e.target.value })}
                        className={selectClass}
                      >
                        <option value="">Выберите</option>
                        {startDates.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {error && (
                  <p className="text-red-400 text-xs mt-4">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={!canSubmit || loading}
                  className={`w-full mt-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all ${
                    canSubmit && !loading
                      ? "bg-gold hover:bg-gold-hover text-white hover:shadow-[0_8px_30px_rgba(212,168,67,0.3)]"
                      : "bg-white/10 text-white/30 cursor-not-allowed"
                  }`}
                >
                  {loading ? "Отправляем..." : "Получить бесплатный расчёт"}
                </button>
              </form>

              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-white/40 text-xs text-center mb-3">Или напишите нам напрямую</p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="https://wa.me/77089826615?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D1%80%D0%BE%20%D0%BF%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%20%D0%9A%D0%B8%D1%82%D0%B0%D0%B9."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-whatsapp/20 hover:bg-whatsapp/30 border border-whatsapp/30 text-whatsapp text-sm font-semibold px-4 py-2.5 rounded-xl transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                  <a
                    href="https://instagram.com/milgec.kz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#E4405F]/20 hover:bg-[#E4405F]/30 border border-[#E4405F]/30 text-[#E4405F] text-sm font-semibold px-4 py-2.5 rounded-xl transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    Instagram
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
