import Link from "next/link";
import Image from "next/image";
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
    <footer className="bg-[#2B0920] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href={`/${locale}`} className="inline-block mb-4">
              <Image
                src="/logo-qualab.png"
                alt="Qualab"
                width={130}
                height={42}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(245,241,234,0.65)" }}>
              {t("tagline")}
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#C38335" }}>
              {t("nav_title")}
            </div>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors" style={{ color: "rgba(245,241,234,0.65)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#C38335" }}>
              Contacto
            </div>
            <ul className="space-y-2 text-sm" style={{ color: "rgba(245,241,234,0.65)" }}>
              <li>
                <a
                  href="mailto:informes@qualab.co"
                  className="hover:text-white transition-colors"
                >
                  informes@qualab.co
                </a>
              </li>
              <li>Mendoza, Argentina</li>
              <li>
                <a
                  href="https://www.linkedin.com/company/68127614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs" style={{ borderTop: "1px solid rgba(245,241,234,0.10)", color: "rgba(245,241,234,0.40)" }}>
          <span>{t("legal")}</span>
          <span>{t("rights")}</span>
        </div>
      </div>
    </footer>
  );
}
