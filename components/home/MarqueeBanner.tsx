"use client";
import { useRef, useEffect, useState } from "react";

const items = [
  { text: "COLORANTE NATURAL DE UVA", highlight: true },
  { text: "·" },
  { text: "ANTHOCYANINS", highlight: false },
  { text: "·" },
  { text: "MALBEC RED", highlight: true },
  { text: "·" },
  { text: "CLEAN LABEL", highlight: false },
  { text: "·" },
  { text: "VITIS VINIFERA", highlight: false },
  { text: "·" },
  { text: "NATURAL COLOR", highlight: true },
  { text: "·" },
  { text: "ANTOCIANINAS", highlight: false },
  { text: "·" },
  { text: "PLANT-BASED", highlight: true },
  { text: "·" },
  { text: "NON-GMO", highlight: false },
  { text: "·" },
  { text: "GRAPE EXTRACT", highlight: true },
  { text: "·" },
  { text: "PURPLE · RED · ROSÉ", highlight: false },
  { text: "·" },
  { text: "GLUTEN FREE", highlight: false },
  { text: "·" },
  { text: "COLORANTE VEGETAL", highlight: true },
  { text: "·" },
  { text: "SIN SÍNTESIS QUÍMICA", highlight: false },
  { text: "·" },
];

function ItemSpan({ item }: { item: typeof items[0] }) {
  return (
    <span
      className={`px-3 select-none ${
        item.text === "·"
          ? "text-white/25 text-base"
          : item.highlight
          ? "text-[13px] font-black tracking-[0.24em] text-white"
          : "text-[11px] font-medium tracking-[0.14em] text-white/45"
      }`}
      style={item.highlight ? { textShadow: "0 0 12px rgba(255,255,255,0.45)" } : undefined}
    >
      {item.text}
    </span>
  );
}

export default function MarqueeBanner() {
  const firstCopyRef = useRef<HTMLDivElement>(null);
  const [animStyle, setAnimStyle] = useState<string>("");

  useEffect(() => {
    if (!firstCopyRef.current) return;
    const w = firstCopyRef.current.offsetWidth;
    setAnimStyle(`
      @keyframes qualab-marquee {
        from { transform: translateX(0px); }
        to   { transform: translateX(-${w}px); }
      }
      .marquee-track {
        animation: qualab-marquee 30s linear infinite;
        will-change: transform;
      }
      .marquee-track:hover { animation-play-state: paused; }
    `);
  }, []);

  // Nodes and bonds for molecular pattern (same as before)
  const nodes = [
    [40,18,3],[110,28,3.5],[190,14,2.5],[270,24,3.5],[350,10,3],[430,22,4],[510,16,2.5],[600,28,3],
    [680,12,3.5],[760,26,3],[840,8,2.5],[920,20,4],[1000,28,3],[1090,14,3.5],[1170,24,3],[1250,10,2.5],
    [1330,22,3.5],[1410,16,3],[1490,28,3.5],[1570,12,3],[1650,24,4],[1740,18,2.5],[1820,28,3],
    [70,70,3],[150,60,3.5],[230,74,2.5],[310,64,4],[390,78,3],[470,62,3.5],[555,74,3],[635,60,2.5],
    [715,76,3.5],[795,66,3],[875,78,2.5],[960,62,3.5],[1040,74,3],[1120,60,4],[1200,76,3],[1280,66,2.5],
    [1360,78,3.5],[1440,62,3],[1520,74,3.5],[1600,60,3],[1680,76,2.5],[1760,66,3.5],[1850,74,3],
    [160,44,2],[380,48,2],[600,42,2],[820,48,2],[1040,44,2],[1260,48,2],[1480,44,2],[1700,48,2],
  ];
  const bonds = [
    [40,18,110,28],[110,28,190,14],[190,14,270,24],[270,24,350,10],[350,10,430,22],[430,22,510,16],
    [510,16,600,28],[600,28,680,12],[680,12,760,26],[760,26,840,8],[840,8,920,20],[920,20,1000,28],
    [1000,28,1090,14],[1090,14,1170,24],[1170,24,1250,10],[1250,10,1330,22],[1330,22,1410,16],
    [1410,16,1490,28],[1490,28,1570,12],[1570,12,1650,24],[1650,24,1740,18],[1740,18,1820,28],
    [70,70,150,60],[150,60,230,74],[230,74,310,64],[310,64,390,78],[390,78,470,62],[470,62,555,74],
    [555,74,635,60],[635,60,715,76],[715,76,795,66],[795,66,875,78],[875,78,960,62],[960,62,1040,74],
    [1040,74,1120,60],[1120,60,1200,76],[1200,76,1280,66],[1280,66,1360,78],[1360,78,1440,62],
    [1440,62,1520,74],[1520,74,1600,60],[1600,60,1680,76],[1680,76,1760,66],[1760,66,1850,74],
    [110,28,160,44],[160,44,150,60],[350,10,380,48],[380,48,390,78],[600,28,600,42],[600,42,635,60],
    [840,8,820,48],[820,48,875,78],[1000,28,1040,44],[1040,44,1040,74],[1250,10,1260,48],
    [1260,48,1280,66],[1490,28,1480,44],[1480,44,1520,74],[1740,18,1700,48],[1700,48,1760,66],
  ];

  return (
    <>
      {/* Inject pixel-accurate keyframe once width is measured */}
      {animStyle && <style>{animStyle}</style>}

      {/* Fallback animation before measurement */}
      {!animStyle && (
        <style>{`
          @keyframes qualab-marquee-init {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .marquee-track { animation: qualab-marquee-init 30s linear infinite; will-change: transform; }
          .marquee-track:hover { animation-play-state: paused; }
        `}</style>
      )}

      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(105deg, #2B0920 0%, #5A102D 35%, #7A1834 60%, #5A102D 80%, #2B0920 100%)",
          paddingTop: "22px",
          paddingBottom: "22px",
          opacity: 0.82,
        }}
      >
        {/* Molecular pattern overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.20 }} aria-hidden>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0 }}>
            <defs>
              <pattern id="mol-pattern" x="0" y="0" width="1900" height="96" patternUnits="userSpaceOnUse">
                {bonds.map(([x1,y1,x2,y2], i) => (
                  <line key={`b${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="1" strokeLinecap="round" />
                ))}
                {nodes.map(([cx,cy,r], i) => (
                  <circle key={`n${i}`} cx={cx} cy={cy} r={r} fill="white" />
                ))}
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mol-pattern)" />
          </svg>
        </div>

        {/* Radial highlight */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 120% at 50% 50%, rgba(255,80,80,0.12) 0%, transparent 70%)" }} />

        {/* Left / right fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #2B0920, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #2B0920, transparent)" }} />

        {/* Scrolling track — two identical copies side by side */}
        <div className="relative z-20 marquee-track flex items-center whitespace-nowrap">
          {/* First copy — measured for exact pixel offset */}
          <div ref={firstCopyRef} className="flex items-center">
            {items.map((item, i) => <ItemSpan key={i} item={item} />)}
          </div>
          {/* Second copy — seamless continuation */}
          <div className="flex items-center" aria-hidden>
            {items.map((item, i) => <ItemSpan key={i} item={item} />)}
          </div>
        </div>
      </div>
    </>
  );
}
