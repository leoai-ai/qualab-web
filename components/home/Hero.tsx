import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const t = useTranslations("home.hero");
  const locale = useLocale();

  return (
    <section
      className="relative min-h-screen flex items-start overflow-hidden"
      style={{ background: "#2B0920" }}
    >
      {/* ── IMAGEN DE FONDO ── */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-aplicaciones.jpg')", filter: "brightness(0.65)" }}
      />

      {/* ── OVERLAY: oscurece para legibilidad del texto ── */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.05) 100%)" }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">

        {/* Headline — ancho para que respire */}
        <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-bold text-white leading-[1.05] tracking-tight mb-6 max-w-4xl">
          {t("headline")}
        </h1>

        {/* Subtítulo — más contenido, bien legible */}
        <p className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed max-w-xl mb-10" style={{ color: "rgba(245,241,234,0.90)" }}>
          {t("subheadline")}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link
            href={`/${locale}/ingredientes`}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-white text-sm font-semibold transition-colors"
            style={{ backgroundColor: "#C38335" }}
          >
            {t("cta_primary")} <ArrowRight size={16} />
          </Link>
          <Link
            href={`/${locale}/contacto`}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            style={{ borderColor: "rgba(245,241,234,0.25)" }}
          >
            {t("cta_secondary")}
          </Link>
        </div>

        {/* Trust signals — certificaciones */}
        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2">
          {["Sin Gluten", "Vegano", "Sin OGM", "Origen Natural"].map((cert) => (
            <span
              key={cert}
              className="text-[11px] font-medium tracking-wider uppercase"
              style={{ color: "rgba(245,241,234,0.45)" }}
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
