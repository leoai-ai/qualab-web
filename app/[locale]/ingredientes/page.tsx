import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

export default function IngredientesPage() {
  const t = useTranslations("ingredientes");
  const locale = useLocale();

  const items = [
    {
      key: "colorante",
      href: `/${locale}/ingredientes/colorante-natural`,
      name: t("colorante.name"),
      intro: t("colorante.intro"),
      tag: t("colorante.tag"),
      color: "#7B1D3B",
      featured: true,
    },
    {
      key: "aceite",
      href: `/${locale}/ingredientes/aceite-pepita-uva`,
      name: t("aceite.name"),
      intro: t("aceite.intro"),
      color: "#3A7D44",
      featured: false,
    },
    {
      key: "polvo",
      href: `/${locale}/ingredientes/polvo-piel-uva`,
      name: t("polvo.name"),
      intro: t("polvo.intro"),
      color: "#5C2D6B",
      featured: false,
    },
  ];

  return (
    <>
      <section className="pt-16 bg-[#1B3A6B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeader
            eyebrow={t("hero.eyebrow")}
            headline={t("hero.headline")}
            body={t("hero.body")}
            light
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item) => (
              <div key={item.key} className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                {/* Color band */}
                <div className="h-2 w-full" style={{ backgroundColor: item.color }} />
                <div className="p-8">
                  {item.featured && (
                    <span className="inline-block text-xs font-semibold bg-[#C9A84C] text-white px-3 py-1 rounded-full mb-4">
                      {item.tag}
                    </span>
                  )}
                  <h2 className="text-xl font-bold text-[#1B3A6B] mb-3">{item.name}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{item.intro}</p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{ color: item.color }}
                  >
                    Ver ingrediente <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
