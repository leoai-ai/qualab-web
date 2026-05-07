export default function MarqueeBanner() {
  const items = [
    { text: "COLORANTE NATURAL DE UVA", highlight: true },
    { text: "🍇" },
    { text: "ANTHOCYANINS", highlight: false },
    { text: "·" },
    { text: "MALBEC RED", highlight: false },
    { text: "·" },
    { text: "CLEAN LABEL", highlight: true },
    { text: "🍇" },
    { text: "VITIS VINIFERA", highlight: false },
    { text: "·" },
    { text: "NATURAL COLOR", highlight: false },
    { text: "·" },
    { text: "ANTOCIANINAS", highlight: true },
    { text: "🍇" },
    { text: "PLANT-BASED", highlight: false },
    { text: "·" },
    { text: "MENDOZA ORIGIN", highlight: false },
    { text: "·" },
    { text: "NON-GMO", highlight: true },
    { text: "🍇" },
    { text: "GRAPE EXTRACT", highlight: false },
    { text: "·" },
    { text: "PURPLE · RED · ROSÉ", highlight: false },
    { text: "·" },
    { text: "GLUTEN FREE", highlight: true },
    { text: "🍇" },
    { text: "COLORANTE VEGETAL", highlight: false },
    { text: "·" },
    { text: "SIN SÍNTESIS QUÍMICA", highlight: false },
    { text: "·" },
  ];

  const doubled = [...items, ...items];

  return (
    <>
      <style>{`
        @keyframes qualab-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: qualab-marquee 35s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="relative overflow-hidden py-3 z-40"
        style={{ background: "linear-gradient(90deg, #A50E20 0%, #C8102E 40%, #B8001A 100%)" }}
      >
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #A50E20, transparent)" }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #B8001A, transparent)" }}
        />

        <div className="marquee-track flex items-center whitespace-nowrap">
          {doubled.map((item, i) => (
            <span
              key={i}
              className={`
                px-3 select-none
                ${item.text === "·"
                  ? "text-white/25 text-base"
                  : item.text.startsWith("🍇")
                  ? "text-base px-4"
                  : item.highlight
                  ? "text-[11px] font-black tracking-[0.2em] text-white"
                  : "text-[11px] font-semibold tracking-[0.15em] text-white/75"
                }
              `}
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
