"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function UniversitiesHero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo("[data-uh-badge]", { y: -15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" });
    gsap.fromTo("[data-uh-title]", { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.1, ease: "power3.out" });
    gsap.fromTo("[data-uh-sub]", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.15, ease: "power3.out" });
    gsap.fromTo("[data-uh-stats]", { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, delay: 0.2, stagger: 0.06, ease: "power3.out" });
  }, { scope: ref });

  const stats = [
    { value: "200+", label: "Университетов" },
    { value: "30+", label: "Городов Китая" },
    { value: "Top 100", label: "Мировые рейтинги" },
    { value: "CSC", label: "Стипендии" },
  ];

  return (
    <section ref={ref} className="relative bg-navy overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "256px 256px" }} />
      <div className="absolute top-[15%] right-[10%] w-64 h-64 rounded-full bg-gold/15 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[8%] w-80 h-80 rounded-full bg-gold/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-300 mx-auto px-6 text-center">
        <div data-uh-badge className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
          <span className="text-white/70 text-xs font-medium">Official University Cooperation</span>
        </div>

        <h1 data-uh-title className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6 max-w-3xl mx-auto">
          Университеты-партнёры
          <br />
          <span className="text-gold">MilGEC</span>
        </h1>

        <p data-uh-sub className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Официальное сотрудничество с ведущими университетами Китая. Авторизационные письма от каждого вуза.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {stats.map((s) => (
            <div key={s.label} data-uh-stats className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-3">
              <div className="text-gold font-extrabold text-lg">{s.value}</div>
              <div className="text-white/40 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
