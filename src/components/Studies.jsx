import { studies, ui } from "../content.js";

export default function Studies({ lang }) {
  return (
    <section
      id="studies"
      className="scroll-mt-20 border-t border-white/5 bg-gradient-to-b from-ink to-ink-soft px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-14 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {ui.sections.studies_title[lang]}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            {ui.sections.studies_sub[lang]}
          </p>
        </div>

        <div className="relative space-y-6 border-l border-white/10 pl-6 sm:pl-8">
          {studies.map((s, i) => (
            <article
              key={s.id}
              className="reveal group relative rounded-2xl border border-white/10 bg-ink/60 p-6 transition duration-300 hover:border-white/20"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span
                className={`absolute -left-[2.35rem] top-7 h-4 w-4 rounded-full border-2 border-ink bg-gradient-to-br ${s.accent} sm:-left-[2.85rem]`}
              />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{s.emoji}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {s.title[lang]}
                    </h3>
                    <p className="mt-2 max-w-2xl text-gray-400">
                      {s.description[lang]}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {s.presented && (
                      <a
                        href={s.presented.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                      >
                        <span aria-hidden>🎤</span>
                        <span>
                          <span className="font-semibold text-gray-200">
                            {s.presented.label[lang]}
                          </span>
                          {s.presented.detail?.[lang] && (
                            <span> — {s.presented.detail[lang]}</span>
                          )}
                        </span>
                        <span aria-hidden>↗</span>
                      </a>
                    )}
                  </div>
                </div>

                {s.link ? (
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 self-start rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    {s.link.includes("github.com")
                      ? "GitHub"
                      : ui.actions.read[lang]}{" "}
                    →
                  </a>
                ) : (
                  s.soon === "article" && (
                    <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      {ui.actions.article_soon[lang]}
                    </span>
                  )
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
