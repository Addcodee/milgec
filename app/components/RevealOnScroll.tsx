"use client";

import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type Animation = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-in" | "blur-in";

const animationProps: Record<Animation, gsap.TweenVars> = {
  "fade-up": { y: 50, opacity: 0 },
  "fade-in": { opacity: 0 },
  "fade-left": { x: -50, opacity: 0 },
  "fade-right": { x: 50, opacity: 0 },
  "scale-in": { scale: 0.9, opacity: 0 },
  "blur-in": { y: 30, opacity: 0, filter: "blur(8px)" },
};

interface Props {
  children: ReactNode;
  className?: string;
  animation?: Animation;
  delay?: number;
  duration?: number;
}

export default function RevealOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 0.9,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const from = animationProps[animation];

    gsap.from(ref.current, {
      ...from,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: ref });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
