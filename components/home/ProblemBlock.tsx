import { useTranslations } from "next-intl";
import SectionHeader from "@/components/shared/SectionHeader";

export default function ProblemBlock() {
  const t = useTranslations("home.problem");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SectionHeader
            eyebrow={t("eyebrow")}
            headline={t("headline")}
            body={t("body")}
          />
          {/* Visual breakdown */}
          <div className="bg-[#F5F0E8] rounded-2xl p-8 space-y-4">
            <div className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-6">
              Biomasa de la uva
            </div>
            {/* Juice bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">Jugo → Vino</span>
                <span className="font-bold text-[#1B3A6B]">~25%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#1B3A6B] rounded-full" style={{ width: "25%" }} />
              </div>
            </div>
            {/* Biomass bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">Pieles, semillas, sarmientos</span>
                <span className="font-bold text-[#3A7D44]">~75%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#3A7D44] rounded-full" style={{ width: "75%" }} />
              </div>
            </div>
            <p className="text-xs text-gray-500 pt-4 leading-relaxed">
              La mayor parte del valor biológico de la uva —polifenoles, antocianinas, fibras— está en las fracciones que la industria descarta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
