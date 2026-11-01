import { profile, ui } from "../content.js";
import { ArrowDown, Download } from "./Icons.jsx";

const NODES = 8;
const GPUS_PER_NODE = 8;

// 8 nodes × 8 GPUs, lit by a wave that sweeps the cluster like a
// sharded all-gather: the visual signature of Victor's FSDP work.
function Cluster({ lang }) {
  return (
    <figure className="surface p-6 sm:p-8">
      <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2">
        {Array.from({ length: NODES }, (_, row) => (
          <div key={row} className="contents">
            <span className="font-mono text-[11px] text-faint tabular-nums">
              {ui.hero.cluster_node[lang]} {row}
            </span>
            <div className="grid grid-cols-8 gap-1.5">
              {Array.from({ length: GPUS_PER_NODE }, (_, col) => (
                <span
                  key={col}
                  className="gpu"
                  style={{ "--row": row, "--col": col }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <figcaption className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-5 text-sm text-muted">
        <span>{ui.hero.cluster_caption[lang]}</span>
        <a href="#studies" className="text-link shrink-0">
          {ui.hero.cta_research[lang]}
        </a>
      </figcaption>
    </figure>
  );
}

export default function Hero({ lang }) {
  const { location } = profile;

  return (
    <section
      id="top"
      className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-14 px-6 pt-32 pb-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16"
    >
      <div>
        <p
          className="rise flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted"
          style={{ "--i": 0 }}
        >
          <span className="size-2 rounded-full bg-emerald-500" />
          {location.current[lang]}
          <span className="text-faint">/</span>
          {location.openLabel[lang]}{" "}
          {location.open.map((c) => c.split(",")[0]).join(", ")}
        </p>

        <h1
          className="rise mt-6 font-serif text-[clamp(3rem,6.2vw,5.5rem)] leading-[0.95] tracking-[-0.02em] text-ink"
          style={{ "--i": 1 }}
        >
          {profile.headline[lang]}
        </h1>

        <div className="rise mt-8 max-w-xl" style={{ "--i": 2 }}>
          <p className="text-lg font-medium text-ink">{profile.role[lang]}</p>
          <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted">
            {profile.tagline[lang]}
          </p>
        </div>

        <div className="rise mt-10 flex flex-wrap gap-3" style={{ "--i": 3 }}>
          <a href="#projects" className="btn btn-primary">
            {ui.hero.cta_projects[lang]}
          </a>
          <a
            href={profile.links.cv[lang]}
            className="btn btn-ghost"
            target="_blank"
            rel="noreferrer"
          >
            <Download />
            {ui.actions.cv[lang]}
          </a>
        </div>
      </div>

      <div className="rise" style={{ "--i": 4 }}>
        <Cluster lang={lang} />
      </div>

      <a
        href="#about"
        aria-label={ui.hero.scroll[lang]}
        className="absolute bottom-8 left-1/2 hidden size-10 -translate-x-1/2 items-center justify-center rounded-full border border-line bg-white text-muted transition-colors hover:text-ink lg:flex"
      >
        <ArrowDown />
      </a>
    </section>
  );
}
