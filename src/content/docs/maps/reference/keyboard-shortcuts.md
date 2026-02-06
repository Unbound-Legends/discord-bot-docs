---
title: Keyboard Shortcuts
description: Quick reference for all Maps keyboard shortcuts and modifier keys
---

Maps supports keyboard shortcuts for switching tools, navigating the map, editing
assets, and more. This page covers every shortcut available, organized by what
you're doing.

All keyboard shortcuts are disabled when a text field or form is focused, so you
won't accidentally trigger a tool while typing.

## Tool Selection

Press a single key to switch between tools. These shortcuts only work when no
modifier keys (Ctrl, Shift, Alt) are held down.

| Key   | Tool          | What It Does                                            |
|-------|---------------|---------------------------------------------------------|
| **V** | Pointer       | Select and move assets on the map                       |
| **Z** | Resize        | Scale selected assets by dragging                       |
| **R** | Rotate        | Rotate selected assets by dragging                      |
| **B** | Brush         | Freehand drawing on the map                             |
| **E** | Eraser        | Erase drawn lines                                       |
| **H** | Hand          | Pan the map view without affecting assets               |
| **L** | Lasso         | Draw a selection area to select multiple assets at once  |
| **W** | Wall          | Draw shadow-casting walls (GM only, requires lighting)  |


## Camera & Navigation

These shortcuts control how you view the map: panning around and zooming in or
out.

| Shortcut                    | What It Does                           |
|-----------------------------|----------------------------------------|
| **Space** (hold)            | Pan the map by dragging                |
| **Middle Mouse** (hold)     | Pan the map by dragging (alternative)  |
| **Ctrl/Cmd + =**            | Zoom in                                |
| **Ctrl/Cmd + -**            | Zoom out                               |
| **Ctrl/Cmd + 0**            | Reset zoom to 100%                     |
| **Scroll Wheel**            | Zoom in and out                        |

## Copy, Paste, and Undo

Standard editing shortcuts work the way you'd expect. Select one or more assets
on the map, then use these shortcuts to manipulate them.

| Shortcut                        | What It Does                                  |
|---------------------------------|-----------------------------------------------|
| **Ctrl/Cmd + C**                | Copy selected assets                          |
| **Ctrl/Cmd + V**                | Paste copied assets                           |
| **Ctrl/Cmd + Z**                | Undo the last action                          |
| **Ctrl/Cmd + Shift + Z**       | Redo                                          |
| **Ctrl/Cmd + Y**                | Redo (alternative)                            |

Undo and redo work for most actions: moving assets, drawing, deleting, pasting,
and more.

## Asset Manipulation

These shortcuts change selected assets directly: flipping their orientation or
moving them on the grid.

### Flipping

| Shortcut      | What It Does                                          |
|---------------|-------------------------------------------------------|
| **Shift + F** | Flip selected assets horizontally (mirror left-right) |
| **Shift + V** | Flip selected assets vertically (mirror up-down)      |

When multiple assets are selected, they flip around the center of the entire
selection. This is useful for mirroring formations or
[building tiled maps](/docs/maps/features/grid-system#building-tiled-maps).

### Grid Movement

These only work when the [grid](/docs/maps/features/grid-system) is enabled and
at least one asset is selected.

| Shortcut               | What It Does                                  |
|------------------------|-----------------------------------------------|
| **Arrow Keys**         | Move one grid cell in that direction           |
| **Shift + Arrow Keys** | Move five grid cells in that direction         |

On hex grids, the arrow keys map to the nearest hex direction.

### Grid Snapping

Hold **Shift** while dragging an asset to snap it to the nearest grid cell. This
works with single assets and multi-selections alike. See
[Grid System](/docs/maps/features/grid-system#snapping-to-the-grid) for more
details on snapping behavior.

## Drawing Tool Modifiers

These shortcuts apply while the Brush tool is active and you're placing marker
stamps.

| Shortcut      | What It Does                                    |
|---------------|-------------------------------------------------|
| **R**         | Rotate the marker 45° clockwise                 |
| **Shift + R** | Rotate the marker 45° counter-clockwise         |
| **Shift** (hold while drawing) | Constrain lines to straight angles |

## General

| Shortcut   | What It Does                                              |
|------------|-----------------------------------------------------------|
| **Escape** | Deselect all assets, or cancel the current tool action    |

When the Rotate tool is active, pressing Escape switches back to the Pointer
tool instead of deselecting.

## Platform Differences

- On **macOS**, shortcuts use the **Cmd** key (⌘)
- On **Windows and Linux**, shortcuts use the **Ctrl** key

This applies to all shortcuts listed as "Ctrl/Cmd" above.
