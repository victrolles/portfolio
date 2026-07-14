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
  photo: "/photo.jpg",
  role: {
    fr: "Ingénieur AI & HPC — Deep Learning distribué & systèmes GPU",
    en: "AI & HPC Engineer — Distributed Deep Learning & GPU systems",
  },
  tagline: {
    fr: "Passionné à l'origine par le reinforcement learning, je me suis spécialisé dans l'entraînement et l'inférence de LLM à grande échelle sur clusters GPU. J'aime intervenir sur toute la chaîne, du benchmark bas niveau au déploiement end-to-end.",
    en: "Originally passionate about reinforcement learning, I specialized in training and serving LLMs at scale on GPU clusters. I enjoy working across the whole stack, from low-level benchmarking to end-to-end deployment.",
  },
  about: {
    fr: "Arrivé au machine learning par le reinforcement learning — sur lequel j'ai enchaîné plusieurs projets et une première spécialisation —, je me consacre aujourd'hui à l'entraînement et à l'inférence de LLM à grande échelle sur clusters GPU. J'aime couvrir toute la chaîne : du benchmark bas niveau jusqu'au déploiement end-to-end. Actuellement Research Analyst au Flatiron Institute (Simons Foundation) à New York, je travaille sur le deep learning distribué (DDP, FSDP), les environnements HPC et le benchmarking GPU sur supercalculateurs. Double diplôme UTBM (France) & UQAC (Canada), spécialisé en IA.",
    en: "I got into machine learning through reinforcement learning — where I built several projects and first specialized — and now focus on training and serving LLMs at scale on GPU clusters. I like covering the whole chain: from low-level benchmarking to end-to-end deployment. Currently a Research Analyst at the Flatiron Institute (Simons Foundation) in New York, I work on distributed deep learning (DDP, FSDP), HPC environments and GPU benchmarking on supercomputing systems. Dual-degree student at UTBM (France) & UQAC (Canada), specialized in AI.",
  },
  // Add or remove links freely
  links: {
    github: "https://github.com/victrolles",
    linkedin: "https://www.linkedin.com/in/victorgoudal07",
    email: "mailto:vi.goudal@gmail.com",
    // Put your CV file in /public and set "/cv.pdf"
    cv: "/cv.pdf",
  },
};

