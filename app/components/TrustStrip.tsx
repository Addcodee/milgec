const stats = [
  { number: "200+", label: "Университетов-партнёров" },
  { number: "60+", label: "Стран" },
  { number: "6 000+", label: "Студентов зачислено" },
  { number: "90%", label: "Получают стипендию" },
];

export default function TrustStrip() {
  return (
    <section className="bg-navy border-t-[3px] border-gold">
      <div className="max-w-[1100px] mx-auto px-4 py-8 flex flex-wrap justify-center gap-8 md:gap-16">
        {stats.map((s) => (
          <div key={s.label} className="text-center min-w-[120px]">
            <div className="text-gold text-3xl md:text-4xl font-extrabold leading-tight">
              {s.number}
            </div>
            <div className="text-white/70 text-xs md:text-sm uppercase tracking-wider mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
