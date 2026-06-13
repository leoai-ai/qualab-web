"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

const STRIP = "/paleta-tira.jpg";

export default function ColorGama() {
  const t = useTranslations("home.gama");
  const locale = useLocale();

  return (
    <section className="pt-12 pb-10 relative overflow-hidden" style={{ backgroundColor: "#F5F1EA" }}>
      {/* Header */}
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "#C38335" }}>
          <span className="w-6 h-px" style={{ backgroundColor: "#C38335" }} />
          {t("eyebrow")}
          <span className="w-6 h-px" style={{ backgroundColor: "#C38335" }} />
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-5" style={{ color: "#282625" }}>
          {t("headline")}
        </h2>
        <p className="text-lg leading-relaxed" style={{ color: "rgba(40,38,37,0.65)" }}>
          {t("body")}
        </p>
      </div>

      {/* Barra de imágenes deslizante (fruta/verdura + óvalo de color) */}
      <div className="gama-marquee relative w-full overflow-hidden h-64 sm:h-[21rem] lg:h-[26rem]">
        {/* Difuminados en los bordes */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10" style={{ background: "linear-gradient(to right, #F5F1EA 0%, transparent 100%)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10" style={{ background: "linear-gradient(to left, #F5F1EA 0%, transparent 100%)" }} />

        <div className="gama-track flex w-max">
          {Array.from({ length: 4 }).map((_, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={STRIP}
              alt={i === 0 ? t("headline") : ""}
              aria-hidden={i !== 0}
              className="h-80 sm:h-[26rem] lg:h-[32rem] w-auto block shrink-0 select-none"
              style={{ transform: i % 2 === 1 ? "scaleX(-1)" : undefined }}
              draggable={false}
            />
          ))}
        </div>

        {/* CTA flotante sobre la zona de mármol del banner */}
        <div className="absolute inset-x-0 bottom-3 sm:bottom-5 z-20 flex justify-center">
          <Link
            href={`/${locale}/colorantes`}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-white text-sm font-semibold shadow-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#5A102D" }}
          >
            {t("cta")} <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes gama-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .gama-track {
          animation: gama-scroll 35s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .gama-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
