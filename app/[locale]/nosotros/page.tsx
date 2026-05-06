import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight, Zap, ShieldCheck, Target, Wrench, TrendingUp, Lightbulb, Shuffle } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

export default function NosotrosPage() {
  const t = useTranslations("nosotros");
  const locale = useLocale();

  const valores = [
    { label: t("valores.v1"), icon: ShieldCheck, color: "#1B3A6B", desc: "Actuamos con honestidad y coherencia en cada decisión." },
    { label: t("valores.v2"), icon: Target,      color: "#3A7D44", desc: "Cada acción tiene un propósito claro y deliberado." },
    { label: t("valores.v3"), icon: Wrench,       color: "#C9A84C", desc: "Combinamos ciencia, tecnología y conocimiento vitivinícola." },
    { label: t("valores.v4"), icon: TrendingUp,   color: "#1B3A6B", desc: "Medimos el éxito por el impacto real que generamos." },
    { label: t("valores.v5"), icon: Lightbulb,    color: "#3A7D44", desc: "Anticipamos oportunidades antes de que sean evidentes." },
    { label: t("valores.v6"), icon: Shuffle,      color: "#C9A84C", desc: "Nos adaptamos rápido sin perder el foco en lo importante." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-16 bg-[#1B3A6B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeader
            eyebrow={t("hero.eyebrow")}
            headline={t("hero.headline")}
            body={t("hero.body")}
            light
          />
        </div>
      </section>

      {/* Propósito */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#3A7D44] mb-3">
                {t("proposito.eyebrow")}
              </p>
              <blockquote className="text-2xl sm:text-3xl font-bold text-[#1B3A6B] leading-tight border-l-4 border-[#C9A84C] pl-6">
                {t("proposito.headline")}
              </blockquote>
            </div>
            <div className="bg-[#F5F0E8] rounded-2xl p-8">
              <h3 className="font-bold text-[#1B3A6B] mb-3">{t("proposito.historia_title")}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t("proposito.historia_body")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visión BHAG */}
      <section className="py-20 bg-[#1B3A6B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-4">
            {t("vision.eyebrow")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
            {t("vision.headline")}
          </h2>
          <p className="text-blue-200 text-lg leading-relaxed">{t("vision.body")}</p>
        </div>
      </section>

      {/* Leo */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-10 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#1B3A6B]/10 flex items-center justify-center">
                <Zap size={20} className="text-[#1B3A6B]" />
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                {t("leo.eyebrow")}
              </span>
              <span className="text-xs font-semibold bg-[#C9A84C]/20 text-[#C9A84C] px-2 py-0.5 rounded-full">
                {t("leo.tag")}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#1B3A6B] mb-4">{t("leo.headline")}</h2>
            <p className="text-gray-600 leading-relaxed">{t("leo.body")}</p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeader eyebrow={t("valores.eyebrow")} headline={t("valores.headline")} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((v, i) => (
              <div
                key={i}
                className="group flex items-start gap-5 bg-[#F5F0E8] hover:bg-[#1B3A6B] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: v.color + "18" }}
                >
                  <v.icon size={22} style={{ color: v.color }} className="group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="font-bold text-[#1B3A6B] group-hover:text-white mb-1 transition-colors duration-300">
                    {v.label}
                  </div>
                  <p className="text-sm text-gray-500 group-hover:text-blue-200 leading-relaxed transition-colors duration-300">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F5F0E8] text-center">
        <Link
          href={`/${locale}/contacto`}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1B3A6B] text-white font-semibold hover:bg-blue-900 transition-colors"
        >
          Contactanos <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
