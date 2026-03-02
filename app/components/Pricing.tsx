const tiers = [
  {
    name: "Бесплатная оценка",
    price: "Бесплатно",
    best: "Хочу понять свои варианты",
    features: [
      "Анализ профиля",
      "Рекомендации по университетам и программам",
      "Оценка шансов на стипендию",
      "Персональная разбивка стоимости",
    ],
    cta: "Получить бесплатную оценку",
    featured: false,
  },
  {
    name: "Пакет «Поступление»",
    price: "$—",
    best: "Я точно хочу учиться в Китае",
    features: [
      "Всё из бесплатной оценки",
      "Полная подготовка и оформление документов",
      "Подача заявок в несколько университетов",
      "Оптимизация заявки на стипендию",
      "Сопровождение до зачисления",
    ],
    cta: "Начать поступление",
    featured: false,
  },
  {
    name: "Полный пакет",
    price: "$—",
    best: "Сделайте всё за меня",
    features: [
      "Всё из пакета «Поступление»",
      "Помощь с оформлением визы",
      "Подготовка к отъезду и ориентация",
      "Встреча в аэропорту в Китае",
      "Помощь с регистрацией в кампусе",
      "Поддержка 24/7 в первый семестр",
      "Пакет приветствия",
    ],
    cta: "Полное сопровождение",
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section className="bg-bg-alt py-16 md:py-20" id="pricing">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-3xl md:text-[32px] font-bold text-navy text-center mb-12">
          Прозрачные цены. Без сюрпризов.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`bg-white rounded-xl p-7 flex flex-col ${
                t.featured
                  ? "border-2 border-gold shadow-[0_4px_20px_rgba(212,168,67,0.15)]"
                  : "border border-border"
              }`}
            >
              {t.featured && (
                <div className="text-xs text-gold font-bold uppercase tracking-wider mb-2">
                  Самый популярный
                </div>
              )}
              <h3 className="text-xl font-bold text-navy mb-1">{t.name}</h3>
              <div className="text-3xl font-extrabold text-navy mb-2">
                {t.price}
              </div>
              <p className="text-text-muted text-sm mb-6">
                &laquo;{t.best}&raquo;
              </p>

              <ul className="flex flex-col gap-3 mb-8 flex-grow">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-gold mt-0.5">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#form"
                className={`block text-center font-bold text-sm uppercase tracking-wider py-3 rounded-lg transition-colors ${
                  t.featured
                    ? "bg-gold hover:bg-gold-hover text-white"
                    : "border-2 border-navy text-navy hover:bg-navy hover:text-white"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-text-muted text-xs text-center mt-8 max-w-[700px] mx-auto">
          В стоимость не входят: плата за обучение в университете, проживание,
          транспортные расходы, медицинская страховка и личные расходы. Они
          оплачиваются напрямую университету или поставщикам услуг.
        </p>
      </div>
    </section>
  );
}
