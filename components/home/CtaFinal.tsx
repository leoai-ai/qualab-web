import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function CtaFinal() {
  const t = useTranslations("home.cta_final");
  const locale = useLocale();

  return (
    <section className="relative py-28 bg-[#0F2347] overflow-hidden">
      {/* Gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 60% 70% at 20% 50%, rgba(139,29,66,0.3) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 80% 30%, rgba(58,125,68,0.2) 0%, transparent 55%)
          `,
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative rings */}
      <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/5" />
      <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-white/5" />
      <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-white/5" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-6">
          <span className="w-6 h-px bg-[#C9A84C]" />
          Qualab
          <span className="w-6 h-px bg-[#C9A84C]" />
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          {t("headline")}
        </h2>
        <p className="text-blue-200/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          {t("body")}
        </p>
        <Link
          href={`/${locale}/contacto`}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C9A84C] text-white font-semibold text-base hover:bg-amber-500 transition-colors"
        >
          {t("cta")} <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
