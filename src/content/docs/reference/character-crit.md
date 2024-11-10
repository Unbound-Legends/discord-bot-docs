---
title: "/character crit"
description: The crit subcommand group allows you to list and manage crits related to your character
---

The `/character crit` command group provides tools for managing your character's critical injuries. This includes listing current injuries, rolling for new critical hits, adding injuries manually, and healing existing injuries. This command is essential for tracking the state of your character's health during gameplay.

### Subcommands

- [**`/character crit list`**](#character-crit-list)
- [**`/character crit roll`**](#character-crit-roll)
- [**`/character crit add`**](#character-crit-add)
- [**`/character crit heal`**](#character-crit-heal)

## `/character crit list`

### Overview

The `/character crit list` subcommand gives you a list of all the critical injuries that characters in your game can have. This command helps you see which injuries are affecting characters, either in a simple list or with more details if you use filtering options.

### Command Options

- **`filter` (String)**: Use this to filter the list by the name or description of critical injuries. This helps you find specific injuries faster. This option is not required.
- **`private` (Boolean)**: Choose if you want the response to be seen only by you (`true`) or by everyone in the channel (`false`). If you don't pick, it defaults to `false`.

### Examples

- `/character crit list` - Shows all the critical injuries that characters in your game can have.
- `/character crit list filter:broken` - Shows only the critical injuries that have "broken" in their name or description.
- `/character crit list private:true` - Lists all critical injuries so that only you can see them.

### Additional Information

- If the list is very long, it might be split into multiple messages.
- Each injury shows its severity, using game-specific dice symbols for better understanding.
- You can filter by injury name, description, or severity to quickly find what you need.

## `/character crit roll`

### Overview

The `/character crit roll` subcommand lets you roll for a critical hit or injury for your character. This is helpful during battles when your character takes a critical hit, and you need to figure out what effect it has. You can also use modifiers to change the result based on outside factors. Existing crit modifiers are calculated automatically. Results from this command are applied automatically.

### Command Options

- **`modifier` (Number)**: A number you can add to the roll to change the severity of the injury. This is optional.

### Examples

- `/character crit roll` - Rolls for a critical injury without any extra modifiers.
- `/character crit roll modifier:20` - Rolls for a critical injury with a modifier of 20, making the injury more severe.

### Important Notes

- You need to have an active character to use this command.
- Modifiers can be from past critical injuries are applied automatically.

### Additional Information

- The result of the roll will be saved and shown with all the important details, like the type of injury, its severity, and a description.
- You will also get a link to see the dice roll history, so you can check the roll and its result during gameplay.

## `/character crit add`

### Overview

The `/character crit add` subcommand allows you to manually add a specific critical injury to your character. This can be useful when the Game Master (GM) or gameplay circumstances require adding a specific injury outside of a standard roll. You can select from a list of critical injuries available for your game.

### Command Options

- **`crit` (String)**: The name or ID of the critical injury to add to your character. This option is required, and autocomplete is available to help you choose an injury.

### Examples

- `/character crit add crit:broken arm` - Manually adds the "Broken Arm" critical injury to your character.
- `/character crit add` - Prompts you to select a critical injury to add to your character from the list.

### Important Notes

- You must have an active character to use this subcommand.
- This command allows manual selection, which is different from rolling for a random critical injury.
- Autocomplete helps you quickly find the right critical injury to add.

### Additional Information

- The injury you add will be displayed with all relevant details, including its severity and description.
- The injury will be saved to your character, affecting your character's future critical rolls.

## `/character crit heal`

### Overview

The `/character crit heal` subcommand allows you to heal or remove a specific critical injury from your character. This is useful when your character recovers from an injury, either through rest, abilities, or external healing. You can choose to either heal the injury (marking it as healed but keeping it in the record) or completely remove it from your character's list of injuries.

### Command Options

- **`crit` (String)**: The critical injury to heal or remove. This option is required, and autocomplete is available to help you select from your character's current injuries.
- **`remove` (Boolean)**: If set to `true`, the selected critical injury will be completely removed from your character's records. If not specified, the injury will be healed instead of removed.

### Examples

- `/character crit heal crit:broken arm` - Heals the "Broken Arm" critical injury for your character.
- `/character crit heal crit:broken arm remove:true` - Removes the "Broken Arm" critical injury from your character's records.

### Important Notes

- You need to have an active character to use this subcommand.
- Healing an injury marks it as healed but keeps a record, while removing it deletes it from the records entirely.
- Autocomplete helps you quickly select the correct injury from your character's current list.

### Additional Information

- The result of healing or removing an injury will be displayed in an embed, showing details like the name, severity, and description of the injury.
- If the injury is already healed, attempting to heal it again will result in a message indicating that it's already healed.
