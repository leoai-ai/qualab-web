"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  title: string;
  items: FaqItem[];
  accentColor?: string;
}

export default function FaqSection({ title, items, accentColor = "#8B1D42" }: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white">
      {/* Franja título */}
      <div className="py-10 px-4" style={{ backgroundColor: "#2B0920" }}>
        <div className="max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "rgba(195,131,53,0.80)" }}>
            <span className="w-5 h-px" style={{ backgroundColor: "#C38335" }} />
            FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "rgba(245,241,234,0.95)" }}>
            {title}
          </h2>
        </div>
      </div>

      {/* Acordeones */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 overflow-hidden"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-semibold text-[#282625] leading-snug">
                  {item.q}
                </span>
                <ChevronDown
                  size={18}
                  className="shrink-0 transition-transform duration-200"
                  style={{
                    color: accentColor,
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
