// Gama de colorantes naturales — catálogo comercial Qualab
// Datos estructurados (no prosa). Se usan en el Home (muestra) y en la sección Colorantes (completa + ficha ampliada).
// Los datos técnicos provienen de las fichas de producto; el origen se presenta de forma genérica.

export type Familia = "rojos" | "rosas" | "purpuras" | "azules" | "amarillos" | "naranjas" | "marrones";

type Loc = { es: string; en: string };

export interface Colorante {
  id: string;
  /** swatch — color representativo del tono final */
  hex: string;
  familia: Familia;
  nombre: Loc;
  /** fuente natural — tag corto sobre la foto de la tarjeta */
  fuente: Loc;
  /** lista completa de ingredientes — se muestra en la ficha ampliada (modal) */
  ingredientes?: Loc;
  /** descripción corta (1 línea) */
  desc: Loc;
  /** aplicaciones recomendadas */
  apps: { es: string[]; en: string[] };
  /** se muestra en la franja del home */
  enHome?: boolean;
  /** foto de aplicación (si existe) — reemplaza el swatch sólido en la ficha */
  foto?: string;
  /** true = la foto es un banner 16:9 de marca → se muestra a pantalla completa (cover) */
  fotoFill?: boolean;

  // ── Datos técnicos (ficha ampliada) ──
  pigmento?: Loc;
  /** intensidad de color, p.ej. "EV ~70 (pH 3)" */
  intensidad?: string;
  /** estabilidad / pH óptimo */
  ph?: Loc;
  /** dosis típica de uso (solo cuando se conoce) */
  dosis?: string;
  /** formato físico */
  formato?: Loc;
  /** vida útil */
  vidaUtil?: Loc;
  /** alternativa natural a (colorante sintético) */
  alternativaA?: string;
  /** cumplimiento regulatorio (versión comercial) */
  regulatorio?: Loc;
  /** true = mezcla/blend sin ficha técnica completa (datos básicos) */
  blend?: boolean;
}

export const FAMILIAS: { id: Familia; label: Loc; hex: string }[] = [
  { id: "rojos",     label: { es: "Rojos",     en: "Reds" },     hex: "#DA291C" },
  { id: "rosas",     label: { es: "Rosas y magentas", en: "Pinks & magentas" }, hex: "#C8197E" },
  { id: "purpuras",  label: { es: "Púrpuras",  en: "Purples" },  hex: "#6A1F74" },
  { id: "azules",    label: { es: "Azules",    en: "Blues" },    hex: "#00A3E0" },
  { id: "amarillos", label: { es: "Amarillos", en: "Yellows" },  hex: "#FFC72C" },
  { id: "naranjas",  label: { es: "Naranjas",  en: "Oranges" },  hex: "#FF6900" },
  { id: "marrones",  label: { es: "Marrones",  en: "Browns" },   hex: "#8B4720" },
];

/** Certificaciones estándar de la línea (los colores con ficha técnica las comparten) */
export const CERTIFICACIONES: Loc[] = [
  { es: "Sin Gluten", en: "Gluten Free" },
  { es: "Sin OGM", en: "Non-GMO" },
  { es: "Origen Natural", en: "Natural" },
  { es: "Sin BSE-TSE", en: "BSE-TSE Free" },
  { es: "Kosher", en: "Kosher" },
  { es: "Apto Veganos", en: "Vegan" },
  { es: "Halal", en: "Halal" },
];

const SOLUBLE_5A: Pick<Colorante, "formato" | "vidaUtil"> = {
  formato: { es: "Polvo soluble, sin soporte (carrier-free)", en: "Soluble powder, carrier-free" },
  vidaUtil: { es: "5 años en almacenamiento seco", en: "5 years in dry storage" },
};

