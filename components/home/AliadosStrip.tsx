import { useTranslations } from "next-intl";

const aliados = [
  "Familia Catena",
  "UC Davis",
  "Catena Institute of Wine",
  "CAB Startup",
  "Vistage",
  "INTI Mendoza",
];

export default function AliadosStrip() {
  const t = useTranslations("home.aliados");

  return (
    <section className="py-16 bg-[#F5F0E8] relative overflow-hidden">
      {/* Subtle top border line */}
      <div className="absolute top-0 left-8 right-8 h-px bg-[#1B3A6B]/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#1B3A6B]/40 text-center mb-10">
          {t("eyebrow")}
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-5">
          {aliados.map((name, i) => (
            <span
              key={i}
              className="text-sm font-semibold text-[#1B3A6B]/35 hover:text-[#1B3A6B]/70 transition-colors duration-300 cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
