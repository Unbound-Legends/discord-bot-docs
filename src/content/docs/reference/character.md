---
title: /character
description: All of the commands related to managing your characters through the RPG Sessions Discord Bot
---

### Subcommands

Below is a list of subcommands available under `/character`:

1. **[`/character select`](#character-select)** - Choose an active character.
2. **[`/character view`](#character-view)** - View the details of your character.
3. **[`/character edit`](#character-edit)** - Edit character attributes or information.
4. **[`/character list`](#character-list)** - List all characters associated with your account.
5. **[`/character damage`](#character-damage)** - Calculate and display your character's damage.
6. **[`/character crit`](character-crit.md)** - View information regarding your character's critical hit stats.

## `/character select`

### Description

The `/character select` command allows you to pick an active character for the current game. You can use it to select a character from your list or remove the character you are currently using. This is important to ensure your character is properly set for game interactions and progress tracking.

### Usage

To use this command, you must specify a character. You can also decide if you want to remove the current active character.

#### Command Options

- **`character` (String)**: The name or ID of the character you want to select. This option is required.
- **`remove` (Boolean)**: Indicates whether to remove the current active character from the game. This option is optional and defaults to `false`.

### Examples

- `/character select character:WarriorOfLight` - Selects the character named "WarriorOfLight" as the active character.
- `/character select character:WarriorOfLight remove:true` - Removes the current active character from the game.

### Notes

- You must be a member of the game to select a character.
- The character must belong to your account.
- Autocomplete is available to help you find your character by name.

### Permissions

- You must be registered and have at least one character in the game.
- You can only select characters that belong to your account.

### Additional Information

- If multiple characters match the input, you need to provide a more specific name.
- This command supports autocomplete to make it easier to locate and select your character.

## `/character view`

### Overview

The `/character view` command allows you to see detailed information about a character in the current game. You can specify which character to view or, if none is specified, the command will display your active character. This helps users keep track of their character's stats, progress, and other relevant details.

### How to Use the Command

To use this command, specify a character to view or rely on the currently active character.

#### Command Options

- **`character` (String)**: The name or ID of the character you want to view. If no character is provided, it will default to your currently active character. This option is optional.
- **`private` (Boolean)**: Specifies whether the response should be private. Defaults to `true` if not specified. This option is optional.

### Examples

- `/character view` - Views the currently active character.
- `/character view character:WarriorOfLight` - Views the character named "WarriorOfLight".
- `/character view character:WarriorOfLight private:false` - Views the character named "WarriorOfLight" and makes the response public.

### Important Notes

- You must be a member of the game to view a character.
- The character must belong to your account or be a character within the current game.
- Autocomplete is available to help you select the character by name.

### Permissions Required

- You must be registered and have at least one character in the game.
- You can view characters that belong to you or are part of the game.

### Additional Information

- If multiple characters match your input, you will need to be more specific.
- The command supports autocomplete to help you quickly find the character you're looking for.

## `/character edit`

### Overview

The `/character edit` command lets you update specific attributes of your active character. This command is particularly useful for adjusting character stats such as experience, health, or currency, allowing for real-time updates based on in-game events or changes.

### How to Use the Command

To use this command, specify the attribute you wish to modify and the value by which you want to change it.

#### Command Options

- **`type`** **(String)**: The attribute you want to edit, such as health or experience. This option is required, and autocomplete is available to assist in selecting the correct attribute.
- **`value`** **(Number)**: The amount by which to adjust the attribute. This can be positive or negative, depending on whether you want to increase or decrease the attribute. This option is required.

### Examples

- `/character edit type:Wounds Current value:5` - Increases the "Wounds Current" attribute by 5.
- `/character edit type:Available XP value:-10` - Decreases the "Available XP" by 10.

### Important Notes

- You must have an active character to use this command.
- Only attributes belonging to your active character can be modified.
- Autocomplete is available for selecting the attribute type, making it easier to find the appropriate attribute.

### Permissions Required

- You must be registered and have an active character in the game.
- Only attributes of your active character can be modified.

### Additional Information

- Some attributes, like experience points, may affect other related stats. For example, increasing Available XP may also increase Total XP.
- The command supports autocomplete to help you quickly locate the attribute you want to edit.

## `/character list`

### Overview

The `/character list` command allows you to view all player characters (PCs) currently in the game. You can choose between a condensed or full view and decide if you want the response to be private or public.

### How to Use the Command

To use this command, simply run `/character list` and specify any options you prefer for the output.

### Command Options

- **`full`** **(Boolean)**: Shows a detailed view of each character if set to `true`. Defaults to `false` for a condensed view.
- **`private`** **(Boolean)**: Determines if the output should be visible only to you (`true`) or made public (`false`). Defaults to `true`.

### Examples

- `/character list` - Lists all characters in the game in a condensed view, visible only to you.
- `/character list full:true` - Lists all characters with full details.
- `/character list private:false` - Lists all characters in a public response.

### Important Notes

- You must be a member of the game to use this command.
- You can choose between a condensed summary or a detailed view of character attributes.

### Permissions Required

- You must be registered and be a member of the current game.

### Additional Information

- For larger character lists, a threaded response may be used to avoid cluttering the main chat.

## `/character damage`

### Overview

The `/character damage` command allows you to apply wound or strain damage to your active character. This command takes into account the character's soak value, reducing the damage accordingly. The command is useful for tracking combat or other scenarios where your character takes damage.

### How to Use the Command

To use this command, specify the type of damage (either wounds or strain), the amount of damage to apply, and optionally the amount of breach or pierce that bypasses soak.

### Command Options

- **`type` (String)**: Specifies whether the damage is to `wounds` or `strain`. This option is required.
- **`damage` (Number)**: The amount of damage to apply before soak is considered. This option is required.
- **`breach` (Number)**: Optional. Represents the amount of `breach` to apply, which increases the damage by ignoring some of the soak value. Defaults to `0` if not specified.
- **`pierce` (Number)**: Optional. Represents the amount of `pierce` to apply, which further reduces the soak. Defaults to `0` if not specified.

### Examples

- `/character damage type:wounds damage:10` - Applies 10 points of wound damage to your character, reduced by soak.
- `/character damage type:strain damage:5 breach:1` - Applies 5 points of strain damage with 1 breach modifier.
- `/character damage type:wounds damage:15 pierce:3` - Applies 15 points of wound damage with 3 points of soak ignored due to pierce.

### Important Notes

- You must have an active character to use this command.
- The soak value of the character reduces the amount of damage taken.
- Breach and pierce modifiers allow damage to bypass some or all of the soak.
- If all damage is absorbed by soak, a message will indicate that no damage was taken.

### Permissions Required

- You must be registered and have an active character in the game.

### Additional Information

- This command is helpful for managing character health during combat or other events involving damage.
- The output will include an updated character summary, showing the new values after applying the damage.
