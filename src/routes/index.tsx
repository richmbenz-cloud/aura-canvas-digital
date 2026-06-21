import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import p2 from "@/assets/project-2.jpg";
import p1 from "@/assets/project-1.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aura Studio Arq — Arquitectura, espacio y visión contemporánea" },
      {
        name: "description",
        content:
          "Estudio de arquitectura, interiorismo y visualización 3D. Portafolio de proyectos residenciales y comerciales con enfoque editorial y contemporáneo.",
      },
      { property: "og:title", content: "Aura Studio Arq" },
      { property: "og:description", content: "Arquitectura, interiorismo y visualización contemporánea." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Home,
});

const services = [
  { n: "01", t: "Arquitectura", d: "Proyecto integral desde el concepto hasta la obra terminada. Vivienda, comercial y cultural." },
  { n: "02", t: "Diseño Interior", d: "Espacios habitados con carácter: paleta material, mobiliario a medida y curaduría editorial." },
  { n: "03", t: "Visualización 3D", d: "Renders fotorrealistas y recorridos virtuales para anticipar la atmósfera del proyecto." },
  { n: "04", t: "Dirección Creativa", d: "Acompañamiento estratégico para marcas, desarrolladores y proyectos hospitality." },
];

const igPosts = [p2, p5, p1, p6, p4, p3];

