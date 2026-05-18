"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { CheckCircle, ArrowRight, Leaf, FlaskConical, MapPin, WheatOff, Sprout, ShieldCheck } from "lucide-react";
import FaqSection from "@/components/ingredientes/FaqSection";

function AppCard({ app }: { app: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-3 rounded-xl px-4 py-3.5 transition-all duration-200 cursor-default"
      style={{ backgroundColor: hovered ? "#5A102D" : "#F5F1EA" }}
    >
      <Leaf
        size={14}
        className="shrink-0 transition-colors duration-200"
        style={{ color: hovered ? "rgba(245,241,234,0.85)" : "#596943" }}
      />
      <span
        className="text-sm transition-colors duration-200"
        style={{ color: hovered ? "rgba(245,241,234,0.95)" : "#374151" }}
      >
        {app}
      </span>
    </div>
  );
}

// Paleta oficial Manual de Marca Qualab — Mayo 2026
// Territorio: Uva profunda + Borgoña + Grafito + Off-white
// Tipografía: Georgia Bold (titulares) · Arial (cuerpo)

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
      {/* ── HERO ── */}
      <section className="pt-24 pb-0 overflow-hidden relative" style={{ background: "#2B0920" }}>
        {/* Foto de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/Colorante_imagen.png)", filter: "brightness(0.75)" }}
        />
        {/* Overlay degradé izquierda → derecha */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(100deg, rgba(43,9,32,0.80) 0%, rgba(90,16,45,0.50) 45%, rgba(122,24,52,0.20) 70%, transparent 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <span className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase bg-[#C38335] text-white px-4 py-1.5 rounded-full mb-6">
              {t("tag")}
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-5 text-white">
              {t("headline")}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: "rgba(245,241,234,0.80)" }}>
              {t("intro")}
            </p>
            <Link
              href={`/${locale}/contacto`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-colors"
              style={{ backgroundColor: "#C38335" }}
            >
              {t("cta")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Franja de swatches de color */}
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

      {/* ── ORIGEN + COMPUESTO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Origen */}
            <div className="group bg-[#F5F1EA] hover:bg-[#282625] rounded-2xl p-8 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: "rgba(89,105,67,0.12)" }}>
                  <MapPin size={18} className="text-[#596943] group-hover:text-[#C38335] transition-colors duration-300" />
                </div>
                <h2 className="font-bold text-[#282625] group-hover:text-white transition-colors duration-300">
                  {t("origen_title")}
                </h2>
              </div>
              <p className="text-gray-600 group-hover:text-[#F5F1EA]/75 text-sm leading-relaxed transition-colors duration-300">
                {t("origen_body")}
              </p>
            </div>

            {/* Compuesto activo */}
            <div className="group bg-[#F5F1EA] hover:bg-[#5A102D] rounded-2xl p-8 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: "rgba(90,16,45,0.10)" }}>
                  <FlaskConical size={18} className="text-[#5A102D] group-hover:text-[#C38335] transition-colors duration-300" />
                </div>
                <h2 className="font-bold text-[#282625] group-hover:text-white transition-colors duration-300">
                  {t("compuesto_title")}
                </h2>
              </div>
              <p className="text-gray-600 group-hover:text-[#F5F1EA]/75 text-sm leading-relaxed transition-colors duration-300">
                {t("compuesto_body")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ¿POR QUÉ COLORANTE NATURAL? ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#282625" }}>
        {/* Mesh de calor — tonos de la paleta */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 60% 70% at 75% 50%, rgba(90,16,45,0.45) 0%, transparent 55%),
              radial-gradient(ellipse 40% 50% at 10% 30%, rgba(195,131,53,0.15) 0%, transparent 50%)
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
              <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: "#C38335" }}>
                <span className="w-6 h-px" style={{ backgroundColor: "#C38335" }} />
                Clean Label
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
                {t("why_title")}
              </h2>
              <ul className="space-y-4">
                {whyItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: "#C38335" }} />
                    <span className="text-sm leading-relaxed" style={{ color: "rgba(245,241,234,0.80)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bloque de datos */}
            <div className="grid grid-cols-1 gap-5">
              <div
                className="rounded-2xl p-8 text-center"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(245,241,234,0.10)" }}
              >
                <div className="text-7xl font-black mb-2 leading-none" style={{ color: "#C38335" }}>
                  ~8%
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,241,234,0.70)" }}>
                  CAGR del mercado de colorantes naturales
                  <br />
                  <span className="text-xs" style={{ color: "rgba(245,241,234,0.40)" }}>Mordor Intelligence, 2023–2028</span>
                </p>
              </div>
              <div
                className="rounded-2xl p-6 text-center"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(245,241,234,0.08)" }}
              >
                <div className="text-4xl font-bold text-white mb-1">USD 2.000M+</div>
                <p className="text-sm" style={{ color: "rgba(245,241,234,0.60)" }}>Mercado global de colorantes naturales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APLICACIONES + ESPECIFICACIONES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Aplicaciones */}
            <div>
              <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#596943" }}>
                <span className="w-6 h-px" style={{ backgroundColor: "#596943" }} />
                {t("apps_title")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#282625] mb-8 leading-tight">
                Un colorante,<br />múltiples industrias
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {appItems.map((app, i) => (
                  <AppCard key={i} app={app} />
                ))}
              </div>
            </div>

            {/* Especificaciones técnicas */}
            <div
              className="rounded-2xl p-8 text-white relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #5A102D 0%, #2B0920 100%)" }}
            >
              <div className="absolute top-[-30px] right-[-30px] w-40 h-40 rounded-full border border-white/10" />
              <div className="absolute top-2 right-2 w-20 h-20 rounded-full" style={{ border: "1px solid rgba(245,241,234,0.08)" }} />

              <h3 className="font-bold text-lg mb-7 relative">{t("spec_title")}</h3>
              <dl className="space-y-5 relative">
                {[
                  { key: "Formato",  val: t("spec_format") },
                  { key: "Color",    val: t("spec_color") },
                  { key: "Fuente",   val: t("spec_source") },
                  { key: "Origen",   val: t("spec_origin") },
                ].map(({ key, val }) => (
                  <div
                    key={key}
                    className="flex items-start justify-between gap-4 pb-5 last:pb-0"
                    style={{ borderBottom: "1px solid rgba(245,241,234,0.10)" }}
                  >
                    <dt className="text-sm" style={{ color: "rgba(245,241,234,0.60)" }}>{key}</dt>
                    <dd className="text-sm font-semibold text-right">{val}</dd>
                  </div>
                ))}
              </dl>

              {/* Badges de certificación */}
              <div className="mt-7 pt-6" style={{ borderTop: "1px solid rgba(245,241,234,0.10)" }}>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { Icon: WheatOff,    label: "Sin Gluten",                    color: "#C5CCB5" },
                    { Icon: Sprout,      label: "Sin OGM · No transgénico",      color: "#596943" },
                    { Icon: Leaf,        label: "Natural",                        color: "#C38335" },
                    { Icon: ShieldCheck, label: "Sin BSE-TSE · Libre de proteína animal de riesgo", color: "#D7C4A8" },
                  ].map(({ Icon, label, color }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2.5"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(245,241,234,0.12)",
                      }}
                    >
                      <Icon size={15} style={{ color, flexShrink: 0 }} />
                      <span className="text-xs font-semibold" style={{ color: "rgba(245,241,234,0.90)" }}>
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

      {/* ── FAQ ── */}
      <FaqSection
        title={t("faq_title")}
        accentColor="#5A102D"
        items={[
          { q: t("faq_q1"), a: t("faq_a1") },
          { q: t("faq_q2"), a: t("faq_a2") },
          { q: t("faq_q3"), a: t("faq_a3") },
          { q: t("faq_q4"), a: t("faq_a4") },
          { q: t("faq_q5"), a: t("faq_a5") },
        ]}
      />

      {/* ── CTA FINAL ── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#F5F1EA" }}>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "#5A102D" }}>
            <span className="w-6 h-px" style={{ backgroundColor: "#5A102D" }} />
            {t("tag")}
            <span className="w-6 h-px" style={{ backgroundColor: "#5A102D" }} />
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#282625] mb-5">
            {t("name")}
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">{t("intro")}</p>
          <Link
            href={`/${locale}/contacto`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-colors hover:opacity-90"
            style={{ backgroundColor: "#5A102D" }}
          >
            {t("cta")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
