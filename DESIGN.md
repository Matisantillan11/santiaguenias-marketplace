# Santiaguenias Marketplace -- Design System

> Single source of truth for all visual and interaction decisions.
> Every component, page, and layout in this project must conform to this document.

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Spacing System](#4-spacing-system)
5. [Component Styles](#5-component-styles)
6. [Layout Patterns](#6-layout-patterns)
7. [Imagery & Icon Guidelines](#7-imagery--icon-guidelines)
8. [Dark Mode](#8-dark-mode)
9. [Animation & Transitions](#9-animation--transitions)
10. [Shadcn Component Customization](#10-shadcn-component-customization)
11. [Tailwind CSS v4 Token Map](#11-tailwind-css-v4-token-map)

---

## 1. Brand Identity

### About

**Santiaguenias** is an Austrian commerce rooted in Latin American warmth and culture.
The brand sells curated products online, bridging the authenticity of Santiago del Estero traditions with the quality expectations of the European market.

- **Instagram:** [https://www.instagram.com/lassantiaguenias/](https://www.instagram.com/lassantiaguenias/)
- **Location:** Austria
- **Language:** Spanish (primary), German (secondary consideration)
- **Tone:** Warm, approachable, trustworthy, community-driven

### Design Philosophy

| Principle | Description |
|---|---|
| **Clean & Minimal** | White-dominant backgrounds, generous whitespace, no visual clutter. Inspired by Nextdoor.com's clean community aesthetic. |
| **Warm & Inviting** | The amber primary color (#f8b34e) evokes warmth, craftsmanship, and approachability -- never cold or corporate. |
| **Trust-Forward** | Clear hierarchy, readable typography, and consistent patterns build buyer confidence. Mercado Libre's marketplace UX patterns serve as functional reference. |
| **Community-Focused** | The design should feel like a local market -- personal, curated, and human. |

### Design References

- **Structural/Functional Guide:** [Mercado Libre](https://www.mercadolibre.com) -- product listing grids, search patterns, product detail layout, cart/checkout flows, category navigation.
- **Style/Aesthetic Guide:** [Nextdoor.com](https://nextdoor.com) -- clean card-based layouts, warm neutrals, friendly typography, community feel, minimal decoration.

---

## 2. Color Palette

### Primary

| Token | Hex | Usage |
|---|---|---|
| `--color-primary-50` | `#fef9f0` | Primary tinted backgrounds, hover states on light surfaces |
| `--color-primary-100` | `#fdefd4` | Selected/active backgrounds, badges background |
| `--color-primary-200` | `#fcdfa8` | Light accent borders |
| `--color-primary-300` | `#fac96e` | Secondary hover states |
| `--color-primary-400` | `#f8b34e` | **Primary brand color.** Buttons, links, CTAs, active indicators |
| `--color-primary-500` | `#f09e1e` | Hover state for primary buttons |
| `--color-primary-600` | `#d4820f` | Pressed/active state for primary buttons |
| `--color-primary-700` | `#b06810` | Dark accent for contrast contexts |
| `--color-primary-800` | `#8f5314` | Text on light primary backgrounds |
| `--color-primary-900` | `#764413` | Darkest primary -- used sparingly |

### Neutrals

| Token | Hex | Usage |
|---|---|---|
| `--color-neutral-0` | `#ffffff` | Page background, card backgrounds |
| `--color-neutral-50` | `#fafafa` | Subtle background differentiation (e.g., page sections, sidebar) |
| `--color-neutral-100` | `#f5f5f5` | Input backgrounds, table row stripes |
| `--color-neutral-200` | `#e5e5e5` | Borders, dividers |
| `--color-neutral-300` | `#d4d4d4` | Disabled border states |
| `--color-neutral-400` | `#a3a3a3` | Placeholder text, disabled text |
| `--color-neutral-500` | `#737373` | Secondary/muted text |
| `--color-neutral-600` | `#525252` | Body text (secondary) |
| `--color-neutral-700` | `#404040` | Body text (primary) |
| `--color-neutral-800` | `#262626` | Headings, high-emphasis text |
| `--color-neutral-900` | `#171717` | Maximum contrast text |

### Semantic Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-success-500` | `#22c55e` | Success states, in-stock badges, confirmations |
| `--color-success-50` | `#f0fdf4` | Success background |
| `--color-warning-500` | `#eab308` | Warnings, low-stock indicators |
| `--color-warning-50` | `#fefce8` | Warning background |
| `--color-error-500` | `#ef4444` | Errors, validation failures, out-of-stock |
| `--color-error-50` | `#fef2f2` | Error background |
| `--color-info-500` | `#3b82f6` | Informational callouts, links in body text |
| `--color-info-50` | `#eff6ff` | Info background |

### Background & Surface

| Token | Hex | Usage |
|---|---|---|
| `--color-background` | `#ffffff` | Root page background |
| `--color-surface` | `#ffffff` | Card and modal surfaces |
| `--color-surface-raised` | `#fafafa` | Slightly elevated surfaces (sidebar, dropdown) |
| `--color-surface-sunken` | `#f5f5f5` | Recessed areas (input fields, code blocks) |
| `--color-overlay` | `rgba(0, 0, 0, 0.5)` | Modal/dialog overlays |

### Text

| Token | Hex | Usage |
|---|---|---|
| `--color-text-primary` | `#171717` | Headings, primary content |
| `--color-text-secondary` | `#525252` | Supporting text, descriptions |
| `--color-text-muted` | `#737373` | Captions, timestamps, helper text |
| `--color-text-disabled` | `#a3a3a3` | Disabled controls |
| `--color-text-inverse` | `#ffffff` | Text on dark/primary backgrounds |
| `--color-text-link` | `#f8b34e` | Inline links (primary brand) |
| `--color-text-link-hover` | `#d4820f` | Link hover state |

---

## 3. Typography

### Font Families

| Token | Font | Fallbacks | Usage |
|---|---|---|---|
| `--font-sans` | **Geist Sans** | `system-ui, -apple-system, sans-serif` | All UI text: headings, body, labels, buttons |
| `--font-mono` | **Geist Mono** | `ui-monospace, monospace` | Code snippets, order IDs, SKUs, prices |

> Geist Sans is already configured in the project via `next/font/google`. It provides excellent readability at small sizes and a modern, clean aesthetic that aligns with the Nextdoor-inspired warmth.

### Type Scale

Uses a modular scale based on `1rem = 16px` with a ratio of approximately 1.25 (Major Third).

| Name | Size (rem) | Size (px) | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|---|
| `display-lg` | 2.25 | 36 | 700 | 1.2 | -0.025em | Hero headlines, landing page |
| `display-sm` | 1.875 | 30 | 700 | 1.2 | -0.02em | Section heroes |
| `heading-1` | 1.5 | 24 | 600 | 1.3 | -0.015em | Page titles |
| `heading-2` | 1.25 | 20 | 600 | 1.3 | -0.01em | Section titles |
| `heading-3` | 1.125 | 18 | 600 | 1.4 | -0.005em | Card titles, subsections |
| `body-lg` | 1.0 | 16 | 400 | 1.6 | 0 | Primary body text |
| `body-md` | 0.875 | 14 | 400 | 1.5 | 0 | Secondary body text, descriptions |
| `body-sm` | 0.75 | 12 | 400 | 1.5 | 0.005em | Captions, timestamps, fine print |
| `label` | 0.875 | 14 | 500 | 1.4 | 0.01em | Form labels, navigation items |
| `button` | 0.875 | 14 | 500 | 1.0 | 0.01em | Button text |
| `price` | 1.25 | 20 | 700 | 1.2 | -0.01em | Product prices (use `--font-mono`) |
| `price-sm` | 1.0 | 16 | 600 | 1.2 | 0 | Card-level prices (use `--font-mono`) |

### Font Weight Tokens

| Token | Weight | Usage |
|---|---|---|
| `--font-weight-regular` | 400 | Body text |
| `--font-weight-medium` | 500 | Labels, buttons, navigation |
| `--font-weight-semibold` | 600 | Headings |
| `--font-weight-bold` | 700 | Display text, prices, emphasis |

---

## 4. Spacing System

Based on a 4px grid. All spacing values are multiples of `0.25rem`.

| Token | Value (rem) | Value (px) | Common Usage |
|---|---|---|---|
| `--space-0` | 0 | 0 | Reset |
| `--space-0.5` | 0.125 | 2 | Tight icon-label gaps |
| `--space-1` | 0.25 | 4 | Inline element gaps |
| `--space-1.5` | 0.375 | 6 | Compact padding |
| `--space-2` | 0.5 | 8 | Small component padding, icon margins |
| `--space-3` | 0.75 | 12 | Input padding (vertical), badge padding |
| `--space-4` | 1.0 | 16 | Standard component padding, card padding |
| `--space-5` | 1.25 | 20 | Form group spacing |
| `--space-6` | 1.5 | 24 | Card internal spacing, section gap |
| `--space-8` | 2.0 | 32 | Section margins |
| `--space-10` | 2.5 | 40 | Large component separation |
| `--space-12` | 3.0 | 48 | Page section spacing |
| `--space-16` | 4.0 | 64 | Major section breaks |
| `--space-20` | 5.0 | 80 | Hero section padding |
| `--space-24` | 6.0 | 96 | Page-level vertical rhythm |

### Component Spacing Conventions

| Context | Padding | Gap |
|---|---|---|
| Card | `--space-4` to `--space-6` | `--space-3` between elements |
| Button (default) | `--space-3` vertical, `--space-4` horizontal | -- |
| Button (small) | `--space-2` vertical, `--space-3` horizontal | -- |
| Input | `--space-3` vertical, `--space-4` horizontal | -- |
| Navigation bar | `--space-4` vertical | `--space-6` between items |
| Product grid | -- | `--space-4` to `--space-6` |
| Page container | `--space-4` horizontal (mobile), `--space-8` (desktop) | -- |

---

## 5. Component Styles

### 5.1 Buttons

#### Variants

| Variant | Background | Text | Border | Hover | Active |
|---|---|---|---|---|---|
| **Primary** | `--color-primary-400` | `#ffffff` | none | `--color-primary-500` | `--color-primary-600` |
| **Secondary** | `transparent` | `--color-neutral-700` | `1px solid --color-neutral-200` | `--color-neutral-50` bg | `--color-neutral-100` bg |
| **Ghost** | `transparent` | `--color-neutral-700` | none | `--color-neutral-50` bg | `--color-neutral-100` bg |
| **Destructive** | `--color-error-500` | `#ffffff` | none | `--color-error-600` | `--color-error-700` |
| **Link** | `transparent` | `--color-primary-400` | none | underline | `--color-primary-600` text |

#### Sizes

| Size | Height | Padding | Font | Border Radius |
|---|---|---|---|---|
| `sm` | 32px | `--space-2` / `--space-3` | `body-sm` (12px) | `--radius-md` (6px) |
| `md` (default) | 40px | `--space-3` / `--space-4` | `button` (14px) | `--radius-md` (6px) |
| `lg` | 48px | `--space-3` / `--space-6` | `body-lg` (16px) | `--radius-md` (6px) |

#### States

| State | Treatment |
|---|---|
| Hover | Background shift (see variant table), `cursor: pointer` |
| Focus | `outline: 2px solid --color-primary-400; outline-offset: 2px` |
| Disabled | `opacity: 0.5; cursor: not-allowed` |
| Loading | Text replaced with spinner, button width preserved |

### 5.2 Cards

Cards are the fundamental content container for product listings, notifications, and content blocks.

```
+---------------------------------------+
|  [Image / Media Area]                  |  aspect-ratio: 4/3 or 1/1
+-----------------------------------------+
|  Category tag (optional)               |  body-sm, --color-text-muted
|  Product Title                         |  heading-3, --color-text-primary
|  Short description (optional)          |  body-md, --color-text-secondary
|                                        |
|  $Price                                |  price-sm, --font-mono, --color-text-primary
|  Rating / Reviews (optional)           |  body-sm
+-----------------------------------------+
```

| Property | Value |
|---|---|
| Background | `--color-surface` (#ffffff) |
| Border | `1px solid --color-neutral-200` |
| Border Radius | `--radius-lg` (8px) |
| Shadow (rest) | `0 1px 2px rgba(0, 0, 0, 0.05)` |
| Shadow (hover) | `0 4px 12px rgba(0, 0, 0, 0.1)` |
| Transition | `box-shadow 200ms ease, transform 200ms ease` |
| Hover transform | `translateY(-2px)` |
| Internal padding | `--space-4` |
| Image overflow | `hidden` (images are `object-fit: cover`) |

### 5.3 Inputs

| Property | Value |
|---|---|
| Height | 40px (default), 48px (large) |
| Background | `--color-surface-sunken` (#f5f5f5) |
| Border | `1px solid --color-neutral-200` |
| Border (focus) | `1px solid --color-primary-400` |
| Border Radius | `--radius-md` (6px) |
| Ring (focus) | `0 0 0 3px rgba(248, 179, 78, 0.2)` |
| Padding | `--space-3` vertical, `--space-4` horizontal |
| Font | `body-md` (14px), `--color-text-primary` |
| Placeholder | `body-md`, `--color-text-disabled` |
| Label | `label` style (14px/500), placed above with `--space-1.5` gap |
| Error state | Border `--color-error-500`, ring `rgba(239, 68, 68, 0.2)`, helper text `--color-error-500` |
| Disabled | `opacity: 0.5`, `cursor: not-allowed`, `background: --color-neutral-100` |

### 5.4 Navigation

#### Top Navigation Bar

| Property | Value |
|---|---|
| Height | 64px |
| Background | `--color-surface` (#ffffff) |
| Border bottom | `1px solid --color-neutral-200` |
| Position | `sticky; top: 0; z-index: 50` |
| Padding | `--space-4` horizontal |
| Max width | `1280px` centered |
| Shadow | `0 1px 3px rgba(0, 0, 0, 0.05)` |

**Contents (left to right):**
1. Logo / Brand name
2. Search bar (centered, max-width 480px)
3. Navigation links (categories, sell)
4. User actions (cart icon with badge, user menu)

#### Category Navigation (Sub-nav)

| Property | Value |
|---|---|
| Height | 48px |
| Background | `--color-surface` |
| Border bottom | `1px solid --color-neutral-100` |
| Items | Horizontal scroll on mobile, flex on desktop |
| Item style | `label` typography, `--color-text-secondary`, hover `--color-primary-400` |
| Active indicator | `2px solid --color-primary-400` bottom border |

#### Mobile Navigation

| Property | Value |
|---|---|
| Pattern | Bottom tab bar (5 items max) |
| Height | 56px + safe area |
| Background | `--color-surface` |
| Border top | `1px solid --color-neutral-200` |
| Active icon | `--color-primary-400` |
| Inactive icon | `--color-neutral-400` |
| Label | `body-sm`, below icon |

### 5.5 Badges

| Variant | Background | Text | Border |
|---|---|---|---|
| Default | `--color-neutral-100` | `--color-neutral-700` | none |
| Primary | `--color-primary-100` | `--color-primary-800` | none |
| Success | `--color-success-50` | `#16a34a` | none |
| Warning | `--color-warning-50` | `#a16207` | none |
| Error | `--color-error-50` | `#dc2626` | none |

| Property | Value |
|---|---|
| Padding | `--space-1` vertical, `--space-2` horizontal |
| Font | `body-sm` (12px), `--font-weight-medium` |
| Border Radius | `--radius-full` (9999px) |
| Height | 22px |

### 5.6 Search Bar

| Property | Value |
|---|---|
| Height | 44px |
| Background | `--color-neutral-50` |
| Border | `1px solid --color-neutral-200` |
| Border (focus) | `1px solid --color-primary-400` |
| Border Radius | `--radius-full` (9999px) |
| Left icon | Search (magnifying glass), `--color-neutral-400` |
| Padding left | `--space-10` (icon space) |
| Placeholder | "Buscar productos..." |
| Font | `body-md` |

### 5.7 Product Price Display

| Context | Style |
|---|---|
| Card price | `price-sm` (16px/600), `--font-mono`, `--color-text-primary` |
| Detail page price | `price` (20px/700), `--font-mono`, `--color-text-primary` |
| Original price (strikethrough) | `body-md`, `--color-text-muted`, `text-decoration: line-through` |
| Discount badge | Badge variant error, bold percentage |
| Currency | Prefix "EUR" or use euro symbol |

---

## 6. Layout Patterns

### 6.1 Breakpoints

| Name | Min Width | Container Max | Usage |
|---|---|---|---|
| `sm` | 640px | 640px | Large phones in landscape |
| `md` | 768px | 768px | Tablets |
| `lg` | 1024px | 1024px | Small desktops, laptops |
| `xl` | 1280px | 1280px | Standard desktops |
| `2xl` | 1536px | 1280px | Large screens (content capped at 1280px) |

### 6.2 Page Container

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-inline: var(--space-4);  /* 16px mobile */
}

@media (min-width: 768px) {
  .container {
    padding-inline: var(--space-8);  /* 32px tablet+ */
  }
}
```

### 6.3 Product Listing Grid

Mercado Libre-inspired responsive grid for product cards.

| Breakpoint | Columns | Gap |
|---|---|---|
| Mobile (`< 640px`) | 2 | `--space-3` (12px) |
| `sm` (640px) | 2 | `--space-4` (16px) |
| `md` (768px) | 3 | `--space-4` (16px) |
| `lg` (1024px) | 4 | `--space-5` (20px) |
| `xl` (1280px) | 4-5 | `--space-6` (24px) |

```css
.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

@media (min-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-4);
  }
}

@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-5);
  }
}
```

### 6.4 Product Detail Page Layout

```
+----------------------------------------------------+
|  Breadcrumb                                         |
+----------------------------------------------------+
|                           |                          |
|   Product Image Gallery   |   Product Info           |
|   (sticky on scroll)      |   - Title                |
|   [main image]            |   - Price                |
|   [thumbnail row]         |   - Variants             |
|                           |   - Quantity selector     |
|                           |   - Add to cart (Primary) |
|                           |   - Buy now (Secondary)   |
|                           |   - Shipping info         |
|                           |   - Seller info           |
+---------------------------+--------------------------+
|  Product Description (full width)                    |
|  Reviews / Ratings                                   |
|  Related Products (grid)                             |
+----------------------------------------------------+
```

| Property | Value |
|---|---|
| Image gallery width | 55% (desktop), 100% (mobile) |
| Info panel width | 45% (desktop), 100% (mobile) |
| Gap between panels | `--space-8` |
| Image gallery sticky | `position: sticky; top: 80px` (below nav) |
| Layout switch | Column at `< 1024px` |

### 6.5 Category / Filter Sidebar Layout

```
+----------+----------------------------------------+
| Filters  |  Sort bar                              |
| sidebar  |  [Product grid]                         |
| (240px)  |                                        |
|          |                                        |
+----------+----------------------------------------+
```

| Property | Value |
|---|---|
| Sidebar width | 240px (desktop), full-width drawer (mobile) |
| Sidebar padding | `--space-4` |
| Sidebar border right | `1px solid --color-neutral-200` |
| Gap between sidebar and grid | `--space-6` |
| Mobile behavior | Off-canvas drawer from left, overlay background |

### 6.6 Cart / Checkout Layout

| Property | Value |
|---|---|
| Pattern | Two-column on desktop, single column on mobile |
| Left column | Cart items list (65%) |
| Right column | Order summary card, sticky (35%) |
| Column gap | `--space-8` |
| Summary card | `--color-surface-raised`, `--radius-lg`, `--space-6` padding |

---

## 7. Imagery & Icon Guidelines

### Product Images

| Property | Guideline |
|---|---|
| Aspect ratio | 1:1 (square) for grid cards, 4:3 for featured/hero |
| Background | White or light neutral (`--color-neutral-50`) preferred |
| Min resolution | 800x800px for product images |
| Format | WebP with JPEG fallback via `<Image>` component |
| Placeholder | Skeleton loader with `--color-neutral-100` background, shimmer animation |
| Object fit | `cover` for cards, `contain` for detail gallery |

### Icons

| Property | Guideline |
|---|---|
| Library | [Lucide Icons](https://lucide.dev/) (already compatible with shadcn) |
| Default size | 20px (matches `body-lg` line) |
| Small size | 16px (for inline/badge use) |
| Large size | 24px (for navigation, empty states) |
| Stroke width | 1.5px (default Lucide) |
| Color | Inherits `currentColor` -- controlled via text color utilities |
| Interactive icons | Must have `min-width: 44px; min-height: 44px` tap target |

### Empty States

| Property | Guideline |
|---|---|
| Illustration style | Simple line art or Lucide icons at 48-64px |
| Text | `heading-3` title + `body-md` description, centered |
| CTA | Primary button below description |
| Max width | 400px, centered in container |

### Logo

| Context | Format |
|---|---|
| Navigation bar | SVG, max height 32px, horizontal lockup |
| Favicon | 32x32 and 16x16 PNG, simplified mark |
| Open Graph | 1200x630, full logo with background |

---

## 8. Dark Mode

### Decision: Not Supported (v1)

Dark mode is **explicitly out of scope** for the initial release. Rationale:

1. The brand identity relies heavily on white backgrounds and warm amber accents, which look best in light mode.
2. Product photography is typically shot on white/light backgrounds -- dark mode would create visual dissonance.
3. The Nextdoor.com aesthetic reference is primarily a light-mode design.
4. Development velocity is prioritized for v1.

### Preparation for Future Support

To make dark mode adoption easier later:

- All colors must be referenced via CSS custom properties (tokens), never as raw hex values in components.
- The existing `globals.css` `prefers-color-scheme: dark` media query should be **removed** to prevent partial dark mode rendering.
- Use semantic token names (`--color-background`, `--color-surface`, `--color-text-primary`) rather than literal names (`--color-white`, `--color-black`).
- When dark mode is implemented, only the token values in `globals.css` need to change -- no component code modifications.

---

## 9. Animation & Transitions

### Philosophy

Animations should feel **swift and purposeful** -- they guide attention, never entertain. No bouncing, no delays, no "delight" animations in v1.

### Duration Tokens

| Token | Duration | Usage |
|---|---|---|
| `--duration-fast` | 100ms | Hover color changes, opacity |
| `--duration-normal` | 200ms | Card hover lift, dropdown open, focus ring |
| `--duration-slow` | 300ms | Modal enter, sidebar slide, page transitions |
| `--duration-slower` | 500ms | Skeleton shimmer, loading states |

### Easing Functions

| Token | Value | Usage |
|---|---|---|
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | General purpose |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Elements exiting |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering |
| `--ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Reserved for add-to-cart feedback only |

### Common Transitions

| Element | Property | Duration | Easing |
|---|---|---|---|
| Button hover | `background-color, color` | `--duration-fast` | `--ease-default` |
| Card hover | `box-shadow, transform` | `--duration-normal` | `--ease-out` |
| Input focus | `border-color, box-shadow` | `--duration-normal` | `--ease-default` |
| Modal enter | `opacity, transform` | `--duration-slow` | `--ease-out` |
| Modal exit | `opacity, transform` | `--duration-normal` | `--ease-in` |
| Dropdown | `opacity, transform` | `--duration-normal` | `--ease-out` |
| Page transition | `opacity` | `--duration-slow` | `--ease-default` |
| Skeleton shimmer | `background-position` | `--duration-slower` | `linear`, infinite |
| Toast enter | `transform (translateY)` | `--duration-slow` | `--ease-out` |

### Reduced Motion

All transitions must respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Shadcn Component Customization

Shadcn/ui will be installed and customized to match this design system. Below are the token overrides and configuration decisions.

### Installation Configuration

```json
{
  "style": "new-york",
  "tailwind": {
    "baseColor": "neutral"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

> The "new-york" style is chosen for its cleaner, more minimal aesthetic that aligns with the Nextdoor-inspired design.

### CSS Variable Overrides (for globals.css)

These values replace the default shadcn theme to align with the Santiaguenias brand:

```css
:root {
  /* Backgrounds */
  --background: #ffffff;
  --foreground: #171717;

  /* Card / Popover */
  --card: #ffffff;
  --card-foreground: #171717;
  --popover: #ffffff;
  --popover-foreground: #171717;

  /* Primary -- Brand amber */
  --primary: #f8b34e;
  --primary-foreground: #ffffff;

  /* Secondary -- Neutral */
  --secondary: #f5f5f5;
  --secondary-foreground: #171717;

  /* Muted */
  --muted: #f5f5f5;
  --muted-foreground: #737373;

  /* Accent */
  --accent: #fef9f0;
  --accent-foreground: #171717;

  /* Destructive */
  --destructive: #ef4444;
  --destructive-foreground: #ffffff;

  /* Border & Input */
  --border: #e5e5e5;
  --input: #e5e5e5;
  --ring: #f8b34e;

  /* Border Radius */
  --radius: 0.5rem;

  /* Chart colors */
  --chart-1: #f8b34e;
  --chart-2: #22c55e;
  --chart-3: #3b82f6;
  --chart-4: #eab308;
  --chart-5: #ef4444;
}
```

### Border Radius Tokens

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 4px | Small elements (badges, chips) |
| `--radius-md` | 6px | Buttons, inputs |
| `--radius-lg` | 8px | Cards, modals, dropdowns |
| `--radius-xl` | 12px | Large cards, hero sections |
| `--radius-full` | 9999px | Pills, avatars, search bar |

### Component-Specific Overrides

#### Button
- Primary variant uses `--primary` (#f8b34e) with white text.
- Focus ring uses `--ring` with 2px offset.
- Border radius: `--radius-md`.

#### Card
- No default shadow at rest; only `0 1px 2px rgba(0,0,0,0.05)`.
- Hover shadow added via utility: `hover:shadow-md`.
- Border: `1px solid --border`.

#### Input
- Background: `--secondary` (#f5f5f5) instead of transparent.
- Focus ring: warm amber glow via `--ring`.
- Height: 40px default.

#### Dialog / Sheet
- Overlay color: `rgba(0, 0, 0, 0.5)`.
- Content border radius: `--radius-lg`.
- Entry animation: fade + scale from 95%.

#### Toast
- Position: bottom-right (desktop), bottom-center (mobile).
- Success variant uses `--color-success-50` background.
- Error variant uses `--color-error-50` background.

#### Avatar
- Border radius: `--radius-full`.
- Fallback background: `--color-primary-100` with `--color-primary-800` text.

#### Select / Dropdown Menu
- Item hover background: `--accent` (#fef9f0).
- Selected item: `--color-primary-100` background, `--color-primary-800` text.
- Border radius: `--radius-lg`.

---

## 11. Tailwind CSS v4 Token Map

All design tokens defined above should be registered in `globals.css` using Tailwind CSS v4's `@theme` directive. This creates a single source of truth that both CSS custom properties and Tailwind utilities can reference.

### Registration Pattern

```css
@import "tailwindcss";

:root {
  /* All CSS custom property definitions from Section 2-9 */
}

@theme inline {
  /* Map tokens to Tailwind utilities */
  --color-background: var(--background);
  --color-foreground: var(--foreground);

  --color-primary-50: #fef9f0;
  --color-primary-100: #fdefd4;
  --color-primary-200: #fcdfa8;
  --color-primary-300: #fac96e;
  --color-primary-400: #f8b34e;
  --color-primary-500: #f09e1e;
  --color-primary-600: #d4820f;
  --color-primary-700: #b06810;
  --color-primary-800: #8f5314;
  --color-primary-900: #764413;

  --color-success-50: #f0fdf4;
  --color-success-500: #22c55e;
  --color-warning-50: #fefce8;
  --color-warning-500: #eab308;
  --color-error-50: #fef2f2;
  --color-error-500: #ef4444;
  --color-info-50: #eff6ff;
  --color-info-500: #3b82f6;

  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);

  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-full: 9999px;
}
```

### Usage in Components

With the above registration, all tokens become available as Tailwind utilities:

```tsx
// Color utilities
<div className="bg-primary-400 text-white" />
<p className="text-primary-600" />
<span className="bg-success-50 text-success-500" />

// Border radius
<div className="rounded-lg" />  /* uses --radius-lg */
<button className="rounded-md" />  /* uses --radius-md */

// Font
<h1 className="font-sans font-semibold text-2xl" />
<span className="font-mono" />  /* prices, SKUs */
```

---

## Quick Reference Card

```
Brand:       Santiaguenias -- Austrian commerce, Latin American soul
Primary:     #f8b34e (warm amber)
Background:  #ffffff (clean white)
Text:        #171717 (near-black)
Font:        Geist Sans / Geist Mono
Style:       New York (shadcn), Neutral base
Grid:        4px spacing, 1280px max-width
Cards:       Bordered, subtle shadow, hover lift
Buttons:     Rounded-md, amber primary, clear hierarchy
Dark Mode:   Not in v1 -- tokens are ready for future support
Motion:      Fast and purposeful, respects prefers-reduced-motion
References:  Mercado Libre (structure), Nextdoor (aesthetics)
```
