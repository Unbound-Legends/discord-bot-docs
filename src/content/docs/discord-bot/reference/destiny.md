---
title: /destiny
description: The destiny command group allows you to view and manage destiny points for your current game
slug: reference/destiny
---

The `/destiny` command provides a collection of subcommands that handle everything related to destiny points in your game. Destiny points are a core mechanic, often used to influence gameplay, either by players or the Game Master (GM). With the `/destiny` commands, you can view, add, remove, roll, use, and clear destiny points as needed.

## Subcommands

- [**`/destiny view`**](#destiny-view)
- [**`/destiny roll`**](#destiny-roll)
- [**`/destiny use`**](#destiny-use)
- [**`/destiny add`**](#destiny-add)
- [**`/destiny remove`**](#destiny-remove)
- [**`/destiny clear`**](#destiny-clear)

## `/destiny view`

### Overview

The `/destiny view` subcommand displays the current status of all destiny points available in the game. This is essential for players and Game Masters to understand the current balance between Light and Dark side destiny points. Depending on your game setting, the command may also show story points, used similarly to influence the narrative.

### Command Options

This subcommand does not have any additional options. It provides an immediate overview of the destiny or story points currently in play.

### Examples

- `/destiny view` - Displays the current number of Light and Dark side destiny points.

### Important Notes

- Knowing the current number of destiny points helps players decide when to use them for important actions or influence.
- Destiny points are a shared resource, and their status impacts both player decisions and the GM's ability to challenge the players.

### Additional Information

- The destiny system is designed to add dynamic shifts to gameplay, where points can be used to improve actions or influence the storyline.
- The `/destiny view` subcommand is a simple way to keep all players informed about the current destiny point balance.

## `/destiny roll`

### Overview

The `/destiny roll` subcommand is used to roll dice to add new destiny points to the game. Destiny points are added based on the result of the dice roll, which can either increase the Light side (Player points) or Dark side (GM points). This command helps dynamically adjust the balance of power in the game, keeping it engaging and unpredictable.

### Command Options

- **`roll` (String)**: The dice to roll for determining destiny points. For example, `w`, `ww`, or `2w` represent different types and numbers of dice. This option is required.

### Examples

- `/destiny roll roll:2w` - Rolls two white dice to determine new destiny points.
- `/destiny roll roll:ww` - Rolls two white dice to determine the balance of Light and Dark side destiny points.

## Important Notes

- The outcome of the roll will determine how many Light or Dark side points are added to the pool.
- The command will show the results of the roll and update the pool accordingly.
- This command can be used by both players and Game Masters to influence the current destiny point pool.

### Additional Information

- The dice result will be displayed along with the number of destiny points added to either the Light or Dark side.
- Destiny points help make gameplay more interactive by allowing both players and GMs to influence actions and outcomes.

## `/destiny use`

### Overview

The `/destiny use` subcommand allows players to use a specified number of destiny points to influence the story. Players can choose whether to use Light side (Player points) or Dark side (GM points), and the specified amount is then converted to the opposite type, representing a balance shift in the game. This command is helpful for dynamically managing the game’s destiny pool during key moments.

### Command Options

- **`type` (String)**: The type of point to use. Choices are:
  - `Light Side` or `Player` (to use a point that benefits players)
  - `Dark Side` or `GM` (to use a point that benefits the GM)
    This option is required.
- **`amount` (Integer)**: The number of points to use. Defaults to `1` if not specified. The value must be between `1` and `10`.

### Examples

- `/destiny use type:light-side` - Uses one Light side point and converts it to the Dark side pool.
- `/destiny use type:player amount:3` - Uses three Player points, converting them to GM points.
- `/destiny use type:dark-side amount:5` - Uses five Dark side points, converting them to Light side.

### Important Notes

- You can only use between 1 and 10 points at a time.
- The command will only proceed if there are enough points available to use.
- Using points shifts the balance between players and the GM, adding strategic elements to game decisions.

### Additional Information

- Destiny points are a shared resource in the game, and using them effectively can change the course of events, providing either the players or the GM with an advantage.
- The current status of destiny points is updated after each use, keeping everyone aware of the available balance.

## `/destiny add`

### Overview

The `/destiny add` subcommand allows you to add a specified number of destiny points to the game. These points can be either Light side (Player points) or Dark side (GM points), depending on your needs. This command helps keep the destiny pool balanced by adding more points as required during gameplay.

### Command Options

- **`type` (String)**: The type of point to add. Choices are:
  - `Light Side` or `Player` (to add a point benefiting players)
  - `Dark Side` or `GM` (to add a point benefiting the GM)
    This option is required.
- **`amount` (Integer)**: The number of points to add. Defaults to `1` if not specified. The value must be between `1` and `10`.

### Examples

- `/destiny add type:light-side` - Adds one Light side point to the pool.
- `/destiny add type:player amount:3` - Adds three Player points to the pool.
- `/destiny add type:dark-side amount:5` - Adds five Dark side points to the pool.

### Important Notes

- You can only add between 1 and 10 points at a time.
- Adding points helps maintain the flow of the game, giving either players or the GM additional resources to influence the story.

### Additional Information

- Destiny points are a shared game resource that allows players and GMs to affect gameplay. Adding points keeps the game dynamic and balanced.
- After adding points, the current status of destiny points will be updated, ensuring that everyone is aware of the available resources.

## `/destiny remove`

### Overview

The `/destiny remove` subcommand allows you to remove a specified number of destiny points from the game. These points can either be Light side (Player points) or Dark side (GM points). This command helps maintain balance by removing points from the pool as needed during gameplay.

### Command Options

- **`type` (String)**: The type of point to remove. Choices are:
  - `Light Side` or `Player` (to remove a point benefiting players)
  - `Dark Side` or `GM` (to remove a point benefiting the GM)
    This option is required.
- **`amount` (Integer)**: The number of points to remove. Defaults to `1` if not specified. The value must be between `1` and `10`.

### Examples

- `/destiny remove type:light-side` - Removes one Light side point from the pool.
- `/destiny remove type:player amount:3` - Removes three Player points from the pool.
- `/destiny remove type:dark-side amount:5` - Removes five Dark side points from the pool.

### Important Notes

- You can only remove between 1 and 10 points at a time.
- The command will only proceed if there are enough points available to remove.
- Removing points helps balance the destiny pool and can alter the dynamics between players and the GM.

### Additional Information

- Destiny points are a critical part of game balance, allowing both players and GMs to affect the storyline. Removing points keeps the gameplay dynamic and ensures that neither side has an overwhelming advantage.
- The status of the destiny points is updated after each removal, providing everyone with an updated view of the available points.

## `/destiny clear`

### Overview

The `/destiny clear` subcommand is used to clear all current destiny points from the game. This command effectively resets the destiny pool, removing all Light side (Player points) and Dark side (GM points). This is useful for starting a new session or resetting the game dynamics as needed.

### Command Options

This subcommand does not have any additional options. It clears all destiny or story points currently in play.

### Examples

- `/destiny clear` - Clears all Light side and Dark side destiny points from the game.

### Important Notes

- Clearing all destiny points resets the balance of power between the players and the GM.
- This command should be used carefully, as it cannot be undone.

### Additional Information

- After using this command, the destiny point pool will be empty, requiring new points to be added or rolled to rebuild the pool.
