import { profile, ui } from "../content.js";

export default function About({ lang }) {
  return (
    <section id="about" className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-5xl tracking-[-0.01em] sm:text-6xl">
          {ui.sections.about_title[lang]}
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <figure>
            <div className="media-frame aspect-[4/3]">
              <img
                src={profile.photo}
                alt={profile.name}
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
            <figcaption className="mt-4 text-sm text-muted">
              {profile.photoCaption[lang]}
            </figcaption>
          </figure>

          <div>
            <p className="text-lg leading-relaxed text-ink/85">
              {profile.about[lang]}
            </p>

            <dl className="mt-10 divide-y divide-line border-y border-line">
              {profile.facts.map((f) => (
                <div
                  key={f.label.en}
                  className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6"
                >
                  <dt className="text-sm text-muted">{f.label[lang]}</dt>
                  <dd className="text-[0.9375rem] text-ink">{f.value[lang]}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
