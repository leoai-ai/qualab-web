import type { Metadata } from "next";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, Sparkles, Clock, Feather, Droplets, CupSoda, Candy, Milk, Croissant, IceCreamCone, Cookie } from "lucide-react";
import ColorantesGallery from "@/components/colorantes/ColorantesGallery";
import { COLORANTES } from "@/lib/colores";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isES = locale === "es";
  return {
    title: isES ? "Colorantes Naturales" : "Natural Colorants",
    description: isES
      ? "Gama completa de colorantes naturales para alimentos y bebidas: rojos, púrpuras, azules, amarillos, naranjas y más. La alternativa natural a los colorantes sintéticos."
      : "Full range of natural colorants for food and beverages: reds, purples, blues, yellows, oranges and more. The natural alternative to synthetic colorants.",
    openGraph: {
      title: isES ? "Colorantes Naturales | Qualab" : "Natural Colorants | Qualab",
      description: isES
        ? "Una gama completa de colores naturales para reemplazar los colorantes sintéticos."
        : "A complete range of natural colors to replace synthetic colorants.",
      siteName: "Qualab",
      type: "website",
    },
  };
}

export default function ColorantesPage() {
  const t = useTranslations("colorantes_page");
  const locale = useLocale();
  const lang = locale === "en" ? "en" : "es";

  const ventajas = [
    { Icon: Sparkles, key: "v1" },
    { Icon: Clock, key: "v2" },
    { Icon: Feather, key: "v3" },
    { Icon: Droplets, key: "v4" },
  ];

  const colorById = Object.fromEntries(COLORANTES.map((c) => [c.id, c]));
  const industrias = [
    { key: "i1", Icon: CupSoda, ids: ["rojo-rabano", "naranja", "amarillo-curcuma", "azul-spirulina", "purpura-uva"] },
    { key: "i2", Icon: Candy, ids: ["rojo-rabano", "naranja", "amarillo-curcuma", "butterfly-pea", "magenta"] },
    { key: "i3", Icon: Milk, ids: ["rojo-remolacha", "rosa", "amarillo-cartamo", "purpura-batata"] },
    { key: "i4", Icon: Croissant, ids: ["amarillo-curcuma", "amarillo-cartamo", "marron-zanahoria", "rojo-remolacha"] },
    { key: "i5", Icon: IceCreamCone, ids: ["rosa", "purpura-batata", "azul-spirulina", "butterfly-pea", "magenta"] },
    { key: "i6", Icon: Cookie, ids: ["naranja", "amarillo-curcuma", "amarillo-cartamo", "marron-zanahoria"] },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[58vh] sm:min-h-[68vh] flex items-start overflow-hidden bg-[#F5F1EA]">
        {/* Foto de fondo */}
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/colorantes-hero.jpg')", backgroundPosition: "center bottom" }}
        />
        {/* Scrim superior */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,241,234,0.85) 0%, rgba(245,241,234,0.45) 30%, rgba(245,241,234,0.05) 55%, transparent 72%)",
          }}
        />
        {/* Scrim izquierdo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(95deg, rgba(245,241,234,0.92) 0%, rgba(245,241,234,0.68) 30%, rgba(245,241,234,0.18) 52%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-12 sm:pt-36 sm:pb-16">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "#C38335" }}>
              {t("eyebrow")}
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.7rem] font-bold leading-[1.07] tracking-tight mb-6"
              style={{
                backgroundImage:
                  "linear-gradient(95deg, #482557 0%, #7A1834 28%, #B71D48 52%, #C2185B 68%, #E07030 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                width: "fit-content",
              }}
            >
              {t("headline")}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed max-w-xl mb-8" style={{ color: "#000000" }}>
              {t("intro")}
            </p>
            <a
              href="#gama"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#5A102D" }}
            >
              {t("hero_cta")} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTEXTO: tendencia clean label ── */}
      <section className="py-16" style={{ backgroundColor: "#2B0920" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl sm:text-2xl font-semibold leading-relaxed" style={{ color: "rgba(245,241,234,0.95)" }}>
            {t("trend")}
          </p>
          <p className="mt-4 text-sm" style={{ color: "rgba(245,241,234,0.55)" }}>
            {t("trend_source")}
          </p>
        </div>
      </section>

      {/* ── VENTAJAS — Tecnología Crystal ── */}
      <section className="relative py-20 overflow-hidden bg-[#F5F1EA]">
        {/* Foto de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/crystal-bg.jpg')" }}
        />
        {/* Velo claro para legibilidad */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(245,241,234,0.92) 0%, rgba(245,241,234,0.72) 45%, rgba(245,241,234,0.80) 100%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "#C38335" }}>
              <span className="w-6 h-px" style={{ backgroundColor: "#C38335" }} />
              Crystal
              <span className="w-6 h-px" style={{ backgroundColor: "#C38335" }} />
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#282625" }}>
              {t("ventajas_title")}
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed" style={{ color: "rgba(40,38,37,0.82)" }}>
              {t("ventajas_intro")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ventajas.map(({ Icon, key }) => (
              <div key={key} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#5A102D15" }}>
                  <Icon size={22} style={{ color: "#5A102D" }} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#282625" }}>{t(`${key}_title`)}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(40,38,37,0.65)" }}>{t(`${key}_body`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERÍA DE COLORES ── */}
      <section id="gama" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#282625" }}>{t("gallery_title")}</h2>
            <p className="text-base leading-relaxed" style={{ color: "rgba(40,38,37,0.65)" }}>{t("gallery_body")}</p>
          </div>
          <ColorantesGallery
            lang={lang}
            contactHref={`/${locale}/contacto`}
            labels={{
              todos: t("filtro_todos"),
              fuente: t("label_fuente"),
              aplicaciones: t("label_apps"),
              verFicha: t("ver_ficha"),
            }}
            modalLabels={{
              fuente: t("label_fuente"),
              pigmento: t("m_pigmento"),
              intensidad: t("m_intensidad"),
              ph: t("m_ph"),
              dosis: t("m_dosis"),
              formato: t("m_formato"),
              vidaUtil: t("m_vida"),
              aplicaciones: t("label_apps"),
              certificaciones: t("m_certs"),
              alternativa: t("m_alternativa"),
              cta: t("m_cta"),
              blendNote: t("m_blend_note"),
            }}
          />
        </div>
      </section>

      {/* ── INDUSTRIAS ── */}
      <section className="py-20 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#282625" }}>{t("industrias_title")}</h2>
            <p className="text-base leading-relaxed" style={{ color: "rgba(40,38,37,0.65)" }}>{t("industrias_body")}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industrias.map(({ key, Icon, ids }) => (
              <div
                key={key}
                className="group relative rounded-2xl min-h-[150px] overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg cursor-default border border-gray-100"
                style={{ backgroundColor: "#ffffff" }}
              >
                {/* Vista por defecto: ícono + nombre */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 transition-opacity duration-300 group-hover:opacity-0">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#5A102D15" }}>
                    <Icon size={24} style={{ color: "#5A102D" }} />
                  </div>
                  <span className="font-semibold text-sm text-center" style={{ color: "#282625" }}>{t(key)}</span>
                </div>

                {/* Hover: colorantes recomendados */}
                <div className="absolute inset-0 flex flex-col justify-center gap-1.5 p-4 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: "#C38335" }}>{t(key)}</p>
                  {ids.map((id) => {
                    const c = colorById[id];
                    if (!c) return null;
                    return (
                      <span key={id} className="inline-flex items-center gap-2 text-xs leading-tight" style={{ color: "rgba(40,38,37,0.80)" }}>
                        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: c.hex }} />
                        {c.nombre[lang]}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5" style={{ color: "#282625" }}>{t("cta_title")}</h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(40,38,37,0.65)" }}>{t("cta_body")}</p>
          <Link
            href={`/${locale}/contacto`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#5A102D" }}
          >
            {t("cta_button")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
