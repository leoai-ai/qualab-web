import { useTranslations, useLocale } from "next-intl";
import IngredientPage from "@/components/ingredientes/IngredientPage";

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
