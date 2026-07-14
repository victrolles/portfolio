import { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Studies from "./components/Studies.jsx";
import Contact from "./components/Contact.jsx";
import { profile, ui } from "./content.js";
import { useReveal } from "./useReveal.js";

function getInitialLang() {
  const saved = localStorage.getItem("lang");
  if (saved === "fr" || saved === "en") return saved;
  return navigator.language?.startsWith("fr") ? "fr" : "en";
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useReveal();

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <section className="border-y border-white/5 bg-ink-soft/50 px-6 py-16">
          <p className="reveal mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-300">
            {profile.about[lang]}
          </p>
        </section>
        <Projects lang={lang} />
        <Studies lang={lang} />
        <Contact lang={lang} />
      </main>
      <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} {profile.name}. {ui.footer.built[lang]}
        </p>
      </footer>
    </>
  );
}
