import Link from "next/link";
import { ArrowRight, MapPin, Leaf } from "lucide-react";

interface IngredientPageProps {
  tag?: string;
  name: string;
  headline: string;
  intro: string;
  origenTitle: string;
  origenBody: string;
  appsTitle: string;
  apps: string[];
  specTitle: string;
  specs: { key: string; val: string }[];
  cta: string;
  contactHref: string;
  accentColor: string;
  heroBg?: string;
}

export default function IngredientPage({
  tag,
  name,
  headline,
  intro,
  origenTitle,
  origenBody,
  appsTitle,
  apps,
  specTitle,
  specs,
  cta,
  contactHref,
  accentColor,
  heroBg,
}: IngredientPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 overflow-hidden relative" style={{ backgroundColor: accentColor }}>
        {heroBg && (
          <>
            <div
              className="absolute inset-0 opacity-60"
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
                background: `linear-gradient(100deg, ${accentColor}dd 0%, ${accentColor}aa 45%, ${accentColor}60 70%, transparent 100%)`,
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white font-semibold text-sm hover:bg-gray-100 transition-colors"
              style={{ color: accentColor }}
            >
              {cta} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="py-16 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${accentColor}20` }}>
              <MapPin size={20} style={{ color: accentColor }} />
            </div>
            <div>
              <h2 className="font-bold text-[#1B3A6B] mb-2">{origenTitle}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{origenBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Apps + Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Applications */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#3A7D44] mb-3">
                {appsTitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {apps.map((app, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#F5F0E8] rounded-xl px-4 py-3">
                    <Leaf size={14} className="text-[#3A7D44] shrink-0" />
                    <span className="text-sm text-gray-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="rounded-2xl p-8 text-white" style={{ backgroundColor: accentColor }}>
              <h3 className="font-bold text-lg mb-6">{specTitle}</h3>
              <dl className="space-y-4">
                {specs.map(({ key, val }) => (
                  <div key={key} className="flex justify-between gap-4 border-b border-white/20 pb-4 last:border-0 last:pb-0">
                    <dt className="text-sm text-white/70">{key}</dt>
                    <dd className="text-sm font-medium text-right">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F5F0E8] text-center">
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
