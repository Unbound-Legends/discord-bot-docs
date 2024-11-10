// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://unbound-legends.github.io",
  base: "/discord-bot-docs",
  integrations: [
    starlight({
      title: "RPG Sessions Discord Bot",
      favicon: "mark.png",
      logo: { src: "./src/assets/mark.png" },
      social: {
        discord: "https://discord.gg/DfEkRzUbjk",
        github: "https://github.com/Unbound-Legends/discord-bot-docs",
      },
      sidebar: [
        {
          label: "Guides",
          // autogenerate: { directory: "guides" },
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", slug: "guides/how-to" },
            {
              label: "Connect your Account",
              slug: "guides/connect-sessions-account",
            },
            {
              label: "Connecting a Game Table",
              slug: "guides/connecting-to-game-table",
            },
            {
              label: "Synchronize Game Table Events",
              slug: "guides/sync-game-table-events",
            },
          ],
        },
        {
          label: "Command Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Other Commands",
          autogenerate: { directory: "misc" },
        },
      ],
    }),
  ],
});
