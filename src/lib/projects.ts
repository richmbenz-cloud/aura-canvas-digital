import { hero, about, p1, p2, p3, p4, p5, p6, type ImgAsset } from "@/assets/images";

export type Project = {
  slug: string;
  title: string;
  year: string;
  place: string;
  tag: string;
  cover: ImgAsset;
  span: "tall" | "wide";
  tagline: string;
  description: string[];
  images: { src: ImgAsset; caption?: string }[];
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
      { src: p1, caption: "Sala principal en travertino." },
      { src: hero, caption: "Continuidad material hacia el comedor." },
      { src: p4, caption: "Recámara principal en tonos crudos." },
      { src: about, caption: "Paleta material del proyecto." },
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
      { src: p2, caption: "Isla central en mármol calacatta." },
      { src: hero, caption: "Continuidad material con la sala." },
      { src: p4, caption: "Detalle de carpintería en roble." },
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
    title: "Galería Cenital",
    year: "2023",
    place: "Barranco, Lima",
    tag: "Cultural",
    cover: p3,
    span: "tall",
    tagline:
      "Un espacio expositivo bañado por luz cenital que ordena la mirada.",
    description: [
      "Diseño interior de una galería de escultura contemporánea. Muros de cal blanca, piso de concreto pulido y un gran lucernario que articula el recorrido entre piezas.",
      "El proyecto trabaja la luz natural como material protagónico: la geometría del lucernario filtra la luz limeña y la convierte en atmósfera silenciosa.",
    ],
    images: [
      { src: p3, caption: "Sala principal bajo lucernario." },
      { src: p5, caption: "Stand satélite de la galería." },
      { src: p1, caption: "Zona de descanso y lectura." },
      { src: about, caption: "Materiales y curaduría." },
    ],
    credits: [
      { role: "Diseño interior", name: "Aura Studio Arq" },
      { role: "Curaduría", name: "Galería Norte" },
      { role: "Iluminación", name: "Lumen Estudio" },
      { role: "Fotografía", name: "Renzo Rebagliati" },
    ],
    facts: [
      { label: "Superficie", value: "260 m²" },
      { label: "Programa", value: "Galería de arte" },
      { label: "Estado", value: "Construido" },
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
      { src: hero, caption: "Sala adyacente en travertino." },
      { src: p2, caption: "Continuidad con áreas comunes." },
      { src: about, caption: "Estudio cromático." },
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
    title: "Stand FIL",
    year: "2024",
    place: "Jockey Club, Lima",
    tag: "Efímero",
    cover: p5,
    span: "tall",
    tagline:
      "Stand editorial para la Feria Internacional del Libro de Lima.",
    description: [
      "Diseño de stand para una editorial de arquitectura en la FIL Lima. Muros revestidos en madera clara, repisas continuas iluminadas y un mostrador escultórico de roble.",
      "El módulo se concibe como una pequeña biblioteca portátil: la curaduría del libro y la luz cálida construyen una pausa silenciosa dentro del bullicio de la feria.",
    ],
    images: [
      { src: p5, caption: "Frente principal del stand." },
      { src: hero, caption: "Sala de lectura adyacente." },
      { src: p2, caption: "Mostrador en roble a medida." },
      { src: about, caption: "Paleta material del proyecto." },
    ],
    credits: [
      { role: "Diseño espacial", name: "Aura Studio Arq" },
      { role: "Carpintería", name: "Taller Sur" },
      { role: "Iluminación", name: "Lumen Estudio" },
      { role: "Fotografía", name: "Juan Pablo Murrugarra" },
    ],
    facts: [
      { label: "Superficie", value: "48 m²" },
      { label: "Programa", value: "Stand editorial" },
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
      { src: p6, caption: "Eje central con arcos en microcemento." },
      { src: p2, caption: "Detalle de la barra." },
      { src: p4, caption: "Gabinete privado." },
      { src: hero, caption: "Lounge contiguo." },
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