// composables/useProjects.ts
const R2 = "https://assets.etheeratech.com";

export const useProjects = () => {
  return [
    {
      id: "gobekusa-project",
      title: "Shopify Dropshipping Store — US Market",
      desc: "A full-featured Shopify dropshipping store built for the US tile and natural stone market. Includes custom theme development, bulk product imports, SEO optimization, and a custom 'Buy Sample' feature built with Liquid and JavaScript.",
      gif: `${R2}/images/projects/gobekusa/gobekusa-1.webp`,
      images: [
        `${R2}/images/projects/gobekusa/gobekusa-1.webp`,
        `${R2}/images/projects/gobekusa/gobekusa-2.webp`,
        `${R2}/images/projects/gobekusa/gobekusa-3.webp`,
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
    {
      id: "mekmar-shopify",
      title: "Multilingual Shopify Store — Natural Stone Export",
      desc: "A full-featured multilingual Shopify store built for a Turkish natural stone export company. Includes Weglot multilingual setup with custom subdomain routing, bulk product imports via Matrixify, SEO audit, schema markup, and a Google Reviews widget powered by a Vercel serverless proxy.",
      gif: `${R2}/images/projects/mekmar-shopify/mekmar-shopify-1.webp`,
      images: [
        `${R2}/images/projects/mekmar/mekmar-shopify-1.webp`,
        `${R2}/images/projects/mekmar/mekmar-shopify-2.webp`,
        `${R2}/images/projects/mekmar/mekmar-shopify-3.webp`,
        `${R2}/images/projects/mekmar/mekmar-shopify-4.webp`,
        `${R2}/images/projects/mekmar/mekmar-shopify-5.webp`,
        `${R2}/images/projects/mekmar/mekmar-shopify-6.webp`,
        `${R2}/images/projects/mekmar/mekmar-shopify-7.webp`,
        `${R2}/images/projects/mekmar/mekmar-shopify-8.webp`,
        `${R2}/images/projects/mekmar/mekmar-shopify-9.webp`,
        `${R2}/images/projects/mekmar/mekmar-shopify-10.webp`,
        `${R2}/images/projects/mekmar/mekmar-shopify-11.webp`,
        `${R2}/images/projects/mekmar/mekmar-shopify-12.webp`,
        `${R2}/images/projects/mekmar/mekmar-shopify-13.webp`,
      ],
      techStack: [
        "Shopify",
        "Liquid",
        "Weglot",
        "Matrixify",
        "Judge.me",
        "Cloudflare",
        "Vercel",
        "SEO",
      ],
    },
  ];
};
