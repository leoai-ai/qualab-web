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
    title: isES ? "Piel de uva en polvo" : "Grape Skin Powder",
    description: isES
      ? "Polvo de piel de uva tinta. 55% de fibra dietaria, 1.173 mg de antocianinas y 36,96 mg/g de polifenoles por 100 g. Origen Mendoza, Argentina."
      : "Powder from red grape skins. 55% dietary fiber, 1,173 mg of anthocyanins and 36.96 mg/g of polyphenols per 100 g. Origin Mendoza, Argentina.",
    openGraph: {
      title: isES ? "Piel de uva en polvo | Qualab" : "Grape Skin Powder | Qualab",
      description: isES
        ? "55% de fibra dietaria total, rica en antocianinas y polifenoles. Para horneados, granolas, chocolates y suplementos."
        : "55% total dietary fiber, rich in anthocyanins and polyphenols. For baked goods, granolas, chocolates and supplements.",
      siteName: "Qualab",
      type: "website",
    },
  };
}

export default function PolvoPielPage() {
  const t = useTranslations("ingredientes.polvo");
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
        { key: "Granulometría", val: t("spec_granulo") },
        { key: "Fibra dietaria total", val: t("spec_fibra") },
        { key: "Antocianinas", val: t("spec_antocia") },
        { key: "Origen", val: t("spec_origin") },
      ]}
      badges={[
        { iconName: "WheatOff",    label: "Sin Gluten · < 10 ppm",                             color: "#C5CCB5" },
        { iconName: "Leaf",        label: "Apto Veganos",                                      color: "#C38335" },
        { iconName: "Sprout",      label: "Sin OGM · No transgénico",                          color: "#596943" },
        { iconName: "ShieldCheck", label: "Sin BSE-TSE · Libre de proteína animal de riesgo", color: "#D7C4A8" },
      ]}
      cta={t("cta")}
      contactHref={`/${locale}/contacto`}
      accentColor="#5A102D"
      heroBg="/polvo-uva-hero.jpg"
      heroLight
      appsBg="/ingredientes/polvo-usos.webp"
      appsBgPosition="center bottom"
      appsBgOpacity={0.55}
      whyDark
    />
  );
}
