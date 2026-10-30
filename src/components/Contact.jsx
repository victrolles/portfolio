import { profile, ui } from "../content.js";
import { Download, GitHub, LinkedIn } from "./Icons.jsx";

export default function Contact({ lang }) {
  const { links } = profile;
  const email = links.email.replace("mailto:", "");

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-32">
      <h2 className="font-serif text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.02em]">
        {ui.sections.contact_title[lang]}
      </h2>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        {ui.sections.contact_sub[lang]}
      </p>

      <a
        href={links.email}
        className="mt-12 inline-block border-b border-ink/20 pb-1 text-[clamp(1.5rem,4vw,2.5rem)] font-medium tracking-[-0.02em] transition-colors hover:border-accent hover:text-accent"
      >
        {email}
      </a>

      <div className="mt-12 flex flex-wrap gap-3">
        <a
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost"
        >
          <LinkedIn />
          {ui.actions.linkedin[lang]}
        </a>
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost"
        >
          <GitHub />
          {ui.actions.github[lang]}
        </a>
        <a
          href={links.cv[lang]}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          <Download />
          {ui.actions.cv[lang]}
        </a>
      </div>
    </section>
  );
}
