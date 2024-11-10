// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://www.rpgsessions.com",
  integrations: [
    starlight({
      title: "RPG Sessions Discord Bot",
      favicon: "mark.png",
      logo: { src: "./src/assets/mark.png" },
      social: {
        discord: "https://discord.gg/DfEkRzUbjk",
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
      ],
    }),
  ],
});
