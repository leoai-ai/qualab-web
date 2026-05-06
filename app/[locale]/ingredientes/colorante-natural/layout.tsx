import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isES = locale === "es";
  return {
    title: isES ? "Colorante Natural de Uva" : "Natural Grape Colorant",
    description: isES
      ? "Colorantes naturales de uva para alimentos y bebidas. Antocianinas estabilizadas de pieles de uva Malbec de Mendoza. Alternativa natural al carmín y tartrazina."
      : "Natural grape colorants for food and beverages. Stabilized anthocyanins from Mendoza Malbec grape skins. Natural alternative to carmine and tartrazine.",
    openGraph: {
      title: isES ? "Colorante Natural de Uva | Qualab" : "Natural Grape Colorant | Qualab",
      description: isES
        ? "Pigmento natural de doble función: color rojo-violáceo intenso + actividad antioxidante. Origen trazable Mendoza, Argentina."
        : "Natural dual-function pigment: intense red-violet color + antioxidant activity. Traceable origin Mendoza, Argentina.",
      siteName: "Qualab",
      type: "website",
    },
  };
}

export default function ColoranteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
