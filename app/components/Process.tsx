const steps = [
  {
    num: "01",
    title: "Аудит профиля",
    desc: "Анализируем вашу академическую историю, документы, бюджет и карьерные цели для оценки возможностей.",
  },
  {
    num: "02",
    title: "Подбор университетов",
    desc: "На основе вашего профиля рекомендуем 3–5 наиболее подходящих университетов и программ из нашей сети 200+ партнёров.",
  },
  {
    num: "03",
    title: "Подготовка документов",
    desc: "Наша команда подготовит, проверит и оформит все документы в соответствии с требованиями каждого университета.",
  },
  {
    num: "04",
    title: "Подача заявки и стипендия",
    desc: "Подаём ваши заявки и оптимизируем каждую для максимального шанса на получение стипендии.",
  },
  {
    num: "05",
    title: "Зачисление",
    desc: "Вы получаете официальное письмо о зачислении. Мы помогаем разобраться и подтвердить поступление.",
  },
  {
    num: "06",
    title: "Виза и подготовка к отъезду",
    desc: "Помогаем с оформлением визы и предоставляем полную подготовку к жизни в Китае.",
  },
  {
    num: "07",
    title: "Встреча в Китае",
    desc: "Встреча в аэропорту с персональным ассистентом. Помощь с регистрацией в кампусе. Пакет приветствия. Поддержка на протяжении всего обучения.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-16 md:py-20" id="process">
      <div className="max-w-[800px] mx-auto px-4">
        <h2 className="text-3xl md:text-[32px] font-bold text-navy text-center mb-3">
          Ваш путь в китайский университет
        </h2>
        <p className="text-text-secondary text-center mb-14">
          7 понятных шагов. Без догадок.
        </p>

        <div className="relative">
          <div className="absolute left-[27px] top-7 bottom-7 w-0.5 bg-border hidden md:block" />

          <div className="flex flex-col gap-10 relative z-10">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-5 md:gap-8 items-start">
                <div className="shrink-0 w-14 h-14 rounded-full bg-navy flex items-center justify-center">
                  <span className="text-gold font-extrabold text-sm">
                    {s.num}
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-navy text-lg mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-[15px]">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
