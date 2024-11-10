---
title: /ic
description: The ic command group allows you to send in-character messages
---

## Subcommands

- [**/ic message**](#ic-message)

## `/ic message`

### Overview

The `/ic message` subcommand allows players to send a message as a character in the current game channel. This feature is useful for role-playing scenarios where players want to communicate in-character, adding a more immersive element to the gameplay. Players can either select an existing character or use the currently active character associated with their game account.

### Command Options

- **`text`** (optional): The message text to send in-character. If left blank, a modal will appear to allow you to input a multi-line message.
- **`character`** (optional): The character to send the message as. If not provided, the command will default to your active character.

### Examples

- `/ic message text:"Hello, adventurers!"` - Sends a message as your active character saying "Hello, adventurers!"
- `/ic message text:"Beware the dragon!" character:"Sir Valor"` - Sends the message from the character "Sir Valor."
- `/ic message` - Opens a modal to input a multi-line message to be sent in-character.

### Important Notes

- If you don't provide a character and you do not have an active character, the command will return an error.
- The command supports a modal prompt if the message text is not specified, allowing for multi-line messages.
- Adversary or NPC characters have visibility settings that determine if their name or image is visible when sending the message.

### Common Use Cases

- **Role-Playing Conversations**: Use this command to engage in in-character dialogue with other players directly in your game channel.
- **Narrative Events**: Useful for narrating events or sharing messages from NPCs and adversaries in the game.
- **Immersive Storytelling**: Players can use different characters to enhance the storytelling and role-playing experience by directly addressing others as their chosen persona.
