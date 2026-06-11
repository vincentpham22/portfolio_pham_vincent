export type Experience = {
  title: string;
  location: string;
  date: string;
  description: string;
  aventure: string;
  tech: string[];
  acquis: string[];
};

export const experiences: Experience[] = [
    {
        title: "Stage développeur web",
        location : "Deadia, Le Thillay (95500)",
        date: "Mai 2026 - Août 2026",
        description: "Conception et développement de la plateforme ERP/CRM de l'entreprise nommé Baqe. Je gère la partie flotte, transport et logistique en intégrant de nouvelles fonctionnalités. Je gère aussi les modules salariés, véhicules, RH, planning des clients, rapports de performance, e-signature électronique et OCR de documents administratifs (carte d'identité, passeport, RIB, permis).",
        aventure: "Je travaille en duo avec mon tuteur et la collaboration se fait très naturellement et fluide. Je me suis très vite adapté à mon environnement de travail et des outils utilisés. J'ai été conforté dans l'utilisation de la stack du projet (next.js et react) car j'ai déjà eu des expériences similaires auparavant, ce qui a rendu la compréhension du code plus facile.",
        tech: ["Next.js", "React", "TypeScript", "FastAPI", "SQLAlchemy 2.0", "Pydantic", "PostgreSQL", "Docker", "Hetzner / DigitalOcean / Cloudflare", "Github"],
        acquis: ["architecture logicielle", "autonomie", "gestion de projet", "rigueur", "adaptation", "documentation"]
    },
    {
        title: "Stage développeur informatique",
        location : "Factory, Saint-Ouen (93070)",
        date: "Juin 2025 - Août 2025",
        description: "Développement de nouvelles fonctionnalités et maintenance de l’intranet : gestion des todos, devis et factures, filtres, exploitation des données, ajout de cron jobs.",
        aventure: "Lors de ce stage, j'ai été confronté à un vraie équipe informatique, avec ses qualités et ses défauts. J'ai dû apprendre de nouvelles technologies que je ne connaissais pas et donc j'étais un peu perdu mais au fur et à mesure j'ai pû mieux maîtriser les technologies et bien communiquer avec les autres.",
        tech: ["Typescript","React.js", "Node.js", "MUI", "PostgreSql", "Vercel", "Postman", "Azure", "Github"],
        acquis: ["esprit d’équipe", "autonomie", "gestion de projet", "adaptation", "communication"]
    },
    {
        title: "Développeur web",
        location : "GRETA, La Garenne-Colombes (92250)",
        date: "Mai 2023 - Juillet 2023",
        description: "Création d’une newsletter, gestion d’outils d’envoi d’emails et des abonnés.",
        aventure: "Dans la continuité de mon parcours pro, j'ai rencontré une personne super gentille, une développeuse qui travaille en auto-didacte, et m'a recrutée pour l'aider dans un projet pour l'un de ses clients. La collaboration s'est très bien passée et j'ai pu apprendre énormément de choses dans le monde profesionnel et la programmation",
        tech: ["PHP", "PHP Mailer", "MySql"],
        acquis: ["autonomie", "organisation", "travail en équipe", "curiosité"]
    },
    {
        title: "Intégrateur web",
        location : "Lycée Auguste Renoir, Asnières-sur-Seine (92600)",
        date: "Mars 2023 - Mai 2023",
        description: "Refonte du site web du lycée.",
        aventure: "L'une de mes premières expériences dans l'informatique, j'ai dû comprendre comment une équipe informatique fonctionnait et comment s'adapter aux besoins de l'école. J'ai travaillé avec en binôme et en TT, et il était difficile de communiquer et comprendre les demandes de mon tuteur car manque d'expériences. Mais j'ai su m'adapter en mieux communiquant, avec une meilleure cohésion d'équipe.",
        tech: ["WordPress", "HTML", "CSS", "Discord"],
        acquis: ["autonomie", "travail en équipe", "créativité"]
    },
]