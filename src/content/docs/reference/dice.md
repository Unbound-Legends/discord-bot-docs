---
title: /dice
description: The dice command group allows you to handle rolling dice in your game
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