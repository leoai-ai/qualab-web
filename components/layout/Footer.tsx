import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();

  const links = [
    { href: `/${locale}/nosotros`, label: nav("nosotros") },
    { href: `/${locale}/ingredientes`, label: nav("ingredientes") },
    { href: `/${locale}/contacto`, label: nav("contacto") },
  ];

  return (
    <footer className="bg-[#1B3A6B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold tracking-tight mb-3">Qualab</div>
            <p className="text-sm text-blue-200 leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="text-xs font-semibold tracking-widest text-blue-300 uppercase mb-4">
              {t("nav_title")}
            </div>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold tracking-widest text-blue-300 uppercase mb-4">
              Contacto
            </div>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <a
                  href="mailto:informes@qualab.co"
                  className="hover:text-white transition-colors"
                >
                  informes@qualab.co
                </a>
              </li>
              <li>Mendoza, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-blue-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-blue-400">
          <span>{t("legal")}</span>
          <span>{t("rights")}</span>
        </div>
      </div>
    </footer>
  );
}
