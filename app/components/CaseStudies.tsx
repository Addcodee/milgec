"use client";

import { useState } from "react";

const cases = [
  {
    name: "Ахмед К.",
    from: "Пакистан",
    photo: "/students/ahmed.webp",
    // ФОТО: парень ~22-25 лет, южноазиатская внешность.
    // Поясной портрет на фоне зимнего кампуса или снежного города (Харбин — север Китая).
    // В куртке, с рюкзаком или с ноутбуком. Формат: 600x400px минимум, горизонтальный, JPG.
    initials: "АК",
    university: "Harbin Institute of Technology",
    program: "Машиностроение · Магистратура",
    scholarship: "Полная стипендия CSC",
    timeline: "3 мес.",
  },
  {
    name: "Рахмат Д.",
    from: "Индонезия",
    photo: "/students/rahmat.jpg",
    // ФОТО: парень ~24-28 лет, индонезийская внешность.
    // В лаборатории или за компьютером (PhD, Computer Science). Может быть в очках.
    // Формат: 600x400px минимум, горизонтальный, JPG.
    initials: "РД",
    university: "HUST",
    program: "Computer Science · PhD",
    scholarship: "Стипендия правительства КНР",
    timeline: "4 мес.",
  },
  {
    name: "Кайрат А.",
    from: "Кыргызстан",
    photo: "/students/kayrat.jpg",
    // ФОТО: парень ~19-22 лет, центральноазиатская внешность.
    // В белом халате или на фоне медицинского корпуса / анатомической аудитории.
    // Формат: 600x400px минимум, горизонтальный, JPG.
    initials: "КА",
    university: "Shandong University",
    program: "Медицина · Бакалавриат",
    scholarship: "Полная стипендия",
    timeline: "3.5 мес.",
  },
  {
    name: "Саид М.",
    from: "Марокко",
    photo: "/students/said.jpg",
    // ФОТО: парень ~19-22 лет, североафриканская / арабская внешность.
    // Портрет на фоне современного университетского здания или в аудитории.
    // Casual стиль, улыбается. Формат: 600x400px минимум, горизонтальный, JPG.
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
    // ФОТО: парень ~19-22 лет, южноазиатская внешность.
    // На территории кампуса, возможно с книгами или у входа в здание.
    // Формат: 600x400px минимум, горизонтальный, JPG.
    initials: "НТ",
    university: "China University of Petroleum",
    program: "Инженерия · Бакалавриат",
    scholarship: "Частичная стипендия",
    timeline: "2 мес.",
  },
  {
    name: "Лакшан Э.",
    from: "Шри-Ланка",
    photo: "/students/lachshan.jpg",
    // ФОТО: парень ~24-27 лет, шри-ланкийская внешность.
    // В деловом/smart casual стиле, на фоне городского пейзажа Шанхая или библиотеки.
    // Магистратура, экономика — более «взрослый» образ. Формат: 600x400px минимум, горизонтальный, JPG.
    initials: "ЛЭ",
    university: "Shanghai University",
    program: "Экономика · Магистратура",
    scholarship: "50% скидка на обучение",
    timeline: "2 мес.",
  },
];

function StudentPhoto({ src, initials, name }: { src: string; initials: string; name: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 bg-navy/10 flex items-center justify-center">
        <span className="text-3xl font-bold text-navy/30 select-none">{initials}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
    />
  );
}

export default function CaseStudies() {
  return (
    <section className="bg-bg-alt py-20 md:py-28" id="cases">
      <div className="max-w-300 mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-3">
            Результаты
          </p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-text tracking-[-0.03em] mb-3">
            Реальные истории поступления
          </h2>
          <p className="text-text-muted text-sm max-w-lg mx-auto">
            Не отзывы — факты. Каждый кейс подтверждён документами.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c) => (
            <div
              key={c.name}
              className="group relative rounded-2xl overflow-hidden bg-white border border-border card-hover"
            >
              {/* Student photo */}
              <div className="relative h-52 overflow-hidden bg-bg-alt">
                <StudentPhoto src={c.photo} initials={c.initials} name={c.name} />
                {/* Scholarship badge */}
                <div className="absolute top-3 right-3 bg-gold text-white text-[11px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full shadow-md">
                  {c.scholarship}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Name & origin */}
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

                {/* Result */}
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
        </div>
      </div>
    </section>
  );
}
