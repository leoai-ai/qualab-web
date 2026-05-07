import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function CtaFinal() {
  const t = useTranslations("home.cta_final");
  const locale = useLocale();

  return (
    <section className="relative py-28 bg-[#F5F0E8] overflow-hidden">
      {/* Subtle warm gradient blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 55% 60% at 15% 50%, rgba(201,168,76,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 45% 55% at 85% 40%, rgba(58,125,68,0.08) 0%, transparent 55%)
          `,
        }}
      />

      {/* Decorative rings */}
      <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-[#1B3A6B]/8" />
      <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-[#1B3A6B]/8" />
      <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-[#1B3A6B]/8" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Qualab con tipografía y colores del logo */}
        <p className="inline-flex items-center gap-3 mb-6">
          <span className="w-6 h-px bg-[#C9A84C]" />
          <span
            className="text-sm font-bold tracking-[0.22em] uppercase"
            style={{ color: "#1B3A6B", letterSpacing: "0.22em" }}
          >
            <span style={{ color: "#1B3A6B" }}>QUAL</span><span style={{ color: "#C9A84C" }}>AB</span>
          </span>
          <span className="w-6 h-px bg-[#C9A84C]" />
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B3A6B] leading-tight mb-6">
          {t("headline")}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          {t("body")}
        </p>
        <Link
          href={`/${locale}/contacto`}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1B3A6B] text-white font-semibold text-base hover:bg-blue-900 transition-colors"
        >
          {t("cta")} <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
