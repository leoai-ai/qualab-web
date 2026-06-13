import type { MetadataRoute } from "next";

const BASE_URL = "https://qualab.co";

const ROUTES = [
  "",
  "/colorantes",
  "/ingredientes",
  "/ingredientes/aceite-pepita-uva",
  "/ingredientes/polvo-piel-uva",
  "/nosotros",
  "/contacto",
];

const LOCALES = ["es", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: {
          es: `${BASE_URL}/es${route}`,
          en: `${BASE_URL}/en${route}`,
        },
      },
    }))
  );
}
