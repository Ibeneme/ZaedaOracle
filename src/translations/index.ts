type TranslationKeys =
    | "ideasInMotion"
    | "theAntigravityGroup"
    | "antigravityMediaLtd"
    | "antigravityConsulting"
    | "antigravityIncubated"
    | "antigravityTechHub"
    | "discover"
    | "contactUs"
    | "ourSubsidiaries"
    | "aboutUs"
    | "events"
    | "blog"
    | "research"
    | "antigravityMediaLtd"
    | "antigravityTechHub"
    | "antigravityIncubated"
    | "antigravityConsulting"
    | "ideasInMotion"
    | "discover"
    | "learnMore"
    | "contactUs";

type Translations = {
    [key: string]: Record<TranslationKeys, string>;
};

const translations: Translations = {
    en: {
        ideasInMotion: "IDEAS IN MOTION",
        theAntigravityGroup: "The Antigravity Group",
        antigravityMediaLtd: "Antigravity Media Ltd",
        antigravityConsulting: "Antigravity Consulting",
        antigravityIncubated: "Antigravity Incubated",
        antigravityTechHub: "Antigravity TechHub",
        discover: "Discover",
        contactUs: "Contact Us", // Changed from "Discover"
        ourSubsidiaries: "Our Subsidiaries",
        aboutUs: "About Us",
        events: "Events",
        blog: "Blog",
        research: "Research",
        learnMore: "Learn More",

    },
    de: {
        ideasInMotion: "IDEEN IN BEWEGUNG",
        theAntigravityGroup: "Die Antigravity Gruppe",
        antigravityMediaLtd: "Antigravity Media GmbH",
        antigravityConsulting: "Antigravity Beratung",
        antigravityIncubated: "Antigravity Inkubiert",
        antigravityTechHub: "Antigravity TechHub",
        discover: "Entdecken",
        contactUs: "Kontaktieren Sie uns", // Changed from "Entdecken"
        ourSubsidiaries: "Unsere Tochtergesellschaften",
        aboutUs: "Über Uns",
        events: "Veranstaltungen",
        blog: "Blog",
        research: "Forschung",
        learnMore: "Mehr Erfahren",

    },


    fr: {
        ideasInMotion: "IDÉES EN MOUVEMENT",
        theAntigravityGroup: "Le Groupe Antigravity",
        contactUs: "Contactez-nous", // Changed from "Découvrir"
        ourSubsidiaries: "Nos Filiales",
        aboutUs: "À Propos de Nous",
        events: "Événements",
        blog: "Blog",
        research: "Recherche",
        antigravityMediaLtd: "Antigravity Media Ltd",
        antigravityTechHub: "Antigravity TechHub",
        antigravityIncubated: "Antigravity Incubated",
        antigravityConsulting: "Antigravity Consulting",
        discover: "Découvrir",
        learnMore: "En Savoir Plus",

    },
    es: {
        ideasInMotion: "IDEAS EN MOVIMIENTO",
        theAntigravityGroup: "El Grupo Antigravity",
        contactUs: "Contáctenos", // Changed from "Descubrir"
        ourSubsidiaries: "Nuestras Subsidiarias",
        aboutUs: "Sobre Nosotros",
        events: "Eventos",
        blog: "Blog",
        research: "Investigación",
        antigravityMediaLtd: "Antigravity Media Ltd",
        antigravityTechHub: "Antigravity TechHub",
        antigravityIncubated: "Antigravity Incubated",
        antigravityConsulting: "Antigravity Consulting",
        discover: "Descubrir",
        learnMore: "Aprender Más",

    },

}


export default translations;





