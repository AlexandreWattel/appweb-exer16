import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Revue de code documentée",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Alexandre Wattel", link: "/alexandre-wattel" },
      { text: "Antoine Leclerc", link: "/antoine-leclerc" },
    ],

    sidebar: [
      {
        text: "Revues",
        items: [
          { text: "Alexandre Wattel", link: "/alexandre-wattel" },
          { text: "Antoine Leclerc", link: "/antoine-leclerc" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
