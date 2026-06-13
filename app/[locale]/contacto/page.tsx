"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Mail, MapPin, Send } from "lucide-react";
import FaqSection from "@/components/ingredientes/FaqSection";

export default function ContactoPage() {
  const t = useTranslations("contacto");
  const f = useTranslations("contacto.form");
  const locale = useLocale();

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    tipo: "",
    mensaje: "",
    website: "", // honeypot anti-spam
  });

  const tipoOptions = [f("tipo_1"), f("tipo_2"), f("tipo_3"), f("tipo_4"), f("tipo_5"), f("tipo_6")];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ nombre: "", empresa: "", email: "", tipo: "", mensaje: "", website: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="pt-16 bg-[#5A102D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C38335] mb-3">
            {t("eyebrow")}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6 max-w-5xl">{t("headline")}</h1>
          <div className="max-w-6xl space-y-4">
            <p className="text-lg sm:text-xl leading-relaxed text-blue-100">{t("body")}</p>
            <p className="text-base sm:text-lg leading-relaxed text-blue-300">{t("body2")}</p>
            <p className="text-base sm:text-lg leading-relaxed text-blue-300">{t("body3")}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {status === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <p className="text-green-800 font-medium">{f("success")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot anti-spam: oculto para usuarios, visible para bots */}
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {f("nombre")} *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={form.nombre}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A102D]/20 focus:border-[#5A102D]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {f("empresa")}
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        value={form.empresa}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A102D]/20 focus:border-[#5A102D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {f("email")} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A102D]/20 focus:border-[#5A102D]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {f("tipo_label")} *
                    </label>
                    <select
                      name="tipo"
                      required
                      value={form.tipo}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A102D]/20 focus:border-[#5A102D] bg-white"
                    >
                      <option value="" disabled>—</option>
                      {tipoOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {f("mensaje")}
                    </label>
                    <textarea
                      name="mensaje"
                      rows={5}
                      value={form.mensaje}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A102D]/20 focus:border-[#5A102D] resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-sm">{f("error")}</p>
                  )}

                  {/* Consentimiento de datos (obligatorio) */}
                  <label className="flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 accent-[#5A102D]"
                    />
                    <span>
                      {f.rich("consent", {
                        link: (chunks) => (
                          <Link
                            href={`/${locale}/privacidad`}
                            className="font-medium text-[#5A102D] underline hover:opacity-80"
                          >
                            {chunks}
                          </Link>
                        ),
                      })}
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#5A102D] text-white font-semibold hover:bg-[#2B0920] disabled:opacity-60 transition-colors"
                  >
                    <Send size={16} />
                    {status === "sending" ? f("enviando") : f("enviar")}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#5A102D]/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#282625]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Email</div>
                  <a href="mailto:informes@qualab.co" className="text-sm text-[#282625] hover:underline">
                    informes@qualab.co
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#5A102D]/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#282625]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                    {t("info.ubicacion")}
                  </div>
                  <p className="text-sm text-gray-600">Mendoza, Argentina</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <FaqSection
        title={t("faq.title")}
        accentColor="#5A102D"
        items={[
          { q: t("faq.q1"), a: t("faq.a1") },
          { q: t("faq.q2"), a: t("faq.a2") },
          { q: t("faq.q3"), a: t("faq.a3") },
          { q: t("faq.q4"), a: t("faq.a4") },
          { q: t("faq.q5"), a: t("faq.a5") },
        ]}
      />
    </>
  );
}
