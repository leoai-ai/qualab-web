"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const R = 88;
const CX = 110;
const CY = 110;
const CIRC = 2 * Math.PI * R;

export default function ProblemBlock() {
  const t = useTranslations("home.problem");
  const ts = useTranslations("home.stats");
  const [animated, setAnimated] = useState(false);
  const [count, setCount] = useState(0);
  const [hovered, setHovered] = useState<null | "vino" | "sub">(null);
  const chartRef = useRef<HTMLDivElement>(null);

  // Trigger animation when the chart enters the viewport
  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Animated counter 0 → 75
  useEffect(() => {
    if (!animated) return;
    let start: number | null = null;
    const duration = 1400;
    const tick = (tsNow: number) => {
      if (start === null) start = tsNow;
      const p = Math.min((tsNow - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 75));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [animated]);

  const greenOffset = animated ? CIRC * 0.25 : CIRC;

  // Center label reacts to hover
  const centerValue = hovered === "vino" ? 25 : hovered === "sub" ? 75 : count;
  const centerLabel = hovered === "vino" ? "vino" : "biomasa";
  const centerColor = hovered === "vino" ? "#5A102D" : "#596943";

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "#C38335" }}>
            <span className="w-6 h-px" style={{ backgroundColor: "#C38335" }} />
            {t("eyebrow")}
            <span className="w-6 h-px" style={{ backgroundColor: "#C38335" }} />
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: "#282625" }}>
            {t("headline")}
          </h2>
        </div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Donut — bloque grande */}
          <div ref={chartRef} className="md:col-span-2 rounded-3xl bg-[#F5F1EA] p-8 flex flex-col sm:flex-row items-center gap-8">
            <div className="relative w-60 h-60 sm:w-64 sm:h-64 shrink-0">
              <svg viewBox="0 0 220 220" className="absolute inset-0 w-full h-full">
                <circle cx={CX} cy={CY} r={R} fill="none" stroke="#e7e0da" strokeWidth="22" />
                {/* Subproductos 75% */}
                <circle
                  cx={CX} cy={CY} r={R} fill="none" stroke="#596943"
                  strokeWidth={hovered === "sub" ? 26 : 22}
                  strokeDasharray={`${CIRC} ${CIRC}`}
                  strokeDashoffset={greenOffset}
                  transform={`rotate(-90 ${CX} ${CY})`}
                  onMouseEnter={() => setHovered("sub")}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    cursor: "pointer",
                    transition: animated ? "stroke-dashoffset 1.4s cubic-bezier(0.25,0.46,0.45,0.94), stroke-width 0.2s ease" : "stroke-width 0.2s ease",
                    opacity: hovered === "vino" ? 0.55 : 1,
                  }}
                />
                {/* Vino 25% */}
                <circle
                  cx={CX} cy={CY} r={R} fill="none" stroke="#5A102D"
                  strokeWidth={hovered === "vino" ? 26 : 22}
                  strokeDasharray={`${CIRC * 0.25} ${CIRC * 0.75}`}
                  strokeDashoffset={-(CIRC * 0.75)}
                  transform={`rotate(-90 ${CX} ${CY})`}
                  onMouseEnter={() => setHovered("vino")}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    cursor: "pointer",
                    opacity: animated ? (hovered === "sub" ? 0.55 : 1) : 0,
                    transition: animated ? "opacity 0.5s ease 1.1s, stroke-width 0.2s ease" : "stroke-width 0.2s ease",
                  }}
                />
              </svg>
              <div className="absolute inset-[22%] rounded-full bg-white shadow-sm flex flex-col items-center justify-center">
                <span className="text-4xl font-bold leading-none tabular-nums transition-colors" style={{ color: centerColor }}>
                  {centerValue}%
                </span>
                <span className="text-xs text-gray-400 uppercase tracking-wider mt-1">{centerLabel}</span>
              </div>
            </div>

            <div className="flex-1 w-full">
              <p className="text-lg font-bold mb-4" style={{ color: "#282625" }}>El verdadero fruto de la vid</p>
              <button
                type="button"
                onMouseEnter={() => setHovered("vino")} onMouseLeave={() => setHovered(null)}
                className="w-full text-left flex items-center gap-3 mb-3"
              >
                <span className="w-10 h-10 rounded-lg bg-[#5A102D] flex items-center justify-center shrink-0 text-xs font-bold text-white">25%</span>
                <span><span className="block text-sm font-semibold text-[#282625]">Vino</span><span className="block text-xs text-gray-500">La base del negocio vitivinícola</span></span>
              </button>
              <button
                type="button"
                onMouseEnter={() => setHovered("sub")} onMouseLeave={() => setHovered(null)}
                className="w-full text-left flex items-center gap-3"
              >
                <span className="w-10 h-10 rounded-lg bg-[#596943] flex items-center justify-center shrink-0 text-xs font-bold text-white">75%</span>
                <span><span className="block text-sm font-semibold text-[#596943]">Pieles · Semillas · Sarmientos</span><span className="block text-xs text-gray-500">Riqueza biológica que Qualab valoriza</span></span>
              </button>
            </div>
          </div>

          {/* USD 400.000M — mercado del vino */}
          <div className="rounded-3xl bg-[#5A102D] text-white p-7 flex flex-col justify-center">
            <div className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">{ts("value1")}</div>
            <div className="text-sm" style={{ color: "rgba(245,241,234,0.75)" }}>{ts("label1")}</div>
          </div>

          {/* 70–80% — biomasa sin valorizar */}
          <div className="rounded-3xl bg-[#596943] text-white p-7 flex flex-col justify-center">
            <div className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">{ts("value2")}</div>
            <div className="text-sm" style={{ color: "rgba(245,241,234,0.78)" }}>{ts("label2")}</div>
          </div>

          {/* Aspiracional — bloque ancho */}
          <div className="md:col-span-2 rounded-3xl border border-gray-100 bg-white p-8 flex flex-col justify-center shadow-sm">
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "rgba(40,38,37,0.75)" }}>
              {t("body")}
            </p>
          </div>

          {/* USD 500.000M — mercado nutracéutico */}
          <div className="rounded-3xl text-white p-7 flex flex-col justify-center" style={{ backgroundColor: "#C38335" }}>
            <div className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">{ts("value3")}</div>
            <div className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>{ts("label3")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
