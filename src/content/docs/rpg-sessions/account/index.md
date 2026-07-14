---
title: Profile and Connections
description: Manage your RPG Sessions profile, preferences, Discord and Patreon connections, achievements, images, tokens, and API access.
pageType: guide
audience: [player, gm, sheet-builder, developer]
surface: account
systems: [all]
appRoutes: ["/user/profile", "/user/images", "/user/tags", "/user/achievements", "/user/api-docs"]
requirements:
  signedIn: true
verifiedAt: "2026-07-13"
verifiedContexts: [source-reviewed, signed-in, gm, admin, desktop]
---

Use **Profile** to manage the account and connections behind your sheets and games. Some settings live on the main profile page, while others have their own account view.

## Profile information

Pick an account name the people in your games will recognize. Use the security controls when you need to update your password or sign-in information.

Don't put private contact information in a display field that other users can see.

## Preferences and tags

Preferences change supported site behavior and presentation. Tags help you organize or identify content where the site uses them. After changing a preference, check the part of the site it affects instead of assuming it's global.

## Discord connection

Link Discord when you want the [RPG Sessions Discord Bot](/docs/discord-bot) to use your account's supported characters, games, and dice workflows.

1. Find the Discord section in Profile.
2. Start the link flow.
3. Authorize the intended Discord account.
4. Return to Profile and confirm the connection is shown.

Linking Discord is optional for the website itself.

## Patreon and table tokens

The Patreon section shows the connection and access tied to your account. Use the table-token controls to assign an available token to an eligible game.

Access can change without this workflow changing. Check **Profile** and the game settings for the tokens and features your account has right now.

## Images and storage

Use the images view to manage your uploads. Reuse an existing image when it fits, and check every character, vehicle, game, data entry, or Map that uses an image before you remove it.

Storage limits and controls follow the account's current access. The site UI is the source of truth for the current usage and available actions.

## Achievements

Achievements appear in Profile and record supported account milestones. They don't grant game ownership or GM permissions unless the current site explicitly says otherwise.

## API access tokens

Access tokens let external tools use the supported RPG Sessions API as your account. Treat them like passwords.

- Give each integration its own token.
- Copy the token only into the intended application.
- Never paste a token into chat, documentation, screenshots, or a support message.
- Revoke a token you no longer use or may have exposed.

Developer-facing API documentation is available from the account area when that surface is available to you.
