---
title: /game
description: The game command group allows you to manage your game
slug: reference/game
---

The `/game` command provides a set of subcommands used for managing games. These commands allow players to join, leave, add, remove, pair, unpair, and view details about games they are participating in. Game management is essential for coordinating players, keeping track of game data, and ensuring a smooth experience.

## Available Subcommands

- [**`/game join`**](#game-join)
- [**`/game leave`**](#game-leave)
- [**`/game add`**](#game-add)
- [**`/game remove`**](#game-remove)
- [**`/game pair`**](#game-pair)
- [**`/game unpair`**](#game-unpair)
- [**`/game view`**](#game-view)

## `/game join`

### Overview

The `/game join` subcommand allows a player to join the game session associated with the current server or channel. This command is essential for enabling new participants to be added to an existing game, provided that the game settings allow for new players to join.

### Command Options

This subcommand does not have any additional options. It will add the user to the game associated with the current context.

### Examples

- `/game join` - Adds you to the current game session if it is open to new players.

### Important Notes

- Your Discord user must be linked to an RPG Sessions account to join the game.
- The game must be configured to allow new players in the settings, or else the command will fail.

### Additional Information

- Game Masters can change the settings of the game to allow new players if necessary.

## `/game leave`

### Overview

The `/game leave` subcommand allows a player to leave the game session associated with the current server or channel. This is useful for players who no longer wish to participate in a particular game.

### Command Options

This subcommand does not have any additional options. It simply removes the user from the game associated with the current context.

### Examples

- `/game leave` - Removes you from the current game session.

### Important Notes

- Your Discord user must be linked to an RPG Sessions account to use this command.
- You can only leave a game if you are currently a member. If you are not a member, the command will notify you accordingly.

### Additional Information

- Game Masters do not need to approve this action; players can leave a game at their discretion.
- Removing yourself from a game means you will no longer have access to any game-specific features or commands until you rejoin.

## `/game add`

### Overview

The `/game add` subcommand allows a Game Master to add another user to an ongoing game. This is useful for bringing new players into the current game session. Only Game Masters are permitted to use this command to ensure that game participation is controlled.

### Command Options

- **`user` (User)**: The user to be added to the game. This option is required.

### Examples

- `/game add user:@PlayerName` - Adds the specified user to the current game session.

### Important Notes

- Only Game Masters can use this command to add players to the game.
- The selected user must have a linked RPG Sessions account. If not, the command will fail.
- Users who are already part of the game cannot be added again, and you will receive a notification if this is the case.

### Additional Information

- Adding players to a game ensures that they are registered in the system and have access to all game-specific commands and features.
- This command provides a controlled way to manage who participates in the game, ensuring that only authorized players are added.

## `/game remove`

### Overview

The `/game remove` subcommand allows a Game Master to remove a user from an ongoing game. This command is useful when a player needs to leave or is no longer part of the game. Only Game Masters are authorized to use this command to ensure that player management is controlled.

### Command Options

- **`user` (User)**: The user to be removed from the game. This option is required.

### Examples

- `/game remove user:@PlayerName` - Removes the specified user from the current game session.

### Important Notes

- Only Game Masters can use this command to remove players from the game.
- The selected user must have a linked RPG Sessions account to be removed.
- You cannot remove a user who is not currently part of the game. If the user is not in the game, you will be notified accordingly.

### Additional Information

- Removing a player from a game will revoke their access to game-specific features and commands.
- This command is intended for managing active game participants, ensuring that only authorized players remain part of the game.

## `/game pair`

### Overview

The `/game pair` subcommand allows a Game Master to link a game session to a Discord server or specific channels within a server. This functionality is designed to help manage game sessions across multiple channels or even multiple servers, ensuring that the game is properly integrated into the server where it is being played.

### Command Options

- **`table` (String)**: The name of the game table to pair with this Discord server. This is optional, and if not provided, a new game will be created.
- **`current-channel` (Boolean)**: If set to `true`, the current channel will be linked to the game. This is useful if you want to associate specific channels in a server with different game tables. Defaults to `false`.

### Examples

- `/game pair table:Adventure Campaign` - Pairs the specified game table named "Adventure Campaign" with the current Discord server.
- `/game pair current-channel:true` - Pairs the current channel only to the game.
- `/game pair` - Creates a new game and pairs it with the server.

### Important Notes

- Only users with the **Manage Server** permission are allowed to use this command.
- You need to be the Game Master of a specific game in order to pair it with a Discord server.

### Additional Information

- Pairing a game table with a server or channel ensures that all game-specific features are accessible to the players within those channels.
- This command is useful for managing multiple game sessions in a single Discord server, allowing Game Masters to keep track of where different games are hosted.

## `/game unpair`

### Overview

The `/game unpair` subcommand allows a Game Master or a server administrator to disconnect a game session from the current Discord server or channel. This command is useful for cases where the association between a game and a server or channel is no longer needed, providing flexibility in game management.

### Command Options

This subcommand does not have any additional options. It simply disconnects the game session from the server or channel in which the command is used.

### Examples

- `/game unpair` - Unpairs the game from the current channel or server.

### Important Notes

- Only users with the **Manage Server** permission can use this command to unpair a game.
- If the game is linked to multiple channels within the same server, this command will unpair only the specific channel where it is used. If used without any channels specified, it will unpair the entire server from the game.
- This command should be used cautiously, as unpairing will remove access to game-specific features for users in that server or channel.

## `/game view`

### Overview

The `/game view` subcommand provides details about the currently active game in the server or channel. It helps players and Game Masters keep track of game-specific settings, themes, and other vital information, allowing for better game management and awareness.

### Command Options

- **`all` (Boolean)**: If set to `true`, displays information for all games associated with the current server. Defaults to showing only the active game if not specified.
- **`private` (Boolean)**: If set to `true`, the response will only be visible to the user who invoked the command. Defaults to `true`.

### Examples

- `/game view` - Displays details about the current game linked to the channel or server.
- `/game view all:true` - Shows details about all games in the server.

### Important Notes

- This command can be used by both Game Masters and players to get an overview of the game's setup and current state.
- If multiple channels are paired to different games, you can use the `all` option to see every game associated with the server.

### Additional Information

- The `/game view` command displays details like the game theme, the number of players, and any story or destiny points available.
