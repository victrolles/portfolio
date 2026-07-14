import { profile, ui } from "../content.js";

function initials(name) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Hero({ lang }) {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-float absolute -left-20 top-10 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="animate-float-slow absolute right-0 top-40 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="animate-float absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-gray-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {profile.role[lang]}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
            {profile.name}
          </h1>
          {profile.location && (
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span aria-hidden>📍</span>
                {profile.location.current[lang]}
              </span>
              {profile.location.open?.length > 0 && (
                <span className="flex flex-wrap items-center gap-2">
                  <span className="text-gray-600">·</span>
                  <span className="text-gray-500">
                    {profile.location.openLabel[lang]}
                  </span>
                  {profile.location.open.map((city) => (
                    <span
                      key={city}
                      className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-0.5 text-xs font-medium text-indigo-300"
                    >
                      {city}
                    </span>
                  ))}
                  {profile.location.note?.[lang] && (
                    <span className="text-xs italic text-gray-500">
                      {profile.location.note[lang]}
                    </span>
                  )}
                </span>
              )}
            </div>
          )}
          <p className="mt-6 max-w-xl text-lg text-gray-300">
            {profile.tagline[lang]}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
            >
              {ui.hero.cta_projects[lang]}
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              {ui.hero.cta_contact[lang]}
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-indigo-500 to-fuchsia-500 opacity-70 blur-lg" />
            <div className="relative h-56 w-56 overflow-hidden rounded-[2rem] border border-white/10 bg-ink-soft sm:h-64 sm:w-64">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 text-6xl font-bold text-white/80">
                  {initials(profile.name)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-gray-500 transition hover:text-white"
      >
        ↓ {ui.hero.scroll[lang]}
      </a>
    </section>
  );
}
