interface Props {
  eyebrow?: string;
  headline: string;
  body?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({ eyebrow, headline, body, center, light }: Props) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <p className={`text-xs font-semibold tracking-widest uppercase mb-3 ${light ? "text-blue-300" : "text-[#596943]"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-4xl sm:text-5xl font-bold leading-tight tracking-tight ${light ? "text-white" : "text-[#282625]"}`}>
        {headline}
      </h2>
      {body && (
        <p className={`mt-5 text-lg sm:text-xl leading-relaxed max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-blue-100" : "text-gray-600"}`}>
          {body}
        </p>
      )}
    </div>
  );
}
