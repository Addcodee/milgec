const cases = [
  {
    initials: "А.К.",
    country: "Пакистан",
    flag: "🇵🇰",
    gpa: "3.6",
    wanted: "Машиностроение (магистратура)",
    result: "Harbin Institute of Technology, Харбин",
    scholarship: "Полная стипендия (CSC)",
    timeline: "3 месяца",
  },
  {
    initials: "С.М.",
    country: "Марокко",
    flag: "🇲🇦",
    gpa: "3.2",
    wanted: "Международный бизнес (бакалавриат)",
    result: "Zhejiang University of Technology, Ханчжоу",
    scholarship: "Частичная стипендия (грант университета)",
    timeline: "2,5 месяца",
  },
  {
    initials: "Р.Д.",
    country: "Индонезия",
    flag: "🇮🇩",
    gpa: "3.8",
    wanted: "Компьютерные науки (PhD)",
    result: "Huazhong University of Science and Technology, Ухань",
    scholarship: "Полная стипендия (стипендия правительства КНР)",
    timeline: "4 месяца",
  },
  {
    initials: "Н.Т.",
    country: "Бангладеш",
    flag: "🇧🇩",
    gpa: "3.4",
    wanted: "Строительство (бакалавриат)",
    result: "China University of Petroleum (East China), Циндао",
    scholarship: "Частичная стипендия",
    timeline: "2 месяца",
  },
  {
    initials: "К.А.",
    country: "Кыргызстан",
    flag: "🇰🇬",
    gpa: "3.5",
    wanted: "Медицина (бакалавриат)",
    result: "Shandong University, Цзинань",
    scholarship: "Полная стипендия (провинциальный грант)",
    timeline: "3,5 месяца",
  },
  {
    initials: "Л.Э.",
    country: "Шри-Ланка",
    flag: "🇱🇰",
    gpa: "3.1",
    wanted: "Экономика (магистратура)",
    result: "Shanghai University, Шанхай",
    scholarship: "Стипендия университета (50% от обучения)",
    timeline: "2 месяца",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-white py-16 md:py-20" id="cases">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-3xl md:text-[32px] font-bold text-navy text-center mb-2">
          Реальные результаты реальных студентов
        </h2>
        <p className="text-text-secondary text-center mb-12">
          Не отзывы. Факты.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.initials}
              className="bg-white border border-border rounded-xl overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-navy to-gold" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-navy text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center">
                    {c.initials}
                  </span>
                  <span className="text-text-muted text-sm flex items-center gap-1.5">
                    <span className="text-lg">{c.flag}</span>
                    {c.country}
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-text-muted">GPA:</span>{" "}
                    <span className="text-navy font-semibold">{c.gpa}</span>
                  </div>
                  <div>
                    <span className="text-text-muted">Хотел:</span>{" "}
                    <span className="text-text">{c.wanted}</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <span className="text-text-muted">Зачислен в:</span>
                    <p className="text-navy font-semibold">{c.result}</p>
                  </div>
                  <div>
                    <span className="text-text-muted">Стипендия:</span>
                    <p className="text-success font-semibold text-sm">
                      {c.scholarship}
                    </p>
                  </div>
                  <div>
                    <span className="text-text-muted">Срок:</span>{" "}
                    <span className="text-text">{c.timeline}</span>
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
