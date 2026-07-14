import { profile, ui } from "../content.js";

export default function Contact({ lang }) {
  const { links } = profile;

  const items = [
    links.email && { label: "Email", href: links.email },
    links.github && { label: "GitHub", href: links.github },
    links.linkedin && { label: "LinkedIn", href: links.linkedin },
  ].filter(Boolean);

  return (
    <section id="contact" className="scroll-mt-20 px-6 py-24">
      <div className="reveal mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 to-fuchsia-600/10 p-10 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          {ui.sections.contact_title[lang]}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-gray-300">
          {ui.sections.contact_sub[lang]}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              target={it.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              {it.label}
            </a>
          ))}
          {links.cv && (
            <a
              href={links.cv}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-indigo-500 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
            >
              {ui.actions.cv[lang]}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
