import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const securityHeaders = [
  // Evita que el sitio sea embebido en iframes (clickjacking)
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Evita que el browser "adivine" el tipo de archivo (MIME sniffing)
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Controla qué información de referrer se envía a terceros
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Fuerza HTTPS por 1 año (solo activo en producción con dominio propio)
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  // Restringe acceso a APIs sensibles del browser (cámara, micrófono, GPS, etc.)
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // Content Security Policy — controla desde dónde se pueden cargar recursos
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Scripts: solo el propio sitio + inline necesario para Next.js
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://formspree.io",
      // Estilos: propio sitio + inline (Tailwind lo requiere)
      "style-src 'self' 'unsafe-inline'",
      // Imágenes: propio sitio + Unsplash + data URIs
      "img-src 'self' data: blob: https://images.unsplash.com",
      // Fuentes: propio sitio
      "font-src 'self'",
      // Conexiones: propio sitio + Formspree para el formulario de contacto
      "connect-src 'self' https://formspree.io",
      // Formularios solo pueden enviarse a Formspree
      "form-action 'self' https://formspree.io",
      // No permite embeber el sitio en iframes externos
      "frame-ancestors 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        // Aplica los headers a todas las rutas
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
