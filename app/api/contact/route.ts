import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Escapa HTML para evitar inyección de markup en el email que recibe Qualab.
function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  try {
    const { nombre, empresa, email, tipo, mensaje, website } = await req.json();

    // Honeypot: los bots completan este campo oculto. Fingimos éxito sin enviar.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!nombre || !email) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
    }

    if (!EMAIL_RE.test(String(email).trim())) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    // Texto plano (con tope de largo) para asunto y reply-to
    const cap = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);
    const nombrePlain = cap(nombre, 120);
    const emailPlain = cap(email, 160);
    const tipoPlain = cap(tipo, 80);

    // Versiones escapadas para el cuerpo HTML
    const sNombre = escapeHtml(nombrePlain);
    const sEmpresa = escapeHtml(cap(empresa, 120));
    const sEmail = escapeHtml(emailPlain);
    const sTipo = escapeHtml(tipoPlain);
    const sMensaje = escapeHtml(cap(mensaje, 4000)).replace(/\n/g, "<br>");

    const { error } = await resend.emails.send({
      from: "Qualab Web <onboarding@resend.dev>",
      to: "roque.tenerini@qualab.co",
      replyTo: emailPlain,
      subject: `Nueva consulta: ${tipoPlain || "Contacto"} — ${nombrePlain}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #5A102D; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Nueva consulta desde qualab.co</h1>
          </div>

          <div style="background: #f8f9fa; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e9ecef;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; width: 140px; color: #6c757d; font-size: 13px;">Nombre</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; font-weight: 600;">${sNombre}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #6c757d; font-size: 13px;">Empresa</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef;">${sEmpresa || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #6c757d; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                  <a href="mailto:${sEmail}" style="color: #5A102D;">${sEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #6c757d; font-size: 13px;">Motivo</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef;">${sTipo || "—"}</td>
              </tr>
              ${sMensaje ? `
              <tr>
                <td style="padding: 16px 0 0; color: #6c757d; font-size: 13px; vertical-align: top;">Mensaje</td>
                <td style="padding: 16px 0 0; line-height: 1.6;">${sMensaje}</td>
              </tr>` : ""}
            </table>

            <div style="margin-top: 24px; padding: 16px; background: #f1e8ec; border-radius: 6px; font-size: 13px; color: #5A102D;">
              💡 Podés responder directamente a este email — irá a <strong>${sEmail}</strong>
            </div>
          </div>

          <p style="text-align: center; color: #adb5bd; font-size: 11px; margin-top: 16px;">
            Qualab S.A.S. — Mendoza, Argentina — qualab.co
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Error al enviar" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
