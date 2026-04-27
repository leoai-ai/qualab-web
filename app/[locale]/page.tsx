import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import ProblemBlock from "@/components/home/ProblemBlock";
import IngredientCards from "@/components/home/IngredientCards";
import DiferencialesGrid from "@/components/home/DiferencialesGrid";
import AliadosStrip from "@/components/home/AliadosStrip";
import CtaFinal from "@/components/home/CtaFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ProblemBlock />
      <IngredientCards />
      <DiferencialesGrid />
      <AliadosStrip />
      <CtaFinal />
    </>
  );
}
