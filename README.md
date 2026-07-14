# RPG Sessions Discord Bot Documentation

Welcome! This is the documentation repository for the RPG Sessions Discord Bot. With this project, we decided to open the repo publicly so the community could contribute tips and tricks to the documentation if they wanted to.

This project is built off of [Astro](https://astro.build/), specifically the [Starlight](https://starlight.astro.build) template. I've left the instructions for the structure and how to run the project below.

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## RPG Sessions Website Documentation Schema

Pages under `src/content/docs/rpg-sessions/` use required frontmatter metadata so the website guides can be audited against the product:

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

- `pageType` is `landing`, `guide`, `reference`, or `troubleshooting`.
- `audience` identifies the intended player, GM, sheet builder, or developer.
- `surface` identifies the part of the website being documented.
- `systems` records whether the page applies to all systems, Genesys, or Star Wars.
- `appRoutes` lists the product routes checked while writing or updating the page.
- `requirements` records stable prerequisites such as authentication or the GM role.
- `featureKeys` optionally records feature dependencies by identifier. Do not write the current enabled or disabled state into the guide.
- `verifiedAt` is the date the workflow was last checked.
- `verifiedContexts` records the source and user contexts used for verification.

`npm run check:docs` requires these fields on every RPG Sessions website page. The fields are optional elsewhere so the Discord Bot and Maps collections can migrate independently.

### Screenshots

Save website screenshots under `src/assets/guides/rpg-sessions/` in a folder matching the documented surface. Embed every capture in the page that explains the shown workflow.

Before capture, enable the website's screenshot mode so TanStack Router and other development tools are hidden. Use realistic user-facing character, vehicle, encounter, and game names. Do not capture automated-test, QA, or placeholder records.

For a large screenshot, use a centered wrapper so it stays readable without overflowing the article:

```md
<div style="max-width: 1080px; margin-inline: auto;">

![Direct description of the visible workflow](../../../../assets/guides/rpg-sessions/example.png)

</div>
```

Verify the workflow on the running site before describing it. Phrase feature-dependent steps conditionally, and use the signed-in UI as the source of truth for current access.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/) or read [the Astro documentation](https://docs.astro.build).
