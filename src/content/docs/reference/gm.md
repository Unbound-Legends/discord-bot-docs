---
title: /gm
description: The gm command group allows you to manage GMs for the current game
---

The `/gm` command provides tools for managing Game Masters (GMs) in a Discord server. This command is essential for adding or removing GMs, thereby helping manage permissions for various game sessions effectively. Only users with administrative permissions or people who are currently GMs can use this command to manage GM roles.

## Subcommands

- [**`/gm add`**](#gm-add)
- [**`/gm remove`**](#gm-remove)

## `/gm add`

### Overview

The `/gm add` subcommand is used by server administrators or existing Game Masters (GMs) to promote another player to GM status for a specific game. This is useful in scenarios where additional help is needed to manage gameplay, streamline decision-making, or support large player groups.

### Command Options

- **`user` (User)**: This specifies the player to be promoted to GM. The selected player must already be a part of the game. This is a required parameter.
  
### Usage Requirements

- **Permissions**: The command can only be used by someone with server administrator permissions or an existing GM.
- **Player Membership**: The user to be promoted must already be part of the current game. If they are not, they need to be added first with the `/game add` command.

### Examples

- `/gm add user:@PlayerName` - Promotes `@PlayerName` to GM in the current game.

### Important Notes

- If the selected user does not have an RPG Sessions account linked to Discord, the command will return an error.
- The user must be a participant in the current game to be promoted. If the user is not in the game, an error message will prompt you to use `/game add` to include them first.
- If the user is already a GM, the command will notify you that no further action is needed.

### Common Use Cases

- **Sharing Management Responsibilities**: Promoting additional GMs is helpful for distributing game management duties, especially in larger groups or for longer campaigns.
- **Assigning Multiple GMs**: In games with a larger number of players, multiple GMs can help maintain the flow and quality of the experience by managing different aspects of the game.

## `/gm remove`

### Overview

The `/gm remove` subcommand allows a server admin or an existing Game Master (GM) to demote another GM to a regular player. This can be used when a GM no longer needs administrative control over the game.

### Command Options

- **`user`**: The Discord user you want to demote from GM status. The user must be linked to an RPG Sessions account and must be a GM in the game.

### Usage Requirements

- **Permissions**: You need to be a server admin or an existing GM to demote another GM.
- **Player Membership**: The player you want to demote must already be part of the game and currently have GM status.


### Example

- `/gm remove user:@PlayerName` - Demotes `@PlayerName` from GM to player in the current game.

### Important Notes

- If the selected user isn't linked to an RPG Sessions account, the command will return an error.
- The user must already be a GM of the game to be demoted. If not, you'll receive an error indicating that they aren't a GM.
