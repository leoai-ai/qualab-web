"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

// Fotos del hero (estilo Saporiti — aplicaciones reales con color natural, fondo claro).
// Guardá las definitivas en /public con estos nombres y la rotación las toma sola.
const SLIDES = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg", "/hero-4.jpg"];
const FALLBACK = "/hero-aplicaciones.jpg";

export default function Hero() {
  const t = useTranslations("home.hero");
  const locale = useLocale();

  const [slides, setSlides] = useState<string[]>([FALLBACK]);
  const [active, setActive] = useState(0);

  // Detecta qué imágenes existen para habilitar la rotación.
  useEffect(() => {
    let cancelled = false;
    Promise.all(
      SLIDES.map(
        (src) =>
          new Promise<string | null>((resolve) => {
            const img = new window.Image();
            img.onload = () => resolve(src);
            img.onerror = () => resolve(null);
            img.src = src;
          })
      )
    ).then((found) => {
      if (cancelled) return;
      const ok = found.filter((s): s is string => Boolean(s));
      if (ok.length) setSlides(ok);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Rotación automática
  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 3000);
    return () => clearInterval(id);
  }, [slides]);

  return (
    <section className="relative min-h-[72vh] flex items-start overflow-hidden bg-[#F5F1EA]">
      {/* ── FONDOS ROTATIVOS (imagen clara, anclada abajo) ── */}
      {slides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover transition-opacity duration-700 ease-in-out"
          style={{
            backgroundImage: `url('${src}')`,
            backgroundPosition: "center bottom",
            opacity: i === active ? 1 : 0,
          }}
        />
      ))}

      {/* ── GRADIENTES de legibilidad sobre fondo claro ── */}
      {/* Scrim superior */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(245,241,234,0.85) 0%, rgba(245,241,234,0.45) 30%, rgba(245,241,234,0.05) 55%, transparent 72%)",
        }}
      />
      {/* Scrim izquierdo — zona del texto (estilo Saporiti) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(95deg, rgba(245,241,234,0.88) 0%, rgba(245,241,234,0.60) 30%, rgba(245,241,234,0.20) 52%, transparent 68%)",
        }}
      />

      {/* ── CONTENIDO (zona aireada superior) ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.7rem] font-bold leading-[1.07] tracking-tight mb-6" style={{ color: "#282625" }}>
            {t("headline")}
          </h1>

          <p className="text-lg sm:text-xl font-semibold leading-relaxed max-w-xl mb-9" style={{ color: "#000000", textShadow: "0 1px 10px rgba(245,241,234,0.85)" }}>
            {t("subheadline")}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={`/${locale}/colorantes`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#B71D48" }}
            >
              {t("cta_primary")} <ArrowRight size={16} />
            </Link>
            <Link
              href={`/${locale}/ingredientes`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#2B0920" }}
            >
              {t("cta_secondary")} <ArrowRight size={16} />
            </Link>
          </div>

          {/* Indicadores de slide */}
          {slides.length > 1 && (
            <div className="mt-10 flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s}
                  onClick={() => setActive(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 28 : 10,
                    backgroundColor: i === active ? "#5A102D" : "rgba(40,38,37,0.25)",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
