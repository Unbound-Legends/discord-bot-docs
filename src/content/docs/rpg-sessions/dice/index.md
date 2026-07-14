---
title: Roll Dice
description: Use the standalone Test and Live dice modes, choose a dice theme, and review saved roll history.
pageType: guide
audience: [player, gm]
surface: dice
systems: [all]
appRoutes: ["/dice", "/dice/$rollId", "/dice/history"]
requirements:
  signedIn: true
verifiedAt: "2026-07-13"
verifiedContexts: [source-reviewed, signed-in, gm, admin, desktop]
---

Use the standalone Dice page when you need a pool without opening a character or game. You can test a pool, make a quick check, or save a roll you want to link to later.

## Choose Test or Live

- **Test** rolls the selected dice and displays the result on the current page. It doesn't create a saved roll in your history.
- **Live** asks for an optional description, saves the roll, and opens a result page with a shareable roll record.

Use Test while assembling or checking a pool. Switch to Live when the result should be part of your roll history.

## Choose a dice theme

Choose **Genesys**, **Star Wars**, or **Numeric** from the theme selector. Changing the theme clears the current pool so you don't carry incompatible dice into the new one.

## Build and roll a pool

1. Open **Dice** from the top navigation.
2. Select **Test** or **Live**.
3. Choose the dice theme.
4. Select each die type to add it to the tray.
5. Select a die in the tray to remove it if needed.
6. In Live mode, add a description that explains the check.
7. Select **Roll Dice**.

Narrative themes calculate their symbols automatically. Numeric dice report the numeric result appropriate to that roller.

## Review history

The Dice page shows your recent saved rolls. Choose **See Full History** for the full list, or open a result to review its dice, description, result, and owner.

Test rolls don't appear in this history. If you need a permanent record, rerun the intended pool in Live mode rather than taking a screenshot of a test result.

## Roll from a sheet instead

Roll from the character sheet when the pool depends on characteristics and ranks. The standalone roller can't build that base pool because it doesn't know which character or skill you're using.

See [Characteristics and Rolls](/docs/rpg-sessions/characters/rolls-and-characteristics) and [Game Table Roster and Dice](/docs/rpg-sessions/game-table/roster-dice-and-story-points).
