import { useEffect, useState } from "react";
import { ui } from "../content.js";

export default function Nav({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#projects", label: ui.nav.projects[lang] },
    { href: "#studies", label: ui.nav.studies[lang] },
    { href: "#contact", label: ui.nav.contact[lang] },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-ink/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-bold tracking-tight text-white">
          Port<span className="text-indigo-400">folio</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-2 flex items-center rounded-full border border-white/15 p-0.5 text-xs font-semibold">
            {["fr", "en"].map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`rounded-full px-3 py-1 uppercase transition ${
                  lang === code
                    ? "bg-white text-ink"
                    : "text-gray-400 hover:text-white"
                }`}
                aria-pressed={lang === code}
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
