import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function CtaFinal() {
  const t = useTranslations("home.cta_final");
  const locale = useLocale();

  return (
    <section className="relative py-28 overflow-hidden" style={{ backgroundColor: "#5A102D" }}>
      {/* Textura de puntos sutil */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Qualab con tipografía y colores del logo */}
        <p className="inline-flex items-center gap-3 mb-6">
          <span className="w-6 h-px bg-[#C38335]" />
          <span
            className="text-sm font-bold tracking-[0.22em] uppercase"
            style={{ color: "#C38335", letterSpacing: "0.22em" }}
          >
            QUALAB
          </span>
          <span className="w-6 h-px bg-[#C38335]" />
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          {t("headline")}
        </h2>
        <p className="text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "rgba(245,241,234,0.80)" }}>
          {t("body")}
        </p>
        <Link
          href={`/${locale}/contacto`}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#C38335" }}
        >
          {t("cta")} <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
