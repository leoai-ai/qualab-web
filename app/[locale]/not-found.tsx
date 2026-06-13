import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-[#F5F1EA] px-4 py-24">
      <div className="text-center max-w-lg">
        <p className="text-7xl sm:text-8xl font-bold leading-none" style={{ color: "#5A102D" }}>
          404
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold mt-5 mb-3" style={{ color: "#282625" }}>
          Página no encontrada
        </h1>
        <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(40,38,37,0.65)" }}>
          La página que buscás no existe o fue movida. Volvé al inicio para seguir explorando
          nuestros colorantes e ingredientes naturales de origen vitivinícola.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#5A102D" }}
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
