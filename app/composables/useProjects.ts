// composables/useProjects.ts
const R2 = "https://assets.etheeratech.com/";

export const useProjects = () => {
  return [
    {
      id: "goz-mekmar",
      title: "Internal Company Portal",
      desc: "A custom internal portal built for a construction company, featuring project management, document sharing, and real-time team communication.",
      gif: `${R2}/images/projects/goz/goz-gif.gif`,
      images: [
        `${R2}/images/projects/goz/goz-1.png`,
        `${R2}/images/projects/goz/goz-2.png`,
        `${R2}/images/projects/goz/goz-3.png`,
        `${R2}/images/projects/goz/goz-4.png`,
        `${R2}/images/projects/goz/goz-5.png`,
        `${R2}/images/projects/goz/goz-6.png`,
        `${R2}/images/projects/goz/goz-7.png`,
        `${R2}/images/projects/goz/goz-8.png`,
      ],
      techStack: [
        "Nuxt.js",
        "Chart.js",
        "Python API",
        "Javascript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Socket.io",
        "PrimeVue",
      ],
    },
    {
      id: "mekmar-project",
      title: "Marble Company Website",
      desc: "A corporate website developed for a natural stone and marble company, showcasing product catalogues, project references, and contact information.",
      gif: `${R2}/images/projects/mekmar/mekmar-gif.gif`,
      images: [
        `${R2}/images/projects/mekmar/mekmar-1.png`,
        `${R2}/images/projects/mekmar/mekmar-2.png`,
        `${R2}/images/projects/mekmar/mekmar-3.png`,
        `${R2}/images/projects/mekmar/mekmar-4.png`,
        `${R2}/images/projects/mekmar/mekmar-5.png`,
      ],
      techStack: ["Nuxt.js", "HTML", "CSS", "Bootstrap"],
    },
    {
      id: "bulut-project",
      title: "Hotel Business Website",
      desc: "A corporate website built for a hotel business, featuring promotional content, contact details, and an online appointment booking system.",
      gif: `${R2}/images/projects/bulut/bulut-gif.gif`,
      images: [
        `${R2}/images/projects/bulut/bulut-1.png`,
        `${R2}/images/projects/bulut/bulut-2.png`,
        `${R2}/images/projects/bulut/bulut-3.png`,
        `${R2}/images/projects/bulut/bulut-4.png`,
        `${R2}/images/projects/bulut/bulut-5.png`,
      ],
      techStack: ["Nuxt.js", "HTML", "CSS", "TailwindCSS"],
    },
    {
      id: "rast-project",
      title: "Hair Salon Website",
      desc: "A corporate website developed for a hair salon, including promotional pages, contact information, and an online appointment scheduling system.",
      gif: `${R2}/images/projects/rast/rast-gif.gif`,
      images: [
        `${R2}/images/projects/rast/rast-1.png`,
        `${R2}/images/projects/rast/rast-2.png`,
        `${R2}/images/projects/rast/rast-3.png`,
        `${R2}/images/projects/rast/rast-4.png`,
        `${R2}/images/projects/rast/rast-5.png`,
      ],
      techStack: ["Nuxt.js", "HTML", "CSS", "TailwindCSS"],
    },
    {
      id: "ravilion-project",
      title: "Textile Company Website",
      desc: "A corporate website built for a textile manufacturer, featuring product promotions, contact forms, quote requests, and an integrated purchasing flow.",
      gif: `${R2}/images/projects/ravilion/ravilion-gif.gif`,
      images: [
        `${R2}/images/projects/ravilion/ravilion-1.png`,
        `${R2}/images/projects/ravilion/ravilion-2.png`,
        `${R2}/images/projects/ravilion/ravilion-3.png`,
        `${R2}/images/projects/ravilion/ravilion-4.png`,
        `${R2}/images/projects/ravilion/ravilion-5.png`,
      ],
      techStack: ["Nuxt.js", "HTML", "CSS", "TailwindCSS"],
    },
  ];
};
