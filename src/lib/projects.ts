import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export type Project = {
  slug: string;
  title: string;
  year: string;
  place: string;
  tag: string;
  cover: string;
  span: "tall" | "wide";
  tagline: string;
  description: string[];
  images: { src: string; caption?: string }[];
  credits: { role: string; name: string }[];
  facts: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "casa-travertino",
    title: "Casa Travertino",
    year: "2024",
    place: "Asia, Lima",
    tag: "Residencial",
    cover: p1,
    span: "tall",
    tagline:
      "Un refugio pétreo sobre la ladera, donde la masa material ancla el paisaje.",
    description: [
      "Refugio de fin de semana sobre una pendiente arbolada. La planta baja se asienta como un zócalo de concreto y piedra; el volumen superior, revestido en madera, se libera para capturar la última luz del día.",
      "El proyecto articula el habitar contemporáneo con la materialidad local: travertino sin pulir, concreto aparente, robles de la región. Cada decisión busca disolver la frontera entre arquitectura y paisaje.",
    ],
    images: [
      { src: p1, caption: "Fachada poniente, atardecer." },
      { src: hero, caption: "Sala principal en travertino." },
      { src: about, caption: "Detalle de muros y piso de roble." },
      { src: p5, caption: "Atrio de doble altura." },
    ],
    credits: [
      { role: "Arquitectura", name: "Aura Studio Arq" },
      { role: "Dirección de proyecto", name: "M. Aguirre" },
      { role: "Construcción", name: "Taller Norte" },
      { role: "Paisajismo", name: "Estudio Verde" },
      { role: "Fotografía", name: "Luis Gallardo" },
    ],
    facts: [
      { label: "Superficie", value: "320 m²" },
      { label: "Tipología", value: "Vivienda unifamiliar" },
      { label: "Estado", value: "Construido" },
    ],
  },
  {
    slug: "cocina-roble",
    title: "Cocina Roble",
    year: "2024",
    place: "San Isidro, Lima",
    tag: "Interiorismo",
    cover: p2,
    span: "wide",
    tagline:
      "Una reinterpretación silenciosa de la cocina como corazón doméstico.",
    description: [
      "Reinterpretación de una cocina familiar a partir de carpintería en roble blanco, mármol calacatta y herrajes en bronce envejecido.",
      "La isla central, monolítica, ordena el espacio. El despiece de los gabinetes oculta los electrodomésticos y convierte el muro en una superficie continua, casi escultórica.",
    ],
    images: [
      { src: p2, caption: "Vista general hacia el ventanal." },
      { src: p4, caption: "Detalle de carpintería en roble." },
      { src: hero, caption: "Continuidad material con la sala." },
    ],
    credits: [
      { role: "Diseño interior", name: "Aura Studio Arq" },
      { role: "Carpintería a medida", name: "Estudio Madera" },
      { role: "Piedras naturales", name: "Marmolería del Valle" },
      { role: "Fotografía", name: "Jaime Navarro" },
    ],
    facts: [
      { label: "Superficie", value: "42 m²" },
      { label: "Materiales", value: "Roble, calacatta, bronce" },
      { label: "Estado", value: "Construido" },
    ],
  },
  {
    slug: "pabellon-espejo",
    title: "Pabellón Espejo",
    year: "2023",
    place: "Cieneguilla, Lima",
    tag: "Visualización 3D",
    cover: p3,
    span: "tall",
    tagline:
      "Estudio lumínico de un pabellón con espejo de agua al atardecer.",
    description: [
      "Visualización conceptual desarrollada para presentación a cliente. El pabellón se concibe como un volumen flotante sobre un espejo de agua que duplica el cielo y suaviza el calor de la región.",
      "El render explora el momento más sensible del día: la luz cálida resbalando sobre el tarrajeo pulido y reflejándose en el agua.",
    ],
    images: [
      { src: p3, caption: "Render exterior, hora dorada." },
      { src: p5, caption: "Estudio de escalera interior." },
      { src: p1, caption: "Aproximación volumétrica." },
    ],
    credits: [
      { role: "Diseño arquitectónico", name: "Aura Studio Arq" },
      { role: "Visualización 3D", name: "Aura Studio Arq" },
      { role: "Render & post", name: "Estudio Pixel" },
    ],
    facts: [
      { label: "Programa", value: "Pabellón privado" },
      { label: "Entregables", value: "8 renders + recorrido" },
      { label: "Estado", value: "Conceptual" },
    ],
  },
  {
    slug: "casa-lino",
    title: "Casa Lino",
    year: "2023",
    place: "La Molina, Lima",
    tag: "Interiorismo",
    cover: p4,
    span: "wide",
    tagline: "Una recámara concebida como retiro: textura, luz cruda y silencio.",
    description: [
      "Recámara principal de una casa de campo. La paleta cruda —lino, cal, roble— acompaña el ritmo lento del lugar.",
      "La carpintería integral disuelve el almacenaje y permite que el espacio respire alrededor de la cama, única protagonista.",
    ],
    images: [
      { src: p4, caption: "Recámara principal." },
      { src: about, caption: "Estudio cromático." },
      { src: p2, caption: "Continuidad con áreas comunes." },
    ],
    credits: [
      { role: "Diseño interior", name: "Aura Studio Arq" },
      { role: "Textiles", name: "Casa Lino" },
      { role: "Fotografía", name: "Ana Hop" },
    ],
    facts: [
      { label: "Superficie", value: "38 m²" },
      { label: "Tipología", value: "Recámara principal" },
      { label: "Estado", value: "Construido" },
    ],
  },
  {
    slug: "atrio-luz",
    title: "Atrio Luz",
    year: "2022",
    place: "Barranco, Lima",
    tag: "Arquitectura",
    cover: p5,
    span: "tall",
    tagline:
      "Una cuña vertical de luz que acompaña al usuario entre niveles.",
    description: [
      "Intervención en un edificio existente. Se demolió la losa central para abrir un atrio que conecta verticalmente las tres plantas.",
      "La luz cenital entra contenida por muros de microcemento; el pasamanos de madera dibuja una línea cálida que ordena el recorrido.",
    ],
    images: [
      { src: p5, caption: "Vista del atrio hacia el lucernario." },
      { src: hero, caption: "Salón en el primer nivel." },
      { src: about, caption: "Encuentro material." },
    ],
    credits: [
      { role: "Arquitectura", name: "Aura Studio Arq" },
      { role: "Cálculo estructural", name: "Ing. Reyes" },
      { role: "Iluminación", name: "Lumen Estudio" },
      { role: "Fotografía", name: "Rafael Gamo" },
    ],
    facts: [
      { label: "Superficie", value: "210 m²" },
      { label: "Tipología", value: "Intervención" },
      { label: "Estado", value: "Construido" },
    ],
  },
  {
    slug: "bar-arcos",
    title: "Bar Arcos",
    year: "2024",
    place: "Barranco, Lima",
    tag: "Comercial",
    cover: p6,
    span: "wide",
    tagline: "Una sucesión de arcos que ordena la atmósfera nocturna.",
    description: [
      "Bar de autor articulado por arcos sucesivos en microcemento. La iluminación escultórica y el mobiliario hecho a medida construyen una atmósfera cálida e introspectiva.",
      "El programa se resuelve en una planta libre con barra central, gabinetes laterales y un comedor privado al fondo.",
    ],
    images: [
      { src: p6, caption: "Eje central con arcos." },
      { src: p2, caption: "Detalle de la barra." },
      { src: p4, caption: "Gabinete privado." },
    ],
    credits: [
      { role: "Diseño interior", name: "Aura Studio Arq" },
      { role: "Dirección creativa", name: "Aura Studio Arq" },
      { role: "Mobiliario", name: "Taller Sur" },
      { role: "Iluminación", name: "Lumen Estudio" },
    ],
    facts: [
      { label: "Superficie", value: "180 m²" },
      { label: "Programa", value: "Bar / restaurante" },
      { label: "Estado", value: "Construido" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}