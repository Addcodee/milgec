export default function MiniCTA({ text }: { text: string }) {
  return (
    <div className="bg-navy py-8">
      <div className="max-w-300 mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <p className="text-white/70 text-sm font-medium">{text}</p>
        <a
          href="#form"
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-[0_4px_20px_rgba(212,168,67,0.3)] shrink-0"
        >
          Бесплатная оценка
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
