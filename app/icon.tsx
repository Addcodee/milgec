import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1B2A4A",
          borderRadius: "50%",
        }}
      >
        {/* Chinese seal (chop) */}
        <div
          style={{
            width: 20,
            height: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#E53030",
            borderRadius: 3,
            border: "1.5px solid #ff4444",
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            中
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
