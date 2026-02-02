// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://rpgsessions.com",
  base: "/discord-bot-docs",
  trailingSlash: "never",
  integrations: [
    starlight({
      title: "RPG Sessions Documentation",
      favicon: "mark.png",
      logo: { src: "./src/assets/mark.png" },
      social: [
        { icon: "discord", label: "Discord", href: "https://discord.gg/DfEkRzUbjk" },
        { icon: "github", label: "GitHub", href: "https://github.com/Unbound-Legends/discord-bot-docs" },
        { icon: "patreon", label: "Patreon", href: "https://www.patreon.com/rpgsessions" },
      ],
      sidebar: [
        // RPG Sessions Platform Section
        {
          label: "RPG Sessions",
          collapsed: true,
          autogenerate: { directory: "rpg-sessions" },
        },
        // Discord Bot Section
        {
          label: "Discord Bot",
          collapsed: true,
          items: [
            { label: "Overview", slug: "discord-bot" },
            {
              label: "Guides",
              items: [
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
              autogenerate: { directory: "discord-bot/reference" },
            },
            {
              label: "Other Commands",
              autogenerate: { directory: "discord-bot/misc" },
            },
          ],
        },
        // Maps Section
        {
          label: "Maps",
          collapsed: true,
          autogenerate: { directory: "maps" },
        },
      ],
      components: {
        SiteTitle: "./src/components/SiteTitle.astro",
      },
    }),
  ],
});
