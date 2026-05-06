import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const PHOTOS = {
  colorante: "/Colorante_imagen.png",
  aceite:    "https://images.unsplash.com/photo-1768689033119-c3ac1e437d20?w=900&q=80&auto=format&fit=crop",
  polvo:     "/Polvo_uva.png",
};

export default function IngredientCards() {
  const t = useTranslations("home.ingredients");
  const locale = useLocale();

  const ingredients = [
    {
      key: "colorante",
      href: `/${locale}/ingredientes/colorante-natural`,
      name: t("colorante.name"),
      desc: t("colorante.desc"),
      tag: t("colorante.tag"),
      featured: true,
      photo: PHOTOS.colorante,
      overlayFrom: "#3D0B1A",
      overlayVia: "#6B1535",
      accent: "#F4B8C8",
      label: t("label_featured"),
    },
    {
      key: "aceite",
      href: `/${locale}/ingredientes/aceite-pepita-uva`,
      name: t("aceite.name"),
      desc: t("aceite.desc"),
      featured: false,
      photo: PHOTOS.aceite,
      overlayFrom: "#1A2E0A",
      overlayVia: "#2D5A1A",
      accent: "#bbf7d0",
      label: t("label_standard"),
    },
    {
      key: "polvo",
      href: `/${locale}/ingredientes/polvo-piel-uva`,
      name: t("polvo.name"),
      desc: t("polvo.desc"),
      featured: false,
      photo: PHOTOS.polvo,
      overlayFrom: "#1E0B2E",
      overlayVia: "#3B1A5A",
      accent: "#e9d5ff",
      label: t("label_standard"),
    },
  ];

  return (
    <section className="py-24 bg-[#F5F0E8] relative overflow-hidden">
      {/* Ghost text */}
      <div
        className="absolute -top-4 left-0 text-[9rem] font-black text-[#1B3A6B]/[0.04] select-none leading-none pointer-events-none whitespace-nowrap"
        aria-hidden
      >
        INGREDIENTES
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeader eyebrow={t("eyebrow")} headline={t("headline")} />
        </div>

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.65fr_1fr_1fr] gap-5">
          {ingredients.map((ing) => (
            <Link
              key={ing.key}
              href={ing.href}
              className={`group relative rounded-3xl overflow-hidden flex flex-col ${
                ing.featured ? "min-h-[500px]" : "min-h-[400px]"
              }`}
            >
              {/* Photo background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${ing.photo})` }}
              />

              {/* Gradient overlay: dark at bottom, lighter at top */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(
                    to top,
                    ${ing.overlayFrom}f0 0%,
                    ${ing.overlayVia}99 40%,
                    transparent 75%
                  )`,
                }}
              />

              {/* Subtle top tint */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Featured badge */}
              {ing.featured && (
                <span className="absolute top-5 left-5 z-10 text-[10px] font-bold tracking-widest uppercase bg-[#C9A84C] text-white px-3 py-1.5 rounded-full">
                  {ing.tag}
                </span>
              )}

              {/* Bottom content */}
              <div className="relative z-10 mt-auto p-7">
                <div
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-2"
                  style={{ color: ing.accent + "99" }}
                >
                  {ing.label}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug drop-shadow-sm">
                  {ing.name}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5 line-clamp-2 drop-shadow-sm"
                  style={{ color: ing.accent + "cc" }}
                >
                  {ing.desc}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 group-hover:text-white group-hover:gap-3 transition-all duration-300">
                  {t("ver_mas")} <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={`/${locale}/ingredientes`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B3A6B] hover:underline"
          >
            {t("ver_todos")} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
