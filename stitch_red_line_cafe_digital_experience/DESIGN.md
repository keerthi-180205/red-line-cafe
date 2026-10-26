---
name: Red Line Dynamic Gourmet
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e6bdb8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ad8884'
  outline-variant: '#5d3f3c'
  surface-tint: '#ffb4ab'
  primary: '#ffb4ab'
  on-primary: '#690006'
  primary-container: '#d71920'
  on-primary-container: '#ffece9'
  inverse-primary: '#c00014'
  secondary: '#f4be4e'
  on-secondary: '#412d00'
  secondary-container: '#b8891a'
  on-secondary-container: '#382700'
  tertiary: '#ccc6b7'
  on-tertiary: '#333026'
  tertiary-container: '#716d60'
  on-tertiary-container: '#f7f0e0'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000d'
  secondary-fixed: '#ffdea4'
  secondary-fixed-dim: '#f4be4e'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4200'
  tertiary-fixed: '#e9e2d2'
  tertiary-fixed-dim: '#ccc6b7'
  on-tertiary-fixed: '#1e1c12'
  on-tertiary-fixed-variant: '#4a473b'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-hero:
    fontFamily: Oswald
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: 0.02em
  display-hero-mobile:
    fontFamily: Oswald
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Oswald
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: 0.01em
  headline-lg-mobile:
    fontFamily: Oswald
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Oswald
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.01em
  headline-sm:
    fontFamily: Oswald
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.04em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a punchy, energetic, and urban-gourmet cafe identity rooted in contemporary cafe culture. It bridges high-energy streetwise burger joint aesthetics with the polished restraint of a third-wave coffee house.

### Personality & Emotional Resonance
- **Appetizing & Urgent:** Crisp, punchy contrasts command immediate attention and stimulate appetite.
- **Urban & Modern:** Rooted in dynamic city energy, blending industrial clean edges with warm hospitality.
- **Premium Craft:** Every dish and beverage is treated as an editorial hero, avoiding greasy fast-food clichés in favor of curated culinary presentation.

### Aesthetic Direction
High-Contrast / Bold Minimalist. Clean structural grids, generous negative space, crisp hairline dividers, ultra-punchy display scale, and focused spots of rich crimson and warm yolk yellow set against dense obsidian backgrounds and rich warm cream surfaces.

## Colors

The palette establishes an appetizing dark-mode-first environment. Near-black grounding shades provide theatrical contrast for food photography, vibrant red sparks immediate action, and warm cream and golden tones introduce comforting cafe warmth.

### Color Tokens & Roles
- **Primary (`#D71920`):** The signature red. Reserved for critical interactive elements, key tags, active states, cart counters, and brand marks.
- **Secondary (`#FFC857`):** Warm yolk accent. Used for ratings, chef highlights, dietary callouts, promotional badges, and subtle glows.
- **Tertiary (`#FFF8E8`):** Warm cream. Acts as the primary light text color, alternative high-contrast tag background, and morning menu contrast surface.
- **Neutral Core (`#171717`):** The baseline canvas color. Pure obsidian with warm undertones that avoids sterile pitch black.
- **Surface Elevation (`#242424`):** Secondary container surface for cards, floating sheets, menu item listings, and dropdowns.
- **Surface Contrast Border (`#333333`):** Structural division line color, preserving element separation without heavy shadows.
- **White (`#FFFFFF`):** High-impact emphasis for primary headers, prices, and focused states.

## Typography

The type scale pairs an assertive, condensed display face (**Oswald**) with a balanced, highly legible modern geometric sans-serif (**Plus Jakarta Sans**).

### Hierarchy & Treatment
- **Display & Headlines (Oswald):** Set in uppercase or capitalized title case for maximum culinary impact. Tight letter tracking and disciplined vertical leading ensure that burger names, menu titles, and promotional shouts cut cleanly through imagery.
- **Body & Menu Specifications (Plus Jakarta Sans):** Warm, neutral, and readable even at dim cafe table lighting. Used for item descriptions, ingredient listings, nutritional notes, and ordering flows.
- **Price Displays:** Handled with `Oswald` bold to deliver direct, confident pricing clarity.
- **Nutritional & Origin Tags:** Handled with uppercase `label-sm` or `label-md` with tracking to balance density in small physical surfaces.

## Layout & Spacing

A responsive layout strategy adapts high-density menu navigation across pocket devices and larger screens.

