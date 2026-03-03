"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const row1 = [
  { name: "China University of Petroleum", logo: "/universities/cup.svg" },
  {
    name: "Huazhong University of Science and Technology",
    logo: "/universities/hust.png",
  },
  { name: "Xi'an Jiaotong University", logo: "/universities/xjtu.png" },
  { name: "East China Normal University", logo: "/universities/ecnu.svg" },
  {
    name: "South China University of Technology",
    logo: "/universities/scut.png",
  },
  { name: "Harbin Institute of Technology", logo: "/universities/hit.gif" },
  {
    name: "Nanjing University of Information Science and Technology",
    logo: "/universities/nuist.png",
  },
  { name: "Zhengzhou University", logo: "/universities/zzu.png" },
];

const row2 = [
  { name: "Shandong University", logo: "/universities/sdu.png" },
  { name: "Zhejiang University of Technology", logo: "/universities/zjut.svg" },
  { name: "Shanghai University", logo: "/universities/shu.svg" },
  { name: "Wuhan University", logo: "/universities/whu.png" },
  { name: "Dalian University of Technology", logo: "/universities/dlut.png" },
  { name: "Tianjin University", logo: "/universities/tju.png" },
  { name: "Beijing Institute of Technology", logo: "/universities/bit.png" },
  { name: "Sun Yat-sen University", logo: "/universities/sysu.png" },
];

function MarqueeRow({
  items,
  direction = "left",
}: {
  items: typeof row1;
  direction?: "left" | "right";
}) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden group">
      <div
        className={`flex gap-5 w-max ${
          direction === "left"
            ? "animate-[marquee-left_40s_linear_infinite]"
            : "animate-[marquee-right_40s_linear_infinite]"
        } group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((u, i) => (
          <div
            key={`${u.name}-${i}`}
            className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-border/50 shrink-0 hover:border-gold/30 hover:shadow-sm transition-all"
          >
            <img
              src={u.logo}
              alt={u.name}
              className="h-10 w-10 object-contain shrink-0"
            />
            <span className="text-navy/70 text-xs font-medium whitespace-nowrap">
              {u.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Trust() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      gsap.from("[data-trust-header]", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      className="bg-mesh-light py-20 md:py-24 overflow-hidden"
      id="trust"
    >
      <div className="max-w-300 mx-auto px-6">
        <div data-trust-header className="text-center mb-12">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-3">
            Партнёры
          </p>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold text-navy tracking-[-0.02em] mb-3">
            Почему 6 000+ студентов доверяют MilGEC
          </h2>
          <p className="text-text-muted text-sm max-w-125 mx-auto">
            С 2020 года. Штаб-квартира — Циндао, Китай. Филиалы в 7 странах.
            Официальный договор каждому клиенту.
          </p>
        </div>
      </div>

      {/* Marquee rows — full bleed */}
      <div className="flex flex-col gap-4 mb-8">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>

      <p className="text-text-muted text-xs text-center">
        + ещё 200 университетов-партнёров во всех провинциях Китая
      </p>
    </section>
  );
}
