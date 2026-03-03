"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 200, suffix: "+", label: "Университетов-партнёров" },
  { target: 60, suffix: "+", label: "Стран" },
  { target: 6000, suffix: "+", label: "Студентов зачислено", format: true },
  { target: 90, suffix: "%", label: "Получают стипендию" },
];

function AnimatedNumber({ target, suffix, format }: { target: number; suffix: string; format?: boolean }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  const display = format ? count.toLocaleString("ru-RU") : count;

  return (
    <div ref={ref} className="text-gold text-3xl md:text-4xl font-extrabold leading-tight">
      {display}{suffix}
    </div>
  );
}

export default function TrustStrip() {
  return (
    <section className="bg-navy border-t-[2px] border-gold/60" id="stats">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-6 py-2">
              <AnimatedNumber target={s.target} suffix={s.suffix} format={s.format} />
              <div className="text-white/50 text-xs uppercase tracking-[0.12em] mt-1.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
