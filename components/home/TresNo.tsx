import { useTranslations } from "next-intl";

const ACCENTS = [
  { border: "#1B3A6B", bg: "#1B3A6B", label: "NO-MERCADO" },
  { border: "#3A7D44", bg: "#3A7D44", label: "NO-BIOMASA" },
  { border: "#C9A84C", bg: "#C9A84C", label: "NO-INNOVACIÓN" },
];

export default function TresNo() {
  const t = useTranslations("home.tres_no");

  const cards = [
    { ...ACCENTS[0], title: t("n1_title"), body: t("n1_body") },
    { ...ACCENTS[1], title: t("n2_title"), body: t("n2_body") },
    { ...ACCENTS[2], title: t("n3_title"), body: t("n3_body") },
  ];

  return (
    <section className="py-24 bg-[#0F2347] relative overflow-hidden">
      {/* Gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 50% 60% at 15% 50%, rgba(58,125,68,0.18) 0%, transparent 55%),
            radial-gradient(ellipse 40% 50% at 85% 30%, rgba(201,168,76,0.12) 0%, transparent 50%)
          `,
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-5">
            <span className="w-6 h-px bg-[#C9A84C]" />
            {t("eyebrow")}
            <span className="w-6 h-px bg-[#C9A84C]" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            {t("headline")}
          </h2>
        </div>

        {/* 3 NO Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-8 overflow-hidden group hover:-translate-y-1 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${c.border}40`,
              }}
            >
              {/* Top accent bar */}
              <div
                className="w-full h-1 rounded-full mb-8"
                style={{ backgroundColor: c.bg }}
              />

              {/* Label badge */}
              <span
                className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full mb-5 text-white"
                style={{ backgroundColor: c.bg + "30", border: `1px solid ${c.bg}60` }}
              >
                {c.label}
              </span>

              <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                {c.title}
              </h3>
              <p className="text-blue-200/70 text-sm leading-relaxed">
                {c.body}
              </p>

              {/* Decorative number */}
              <div
                className="absolute bottom-4 right-6 text-6xl font-black opacity-10 leading-none select-none"
                style={{ color: c.bg }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* Closing message */}
        <div className="mt-14 text-center max-w-2xl mx-auto">
          <p className="text-blue-200/80 text-base leading-relaxed italic">
            "{t("cierre")}"
          </p>
        </div>
      </div>
    </section>
  );
}
