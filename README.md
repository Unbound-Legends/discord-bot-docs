# RPG Sessions Documentation

This repository contains the public documentation for the RPG Sessions website, Discord Bot, and Maps. The site is built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/) and is published at [rpgsessions.com/docs](https://rpgsessions.com/docs).

Community contributions are welcome. Keep instructions tied to the current product, include practical examples, and verify workflows before documenting them.

## Local development

CI uses Node.js 20 and npm. From the project root, install the locked dependencies and start the development server:

```bash
npm ci
npm run dev
```

The local site is available at `http://localhost:4321/docs/`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run check:docs` | Validate metadata, internal links, images, assets, and unfinished markers. |
| `npm run build` | Run the documentation checks, type-check the site, and build `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run astro -- --help` | Show the available Astro CLI commands. |

## Repository layout

- `src/content/docs/rpg-sessions/` contains guides for the RPG Sessions website.
- `src/content/docs/discord-bot/` contains setup guides and command references for the Discord Bot.
- `src/content/docs/maps/` contains setup, feature, and reference guides for Maps.
- `src/assets/` contains images imported by documentation pages.
- `public/` contains static files copied directly into the build.
- `src/components/` contains Starlight component overrides.
- `src/content/config.ts` defines the documentation frontmatter schema.
- `astro.config.mjs` controls the site URL, sidebar, and Starlight configuration.
- `scripts/check-docs.mjs` contains the project-specific documentation checks.

## Writing and organizing pages

Starlight builds `.md` and `.mdx` files under `src/content/docs/`. A file's path determines its route unless its frontmatter defines a `slug`.

The RPG Sessions and Maps sidebars are maintained in `astro.config.mjs`. The Discord Bot guides are also listed there, while its command references and other commands are generated from their directories.

When you add or update a page:

1. Put the page in the matching product directory under `src/content/docs/`.
2. Update `astro.config.mjs` if the page belongs in a manually ordered sidebar section.
3. Put imported images in a matching folder under `src/assets/guides/` and write direct, descriptive alt text.
4. Start internal links with `/docs` and omit trailing slashes.
5. Run `npm run build` and `git diff --check` before opening a pull request.

## RPG Sessions page metadata

Every page under `src/content/docs/rpg-sessions/` must include metadata that records who the page is for, where the documented workflow lives, and how it was verified.

```yaml
pageType: guide
audience: [player, gm]
surface: game-table
systems: [all]
appRoutes: ["/game/$gameId/table"]
requirements:
  signedIn: true
  role: gm
featureKeys: ["example_flag_key"]
verifiedAt: "2026-07-13"
verifiedContexts: [source-reviewed, signed-in, gm, desktop]
```

| Field | Values and purpose |
| --- | --- |
| `pageType` | `landing`, `guide`, `reference`, or `troubleshooting`. |
| `audience` | One or more of `player`, `gm`, `sheet-builder`, or `developer`. |
| `surface` | The product area covered by the page, such as `library`, `game-table`, or `data-library`. |
| `systems` | One or more of `all`, `genesys`, or `star-wars`. |
| `appRoutes` | The RPG Sessions routes checked while writing or updating the page. |
| `requirements` | Optional stable prerequisites, such as sign-in or the `gm` role. |
| `featureKeys` | Optional feature dependencies by identifier. Do not document a feature's current enabled state. |
| `verifiedAt` | The date the workflow was last checked, in `YYYY-MM-DD` format. |
| `verifiedContexts` | The source, account, role, and viewport contexts used for verification. |

`npm run check:docs` requires `pageType`, `audience`, `surface`, `systems`, `appRoutes`, `verifiedAt`, and `verifiedContexts` on these pages. This metadata is optional for Discord Bot and Maps pages.

## Screenshots

Treat the running product as the source of truth. Complete the documented workflow before capturing it, hide development tools with the app's screenshot mode, and use realistic names instead of test or placeholder records.

Save RPG Sessions website screenshots under `src/assets/guides/rpg-sessions/` in a folder matching the documented surface. Store other screenshots in a path that matches their documentation area, such as `src/assets/guides/maps/` or `src/assets/misc/`.

Large screenshots should use a centered wrapper so they remain readable without overflowing the article:

```md
<div style="max-width: 1080px; margin-inline: auto;">

![Direct description of the visible workflow](../../../../assets/guides/rpg-sessions/example.png)

</div>
```

## Deployment

Pushes to `main` run the production GitHub Actions workflow. It installs dependencies with Node.js 20, runs `npm run build`, packages `dist/` into the nginx image defined by `Dockerfile`, and deploys the image through the production hosting workflow.
