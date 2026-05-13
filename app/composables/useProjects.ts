// composables/useProjects.ts
const R2 = "https://assets.etheeratech.com/";

export const useProjects = () => {
  return [
    {
      id: "gobekusa-project",
      title: "Shopify Dropshipping Store — US Market",
      desc: "A full-featured Shopify dropshipping store built for the US tile and natural stone market. Includes custom theme development, bulk product imports, SEO optimization, and a custom 'Buy Sample' feature built with Liquid and JavaScript.",
      gif: `${R2}/images/projects/gobekusa/gobekusa-1.png`,
      images: [
        `${R2}/images/projects/gobekusa/gobekusa-1.png`,
        `${R2}/images/projects/gobekusa/gobekusa-2.png`,
        `${R2}/images/projects/gobekusa/gobekusa-3.png`,
      ],
      techStack: [
        "Shopify",
        "Liquid",
        "JavaScript",
        "Matrixify",
        "Judge.me",
        "Collective",
        "Cloudflare",
        "SEO",
      ],
    },
  ];
};
