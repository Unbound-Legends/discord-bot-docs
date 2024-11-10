// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "RPG Sessions Discord Bot",
      social: {
        discord: "https://discord.gg/DfEkRzUbjk",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   { label: "Example Guide", slug: "guides/example" },
          // ],
        },
        {
          label: "Command Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
