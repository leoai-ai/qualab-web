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
        <p className={`text-xs font-semibold tracking-widest uppercase mb-3 ${light ? "text-blue-300" : "text-[#3A7D44]"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold leading-tight tracking-tight ${light ? "text-white" : "text-[#1B3A6B]"}`}>
        {headline}
      </h2>
      {body && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-blue-100" : "text-gray-600"}`}>
          {body}
        </p>
      )}
    </div>
  );
}
