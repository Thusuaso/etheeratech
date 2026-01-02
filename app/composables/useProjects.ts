// composables/useProjects.ts

export const useProjects = () => {
  return [
    {
      id: "goz-mekmar",
      title: "Şirket İçi Portal",
      desc: "İnşaat sektöründe faaliyet gösteren bir firma için geliştirilmiş, proje yönetimi, doküman paylaşımı ve ekip iletişimini sağlayan şirket içi portal uygulaması.",
      gif: "/images/projects/goz/goz-gif.gif",
      images: [
        "/images/projects/goz/goz-1.png",
        "/images/projects/goz/goz-2.png",
        "/images/projects/goz/goz-3.png",
        "/images/projects/goz/goz-4.png",
        "/images/projects/goz/goz-5.png",
        "/images/projects/goz/goz-6.png",
        "/images/projects/goz/goz-7.png",
        "/images/projects/goz/goz-8.png",
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
      ],
    },
    {
      id: "mekmar-project",
      title: "Mermer Şirketi Web Sitesi",
      desc: "Mermer sektöründe faaliyet gösteren bir firma için geliştirilmiş, ürün katalogları, proje referansları ve iletişim bilgilerini içeren kurumsal web sitesi.",
      gif: "/images/projects/mekmar/mekmar-gif.gif",
      images: [
        "/images/projects/mekmar/mekmar-1.png",
        "/images/projects/mekmar/mekmar-2.png",
        "/images/projects/mekmar/mekmar-3.png",
        "/images/projects/mekmar/mekmar-4.png",
        "/images/projects/mekmar/mekmar-5.png",
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
      ],
    },
  ];
};
