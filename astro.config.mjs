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
              label: "Start Here",
              items: [
                { label: "Getting Started", slug: "rpg-sessions/guides/getting-started" },
                { label: "Creating a Game", slug: "rpg-sessions/guides/creating-a-game" },
                { label: "Your First Session", slug: "rpg-sessions/guides/your-first-session" },
              ],
            },
            {
              label: "Library",
              items: [
                { label: "Overview", slug: "rpg-sessions/library" },
                { label: "Create Sheets", slug: "rpg-sessions/library/create-sheets" },
                { label: "Import Sheets", slug: "rpg-sessions/library/imports" },
                { label: "Manage Sheets", slug: "rpg-sessions/library/manage-sheets" },
              ],
            },
            {
              label: "Character Sheets",
              items: [
                { label: "Overview", slug: "rpg-sessions/characters" },
                { label: "Characteristics and Rolls", slug: "rpg-sessions/characters/rolls-and-characteristics" },
                {
                  label: "Health, Equipment, and Progression",
                  slug: "rpg-sessions/characters/health-equipment-and-progression",
                },
              ],
            },
            {
              label: "Vehicle Sheets",
              items: [
                { label: "Overview", slug: "rpg-sessions/vehicles" },
                { label: "Operate and Repair", slug: "rpg-sessions/vehicles/operate-and-repair" },
                {
                  label: "Crew, Weapons, and Deck Plans",
                  slug: "rpg-sessions/vehicles/crew-weapons-and-deck-plans",
                },
              ],
            },
            {
              label: "Games",
              items: [
                { label: "Overview", slug: "rpg-sessions/games" },
                { label: "Members and Game Masters", slug: "rpg-sessions/games/manage-membership" },
                {
                  label: "Settings, Joining, and Drop-In Mode",
                  slug: "rpg-sessions/games/join-settings-and-drop-in",
                },
              ],
            },
            {
              label: "Game Table",
              items: [
                { label: "Overview", slug: "rpg-sessions/game-table" },
                {
                  label: "Roster, Dice, and Story Points",
                  slug: "rpg-sessions/game-table/roster-dice-and-story-points",
                },
                { label: "Initiative and Chat", slug: "rpg-sessions/game-table/initiative-and-chat" },
                {
                  label: "Encounters and Statistics",
                  slug: "rpg-sessions/game-table/encounters-and-statistics",
                },
              ],
            },
            {
              label: "Data Library",
              items: [
                { label: "Overview", slug: "rpg-sessions/data-library" },
                { label: "Kits and Sheet Items", slug: "rpg-sessions/data-library/kits-and-items" },
                {
                  label: "Create, Share, and Import Data",
                  slug: "rpg-sessions/data-library/create-share-and-import",
                },
              ],
            },
            {
              label: "Dice",
              items: [{ label: "Roll Dice", slug: "rpg-sessions/dice" }],
            },
            {
              label: "Account",
              items: [{ label: "Profile and Connections", slug: "rpg-sessions/account" }],
            },
            {
              label: "Help and Reference",
              items: [
                { label: "Troubleshooting", slug: "rpg-sessions/troubleshooting" },
                { label: "Roles and Visibility", slug: "rpg-sessions/reference/roles-and-visibility" },
                { label: "Supported Systems", slug: "rpg-sessions/reference/supported-systems" },
                { label: "Terminology", slug: "rpg-sessions/reference/terminology" },
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
