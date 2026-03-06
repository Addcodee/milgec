"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import RevealOnScroll from "./RevealOnScroll";
import BlurImage from "./BlurImage";

gsap.registerPlugin(ScrollTrigger);

const certificates = [
  { uni: "China University of Petroleum", short: "UPC", file: "/authorization/UPC-2026-Authorization-Letter.webp" },
  { uni: "Huazhong University of Science & Technology", short: "HUST", file: "/authorization/HUST.webp" },
  { uni: "Xi'an Jiaotong University", short: "XJTU", file: "/authorization/XJTU-Cooperation-Authorization-Letter.webp" },
  { uni: "Zhengzhou University", short: "ZZU", file: "/authorization/ZZU-2026-Authorization-Letter.webp" },
  { uni: "Nanjing Polytechnic Institute", short: "NJPI", file: "/authorization/NJPI.webp" },
  { uni: "Shandong Normal University", short: "SDNU", file: "/authorization/SDNU.webp" },
  { uni: "South China University of Technology", short: "SCUT", file: "/authorization/SCUT.webp" },
  { uni: "Harbin Institute of Technology", short: "HIT", file: "/authorization/HIT.webp" },
  { uni: "Beijing Institute of Graphic Communication", short: "BIGC", file: "/authorization/BIGC.webp" },
  { uni: "Central China Normal University", short: "CCNU", file: "/authorization/CCNU.webp" },
  { uni: "Dalian Maritime University", short: "DMU", file: "/authorization/DMU.webp" },
  { uni: "Hebei University of Science & Technology", short: "HEBUST", file: "/authorization/HEBUST.webp" },
  { uni: "Ningbo University of Finance & Economics", short: "NBUFE", file: "/authorization/NBUFE.webp" },
  { uni: "Southwest University of Political Science & Law", short: "SWUPL", file: "/authorization/SWUPL.webp" },
  { uni: "Tiangong University", short: "TGU", file: "/authorization/TGU.webp" },
  { uni: "Beijing Foreign Studies University", short: "BFSU", file: "/authorization/BFSU-IBS.webp" },
];

export default function OfficialPartner() {
  const ref = useRef<HTMLElement>(null);
  const [lightbox, setLightbox] = useState<{ file: string; uni: string } | null>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const cards = ref.current.querySelectorAll("[data-cert-card]");
    gsap.set(cards, { y: 40, opacity: 0, scale: 0.96 });

    gsap.to(cards, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.07,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 82%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: ref });

  return (
    <>
      <section ref={ref} className="bg-bg-alt py-20 md:py-28 overflow-hidden" id="partners">
        <div className="max-w-300 mx-auto px-6">
          {/* Header */}
          <RevealOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-5">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="text-gold text-xs font-bold uppercase tracking-wide">
                  Официальный представитель
                </span>
              </div>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-text tracking-[-0.03em] mb-4">
                Аккредитованный партнёр ведущих ВУЗов Китая
              </h2>
              <p className="text-text-secondary text-base max-w-2xl mx-auto">
                MilGEC является прямым официальным представителем университетов.
                Каждый сертификат авторизации подтверждает наше право набирать
                и сопровождать студентов от имени ВУЗа.
              </p>
            </div>
          </RevealOnScroll>

          {/* Certificates grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.short}
                data-cert-card
                onClick={() => setLightbox(cert)}
                className="group relative bg-white rounded-2xl border border-border p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Preview */}
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-bg-alt mb-3 relative">
                  <BlurImage
                    src={cert.file}
                    alt={`Сертификат ${cert.uni}`}
                    className="w-full h-full"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white rounded-full p-2">
                      <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <p className="text-text font-semibold text-sm leading-tight">{cert.short}</p>
                <p className="text-text-muted text-[11px] mt-1 leading-snug line-clamp-2">{cert.uni}</p>
              </div>
            ))}
          </div>

          {/* More badge */}
          <RevealOnScroll animation="fade-up" delay={0.3}>
            <div className="text-center mt-10">
              <div className="inline-flex items-center gap-2 bg-navy text-white rounded-full px-6 py-3">
                <span className="text-gold font-extrabold text-lg">200+</span>
                <span className="text-sm font-medium">университетов-партнёров по всему Китаю</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur rounded-full w-8 h-8 flex items-center justify-center text-text hover:bg-white transition-colors shadow-md"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.file}
              alt={`Сертификат ${lightbox.uni}`}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="p-4 border-t border-border">
              <p className="text-text font-bold text-sm">{lightbox.uni}</p>
              <p className="text-text-muted text-xs mt-1">Официальный сертификат авторизации</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