function Home() {
  const [active, setActive] = useState<typeof projects[number] | null>(null);
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Projects onOpen={setActive} />
      <Services />
      <Instagram />
      <Contact />
      <Footer />
      {active && <ProjectDialog project={active} onClose={() => setActive(null)} />}
    </main>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links: [string, string][] = [
    ["Estudio", "#estudio"],
    ["Proyectos", "#proyectos"],
    ["Servicios", "#servicios"],
    ["Diario", "#diario"],
    ["Contacto", "#contacto"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="font-serif text-xl md:text-2xl tracking-tight">
          Aura <span className="italic text-muted-foreground">studio</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-[13px] tracking-wide text-foreground/80">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="hover:text-foreground transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#contacto" className="hidden md:inline-flex items-center text-[13px] tracking-[0.15em] uppercase border-b border-foreground/40 pb-0.5 hover:border-foreground">
          Iniciar proyecto
        </a>
        <button aria-label="Menú" className="md:hidden grid h-9 w-9 place-items-center" onClick={() => setOpen((v) => !v)}>
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-6 bg-foreground" />
            <span className="block h-px w-6 bg-foreground" />
          </span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-6 py-4">
            {links.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-3 text-base font-serif border-b border-border/50 last:border-0">{l}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden">
      <img src={hero} alt="Interior arquitectónico contemporáneo en travertino" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover slow-zoom" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1" />
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 pb-16 md:pb-24 text-white reveal">
          <p className="eyebrow text-white/80 mb-6">Estudio · Ciudad de México</p>
          <h1 className="font-serif text-[10vw] md:text-[6.5vw] leading-[0.95] tracking-tight max-w-[14ch]">
            Arquitectura,<br />
            espacio y <em className="italic font-light">visión</em><br />
            contemporánea.
          </h1>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
            <p className="max-w-sm text-sm md:text-base text-white/85 leading-relaxed">
              Aura Studio Arq es un estudio multidisciplinario dedicado al diseño de espacios con narrativa, atmósfera y propósito.
            </p>
            <a href="#proyectos" className="group inline-flex items-center gap-3 text-[13px] tracking-[0.2em] uppercase border-b border-white/60 pb-1 hover:border-white">
              Ver proyectos
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="eyebrow">{n}</span>
      <span className="h-px w-12 bg-foreground/30" />
      <span className="eyebrow">{label}</span>
    </div>
  );
}

function About() {
  return (
    <section id="estudio" className="mx-auto max-w-[1600px] px-6 md:px-10 py-28 md:py-40">
      <SectionLabel n="01" label="El Estudio" />
      <div className="mt-12 grid gap-12 md:gap-20 md:grid-cols-12">
        <div className="md:col-span-7">
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Diseñamos espacios que se habitan despacio,<br />
            <em className="italic text-stone">con materia, luz y silencio.</em>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 text-[15px] leading-relaxed text-foreground/85 max-w-2xl">
            <p>Aura es un estudio dedicado a la arquitectura, el interiorismo y la visualización arquitectónica. Cada proyecto nace de una lectura cuidadosa del lugar, del cliente y de la luz que los acompaña.</p>
            <p>Trabajamos en la frontera entre estética y función, entre la narrativa y la materia. Buscamos espacios donde la simplicidad sea radical y la atmósfera, inevitable.</p>
          </div>
          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-xl border-t border-border pt-8">
            <div><dt className="eyebrow">Fundado</dt><dd className="font-serif text-3xl mt-2">2019</dd></div>
            <div><dt className="eyebrow">Proyectos</dt><dd className="font-serif text-3xl mt-2">+40</dd></div>
            <div><dt className="eyebrow">Disciplinas</dt><dd className="font-serif text-3xl mt-2">04</dd></div>
          </dl>
        </div>
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <img src={about} alt="Detalle arquitectónico" loading="lazy" width={1280} height={1600} className="h-full w-full object-cover" />
          </div>
          <p className="mt-4 text-xs text-muted-foreground tracking-wide">Detalle de obra — Casa Travertino, 2024</p>
        </div>
      </div>
    </section>
  );
}

function Projects({ onOpen }: { onOpen: (p: typeof projects[number]) => void }) {
  return (
    <section id="proyectos" className="bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-28 md:py-40">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionLabel n="02" label="Proyectos seleccionados" />
            <h2 className="mt-8 font-serif text-5xl md:text-7xl leading-[1] tracking-tight max-w-[14ch]">
              Una colección<br /><em className="italic">de obras</em> recientes.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">Residencial, comercial y visualización conceptual entre 2022 y 2024.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-20">
          {projects.map((p, i) => {
            const layout = ["md:col-span-7", "md:col-span-5 md:mt-32", "md:col-span-5", "md:col-span-7 md:mt-24", "md:col-span-6", "md:col-span-6 md:mt-16"][i];
            const ratio = p.span === "tall" ? "aspect-[3/4]" : "aspect-[4/3]";
            return (
              <button key={p.id} onClick={() => onOpen(p)} className={`group text-left ${layout}`}>
                <div className={`relative overflow-hidden bg-muted ${ratio}`}>
                  <img src={p.img} alt={p.title} loading="lazy" width={1280} height={1600} className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl md:text-3xl truncate">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.place} · {p.tag}</p>
                  </div>
                  <span className="shrink-0 eyebrow">{p.year}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-[1600px] px-6 md:px-10 py-28 md:py-40">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel n="03" label="Servicios" />
          <h2 className="mt-8 font-serif text-5xl md:text-6xl leading-[1] tracking-tight">
            Una práctica <em className="italic">multidisciplinaria.</em>
          </h2>
          <p className="mt-6 text-sm text-muted-foreground max-w-xs">Cuatro disciplinas conviven en el estudio bajo una misma sensibilidad editorial.</p>
        </div>
        <ul className="md:col-span-8 divide-y divide-border border-y border-border">
          {services.map((s) => (
            <li key={s.n} className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-6 md:gap-12 py-8 md:py-10 hover:bg-accent/40 transition-colors px-2 md:px-4 -mx-2 md:-mx-4">
              <span className="eyebrow">{s.n}</span>
              <div className="min-w-0">
                <h3 className="font-serif text-3xl md:text-4xl">{s.t}</h3>
                <p className="mt-3 text-sm text-foreground/75 max-w-xl leading-relaxed">{s.d}</p>
              </div>
              <span className="hidden md:inline-block text-xl text-muted-foreground transition-transform group-hover:translate-x-1">→</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Instagram() {
  return (
    <section id="diario" className="bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-28 md:py-36">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionLabel n="04" label="Diario visual" />
            <h2 className="mt-8 font-serif text-5xl md:text-6xl leading-[1] tracking-tight">@aura.studioarq</h2>
          </div>
          <a href="https://www.instagram.com/aura.studioarq/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-[13px] tracking-[0.2em] uppercase border-b border-foreground/40 pb-1 hover:border-foreground self-start md:self-end">
            Seguir en Instagram →
          </a>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {igPosts.map((src, i) => (
            <a key={i} href="https://www.instagram.com/aura.studioarq/" target="_blank" rel="noreferrer" className="group relative aspect-square overflow-hidden bg-muted">
              <img src={src} alt={`Publicación ${i + 1}`} loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contacto" className="mx-auto max-w-[1600px] px-6 md:px-10 py-28 md:py-40">
      <div className="grid gap-16 md:gap-24 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionLabel n="05" label="Contacto" />
          <h2 className="mt-8 font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Hablemos <em className="italic">de tu próximo</em> espacio.
          </h2>
          <div className="mt-12 space-y-8 text-sm">
            <div>
              <p className="eyebrow">Email</p>
              <a href="mailto:hola@aurastudioarq.com" className="mt-2 block font-serif text-2xl hover:underline">hola@aurastudioarq.com</a>
            </div>
            <div>
              <p className="eyebrow">Estudio</p>
              <p className="mt-2 font-serif text-2xl">Ciudad de México</p>
            </div>
            <div>
              <p className="eyebrow">Social</p>
              <a href="https://www.instagram.com/aura.studioarq/" target="_blank" rel="noreferrer" className="mt-2 block font-serif text-2xl hover:underline">Instagram ↗</a>
            </div>
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          <Field label="Nombre" name="nombre" required />
          <Field label="Correo" name="email" type="email" required />
          <Field label="Tipo de proyecto" name="tipo" />
          <Field label="Ubicación" name="lugar" />
          <div className="md:col-span-2">
            <Field label="Cuéntanos sobre tu proyecto" name="mensaje" textarea />
          </div>
          <div className="md:col-span-2 flex items-center justify-between border-t border-border pt-8">
            <p className="text-xs text-muted-foreground">Respondemos en menos de 48 horas hábiles.</p>
            <button type="submit" className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-[12px] tracking-[0.25em] uppercase hover:bg-foreground/85 transition-colors">
              {sent ? "Mensaje enviado" : "Enviar mensaje"}
              {!sent && <span>→</span>}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, textarea }: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean; }) {
  return (
    <label className="block">
      <span className="eyebrow block mb-3">{label}{required && " *"}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground outline-none py-2 font-serif text-xl resize-none transition-colors" />
      ) : (
        <input name={name} type={type} required={required} className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground outline-none py-2 font-serif text-xl transition-colors" />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Aura<br /><em className="italic text-background/60">studio arq.</em>
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-background/60">Estudio</p>
            <p className="mt-3 text-sm text-background/80">Ciudad de México<br />hola@aurastudioarq.com</p>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-background/60">Navegación</p>
            <ul className="mt-3 space-y-2 text-sm text-background/80">
              <li><a href="#estudio" className="hover:text-background">Estudio</a></li>
              <li><a href="#proyectos" className="hover:text-background">Proyectos</a></li>
              <li><a href="#servicios" className="hover:text-background">Servicios</a></li>
              <li><a href="https://www.instagram.com/aura.studioarq/" target="_blank" rel="noreferrer" className="hover:text-background">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-background/15 flex flex-col md:flex-row gap-4 justify-between text-xs text-background/60">
          <p>© {new Date().getFullYear()} Aura Studio Arq. Todos los derechos reservados.</p>
          <p>Arquitectura · Interiorismo · Visualización 3D</p>
        </div>
      </div>
    </footer>
  );
}

function ProjectDialog({ project, onClose }: { project: typeof projects[number]; onClose: () => void; }) {
  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto reveal" onClick={onClose}>
      <button onClick={onClose} className="fixed top-6 right-6 md:top-8 md:right-10 z-10 eyebrow bg-background/80 px-4 py-2 border border-border hover:bg-foreground hover:text-background transition-colors">
        Cerrar ✕
      </button>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-4">
          <span className="eyebrow">{project.tag}</span>
          <span className="h-px w-12 bg-foreground/30" />
          <span className="eyebrow">{project.year}</span>
        </div>
        <h2 className="mt-6 font-serif text-5xl md:text-8xl leading-[0.95] tracking-tight">{project.title}</h2>
        <p className="mt-4 text-muted-foreground">{project.place}</p>
        <div className="mt-12 relative overflow-hidden bg-muted">
          <img src={project.img} alt={project.title} width={1280} height={1600} className="w-full h-auto object-cover" />
        </div>
        <p className="mt-12 font-serif text-2xl md:text-3xl leading-snug max-w-3xl">{project.desc}</p>
      </div>
    </div>
  );
}