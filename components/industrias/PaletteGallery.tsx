"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { COLORANTES, type Colorante } from "@/lib/colores";
import ColorModal from "@/components/colorantes/ColorModal";

type Loc = { es: string; en: string };

interface PaletteItem {
  name: Loc;
  hex: string;
  img: string;
  colorId: string;
}

interface Props {
  lang: "es" | "en";
  contactHref: string;
  items: PaletteItem[];
}

export default function PaletteGallery({ lang, contactHref, items }: Props) {
  const t = useTranslations("colorantes_page");
  const [selected, setSelected] = useState<Colorante | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const modalLabels = {
    fuente: t("label_fuente"),
    pigmento: t("m_pigmento"),
    intensidad: t("m_intensidad"),
    ph: t("m_ph"),
    dosis: t("m_dosis"),
    formato: t("m_formato"),
    vidaUtil: t("m_vida"),
    aplicaciones: t("label_apps"),
    certificaciones: t("m_certs"),
    alternativa: t("m_alternativa"),
    cta: t("m_cta"),
    blendNote: t("m_blend_note"),
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5">
        {items.map((p) => {
          const colorante = COLORANTES.find((c) => c.id === p.colorId) ?? null;
          const isActive = activeId === p.img;
          return (
            <button
              key={p.name.es}
              type="button"
              onClick={() => setSelected(colorante)}
              onMouseEnter={() => setActiveId(p.img)}
              onMouseLeave={() => setActiveId((cur) => (cur === p.img ? null : cur))}
              onFocus={() => setActiveId(p.img)}
              onBlur={() => setActiveId((cur) => (cur === p.img ? null : cur))}
              disabled={!colorante}
              className="flex flex-col items-center text-center gap-3 w-[calc((100%-1.25rem)/2)] sm:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-5rem)/5)] cursor-pointer disabled:cursor-default"
              style={{
                position: "relative",
                zIndex: isActive ? 10 : 1,
                transform: isActive ? "translateY(-6px) scale(1.06)" : "none",
                transition: "transform 250ms ease, box-shadow 250ms ease",
              }}
            >
              <div
                className="w-full rounded-2xl overflow-hidden"
                style={{
                  aspectRatio: "4 / 3",
                  backgroundColor: "#F6E8D9",
                  backgroundImage: `url('/industrias/${p.img}.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  boxShadow: isActive
                    ? "0 20px 25px -5px rgba(0,0,0,0.15), 0 8px 10px -6px rgba(0,0,0,0.15)"
                    : "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
                  transition: "box-shadow 250ms ease",
                }}
              />
              <div className="w-8 h-1 rounded-full" style={{ backgroundColor: p.hex }} />
              <span className="text-sm font-semibold leading-tight" style={{ color: "#282625" }}>
                {p.name[lang]}
              </span>
            </button>
          );
        })}
      </div>

      <ColorModal
        color={selected}
        lang={lang}
        contactHref={contactHref}
        labels={modalLabels}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
