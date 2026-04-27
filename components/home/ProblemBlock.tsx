import { useTranslations } from "next-intl";
import SectionHeader from "@/components/shared/SectionHeader";

export default function ProblemBlock() {
  const t = useTranslations("home.problem");

  return (
    <section className="pt-8 pb-24 bg-white relative overflow-hidden">
      {/* Decorative blob */}
      <div
        className="absolute left-[-120px] bottom-[-60px] w-96 h-96 rounded-full opacity-[0.04]"
        style={{ background: "#3A7D44" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionHeader
            eyebrow={t("eyebrow")}
            headline={t("headline")}
            body={t("body")}
          />

          {/* Visual: donut chart */}
          <div className="flex flex-col items-center lg:items-center gap-8">
            <div className="relative w-52 h-52 shrink-0">
              {/* Outer glow */}
              <div
                className="absolute inset-[-8px] rounded-full opacity-20"
                style={{
                  background:
                    "conic-gradient(#3A7D44 0deg 270deg, #1B3A6B 270deg 360deg)",
                  filter: "blur(12px)",
                }}
              />
              {/* Donut ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(#3A7D44 0deg 270deg, #1B3A6B 270deg 360deg)",
                }}
              />
              {/* Inner hole */}
              <div className="absolute inset-[18%] rounded-full bg-white flex flex-col items-center justify-center shadow-sm">
                <div className="text-2xl font-bold text-[#3A7D44] leading-none">
                  75%
                </div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">
                  biomasa
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-4 w-full max-w-sm">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1B3A6B] flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-white">25%</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1B3A6B]">Jugo → Vino</p>
                  <p className="text-xs text-gray-500">Lo que la industria aprovecha</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#3A7D44] flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-white">75%</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#3A7D44]">
                    Pieles · Semillas · Sarmientos
                  </p>
                  <p className="text-xs text-gray-500">Lo que Qualab transforma</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 pt-3 leading-relaxed border-t border-gray-100">
                La mayor parte del valor biológico de la uva —polifenoles,
                antocianinas, fibras— está en las fracciones que la industria
                descarta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
