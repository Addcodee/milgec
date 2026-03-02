const notFit = [
  "Вы ожидаете гарантированное зачисление вне зависимости от вашей успеваемости",
  "Вы ищете самый дешёвый вариант, не заботясь о качестве",
  "Вам нужно зачисление за 2 недели",
  "Вы не готовы предоставить подлинные, верифицированные документы",
  "Вы хотите, чтобы кто-то «купил» вам место в университете",
];

const goodFit = [
  "Вы хотите чёткий, профессиональный процесс без догадок",
  "Вы цените прозрачность и честные рекомендации, а не пустые обещания",
  "Вы серьёзно настроены инвестировать в качественное образование",
  "Вы хотите экспертную поддержку на каждом этапе — до, во время и после зачисления",
  "Вы готовы работать над своим будущим",
];

export default function Filter() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-3xl md:text-[32px] font-bold text-navy text-center mb-12">
          MilGEC — не для всех
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-bg-alt rounded-xl p-7 border-l-4 border-warning">
            <h3 className="text-lg font-bold text-warning mb-5">
              Мы НЕ подходим, если:
            </h3>
            <ul className="flex flex-col gap-3">
              {notFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="text-warning mt-0.5 shrink-0">&#10007;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-bg-alt rounded-xl p-7 border-l-4 border-success">
            <h3 className="text-lg font-bold text-success mb-5">
              Мы — правильный выбор, если:
            </h3>
            <ul className="flex flex-col gap-3">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
