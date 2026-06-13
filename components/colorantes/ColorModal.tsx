"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight, Check } from "lucide-react";
import { type Colorante, CERTIFICACIONES } from "@/lib/colores";

interface Props {
  color: Colorante | null;
  lang: "es" | "en";
  contactHref: string;
  labels: {
    fuente: string;
    pigmento: string;
    intensidad: string;
    ph: string;
    dosis: string;
    formato: string;
    vidaUtil: string;
    aplicaciones: string;
    certificaciones: string;
    alternativa: string;
    cta: string;
    blendNote: string;
  };
  onClose: () => void;
}

const GENERIC_PHOTO = "/colorantes-hero.jpg";

export default function ColorModal({ color, lang, contactHref, labels, onClose }: Props) {
  // Cerrar con Escape + bloquear scroll de fondo
  useEffect(() => {
    if (!color) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [color, onClose]);

  if (!color) return null;

  const ingredientes = color.ingredientes?.[lang] ?? color.fuente[lang];

  const specs: { label: string; value: string }[] = [];
  if (color.pigmento) specs.push({ label: labels.pigmento, value: color.pigmento[lang] });
  if (color.intensidad) specs.push({ label: labels.intensidad, value: color.intensidad });
  if (color.ph) specs.push({ label: labels.ph, value: color.ph[lang] });
  if (color.dosis) specs.push({ label: labels.dosis, value: color.dosis });
  if (color.formato) specs.push({ label: labels.formato, value: color.formato[lang] });
  if (color.vidaUtil) specs.push({ label: labels.vidaUtil, value: color.vidaUtil[lang] });

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      style={{ background: "rgba(40,38,37,0.55)", backdropFilter: "blur(3px)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl overflow-hidden w-full max-w-3xl max-h-[88vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "#282625" }}
        >
          <X size={18} />
        </button>

        {/* Foto / cabecera — banner 16:9 a pantalla completa (cover) o foto contenida */}
        <div
          className={`w-full aspect-[16/9] bg-center bg-no-repeat relative ${color.fotoFill ? "bg-cover" : "bg-contain"}`}
          style={{ backgroundImage: `url('${color.foto || GENERIC_PHOTO}')`, backgroundColor: "#F5F1EA" }}
        >
          {!color.fotoFill && (
            <div className="absolute inset-x-0 bottom-0 h-1.5" style={{ backgroundColor: color.hex }} />
          )}
        </div>

        <div className="p-7 sm:p-9">
          {/* Título */}
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-5 rounded-full shrink-0" style={{ backgroundColor: color.hex, boxShadow: `0 4px 10px -2px ${color.hex}` }} />
            <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: "#282625" }}>
              {color.nombre[lang]}
            </h3>
          </div>
          <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(40,38,37,0.7)" }}>
            {color.desc[lang]}
          </p>

          {/* Gancho comercial */}
          {color.alternativaA && (
            <div
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "#5A102D12", color: "#5A102D" }}
            >
              {labels.alternativa} {color.alternativaA}
            </div>
          )}

          {/* Ingredientes */}
          <div className="mb-7">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#C38335" }}>
              {labels.fuente}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(40,38,37,0.75)" }}>
              {ingredientes}
            </p>
          </div>

          {/* Especificaciones */}
          {specs.length > 0 && (
            <div className="mb-7">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#C38335" }}>
                {lang === "en" ? "Specifications" : "Especificaciones"}
              </p>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                {specs.map((s) => (
                  <div key={s.label} className="flex justify-between gap-4 py-2 border-b" style={{ borderColor: "rgba(40,38,37,0.08)" }}>
                    <dt className="text-sm" style={{ color: "rgba(40,38,37,0.55)" }}>{s.label}</dt>
                    <dd className="text-sm font-semibold text-right" style={{ color: "#282625" }}>{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* Cumplimiento regulatorio */}
          {color.regulatorio && (
            <div
              className="flex items-start gap-2.5 rounded-xl px-4 py-3 mb-7"
              style={{ backgroundColor: "#59694312" }}
            >
              <Check size={16} style={{ color: "#3f4a2e", flexShrink: 0, marginTop: 2 }} />
              <span className="text-sm leading-snug" style={{ color: "#3f4a2e" }}>
                {color.regulatorio[lang]}
              </span>
            </div>
          )}

          {/* Aplicaciones */}
          <div className="mb-7">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#C38335" }}>
              {labels.aplicaciones}
            </p>
            <div className="flex flex-wrap gap-2">
              {color.apps[lang].map((a) => (
                <span key={a} className="text-sm px-3 py-1.5 rounded-full" style={{ backgroundColor: "#F5F1EA", color: "rgba(40,38,37,0.75)" }}>
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Certificaciones (solo con ficha técnica) */}
          {!color.blend ? (
            <div className="mb-7">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#C38335" }}>
                {labels.certificaciones}
              </p>
              <div className="flex flex-wrap gap-2">
                {CERTIFICACIONES.map((c) => (
                  <span key={c.en} className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: "#59694315", color: "#3f4a2e" }}>
                    <Check size={12} /> {c[lang]}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-sm italic mb-7" style={{ color: "rgba(40,38,37,0.5)" }}>
              {labels.blendNote}
            </p>
          )}

          {/* CTA */}
          <Link
            href={contactHref}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#5A102D" }}
          >
            {labels.cta} <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
