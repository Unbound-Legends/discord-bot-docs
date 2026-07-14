---
title: Crew, Weapons, and Deck Plans
description: Assign a vehicle's crew for each game, manage its weapons and cargo, and connect it to deck plans.
pageType: guide
audience: [player, gm, sheet-builder]
surface: vehicle-sheet
systems: [all]
appRoutes: ["/vehicle/$vehicleId", "/game/$gameId/table"]
requirements:
  signedIn: true
verifiedAt: "2026-07-13"
verifiedContexts: [source-reviewed, signed-in, gm, admin, desktop]
---

Use a vehicle to connect its rules, crew, equipment, and physical map. Set up the sheet first, then assign the crew after the vehicle and characters are in the same game.

## Crew and passengers

The vehicle overview shows its crew and passengers. Crew assignments belong to one game, so the same vehicle can have a different crew somewhere else.

1. Add the vehicle to the game.
2. Add the characters who may crew it to the same game.
3. Open the vehicle in that game context.
4. Assign crew members to the available positions or areas.
5. Confirm the assignments from the Game Table or vehicle sheet.

If a character is missing from the picker, confirm that both the character and vehicle are members of the current game.

## Mounted weapons

Add each installed weapon to the vehicle's weapons section. Record its damage, critical rating, range, qualities, firing arc, and other values supported by the theme. Use attachments and customizations for modifications rather than changing the base weapon description without a record.

During play, use the relevant vehicle or gunnery action and apply the weapon's qualities to the result according to your game rules.

## Cargo and encumbrance

Use vehicle cargo for items carried by the craft rather than by one character. When the available controls allow it, move an item between vehicle cargo and a character instead of creating a duplicate entry.

Keep quantity, encumbrance, and notes current so the cargo list remains useful to the whole group.

## Customizations and hard points

Record installed customizations and their hard-point cost. Compare the total used hard points with the vehicle's available capacity before treating a modification as active.

## Deck plans

Deck plans connect a vehicle to an interactive map. A vehicle can have multiple plans, and each plan can define named areas such as the bridge, engine room, cargo hold, or turrets.

You can link vehicle actions to those areas. In Maps, the group can open the deck plan and use the linked character and vehicle sheets from within the **Map Editor** tab.

For the map workflow, see [Vehicle Deck Plans](/docs/maps/features/vehicle-deck-plans) and [Character and Vehicle Sheets in Maps](/docs/maps/features/sheets).

Deck-plan controls only appear when the required table and map access is available. The vehicle sheet remains usable without a deck plan.
