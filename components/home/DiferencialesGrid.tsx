import { useTranslations } from "next-intl";
import SectionHeader from "@/components/shared/SectionHeader";

const PHOTOS = [
  "https://images.unsplash.com/photo-1756361946520-4aaa1d855013?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486825586573-7131f7991bdd?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1749006590324-d6b2e90ab1c0?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1638262052640-82e94d64664a?w=600&q=80&auto=format&fit=crop",
];

const ACCENTS = ["#1B3A6B", "#3A7D44", "#1E3A5F", "#7A5C10"];
const NUMBERS = ["01", "02", "03", "04"];

export default function DiferencialesGrid() {
  const t = useTranslations("home.diferencial");

  const items = [
    { title: t("d1_title"), body: t("d1_body") },
    { title: t("d2_title"), body: t("d2_body") },
    { title: t("d3_title"), body: t("d3_body") },
    { title: t("d4_title"), body: t("d4_body") },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blob */}
      <div
        className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(27,58,107,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeader eyebrow={t("eyebrow")} headline={t("headline")} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
            >
              {/* Photo panel */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${PHOTOS[i]})` }}
                />
                {/* Brand color gradient overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-50 group-hover:opacity-65"
                  style={{
                    background: `linear-gradient(160deg, ${ACCENTS[i]}cc 0%, transparent 60%)`,
                  }}
                />
                {/* Dark bottom fade for number legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Number */}
                <span className="absolute bottom-3 left-4 text-4xl font-black text-white/25 leading-none select-none">
                  {NUMBERS[i]}
                </span>

                {/* Accent dot */}
                <span
                  className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: ACCENTS[i] === "#7A5C10" ? "#C9A84C" : ACCENTS[i] === "#3A7D44" ? "#3A7D44" : "#C9A84C" }}
                />
              </div>

              {/* Content */}
              <div
                className="p-6 border-t-2 transition-colors duration-300"
                style={{ borderColor: ACCENTS[i] + "33" }}
              >
                <h3 className="font-bold text-[#1B3A6B] mb-2 group-hover:text-[#1B3A6B] leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
