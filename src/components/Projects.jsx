import { projects, ui } from "../content.js";
import { GitHub, Globe } from "./Icons.jsx";

function Media({ media, title, lang, className = "" }) {
  // "contain" keeps portrait or diagram media whole inside the frame.
  const fit = media?.fit === "contain" ? "object-contain p-4" : "object-cover";

  if (media?.src && media.type === "video") {
    return (
      <div className={`media-frame ${className}`}>
        <video
          className={`size-full ${fit}`}
          src={media.src}
          poster={media.poster || undefined}
          controls
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    );
  }

  if (media?.src && media.type === "image") {
    return (
      <div className={`media-frame ${className}`}>
        <img
          src={media.src}
          alt={title}
          loading="lazy"
          className={`size-full ${fit}`}
        />
      </div>
    );
  }

  return (
    <div
      className={`media-frame flex items-center justify-center text-sm text-faint ${className}`}
    >
      {ui.actions.demo_soon[lang]}
    </div>
  );
}

function Links({ project, lang }) {
  const hasAny = project.website || project.link || project.soon === "link";
  if (!hasAny) return null;

  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
      {project.website && (
        <a
          href={project.website}
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          <Globe />
          {ui.actions.website[lang]}
        </a>
      )}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          <GitHub />
          {ui.actions.code[lang]}
        </a>
      )}
      {!project.link && project.soon === "link" && (
        <span className="text-sm text-faint">{ui.actions.link_soon[lang]}</span>
      )}
    </div>
  );
}

function Stack({ items }) {
  return (
    <p className="chip mt-5 flex flex-wrap gap-x-3 gap-y-1">
      {items.map((s) => (
        <span key={s}>{s}</span>
      ))}
    </p>
  );
}

// The first project gets a wide split layout, the rest share a two-column grid.
function Featured({ project, lang }) {
  return (
    <article className="surface grid overflow-hidden p-3 lg:grid-cols-[1fr_1.35fr]">
      <div className="flex flex-col p-6 sm:p-9">
        <h3 className="text-3xl font-medium tracking-[-0.02em]">
          {project.title[lang]}
        </h3>
        <p className="mt-4 leading-relaxed text-ink/80">
          {project.description[lang]}
        </p>
        <Stack items={project.stack} />
        <div className="mt-auto">
          <Links project={project} lang={lang} />
        </div>
      </div>
      <Media
        media={project.media}
        title={project.title[lang]}
        lang={lang}
        className="aspect-[16/10] lg:aspect-auto lg:min-h-[420px]"
      />
    </article>
  );
}

function Card({ project, lang }) {
  return (
    <article className="surface flex flex-col p-3">
      <Media
        media={project.media}
        title={project.title[lang]}
        lang={lang}
        className="aspect-[16/10]"
      />
      <div className="flex flex-1 flex-col px-4 pt-6 pb-5 sm:px-5">
        <h3 className="text-xl font-medium tracking-[-0.015em]">
          {project.title[lang]}
        </h3>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
          {project.description[lang]}
        </p>
        <Stack items={project.stack} />
        <div className="mt-auto">
          <Links project={project} lang={lang} />
        </div>
      </div>
    </article>
  );
}

export default function Projects({ lang }) {
  const [first, ...rest] = projects;

  return (
    <section id="projects" className="bg-mist py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-serif text-5xl tracking-[-0.01em] sm:text-6xl">
            {ui.sections.projects_title[lang]}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {ui.sections.projects_sub[lang]}
          </p>
        </div>

        <div className="mt-14 grid gap-6">
          {first && <Featured project={first} lang={lang} />}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Card key={p.id} project={p} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
