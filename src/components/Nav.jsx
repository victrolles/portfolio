import { profile, ui } from "../content.js";

export default function Nav({ lang, setLang }) {
  const links = [
    { href: "#studies", label: ui.nav.studies[lang] },
    { href: "#projects", label: ui.nav.projects[lang] },
    { href: "#contact", label: ui.nav.contact[lang] },
  ];

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border border-line/80 bg-white/75 pl-6 pr-2 shadow-[0_8px_30px_-18px_rgb(29_29_31/0.25)] backdrop-blur-xl backdrop-saturate-150">
        <a href="#top" className="font-serif text-2xl leading-none text-ink">
          {profile.name}
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="ml-1 flex rounded-full bg-mist p-1 font-mono text-xs"
            role="group"
            aria-label="Language"
          >
            {["fr", "en"].map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`h-8 rounded-full px-3 uppercase transition-colors ${
                  lang === code
                    ? "bg-white text-ink shadow-[0_1px_3px_rgb(29_29_31/0.12)]"
                    : "text-muted hover:text-ink"
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
