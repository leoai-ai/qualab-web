import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Snowflake, Clock, Sparkles, Droplets, ShieldCheck, Layers, Leaf, WheatOff, Sprout } from "lucide-react";
import PaletteGallery from "@/components/industrias/PaletteGallery";
import HoverZoomCard from "@/components/industrias/HoverZoomCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isES = locale !== "en";
  return {
    title: isES ? "Golosinas y Confitería" : "Gummies & Confectionery",
    description: isES
      ? "Colorantes naturales de origen vitivinícola para golosinas: color estable, etiqueta limpia y performance. Alternativa natural a los colorantes sintéticos."
      : "Natural colorants of viticultural origin for candy: stable color, clean label and performance. The natural alternative to synthetic dyes.",
    openGraph: {
      title: isES ? "Golosinas y Confitería | Qualab" : "Gummies & Confectionery | Qualab",
      siteName: "Qualab",
      type: "website",
    },
  };
}

type Loc = { es: string; en: string };
type Palette = { name: Loc; hex: string; img: string; colorId: string };

const PALETTE: Palette[] = [
  { name: { es: "Púrpura Uva", en: "Grape Purple" }, hex: "#6A1F74", img: "purpurauva", colorId: "purpura-uva" },
  { name: { es: "Púrpura Batata", en: "Sweet Potato Purple" }, hex: "#6E2585", img: "purpuretabatata", colorId: "purpura-batata" },
  { name: { es: "Rojo Rábano", en: "Radish Red" }, hex: "#DA291C", img: "rojorabano", colorId: "rojo-rabano" },
  { name: { es: "Naranja RT", en: "Orange RT" }, hex: "#FF6900", img: "naranajRT", colorId: "naranja" },
  { name: { es: "Amarillo T", en: "Turmeric Yellow" }, hex: "#FFC72C", img: "amarrilloT", colorId: "amarillo-curcuma" },
  { name: { es: "Azul Espirulina", en: "Spirulina Blue" }, hex: "#00A3E0", img: "azul", colorId: "azul-spirulina" },
  { name: { es: "Púrpura Zanahoria", en: "Carrot Purple" }, hex: "#9A2D7A", img: "purpurazanahoria", colorId: "zanahoria-purpura" },
  { name: { es: "Rojo Zanahoria", en: "Carrot Red" }, hex: "#D81E34", img: "rojozanahoria", colorId: "zanahoria-roja" },
  { name: { es: "Marrón Zanahoria", en: "Carrot Brown" }, hex: "#8B4720", img: "marronzanahoria", colorId: "marron-zanahoria" },
];

const BENEFITS: { icon: React.ElementType; label: Loc }[] = [
  { icon: Snowflake, label: { es: "Sin refrigeración", en: "No refrigeration" } },
  { icon: Clock, label: { es: "5 años de vida útil", en: "5-year shelf life" } },
  { icon: Sparkles, label: { es: "Alta densidad de pigmento", en: "High pigment density" } },
  { icon: Droplets, label: { es: "Solubilidad inmediata", en: "Immediate solubility" } },
  { icon: ShieldCheck, label: { es: "No higroscópico", en: "Non-hygroscopic" } },
  { icon: Layers, label: { es: "Sin carriers", en: "Carrier-free" } },
];

const BADGES: { icon: React.ElementType; label: Loc }[] = [
  { icon: Leaf, label: { es: "100% Natural", en: "100% Natural" } },
  { icon: WheatOff, label: { es: "Sin Gluten", en: "Gluten Free" } },
  { icon: Sprout, label: { es: "Apto Vegano", en: "Vegan-friendly" } },
  { icon: ShieldCheck, label: { es: "Sin Alérgenos", en: "Allergen Free" } },
];

const COMPLIANCE: { region: Loc; code: string }[] = [
  { region: { es: "Estados Unidos", en: "United States" }, code: "21 CFR 73.250" },
  { region: { es: "Unión Europea", en: "European Union" }, code: "E163" },
  { region: { es: "Argentina", en: "Argentina" }, code: "E163" },
];

