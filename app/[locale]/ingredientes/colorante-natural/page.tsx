"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { CheckCircle, ArrowRight, Leaf, FlaskConical, MapPin, WheatOff, Sprout, ShieldCheck } from "lucide-react";

const swatches = [
  { color: "#3D0B1A", label: "Cabernet" },
  { color: "#5A1228", label: "Malbec" },
  { color: "#7B1D3B", label: "Merlot" },
  { color: "#9A2848", label: "Pinot" },
  { color: "#B8365A", label: "Rosé" },
  { color: "#D0506E", label: "Clarete" },
  { color: "#E87090", label: "Extracto" },
  { color: "#F5A0B8", label: "Soluble" },
];

export default function ColorantePage() {
  const t = useTranslations("ingredientes.colorante");
  const locale = useLocale();

  const whyItems = [t("why_1"), t("why_2"), t("why_3"), t("why_4")];
  const appItems = [t("app_1"), t("app_2"), t("app_3"), t("app_4"), t("app_5")];

  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-0 overflow-hidden relative" style={{ background: "#200610" }}>
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url(/Colorante_imagen.png)" }}
        />
        {/* Gradient overlay: dark left for text, reveals photo right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, #200610f5 0%, #5A1228cc 45%, #8B1D4280 70%, transparent 100%)",
          }}
        />
        {/* Gradient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-[-80px] right-[-80px] w-96 h-96 rounded-full opacity-15"
            style={{
              background: "radial-gradient(circle, #C9A84C, transparent)",
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute bottom-32 left-[-60px] w-72 h-72 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #8B1D42, transparent)",
              filter: "blur(30px)",
            }}
          />
        </div>

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Decorative rings */}
        <div className="absolute top-20 right-16 w-48 h-48 rounded-full border border-white/10" />
        <div className="absolute top-32 right-28 w-24 h-24 rounded-full border border-white/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <span className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase bg-[#C9A84C] text-white px-4 py-1.5 rounded-full mb-6">
              {t("tag")}
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-5 text-white">
              {t("headline")}
            </h1>
            <p className="text-lg sm:text-xl text-rose-200/80 leading-relaxed mb-10 max-w-2xl">
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

        {/* Color swatch strip — tall with labels */}
        <div className="flex h-20">
          {swatches.map(({ color, label }) => (
            <div
              key={color}
              className="flex-1 flex flex-col justify-end items-center pb-2"
              style={{ backgroundColor: color }}
            >
              <span className="text-[9px] text-white/60 font-semibold tracking-wider hidden sm:block">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ORIGIN + COMPOUND */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group bg-[#F8F6F2] hover:bg-[#1B3A6B] rounded-2xl p-8 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#3A7D44]/10 group-hover:bg-white/15 flex items-center justify-center transition-colors duration-300">
                  <MapPin size={18} className="text-[#3A7D44] group-hover:text-white transition-colors duration-300" />
                </div>
                <h2 className="font-bold text-[#1B3A6B] group-hover:text-white transition-colors duration-300">
                  {t("origen_title")}
                </h2>
              </div>
              <p className="text-gray-600 group-hover:text-blue-200 text-sm leading-relaxed transition-colors duration-300">
                {t("origen_body")}
              </p>
            </div>

            <div className="group bg-[#F8F6F2] hover:bg-[#8B1D42] rounded-2xl p-8 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#1B3A6B]/10 group-hover:bg-white/15 flex items-center justify-center transition-colors duration-300">
                  <FlaskConical size={18} className="text-[#1B3A6B] group-hover:text-white transition-colors duration-300" />
                </div>
                <h2 className="font-bold text-[#1B3A6B] group-hover:text-white transition-colors duration-300">
                  {t("compuesto_title")}
                </h2>
              </div>
              <p className="text-gray-600 group-hover:text-rose-200 text-sm leading-relaxed transition-colors duration-300">
                {t("compuesto_body")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NATURAL */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "#0F2347" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 60% 70% at 75% 50%, rgba(139,29,66,0.35) 0%, transparent 55%),
              radial-gradient(ellipse 40% 50% at 10% 30%, rgba(201,168,76,0.15) 0%, transparent 50%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-6">
                <span className="w-6 h-px bg-[#C9A84C]" />
                Clean Label
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
                {t("why_title")}
              </h2>
              <ul className="space-y-4">
                {whyItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-[#C9A84C] mt-0.5 shrink-0"
                    />
                    <span className="text-blue-100/80 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats block */}
            <div className="grid grid-cols-1 gap-5">
              <div
                className="rounded-2xl p-8 text-center"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div className="text-7xl font-black text-[#C9A84C] mb-2 leading-none">
                  +40%
                </div>
                <p className="text-blue-300 text-sm leading-relaxed">
                  Crecimiento anual del mercado de colorantes naturales
                  <br />
                  <span className="text-blue-400/60 text-xs">Mordor Intelligence, 2023</span>
                </p>
              </div>
              <div
                className="rounded-2xl p-6 text-center"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="text-4xl font-bold text-white mb-1">USD 2.000M+</div>
                <p className="text-blue-400 text-sm">Mercado global de colorantes naturales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-[#3A7D44] mb-4">
                <span className="w-6 h-px bg-[#3A7D44]" />
                {t("apps_title")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B] mb-8 leading-tight">
                Un colorante,<br />múltiples industrias
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {appItems.map((app, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[#F5F0E8] hover:bg-[#1B3A6B] group rounded-xl px-4 py-3.5 transition-all duration-300"
                  >
                    <Leaf
                      size={14}
                      className="text-[#3A7D44] group-hover:text-green-300 shrink-0 transition-colors duration-300"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-white transition-colors duration-300">
                      {app}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div
              className="rounded-2xl p-8 text-white relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #0F2347 100%)" }}
            >
              {/* Decorative ring */}
              <div className="absolute top-[-30px] right-[-30px] w-40 h-40 rounded-full border border-white/10" />
              <div className="absolute top-2 right-2 w-20 h-20 rounded-full border border-white/8" />

              <h3 className="font-bold text-lg mb-7 relative">{t("spec_title")}</h3>
              <dl className="space-y-5 relative">
                {[
                  { key: "Formato", val: t("spec_format") },
                  { key: "Color", val: t("spec_color") },
                  { key: "Fuente", val: t("spec_source") },
                ].map(({ key, val }) => (
                  <div
                    key={key}
                    className="flex items-start justify-between gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                  >
                    <dt className="text-sm text-blue-300">{key}</dt>
                    <dd className="text-sm font-semibold text-right">{val}</dd>
                  </div>
                ))}
              </dl>

              {/* Certification badges */}
              <div className="mt-7 pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { Icon: WheatOff,   label: "Gluten Free",   color: "#4ade80" },
                    { Icon: Sprout,     label: "Non-GMO",       color: "#86efac" },
                    { Icon: Leaf,       label: "Natural",       color: "#C9A84C" },
                    { Icon: ShieldCheck,label: "BSE-TSE Free",  color: "#93c5fd" },
                  ].map(({ Icon, label, color }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2.5"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      <Icon size={15} style={{ color, flexShrink: 0 }} />
                      <span className="text-xs font-semibold text-white/90 leading-tight">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F5F0E8] relative overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(139,29,66,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-[#8B1D42] mb-5">
            <span className="w-6 h-px bg-[#8B1D42]" />
            {t("tag")}
            <span className="w-6 h-px bg-[#8B1D42]" />
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B] mb-5">
            {t("name")}
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">{t("intro")}</p>
          <Link
            href={`/${locale}/contacto`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#8B1D42] text-white font-semibold hover:bg-[#6B1535] transition-colors"
          >
            {t("cta")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
