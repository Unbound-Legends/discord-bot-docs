---
title: Members and Game Masters
description: Manage game members and GMs without changing who owns the sheets used at the table.
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

Game membership gives you access to one table. It doesn't transfer ownership of anyone's Library sheets, and it has nothing to do with Discord server roles.

## Members

Once you join a game, you can use the player-facing parts of its Game Table. Your exact controls depend on the table settings and your sheet permissions. Most members can view the roster, select permitted sheets, roll dice, use chat, and work with initiative.

Members join through the game link when **Allow New Players** is enabled, or through the Drop-In Mode flow when the GM uses it.

## Game masters

Game masters get the management controls for that game. Those controls cover settings, roster changes, adversaries, encounter preparation and activation, initiative, and the other GM tools.

To add a GM:

1. Open the game's settings.
2. Find the **Game Masters** section.
3. Add the account that should share GM responsibility.
4. Ask that person to reload the table and confirm the GM controls appear.

Don't rely on a Discord role to grant website GM access. Assign the user in the RPG Sessions game settings.

## Sheets and membership

A sheet keeps its owner and editors when you add it to a game. The table can use the character or vehicle, but that doesn't make every member an editor of the source sheet.

Removing a character or vehicle from the roster removes its game membership. It doesn't normally delete the underlying sheet from the owner's Library.

## Leaving safely

Before leaving a game:

- Confirm that another GM can manage the table if you're a GM.
- Check whether any game-scoped vehicle crew or encounter setup needs to be handed over.
- Save any messages or roll records you need outside the table.
- Confirm that personal sheets still appear in your Library.

If you leave by mistake, open a valid game link while joining is enabled. Ask a current GM to check the table settings if **Join Game** doesn't appear.

For a detailed permission matrix, see [Roles and Visibility](/docs/rpg-sessions/reference/roles-and-visibility).
