// ─────────────────────────────────────────────────────────────
//  Central content file — edit your portfolio here.
//  Every text field has a { fr, en } pair for the language switch.
//  To add a project or study, just copy one object and tweak it.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Victor Goudal",
  location: {
    current: { fr: "Marseille, France", en: "Marseille, France" },
    // Cities you'd like to relocate to (edit / reorder freely)
    open: ["Paris, France", "New York, USA"],
    openLabel: { fr: "Ouvert à", en: "Open to" },
    // Optional closing note; set to null to hide
    note: {
      fr: "& autres hubs tech",
      en: "& other tech hubs",
    },
  },
  // Replace with your own photo: drop a file in /public and use "/photo.jpg"
  photo: "",
  role: {
    fr: "Ingénieur AI & HPC — Deep Learning distribué & systèmes GPU",
    en: "AI & HPC Engineer — Distributed Deep Learning & GPU systems",
  },
  tagline: {
    fr: "J'entraîne et j'optimise des modèles de ML à grande échelle sur des clusters GPU — du benchmark bas niveau au déploiement end-to-end, avec un goût prononcé pour le web.",
    en: "I train and optimize ML models at scale on GPU clusters — from low-level benchmarking to end-to-end deployment, with a strong taste for the web.",
  },
  about: {
    fr: "Jeune professionnel en AI & HPC, actuellement Research Analyst au Flatiron Institute (Simons Foundation) à New York. Solide expérience en deep learning distribué (DDP, FSDP), environnements HPC et benchmarking GPU sur supercalculateurs. J'aime construire et évaluer des pipelines ML end-to-end, avec un focus sur la scalabilité, l'efficacité et le déploiement réel. Étudiant en double diplôme UTBM (France) & UQAC (Canada), spécialisé en IA.",
    en: "AI & HPC young professional, currently a Research Analyst at the Flatiron Institute (Simons Foundation) in New York. Strong background in distributed deep learning (DDP, FSDP), HPC environments and GPU benchmarking on supercomputing systems. I love building and benchmarking end-to-end ML pipelines, with a focus on scalability, efficiency and real-world deployment. Dual-degree student at UTBM (France) & UQAC (Canada), specialized in AI.",
  },
  // Add or remove links freely
  links: {
    github: "https://github.com/victrolles",
    linkedin: "https://www.linkedin.com/in/victorgoudal07",
    email: "mailto:vi.goudal@gmail.com",
    // Put your CV file in /public and set "/cv.pdf"
    cv: "",
  },
};

export const projects = [
  {
    id: "polymatic",
    emoji: "🧩",
    title: { fr: "Site Polymatic", en: "Polymatic website" },
    stack: ["React", "Web", "UI/UX"],
    accent: "from-indigo-500 to-blue-500",
    description: {
      fr: "Site vitrine interactif conçu pour Polymatic, avec une interface soignée et responsive.",
      en: "Interactive showcase website built for Polymatic, with a polished and responsive interface.",
    },
    link: "",
  },
  {
    id: "trackmania",
    emoji: "🏎️",
    title: { fr: "Site Trackmania", en: "Trackmania website" },
    stack: ["Web", "Front-end", "Design"],
    accent: "from-emerald-500 to-teal-500",
    description: {
      fr: "Site dédié à Trackmania : présentation visuelle dynamique autour du jeu et de sa communauté.",
      en: "A Trackmania-focused site: dynamic visual presentation around the game and its community.",
    },
    link: "",
  },
  {
    id: "chatbot",
    emoji: "💬",
    title: { fr: "Chatbot", en: "Chatbot" },
    stack: ["NLP", "LLM", "Python"],
    accent: "from-fuchsia-500 to-pink-500",
    description: {
      fr: "Assistant conversationnel capable de répondre en langage naturel, avec gestion du contexte.",
      en: "Conversational assistant that answers in natural language, with context handling.",
    },
    link: "",
  },
  {
    id: "snake",
    emoji: "🐍",
    title: { fr: "Snake", en: "Snake" },
    stack: ["JavaScript", "Canvas", "Game"],
    accent: "from-amber-500 to-orange-500",
    description: {
      fr: "Implémentation du jeu Snake dans le navigateur : logique de jeu, score et contrôles clavier.",
      en: "A browser implementation of the classic Snake game: game logic, scoring and keyboard controls.",
    },
    link: "",
  },
];

