// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://rpgsessions.com",
  base: "/docs",
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
          items: [
            { label: "Overview", slug: "rpg-sessions" },
            {
              label: "Guides",
              items: [
                { label: "Getting Started", slug: "rpg-sessions/guides/getting-started" },
                { label: "Creating a Game", slug: "rpg-sessions/guides/creating-a-game" },
                { label: "Your First Session", slug: "rpg-sessions/guides/your-first-session" },
              ],
            },
            {
              label: "Game Table",
              items: [
                { label: "Overview", slug: "rpg-sessions/game-table" },
              ],
            },
            {
              label: "Character Sheets",
              items: [
                { label: "Overview", slug: "rpg-sessions/characters" },
              ],
            },
          ],
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
          items: [
            { label: "Overview", slug: "maps" },
            {
              label: "Start Here",
              items: [
                { label: "Getting Started", slug: "maps/guides/getting-started" },
              ],
            },
            {
              label: "Build a Map",
              items: [
                { label: "Asset Library and Backgrounds", slug: "maps/features/asset-library-and-backgrounds" },
                { label: "Grid System", slug: "maps/features/grid-system" },
                { label: "Layers", slug: "maps/features/layers" },
                { label: "Fog of War", slug: "maps/features/fog-of-war" },
                { label: "Lighting and Walls", slug: "maps/features/lighting-and-walls" },
                { label: "Portals", slug: "maps/features/portals" },
                { label: "Spritesheet Import", slug: "maps/features/spritesheet-import" },
              ],
            },
            {
              label: "Run a Session",
              items: [
                { label: "Character and Vehicle Tokens", slug: "maps/features/character-tokens" },
                { label: "Character and Vehicle Sheets", slug: "maps/features/sheets" },
                { label: "Vehicle Deck Plans", slug: "maps/features/vehicle-deck-plans" },
                { label: "Initiative Tracker", slug: "maps/features/initiative-tracker" },
                { label: "Encounters", slug: "maps/features/encounters" },
                { label: "Range Bands", slug: "maps/features/range-bands" },
                { label: "Pings and Notes", slug: "maps/features/pings-and-notes" },
                { label: "Loot Drops", slug: "maps/features/loot-drops" },
                { label: "Clocks and Counters", slug: "maps/features/clocks-and-counters" },
              ],
            },
            {
              label: "Manage the Table",
              items: [
                { label: "Map Management", slug: "maps/features/map-management" },
                { label: "Map Assets and Players", slug: "maps/features/map-assets-and-players" },
                { label: "Maps in the Data Library", slug: "maps/features/map-library" },
                { label: "GM Controls", slug: "maps/features/gm-controls" },
                { label: "Settings and Performance", slug: "maps/features/settings-and-performance" },
                { label: "Table Tokens", slug: "maps/features/table-tokens" },
              ],
            },
            {
              label: "Reference",
              items: [
                { label: "Keyboard Shortcuts", slug: "maps/reference/keyboard-shortcuts" },
              ],
            },
          ],
        },
      ],
      components: {
        SiteTitle: "./src/components/SiteTitle.astro",
      },
    }),
  ],
});
