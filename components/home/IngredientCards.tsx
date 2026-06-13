import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

const PHOTOS = {
  colorante: "/Colorante_imagen.webp",
  aceite:    "/ingredientes/aceite-prensado.jpg",
  polvo:     "/Polvo_uva.webp",
};

export default function IngredientCards() {
  const t = useTranslations("home.ingredients");
  const locale = useLocale();

  const ingredients = [
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
    <section className="pt-20 pb-20 bg-[#F5F1EA] relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "#C38335" }}>
            <span className="w-6 h-px" style={{ backgroundColor: "#C38335" }} />
            {t("eyebrow")}
            <span className="w-6 h-px" style={{ backgroundColor: "#C38335" }} />
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ color: "#282625" }}>
            {t("headline")}
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(40,38,37,0.65)" }}>
            {t("body")}
          </p>
        </div>

        {/* Editorial grid — 2 ingredientes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {ingredients.map((ing) => (
            <Link
              key={ing.key}
              href={ing.href}
              className="group relative rounded-3xl overflow-hidden flex flex-col min-h-[420px]"
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
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-white text-sm font-semibold shadow-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#5A102D" }}
          >
            {t("ver_todos")} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
