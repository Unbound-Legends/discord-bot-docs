---
title: /crit
description: The crit command group allows you to list and roll crits from any crit table you can access
---

The `/crit` command provides tools to roll for or view critical hit tables. It includes subcommands that allow you to either roll for a new critical hit or see a list of possible critical injuries, making it useful for managing and referencing critical effects during gameplay, especially for GMs.

## Subcommands

- [**`/crit list`**](#crit-list)
- [**`/crit roll`**](#crit-roll)

## `/crit list`

### Overview

The `/crit list` subcommand provides a list of all critical injuries from a specific critical hit table. You can filter the list by name or description and choose whether to send the message privately. This is useful for players and game masters to view and reference critical injuries relevant to the current game context.

### Command Options

- **`table` (String)**: Specifies which crit table to list from. You must have access to this table either by having created it or it being linked to the game the current channel is connected to. This is optional, and autocomplete is available to help you select from existing tables. Defaults to the current game's character crit table.
- **`filter` (String)**: Filters the list by the name or description of critical injuries. This is useful for narrowing down specific injuries. This option is optional.
- **`private` (Boolean)**: If set to `true`, the message is visible only to you. If `false` or not specified, the message is visible to everyone.

### Examples

- `/crit list` - Displays all critical injuries from the default crit table.
- `/crit list table:basic crit` - Lists all critical injuries from the 'basic crit' table.
- `/crit list filter:broken` - Lists only the critical injuries that have "broken" in their name or description.
- `/crit list private:true` - Lists all critical injuries in a message only visible to you.

### Important Notes

- You do not need an active character to use this command.
- You can combine options to narrow down results or choose specific tables to reference.

### Additional Information

- If the list is very long, it may be split into multiple embedded messages for better readability.
- Severity information is shown for each injury, using game-specific dice representations to indicate severity levels.

## `/crit roll`

### Overview

The `/crit roll` subcommand allows you to roll for a new critical hit or injury. This roll determines the severity of the critical injury and provides details about the resulting effect. You can specify a crit table to use, apply modifiers to adjust the roll, and decide if the result should be shown privately.

### Command Options

- **`table` (String)**: Specifies which crit table to roll from. You must have access to this table either by having created it or it being linked to the game the current channel is connected to. This is optional, and autocomplete is available to help you select from existing tables. Defaults to the current game's character crit table.
- **`private` (Boolean)**: If set to `true`, the message is visible only to you. If `false` or not specified, the message is visible to everyone. Defaults to `false` if not specified.
- **`modifier` (Number)**: A manual modifier to adjust the severity of the roll. This can make the resulting injury more or less severe. This option is optional.

### Examples

- `/crit roll` - Rolls for a critical injury using the default crit table.
- `/crit roll table:basic crit` - Rolls for a critical injury from the 'basic crit' table.
- `/crit roll modifier:10` - Rolls for a critical injury with a modifier of 10, increasing the severity.
- `/crit roll private:true` - Rolls for a critical injury and sends the result privately.

### Important Notes

- The result of the roll does not automatically save to a character or vehicle; it only provides the details for you to apply manually if needed.

### Additional Information

- Rolling for critical hits is an essential part of gameplay, especially during combat, as it determines the long-term impact on a character.
- The result will be displayed with full details, including the injury type, severity, and any modifiers applied.
