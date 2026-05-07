import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { nombre, empresa, email, tipo, mensaje } = await req.json();

    if (!nombre || !email) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Qualab Web <onboarding@resend.dev>",
      to: "roque.tenerini@qualab.co",
      replyTo: email,
      subject: `Nueva consulta: ${tipo || "Contacto"} — ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #1B3A6B; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Nueva consulta desde qualab.co</h1>
          </div>

          <div style="background: #f8f9fa; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e9ecef;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; width: 140px; color: #6c757d; font-size: 13px;">Nombre</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; font-weight: 600;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #6c757d; font-size: 13px;">Empresa</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef;">${empresa || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #6c757d; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                  <a href="mailto:${email}" style="color: #1B3A6B;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef; color: #6c757d; font-size: 13px;">Motivo</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef;">${tipo || "—"}</td>
              </tr>
              ${mensaje ? `
              <tr>
                <td style="padding: 16px 0 0; color: #6c757d; font-size: 13px; vertical-align: top;">Mensaje</td>
                <td style="padding: 16px 0 0; line-height: 1.6;">${mensaje.replace(/\n/g, "<br>")}</td>
              </tr>` : ""}
            </table>

            <div style="margin-top: 24px; padding: 16px; background: #e8f0fe; border-radius: 6px; font-size: 13px; color: #1B3A6B;">
              💡 Podés responder directamente a este email — irá a <strong>${email}</strong>
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
