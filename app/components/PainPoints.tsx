const fears = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a23.838 23.838 0 0 0-1.012 5.434c3.208.545 6.476 1.327 9.767 2.388a64.115 64.115 0 0 1 9.767-2.388 23.839 23.839 0 0 0-1.012-5.434m-18.51 0A2.25 2.25 0 0 1 3 7.862V6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v1.112c0 .943-.59 1.79-1.49 2.285" />
      </svg>
    ),
    question: "Меня точно примут?",
    answer:
      "Мы рекомендуем только те университеты, куда подходит ваш профиль. Никаких ложных обещаний — только честная оценка на основе вашего GPA, бюджета и целей.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    question: "Это не мошенничество? Мои документы в безопасности?",
    answer:
      "У нас есть официальные письма-авторизации от 200+ китайских университетов. Каждый клиент получает юридический договор до начала работы.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    question: "Сколько это будет стоить НА САМОМ ДЕЛЕ?",
    answer:
      "Полная разбивка стоимости до того, как вы примете решение. Никаких скрытых платежей и неожиданных расходов. Вы будете точно знать, за что платите.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
      </svg>
    ),
    question: "Мой ребёнок будет в безопасности в Китае?",
    answer:
      "Встреча в аэропорту по прибытии. Помощь с регистрацией в кампусе. Линия поддержки 24/7 на протяжении всего обучения. Мы не исчезаем после зачисления.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
      </svg>
    ),
    question: "Я не разбираюсь в китайской системе образования",
    answer:
      "И не нужно. Мы проведём вас через каждый шаг — от выбора программы до понимания требований к степени и критериев стипендии.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-gold">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    question: "Что если я не получу стипендию?",
    answer:
      "90% наших студентов получают финансирование. Мы оптимизируем каждую заявку для максимального шанса на стипендию — это наша специализация.",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-bg-alt py-16 md:py-20" id="fears">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-3xl md:text-[32px] font-bold text-navy text-center mb-12">
          Мы знаем, что вас беспокоит
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {fears.map((f) => (
            <div
              key={f.question}
              className="bg-white border-l-4 border-gold rounded-xl p-7 hover:shadow-[0_4px_20px_rgba(27,42,74,0.1)] transition-shadow"
            >
              <div className="mb-3">{f.icon}</div>
              <h3 className="text-lg font-bold text-navy mb-3">
                &laquo;{f.question}&raquo;
              </h3>
              <p className="text-text-secondary leading-relaxed text-[15px]">
                {f.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
