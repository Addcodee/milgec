"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? "bg-navy/95 backdrop-blur-sm border-b border-white/10" : "bg-transparent border-b border-transparent"}`}>
      <div className="max-w-[1100px] mx-auto px-4 flex items-center justify-between h-16">
        <a href="/">
          <Image
            src="/logo-light.png"
            alt="MilGEC"
            width={180}
            height={60}
            className="h-24 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/#about"
            className="text-white/80 hover:text-white text-sm transition-colors"
          >
            О нас
          </a>
          {/* <a
            href="/universities"
            className="text-white/80 hover:text-white text-sm transition-colors"
          >
            Университеты
          </a> */}
          <a
            href="/#pricing"
            className="text-white/80 hover:text-white text-sm transition-colors"
          >
            Цены
          </a>
          <a
            href="/services"
            className="text-white text-sm font-semibold border border-white/20 px-3.5 py-1.5 rounded-lg hover:bg-white/10 transition-all"
          >
            Услуги
          </a>
          <a
            href="/#form"
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
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
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
          <a
            href="/#about"
            onClick={() => setMenuOpen(false)}
            className="text-white/80 hover:text-white text-sm"
          >
            О нас
          </a>
          <a
            href="/services"
            onClick={() => setMenuOpen(false)}
            className="text-white text-sm font-semibold border border-white/20 px-3.5 py-1.5 rounded-lg hover:bg-white/10 transition-all"
          >
            Услуги
          </a>
          {/* <a
            href="/universities"
            onClick={() => setMenuOpen(false)}
            className="text-white/80 hover:text-white text-sm"
          >
            Университеты
          </a> */}
          <a
            href="/#pricing"
            onClick={() => setMenuOpen(false)}
            className="text-white/80 hover:text-white text-sm"
          >
            Цены
          </a>
          <a
            href="/#form"
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
