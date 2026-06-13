import { notFound } from "next/navigation";

// Captura cualquier ruta inexistente bajo /[locale]/* y muestra el 404 con marca.
export default function CatchAll() {
  notFound();
}
