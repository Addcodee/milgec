const universities = [
  "China University of Petroleum (East China) — 211/Double First Class",
  "Huazhong University of Science and Technology — 985/211",
  "Xi'an Jiaotong University — 985/211",
  "East China Normal University — 985/211",
  "South China University of Technology — 985/211",
  "Harbin Institute of Technology — 985/211",
  "Nanjing University of Information Science and Technology — Double First Class",
  "Zhengzhou University — 211",
];

export default function Trust() {
  return (
    <section className="bg-bg-alt py-16 md:py-20" id="trust">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-3xl md:text-[32px] font-bold text-navy text-center mb-14">
          Почему 6 000+ студентов доверяют MilGEC
        </h2>

        {/* О компании */}
        <div className="bg-white rounded-xl p-8 md:p-10 border border-border mb-10">
          <div className="flex flex-wrap gap-x-12 gap-y-2 mb-6 text-sm text-text-secondary">
            <span>
              <strong className="text-navy">Основана:</strong> 2020
            </span>
            <span>
              <strong className="text-navy">Штаб-квартира:</strong> Циндао, Китай
            </span>
          </div>
          <p className="text-sm text-text-secondary mb-6">
            <strong className="text-navy">Филиалы в 7 странах:</strong>{" "}
            Индонезия &bull; Шри-Ланка &bull; Марокко &bull; Россия &bull;
            Пакистан &bull; Бангладеш &bull; Кыргызстан
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              ["200+", "Университетов-партнёров"],
              ["60+", "Стран обслуживания"],
              ["6 000+", "Студентов зачислено"],
              ["90%", "Получают стипендию"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="bg-bg-alt rounded-lg p-4 text-center"
              >
                <div className="text-gold text-2xl font-extrabold">{num}</div>
                <div className="text-text-muted text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>

          <p className="text-sm text-text-secondary leading-relaxed">
            Каждый клиент получает официальный договор на оказание услуг. MilGEC —
            зарегистрированное юридическое лицо, работающее в соответствии с
            китайским законодательством в сфере образования.
          </p>
        </div>

        {/* Письма авторизации */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-navy mb-2">
            Официальные партнёрства с университетами
          </h3>
          <p className="text-text-secondary text-sm mb-6">
            У нас есть письма-авторизации от ведущих китайских университетов
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {universities.map((u) => (
              <div
                key={u}
                className="bg-white border border-border rounded-lg px-5 py-3.5 text-sm text-navy flex items-center gap-3"
              >
                <span className="text-gold text-lg">&#10003;</span>
                {u}
              </div>
            ))}
          </div>
          <p className="text-text-muted text-sm mt-4 text-center">
            + ещё 200 университетов-партнёров во всех провинциях Китая
          </p>
        </div>
      </div>
    </section>
  );
}
