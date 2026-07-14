---
title: Operate and Repair Vehicles
description: Use vehicle characteristics, defense, hull trauma, system strain, critical hits, and vehicle checks.
pageType: guide
audience: [player, gm]
surface: vehicle-sheet
systems: [all]
appRoutes: ["/vehicle/$vehicleId", "/game/$gameId/table"]
requirements:
  signedIn: true
verifiedAt: "2026-07-13"
verifiedContexts: [source-reviewed, signed-in, gm, admin, desktop]
---

Keep the craft's operating values and current damage on its vehicle sheet. Use the quick controls during play, then edit the sheet when a permanent value changes.

## Core operating values

- **Silhouette** represents the vehicle's relative scale.
- **Speed** tracks its current or rated movement value, depending on the field shown by the theme.
- **Handling** modifies appropriate checks.
- **Armor** reduces incoming vehicle-scale damage according to the rules.
- **Defense zones** apply defense by firing arc or by the simpler layout selected when the vehicle was created.

## Hull trauma and system strain

The sheet separates each threshold from its current value. Use the plus and minus controls to record damage and recovery during play.

- **Hull trauma** represents physical damage to the vehicle.
- **System strain** represents stress on its systems.

The Game Table roster reads these current values from the vehicle sheet. Keep them current if the group is using roster status or Maps.

## Vehicle critical hits

Add critical hits to the vehicle's critical section and record the result from the vehicle critical table selected in the game settings. Leave unresolved results on the sheet until repaired.

Character and vehicle critical tables are configured separately. If a result list looks wrong, confirm that the game is using the intended vehicle table.

## Vehicle actions and checks

Vehicle actions give you reusable checks for piloting, gunnery, engineering, sensors, and other tasks defined by the vehicle or imported data. Link an action to a deck area when you want the crew to find its station on a deck plan.

To make a check:

1. Open the vehicle sheet directly or select the vehicle on the Game Table.
2. Find the appropriate vehicle action.
3. Choose the acting character or crew position when the workflow asks for one.
4. Review the base pool and add the current difficulty and situational dice.
5. Roll and post the result to the table.

## Repair and reset

Reduce hull trauma, system strain, and critical results only when the game's repair rules allow it. Editing a threshold isn't the same as repairing current damage.

If a value doesn't update after a change, refresh the sheet and check its attachments, qualities, and active effects. Follow the [calculated-value troubleshooting steps](/docs/rpg-sessions/troubleshooting#dice-and-calculated-values) if the value is still wrong.
