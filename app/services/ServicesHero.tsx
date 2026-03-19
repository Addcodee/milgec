"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ServicesHero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo("[data-sh-badge]", { y: -15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" });
    gsap.fromTo("[data-sh-title]", { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.1, ease: "power3.out" });
    gsap.fromTo("[data-sh-sub]", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.15, ease: "power3.out" });
    gsap.fromTo("[data-sh-cta]", { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.2, ease: "power3.out" });
  }, { scope: ref });

  return (
    <section ref={ref} className="relative bg-navy overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "256px 256px" }} />
      <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-gold/15 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[8%] w-80 h-80 rounded-full bg-gold/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-300 mx-auto px-6 text-center">
        <div data-sh-badge className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
          <span className="text-white/70 text-xs font-medium">Полный цикл сопровождения</span>
        </div>

        <h1 data-sh-title className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6 max-w-2xl mx-auto">
          Наши услуги
        </h1>

        <p data-sh-sub className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          От первой консультации до регистрации в кампусе — мы берём на себя каждый этап вашего пути в китайский университет.
        </p>

        <div data-sh-cta className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="/#form" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:shadow-[0_8px_30px_rgba(212,168,67,0.35)]">
            Бесплатная оценка шансов
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a href="https://wa.me/77089826615" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-whatsapp/20 border border-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all backdrop-blur-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
