export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30" />
      <div className="relative z-10 max-w-[800px] mx-auto px-4 text-center pt-16">
        <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <span className="text-gold text-sm font-semibold">200+ университетов-партнёров в Китае</span>
        </div>
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

      <a
        href="#fears"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Прокрутить вниз"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-8 h-8 opacity-50">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </a>
    </section>
  );
}
