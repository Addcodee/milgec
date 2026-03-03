"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Global GSAP defaults
gsap.defaults({
  ease: "power3.out",
  duration: 0.8,
});

function initTilt() {
  const MAX_ROTATION = 4; // degrees

  function handleMouseMove(this: HTMLElement, e: MouseEvent) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -MAX_ROTATION;
    const rotateY = ((x - centerX) / centerX) * MAX_ROTATION;

    gsap.to(this, {
      rotateX,
      rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 800,
    });
  }

  function handleMouseLeave(this: HTMLElement) {
    gsap.to(this, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  }

  const cards = document.querySelectorAll<HTMLElement>(".card-hover");
  cards.forEach((card) => {
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
  });

  return () => {
    cards.forEach((card) => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    });
  };
}

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Respect prefers-reduced-motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      gsap.globalTimeline.timeScale(100);
      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }

    // Init 3D tilt on all .card-hover elements
    const cleanupTilt = initTilt();

    return () => {
      cleanupTilt();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