export const studies = [
  {
    id: "fsdp",
    emoji: "🧠",
    title: {
      fr: "Benchmark FSDP",
      en: "FSDP benchmark",
    },
    tags: ["Distributed", "PyTorch", "Scaling"],
    accent: "from-sky-500 to-cyan-500",
    description: {
      fr: "Étude et benchmark de l'entraînement distribué avec Fully Sharded Data Parallel (FSDP) : impact du sharding sur la mémoire et le débit.",
      en: "Study and benchmark of distributed training with Fully Sharded Data Parallel (FSDP): impact of sharding on memory footprint and throughput.",
    },
    link: "",
  },
  {
    id: "nvfp4",
    emoji: "🔬",
    title: {
      fr: "Quantization NVFP4",
      en: "NVFP4 quantization",
    },
    tags: ["Quantization", "FP4", "Inference"],
    accent: "from-violet-500 to-purple-500",
    description: {
      fr: "Analyse de la quantization NVFP4 : compromis entre précision numérique, taille mémoire et vitesse d'inférence.",
      en: "Analysis of NVFP4 quantization: trade-offs between numerical precision, memory size and inference speed.",
    },
    link: "",
  },
  {
    id: "llm",
    emoji: "📚",
    title: {
      fr: "Étude sur les LLMs",
      en: "LLM study",
    },
    tags: ["LLM", "Transformers", "Evaluation"],
    accent: "from-rose-500 to-red-500",
    description: {
      fr: "Exploration du fonctionnement des grands modèles de langage : architecture, comportement et méthodes d'évaluation.",
      en: "Exploration of how large language models work: architecture, behavior and evaluation methods.",
    },
    link: "",
  },
  {
    id: "cuda-matmul",
    emoji: "⚡",
    title: {
      fr: "Optimisation matmul CUDA",
      en: "CUDA matmul optimization",
    },
    tags: ["CUDA", "GPU", "HPC"],
    accent: "from-lime-500 to-green-500",
    description: {
      fr: "Optimisation de la multiplication de matrices en CUDA : tiling, mémoire partagée et coalescence pour maximiser le débit du GPU.",
      en: "Optimizing matrix multiplication in CUDA: tiling, shared memory and coalescing to maximize GPU throughput.",
    },
    link: "",
  },
];

export const ui = {
  nav: {
    projects: { fr: "Projets", en: "Projects" },
    studies: { fr: "Études", en: "Studies" },
    contact: { fr: "Contact", en: "Contact" },
  },
  hero: {
    cta_projects: { fr: "Voir les projets", en: "View projects" },
    cta_contact: { fr: "Me contacter", en: "Get in touch" },
    scroll: { fr: "Faites défiler", en: "Scroll down" },
  },
  sections: {
    projects_title: { fr: "Projets", en: "Projects" },
    projects_sub: {
      fr: "Sites et applications que j'ai créés.",
      en: "Sites and applications I have built.",
    },
    studies_title: { fr: "Études & Recherche", en: "Studies & Research" },
    studies_sub: {
      fr: "Travaux d'analyse et de benchmark en ML et systèmes.",
      en: "Analysis and benchmarking work in ML and systems.",
    },
    contact_title: { fr: "Contact", en: "Contact" },
    contact_sub: {
      fr: "N'hésitez pas à me contacter.",
      en: "Feel free to reach out.",
    },
  },
  actions: {
    visit: { fr: "Visiter", en: "Visit" },
    read: { fr: "Lire l'étude", en: "Read study" },
    cv: { fr: "Télécharger le CV", en: "Download CV" },
  },
  footer: {
    built: {
      fr: "Conçu avec React, Vite & Tailwind CSS.",
      en: "Built with React, Vite & Tailwind CSS.",
    },
  },
};
