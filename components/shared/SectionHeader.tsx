interface Props {
  eyebrow?: string;
  headline: string;
  body?: string;
  center?: boolean;
  light?: boolean;
  /** nivel del encabezado (default "h2"). Usar "h1" en heros de página para SEO/accesibilidad. */
  as?: "h1" | "h2";
}

export default function SectionHeader({ eyebrow, headline, body, center, light, as = "h2" }: Props) {
  const Heading = as;
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <p className={`text-xs font-semibold tracking-widest uppercase mb-3 ${light ? "text-blue-300" : "text-[#596943]"}`}>
          {eyebrow}
        </p>
      )}
      <Heading className={`text-4xl sm:text-5xl font-bold leading-tight tracking-tight ${light ? "text-white" : "text-[#282625]"}`}>
        {headline}
      </Heading>
      {body && (
        <p className={`mt-5 text-lg sm:text-xl leading-relaxed max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-blue-100" : "text-gray-600"}`}>
          {body}
        </p>
      )}
    </div>
  );
}
