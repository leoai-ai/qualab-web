"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

/**
 * CTA flotante "Hablemos" — fijo abajo a la derecha, siempre visible al scrollear
 * (mobile y desktop). Aparece tras bajar ~400px, se oculta en la página de contacto.
 */
export default function FloatingCTA() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // No mostrarlo en la página de contacto (ya estás ahí)
  if (pathname === `/${locale}/contacto`) return null;

  return (
    <Link
      href={`/${locale}/contacto`}
      aria-label={t("cta")}
      className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-white text-sm font-semibold shadow-lg transition-all duration-300 hover:shadow-xl motion-reduce:transition-none ${
        shown
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ backgroundColor: "#5A102D" }}
    >
      <MessageCircle size={18} />
      {t("cta")}
    </Link>
  );
}
