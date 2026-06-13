import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isES = locale === "es";
  return {
    title: isES ? "Política de Privacidad" : "Privacy Policy",
    description: isES
      ? "Cómo Qualab S.A.S. recopila, usa y protege tus datos personales."
      : "How Qualab S.A.S. collects, uses and protects your personal data.",
    robots: { index: true, follow: true },
  };
}

type Section = { h: string; p: string[] };

const ES = {
  title: "Política de Privacidad",
  updated: "Última actualización: junio de 2026",
  intro:
    "En Qualab valoramos tu privacidad. Esta política explica qué datos personales recopilamos a través de este sitio, con qué finalidad, y cuáles son tus derechos conforme a la Ley N° 25.326 de Protección de los Datos Personales de la República Argentina.",
  sections: [
    {
      h: "1. Responsable del tratamiento",
      p: [
        "Qualab S.A.S., con domicilio en Mendoza, Argentina, es responsable del tratamiento de los datos personales recopilados a través de este sitio. Ante cualquier consulta podés escribirnos a informes@qualab.co.",
      ],
    },
    {
      h: "2. Datos que recopilamos",
      p: [
        "Datos que nos proporcionás voluntariamente a través del formulario de contacto: nombre, correo electrónico, empresa (opcional), motivo de contacto y el mensaje que decidas enviarnos.",
        "Datos de navegación agregados y anónimos (páginas visitadas, métricas de rendimiento), recopilados mediante herramientas de analítica que no utilizan cookies ni identifican personas.",
      ],
    },
    {
      h: "3. Finalidad del tratamiento",
      p: [
        "Utilizamos tus datos exclusivamente para responder tu consulta y mantener el contacto comercial que solicitaste. No los usamos para enviarte comunicaciones de marketing sin tu consentimiento expreso adicional.",
      ],
    },
    {
      h: "4. Base legal",
      p: [
        "El tratamiento se basa en tu consentimiento, otorgado al completar y enviar el formulario de contacto.",
      ],
    },
    {
      h: "5. Conservación de los datos",
      p: [
        "Conservamos tus datos durante el tiempo necesario para gestionar tu consulta y la relación comercial derivada, y luego los eliminamos o anonimizamos, salvo obligación legal de conservarlos por más tiempo.",
      ],
    },
    {
      h: "6. Terceros y encargados de tratamiento",
      p: [
        "Para operar el sitio y gestionar las consultas utilizamos proveedores que actúan como encargados de tratamiento: Resend (envío de correos electrónicos) y Vercel (alojamiento del sitio y analítica anónima). No vendemos, alquilamos ni cedemos tus datos personales a terceros con fines comerciales.",
      ],
    },
    {
      h: "7. Tus derechos",
      p: [
        "Podés ejercer en cualquier momento tus derechos de acceso, rectificación, actualización y supresión de tus datos personales, escribiendo a informes@qualab.co. Daremos respuesta en los plazos previstos por la normativa vigente.",
        "La Agencia de Acceso a la Información Pública (AAIP), órgano de control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.",
      ],
    },
    {
      h: "8. Cambios en esta política",
      p: [
        "Podemos actualizar esta política para reflejar cambios legales u operativos. Publicaremos la versión vigente en esta misma página, indicando la fecha de última actualización.",
      ],
    },
  ] as Section[],
};

const EN = {
  title: "Privacy Policy",
  updated: "Last updated: June 2026",
  intro:
    "At Qualab we value your privacy. This policy explains what personal data we collect through this website, for what purpose, and your rights under Argentina's Personal Data Protection Law No. 25.326.",
  sections: [
    {
      h: "1. Data controller",
      p: [
        "Qualab S.A.S., located in Mendoza, Argentina, is the controller of the personal data collected through this website. For any inquiry you can write to informes@qualab.co.",
      ],
    },
    {
      h: "2. Data we collect",
      p: [
        "Data you voluntarily provide through the contact form: name, email, company (optional), reason for contact and the message you choose to send us.",
        "Aggregated, anonymous browsing data (pages visited, performance metrics) collected through analytics tools that do not use cookies or identify individuals.",
      ],
    },
    {
      h: "3. Purpose",
      p: [
        "We use your data solely to respond to your inquiry and maintain the business contact you requested. We do not use it to send you marketing communications without your additional express consent.",
      ],
    },
    {
      h: "4. Legal basis",
      p: ["Processing is based on your consent, given when you complete and submit the contact form."],
    },
    {
      h: "5. Data retention",
      p: [
        "We keep your data for as long as necessary to handle your inquiry and the resulting business relationship, after which we delete or anonymize it, unless a legal obligation requires longer retention.",
      ],
    },
    {
      h: "6. Third parties and processors",
      p: [
        "To operate the site and manage inquiries we use providers acting as data processors: Resend (email delivery) and Vercel (site hosting and anonymous analytics). We do not sell, rent or transfer your personal data to third parties for commercial purposes.",
      ],
    },
    {
      h: "7. Your rights",
      p: [
        "You may exercise your rights of access, rectification, update and deletion of your personal data at any time by writing to informes@qualab.co. We will respond within the timeframes set by applicable regulations.",
        "Argentina's Agency for Access to Public Information (AAIP), the supervisory authority for Law No. 25.326, is responsible for handling complaints regarding non-compliance with personal data protection rules.",
      ],
    },
    {
      h: "8. Changes to this policy",
      p: [
        "We may update this policy to reflect legal or operational changes. The current version will be published on this page, indicating the date of last update.",
      ],
    },
  ] as Section[],
};

export default async function PrivacidadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = locale === "en" ? EN : ES;

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "#282625" }}>
          {c.title}
        </h1>
        <p className="mt-3 text-sm" style={{ color: "rgba(40,38,37,0.5)" }}>
          {c.updated}
        </p>
        <p className="mt-6 text-base leading-relaxed" style={{ color: "rgba(40,38,37,0.75)" }}>
          {c.intro}
        </p>

        <div className="mt-10 space-y-8">
          {c.sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-lg font-bold mb-2" style={{ color: "#282625" }}>
                {s.h}
              </h2>
              {s.p.map((par, i) => (
                <p key={i} className="text-base leading-relaxed mb-3" style={{ color: "rgba(40,38,37,0.75)" }}>
                  {par}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
