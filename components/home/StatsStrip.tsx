import { useTranslations } from "next-intl";

export default function StatsStrip() {
  const t = useTranslations("home.stats");
  const tp = useTranslations("home.problem");

  const stats = [
    { value: t("value1"), label: t("label1") },
    { value: t("value2"), label: t("label2") },
    { value: t("value3"), label: t("label3") },
  ];

  return (
    <>
    {/* Encabezado del bloque — coherente con los demás */}
    <div className="bg-[#F5F1EA] pt-14 pb-9">
      <div className="text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase" style={{ color: "#C38335" }}>
          <span className="w-6 h-px" style={{ backgroundColor: "#C38335" }} />
          {tp("eyebrow")}
          <span className="w-6 h-px" style={{ backgroundColor: "#C38335" }} />
        </p>
      </div>
    </div>

    <section className="relative bg-[#5A102D] py-8 overflow-hidden">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative large circle */}
      <div
        className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #C38335, transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
          {stats.map((stat, i) => (
            <div key={i} className="text-center py-8 sm:py-2 sm:px-10">
              <div className="text-5xl sm:text-6xl font-bold text-white mb-3 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm leading-relaxed max-w-52 mx-auto" style={{ color: "rgba(245,241,234,0.70)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave to white */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-12 block"
        >
          <path
            d="M0,20 C480,60 960,0 1440,30 L1440,60 L0,60 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
    </>
  );
}
