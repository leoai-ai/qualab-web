import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function CtaFinal() {
  const t = useTranslations("home.cta_final");
  const locale = useLocale();

  return (
    <section className="py-24 bg-[#1B3A6B]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
          {t("headline")}
        </h2>
        <p className="text-blue-200 text-lg leading-relaxed mb-10">
          {t("body")}
        </p>
        <Link
          href={`/${locale}/contacto`}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C9A84C] text-white font-semibold text-base hover:bg-amber-500 transition-colors"
        >
          {t("cta")} <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
