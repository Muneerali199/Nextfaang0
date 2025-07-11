# Copilot Instructions for cp-legend-nexus-main

## Project Overview
- This is a Vite + React + TypeScript project using Tailwind CSS and shadcn-ui for UI components.
- The project structure follows a modular approach: UI components are in `src/components/` and `src/components/ui/`, pages in `src/pages/`, hooks in `src/hooks/`, and utility logic in `src/lib/`.
- The design system is heavily customized via Tailwind and custom CSS utilities in `src/index.css`.

## Key Workflows
- **Development:**
  - Start locally with `npm run dev` (auto-reloads on changes).
  - Install dependencies with `npm i`.
- **Build:**
  - Run `npm run build` to generate a production build (output in `dist/`).
  - Common build issues are often due to Tailwind or PostCSS syntax errors (e.g., invalid `@apply` usage).
- **Deployment:**
  - Deploy via [Lovable](https://lovable.dev/projects/26f4642d-cdd2-45fc-a3a5-61e647d1a4da) or Vercel.

## Project-Specific Conventions
- **Tailwind Usage:**
  - Use `@apply` only with valid Tailwind classes (e.g., `sm:px-6`, not `sm: px-6`).
  - Custom utilities and responsive helpers are defined in `src/index.css` under `@layer utilities`.
- **Component Patterns:**
  - UI primitives are in `src/components/ui/` and are reused across feature components in `src/components/`.
  - Pages in `src/pages/` are entry points for routing (if using React Router or similar).
- **Fonts:**
  - Google Fonts are imported at the top of `src/index.css`.
- **Theming:**
  - CSS variables for colors and radii are set in `:root` within `@layer base` in `src/index.css`.

## Integration Points
- **shadcn-ui:**
  - All shadcn-ui components are in `src/components/ui/` and can be customized as needed.
- **External Services:**
  - Supabase integration is handled in `src/lib/supabase.ts`.

## Troubleshooting
- If you see build errors related to Tailwind, check for invalid `@apply` usage or typos in class names.
- For CSS/JS/TS errors, check the relevant file in `src/` and ensure imports/exports are correct.

## Example: Adding a Responsive Utility
To add a new responsive utility, edit `src/index.css` under `@layer utilities`:
```css
@layer utilities {
  .custom-responsive-class {
    @apply px-2 sm:px-4 lg:px-8;
  }
}
```

---

For more details, see `README.md` or the Lovable project dashboard.
