---
title: Health, Equipment, and Progression
description: Track wounds, strain, critical injuries, inventory, talents, XP, credits, and narrative mechanics on a character sheet.
pageType: guide
audience: [player, gm, sheet-builder]
surface: character-sheet
systems: [all]
appRoutes: ["/char/$characterId"]
requirements:
  signedIn: true
verifiedAt: "2026-07-13"
verifiedContexts: [source-reviewed, signed-in, gm, admin, desktop]
---

Use the lower sections of the character sheet for the values that change through play and advancement. Keep them current during the session so the Game Table and Maps show the right state.

## Wounds, strain, soak, and defense

The top summary separates each threshold from its current value. Use the plus and minus controls for quick changes during play, or edit the sheet when a permanent rule changes a threshold.

- **Soak** reduces incoming damage according to your game's rules.
- **Wounds** track physical damage.
- **Strain** tracks mental and exertion damage.
- **Melee and ranged defense** add the appropriate setback dice when the rules call for them.

## Critical injuries

Add a critical injury when the character suffers one, and record the result from the critical table selected by the game. Keep unresolved injuries on the sheet until the rules say they're healed.

Game settings can choose the character critical table used at that table. A different table can change which results are available without changing the rest of the character sheet.

## Weapons, armor, and gear

Weapons store combat values such as damage, critical rating, range, and qualities. Armor contributes defense, soak, encumbrance, and other effects. Gear covers the remaining inventory.

Use attachments for modifications associated with a specific item. Use quantity and encumbrance fields so the inventory summary remains useful.

Add reusable items from the [Data Library](/docs/rpg-sessions/data-library). If your campaign uses something that isn't there, create a custom entry on the sheet instead.

## Talents and effects

Talents record their activation, rank, tier or tree position, and rules text as supported by the theme. Some data-library items can grant effects that change calculated values or roll behavior. Check the source item before manually duplicating its benefit on the sheet.

## XP, credits, and narrative mechanics

Record XP and credit changes in their logs instead of changing only the totals. You'll have a useful history when you need to work out where a value came from later.

Star Wars themes can expose obligation, duty, morality, Force, and related narrative sections. Other Genesys themes use setting-neutral or optional fields. The sections you see follow the game theme and creation options.

## Notes and custom information

Use notes for details that don't have a dedicated field, including temporary conditions, campaign-specific resources, contacts, and reminders. Keep rule-changing values in their structured fields whenever possible so rolls and table views can use them.

Before deleting equipment or a talent, check whether another calculated value or automation depends on it.