const T = {
  es: {
    hero_eyebrow: "Golosinas y Confitería",
    hero_headline: "Color natural con la performance que tus golosinas necesitan.",
    hero_subtitle:
      "Reemplazá los colorantes sintéticos por pigmentos de origen natural: estables, de etiqueta limpia y sin resignar color ni desempeño.",
    cta: "Hablemos de tu proyecto",
    ctx_eyebrow: "El color natural ya no es una opción",
    ctx_headline: "Es un requisito inevitable.",
    ctx_body:
      "Las regulaciones avanzan sobre los colorantes sintéticos y el consumidor exige etiquetas más limpias. Pasar a color natural dejó de ser una tendencia: es una necesidad competitiva.",
    drivers: [
      { t: "Regulaciones", d: "Restricciones y prohibiciones crecientes a los colorantes sintéticos." },
      { t: "Etiqueta limpia", d: "El consumidor elige productos naturales, transparentes y con propósito." },
      { t: "Sin resignar impacto", d: "Color vibrante y estable, a la altura de lo que espera tu marca." },
    ],
    pal_eyebrow: "Paleta",
    pal_headline: "Una gama pensada para golosinas",
    pal_body: "Del rojo al azul, tonos naturales que rinden en gomitas, caramelos y confites — con dosis optimizadas para cada matriz.",
    tech_eyebrow: "Tecnología Crystal",
    tech_headline: "Color natural que rinde.",
    tech_body:
      "No vendemos ingredientes: hacemos que funcionen. Concentramos el pigmento en cristales puros para un desempeño estable en las matrices más exigentes.",
    red_title: "Resolvemos el desafío del rojo",
    red_body:
      "Las fuentes clásicas —como el hibisco— tienen moléculas simples que viran a marrón con el oxígeno, la luz y el calor. Nuestra tecnología aísla antocianinas más complejas que actúan como un escudo del color: retención superior del rojo brillante y menor viraje a marrón en góndola.",
    label_eyebrow: "Pensado para tu etiqueta",
    label_headline: "Natural, seguro y en regla.",
    label_body: "Cada colorante cumple con los estándares de etiqueta limpia y los marcos regulatorios de los principales mercados.",
    compliance_label: "Cumplimiento regulatorio",
    final_headline: "¿Listo para pasar tus golosinas a color natural?",
    final_body:
      "Contanos qué producto estás desarrollando y armamos una solución de color a medida, con soporte técnico y respaldo científico.",
  },
  en: {
    hero_eyebrow: "Gummies & Confectionery",
    hero_headline: "Natural color with the performance your candy needs.",
    hero_subtitle:
      "Replace synthetic dyes with pigments of natural origin: stable, clean-label, and with no compromise on color or performance.",
    cta: "Let's discuss your project",
    ctx_eyebrow: "Natural color is no longer an option",
    ctx_headline: "It's an inevitable requirement.",
    ctx_body:
      "Regulations are tightening around synthetic dyes and consumers demand cleaner labels. Switching to natural color is no longer a trend — it's a competitive necessity.",
    drivers: [
      { t: "Regulation", d: "Growing restrictions and bans on synthetic dyes." },
      { t: "Clean label", d: "Consumers choose natural, transparent products with purpose." },
      { t: "No compromise", d: "Vibrant, stable color, worthy of your brand." },
    ],
    pal_eyebrow: "Palette",
    pal_headline: "A range designed for candy",
    pal_body: "From red to blue, natural shades that perform in gummies, hard candy and confections — with doses optimized for each matrix.",
    tech_eyebrow: "Crystal Technology",
    tech_headline: "Natural color that performs.",
    tech_body:
      "We don't sell ingredients — we make them work. We concentrate pigment into pure crystals for stable performance in the most demanding matrices.",
    red_title: "We solve the red challenge",
    red_body:
      "Classic sources — such as hibiscus — have simple molecules that shift to brown with oxygen, light and heat. Our technology isolates more complex anthocyanins that act as a color shield: superior retention of bright red and less browning on the shelf.",
    label_eyebrow: "Built for your label",
    label_headline: "Natural, safe and compliant.",
    label_body: "Every colorant meets clean-label standards and the regulatory frameworks of the main markets.",
    compliance_label: "Regulatory compliance",
    final_headline: "Ready to move your candy to natural color?",
    final_body:
      "Tell us what product you're developing and we'll build a tailor-made color solution, with technical support and scientific backing.",
  },
};

