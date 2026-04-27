import { useTranslations } from "next-intl";
import { MapPin, FlaskConical, BrainCircuit, Handshake } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const icons = [MapPin, FlaskConical, BrainCircuit, Handshake];

export default function DiferencialesGrid() {
  const t = useTranslations("home.diferencial");

  const items = [
    { title: t("d1_title"), body: t("d1_body") },
    { title: t("d2_title"), body: t("d2_body") },
    { title: t("d3_title"), body: t("d3_body") },
    { title: t("d4_title"), body: t("d4_body") },
  ];

  return (
    <section className="py-20 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader eyebrow={t("eyebrow")} headline={t("headline")} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="bg-white rounded-2xl p-6 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#1B3A6B]/10 flex items-center justify-center">
                  <Icon size={20} className="text-[#1B3A6B]" />
                </div>
                <h3 className="font-bold text-[#1B3A6B]">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
