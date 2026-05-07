"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContactoPage() {
  const t = useTranslations("contacto");
  const f = useTranslations("contacto.form");

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    tipo: "",
    mensaje: "",
  });

  const tipoOptions = [f("tipo_1"), f("tipo_2"), f("tipo_3"), f("tipo_4"), f("tipo_5"), f("tipo_6")];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/informes@qualab.co", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ nombre: "", empresa: "", email: "", tipo: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="pt-16 bg-[#1B3A6B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C] mb-3">
            {t("eyebrow")}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{t("headline")}</h1>
          <p className="text-blue-200 text-lg">{t("body")}</p>
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/20 focus:border-[#1B3A6B]"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/20 focus:border-[#1B3A6B]"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/20 focus:border-[#1B3A6B]"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/20 focus:border-[#1B3A6B] bg-white"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/20 focus:border-[#1B3A6B] resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-sm">{f("error")}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1B3A6B] text-white font-semibold hover:bg-blue-900 disabled:opacity-60 transition-colors"
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
                <div className="w-10 h-10 rounded-xl bg-[#1B3A6B]/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#1B3A6B]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Email</div>
                  <a href="mailto:informes@qualab.co" className="text-sm text-[#1B3A6B] hover:underline">
                    informes@qualab.co
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1B3A6B]/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#1B3A6B]" />
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
    </>
  );
}
