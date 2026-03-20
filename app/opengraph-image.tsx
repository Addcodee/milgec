import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MilGEC — Учись в Китае со стипендией";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1B2A4A 0%, #0f1a30 50%, #1B2A4A 100%)",
          position: "relative",
        }}
      >
        {/* Gold accent circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,168,67,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: -60,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,168,67,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #D4A843, transparent)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
          }}
        >
          {/* Brand name */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#D4A843",
              letterSpacing: "0.05em",
            }}
          >
            MilGEC
          </div>

          {/* Main headline */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              lineHeight: 1.1,
              maxWidth: 900,
              letterSpacing: "-0.02em",
            }}
          >
            Поступи в Китай
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#D4A843",
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            со стипендией
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: 40,
              marginTop: 32,
            }}
          >
            {[
              { num: "90%", label: "получают стипендию" },
              { num: "200+", label: "университетов" },
              { num: "6 000+", label: "студентов" },
            ].map((s) => (
              <div
                key={s.num}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <div style={{ fontSize: 32, fontWeight: 700, color: "white" }}>
                  {s.num}
                </div>
                <div style={{ fontSize: 16, color: "rgba(255,255,255,0.5)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            fontSize: 18,
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.05em",
          }}
        >
          milgec.kz
        </div>
      </div>
    ),
    { ...size }
  );
}
