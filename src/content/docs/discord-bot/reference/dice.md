---
title: /dice
description: The dice command group allows you to handle rolling dice in your game
slug: reference/dice
---

## Subcommands

- [**`/dice roll`**](#dice-roll)

## `/dice roll`

### Overview

The `/dice roll` subcommand allows you to roll various dice using a specific string format, supporting both simple and complex rolls. This command provides results that can be used to determine the outcomes of actions, skill checks, and other game events. You can also add an optional comment or make the roll a test, which will not save it to the roll history and make it only show the result to you.

### Command Options

- **`dice` (String)**: The dice string to roll. This can be any valid format, such as:
  - `(ranged)rr` - Rolls dice for a ranged skill.
  - `(ranged)cc` - Rolls a different set of dice for a ranged skill.
  - `3d20` - Rolls three twenty-sided dice.
  This option is required.

- **`comment` (String)**: An optional comment to include with the roll, useful for providing context to others about why you are making the roll.

- **`test` (Boolean)**: If set to `true`, the roll is treated as a test and will not be saved to the roll history. It will also make the result only be shown to you. Defaults to `false` if not specified.

### Examples

- `/dice roll dice:2d6` - Rolls two six-sided dice.
- `/dice roll dice:(ranged)rr comment:"Shooting at the goblin"` - Rolls for a ranged attack with a comment.
- `/dice roll dice:3d20 test:true` - Rolls three twenty-sided dice as a test, without saving the result.

### Important Notes

- Dice rolls are a key component of gameplay, used to determine outcomes, successes, and failures.
- Rolling dice with specific commands allows you to include game rules and character skills for more nuanced results.
- The type of dice you use and how you refer to them is based on your profile's settings. For example, if you have [your profile on RPGSessions](https://app.rpgsessions.com/user/profile) set to use name-based dice, yellow dice are `p` for profeciency. If it's set to color-based, they're `y` for yellow. There's very little overlap here, but there is some, which may cause confusing results if you do not expect it.

### Additional Information

- Dice rolls can be simple (e.g., `3d20`) or complex (e.g., skill-specific rolls like `(ranged)rr`).
- The results of the roll will be displayed with full details, including any modifiers or comments included in the roll.

## Dice Shortcodes

You can use single-letter shortcodes instead of typing out full dice names. The shortcode you use depends on your profile's dice shorthand setting on [RPGSessions](https://app.rpgsessions.com/user/profile).

### Color-Based Shortcodes

If your profile is set to **color-based** shorthand, use these codes based on the physical color of the dice:

| Code | Die | Description |
|------|-----|-------------|
| `y` | Proficiency | Yellow 12-sided die (upgraded positive die) |
| `g` | Ability | Green 8-sided die (standard positive die) |
| `b` | Boost | Blue 6-sided die (situational bonus) |
| `r` | Challenge | Red 12-sided die (upgraded negative die) |
| `p` | Difficulty | Purple 8-sided die (standard negative die) |
| `k` | Setback | Black 6-sided die (situational penalty) |
| `w` | Force | White 12-sided die (Force points) |

**Example:** `2y3g2p` rolls 2 Proficiency, 3 Ability, and 2 Difficulty dice.

### Name-Based Shortcodes

If your profile is set to **name-based** shorthand, use these codes based on the first letter of the die name:

| Code | Die | Description |
|------|-----|-------------|
| `p` | Proficiency | Yellow 12-sided die (upgraded positive die) |
| `a` | Ability | Green 8-sided die (standard positive die) |
| `b` | Boost | Blue 6-sided die (situational bonus) |
| `c` | Challenge | Red 12-sided die (upgraded negative die) |
| `d` | Difficulty | Purple 8-sided die (standard negative die) |
| `s` | Setback | Black 6-sided die (situational penalty) |
| `f` | Force | White 12-sided die (Force points) |

**Example:** `2p3a2d` rolls 2 Proficiency, 3 Ability, and 2 Difficulty dice.

### Modifier Codes

These codes work with both naming conventions and let you add modifiers, upgrades, or specific symbols to your pool:

| Code | Effect | Description |
|------|--------|-------------|
| `u` | Positive Upgrade | Upgrades an Ability die to a Proficiency die |
| `v` | Negative Upgrade | Upgrades a Difficulty die to a Challenge die |
| `i` | Positive Increase | Adds an Ability die to the pool |
| `j` | Negative Increase | Adds a Difficulty die to the pool |
| `x` | Remove Setback | Removes one Setback die from the pool |

**Example:** `(athletics)uu` rolls your Athletics skill and upgrades the pool twice.

### Symbol Codes

You can also add specific symbols directly to your result:

| Code | Symbol | Description |
|------|--------|-------------|
| `!` | Triumph | Adds a Triumph result |
| `*` | Success | Adds a Success result |
| `^` | Advantage | Adds an Advantage result |
| `$` | Despair | Adds a Despair result |
| `-` | Failure | Adds a Failure result |
| `%` | Threat | Adds a Threat result |
| `l` | Light Side | Adds a Light Side point |
| `n` | Dark Side | Adds a Dark Side point |

**Example:** `2g2p*` rolls 2 Ability and 2 Difficulty dice, then adds one automatic Success.

### Combining Shortcodes

You can combine any of these codes in a single roll. Numbers before a code indicate quantity.

**Examples:**
- `/dice roll dice:3y2g4prr` - 3 Proficiency, 2 Ability, 4 Difficulty, and 2 Challenge dice
- `/dice roll dice:(melee)2k` - Your Melee skill plus 2 Setback dice
- `/dice roll dice:(brawl)uv` - Your Brawl skill, upgraded once on both the positive and negative sides