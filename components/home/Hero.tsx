import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const t = useTranslations("home.hero");
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1B3A6B]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #3A7D44 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, #C9A84C 0%, transparent 40%)`,
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px),
                           linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-6">
            {t("eyebrow")}
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            {t("headline")}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-blue-200 leading-relaxed max-w-2xl mb-10">
            {t("subheadline")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${locale}/ingredientes`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#1B3A6B] text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              {t("cta_primary")}
              <ArrowRight size={16} />
            </Link>
            <Link
              href={`/${locale}/contacto`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/40 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              {t("cta_secondary")}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
