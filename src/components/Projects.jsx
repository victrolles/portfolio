import { projects, ui } from "../content.js";

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
              <p className="text-gray-400">{p.description[lang]}</p>

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
