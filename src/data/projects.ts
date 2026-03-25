export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  date: string;
  images?: string[];
  aventure: string;
  acquis: string[];
};

export const projects: Project[] = [
  {
    title: "Sérendia",
    description: "Application mobile de recommandation de destinations et d’activités, enrichies de données météorologiques, prix d’hébergement et prix du vol.",
    tech: ["Flutter", "Dart", "Python", "SQLite", "Github", "Git"],
    github: "https://github.com/vincentpham22/SA-BUT3-5.Real.01-2025-D-veloppement-avanc-",
    date: "10/2025",
    images: ["/serendia1.png", "/serendia2.png"],
    aventure: "Equipe de 6 personnes réparties en 3 groupes : front-end, back-end et algorithme. J'ai été affecté à l'équipe back-end avec le développement de l'API REST en Python et la gestion de la base de données SQLite avec l'intégration des données des destinations et activités. J'ai utilisé Git et GitHub Projects pour la collaboration avec les autres membres de l'équipe. Cela a été une expérience très enrichissante car c'était la première fois que je développais une application mobile complète.",
    acquis: ["travail en équipe", "gestion de projet", "organisation"]
  },
  // {
  //   title: "Enquête BUT/HCERES",
  //   description: "Conception et diffusion d’un questionnaire, analyse statistique et interprétation des résultats avec Python.",
  //   tech: ["Python", "Pandas", "Matplotlib"],
  //   date: "01/2025"
  // },
  {
    title: "Web Scraping Articles 6G (Thalès Group)",
    description: "Développement d’une application qui récupère des articles scientifiques liés à la 6G à partir de l’API arXiv et les affiche sous forme de dashboard interactif.",
    tech: ["Python", "API arXiv", "Groq", "Streamlit", "Klaxoon"],
    github: "https://github.com/vincentpham22/Web-Scraping-Articles-6G-main",
    date: "12/2024",
    images: ["/6g.png"],
    aventure: "En collaboration avec Thalès Group, nous étions une équipe de 4 et on s'est répartis les tâches de développement de l'application, en passant par la récupération des articles avec l'API arXiv et la LLM de Groq avec Python. Streamlit pour créer le dashboard interactif et Klaxoon pour la collaboration avec les membres de l'équipe. C'est le premier projet où j'ai implémenté une LLM dans une application, ce qui m'a permis de mieux comprendre son fonctionnement, ses capacités puissantes et ses limites.",
    acquis: ["travail en équipe", "gestion de projet", "organisation"]
  },
  {
    title: "V-Anime",
    description: "Création d’un site web vitrine dynamique de mangas.",
    tech: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/vincentpham22/v-anime",
    date: "07/2024",
    images: ["/v-anime.png"],
    aventure: "Premier projet où j'ai travaillé en autodidacte et en autonomie. J'ai conçu et développé un site web vitrine dynamique de mangas en utilisant HTML, CSS et JavaScript. J'ai appris à apprendre de nouveaux langages et à m'adapter face aux problèmes techniques. Ce projet m'a permis de développer mes compétences en développement web front-end et de mieux comprendre les bases du développement web.",
    acquis: ["autonomie", "découverte", "creativité"]
  },
]