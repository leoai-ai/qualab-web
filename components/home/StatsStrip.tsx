import { useTranslations } from "next-intl";

export default function StatsStrip() {
  const t = useTranslations("home.stats");

  const stats = [
    { value: t("value1"), label: t("label1") },
    { value: t("value2"), label: t("label2") },
    { value: t("value3"), label: t("label3") },
  ];

  return (
    <section className="bg-[#F5F0E8] border-y border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-[#1B3A6B]">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
