---
title: Introduction
description: An introduction to the RPG Sessions Discord Bot and general concepts for Discord Bots
slug: guides/how-to
---

If you're here, it's probably because you joined Discord to play a game with friends using the RPG Sessions bot. But maybe you're not quite sure what a bot is or how it helps. Don’t worry, this guide will help you get comfortable with the RPG Sessions bot and show you how it makes your games easier and more fun.

### What Is a Discord Bot?

A Discord bot is like a friendly assistant that lives in your server. It can do things automatically, like keeping track of game rules, organizing your character information, and rolling dice for you. Bots in Discord work by responding to commands that you type in, making them really useful for running games without needing to keep track of everything manually.

The RPG Sessions bot is designed to make your tabletop RPG experience more seamless. Whether you're a player or a game master (GM), the bot takes care of the little things, like managing initiative, handling dice rolls, and tracking character stats, so you can focus on the story and the action.

### Why Use the RPG Sessions Bot?

Here are some of the reasons why the RPG Sessions bot is useful:

- **Rolling Dice**: Forget about physical dice! You can roll any dice you need directly in the chat. Just type a command, and the bot will do the rolling for you, complete with results and modifiers.
- **Tracking Initiative**: During combat, the bot can manage turn orders so everyone knows when it's their time to act.
- **Character Management**: Players can easily check and share their character stats and information without needing to open multiple apps or windows.
- **GM Tools**: The bot helps the GM by managing enemies, setting up 
  challenges, and keeping track of important game stats, so they can focus 
  on running the adventure.

### How to Use the RPG Sessions Bot

The RPG Sessions bot uses **commands** to do things. Commands are typed into the chat, and they usually start with a slash (`/`). Here are some common ways you might interact with the bot:

- **Checking Character Info**: If you want to share your character sheet or a specific stat, there are commands like [`/character view`](/docs/reference/character#character-view) to display information to the rest of the group.
- **Rolling Dice**: To roll dice, you use a command like [`/dice roll`](/docs/reference/dice#dice-roll). For example, typing `/dice roll yyrp` will roll two yellow dice, one red die, and one purple die. If you have a character connected, you can use skill shortcuts like `/dice roll (brawl)pp` to roll your brawl check against 2 purple dice. You can also add modifiers or use different types of dice.
- **Managing Initiative**: During combat, you can use commands like [`/initiative start`](/docs/reference/initiative#initiative-start) to let the bot manage the turn order, making sure everyone knows when it's their time to act.

The bot will respond right in the chat, so everyone knows what's happening. No more confusion about whose turn it is or who rolled what number!

### Adding the RPG Sessions Bot to Your Server

If you want to add the RPG Sessions bot to your server, you'll need to follow these steps:

1. **Invite the Bot**: Are you a server manager and want to add the bot to your server? [Invite the bot here!](https://discord.com/api/oauth2/authorize?client_id=534606682928578572&permissions=309774806080&scope=bot)
2. **Set Permissions**: The bot will request the permissions it requires, but you can run [`/debug info`](/docs/misc/debug#debug-info) to make sure it has what it needs. The output of the command explains each permission it needs and why it needs it.
3. **Use Commands**: Once the bot is added, everyone can start using commands to roll dice, check stats, and more.
4. **Synchronize with the Game Table**: [Check out our guide](/docs/guides/connecting-to-game-table) on setting up the Discord Bot so it synchronizes events between the Discord server and associated RPG Sessions Game Table


### Tips for Using the RPG Sessions Bot

- **Practice with Commands**: Don’t be afraid to practice commands before your game session. You can create a private server or use a test channel to try them out.
- **Stay Organized**: Use different channels for different parts of the game. For example, you can have a channel for in-character chat, another for dice rolls and initiative, and one more for general discussion.
- **Ask for Help**: If you need help, we have a large community available to help out! [Join our Discord here!](https://discord.com/invite/DfEkRzUbjk)

### Get Started Today

The RPG Sessions bot is here to make your gameplay experience smoother and 
more immersive. You don’t need to be a Discord expert to use it. Just try 
out some of the basic commands, and soon you’ll see how much easier it makes everything. Whether you’re rolling dice, tracking initiative, or just sharing your character’s latest achievements, the RPG Sessions bot is ready to help.

Ready to jump in? Start by [adding the bot](https://discord.com/api/oauth2/authorize?client_id=534606682928578572&permissions=309774806080&scope=bot) and typing `/dice roll yrpg` in your server, and let the adventure begin!


