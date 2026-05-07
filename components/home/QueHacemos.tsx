import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { FlaskConical, Factory, TrendingUp, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

export default function QueHacemos() {
  const t = useTranslations("home.que_hacemos");
  const locale = useLocale();

  const bloques = [
    { icon: FlaskConical, color: "#1B3A6B", bg: "#1B3A6B18", key: "b1" },
    { icon: Factory,      color: "#3A7D44", bg: "#3A7D4418", key: "b2" },
    { icon: TrendingUp,   color: "#C9A84C", bg: "#C9A84C18", key: "b3" },
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

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeader eyebrow={t("eyebrow")} headline={t("headline")} body={t("body")} />
        </div>

        {/* ── Mobile: vertical cards ── */}
        <div className="md:hidden grid grid-cols-1 gap-5 mb-10">
          {bloques.map((b, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: b.bg }}>
                <b.icon size={20} style={{ color: b.color }} />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1B3A6B] mb-1">{t(`${b.key}_title`)}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t(`${b.key}_body`)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Desktop: hub diagram ── */}
        {/*
          Layout (in 860×500px container):
            • [Conocimiento Científico]  top=20, center-x=430  → bottom≈205
            • [Procesos Productivos]     top=112 (= mid of card1 ≈ 20+92), left=16
            • [Necesidades del Mercado]  top=112, right=16
            • ( qualab logo circle )     bottom-center, top=390, r=60

          SVG lines from circle top-edge (430,330) toward each card:
            → top card bottom center  (430, 205)  — vertical
            → left card right-center  (~208, 205) — diagonal left
            → right card left-center  (~652, 205) — diagonal right
        */}
        <div className="hidden md:flex justify-center mb-12">
          <div className="relative w-full" style={{ height: "500px", maxWidth: "860px" }}>

            {/* SVG lines */}
            <svg
              className="absolute inset-0 pointer-events-none"
              width="100%" height="100%"
              viewBox="0 0 860 500"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* → Conocimiento Científico (vertical up) */}
              <line x1="430" y1="330" x2="430" y2="207"
                stroke="#1B3A6B" strokeWidth="2" strokeDasharray="7 5" strokeOpacity="0.4" />

              {/* → Procesos Productivos (diagonal left) */}
              <line x1="380" y1="348" x2="208" y2="210"
                stroke="#3A7D44" strokeWidth="2" strokeDasharray="7 5" strokeOpacity="0.4" />

              {/* → Necesidades del Mercado (diagonal right) */}
              <line x1="480" y1="348" x2="652" y2="210"
                stroke="#E87B18" strokeWidth="2" strokeDasharray="7 5" strokeOpacity="0.4" />

              {/* Midpoint dots */}
              <circle cx="430" cy="268" r="4.5" fill="#1B3A6B" fillOpacity="0.22" />
              <circle cx="294" cy="279" r="4.5" fill="#3A7D44" fillOpacity="0.22" />
              <circle cx="566" cy="279" r="4.5" fill="#E87B18" fillOpacity="0.22" />
            </svg>

            {/* Card 1 — Conocimiento Científico (top center) */}
            <div className="absolute" style={{ left: "50%", top: "20px", transform: "translateX(-50%)" }}>
              <div className="w-52 bg-white rounded-2xl p-5 shadow-md border border-[#1B3A6B]/12 text-center">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "#1B3A6B15" }}>
                  <FlaskConical size={20} style={{ color: "#1B3A6B" }} />
                </div>
                <div className="w-6 h-0.5 rounded-full mx-auto mb-2" style={{ backgroundColor: "#1B3A6B" }} />
                <h3 className="text-[11px] font-bold text-[#1B3A6B] leading-snug mb-1.5">{t("b1_title")}</h3>
                <p className="text-[10px] text-gray-400 leading-relaxed">{t("b1_body")}</p>
              </div>
            </div>

            {/* Card 2 — Procesos Productivos (left, top = mid of card 1) */}
            <div className="absolute" style={{ left: "16px", top: "112px" }}>
              <div className="w-52 bg-white rounded-2xl p-5 shadow-md border border-[#3A7D44]/12 text-center">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "#3A7D4415" }}>
                  <Factory size={20} style={{ color: "#3A7D44" }} />
                </div>
                <div className="w-6 h-0.5 rounded-full mx-auto mb-2" style={{ backgroundColor: "#3A7D44" }} />
                <h3 className="text-[11px] font-bold text-[#1B3A6B] leading-snug mb-1.5">{t("b2_title")}</h3>
                <p className="text-[10px] text-gray-400 leading-relaxed">{t("b2_body")}</p>
              </div>
            </div>

            {/* Card 3 — Necesidades del Mercado (right, same top as card 2) */}
            <div className="absolute" style={{ right: "16px", top: "112px" }}>
              <div className="w-52 bg-white rounded-2xl p-5 shadow-md border border-[#E87B18]/15 text-center">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "#E87B1812" }}>
                  <TrendingUp size={20} style={{ color: "#E87B18" }} />
                </div>
                <div className="w-6 h-0.5 rounded-full mx-auto mb-2" style={{ backgroundColor: "#E87B18" }} />
                <h3 className="text-[11px] font-bold text-[#1B3A6B] leading-snug mb-1.5">{t("b3_title")}</h3>
                <p className="text-[10px] text-gray-400 leading-relaxed">{t("b3_body")}</p>
              </div>
            </div>

            {/* Qualab logo circle — bottom center */}
            <div className="absolute" style={{ left: "50%", top: "390px", transform: "translate(-50%, -50%)" }}>
              <div
                className="w-36 h-36 rounded-full flex items-center justify-center shadow-xl border border-gray-100"
                style={{ background: "white" }}
              >
                <Image
                  src="/logo-qualab.png"
                  alt="Qualab"
                  width={108}
                  height={40}
                  className="object-contain w-28"
                  priority
                />
              </div>
            </div>

          </div>
        </div>

        {/* ── Callout banner ── */}
        <div className="rounded-2xl bg-[#1B3A6B] overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center gap-6 px-8 py-7">
            <div className="shrink-0 w-14 h-14 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center text-2xl select-none">
              🍇
            </div>
            <p className="text-white/90 text-base sm:text-lg font-medium leading-snug text-center sm:text-left flex-1">
              {t("cierre")}
            </p>
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
