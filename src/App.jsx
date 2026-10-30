import { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Studies from "./components/Studies.jsx";
import Contact from "./components/Contact.jsx";
import { profile, ui } from "./content.js";

function getInitialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "fr" || saved === "en") return saved;
  } catch {
    // Storage can be unavailable (private mode); fall back to the browser language.
  }
  return navigator.language?.startsWith("fr") ? "fr" : "en";
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // Ignore: the language still applies for this visit.
    }
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Studies lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>
      <footer className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-line px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{ui.footer.built[lang]}</p>
      </footer>
    </>
  );
}
