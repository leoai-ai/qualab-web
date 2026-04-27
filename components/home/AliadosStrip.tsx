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
    <section className="py-14 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 text-center mb-8">
          {t("eyebrow")}
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {aliados.map((name) => (
            <span key={name} className="text-sm font-semibold text-gray-400 hover:text-gray-600 transition-colors">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
