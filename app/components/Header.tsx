"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1100px] mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="text-white font-bold text-xl tracking-tight">
          MilGEC
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#process" className="text-white/80 hover:text-white text-sm transition-colors">
            Как это работает
          </a>
          <a href="#trust" className="text-white/80 hover:text-white text-sm transition-colors">
            Университеты
          </a>
          <a href="#pricing" className="text-white/80 hover:text-white text-sm transition-colors">
            Цены
          </a>
          <a href="#cases" className="text-white/80 hover:text-white text-sm transition-colors">
            Результаты
          </a>
          <a
            href="#form"
            className="bg-gold hover:bg-gold-hover text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
          >
            Бесплатная оценка
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Открыть меню"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-navy border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          <a href="#process" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-white text-sm">
            Как это работает
          </a>
          <a href="#trust" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-white text-sm">
            Университеты
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-white text-sm">
            Цены
          </a>
          <a href="#cases" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-white text-sm">
            Результаты
          </a>
          <a
            href="#form"
            onClick={() => setMenuOpen(false)}
            className="bg-gold hover:bg-gold-hover text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors text-center"
          >
            Бесплатная оценка
          </a>
        </nav>
      )}
    </header>
  );
}
