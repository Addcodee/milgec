const steps = [
  {
    num: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
    title: "Аудит профиля",
    desc: "Анализируем вашу академическую историю, документы, бюджет и карьерные цели для оценки возможностей.",
  },
  {
    num: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21" />
      </svg>
    ),
    title: "Подбор университетов",
    desc: "На основе вашего профиля рекомендуем 3–5 наиболее подходящих университетов и программ из нашей сети 200+ партнёров.",
  },
  {
    num: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: "Подготовка документов",
    desc: "Наша команда подготовит, проверит и оформит все документы в соответствии с требованиями каждого университета.",
  },
  {
    num: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg>
    ),
    title: "Подача заявки и стипендия",
    desc: "Подаём ваши заявки и оптимизируем каждую для максимального шанса на получение стипендии.",
  },
  {
    num: "05",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
    title: "Зачисление",
    desc: "Вы получаете официальное письмо о зачислении. Мы помогаем разобраться и подтвердить поступление.",
  },
  {
    num: "06",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
      </svg>
    ),
    title: "Виза и подготовка к отъезду",
    desc: "Помогаем с оформлением визы и предоставляем полную подготовку к жизни в Китае.",
  },
  {
    num: "07",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg>
    ),
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
                <div className="shrink-0 w-14 h-14 rounded-full bg-navy flex items-center justify-center text-gold">
                  {s.icon}
                </div>
                <div className="pt-2">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-gold text-xs font-bold">{s.num}</span>
                    <h3 className="font-bold text-navy text-lg">
                      {s.title}
                    </h3>
                  </div>
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
