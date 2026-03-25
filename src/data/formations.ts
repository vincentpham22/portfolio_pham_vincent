export type Formation = {
    title: string;
    location: string;
    date: string;
    description?: string;
}

export const formations: Formation[] = [
    {
        title: "BUT Informatique",
        location: "IUT de Villetaneuse (93430)",
        date: "2024 - 2026",
        description: "Ce diplôme m'a permis d'obtenir des compétences en développement web, application et logiciel, de sa conception à sa finalisation avec les bases de données, mais aussi en gestion de projet et en travail d'équipe."
    },
    {
        title: "Titre Professionnel Développeur Web et Web Mobile",
        location: "GRETA, La Garenne-Colombes (92250)",
        date: "2022 - 2023",
        description: "Mes débuts dans le monde de la programmation web, j'ai énormément apprécié les langages de programmations qui étaient inconnus à l'époque pour moi, et comment les utiliser pour créer des projets personnels."
    },
    {
        title: "Master Marketing Digital",
        location: "ESGCI, Paris (75011)",
        date: "2021 - 2022",
        description: "J'ai expérimenté et découvert comment fonctionnait les réseaux sociaux, l'optimisation et la publicité en ligne, l'étude de marché et la veille technologique. Mais ça ne m'intéressait pas plus que ça. Cependant il y'avait un module HTML et CSS et ça m'a beaucoup plu."
    },
    {
        title: "Licence Economie et Gestion",
        location: "Université Sorbonne Paris Nord (93430)",
        date: "2018 - 2021",
        description: "Je voulais à la base me diriger vers la comptabilité mais j'ai ça ne me passionnait plus du tout. J'aimais beaucoup par contre les statitiques et les mathématiques financières avec Excel VBA, un début de programmation qui m'a beaucoup plu."
    },
    {
        title: "Baccalauréat Scientifique",
        location: "Lycée Paul Eluard (93200)",
        date: "2015 - 2018",
    },
]