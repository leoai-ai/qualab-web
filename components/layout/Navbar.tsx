"use client";

import { useState } from "react";
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

  const otherLocale = locale === "es" ? "en" : "es";
  const localizedPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const links = [
    { href: `/${locale}/nosotros`, label: t("nosotros") },
    { href: `/${locale}/ingredientes`, label: t("ingredientes") },
    { href: `/${locale}/contacto`, label: t("contacto") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <Image
              src="/logo-qualab.png"
              alt="Qualab"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[#1B3A6B] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language switcher */}
            <Link
              href={localizedPath}
              className="text-xs font-semibold tracking-widest text-gray-400 hover:text-[#1B3A6B] transition-colors uppercase"
            >
              {otherLocale}
            </Link>
            {/* CTA */}
            <Link
              href={`/${locale}/contacto`}
              className="px-4 py-2 text-sm font-semibold rounded-full text-white transition-colors"
              style={{ backgroundColor: "#1B3A6B" }}
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
              className="block text-sm font-medium text-gray-700 hover:text-[#1B3A6B] py-2"
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
              style={{ backgroundColor: "#1B3A6B" }}
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
