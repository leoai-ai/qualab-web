import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

const HERO_CYCLE = "/hero-circle2.png";

export default function Hero() {
  const t = useTranslations("home.hero");
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── HERO BACKGROUND: Qualab cycle image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_CYCLE})` }}
      />

      {/* ── BRAND OVERLAY ── */}
      {/* Dark on left for headline legibility, lighter on right to reveal cycle diagram */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(13,27,55,0.78) 0%, rgba(13,27,55,0.65) 40%, rgba(13,27,55,0.45) 65%, rgba(13,27,55,0.30) 100%)",
        }}
      />

      {/* Gradient mesh for depth */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 50% 70% at 20% 50%, rgba(58,125,68,0.18) 0%, transparent 55%),
            radial-gradient(ellipse 40% 50% at 80% 30%, rgba(201,168,76,0.12) 0%, transparent 50%)
          `,
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-28 w-full">
        {/* Cycle labels — small, above headline */}
        <div className="hidden md:flex items-center gap-2 mb-8">
          {["Origen · Viñedo", "→", "Ciencia · Lab", "→", "Ingrediente · Producto"].map((step, i) => (
            <span
              key={i}
              className={
                i % 2 === 1
                  ? "text-white/30 text-sm"
                  : "text-[10px] font-semibold tracking-[0.18em] uppercase px-3 py-1 rounded-full border border-white/15 text-white/60"
              }
            >
              {step}
            </span>
          ))}
        </div>

        <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-6">
          <span className="w-8 h-px bg-[#C9A84C]" />
          {t("eyebrow")}
        </p>

        <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.05] tracking-tight mb-6 max-w-3xl">
          {t("headline")}
        </h1>

        <p className="text-lg text-blue-200/80 leading-relaxed max-w-xl mb-10">
          {t("subheadline")}
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href={`/${locale}/ingredientes`}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#C9A84C] text-white text-sm font-semibold hover:bg-amber-500 transition-colors"
          >
            {t("cta_primary")} <ArrowRight size={16} />
          </Link>
          <Link
            href={`/${locale}/contacto`}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/25 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            {t("cta_secondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}
