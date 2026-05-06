import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isES = locale === "es";
  return {
    title: isES ? "Contacto" : "Contact",
    description: isES
      ? "¿Explorás ingredientes naturales de origen vitivinícola? Contactanos para desarrollar soluciones con respaldo científico y aplicación industrial."
      : "Exploring natural ingredients of viticultural origin? Contact us to develop solutions with scientific backing and industrial application.",
    openGraph: {
      title: isES ? "Contacto | Qualab" : "Contact | Qualab",
      description: isES
        ? "Qualab trabaja con empresas, partners e instituciones interesadas en ingredientes naturales de uva."
        : "Qualab works with companies, partners and institutions interested in natural grape ingredients.",
      siteName: "Qualab",
      type: "website",
    },
  };
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
