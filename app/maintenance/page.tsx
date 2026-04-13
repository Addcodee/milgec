import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Технические работы",
  description: "Сайт временно недоступен. Ведутся технические работы.",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <div className="relative min-h-svh flex flex-col items-center justify-center bg-mesh-dark px-6 overflow-hidden">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[15%] left-[10%] h-64 w-64 rounded-full bg-gold/10 blur-[100px] animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-[20%] right-[10%] h-80 w-80 rounded-full bg-gold/8 blur-[120px] animate-[float_8s_ease-in-out_infinite_1s]" />
        <div className="absolute top-[60%] left-[55%] h-48 w-48 rounded-full bg-white/5 blur-[80px] animate-[float_7s_ease-in-out_infinite_0.5s]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Logo */}
        <Image
          src="/logo-light.png"
          alt="MilGEC"
          width={160}
          height={48}
          className="mb-12 opacity-90"
          priority
        />

        {/* Icon */}
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
          <svg
            className="h-10 w-10 text-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.192-.14 1.743"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-[clamp(1.5rem,4vw,2.25rem)] font-extrabold text-white leading-tight mb-4">
          Ведутся технические работы
        </h1>

        {/* Description */}
        <p className="text-sm leading-relaxed text-white/60 mb-10 max-w-sm">
          Мы обновляем сайт, чтобы сделать его ещё лучше для вас.
          Совсем скоро всё заработает — спасибо за терпение!
        </p>

        {/* Progress bar */}
        <div className="w-full max-w-xs mb-10">
          <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-gold to-gold-hover animate-pulse" />
          </div>
        </div>

      </div>
    </div>
  );
}
