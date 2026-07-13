---
title: Introduction
description: An introduction to the RPG Sessions Discord Bot and general concepts for Discord Bots
slug: guides/how-to
---

The RPG Sessions bot puts dice rolls, character details, initiative, and game table events in your Discord server. You use slash commands in a channel, and the bot posts the result where the rest of the group can see it.

### What Is a Discord Bot?

A Discord bot is an account operated by software. It responds to slash commands and can post information or update shared state for the server.

The RPG Sessions bot connects those commands to your RPG Sessions account and game table. Players can roll dice or view character details, while the group can use the same Discord channel for initiative and supported game events.

### Why Use the RPG Sessions Bot?

Use the bot when your group wants to handle these actions from Discord:

- **Roll dice**: Build a narrative dice pool and post the calculated result in the channel.
- **Track initiative**: Start an initiative order, add rolls, and move through the available slots.
- **View characters**: Share a character sheet or selected details without opening the web app.
- **Sync the game table**: Send supported rolls, initiative updates, and in-character messages between Discord and a paired game table.

### How to Use the RPG Sessions Bot

Discord slash commands start with `/`. Enter one in a channel where the bot is available, choose its options, and submit it.

- Use [`/character view`](/docs/reference/character#character-view) to post your active character.
- Use [`/dice roll`](/docs/reference/dice#dice-roll) to build and roll a dice pool. For example, `/dice roll yyrp` rolls two yellow dice, one red die, and one purple die. If you have an active character, `/dice roll (brawl)pp` starts with its Brawl pool and adds two purple dice.
- Use [`/initiative start`](/docs/reference/initiative#initiative-start) when the group needs a shared turn order.

The bot posts each result in the channel where you ran the command.

### Adding the RPG Sessions Bot to Your Server

You need permission to manage the Discord server before you can add the bot.

1. [Invite the RPG Sessions bot](https://discord.com/api/oauth2/authorize?client_id=534606682928578572&permissions=309774806080&scope=bot).
2. Select the server and approve the requested permissions.
3. Run [`/debug info`](/docs/misc/debug#debug-info) to confirm the bot can use the channel and required Discord features.
4. Run a command such as `/dice roll yrpg` to test the installation.
5. Follow [Connect the Bot to a Game Table](/docs/guides/connecting-to-game-table) if you want Discord and RPG Sessions to share game events.

### Tips for Using the RPG Sessions Bot

- **Test commands before the session**: Use a private channel or test server to check permissions and command options.
- **Separate game traffic when needed**: Your group can keep in-character messages, dice rolls, and general discussion in different channels.
- **Check the bot's access**: Run [`/debug info`](/docs/misc/debug#debug-info) if a command doesn't appear or the bot can't post a result.
- **Ask the community**: Join the [RPG Sessions community Discord](https://discord.com/invite/DfEkRzUbjk) for support.

### Next Steps

Start by [adding the bot](https://discord.com/api/oauth2/authorize?client_id=534606682928578572&permissions=309774806080&scope=bot) and running `/dice roll yrpg`. When you're ready to use characters or synchronize a game, [connect your RPG Sessions account](/docs/guides/connect-sessions-account).
