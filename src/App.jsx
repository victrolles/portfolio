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
