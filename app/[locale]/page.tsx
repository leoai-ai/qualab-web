import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ColorGama from "@/components/home/ColorGama";
import ProblemBlock from "@/components/home/ProblemBlock";
import IngredientCards from "@/components/home/IngredientCards";
import CtaFinal from "@/components/home/CtaFinal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isES = locale === "es";
  return {
    title: isES
      ? "Qualab — Colorantes naturales e ingredientes funcionales de uva"
      : "Qualab — Natural colorants and functional ingredients from grape",
    description: isES
      ? "Transformamos subproductos de la vid en colorantes naturales e ingredientes funcionales para alimentos, bebidas y nutraceúticos. Origen Mendoza, Argentina."
      : "We transform vine by-products into natural colorants and functional ingredients for food, beverages and nutraceuticals. Origin Mendoza, Argentina.",
    openGraph: {
      title: isES
        ? "Qualab — Colorantes naturales e ingredientes de uva"
        : "Qualab — Natural colorants and grape ingredients",
      description: isES
        ? "Ingredientes bioactivos de origen vitivinícola. Colorante natural de uva, aceite de pepita y polvo de piel."
        : "Bioactive ingredients of viticultural origin. Natural grape colorant, seed oil and skin powder.",
      siteName: "Qualab",
      locale: isES ? "es_AR" : "en_US",
      type: "website",
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ColorGama />
      <IngredientCards />
      <ProblemBlock />
      <CtaFinal />
    </>
  );
}
