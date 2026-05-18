"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import SectionHeader from "@/components/shared/SectionHeader";

const R = 88;
const CX = 110;
const CY = 110;
const CIRC = 2 * Math.PI * R; // ≈ 552.9

export default function ProblemBlock() {
  const t = useTranslations("home.problem");
  const [animated, setAnimated] = useState(false);
  const [count, setCount] = useState(0);
  const chartRef = useRef<HTMLDivElement>(null);

  // Trigger when the chart enters the viewport
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
    const tick = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setCount(Math.round(eased * 75));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [animated]);

  // strokeDashoffset formula: CIRC * (1 - pct)
  // With dasharray="CIRC CIRC": offset=CIRC → 0% visible, offset=CIRC*0.25 → 75% visible
  const greenOffset = animated ? CIRC * 0.25 : CIRC;

  return (
    <section className="pt-0 pb-10 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <SectionHeader
            eyebrow={t("eyebrow")}
            headline={t("headline")}
            body={t("body")}
          />

          <div ref={chartRef} className="flex flex-col items-center lg:items-center gap-8">

            {/* Animated donut chart */}
            <div className="relative w-72 h-72 shrink-0">

              {/* Outer glow — fades in with the arc */}
              <div
                className="absolute inset-[-8px] rounded-full pointer-events-none"
                style={{
                  background: "conic-gradient(#596943 0deg 270deg, transparent 270deg 360deg)",
                  filter: "blur(14px)",
                  opacity: animated ? 0.15 : 0,
                  transition: animated ? "opacity 0.8s ease 0.8s" : "none",
                }}
              />

              <svg viewBox="0 0 220 220" className="absolute inset-0 w-full h-full">
                {/* Background track */}
                <circle
                  cx={CX} cy={CY} r={R}
                  fill="none"
                  stroke="#f1f5f9"
                  strokeWidth="22"
                />

                {/* Green 75% arc — draws on scroll */}
                <circle
                  cx={CX} cy={CY} r={R}
                  fill="none"
                  stroke="#596943"
                  strokeWidth="22"
                  strokeLinecap="butt"
                  strokeDasharray={`${CIRC} ${CIRC}`}
                  strokeDashoffset={greenOffset}
                  transform={`rotate(-90 ${CX} ${CY})`}
                  style={{
                    transition: animated
                      ? "stroke-dashoffset 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                      : "none",
                  }}
                />

                {/* Blue 25% arc — fades in after green finishes */}
                <circle
                  cx={CX} cy={CY} r={R}
                  fill="none"
                  stroke="#5A102D"
                  strokeWidth="22"
                  strokeLinecap="butt"
                  strokeDasharray={`${CIRC * 0.25} ${CIRC * 0.75}`}
                  strokeDashoffset={-(CIRC * 0.75)}
                  transform={`rotate(-90 ${CX} ${CY})`}
                  style={{
                    opacity: animated ? 1 : 0,
                    transition: animated ? "opacity 0.5s ease 1.1s" : "none",
                  }}
                />
              </svg>

              {/* Center label */}
              <div className="absolute inset-[20%] rounded-full bg-white shadow-sm flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-[#596943] leading-none tabular-nums">
                  {count}%
                </span>
                <span className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                  biomasa
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-5 w-full max-w-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#5A102D] flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-white">25%</span>
                </div>
                <div>
                  <p className="text-base font-semibold text-[#282625]">Jugo → Vino</p>
                  <p className="text-sm text-gray-500">La base del negocio vitivinícola</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#596943] flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-white">75%</span>
                </div>
                <div>
                  <p className="text-base font-semibold text-[#596943]">
                    Pieles · Semillas · Sarmientos
                  </p>
                  <p className="text-sm text-gray-500">Riqueza biológica que Qualab valoriza</p>
                </div>
              </div>
              <p className="text-base text-gray-600 pt-3 leading-relaxed border-t border-gray-100">
                El 70–80% del valor biológico de la uva —antocianinas,
                polifenoles, fibras— está en fracciones que aún no llegaron
                a nuevos mercados. Qualab cierra esa brecha.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
