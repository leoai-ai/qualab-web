import type { Metadata } from "next";
import { useTranslations, useLocale } from "next-intl";
import IngredientPage from "@/components/ingredientes/IngredientPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isES = locale === "es";
  return {
    title: isES ? "Aceite de Pepita de Uva" : "Grape Seed Oil",
    description: isES
      ? "Aceite virgen de pepita de uva mendocina, prensado en frío. Alto contenido de ácido linoleico y vitamina E natural. Para alimentos funcionales, cosmética y farmacéutica."
      : "Virgin cold-pressed Mendoza grape seed oil. High linoleic acid content and natural vitamin E. For functional foods, cosmetics and pharmaceuticals.",
    openGraph: {
      title: isES ? "Aceite de Pepita de Uva | Qualab" : "Grape Seed Oil | Qualab",
      description: isES
        ? "Perfil lipídico único, alto en ácido linoleico y vitamina E natural. Origen Mendoza, Argentina."
        : "Unique lipid profile, high in linoleic acid and natural vitamin E. Origin Mendoza, Argentina.",
      siteName: "Qualab",
      type: "website",
    },
  };
}

export default function AceitePage() {
  const t = useTranslations("ingredientes.aceite");
  const locale = useLocale();

  return (
    <IngredientPage
      name={t("name")}
      headline={t("headline")}
      intro={t("intro")}
      origenTitle={t("origen_title")}
      origenBody={t("origen_body")}
      compuestoTitle={t("compuesto_title")}
      compuestoBody={t("compuesto_body")}
      whyTitle={t("why_title")}
      whyItems={[t("why_1"), t("why_2"), t("why_3"), t("why_4")]}
      appsTitle={t("apps_title")}
      apps={[t("app_1"), t("app_2"), t("app_3"), t("app_4")]}
      specTitle={t("spec_title")}
      specs={[
        { key: "Formato", val: t("spec_format") },
        { key: "Extracción", val: t("spec_extraction") },
        { key: "Grasas poliinsaturadas", val: t("spec_pufa") },
        { key: "Vitamina E", val: t("spec_vite") },
        { key: "Fuente", val: t("spec_source") },
        { key: "Origen", val: t("spec_origin") },
      ]}
      badges={[
        { iconName: "WheatOff",    label: "Sin Gluten",                                        color: "#C5CCB5" },
        { iconName: "Sprout",      label: "Sin OGM · No transgénico",                          color: "#596943" },
        { iconName: "Leaf",        label: "Natural",                                           color: "#C38335" },
        { iconName: "ShieldCheck", label: "Sin BSE-TSE · Libre de proteína animal de riesgo", color: "#D7C4A8" },
      ]}
      cta={t("cta")}
      contactHref={`/${locale}/contacto`}
      accentColor="#596943"
      heroBg="/Aceite_uva.png"
    />
  );
}
