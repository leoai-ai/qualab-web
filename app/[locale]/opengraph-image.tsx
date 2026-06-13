import { ImageResponse } from "next/og";

export const alt = "Qualab — Colorantes naturales e ingredientes de uva";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "linear-gradient(135deg, #5A102D 0%, #2B0920 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 36 }}>
          <div style={{ width: 56, height: 6, background: "#C38335" }} />
          <div style={{ fontSize: 30, letterSpacing: 10, textTransform: "uppercase", color: "#C38335" }}>
            Qualab
          </div>
        </div>
        <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.08, maxWidth: 940, display: "flex" }}>
          Colorantes naturales e ingredientes de uva
        </div>
        <div style={{ fontSize: 32, marginTop: 30, color: "rgba(255,255,255,0.82)", display: "flex" }}>
          Origen vitivinícola · Mendoza, Argentina
        </div>
      </div>
    ),
    { ...size }
  );
}
