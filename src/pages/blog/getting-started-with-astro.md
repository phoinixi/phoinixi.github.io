---
layout: ../../layouts/BlogPost.astro
title: Getting Started with Astro
description: Learn how to build your first Astro site from scratch and deploy it to the web.
pubDate: 2023-05-15
tags: ["astro", "webdev"]
---

# Getting Started with Astro

Astro is a modern static site generator that allows you to build fast websites with your favorite JavaScript frameworks.

## What makes Astro different?

Astro offers several unique advantages:

- **Component Islands**: Use your favorite UI components (React, Vue, Svelte, etc.) but only ship JavaScript where needed
- **Server-first**: Move expensive hydration off of your users' devices
- **Zero JS by default**: No JavaScript runtime overhead to slow you down
- **Edge-ready**: Deploy anywhere, even global edge runtimes like Deno or Cloudflare
- **Customizable**: Tailwind, MDX, and 100+ integrations to choose from

## Setting up your first Astro project

Getting started with Astro is simple:

```bash
# Create a new project with npm
npm create astro@latest

# Or with yarn
yarn create astro

# Or with pnpm
pnpm create astro
```

Follow the prompts to set up your project configuration. You can choose from several starter templates or start with a minimal setup.

## Building your site

Once your project is set up, you can run the development server:

```bash
npm run dev
```

This will start a local development server, usually at `http://localhost:3000`. As you edit your files, Astro will automatically refresh the browser.

## Deploying your site

When you're ready to deploy your site, build it for production:

```bash
npm run build
```

This will generate a static version of your site in the `dist/` directory, which you can then deploy to your favorite hosting platform.
