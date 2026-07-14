---
title: Settings, Joining, and Drop-In Mode
description: Configure game appearance and rules, share a standard join link, or use Drop-In Mode with an optional password.
pageType: guide
audience: [player, gm]
surface: games
systems: [all]
appRoutes: ["/game/$gameId/settings", "/game/$gameId/table"]
requirements:
  signedIn: true
verifiedAt: "2026-07-13"
verifiedContexts: [source-reviewed, signed-in, gm, admin, desktop]
---

Use game settings to control how the table looks, who can join, and which shared rules controls the group uses. Only GMs see the full settings page.

## Normal joining

Use the standard join flow for an ongoing group whose members have RPG Sessions accounts.

1. A GM opens the game settings and turns on **Allow New Players**.
2. The GM copies the game link from the game header.
3. A player opens the link while signed in.
4. The player chooses **Join Game**.
5. The GM turns **Allow New Players** off when the invitation window should close.

There's no separate game code in the standard join flow.

## Drop-In Mode

Use **Drop-In Mode** for a lighter shared-access workflow. Add a password when the group shouldn't enter with the link alone.

Test the Drop-In link in the same kind of browser session your players will use before the event starts. Don't publish the password in a public channel.

## Appearance

The settings page can update the game name, cover image, game theme, and dice theme. Changing a theme can alter the presentation and available rules fields, so review existing sheets before changing it mid-campaign.

## Shared rules controls

Depending on the selected theme, settings can include:

- Force dice behavior.
- Player and GM point styles.
- Character critical table.
- Vehicle critical table.
- Game seed.

Critical-table choices affect results used in that game. They don't rewrite the rest of a character or vehicle sheet.

## Maintenance and access

The settings page also contains high-impact actions such as archive state, game-history deletion, and table-token assignment. Read the confirmation for any destructive action and archive rather than delete when you may need the data later.

Table tokens and some feature controls only appear when they apply to the current account and table. Check the signed-in site for current access instead of relying on a screenshot or an older version of this guide.

## If Join Game is missing

Ask a GM to confirm all of the following:

- You opened the intended game link.
- You're signed into the intended account.
- **Allow New Players** is enabled, or Drop-In Mode is configured for the link you received.
- You aren't already a member.

See [Troubleshooting](/docs/rpg-sessions/troubleshooting#game-access-and-joining) if those checks don't resolve it.
