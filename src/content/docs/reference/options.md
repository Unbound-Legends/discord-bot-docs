---
title: /options
description: The options command group allows you to manage options for the bot in your server
---

The `/options` command allows Game Masters (GMs) to configure various settings for how the game and bot interact within Discord. This command is useful for managing the synchronization of in-character actions, dice rolls, initiative tracking, and controlling the channel where certain actions are allowed. Only GMs have permission to modify these options.

### Command Usage

- **Command**: `/options [set]`
  - **`set`** (optional): Specifies the option to configure. Currently, the available value is:
    - **`channel`**: Allows toggling settings for the current channel, including in-character messages, dice rolls, and initiative updates.

### Subcommands

- **Channel Configuration**: The channel configuration subcommand allows you to toggle settings for the current channel to control which activities are supported. You can manage the webhook settings for different types of messages like in-character messages, dice rolls, and initiative updates.

### Options

When executing the `/options` command, a set of buttons may be provided to allow for easier toggling of specific options. The following buttons may appear:

- **Sync In Character**: Toggle synchronization for in-character messages within the current channel.

With `set:channel`, the following options will apear:
- **In Character Messages**: Toggle if in-character messages should be sent to the current channel.
- **Dice Messages**: Toggle if dice roll messages should be sent to the current channel.
- **Initiative Messages**: Toggle if initiative updates should be sent to the current channel.

### Examples

- `/options` - Displays the current options available for the game and allows toggling in-character sync.
- `/options set:channel` - Configure webhook settings for the current channel, such as enabling or disabling character messages, dice rolls, or initiative updates.

### Important Notes

- **Permissions**: Only users who are GMs in the current game or have Administrator privileges in Discord can use the `/options` command to make changes.
- **Default Behavior**: If no specific settings are provided, the command defaults to displaying the current configuration and allows toggling the in-character synchronization setting.

### Common Use Cases

- **Control Messaging Channels**: GMs can use this command to specify which Discord channels will receive in-character messages, dice rolls, or initiative updates, allowing for organized and thematic gameplay.
- **Enable/Disable Game Features Per Channel**: Adjust the settings per channel, ensuring that certain game features are only used in designated channels to reduce clutter or ensure thematic separation.

