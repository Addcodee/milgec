export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30" />
      <div className="relative z-10 max-w-[800px] mx-auto px-4 text-center pt-16">
        <p className="text-gold uppercase tracking-[3px] text-sm font-bold mb-6">
          MilGEC
        </p>
        <h1 className="text-4xl md:text-[48px] font-bold text-white leading-tight mb-6">
          Учись в Китае по стипендии
        </h1>
        <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-[600px] mx-auto">
          90% наших студентов получают финансирование. Мы берём на себя всё — от выбора университета до зачисления.
        </p>
        <a
          href="#form"
          className="inline-block bg-gold hover:bg-gold-hover text-white font-bold text-base uppercase tracking-wider px-10 py-4 rounded-lg transition-colors"
        >
          Рассчитать стоимость и шанс на стипендию
        </a>
      </div>
    </section>
  );
}