export default async function GolosinasConfiteriaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang: "es" | "en" = locale === "en" ? "en" : "es";
  const c = T[lang];
  const contactHref = `/${locale}/contacto`;

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[56vh] flex items-start overflow-hidden bg-[#F5F1EA]">
        {/* Foto de fondo (placeholder: /public/industrias/golosinas-hero.jpg) */}
        <div
          className="absolute inset-0 bg-cover bg-right hidden md:block"
          style={{ backgroundImage: "url('/industrias/golosinas-hero.jpg')" }}
        />
        {/* Velo claro para legibilidad del texto */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(95deg, rgba(245,241,234,0.96) 0%, rgba(245,241,234,0.78) 34%, rgba(245,241,234,0.30) 58%, transparent 78%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 sm:pt-36">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#C38335" }}>
              {c.hero_eyebrow}
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight mb-5"
              style={{
                backgroundImage: "linear-gradient(95deg, #5C2D6B 0%, #5A102D 55%, #7A1834 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                width: "fit-content",
              }}
            >
              {c.hero_headline}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed max-w-lg mb-8" style={{ color: "#282625" }}>
              {c.hero_subtitle}
            </p>
            <Link
              href={contactHref}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-white text-sm font-semibold shadow-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#5A102D" }}
            >
              {c.cta} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTEXTO ── */}
      <section className="py-16" style={{ backgroundColor: "#2B0920" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C38335" }}>
            {c.ctx_eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-white">{c.ctx_headline}</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: "rgba(245,241,234,0.75)" }}>
            {c.ctx_body}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10 text-left">
            {c.drivers.map((d) => (
              <HoverZoomCard
                key={d.t}
                className="rounded-2xl p-6 cursor-default"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(245,241,234,0.12)" }}
              >
                <p className="font-bold text-white mb-1.5">{d.t}</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,241,234,0.7)" }}>{d.d}</p>
              </HoverZoomCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── PALETA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C38335" }}>{c.pal_eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#282625" }}>{c.pal_headline}</h2>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(40,38,37,0.65)" }}>{c.pal_body}</p>
          </div>
          <PaletteGallery lang={lang} contactHref={contactHref} items={PALETTE} />
        </div>
      </section>

      {/* ── TECNOLOGÍA CRYSTAL ── */}
      <section className="relative py-20 overflow-hidden bg-[#F5F1EA]">
        {/* Foto de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/industrias/fondo1.jpg')" }}
        />
        {/* Velo claro para legibilidad */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(245,241,234,0.55)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C38335" }}>{c.tech_eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#282625" }}>{c.tech_headline}</h2>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(40,38,37,0.65)" }}>{c.tech_body}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Beneficios */}
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {BENEFITS.map(({ icon: Icon, label }) => (
                <div key={label.es} className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#5A102D15" }}>
                    <Icon size={20} style={{ color: "#5A102D" }} />
                  </div>
                  <span className="text-sm font-semibold leading-snug" style={{ color: "#282625" }}>{label[lang]}</span>
                </div>
              ))}
            </div>

            {/* Estabilidad del rojo — destacado */}
            <div className="rounded-2xl p-7 text-white h-full flex flex-col justify-center" style={{ backgroundColor: "#5A102D" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(255,255,255,0.14)" }}>
                <ShieldCheck size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{c.red_title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(245,241,234,0.82)" }}>{c.red_body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ETIQUETA + CUMPLIMIENTO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C38335" }}>{c.label_eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#282625" }}>{c.label_headline}</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: "rgba(40,38,37,0.65)" }}>{c.label_body}</p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {BADGES.map(({ icon: Icon, label }) => (
              <span key={label.es} className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold" style={{ backgroundColor: "#59694312", color: "#3f4a2e" }}>
                <Icon size={16} /> {label[lang]}
              </span>
            ))}
          </div>

          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "#C38335" }}>{c.compliance_label}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {COMPLIANCE.map((r) => (
              <div key={r.region.es} className="rounded-2xl border border-gray-100 bg-[#F5F1EA] px-5 py-5">
                <div className="text-sm font-semibold" style={{ color: "#282625" }}>{r.region[lang]}</div>
                <div className="text-sm mt-1" style={{ color: "rgba(40,38,37,0.6)" }}>{r.code}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 text-center bg-[#F5F1EA]">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5" style={{ color: "#282625" }}>{c.final_headline}</h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(40,38,37,0.65)" }}>{c.final_body}</p>
          <Link
            href={contactHref}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#5A102D" }}
          >
            {c.cta} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
