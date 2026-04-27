import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { CheckCircle, ArrowRight, Leaf, FlaskConical, MapPin } from "lucide-react";

export default function ColorantePage() {
  const t = useTranslations("ingredientes.colorante");
  const locale = useLocale();

  const whyItems = [t("why_1"), t("why_2"), t("why_3"), t("why_4")];
  const appItems = [t("app_1"), t("app_2"), t("app_3"), t("app_4"), t("app_5")];

  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-0 bg-gradient-to-br from-[#4A0E2B] via-[#7B1D3B] to-[#1B3A6B] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-[#C9A84C] text-white px-3 py-1 rounded-full mb-6">
              {t("tag")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
              {t("headline")}
            </h1>
            <p className="text-lg sm:text-xl text-rose-200 leading-relaxed mb-10 max-w-2xl">
              {t("intro")}
            </p>
            <Link
              href={`/${locale}/contacto`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C9A84C] text-white font-semibold hover:bg-amber-500 transition-colors"
            >
              {t("cta")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        {/* Color swatch strip */}
        <div className="flex h-4 w-full">
          {["#4A0E2B", "#6B1535", "#8B1D42", "#A82550", "#C7365E", "#E0506E", "#F07090", "#F8A0B0"].map((c) => (
            <div key={c} className="flex-1" style={{ backgroundColor: c }} />
          ))}
        </div>
      </section>

      {/* ORIGIN + COMPOUND */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F5F0E8] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#3A7D44]/10 flex items-center justify-center">
                  <MapPin size={18} className="text-[#3A7D44]" />
                </div>
                <h2 className="font-bold text-[#1B3A6B]">{t("origen_title")}</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{t("origen_body")}</p>
            </div>

            <div className="bg-[#F5F0E8] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#1B3A6B]/10 flex items-center justify-center">
                  <FlaskConical size={18} className="text-[#1B3A6B]" />
                </div>
                <h2 className="font-bold text-[#1B3A6B]">{t("compuesto_title")}</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{t("compuesto_body")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NATURAL */}
      <section className="py-20 bg-[#1B3A6B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
                Clean Label
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
                {t("why_title")}
              </h2>
              <ul className="space-y-4">
                {whyItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#C9A84C] mt-0.5 shrink-0" />
                    <span className="text-blue-100 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Visual stat */}
            <div className="bg-white/10 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold text-[#C9A84C] mb-2">+40%</div>
              <p className="text-blue-200 text-sm leading-relaxed">
                Crecimiento anual del mercado de colorantes naturales (Mordor Intelligence, 2023)
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-3xl font-bold text-white mb-1">USD 2.000M+</div>
                <p className="text-blue-300 text-sm">Mercado global de colorantes naturales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#3A7D44] mb-3">
                {t("apps_title")}
              </p>
              <h2 className="text-3xl font-bold text-[#1B3A6B] mb-6">
                Un colorante, múltiples industrias
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {appItems.map((app, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#F5F0E8] rounded-xl px-4 py-3">
                    <Leaf size={14} className="text-[#3A7D44] shrink-0" />
                    <span className="text-sm text-gray-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="bg-[#1B3A6B] rounded-2xl p-8 text-white">
              <h3 className="font-bold text-lg mb-6">{t("spec_title")}</h3>
              <dl className="space-y-4">
                {[
                  { key: "Formato", val: t("spec_format") },
                  { key: "Color", val: t("spec_color") },
                  { key: "Fuente", val: t("spec_source") },
                  { key: "Origen", val: t("spec_origin") },
                ].map(({ key, val }) => (
                  <div key={key} className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <dt className="text-sm text-blue-300">{key}</dt>
                    <dd className="text-sm font-medium text-right">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1B3A6B] mb-4">{t("name")}</h2>
          <p className="text-gray-600 mb-8">{t("intro")}</p>
          <Link
            href={`/${locale}/contacto`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1B3A6B] text-white font-semibold hover:bg-blue-900 transition-colors"
          >
            {t("cta")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
