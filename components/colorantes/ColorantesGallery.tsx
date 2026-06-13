"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { COLORANTES, FAMILIAS, type Familia, type Colorante } from "@/lib/colores";
import ColorModal from "./ColorModal";

interface Props {
  lang: "es" | "en";
  contactHref: string;
  labels: {
    todos: string;
    fuente: string;
    aplicaciones: string;
    verFicha: string;
  };
  modalLabels: {
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
}

export default function ColorantesGallery({ lang, contactHref, labels, modalLabels }: Props) {
  const [filtro, setFiltro] = useState<Familia | "todos">("todos");
  const [selected, setSelected] = useState<Colorante | null>(null);

  const visibles =
    filtro === "todos" ? COLORANTES : COLORANTES.filter((c) => c.familia === filtro);

  return (
    <div>
      {/* Filtros por familia */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-12">
        <button
          onClick={() => setFiltro("todos")}
          className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
          style={
            filtro === "todos"
              ? { backgroundColor: "#5A102D", color: "white" }
              : { backgroundColor: "#F5F1EA", color: "#282625" }
          }
        >
          {labels.todos}
        </button>
        {FAMILIAS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFiltro(f.id)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all"
            style={
              filtro === f.id
                ? { backgroundColor: "#5A102D", color: "white" }
                : { backgroundColor: "#F5F1EA", color: "#282625" }
            }
          >
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: f.hex }} />
            {f.label[lang]}
          </button>
        ))}
      </div>

      {/* Grilla de colorantes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibles.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelected(c)}
            className="text-left rounded-2xl overflow-hidden border border-gray-100 bg-white transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col group"
          >
            {/* Foto de aplicación o swatch sólido */}
            <div
              className="h-44 w-full relative bg-cover bg-center"
              style={
                c.foto
                  ? { backgroundImage: `url('${c.foto}')`, backgroundColor: c.hex }
                  : { backgroundColor: c.hex }
              }
            >
              <div className="absolute inset-x-0 bottom-0 h-1.5" style={{ backgroundColor: c.hex }} />
              <span
                className="absolute bottom-3 left-4 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.88)", color: "#282625" }}
              >
                {c.fuente[lang]}
              </span>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-bold mb-2" style={{ color: "#282625" }}>
                {c.nombre[lang]}
              </h3>
              <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "rgba(40,38,37,0.65)" }}>
                {c.desc[lang]}
              </p>

              {/* Aplicaciones */}
              <div className="mb-4">
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: "#C38335" }}>
                  {labels.aplicaciones}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {c.apps[lang].map((app) => (
                    <span
                      key={app}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: "#F5F1EA", color: "rgba(40,38,37,0.75)" }}
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Affordance ver ficha */}
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                style={{ color: "#5A102D" }}
              >
                {labels.verFicha}
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Modal de ficha ampliada */}
      <ColorModal
        color={selected}
        lang={lang}
        contactHref={contactHref}
        labels={modalLabels}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
