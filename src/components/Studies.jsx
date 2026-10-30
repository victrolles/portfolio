import { studies, ui } from "../content.js";
import { Book, GitHub } from "./Icons.jsx";

function StudyAction({ study, lang }) {
  if (study.link) {
    const isRepo = study.link.includes("github.com");
    return (
      <a
        href={study.link}
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        {isRepo ? <GitHub /> : <Book />}
        {isRepo ? ui.actions.code[lang] : ui.actions.read[lang]}
      </a>
    );
  }
  if (study.soon === "article") {
    return (
      <span className="text-sm text-faint">
        {ui.actions.article_soon[lang]}
      </span>
    );
  }
  return null;
}

export default function Studies({ lang }) {
  return (
    <section id="studies" className="mx-auto max-w-6xl px-6 py-28">
      <div className="max-w-2xl">
        <h2 className="font-serif text-5xl tracking-[-0.01em] sm:text-6xl">
          {ui.sections.studies_title[lang]}
        </h2>
        <p className="mt-4 text-lg text-muted">
          {ui.sections.studies_sub[lang]}
        </p>
      </div>

      <ul className="mt-14 border-t border-ink/90">
        {studies.map((s) => (
          <li
            key={s.id}
            className="grid gap-4 border-b border-line py-9 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_10rem] md:gap-10"
          >
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.015em]">
                {s.title[lang]}
              </h3>
              <p className="chip mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {s.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </p>
            </div>

            <div>
              <p className="leading-relaxed text-ink/80">
                {s.description[lang]}
              </p>
              {s.presented && (
                <p className="mt-4 inline-flex flex-wrap items-center gap-x-2 rounded-2xl bg-accent-soft px-4 py-2.5 text-sm text-ink">
                  <a
                    href={s.presented.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-accent hover:underline hover:underline-offset-4"
                  >
                    {s.presented.label[lang]}
                  </a>
                  <span className="text-muted">{s.presented.detail[lang]}</span>
                </p>
              )}
            </div>

            <div className="md:text-right">
              <StudyAction study={s} lang={lang} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
