"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Leaf, FlaskConical, CheckCircle, WheatOff, Sprout, ShieldCheck } from "lucide-react";

const BADGE_ICONS: Record<string, React.ElementType> = {
  WheatOff,
  Sprout,
  Leaf,
  ShieldCheck,
};

interface Badge {
  iconName: string;
  label: string;
  color: string;
}

interface IngredientPageProps {
  tag?: string;
  name: string;
  headline: string;
  intro: string;
  origenTitle: string;
  origenBody: string;
  compuestoTitle?: string;
  compuestoBody?: string;
  whyTitle?: string;
  whyItems?: string[];
  appsTitle: string;
  apps: string[];
  specTitle: string;
  specs: { key: string; val: string }[];
  badges?: Badge[];
  cta: string;
  contactHref: string;
  accentColor: string;
  heroBg?: string;
}

function AppCard({ app, accentColor }: { app: string; accentColor: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 cursor-default"
      style={{ backgroundColor: hovered ? accentColor : "#F5F1EA" }}
    >
      <Leaf
        size={14}
        className="shrink-0 transition-colors duration-200"
        style={{ color: hovered ? "rgba(245,241,234,0.85)" : accentColor }}
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

export default function IngredientPage({
  tag,
  name,
  headline,
  intro,
  origenTitle,
  origenBody,
  compuestoTitle,
  compuestoBody,
  whyTitle,
  whyItems,
  appsTitle,
  apps,
  specTitle,
  specs,
  badges,
  cta,
  contactHref,
  accentColor,
  heroBg,
}: IngredientPageProps) {
  return (
    <>
      {/* Hero — fondo grafito con tinte de acento según manual */}
      <section className="pt-16 overflow-hidden relative" style={{ backgroundColor: "#282625" }}>
        {heroBg && (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(100deg, rgba(40,38,37,0.88) 0%, rgba(40,38,37,0.60) 45%, rgba(40,38,37,0.20) 70%, transparent 100%)`,
              }}
            />
          </>
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
          <div className="max-w-2xl">
            {tag && (
              <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full mb-6">
                {tag}
              </span>
            )}
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4">
              {headline}
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">{intro}</p>
            <Link
              href={contactHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: accentColor }}
            >
              {cta} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Origen */}
      <section className="py-16 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${accentColor}20` }}>
              <MapPin size={20} style={{ color: accentColor }} />
            </div>
            <div>
              <h2 className="font-bold text-[#282625] mb-2">{origenTitle}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{origenBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compuesto activo */}
      {compuestoTitle && compuestoBody && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 max-w-2xl">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${accentColor}20` }}>
                <FlaskConical size={20} style={{ color: accentColor }} />
              </div>
              <div>
                <h2 className="font-bold text-[#282625] mb-2">{compuestoTitle}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{compuestoBody}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Por qué elegirlo */}
      {whyTitle && whyItems && whyItems.length > 0 && (
        <section className="py-16 bg-[#F5F1EA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#282625] mb-8">{whyTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
              {whyItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 shadow-sm">
                  <CheckCircle size={18} style={{ color: accentColor }} className="shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Apps + Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Aplicaciones */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: accentColor }}>
                {appsTitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {apps.map((app, i) => (
                  <AppCard key={i} app={app} accentColor={accentColor} />
                ))}
              </div>
            </div>

            {/* Specs — fondo grafito según manual */}
            <div className="rounded-2xl p-8 text-white" style={{ backgroundColor: "#282625" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 rounded-full" style={{ backgroundColor: accentColor }} />
                <h3 className="font-bold text-lg">{specTitle}</h3>
              </div>
              <dl className="space-y-4">
                {specs.map(({ key, val }) => (
                  <div key={key} className="flex justify-between gap-4 pb-4 last:pb-0" style={{ borderBottom: "1px solid rgba(245,241,234,0.10)" }}>
                    <dt className="text-sm" style={{ color: "rgba(245,241,234,0.60)" }}>{key}</dt>
                    <dd className="text-sm font-medium text-right" style={{ color: "rgba(245,241,234,0.95)" }}>{val}</dd>
                  </div>
                ))}
              </dl>

              {/* Badges de certificación */}
              {badges && badges.length > 0 && (
                <div className="mt-7 pt-6" style={{ borderTop: "1px solid rgba(245,241,234,0.10)" }}>
                  <div className="grid grid-cols-2 gap-3">
                    {badges.map(({ iconName, label, color }) => {
                      const Icon = BADGE_ICONS[iconName] ?? Leaf;
                      return (
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
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F5F1EA] text-center">
        <Link
          href={contactHref}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
          style={{ backgroundColor: accentColor }}
        >
          {cta} <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
