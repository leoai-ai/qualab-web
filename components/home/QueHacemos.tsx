import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { FlaskConical, Factory, TrendingUp, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const ICONS = [FlaskConical, Factory, TrendingUp];
const ACCENTS = ["#1B3A6B", "#3A7D44", "#C9A84C"];

export default function QueHacemos() {
  const t = useTranslations("home.que_hacemos");
  const locale = useLocale();

  const bloques = [
    { icon: ICONS[0], color: ACCENTS[0], title: t("b1_title"), body: t("b1_body") },
    { icon: ICONS[1], color: ACCENTS[1], title: t("b2_title"), body: t("b2_body") },
    { icon: ICONS[2], color: ACCENTS[2], title: t("b3_title"), body: t("b3_body") },
  ];

  return (
    <section className="py-24 bg-[#F5F0E8] relative overflow-hidden">
      {/* Ghost text */}
      <div
        className="absolute -top-4 right-0 text-[9rem] font-black text-[#1B3A6B]/[0.04] select-none leading-none pointer-events-none whitespace-nowrap"
        aria-hidden
      >
        QUALAB
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeader eyebrow={t("eyebrow")} headline={t("headline")} body={t("body")} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bloques.map((b, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300"
                style={{ backgroundColor: b.color + "15" }}
              >
                <b.icon size={26} style={{ color: b.color }} />
              </div>

              {/* Accent line */}
              <div
                className="w-8 h-1 rounded-full mb-4"
                style={{ backgroundColor: b.color }}
              />

              <h3 className="text-lg font-bold text-[#1B3A6B] mb-3 leading-snug">
                {b.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {b.body}
              </p>
            </div>
          ))}
        </div>

        {/* Featured callout — colorante highlight */}
        <div className="mt-12 rounded-2xl bg-[#1B3A6B] overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center gap-6 px-8 py-7">
            {/* Grape dot accent */}
            <div className="shrink-0 w-14 h-14 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center text-2xl select-none">
              🍇
            </div>

            {/* Text */}
            <p className="text-white/90 text-base sm:text-lg font-medium leading-snug text-center sm:text-left flex-1">
              {t("cierre")}
            </p>

            {/* CTA link */}
            <Link
              href={`/${locale}/ingredientes/colorante-natural`}
              className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#C9A84C] text-white text-sm font-semibold hover:bg-amber-500 transition-colors whitespace-nowrap"
            >
              Ver colorante <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
