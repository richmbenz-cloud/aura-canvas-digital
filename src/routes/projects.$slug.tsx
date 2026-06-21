import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p)
      return {
        meta: [{ title: "Proyecto no encontrado — Aura Studio Arq" }],
      };
    return {
      meta: [
        { title: `${p.title} — Aura Studio Arq` },
        { name: "description", content: p.tagline },
        { property: "og:title", content: `${p.title} — Aura Studio Arq` },
        { property: "og:description", content: p.tagline },
        { property: "og:image", content: p.cover },
        { name: "twitter:image", content: p.cover },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: NotFoundProject,
  errorComponent: ErrorProject,
  component: ProjectDetail,
});

function NotFoundProject() {
  return (
    <main className="min-h-screen grid place-items-center px-6 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="font-serif text-5xl mt-4">Proyecto no encontrado</h1>
        <Link to="/" className="inline-block mt-8 eyebrow border-b border-foreground/40 pb-1">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}

function ErrorProject({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="min-h-screen grid place-items-center px-6 text-center">
      <div>
        <h1 className="font-serif text-4xl">Algo salió mal</h1>
        <button onClick={reset} className="mt-6 eyebrow border-b border-foreground/40 pb-1">
          Reintentar
        </button>
      </div>
    </main>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <main className="min-h-screen bg-background text-foreground pb-32">
      <DetailNav />

      <header className="mx-auto max-w-[1600px] px-6 md:px-10 pt-32 md:pt-40">
        <div className="flex items-center gap-4">
          <span className="eyebrow">{project.tag}</span>
          <span className="h-px w-12 bg-foreground/30" />
          <span className="eyebrow">{project.year}</span>
          <span className="h-px w-12 bg-foreground/30" />
          <span className="eyebrow">{project.place}</span>
        </div>
        <h1 className="mt-8 font-serif text-6xl md:text-[9vw] leading-[0.92] tracking-tight max-w-[16ch]">
          {project.title}
        </h1>
        <p className="mt-8 font-serif italic text-xl md:text-3xl text-stone max-w-3xl leading-snug">
          {project.tagline}
        </p>
      </header>

      <ProjectCarousel images={project.images} />

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 mt-24 md:mt-36 grid gap-16 md:gap-24 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow">Memoria del proyecto</p>
          <div className="mt-8 space-y-6 font-serif text-2xl md:text-3xl leading-snug">
            {project.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-8 max-w-xl">
            {project.facts.map((f) => (
              <div key={f.label}>
                <dt className="eyebrow">{f.label}</dt>
                <dd className="mt-2 font-serif text-xl md:text-2xl">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <p className="eyebrow">Créditos</p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {project.credits.map((c) => (
              <li key={c.role} className="py-4 flex items-baseline justify-between gap-6">
                <span className="text-sm text-muted-foreground">{c.role}</span>
                <span className="font-serif text-lg text-right">{c.name}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <nav className="mx-auto max-w-[1600px] px-6 md:px-10 mt-32 md:mt-40 border-t border-border pt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <Link to="/" hash="proyectos" className="group inline-flex items-center gap-3 text-[13px] tracking-[0.2em] uppercase border-b border-foreground/40 pb-1 hover:border-foreground self-start">
          ← Todos los proyectos
        </Link>
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="group block text-right max-w-md self-end"
        >
          <p className="eyebrow">Siguiente proyecto</p>
          <p className="mt-3 font-serif text-3xl md:text-5xl tracking-tight group-hover:italic transition-all">
            {next.title} →
          </p>
        </Link>
      </nav>
    </main>
  );
}

function DetailNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="font-serif text-xl md:text-2xl tracking-tight">
          Aura <span className="italic text-muted-foreground">studio</span>
        </Link>
        <Link
          to="/"
          hash="proyectos"
          className="text-[13px] tracking-[0.15em] uppercase border-b border-foreground/40 pb-0.5 hover:border-foreground"
        >
          Cerrar ✕
        </Link>
      </div>
    </header>
  );
}

function ProjectCarousel({ images }: { images: { src: string; caption?: string }[] }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
  }, [embla, onSelect]);

  return (
    <section className="mt-16 md:mt-24">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((im, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 px-6 md:px-10">
              <div className="mx-auto max-w-[1400px]">
                <div className="relative bg-muted aspect-[4/3] md:aspect-[16/9] overflow-hidden">
                  <img
                    src={im.src}
                    alt={im.caption ?? `Imagen ${i + 1}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    width={1600}
                    height={1000}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 mt-6 flex items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground italic max-w-xl truncate">
          {images[selected]?.caption}
        </p>
        <div className="flex items-center gap-6 shrink-0">
          <span className="eyebrow tabular-nums">
            {String(selected + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            <button
              aria-label="Anterior"
              onClick={() => embla?.scrollPrev()}
              className="h-10 w-10 grid place-items-center border border-border hover:bg-foreground hover:text-background transition-colors"
            >
              ←
            </button>
            <button
              aria-label="Siguiente"
              onClick={() => embla?.scrollNext()}
              className="h-10 w-10 grid place-items-center border border-border hover:bg-foreground hover:text-background transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}