"use client";

import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function StaggerGrid({
  children,
  className = "",
  staggerDelay = 0.12,
  fromY = 40,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  fromY?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const items = gsap.utils.toArray<HTMLElement>(ref.current.children);
    if (!items.length) return;

    // Hide all items initially
    gsap.set(items, {
      y: fromY,
      opacity: 0,
      scale: 0.97,
    });

    // Animate them in one by one on scroll
    gsap.to(items, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.7,
      ease: "power3.out",
      stagger: staggerDelay,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
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
