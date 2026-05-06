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
    title: isES ? "Polvo de Piel de Uva" : "Grape Skin Powder",
    description: isES
      ? "Polvo de piel de uva deshidratada y micronizada. Fuente natural de antocianinas, resveratrol y fibra dietaria. Origen Mendoza, Argentina."
      : "Dehydrated and micronized grape skin powder. Natural source of anthocyanins, resveratrol and dietary fiber. Origin Mendoza, Argentina.",
    openGraph: {
      title: isES ? "Polvo de Piel de Uva | Qualab" : "Grape Skin Powder | Qualab",
      description: isES
        ? "Concentrado natural de polifenoles y fibra. Para alimentos funcionales, suplementos y cosmética natural."
        : "Natural concentrate of polyphenols and fiber. For functional foods, supplements and natural cosmetics.",
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
      accentColor="#5C2D6B"
      heroBg="/productos_ingredientes.png"
    />
  );
}
