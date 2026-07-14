import { projects, ui } from "../content.js";

function Media({ media, emoji, accent, lang }) {
  const base =
    "relative mt-4 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-ink";
  // Use "contain" for vertical / portrait media so it fits fully inside
  // the horizontal frame (with a soft blurred backdrop) instead of cropping.
  const contain = media?.fit === "contain";
  const fitClass = contain ? "object-contain" : "object-cover";

  if (media?.src && media.type === "video") {
    return (
      <div className={base}>
        {contain && media.poster && (
          <img
            src={media.poster}
            aria-hidden
            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-xl"
          />
        )}
        <video
          className={`relative h-full w-full ${fitClass}`}
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
      <div className={base}>
        {contain && (
          <img
            src={media.src}
            aria-hidden
            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-xl"
          />
        )}
        <img
          src={media.src}
          alt=""
          loading="lazy"
          className={`relative h-full w-full ${fitClass}`}
        />
      </div>
    );
  }

  return (
    <div
      className={`${base} flex flex-col items-center justify-center gap-2 bg-gradient-to-br ${accent} bg-opacity-10`}
    >
      <div className="absolute inset-0 bg-ink/70" />
      <span className="relative text-4xl opacity-80">{emoji}</span>
      <span className="relative text-xs uppercase tracking-widest text-gray-400">
        {ui.actions.demo_soon[lang]}
      </span>
    </div>
  );
}

export default function Projects({ lang }) {
  return (
    <section id="projects" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-14 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {ui.sections.projects_title[lang]}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            {ui.sections.projects_sub[lang]}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-soft p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.accent}`}
              />
              <div className="mb-4 flex items-center gap-4">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.accent} text-2xl`}
                >
                  {p.emoji}
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {p.title[lang]}
                </h3>
              </div>

              <Media
                media={p.media}
                emoji={p.emoji}
                accent={p.accent}
                lang={lang}
              />

              <p className="mt-4 text-gray-400">{p.description[lang]}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-indigo-400 transition hover:text-indigo-300"
                >
                  {ui.actions.visit[lang]} →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
