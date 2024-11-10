---
title: "/initiative"
description: The initiative group allows you to handle initiative for your current game
---

The `/initiative` command is used to manage initiative in a game, which determines the order in which players, NPCs, or adversaries take actions. This command provides various subcommands to manage and control the flow of initiative rounds efficiently, such as starting, rolling, viewing, or modifying the initiative order.

## Subcommands

- [**`/initiative start`**](#initiative-start)
- [**`/initiative reset`**](#initiative-reset)
- [**`/initiative roll`**](#initiative-roll)
- [**`/initiative view`**](#initiative-view)
- [**`/initiative clear`**](#initiative-clear)
- [**`/initiative next`**](#initiative-next)
- [**`/initiative previous`**](#initiative-previous)
- [**`/initiative add`**](#initiative-add)
- [**`/initiative remove`**](#initiative-remove)
- [**`/initiative set`**](#initiative-set)

## `/initiative start`

### Overview

The `/initiative start` subcommand initiates a new round of combat, starting the initiative sequence for all players and NPCs. This command is typically used at the beginning of an encounter or combat situation, allowing participants to determine the turn order through initiative rolls.

### Command Options

- **`check` (String, Optional)**: Specifies the type of skill check used to roll for initiative. This can be either "Vigilance" or "Cool". If not provided, "Vigilance" is the default suggestion.
  - Choices:
    - `Vigilance`: Typically used when the character is surprised or reacting quickly.
    - `Cool`: Used when the character is prepared or expecting combat.
- **`order` (String, Optional)**: Sets a predefined initiative order. The format can be flexible, such as:
  - "PC, PC, NPC": Indicates the order by specifying Player Characters (PC) and Non-Player Characters (NPC).
  - "ppn" or "2pn": Shorter representations of turn order.

### Examples

- `/initiative start check:Vigilance order:PC, NPC, PC` - Starts the initiative with Vigilance checks and a predefined order of Player, Non-Player, Player.
- `/initiative start order:2pn` - Begins an initiative with an order of two Player turns followed by a Non-Player turn.
- `/initiative start check:Cool` - Starts the initiative using Cool checks, without specifying a turn order.

### Important Notes

- **Thread Creation**: Once the initiative starts, a thread named "Initiative Rolls" will automatically be created in the channel. All roll results and initiative updates will be posted there for easy reference.
- **Initiative Order Flexibility**: The `order` parameter allows Game Masters to set up a flexible initiative order from the beginning, making it easier to manage encounters with multiple players and NPCs.

## `/initiative reset`

### Overview

The `/initiative reset` subcommand allows the Game Master (GM) to reset the current initiative order for the game. This command clears all existing initiative slots, effectively resetting the encounter and enabling a fresh start. It is particularly useful when restarting an encounter or adjusting the flow of the session.

### Command Options

This command is only available to the GM and does not accept any specific options.

### Examples

- `/initiative reset` - Resets the current initiative order for the game. Only available to Game Masters.

### Important Notes

- This command is restricted to Game Masters only.
- Resetting the initiative will remove all existing slots and allow a new order to be set up.
- When used, a message will be posted in the thread or channel indicating that the initiative has been reset.

## `/initiative roll`

### Overview

The `/initiative roll` subcommand allows players or GMs to roll initiative dice, either for Player Characters (PCs) or Non-Player Characters (NPCs). The command opens a modal where the user can specify the type of roll, the character for whom the roll is being made, and in the case of NPCs, the number of NPC groups involved. This is particularly useful during combat sequences or structured gameplay, where initiative order determines the flow of actions.

### Usage Requirements

- **User Roles**: Any player or GM can use this command, although only GMs can roll for NPCs.
- **Active Character**: Players must have an active character to roll for PCs.

### Command Options

- **`check`** (optional): The check to use for the initiative roll. It can be either:
  - **Vigilance**: Used for situations where characters are unprepared.
  - **Cool**: Used when characters are prepared and expecting combat.

- **`order`** (optional): The starting initiative order. This can be defined in several ways:
  - **Text Format**: "PC, PC, NPC" (indicates the order of PCs and NPCs).
  - **Abbreviated Format**: "ppn" or "2pn" (shorthand indicating how many PCs and NPCs are in the initial order).

### Examples

- `/initiative roll` - Rolls initiative using the default check type (e.g., Vigilance).
- `/initiative roll check:Cool` - Rolls initiative for a character who is prepared for combat.
- `/initiative roll check:Vigilance order:ppn` - Starts initiative with two PCs followed by an NPC.

### Important Notes

- **PC and NPC Rolls**: Players can only roll initiative for their own characters, while GMs can roll for both PCs and NPCs.
- **Multiple NPC Rolls**: When rolling for NPCs, GMs can specify the number of NPC groups involved (up to 10).
- **Thread Creation**: If the command is used outside of an existing thread, a new thread titled "Initiative Rolls" will be created to keep track of the initiative order and rolls.
- **Initiative View Update**: After rolling, the initiative view will be updated with the new initiative order, including both PCs and NPCs.

## `/initiative view`

### Overview

The `/initiative view` subcommand is used to display the current initiative order for the game session. This allows players and game masters (GMs) to view who is next in line during combat or other turn-based actions.

### Command Options

- This command does not have any options. It simply shows the current state of initiative.

### Examples

- `/initiative view` - Displays the current initiative order with all players and NPCs involved in the ongoing encounter.

## `/initiative clear`

### Overview

The `/initiative clear` subcommand is used to completely reset the current initiative. This command is typically used to start fresh when a new encounter is beginning or when the previous initiative order is no longer needed.

This command requires confirmation before executing to prevent accidental loss of initiative data. Once confirmed, all initiative slots and positions will be deleted, and the round and slot numbers will be reset.

### Examples

- **`/initiative clear`**: Executes the command to clear the initiative, prompting you to confirm or cancel the action.

### Important Notes

- Clearing initiative will delete all current slots and reset the round to 1 and slot to 1.
- Always double-check before confirming, as this action cannot be undone.

## `/initiative next`

### Overview

The `/initiative next` subcommand allows users to advance the initiative to the next slot, optionally skipping a specified number of slots. This command can also be used to wrap around to the next round if the end of the current round is reached. It is particularly useful for keeping track of turns during gameplay in a structured way.

### Command Options

- **`skip` (Number)**: The number of slots to skip. This must be a positive number. The default is `1`, which moves to the very next slot in the initiative order. This option is optional.

### Examples

- `/initiative next` - Advances to the next slot in the initiative order.
- `/initiative next skip:2` - Skips two slots forward in the initiative order.

### Important Notes

- **Slot Wrapping**: If the command reaches the last slot in the current round, it will wrap around to the next round automatically.
- **Round Advancement**: Using the `skip` parameter allows for advancing multiple slots and rounds depending on the current position.

## `/initiative previous`

### Overview

The `/initiative previous` subcommand allows players or GMs to move the initiative tracker to the previous slot in the current initiative order. If the current slot is the first one, it will wrap around to the last slot, while also adjusting the round count as needed. This command helps manage the flow of the game, ensuring that turns are managed efficiently, especially during complex encounters with multiple rounds.

### Command Options

- **`skip` (Number)**: The number of slots to skip backward. If set, the initiative tracker will move back by the specified number of slots. Defaults to `1` if not specified. The value must be a positive number.

### Examples

- `/initiative previous` - Moves to the previous slot in the initiative order.
- `/initiative previous skip:2` - Moves back by two slots in the initiative order.

### Important Notes

- If you attempt to skip back more slots than are available, the command will automatically adjust and wrap around to earlier rounds, ensuring the initiative position stays valid.
- The command takes into account the total number of initiative slots and the current round to determine the new position.
- Useful for correcting mistakes or revisiting previous turns during gameplay.

## `/initiative add`

### Overview

The `/initiative add` subcommand is used to add a new initiative slot to the current initiative tracker. This can be useful for adding new players or NPCs to the ongoing initiative order during a game session. The slot type can be either a PC (Player Character) or NPC (Non-Player Character), and you can also specify its position in the order.

### Command Options

- **`type` (String)**: The type of initiative slot to add. Options are:
  - **`NPC`**: Adds a slot for a Non-Player Character.
  - **`PC`**: Adds a slot for a Player Character.
  This option is required.

- **`position` (Number)**: The position in the initiative order where you want the new slot to be added. Defaults to the last slot if not specified. Must be a positive number.

### Examples

- `/initiative add type:PC` - Adds a Player Character slot to the end of the initiative order.
- `/initiative add type:NPC position:3` - Adds an NPC slot in the third position of the initiative order.

### Important Notes

- **Slot Position**: If the position is not specified, the new slot will be added at the end of the current initiative list.

## `/initiative remove`

### Overview

The `/initiative remove` subcommand is used to remove a specific type of initiative slot from the current initiative order. This is helpful for managing the flow of combat by removing either a Player Character (PC) or Non-Player Character (NPC) from the initiative when necessary.

### Command Options

- **`type` (String)**: The type of slot to remove. This option is required and can have one of the following values:
  - **`NPC`**: Removes an NPC slot from the initiative.
  - **`PC`**: Removes a PC slot from the initiative.

### Examples

- `/initiative remove type:PC` - Removes a Player Character slot from the initiative order.
- `/initiative remove type:NPC` - Removes a Non-Player Character slot from the initiative order.

## `/initiative set`

### Overview

The `/initiative set` subcommand allows Game Masters (GMs) to adjust specific aspects of the initiative, such as the current round, slot, or the entire order. This is helpful when correcting mistakes or setting up a new sequence for ongoing encounters.

### Command Options

- **`round` (Number)**: Sets the current round number of the initiative.
  - Optional.
  - Must be a positive number. Defaults to 1 if the value provided is less than 1.

- **`slot` (Number)**: Sets the current slot in the initiative.
  - Optional.
  - Must be between 1 and the total number of slots available. Values greater than the total number of slots are capped at the maximum.

- **`order` (String)**: Sets a new order for the initiative slots.
  - Optional.
  - Use `p` for PC and `n` for NPC. For example, `ppnnp` means two PCs, two NPCs, followed by one more PC.

### Examples

- `/initiative set round:3` - Sets the current round to 3.
- `/initiative set slot:2` - Sets the current slot to slot number 2.
- `/initiative set order:ppnn` - Sets the initiative order to two PCs followed by two NPCs.
- `/initiative set round:1 slot:3 order:ppn` - Sets the round to 1, the slot to 3, and the order to two PCs followed by one NPC.

### Important Notes

- At least one of the options (`round`, `slot`, or `order`) must be provided when using this subcommand.
- If the value provided for `round` or `slot` is less than 1, it will default to 1.
- If `slot` is greater than the number of slots available, it will be capped at the maximum number of slots.