### Grid & Breakpoints
- **Desktop (>= 1024px):** 12-column grid, `margin: 2.5rem`, `gutter: 1.5rem`. Max container bound of `1280px` centered.
- **Tablet (768px - 1023px):** 8-column grid, `margin: 1.5rem`, `gutter: 1.25rem`.
- **Mobile (< 768px):** 4-column fluid system, `margin-sm: 1rem`, `gutter-sm: 1rem`. Sticky category anchors pin to top with horizontal swipe navigation.

### Rhythm Principles
- Component layout uses multiples of `4px` with a default base unit of `8px`.
- Section gaps transition aggressively between `space-lg` (menus) and `space-xl` (editorial hero blocks) to create rhythm between reading and browsing.

## Elevation & Depth

Visual hierarchy uses tonal surface stacking paired with crisp boundary lines rather than heavy drop shadows, reinforcing an architectural, modern cafe feel.

### Surface Tiers
- **Base Canvas (`#171717`):** Primary viewport backdrop.
- **Tier 1 Container (`#242424`):** Cards, sticky navigation bars, and search inputs. Bound by a `1px solid #333333` hairline perimeter.
- **Tier 2 Elevated (`#2E2E2E`):** Flyout carts, modal overlays, quantity counter adjustments, and dropdown selects.
- **Highlight Overlay:** On hover or focus, borders shift from `#333333` to `#D71920` (primary red) or `#FFC857` (accent warm yellow) with an ultra-subtle directional glow: `box-shadow: 0 4px 20px rgba(215, 25, 32, 0.15)`.
- **Backdrop Blurs:** Navigation bars and mobile category switchers use `rgba(23, 23, 23, 0.85)` with a `12px` blur for backdrop transparency when scrolling across food assets.

## Shapes

The design system employs a soft architectural structure (`roundedness: 1`). Corners are gently softened without appearing bubbly or child-like, preserving the precision of modern dining spaces.

### Geometry Details
- **Base Components (`0.25rem` / `4px`):** Buttons, inputs, quantity steppers, and inline tags.
- **Containers & Food Cards (`rounded-lg: 0.5rem` / `8px`):** Menu item displays, receipt wrappers, and promo tiles.
- **Hero Banners & Modals (`rounded-xl: 0.75rem` / `12px`):** Feature showcases and checkout trays.
- **Pill Exception:** Pure pill roundness is reserved exclusively for dietary tags (Veg / Non-Veg indicator pills) and floating reorder badges.

## Components

### Buttons
- **Primary Action (Order Now / Add to Cart):** Background `#D71920`, text `#FFFFFF`, bold `label-lg`, `0.25rem` radius. Hover states brighten slightly with an active inset push transition (`transform: scale(0.98)`).
- **Secondary (Customise / View Details):** Background `#242424`, border `1px solid #333333`, text `#FFF8E8`. Hover shifts border to `#D71920`.
- **Tertiary / Ghost:** Borderless, text `#FFC857` or `#FFF8E8`, underlined on hover.

### Chips & Category Tabs
- **Category Filter Chips:** Horizontal scrolling bar. Default state has a `#242424` surface with `#FFF8E8` text. Active state uses `#D71920` fill with crisp white Oswald label text.
- **Dietary Indicators:** Mini square glyphs with green or red dots bordered cleanly in hairline white, paired with small bold labels.

### Food & Drink Cards
- **Structure:** 1:1 or 4:3 high-resolution food photo header, dark charcoal base container (`#242424`), hairline outer rim.
- **Typography Layout:** Dish title set in `headline-sm`, short ingredient preview in `body-sm` (`#A3A3A3`), and price in `headline-md` Oswald cream (`#FFF8E8`).
- **Cart Trigger:** Integrated plus icon button fixed to the bottom right of the card, popping with `#D71920`.

### Form Fields & Inputs
- **Base Style:** Dark container (`#242424`) with `1px solid #333333` border. Text `#FFFFFF`, placeholder `#737373`.
- **Focus:** Sharp transition to `1px solid #D71920` with a zero-offset outline.
- **Quantity Selector:** Stepper unit with solid `#171717` recessed well, white text, and `#D71920` stepper icons.

### Selection Controls
- **Radio & Checkboxes:** Custom rounded squares (`4px`) with `#242424` fill, snapping to full `#D71920` with a white checkmark or inner solid dot upon selection.

### Specialty Cafe Components
- **Roast & Spice Meter:** Horizontal bar with segment notches in `#FFC857` indicating spice level for burgers and roast profile for specialty brews.
- **Live Order Tracker:** Vertical pipeline with glowing red indicator markers, high-contrast timestamps, and order status typography.