// For each project you can add a media preview below the logo:
//   media: { type: "video", src: "/videos/xxx.mp4", poster: "/videos/xxx.jpg" }
//   media: { type: "image", src: "/videos/xxx.gif" }   // gif or image
// Drop the files in public/ (e.g. public/videos/) and reference them here.
// Leave src empty ("") to show a "demo coming soon" placeholder.
export const projects = [
  {
    id: "polymathic",
    emoji: "🔭",
    title: { fr: "Polymathic AI", en: "Polymathic AI" },
    stack: ["React", "Inference", "Science"],
    accent: "from-indigo-500 to-blue-500",
    description: {
      fr: "Prototype d'interface de démonstration déployé en interne pour Polymathic AI (Simons Foundation / Flatiron Institute), pour mettre en valeur leurs foundation models scientifiques. Le chercheur configure son modèle et définit un sous-ensemble de données dans lequel on sélectionne un échantillon ; le modèle renvoie alors sa prédiction et l'ensemble des sorties configurées par le chercheur. Couvre plusieurs domaines comme l'astronomie et la biologie.",
      en: "Internal demo interface prototype built for Polymathic AI (Simons Foundation / Flatiron Institute) to showcase their scientific foundation models. A researcher configures their model and defines a data subset from which a sample is selected; the model then returns its prediction along with every output the researcher configured. Spans domains such as astronomy and biology.",
    },
    link: "",
    media: { type: "image", src: "/videos/polymathic.jpg", poster: "" },
  },
  {
    id: "trackmania-rl",
    emoji: "🏎️",
    title: {
      fr: "Trackmania — Deep RL",
      en: "Trackmania — Deep RL",
    },
    stack: ["Deep RL", "PyTorch", "Python"],
    accent: "from-emerald-500 to-teal-500",
    description: {
      fr: "Agent d'IA entraîné par deep reinforcement learning pour piloter et boucler des circuits dans Trackmania.",
      en: "AI agent trained with deep reinforcement learning to drive and complete tracks in Trackmania.",
    },
    link: "https://github.com/victrolles/Trackmania-DL-RL",
    media: { type: "image", src: "/videos/trackmania.gif", poster: "" },
  },
  {
    id: "snake-rl",
    emoji: "🐍",
    title: { fr: "Snake — Deep RL", en: "Snake — Deep RL" },
    stack: ["Deep RL", "DQN", "Python"],
    accent: "from-amber-500 to-orange-500",
    description: {
      fr: "Agent d'IA entraîné par deep reinforcement learning pour apprendre à jouer au jeu Snake.",
      en: "AI agent trained with deep reinforcement learning to learn how to play the Snake game.",
    },
    link: "https://github.com/victrolles/SnakeGame-DeepQLearning-Pytorch",
    media: { type: "image", src: "/videos/snake.png", poster: "", fit: "contain" },
  },
  {
    id: "pacman-rl",
    emoji: "👾",
    title: { fr: "Pac-Man — Deep RL", en: "Pac-Man — Deep RL" },
    stack: ["Deep RL", "DQN", "Python"],
    accent: "from-yellow-400 to-red-500",
    description: {
      fr: "Agent d'IA entraîné par deep reinforcement learning pour apprendre à jouer à Pac-Man.",
      en: "AI agent trained with deep reinforcement learning to learn how to play Pac-Man.",
    },
    link: "https://github.com/victrolles/Atari-Imitation-Learning",
    media: { type: "image", src: "/videos/pacman.gif", poster: "", fit: "contain" },
  },
  {
    id: "chatbot",
    emoji: "💬",
    title: { fr: "Chatbot RAG", en: "RAG Chatbot" },
    stack: ["LLM", "RAG", "Python"],
    accent: "from-fuchsia-500 to-pink-500",
    description: {
      fr: "Assistant conversationnel combinant un LLM et du retrieval-augmented generation (RAG). 2ᵉ prix au hackathon CONFORMiT.",
      en: "Conversational assistant combining an LLM with retrieval-augmented generation (RAG). 2nd place at the CONFORMiT hackathon.",
    },
    link: "",
    media: { type: "image", src: "/videos/chatbot_rag.jpg", poster: "" },
  },
  {
    id: "chatbot-k8s",
    emoji: "☸️",
    title: {
      fr: "Chatbot sur Kubernetes",
      en: "Chatbot on Kubernetes",
    },
    stack: ["LLM", "Kubernetes", "GPU"],
    accent: "from-blue-500 to-cyan-500",
    description: {
      fr: "Assistant conversationnel (LLM) déployé sur un cluster Kubernetes avec des GPU locaux, pour une inférence auto-hébergée, scalable et maîtrisée de bout en bout.",
      en: "Conversational assistant (LLM) deployed on a Kubernetes cluster with local GPUs, for self-hosted, scalable, end-to-end inference.",
    },
    link: "https://github.com/victrolles/ChatBot",
    media: { type: "image", src: "/videos/chatbot_on_kubernetes.png", poster: "" },
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
    link: "/reports/llm-study.pdf",
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
    link: "https://github.com/victrolles/cudaProgramming",
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
      fr: "Sites web, agents d'IA et applications que j'ai créés.",
      en: "Websites, AI agents and applications I have built.",
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
    demo_soon: { fr: "Démo à venir", en: "Demo coming soon" },
  },
  footer: {
    built: {
      fr: "Conçu avec React, Vite & Tailwind CSS.",
      en: "Built with React, Vite & Tailwind CSS.",
    },
  },
};
