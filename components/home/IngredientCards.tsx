import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

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
      color: "bg-[#7B1D3B]",
      accent: "text-[#C9A84C]",
      featured: true,
    },
    {
      key: "aceite",
      href: `/${locale}/ingredientes/aceite-pepita-uva`,
      name: t("aceite.name"),
      desc: t("aceite.desc"),
      color: "bg-[#3A7D44]",
      accent: "text-green-200",
      featured: false,
    },
    {
      key: "polvo",
      href: `/${locale}/ingredientes/polvo-piel-uva`,
      name: t("polvo.name"),
      desc: t("polvo.desc"),
      color: "bg-[#5C2D6B]",
      accent: "text-purple-200",
      featured: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader eyebrow={t("eyebrow")} headline={t("headline")} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ingredients.map((ing) => (
            <Link
              key={ing.key}
              href={ing.href}
              className={`group relative rounded-2xl p-8 ${ing.color} text-white overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl`}
            >
              {ing.featured && (
                <span className="absolute top-4 right-4 text-xs font-semibold bg-[#C9A84C] text-white px-3 py-1 rounded-full">
                  {ing.tag}
                </span>
              )}
              <div className="mt-4 mb-3 text-lg font-bold leading-tight">{ing.name}</div>
              <p className={`text-sm leading-relaxed mb-6 ${ing.accent}`}>{ing.desc}</p>
              <div className="flex items-center gap-1 text-xs font-semibold text-white/80 group-hover:text-white transition-colors">
                Ver más <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
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
