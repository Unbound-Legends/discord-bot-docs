---
title: Roster, Dice, and Story Points
description: Add and select actors, read status bars, roll from sheets, and manage the shared point pool.
pageType: guide
audience: [player, gm]
surface: game-table
systems: [all]
appRoutes: ["/game/$gameId/table"]
requirements:
  signedIn: true
verifiedAt: "2026-07-13"
verifiedContexts: [source-reviewed, signed-in, gm, admin, desktop]
---

Use **Overview** to keep the roster beside the active sheet. You can change status values and roll without leaving the table.

## Roster groups

The left column separates:

- **Characters** for player characters.
- **Vehicles** for ships and other craft.
- **Adversaries** for minions, rivals, and nemeses.

Each row shows the actor's name and current status bars. Select it to open the sheet in the main panel. The overflow menu gives you the actions available for that actor and your role.

## Add an actor

1. Select **Add** in the appropriate roster section.
2. Choose an eligible character, vehicle, or adversary.
3. Confirm the addition.
4. Reload or reselect the tab if you need to verify that the actor persisted.

If a sheet is missing from the picker, check the account, sheet type, and whether it's already in the game.

## Read current status

Character rows show wounds and strain. Vehicle rows show hull trauma and system strain. The roster reads those values from the source sheets and updates when the sheet changes.

Select the actor when you need defense, soak, characteristics, skills, weapons, critical results, or other details that don't fit in the roster row.

## Roll from a selected sheet

1. Select the acting character.
2. Find the skill or action on the sheet.
3. Start the roll from that control.
4. Add the difficulty and situational dice.
5. Roll and confirm the result appears in the table history.

Vehicle actions can involve a crew character and may be associated with a vehicle area. Review both the acting character and vehicle before rolling.

## Story points and other shared points

Use the round point control beside the game name to manage the shared pool. Its labels follow the player and GM point styles selected in game settings.

Use the control only when the group spends or flips a point according to the game rules. If the theme uses a different name, the underlying shared-table workflow is the same.

## Remove an actor

Use the actor's overflow menu to remove it from the current game. This removes game membership, not the underlying Library sheet. Confirm that distinction before continuing.

For private sheets and edit permissions, see [Roles and Visibility](/docs/rpg-sessions/reference/roles-and-visibility).
