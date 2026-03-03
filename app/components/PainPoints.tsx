const fears = [
  {
    emoji: "🎓",
    question: "Меня точно примут?",
    answer:
      "Мы рекомендуем только те университеты, куда подходит ваш профиль. Никаких ложных обещаний — только честная оценка на основе вашего GPA, бюджета и целей.",
  },
  {
    emoji: "🛡️",
    question: "Это не мошенничество?",
    answer:
      "Официальные письма-авторизации от 200+ университетов. Юридический договор каждому клиенту до начала работы.",
  },
  {
    emoji: "💸",
    question: "Сколько это стоит на самом деле?",
    answer:
      "Полная разбивка стоимости до принятия решения. Никаких скрытых платежей. Вы точно знаете, за что платите.",
  },
  {
    emoji: "🏠",
    question: "Мой ребёнок будет в безопасности?",
    answer:
      "Встреча в аэропорту. Помощь с регистрацией. Поддержка 24/7 на протяжении всего обучения. Мы не исчезаем после зачисления.",
  },
  {
    emoji: "🤔",
    question: "Я не понимаю китайскую систему",
    answer:
      "И не нужно. Мы проведём через каждый шаг — от выбора программы до критериев стипендии.",
  },
  {
    emoji: "💰",
    question: "Что если не дадут стипендию?",
    answer:
      "90% наших студентов получают финансирование. Мы оптимизируем каждую заявку — это наша специализация.",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-mesh-light py-20 md:py-24" id="fears">
      <div className="max-w-300 mx-auto px-6">
        <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-3">Частые сомнения</p>
        <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold text-navy tracking-[-0.02em] mb-3">
          Мы знаем, что вас беспокоит
        </h2>
        <p className="text-text-muted text-sm mb-12 max-w-105">
          Вот ответы на вопросы, которые задают 9 из 10 родителей
        </p>

        {/* Row 1: 3 equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {fears.slice(0, 3).map((f, i) => (
            <div key={i} className="card-hover bg-white rounded-2xl p-7 border border-border/60">
              <div className="text-3xl mb-4">{f.emoji}</div>
              <h3 className="text-base font-bold text-navy mb-2">&laquo;{f.question}&raquo;</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>

        {/* Row 2: dark accent (2 col) + regular (1 col) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="md:col-span-2 card-hover bg-navy rounded-2xl p-7 text-white">
            <div className="text-3xl mb-4">{fears[3].emoji}</div>
            <h3 className="text-base font-bold mb-2">&laquo;{fears[3].question}&raquo;</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-125">{fears[3].answer}</p>
          </div>
          <div className="card-hover bg-white rounded-2xl p-7 border border-border/60">
            <div className="text-3xl mb-4">{fears[4].emoji}</div>
            <h3 className="text-base font-bold text-navy mb-2">&laquo;{fears[4].question}&raquo;</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{fears[4].answer}</p>
          </div>
        </div>

        {/* Row 3: full width with gradient */}
        <div className="card-hover bg-linear-to-r from-gold/5 to-gold/10 rounded-2xl p-7 border border-gold/20">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="text-3xl">{fears[5].emoji}</div>
            <div>
              <h3 className="text-base font-bold text-navy mb-1">&laquo;{fears[5].question}&raquo;</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{fears[5].answer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
