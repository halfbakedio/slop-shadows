# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite application using shadcn/ui components with Tailwind CSS v4. The project is configured with the "base-mira" style from shadcn/ui.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production (runs TypeScript compiler first, then Vite build)
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Tech Stack

- **Build Tool**: Vite 7.x
- **Framework**: React 19.x with TypeScript 5.9.x
- **Styling**: Tailwind CSS v4 (via @tailwindcss/vite plugin)
- **UI Components**: shadcn/ui with @base-ui/react foundation
- **Fonts**: Outfit (variable font via @fontsource-variable)
- **Icons**: lucide-react
- **Animation**: tw-animate-css

## Architecture

### Path Aliases

The project uses TypeScript path aliases configured in `tsconfig.json` and `vite.config.ts`:

- `@/*` → `./src/*`
- `@/components` → `./src/components`
- `@/lib` → `./src/lib`
- `@/ui` → `./src/components/ui`
- `@/hooks` → `./src/hooks`

### Component Structure

- **Entry Point**: `src/main.tsx` renders the App component into `#root`
- **Root Component**: `src/App.tsx` wraps the application with `ThemeProvider` and displays a header with theme toggle
- **UI Components**: Located in `src/components/ui/` (shadcn/ui components)
- **Feature Components**: Located in `src/components/` (custom components)

### Theme System

The application uses a custom theme system (not the default shadcn/ui theme):

- **Provider**: `src/components/theme-provider.tsx` manages theme state ("light" or "dark")
- **Storage Key**: `slop-ui-theme` in localStorage
- **Theme Toggle**: `src/components/theme-toggle.tsx` provides UI for switching themes
- **CSS Variables**: Defined in `src/index.css` using OKLCH color space
- **Dark Mode**: Uses Tailwind's `.dark` class with `@custom-variant dark (&:is(.dark *))`

### Styling

- **Global Styles**: `src/index.css` imports Tailwind, tw-animate-css, shadcn styles, and Outfit font
- **Color System**: Custom OKLCH-based color palette for both light and dark modes
- **Utility Function**: `src/lib/utils.ts` exports `cn()` for merging Tailwind classes (clsx + tailwind-merge)
- **Font**: Outfit variable font as `--font-sans`

### shadcn/ui Configuration

The `components.json` file configures shadcn/ui:

- **Style**: base-mira
- **Components Directory**: `@/components` and `@/components/ui`
- **Icon Library**: lucide
- **CSS Variables**: Enabled
- **Tailwind Config**: Empty (using Vite plugin instead)

## ESLint Configuration

Uses flat config format (`eslint.config.js`) with:
- TypeScript ESLint recommended rules
- React Hooks plugin (flat config)
- React Refresh plugin for Vite
- Ignores `dist` directory

## Adding shadcn/ui Components

Use the shadcn CLI to add new components:

```bash
npx shadcn add [component-name]
```

Components will be added to `src/components/ui/` with the configured aliases and styling.

## TypeScript Configuration

The project uses a composite TypeScript setup:
- `tsconfig.json`: Root config with path aliases
- `tsconfig.app.json`: Application-specific settings
- `tsconfig.node.json`: Node/Vite-specific settings
