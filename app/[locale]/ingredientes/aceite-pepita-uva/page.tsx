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
      appsTitle={t("apps_title")}
      apps={[t("app_1"), t("app_2"), t("app_3"), t("app_4")]}
      specTitle={t("spec_title")}
      specs={[
        { key: "Formato", val: t("spec_format") },
        { key: "Color", val: t("spec_color") },
        { key: "Fuente", val: t("spec_source") },
        { key: "Origen", val: t("spec_origin") },
      ]}
      cta={t("cta")}
      contactHref={`/${locale}/contacto`}
      accentColor="#4E9B5A"
      heroBg="/Aceite_uva.png"
    />
  );
}
