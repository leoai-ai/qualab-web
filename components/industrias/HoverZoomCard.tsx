"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/** Tarjeta que se eleva y hace zoom al pasar el mouse (estado + inline style: ver nota en PaletteGallery.tsx sobre por qué no usamos hover: de Tailwind aquí). */
export default function HoverZoomCard({ children, className, style }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...style,
        position: "relative",
        zIndex: hovered ? 10 : 1,
        transform: hovered ? "scale(1.08)" : "none",
        boxShadow: hovered
          ? "0 25px 35px -8px rgba(0,0,0,0.35), 0 10px 15px -6px rgba(0,0,0,0.3)"
          : "none",
        transition: "transform 300ms ease, box-shadow 300ms ease",
      }}
    >
      {children}
    </div>
  );
}
