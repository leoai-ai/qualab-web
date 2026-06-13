"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const otherLocale = locale === "es" ? "en" : "es";
  const localizedPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const links = [
    { href: `/${locale}/nosotros`, label: t("nosotros") },
    { href: `/${locale}/colorantes`, label: t("colorantes") },
    { href: `/${locale}/ingredientes`, label: t("ingredientes") },
  ];

  // Páginas con hero claro → texto oscuro arriba. El resto (hero oscuro) → texto blanco.
  const isLightHero =
    pathname === `/${locale}` ||
    pathname === `/${locale}/colorantes` ||
    pathname === `/${locale}/ingredientes` ||
    pathname === `/${locale}/ingredientes/polvo-piel-uva` ||
    pathname === `/${locale}/ingredientes/aceite-pepita-uva`;
  const darkText = scrolled || isLightHero;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Image
              src="/logo-qualab.png"
              alt="Qualab"
              width={220}
              height={72}
              className="h-16 w-auto object-contain transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop nav + right side — todo junto a la derecha */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-[#5A102D] hover:text-white ${darkText ? "text-gray-700" : "text-white/90"}`}
              >
                {link.label}
              </Link>
            ))}
            {/* Language switcher */}
            <Link
              href={localizedPath}
              className={`text-xs font-semibold tracking-widest transition-colors uppercase ${darkText ? "text-gray-400 hover:text-[#282625]" : "text-white/70 hover:text-white"}`}
            >
              {otherLocale}
            </Link>
            {/* CTA */}
            <Link
              href={`/${locale}/contacto`}
              className="px-4 py-2 text-sm font-semibold rounded-full text-white transition-colors"
              style={{ backgroundColor: "#5A102D" }}
            >
              {t("cta")}
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-gray-700 hover:text-[#282625] py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex items-center gap-4">
            <Link
              href={localizedPath}
              className="text-xs font-semibold tracking-widest text-gray-400 uppercase"
              onClick={() => setOpen(false)}
            >
              {otherLocale}
            </Link>
            <Link
              href={`/${locale}/contacto`}
              className="px-4 py-2 text-sm font-semibold rounded-full text-white"
              style={{ backgroundColor: "#5A102D" }}
              onClick={() => setOpen(false)}
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
