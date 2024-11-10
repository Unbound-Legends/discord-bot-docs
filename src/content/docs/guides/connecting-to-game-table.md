---
title: Connecting a Game Table to a Discord Server 
description: A guide on how to connect a game table to a Discord Server with the RPG Sessions Discord bot.
---

You can connect a game table to your Discord server using the RPG Sessions bot. This lets you manage your game right in your server's channels. Follow these simple steps to get everything set up.

## Steps to Connect a Game Table

### 1. **Pair the Game Table to the Server**
First, link your Discord server with a game table. Use the `/game pair` command to connect your server with either a new or an existing game table.

#### Command:
- [**`/game pair`**](/reference/game/#game-pair)

### Command Options
- **`table` (String)**: The name of the game table you want to connect to the server. If you leave this blank, a new game table will be created.
- **`current-channel` (Boolean)**: Use this option if you only want to link the current channel to the game. This is useful if you have multiple games in the same server.

#### Examples:
- `/game pair table:New Adventure current-channel:true` - Creates a new game called "New Adventure" and links it to the current channel.
- `/game pair table:My Game` - Links the existing game called "My Game" to the server.

### 2. **Set up data synchronization**
After linking the game, you can decide which channels will be used for synchronizing different game event types, like character messages or dice rolls. Use the `/options set:channel` command to do this.

#### Command:
- [**`/options set:channel`**](/reference/options/#options)

After running this command, buttons will appear that allow you to enable syncing dice rolls, initiative, and game messages between the game table and current channel. For them to be enabled, you need to press the buttons so they turn blue.

### 3. **Check the Pairing**
After connecting the game and setting up the channels, the bot will send a message confirming which channels are linked to which game tables. To see these settings anytime, use the `/game view` command to check the details of the current connections.

#### Command:
- [**`/game view`**](/reference/game/#game-view)

### Command Options
- **`all` (Boolean)**: Use this option to see all the games in the server.
- **`private` (Boolean)**: Set to `true` to make the response only visible to you.

#### Example:
- `/game view all:true` - Shows details of all games connected in the server.

### Summary
By following these steps, you can easily link your game table to your Discord server. Let us know if you have any questions in our [Discord server](https://discord.gg/DfEkRzUbjk)!

