import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

const VINEYARD_PHOTO =
  "https://images.unsplash.com/photo-1775153014252-5166948187a6?w=1000&q=80&auto=format&fit=crop";
const LAB_PHOTO =
  "https://images.unsplash.com/photo-1486825586573-7131f7991bdd?w=800&q=80&auto=format&fit=crop";

export default function Hero() {
  const t = useTranslations("home.hero");
  const locale = useLocale();

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0F2347" }}
    >
      {/* Gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 55% 70% at 15% 60%, rgba(27,58,107,0.7) 0%, transparent 60%),
            radial-gradient(ellipse 50% 55% at 5% 20%, rgba(58,125,68,0.15) 0%, transparent 50%),
            radial-gradient(ellipse 40% 40% at 30% 80%, rgba(201,168,76,0.12) 0%, transparent 50%)
          `,
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: Text */}
          <div>
            <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-8">
              <span className="w-8 h-px bg-[#C9A84C]" />
              {t("eyebrow")}
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.05] tracking-tight mb-6">
              {t("headline")}
            </h1>

            <p className="text-lg text-blue-200/80 leading-relaxed max-w-lg mb-10">
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

          {/* Right: Vineyard + Lab photos */}
          <div className="hidden lg:flex flex-col gap-4 h-[460px]">
            {/* Vineyard — top, larger */}
            <div className="relative rounded-2xl overflow-hidden flex-[3] group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${VINEYARD_PHOTO})` }}
              />
              {/* Blue brand tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F2347]/50 via-transparent to-transparent" />
              {/* Label */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/75">
                  Origen · Mendoza
                </span>
              </div>
            </div>

            {/* Lab scientist — bottom, smaller */}
            <div className="relative rounded-2xl overflow-hidden flex-[2] group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${LAB_PHOTO})` }}
              />
              {/* Blue brand tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F2347]/45 via-transparent to-transparent" />
              {/* Label */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3A7D44]" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/75">
                  Ciencia validada
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