export const COLORANTES: Colorante[] = [
  // ───────────── ROJOS ─────────────
  {
    id: "rojo-rabano",
    hex: "#DA291C",
    familia: "rojos",
    enHome: true,
    foto: "/colores/rojo-rabano.jpg",
    fotoFill: true,
    nombre: { es: "Rojo Rábano", en: "Radish Red" },
    fuente: { es: "Rábano", en: "Radish" },
    ingredientes: { es: "Rábano rojo y ácido cítrico.", en: "Red radish and citric acid." },
    desc: {
      es: "Rojo intenso y muy estable en pH bajo. La mejor alternativa natural a los rojos sintéticos.",
      en: "Vibrant red, highly stable at low pH. The best natural alternative to synthetic reds.",
    },
    apps: {
      es: ["Bebidas y energizantes", "Gomitas y golosinas", "Helados de agua"],
      en: ["Beverages & energy drinks", "Gummies & candy", "Frozen popsicles"],
    },
    pigmento: { es: "Antocianinas", en: "Anthocyanins" },
    intensidad: "EV ~70 (pH 3)",
    ph: { es: "Óptimo en pH ácido (2–4)", en: "Best at acidic pH (2–4)" },
    dosis: "0,005 – 0,01 %",
    alternativaA: "Red 40",
    regulatorio: { es: "Apto uso alimentario · US FDA 21 CFR 73.260 · UE NATCOL", en: "Food grade · US FDA 21 CFR 73.260 · EU NATCOL" },
    ...SOLUBLE_5A,
  },
  {
    id: "rojo-uva",
    hex: "#A50034",
    familia: "rojos",
    enHome: true,
    foto: "/colores/rojo-uva.jpg",
    fotoFill: true,
    nombre: { es: "Rojo Uva", en: "Grape Red" },
    fuente: { es: "Uva", en: "Grape" },
    ingredientes: { es: "Uvas.", en: "Grapes." },
    desc: {
      es: "El rojo clásico de la uva tinta, listo para alimentos y bebidas.",
      en: "The classic red of red grape, ready for food and beverages.",
    },
    apps: {
      es: ["Bebidas y jugos", "Postres", "Confitería"],
      en: ["Beverages & juices", "Desserts", "Confectionery"],
    },
    pigmento: { es: "Antocianinas (E163)", en: "Anthocyanins (E163)" },
    intensidad: "EV ~22 (pH 3)",
    ph: { es: "Óptimo en pH ácido", en: "Best at acidic pH" },
    regulatorio: { es: "Apto uso alimentario · US FDA 21 CFR 73.250 · UE E163", en: "Food grade · US FDA 21 CFR 73.250 · EU E163" },
    ...SOLUBLE_5A,
  },
  {
    id: "zanahoria-roja",
    hex: "#D81E34",
    familia: "rojos",
    enHome: true,
    foto: "/colores/rojo-zanahoria-ficha.webp",
    fotoFill: true,
    nombre: { es: "Rojo Zanahoria", en: "Carrot Red" },
    fuente: { es: "Zanahoria", en: "Carrot" },
    ingredientes: { es: "Zanahoria morada / negra y ácido cítrico.", en: "Purple / black carrot and citric acid." },
    desc: {
      es: "Rojo de alta intensidad a partir de zanahoria púrpura, ideal para tonos profundos.",
      en: "High-intensity red from purple carrot, ideal for deep shades.",
    },
    apps: {
      es: ["Bebidas", "Confitería", "Lácteos"],
      en: ["Beverages", "Confectionery", "Dairy"],
    },
    pigmento: { es: "Antocianinas", en: "Anthocyanins" },
    intensidad: "EV ~60 (pH 3)",
    ph: { es: "Óptimo en pH ácido", en: "Best at acidic pH" },
    alternativaA: "Red 40",
    regulatorio: { es: "Apto uso alimentario · US FDA 21 CFR 73.260 · UE NATCOL", en: "Food grade · US FDA 21 CFR 73.260 · EU NATCOL" },
    ...SOLUBLE_5A,
  },
  {
    id: "rojo-remolacha",
    hex: "#B21E48",
    familia: "rojos",
    enHome: true,
    foto: "/colores/rojo-remolacha.jpg",
    fotoFill: true,
    blend: true,
    nombre: { es: "Rojo Remolacha", en: "Beet Red" },
    fuente: { es: "Remolacha", en: "Beet" },
    regulatorio: { es: "Apto uso alimentario · US FDA 21 CFR 73.40 · UE E162", en: "Food grade · US FDA 21 CFR 73.40 · EU E162" },
    desc: {
      es: "Rojo ideal para aplicaciones de pH neutro, como lácteos, helados y rellenos.",
      en: "Red ideal for neutral pH applications such as dairy, ice cream and fillings.",
    },
    apps: {
      es: ["Lácteos y yogures", "Helados", "Rellenos y coberturas"],
      en: ["Dairy & yogurt", "Ice cream", "Fillings & coatings"],
    },
    pigmento: { es: "Betalaínas", en: "Betalains" },
    ph: { es: "Ideal en pH neutro (5–7)", en: "Ideal at neutral pH (5–7)" },
  },
  // ───────────── ROSAS Y MAGENTAS ─────────────
  {
    id: "magenta",
    hex: "#C8197E",
    familia: "rosas",
    enHome: true,
    blend: true,
    foto: "/colores/magenta.jpg",
    fotoFill: true,
    nombre: { es: "Magenta", en: "Magenta" },
    fuente: { es: "Mezcla natural", en: "Natural blend" },
    regulatorio: { es: "Apto uso alimentario · US FDA 21 CFR 73.260 · UE NATCOL", en: "Food grade · US FDA 21 CFR 73.260 · EU NATCOL" },
    desc: {
      es: "Magenta brillante para tonos llamativos en bebidas y confitería. Se desarrolla a medida.",
      en: "Bright magenta for eye-catching tones in beverages and confectionery. Made to measure.",
    },
    apps: {
      es: ["Bebidas", "Gomitas", "Glaseados"],
      en: ["Beverages", "Gummies", "Glazes"],
    },
  },
  {
    id: "rosa",
    hex: "#EF5DA8",
    familia: "rosas",
    enHome: true,
    foto: "/colores/rosa.jpg",
    fotoFill: true,
    blend: true,
    nombre: { es: "Rosa", en: "Pink" },
    fuente: { es: "Mezcla natural", en: "Natural blend" },
    regulatorio: { es: "Apto uso alimentario · US FDA 21 CFR 73.260 · UE NATCOL", en: "Food grade · US FDA 21 CFR 73.260 · EU NATCOL" },
    desc: {
      es: "Rosa suave y limpio, muy versátil para repostería y lácteos. Se desarrolla a medida.",
      en: "Soft, clean pink — very versatile for pastry and dairy. Made to measure.",
    },
    apps: {
      es: ["Repostería", "Lácteos", "Marshmallows"],
      en: ["Pastry", "Dairy", "Marshmallows"],
    },
  },
  // ───────────── PÚRPURAS ─────────────
  {
    id: "purpura-uva",
    hex: "#6A1F74",
    familia: "purpuras",
    enHome: true,
    foto: "/colores/purpura-uva.jpg",
    fotoFill: true,
    nombre: { es: "Púrpura Uva", en: "Grape Purple" },
    fuente: { es: "Uva", en: "Grape" },
    desc: {
      es: "Tonos violáceos profundos de la uva, con gran riqueza de matices.",
      en: "Deep violet tones from grape, with rich nuance.",
    },
    apps: {
      es: ["Bebidas", "Postres", "Confitería"],
      en: ["Beverages", "Desserts", "Confectionery"],
    },
    pigmento: { es: "Antocianinas (E163)", en: "Anthocyanins (E163)" },
    intensidad: "EV ~22 (pH 3)",
    ph: { es: "Óptimo en pH ácido", en: "Best at acidic pH" },
    regulatorio: { es: "Apto uso alimentario · US FDA 21 CFR 73.250 · UE E163", en: "Food grade · US FDA 21 CFR 73.250 · EU E163" },
    ...SOLUBLE_5A,
  },
  {
    id: "purpura-batata",
    hex: "#6E2585",
    familia: "purpuras",
    enHome: true,
    foto: "/colores/purpura-batata.jpg",
    fotoFill: true,
    nombre: { es: "Púrpura Batata", en: "Sweet Potato Purple" },
    fuente: { es: "Batata morada", en: "Purple sweet potato" },
    ingredientes: { es: "Batata morada y ácido cítrico.", en: "Purple sweet potato and citric acid." },
    desc: {
      es: "Púrpura estable y natural, ideal para bebidas y helados.",
      en: "Stable, natural purple, ideal for beverages and ice cream.",
    },
    apps: {
      es: ["Bebidas", "Helados", "Gomitas"],
      en: ["Beverages", "Ice cream", "Gummies"],
    },
    pigmento: { es: "Antocianinas", en: "Anthocyanins" },
    intensidad: "EV ~65 (pH 3)",
    ph: { es: "Óptimo en pH ácido", en: "Best at acidic pH" },
    regulatorio: { es: "Apto uso alimentario · US FDA 21 CFR 73.260 · UE NATCOL", en: "Food grade · US FDA 21 CFR 73.260 · EU NATCOL" },
    ...SOLUBLE_5A,
  },
  {
    id: "zanahoria-purpura",
    hex: "#9A2D7A",
    familia: "purpuras",
    foto: "/colores/purpura-zanahoria-ficha.webp",
    fotoFill: true,
    nombre: { es: "Púrpura Zanahoria", en: "Carrot Purple" },
    fuente: { es: "Zanahoria", en: "Carrot" },
    ingredientes: { es: "Zanahoria morada / negra y ácido cítrico.", en: "Purple / black carrot and citric acid." },
    desc: {
      es: "Púrpura natural de zanahoria, versátil y estable en pH ácido.",
      en: "Natural purple from carrot, versatile and stable at acidic pH.",
    },
    apps: {
      es: ["Bebidas", "Confitería", "Lácteos"],
      en: ["Beverages", "Confectionery", "Dairy"],
    },
    pigmento: { es: "Antocianinas", en: "Anthocyanins" },
    intensidad: "EV ~45 (pH 3)",
    ph: { es: "Óptimo en pH ácido", en: "Best at acidic pH" },
    regulatorio: { es: "Apto uso alimentario · US FDA 21 CFR 73.260 · UE NATCOL", en: "Food grade · US FDA 21 CFR 73.260 · EU NATCOL" },
    ...SOLUBLE_5A,
  },
  // ───────────── AZULES ─────────────
  {
    id: "azul-spirulina",
    hex: "#00A3E0",
    familia: "azules",
    enHome: true,
    foto: "/colores/azul-spirulina.jpg",
    fotoFill: true,
    nombre: { es: "Azul Spirulina", en: "Spirulina Blue" },
    fuente: { es: "Spirulina", en: "Spirulina" },
    ingredientes: { es: "Espirulina, trehalosa y citrato de sodio.", en: "Spirulina, trehalose and sodium citrate." },
    desc: {
      es: "Azul brillante natural, la mejor alternativa a los azules sintéticos.",
      en: "Bright natural blue, the best alternative to synthetic blues.",
    },
    apps: {
      es: ["Bebidas", "Golosinas", "Glaseados"],
      en: ["Beverages", "Candy", "Glazes"],
    },
    pigmento: { es: "Ficocianina", en: "Phycocyanin" },
    intensidad: "EV ~19 (pH 6)",
    ph: { es: "Estable en pH > 4 · sensible al calor", en: "Stable at pH > 4 · heat sensitive" },
    dosis: "0,05 %",
    alternativaA: "Blue 1",
    regulatorio: { es: "Apto uso alimentario · US FDA 21 CFR 73.530 · UE NATCOL", en: "Food grade · US FDA 21 CFR 73.530 · EU NATCOL" },
    formato: { es: "Polvo soluble", en: "Soluble powder" },
    vidaUtil: { es: "2 años en almacenamiento seco", en: "2 years in dry storage" },
  },
  {
    id: "butterfly-pea",
    hex: "#3F51B5",
    familia: "azules",
    foto: "/colores/butterfly-pea.jpg",
    fotoFill: true,
    nombre: { es: "Azul Butterfly Pea", en: "Butterfly Pea Blue" },
    fuente: { es: "Flor de Butterfly Pea", en: "Butterfly pea flower" },
    ingredientes: { es: "Extracto de flor de guisante de mariposa.", en: "Butterfly pea flower extract." },
    desc: {
      es: "Vira de azul a púrpura según el pH — efecto natural sorprendente.",
      en: "Shifts from blue to purple with pH — a striking natural effect.",
    },
    apps: {
      es: ["Bebidas", "Helados", "Gomitas"],
      en: ["Beverages", "Ice cream", "Gummies"],
    },
    pigmento: { es: "Antocianinas", en: "Anthocyanins" },
    intensidad: "EV ~33 (pH 3)",
    ph: { es: "Púrpura en pH ≤ 4 · azul en pH > 4", en: "Purple at pH ≤ 4 · blue at pH > 4" },
    regulatorio: { es: "Apto uso alimentario · US FDA 21 CFR 73.69", en: "Food grade · US FDA 21 CFR 73.69" },
    ...SOLUBLE_5A,
  },
  // ───────────── AMARILLOS ─────────────
  {
    id: "amarillo-curcuma",
    hex: "#FFC72C",
    familia: "amarillos",
    enHome: true,
    foto: "/colores/amarillo-curcuma.jpg",
    fotoFill: true,
    nombre: { es: "Amarillo Cúrcuma", en: "Turmeric Yellow" },
    fuente: { es: "Cúrcuma", en: "Turmeric" },
    ingredientes: { es: "Cúrcuma, maltodextrina, azúcar invertido, goma arábiga, ácido ascórbico, alfa-tocoferol, sorbato de potasio y ácido cítrico.", en: "Turmeric, maltodextrin, invert sugar, gum arabic, ascorbic acid, alpha-tocopherol, potassium sorbate and citric acid." },
    desc: {
      es: "Amarillo cálido y estable en todo el rango de pH alimentario.",
      en: "Warm yellow, stable across the full food pH range.",
    },
    apps: {
      es: ["Bebidas", "Panadería", "Snacks"],
      en: ["Beverages", "Bakery", "Snacks"],
    },
    pigmento: { es: "Curcumina", en: "Curcumin" },
    ph: { es: "Estable en todo el rango de pH · sensible a la luz", en: "Stable across all pH · light sensitive" },
    dosis: "0,01 %",
    alternativaA: "Yellow 5",
    regulatorio: { es: "Apto uso alimentario · US FDA 21 CFR 73.600 · UE E100", en: "Food grade · US FDA 21 CFR 73.600 · EU E100" },
    formato: { es: "Polvo (con maltodextrina)", en: "Powder (with maltodextrin)" },
    vidaUtil: { es: "5 años en almacenamiento seco", en: "5 years in dry storage" },
  },
  {
    id: "amarillo-cartamo",
    hex: "#F2D734",
    familia: "amarillos",
    foto: "/colores/amarillo-cartamo.jpg",
    fotoFill: true,
    nombre: { es: "Amarillo Cártamo", en: "Safflower Yellow" },
    fuente: { es: "Cártamo", en: "Safflower" },
    ingredientes: { es: "Cártamo.", en: "Safflower." },
    desc: {
      es: "Amarillo limpio y estable, muy versátil para alimentos y bebidas.",
      en: "Clean, stable yellow — very versatile for food and beverages.",
    },
    apps: {
      es: ["Bebidas", "Confitería", "Lácteos"],
      en: ["Beverages", "Confectionery", "Dairy"],
    },
    pigmento: { es: "Pigmentos de cártamo", en: "Safflower pigments" },
    intensidad: "EV ~90 (pH 5)",
    ph: { es: "Estable en todo el rango de pH", en: "Stable across all pH" },
    alternativaA: "Yellow 5",
    regulatorio: { es: "Apto uso alimentario · UE NATCOL (Extracto de cártamo)", en: "Food grade · EU NATCOL (Safflower extract)" },
    formato: { es: "Polvo soluble, sin soporte (carrier-free)", en: "Soluble powder, carrier-free" },
    vidaUtil: { es: "2 años en almacenamiento seco", en: "2 years in dry storage" },
  },
  // ───────────── NARANJAS ─────────────
  {
    id: "naranja",
    hex: "#FF6900",
    familia: "naranjas",
    enHome: true,
    foto: "/colores/naranja.jpg",
    fotoFill: true,
    nombre: { es: "Naranja", en: "Orange" },
    fuente: { es: "Rábano y cúrcuma", en: "Radish & turmeric" },
    ingredientes: { es: "Rábano rojo, cúrcuma, maltodextrina, azúcar invertido, goma arábiga, ácido ascórbico, alfa-tocoferol, sorbato de potasio y ácido cítrico.", en: "Red radish, turmeric, maltodextrin, invert sugar, gum arabic, ascorbic acid, alpha-tocopherol, potassium sorbate and citric acid." },
    desc: {
      es: "Naranja vibrante a partir de rábano y cúrcuma, para tonos cítricos.",
      en: "Vibrant orange from radish and turmeric, for citrus tones.",
    },
    apps: {
      es: ["Bebidas", "Golosinas", "Snacks"],
      en: ["Beverages", "Candy", "Snacks"],
    },
    pigmento: { es: "Antocianinas y curcumina", en: "Anthocyanins & curcumin" },
    ph: { es: "Más estable en pH ≤ 4,5", en: "Most stable at pH ≤ 4.5" },
    alternativaA: "Yellow 6",
    regulatorio: { es: "Apto uso alimentario · US FDA 21 CFR 73.260 y 73.600", en: "Food grade · US FDA 21 CFR 73.260 & 73.600" },
    formato: { es: "Polvo (con maltodextrina)", en: "Powder (with maltodextrin)" },
    vidaUtil: { es: "Consultar según formulación", en: "Consult per formulation" },
  },
  // ───────────── MARRONES ─────────────
  {
    id: "marron-zanahoria",
    hex: "#8B4720",
    familia: "marrones",
    foto: "/colores/marron-zanahoria-ficha.webp",
    fotoFill: true,
    nombre: { es: "Marrón Zanahoria", en: "Carrot Brown" },
    fuente: { es: "Zanahoria", en: "Carrot" },
    ingredientes: { es: "Zanahoria morada / negra y ácido cítrico.", en: "Purple / black carrot and citric acid." },
    desc: {
      es: "Marrón natural y estable, ideal para reemplazar el caramelo sintético.",
      en: "Natural, stable brown, ideal to replace synthetic caramel.",
    },
    apps: {
      es: ["Panadería", "Salsas", "Bebidas"],
      en: ["Bakery", "Sauces", "Beverages"],
    },
    pigmento: { es: "Antocianinas", en: "Anthocyanins" },
    intensidad: "EV ~17 (pH 3)",
    ph: { es: "Estable en todo el rango de pH", en: "Stable across all pH" },
    regulatorio: { es: "Apto uso alimentario · US FDA 21 CFR 73.260 · UE NATCOL", en: "Food grade · US FDA 21 CFR 73.260 · EU NATCOL" },
    ...SOLUBLE_5A,
  },
];

export const COLORES_HOME = COLORANTES.filter((c) => c.enHome);
