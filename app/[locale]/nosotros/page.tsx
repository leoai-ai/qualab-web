import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { ShieldCheck, Target, Wrench, TrendingUp, Lightbulb, Shuffle, PiggyBank, Hammer } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isES = locale === "es";
  return {
    title: isES ? "Nosotros" : "About us",
    description: isES
      ? "Qualab nació para transformar la vitivinicultura en una plataforma de innovación. Conocé nuestro propósito, visión y el equipo detrás de la idea."
      : "Qualab was born to transform viticulture into an innovation platform. Learn about our purpose, vision and the team behind the idea.",
    openGraph: {
      title: isES ? "Nosotros | Qualab" : "About us | Qualab",
      description: isES
        ? "Una plataforma de innovación que conecta viñedos, ciencia y mercados globales de salud."
        : "An innovation platform connecting vineyards, science and global health markets.",
      siteName: "Qualab",
      type: "website",
    },
  };
}

export default function NosotrosPage() {
  const t = useTranslations("nosotros");

  const valores = [
    { label: t("valores.v1"), icon: ShieldCheck, color: "#5A102D", desc: "Decimos la verdad, actuamos con honestidad y cumplimos lo que prometemos." },
    { label: t("valores.v2"), icon: Target,      color: "#596943", desc: "Queremos estar acá, queremos el rol que ocupamos y jugamos para el equipo." },
    { label: t("valores.v3"), icon: Wrench,      color: "#C38335", desc: "Sabemos hacer el trabajo que asumimos y aprendemos con seriedad lo que no sabemos." },
    { label: t("valores.v4"), icon: TrendingUp,  color: "#5A102D", desc: "Convertimos intención y esfuerzo en avances concretos para la empresa." },
    { label: t("valores.v5"), icon: Lightbulb,   color: "#596943", desc: "Nos hacemos cargo, empujamos y movemos las cosas sin esperar instrucciones." },
    { label: t("valores.v6"), icon: Shuffle,     color: "#C38335", desc: "Diseñamos planes con margen de maniobra y nos adaptamos sin perder el rumbo." },
    { label: t("valores.v7"), icon: PiggyBank,   color: "#5A102D", desc: "Hacemos más con menos: usamos el ingenio antes que el gasto." },
    { label: t("valores.v8"), icon: Hammer,      color: "#596943", desc: "Estamos para resolver, no solo para analizar. Práctica, de calle, enfocada en el cliente." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-16 bg-[#5A102D] text-white">
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
              <p className="text-xs font-semibold tracking-widest uppercase text-[#596943] mb-3">
                {t("proposito.eyebrow")}
              </p>
              <blockquote className="text-2xl sm:text-3xl font-bold text-[#282625] leading-tight border-l-4 border-[#C38335] pl-6">
                {t("proposito.headline")}
              </blockquote>
            </div>
            <div className="bg-[#F5F1EA] rounded-2xl p-8">
              <h3 className="font-bold text-[#282625] mb-3">{t("proposito.historia_title")}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t("proposito.historia_body")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visión BHAG */}
      <section className="py-20 bg-[#5A102D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C38335] mb-4">
            {t("vision.eyebrow")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
            {t("vision.headline")}
          </h2>
          <p className="text-blue-200 text-lg leading-relaxed">{t("vision.body")}</p>
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
                className="group flex items-start gap-5 bg-[#F5F1EA] hover:bg-[#5A102D] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: v.color + "18" }}
                >
                  <v.icon size={22} style={{ color: v.color }} className="group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="font-bold text-[#282625] group-hover:text-white mb-1 transition-colors duration-300">
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

    </>
  );
}
