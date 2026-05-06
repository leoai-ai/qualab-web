import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import ProblemBlock from "@/components/home/ProblemBlock";
import QueHacemos from "@/components/home/QueHacemos";
import IngredientCards from "@/components/home/IngredientCards";
import TresNo from "@/components/home/TresNo";
import DiferencialesGrid from "@/components/home/DiferencialesGrid";
import AliadosStrip from "@/components/home/AliadosStrip";
import CtaFinal from "@/components/home/CtaFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ProblemBlock />
      <QueHacemos />
      <IngredientCards />
      <TresNo />
      <DiferencialesGrid />
      <AliadosStrip />
      <CtaFinal />
    </>
  );
}
