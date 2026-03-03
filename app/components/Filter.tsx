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
    <section className="bg-bg-alt py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-3">Честный фильтр</p>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold text-navy tracking-[-0.02em]">
            MilGEC — не для всех
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Not a fit */}
          <div className="card-hover bg-white rounded-2xl p-7 border border-border/50">
            <div className="text-4xl mb-5">🚫</div>
            <h3 className="text-[15px] font-bold text-navy mb-5">
              Мы НЕ подходим, если:
            </h3>
            <ul className="flex flex-col gap-3">
              {notFit.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] text-text-secondary leading-relaxed">
                  <span className="w-4.5 h-4.5 rounded-full bg-warning/10 text-warning text-[10px] flex items-center justify-center shrink-0 mt-0.5">&#10007;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Good fit — accent card */}
          <div className="card-hover bg-navy rounded-2xl p-7 text-white">
            <div className="text-4xl mb-5">✅</div>
            <h3 className="text-[15px] font-bold mb-5">
              Мы — правильный выбор, если:
            </h3>
            <ul className="flex flex-col gap-3">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] text-white/60 leading-relaxed">
                  <span className="w-4.5 h-4.5 rounded-full bg-gold/20 text-gold text-[10px] flex items-center justify-center shrink-0 mt-0.5">&#10003;</span>
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
