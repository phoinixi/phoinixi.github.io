---
title: "Frontend Developer Dotfiles"
description: "Dotfiles for frontend development in macOS. Includes oh-my-zsh configuration, VS Code settings, git aliases, and various productivity utilities."
link: "https://github.com/phoinixi/dotfiles"
year: "2023"
tags: ["shell", "zsh", "macos", "git"]
featured: false
---

# Frontend Developer Dotfiles

A comprehensive collection of dotfiles and configuration scripts for setting up a complete frontend development environment on macOS. This repository makes it quick and easy to configure a new machine with a consistent development setup.

## Features

- Oh-My-Zsh setup with custom theme and plugins
- Git configuration with useful aliases and shortcuts
- VS Code settings optimized for frontend development
- Homebrew setup with essential development tools
- macOS system preferences tuned for developers

## Key Components

### Terminal Enhancements

The configuration includes a customized Zsh setup with the Solarized Dark theme, which provides a visually pleasing environment that's easy on the eyes during long coding sessions.

### Git Workflow

The repository includes numerous git aliases that streamline common development tasks:

```bash
git c "commit message"  # Quick commit
git snapshot            # Stash with timestamp
git changes             # View recent changes
```

### Easy Installation

With a single command, you can set up your entire development environment:

```bash
git clone https://github.com/phoinixi/dotfiles.git ~/dotfiles && (cd ~/dotfiles && ./install.sh)
```

The installation script is idempotent, so it can be run multiple times without causing issues.
