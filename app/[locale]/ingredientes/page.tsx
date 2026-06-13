import type { Metadata } from "next";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isES = locale === "es";
  return {
    title: isES ? "Ingredientes" : "Ingredients",
    description: isES
      ? "Aceite de pepita de uva y piel de uva en polvo. Ingredientes bioactivos de origen vitivinícola con trazabilidad completa desde Mendoza, Argentina."
      : "Grape seed oil and grape skin fiber. Bioactive ingredients of viticultural origin with full traceability from Mendoza, Argentina.",
    openGraph: {
      title: isES ? "Ingredientes | Qualab" : "Ingredients | Qualab",
      description: isES
        ? "Activos naturales obtenidos de la biomasa de la uva para alimentos funcionales, cosmética y nutraceúticos."
        : "Natural actives from grape biomass for functional foods, cosmetics and nutraceuticals.",
      siteName: "Qualab",
      type: "website",
    },
  };
}

export default function IngredientesPage() {
  const t = useTranslations("ingredientes");
  const locale = useLocale();

  const items = [
    {
      key: "aceite",
      href: `/${locale}/ingredientes/aceite-pepita-uva`,
      name: t("aceite.name"),
      intro: t("aceite.intro"),
      color: "#596943",
      photo: "/ingredientes/aceite.jpg",
    },
    {
      key: "polvo",
      href: `/${locale}/ingredientes/polvo-piel-uva`,
      name: t("polvo.name"),
      intro: t("polvo.intro"),
      color: "#5C2D6B",
      photo: "/ingredientes/polvo.jpg",
    },
  ];

  return (
    <>
      {/* ── HERO con foto de fondo (estilo Colorantes) ── */}
      <section className="relative min-h-[60vh] flex items-start overflow-hidden bg-[#F5F1EA]">
        {/* Foto de fondo */}
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/ingredientes-fondo.webp')", backgroundPosition: "center right" }}
        />
        {/* Velo claro superior */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,241,234,0.85) 0%, rgba(245,241,234,0.4) 30%, rgba(245,241,234,0.05) 55%, transparent 72%)",
          }}
        />
        {/* Velo claro desde la izquierda */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(95deg, rgba(245,241,234,0.95) 0%, rgba(245,241,234,0.72) 30%, rgba(245,241,234,0.22) 54%, transparent 72%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 pb-16">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#C38335" }}>
              {t("hero.eyebrow")}
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-tight mb-5"
              style={{
                backgroundImage: "linear-gradient(95deg, #5C2D6B 0%, #5A102D 55%, #7A1834 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                width: "fit-content",
              }}
            >
              {t("hero.headline")}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed max-w-lg" style={{ color: "#282625" }}>
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* ── Franja morada: subtítulo extendido ── */}
      <section className="bg-[#5A102D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-lg sm:text-xl leading-relaxed text-blue-100">{t("hero.body")}</p>
            <p className="text-base sm:text-lg leading-relaxed text-blue-300">{t("hero.body2")}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {items.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="group relative block border border-gray-100 rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-2xl hover:z-10"
              >
                {/* Foto del ingrediente */}
                <div className="w-full aspect-[3/2] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.photo}')`, backgroundColor: "#F5F1EA" }}
                  />
                </div>
                {/* Color band */}
                <div className="h-1.5 w-full" style={{ backgroundColor: item.color }} />
                <div className="p-8">
                  <h2 className="text-xl font-bold text-[#282625] mb-3">{item.name}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{item.intro}</p>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: item.color }}
                  >
                    Ver ingrediente <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
