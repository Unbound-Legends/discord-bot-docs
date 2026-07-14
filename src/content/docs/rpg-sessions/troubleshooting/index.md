---
title: Troubleshooting
description: Diagnose account, game, sheet, import, dice, chat, initiative, and feature-visibility problems in RPG Sessions.
pageType: troubleshooting
audience: [player, gm, sheet-builder]
surface: cross-site
systems: [all]
appRoutes: ["/library", "/game/$gameId/table", "/data2", "/dice", "/user/profile"]
verifiedAt: "2026-07-13"
verifiedContexts: [source-reviewed, signed-in, gm, admin, desktop]
---

Start with the exact page, account, game, and sheet where the problem happens. A missing control usually comes down to your role, ownership, joining settings, or current feature access.

## Game access and joining

If **Join Game** is missing:

1. Confirm you opened the intended game link.
2. Sign into the account the GM expects.
3. Ask a GM to enable **Allow New Players**, or confirm the Drop-In Mode instructions and password.
4. Check whether you're already a member.
5. Reload the game link after the GM changes a setting.

Players join through the game link. There's no separate game code in the standard flow.

## Library and sheet access

If a sheet is missing, clear Library search and filters, return to the root folder, and check the character or vehicle type. Then confirm that you're using the account that owns or can edit the sheet.

If the sheet exists in the Library but not in a game picker, check whether it's already in that game and whether the picker expects a player character, adversary, or vehicle.

## Imports

For a failed or incomplete import:

1. Export a fresh file or reference from the source tool.
2. Choose the importer with the exact matching source and content type.
3. Import required custom data before the sheet that depends on it.
4. Read every warning from the import flow.
5. Compare the imported characteristics, skills, equipment, talents, and notes with the source.

Keep the original export until verification is complete.

## Dice and calculated values

If a sheet roll looks wrong, check the characteristic, skill rank, game theme, and active items or effects. Remove situational dice and rebuild them one at a time.

If a standalone roll is missing from history, confirm that you used **Live** mode. Test rolls aren't saved.

## Game Table chat and initiative

If a message or roll is missing, clear chat search, open the correct channel, and check **Show Private** only when you're authorized to see private content. Reload before posting the same message again.

If initiative is wrong, review the PC and NPC slots, the skill used for the roll, and any manual GM adjustments.

## Maps and feature visibility

If a control from these guides is missing, check your role, game settings, account connection, and table access. Feature availability can change without the workflow changing, so trust the signed-in site for current access.

For Maps-specific problems, use the [Maps documentation](/docs/maps) and its feature guides.

## What to include in a support request

When you ask for support, include:

- The page URL with private identifiers removed when appropriate.
- What you selected, what you expected, and what happened.
- Whether you're a player, GM, or sheet owner.
- The game theme and sheet type.
- A screenshot with browser development tools hidden and private data removed.

Never include passwords, API tokens, private messages, or exported files containing data you don't have permission to share. For community help, join the [RPG Sessions Discord](https://discord.gg/DfEkRzUbjk).
