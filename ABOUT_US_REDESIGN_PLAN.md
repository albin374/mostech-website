# Mostech About Us — Premium Redesign Plan
> **Role:** Senior UI/UX Designer & Design Systems Architect  
> **Date:** September 2026  
> **Status:** Design Blueprint — Ready for Engineering Handoff

---

## 🔍 Current State Audit

### What Exists Today
The About Us page (`AboutPage.jsx`) is composed of **8 section components**:

| # | Component | Current Issues |
|---|-----------|----------------|
| 1 | `AboutPageHero` | Title-only with hardcoded wrong text ("Platforms & Enterprise Cloud" — not about us). No visual hierarchy, no animation. |
| 2 | `AboutOverview` | Good two-column layout idea but lacks visual breathing room. Feature cards feel buried. |
| 3 | `AboutCeoMessage` | Dark card is on the right track but inconsistent — navy left col with CEO photo, quote feels generic. |
| 4 | `AboutTechnicalImpact` | Stats in circle items look plain; no animation on counter numbers; colors are inconsistent with brand. |
| 5 | `AboutMandate` | Mission/Vision/Goals cards are fine in concept but feel like a bland FAQ layout. |
| 6 | `AboutPrinciples` | 3-col card grid with white cards/grey border — very generic and corporate-sterile. |
| 7 | `AboutLifecycle` | Numbered steps work but bottom-line indicator is underwhelming; no progressive visual. |
| 8 | `AboutCTA` | Dark CTA wrapper is decent but buttons look inconsistent and padding feels arbitrary. |

### Key Design Problems
1. **No unified section rhythm** — each section has its own padding (2rem, 6rem, 4rem) with no system
2. **No micro-animations** — zero entrance animations, zero scroll-triggered effects
3. **Inconsistent colour use** — `#0a1930`, `#020c4c`, `#0b4887` all used randomly = brand confusion
4. **Typography feels flat** — only `font-weight: 800` and `400` used, no type scale system
5. **Page background** is hard-coded `#f8fafc` but section backgrounds alternate `#ffffff` / `#f8fafc` creating visual noise
6. **No badge / label system** — the "LEADERSHIP VISION" labels are repeated in every section but styled differently

---

## 🎨 Design System

### Colour Palette (Brand-Aligned + Premium Refinement)

```
PRIMARY BRAND
  --about-navy-900:    #020c4c   /* deepest navy — headings, hero bg */
  --about-navy-800:    #0a1930   /* primary cards, strong elements */
  --about-navy-700:    #0d285c   /* gradient ends */
  --about-navy-600:    #0b4487   /* mid-range CTAs */

ACCENT — Electric Blue (Retained, refined)
  --about-accent:      #2563eb   /* primary accent — was scattered, now unified */
  --about-accent-soft: #3b82f6   /* secondary mentions, icons */
  --about-accent-glow: rgba(37, 99, 235, 0.15)  /* glow halos, card bg tints */

NEUTRAL SURFACE
  --about-surface-0:   #ffffff   /* pure white panels */
  --about-surface-1:   #f8fafc   /* page background / alt sections */
  --about-surface-2:   #f1f5f9   /* card resting state */
  --about-surface-3:   #e2e8f0   /* borders, dividers */

TEXT HIERARCHY
  --about-text-primary:   #0a1930   /* h1, h2 — navy, not black */
  --about-text-secondary: #334155   /* body copy, descriptions */
  --about-text-muted:     #64748b   /* labels, captions, metadata */
  --about-text-inverse:   #f8fafc   /* text on dark backgrounds */

SPECIAL
  --about-gradient-hero: linear-gradient(135deg, #020c4c 0%, #0b4487 60%, #1d4ed8 100%)
  --about-gradient-cta:  linear-gradient(135deg, #020c4c 0%, #0d285c 100%)
  --about-gold-accent:   #f59e0b   /* CEO quote mark, award icons — use sparingly */
```

---

### Typography System

**Font Stack (Already using Inter — keep and extend)**
```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

**Type Scale (8-step modular scale, ratio: 1.25)**

| Token | Size | Weight | Usage |
|-------|------|--------|-------|
| `--text-hero` | `clamp(3rem, 6vw, 5.5rem)` | 800 | Hero H1 |
| `--text-h2` | `clamp(2rem, 4vw, 3.2rem)` | 700 | Section titles |
| `--text-h3` | `clamp(1.4rem, 2.5vw, 1.8rem)` | 700 | Card titles |
| `--text-h4` | `1.1rem` | 600 | Sub-headings |
| `--text-label` | `0.75rem` | 700 | ALL-CAPS labels, badges |
| `--text-body-lg` | `1.1rem` | 400 | Lead paragraphs |
| `--text-body` | `1rem` | 400 | Standard body |
| `--text-sm` | `0.875rem` | 400 | Captions, meta |

**Line Heights**
- Headings: `1.1`
- Body: `1.7`
- Labels: `1`

**Letter Spacing**
- Labels / ALL-CAPS: `0.1em`
- Normal: `normal`

---

### Spacing System (8pt grid)

```
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-5:   24px
--space-6:   32px
--space-7:   48px
--space-8:   64px
--space-9:   80px
--space-10:  96px
--space-11:  120px
```

**Section Padding Standard:**
- Desktop: `padding: var(--space-11) 0` (120px top & bottom)
- Tablet: `padding: var(--space-9) 0` (80px)
- Mobile: `padding: var(--space-7) 0` (48px)

**Container Max Width:** `1200px` (keep existing)  
**Inner padding (container):** `0 clamp(1rem, 5vw, 2rem)`

---

### Border Radius System

```
--radius-sm:  6px    /* tags, badges */
--radius-md:  12px   /* cards, icons */
--radius-lg:  20px   /* image frames, large cards */
--radius-xl:  32px   /* hero pill badges, CTA wrapper */
--radius-full: 9999px /* buttons, pills */
```

---

### Shadow System

```
--shadow-xs:  0 1px 3px rgba(2, 12, 76, 0.06)
--shadow-sm:  0 4px 12px rgba(2, 12, 76, 0.08)
--shadow-md:  0 8px 24px rgba(2, 12, 76, 0.10)
--shadow-lg:  0 16px 48px rgba(2, 12, 76, 0.12)
--shadow-xl:  0 24px 64px rgba(2, 12, 76, 0.15)

/* Blue glow for featured/hover states */
--shadow-glow: 0 8px 32px rgba(37, 99, 235, 0.20)
--shadow-glow-lg: 0 16px 48px rgba(37, 99, 235, 0.25)
```

---

## 🧩 Section-by-Section Redesign Spec

---

### SECTION 1 — Hero (`AboutPageHero`)

**Current Problem:** Wrong title. No visual design. Completely empty.

**New Design Intent:** Full-width cinematic hero. Dark navy gradient background. Floating stat badges. Animated headline. Particle or mesh background effect.

**Layout:**
```
[Full Viewport Width — min-height: 40vh]
  Background: --about-gradient-hero (dark navy to blue)

  Left Column (55%):
    - Eyebrow Label: "— ABOUT MOSTECH" (accent blue, letter-spaced)
    - H1: "Building Tomorrow's Digital Infrastructure. Today."
    - Subheadline: 1 sentence about who they are
    - 2 CTAs: [Talk to Our Team] [View Our Work ->]

  Right Column (45%):
    - 3D-tilted card or floating dashboard illustration
    - 3 floating mini-stat badges:
        • "1,000+ Projects"
        • "7+ Years"
        • "Dubai HQ"
    - These float with CSS animation (subtle y-axis drift)
```

**Background Treatment:**
- Large radial gradient blob in top-right: `rgba(37, 99, 235, 0.15)` 
- Subtle dot-grid pattern overlay (SVG background-image)
- Bottom fade to page background `#f8fafc`

**Animations:**
- Headline: `fadeInUp` staggered per word/line — `0.6s ease-out`
- Stats badges: `fadeInScale` on load — `0.4s` delay stagger
- Right panel: `fadeInRight` — `0.5s`
- Background blobs: `pulse` (scale 1 to 1.05 to 1) — infinite 8s

---

### SECTION 2 — Overview (`AboutOverview`)

**Current Problem:** Grid exists but feature cards at bottom look disconnected. Image panel lacks drama.

**New Design Intent:** Clean 50/50 split. Left = rich text story + 3 icon cards. Right = image with an asymmetric border cut + floating location badge.

**Layout Changes:**
```
Left Panel:
  - Section Label: "WHO WE ARE" (eyebrow badge)
  - H2: "Mostech Business Solutions" — larger
  - 2 short paragraphs (keep current copy — it's good)
  - Feature Items: horizontal list (not 3-col grid)
    -> Icon + Title + single-line descriptor
    -> Left border-accent: 3px solid --about-accent
    -> White background, subtle shadow

Right Panel:
  - Image: keep /about burjhhalifa.png
  - clip-path CSS cut on top-left corner for visual interest
  - Location Badge: absolute positioned, glass morphism
    -> backdrop-filter: blur(12px)
    -> background: rgba(255,255,255,0.85)
    -> shadow: --shadow-lg
```

---

### SECTION 3 — CEO Message (`AboutCeoMessage`)

**Current Problem:** Card split feels arbitrary. Name plate overlaps photo. Quote is plain.

**New Design Intent:** Editorial / magazine feel. CEO image on the left with a warm golden frame accent. Quote on the right with an oversized quotation mark.

**Layout:**
```
Section background: #f8fafc (light)

Card Container:
  - border-radius: --radius-xl (32px)
  - shadow: --shadow-lg
  - overflow: hidden
  - display: grid 40/60

Left Column (40%):
  - Full-height image of CEO
  - Gradient overlay from bottom: rgba(2,12,76,0.85)
  - Name + Title text on top of the gradient
  - Small gold accent line above name: 40px wide, 3px, --about-gold-accent

Right Column (60%):
  - Background: --about-navy-900 (#020c4c)
  - Oversized quote mark " in --about-gold-accent at top-left (8rem, opacity: 0.3)
  - Quote text in white, italic, font-size: 1.1rem
  - Bottom separator line (1px, rgba(255,255,255,0.1))
  - Two credential stamps: "Est. 2018" + "1,000+ Delivered"
```

**Animations:**
- Quote text: `fadeInUp` on scroll enter
- Quote mark: `scale(0.8) to scale(1)` on scroll — creates emphasis

---

### SECTION 4 — Technical Impact Stats (`AboutTechnicalImpact`)

**Current Problem:** Circle items look flat. Numbers don't animate. No visual identity.

**New Design Intent:** Dark navy full-width band with glowing number counters. "Dashboard metrics" aesthetic.

**Layout:**
```
Background: --about-navy-900 full bleed (edge to edge)
  -> subtle mesh gradient pattern
  -> top and bottom: 120px padding

Header (centered):
  - Eyebrow: "BY THE NUMBERS" (accent blue, spaced)
  - H2: white text
  - Subtitle: muted slate

Metric Cards Row (5 columns, flex):
  Each stat card:
    - background: rgba(255,255,255,0.04)
    - border: 1px solid rgba(255,255,255,0.08)
    - border-radius: --radius-lg
    - padding: 2.5rem 1.5rem
    - Icon: --about-accent, 24px, above number
    - Number: clamp(2.5rem, 4vw, 3.5rem), font-weight: 800, --about-accent-soft
    - Label: white, 0.9rem, font-weight: 600
    - Sub-label: --about-text-muted (slate), 0.8rem

    Hover:
      - background: rgba(37,99,235,0.08)
      - border-color: rgba(37,99,235,0.3)
      - shadow: --shadow-glow
      - transform: translateY(-4px)
      - transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)
```

**Animation — Counter Roll:**
- `IntersectionObserver` triggers counter animation on scroll enter
- Numbers count up from 0 to final value in 1.5s
- Easing: ease-out cubic
- Stagger: each card delays +100ms

---

### SECTION 5 — Mandate: Mission, Vision, Goals (`AboutMandate`)

**Current Problem:** Three equal cards look like a feature grid. The active-card highlight is not distinct enough.

**New Design Intent:** Featured center card elevated with premium dark treatment.

**Layout (Keep 3-col, redesign cards):**
```
Background: #ffffff

Card Redesign:
  Default cards:
    - bg: --about-surface-2 (#f1f5f9)
    - border: 1px solid --about-surface-3
    - border-radius: --radius-lg
    - padding: 2.5rem

  Featured "Vision" card (center):
    - bg: --about-navy-900
    - color: white
    - border: 1px solid rgba(37,99,235,0.3)
    - shadow: --shadow-glow-lg
    - transform: translateY(-12px) — elevated above others
    - Icon: accent blue
    - Link: accent blue

Hover (default cards):
  - border-color: --about-accent
  - shadow: --shadow-glow
  - transform: translateY(-4px)
```

---

### SECTION 6 — Principles (`AboutPrinciples`)

**Current Problem:** 3x2 white card grid feels generic, corporate-sterile.

**New Design Intent:** Alternating numbered principle rows. Editorial layout with stagger.

**Layout (Numbered Left-Border Rows — Recommended):**
```
Background: --about-surface-1 (#f8fafc)

Each Principle Row:
  - Full-width row (vertical stack, not grid)
  - Left: large number (01, 02...) in --about-accent-glow colour,
           font-size: 4rem, font-weight: 900, opacity: 0.12
  - Center: Icon (40px circle) + Title + Description
  - Right: Arrow link
  - Separator: 1px border-bottom between items
  - Hover: row bg shifts to rgba(37,99,235,0.03), left number opacity increases
```

---

### SECTION 7 — Lifecycle (`AboutLifecycle`)

**Current Problem:** Cards are numbered but flat. No visual connection between steps.

**New Design Intent:** Horizontal timeline with connected nodes. Number = large circle node. Connecting line between them.

**Layout:**
```
Background: #ffffff

Timeline Container:
  - Horizontal flex row
  - Between each card: a connecting line (2px, --about-accent-glow / 30%)
  - On mobile: collapse to vertical list

Each Step Node:
  - Number circle: 56x56px, border-radius: 50%
    -> Default: white bg, --about-navy-800 border (2px), --about-navy-800 text
    -> Active/Hover: --about-accent bg, white number
  - Connecting line between nodes (except last)
  - Below node:
    -> Title: 1rem, bold, --about-text-primary
    -> Description: 0.875rem, --about-text-muted, line-height 1.6

Scroll Animation:
  - Each node fades in with stagger: node 1 at 0ms, node 2 at 150ms, etc.
  - Connecting line "draws" left-to-right using width animation from 0% to 100%
```

---

### SECTION 8 — CTA (`AboutCTA`)

**Current Problem:** Button styling conflicts with global classes. Contact info card is inconsistent.

**New Design Intent:** Dark full-bleed section. Strong headline. Frosted glass contact card.

**Layout:**
```
Background: --about-gradient-cta (full bleed, dark navy)
  + dot/grid overlay pattern
  + large accent glow radial at top-right corner

Left Panel (55%):
  - H2: white, clamp(2rem, 4vw, 3rem)
  - Subtext: --about-text-muted
  - CTA Buttons row:
    Primary: bg white, text --about-navy-900, border-radius: --radius-full
             -> hover: bg --about-accent, text white
    Secondary: outline 2px white, text white, border-radius: --radius-full
              -> hover: bg rgba(255,255,255,0.1)

Right Panel (45%):
  - Info Card with glassmorphism:
    -> bg: rgba(255,255,255,0.07)
    -> backdrop-filter: blur(16px)
    -> border: 1px solid rgba(255,255,255,0.15)
    -> border-radius: --radius-lg
    -> padding: 2rem
  - H4: "Regional GCC Presence" — white
  - Each contact item:
    -> Icon in small circle (rgba(37,99,235,0.3) bg, --about-accent icon)
    -> Label: slate muted
    -> Value: white, font-weight: 500
    -> phone/email: hover colour --about-accent-soft, underline
```

---

## Animation and Motion Design

### Philosophy
**"Subtle, purposeful, fast."** Animations should feel like polish — never a distraction. All animations complete within 600ms. No infinite loops except the hero background blob.

### Animation Token System

```css
--duration-fast:   150ms   /* micro interactions: button presses */
--duration-base:   300ms   /* hover states, focus rings */
--duration-slow:   500ms   /* card reveals, entrances */
--duration-slower: 700ms   /* hero headlines, major transitions */

--ease-standard:   cubic-bezier(0.4, 0, 0.2, 1)
--ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1)
--ease-out:        cubic-bezier(0, 0, 0.2, 1)
```

### Scroll-Triggered Animations (IntersectionObserver)

| Section | Animation | Duration | Stagger |
|---------|-----------|----------|---------|
| Hero | `fadeInUp` headline words | 700ms | 80ms per word |
| Overview | `fadeInLeft` + `fadeInRight` | 500ms | 200ms offset |
| CEO | Card `fadeInUp` on enter | 600ms | none |
| Stats | Counter roll + `fadeInUp` per card | 1500ms | 100ms per card |
| Mandate | `fadeInUp` per card | 500ms | 150ms stagger |
| Principles | `fadeInUp` per row | 400ms | 80ms stagger |
| Lifecycle | Nodes pop in + line draws right | 600ms | 150ms per node |
| CTA | `fadeInUp` whole section | 500ms | none |

### Hover Micro-interactions

```css
/* Card hover */
.card:hover {
  transform: translateY(-4px);
  transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 300ms ease;
}

/* Button hover */
.btn:hover {
  transform: translateY(-2px);
  transition: all 150ms ease;
}

/* Icon containers hover */
.icon-wrapper:hover {
  transform: scale(1.1) rotate(5deg);
  transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Hero Background Animation

```css
@keyframes blob-float {
  0%, 100% { transform: scale(1) translate(0, 0); }
  33%       { transform: scale(1.05) translate(2%, 2%); }
  66%       { transform: scale(0.98) translate(-1%, 1%); }
}

.hero-blob {
  animation: blob-float 8s ease-in-out infinite;
}
```

---

## Whitespace Strategy

### The Core Rule
> Every section needs one **dominant whitespace beat** — a moment where the eye can rest.

| Section | Primary Whitespace Beat | Note |
|---------|------------------------|------|
| Hero | 48px gap below headline before CTAs | Creates gravitas |
| Overview | 4rem gap between content and image | Emphasises two-column split |
| CEO | 4rem interior padding on quote column | Quote needs room to breathe |
| Stats | 1.5rem gaps between metric cards | Close enough to read as a unit |
| Mandate | 12px translateY elevation on center card | Visual hierarchy |
| Principles | 2.5rem top/bottom between row items | Each principle = a moment |
| Lifecycle | 1rem space between node and card title | Connects node to content |
| CTA | 10% horizontal padding | Hero-level importance |

---

## Responsive Behaviour

### Breakpoints
```
--bp-mobile:  480px
--bp-tablet:  768px
--bp-desktop: 1024px
--bp-wide:    1280px
```

### Per Section
| Section | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Hero | 2-col 55/45 | 2-col 50/50 | Stacked, image hidden |
| Overview | 2-col 50/50 | 2-col narrower img | Stacked |
| CEO | 2-col 40/60 | 2-col equal | Stacked, image 250px |
| Stats | 5-col row | 3-col grid | 2-col grid |
| Mandate | 3-col grid | 3-col | 1-col stack |
| Principles | Row layout | 2-col | 1-col |
| Lifecycle | Horizontal timeline | 3-col wrap | Vertical list |
| CTA | 2-col 55/45 | 2-col | Stacked |

---

## Badge / Label System (Unified)

**Every section badge uses this one consistent CSS pattern:**

```css
.section-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--about-accent);
  margin-bottom: 1rem;
}

.section-eyebrow::before {
  content: '';
  display: block;
  width: 24px;
  height: 2px;
  background: var(--about-accent);
  border-radius: 2px;
  flex-shrink: 0;
}
```

> Remove the individual `.badge-line` div from each component — replace with the CSS `::before` pseudo-element above.

---

## Font Loading Strategy

Add to `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

> Ensure weights 500, 600, 700, 800, 900 are all loaded. Currently loading partial weights.

---

## File Change Strategy

### New Files to Create
- `src/styles/about-design-system.css` — All CSS custom properties / tokens for the About page

### Components to Refactor (Priority Order)
1. **`AboutPageHero`** — Highest visual impact. Full rebuild. Priority 1
2. **`AboutTechnicalImpact`** — Counter animation + dark band. Priority 2
3. **`AboutCeoMessage`** — Editorial magazine layout. Priority 3
4. **`AboutCTA`** — Glassmorphism info card, button cleanup. Priority 4
5. **`AboutOverview`** — Clean up cards, remove heavy nav cards. Priority 5
6. **`AboutMandate`** — Elevated center card. Priority 6
7. **`AboutPrinciples`** — Switch to row/editorial layout. Priority 7
8. **`AboutLifecycle`** — Timeline with connecting nodes. Priority 8

### Shared CSS Variables to Add to `index.css`
```css
:root {
  /* Spacing */
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 80px;
  --space-10: 96px;
  --space-11: 120px;

  /* About-specific colors */
  --about-accent: #2563eb;
  --about-accent-soft: #3b82f6;
  --about-accent-glow: rgba(37, 99, 235, 0.15);
  --about-navy-900: #020c4c;
  --about-navy-800: #0a1930;
  --about-gold: #f59e0b;

  /* Shadows */
  --shadow-glow: 0 8px 32px rgba(37, 99, 235, 0.20);
  --shadow-glow-lg: 0 16px 48px rgba(37, 99, 235, 0.25);

  /* Animation */
  --duration-fast: 150ms;
  --duration-base: 300ms;
  --duration-slow: 500ms;
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## Design Checklist (Pre-Engineering)

### Visual Design
- [ ] All section backgrounds follow Light then Dark then Light alternating rhythm
- [ ] All section eyebrow labels use unified `.section-eyebrow` pattern
- [ ] All headings follow the 8-step type scale (no hardcoded font sizes)
- [ ] All colours reference CSS custom properties — zero hardcoded hex values in component CSS
- [ ] All cards have consistent `--radius-lg` border-radius (20px)
- [ ] All cards use `--shadow-md` by default, `--shadow-lg` on hover
- [ ] Button styles globally consistent — use only `.btn-primary` and `.btn-outline` from `index.css`

### Animation and Motion
- [ ] Hero entrance animation implemented
- [ ] All section cards have `fadeInUp` scroll-triggered entrance
- [ ] Stats section has counter animation with JS `IntersectionObserver`
- [ ] Lifecycle connecting line has draw animation
- [ ] All hover states follow `translateY(-4px)` plus shadow transition
- [ ] No animation exceeds 700ms duration
- [ ] `prefers-reduced-motion` media query disables all animations

### Responsive
- [ ] Hero stacks correctly at 768px
- [ ] Stats grid wraps to 2-col at 768px, 1-col at 480px
- [ ] CEO image collapses to top at 992px
- [ ] Lifecycle timeline becomes vertical list at 768px
- [ ] All font sizes use `clamp()` for fluid scaling

### Accessibility
- [ ] All interactive elements have `:focus-visible` ring using `--about-accent`
- [ ] All icon-only elements have `aria-label` or `title`
- [ ] Sufficient colour contrast ratio of at least 4.5:1 for all text
- [ ] Semantic HTML: `section`, `article`, `h1` to `h2` to `h3` hierarchy maintained
- [ ] No skipped heading levels

---

## Success Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Lighthouse Performance | Unknown | 90+ |
| Lighthouse Accessibility | Unknown | 95+ |
| Time-to-First-Paint | Unknown | Under 1.5s |
| Visual Consistency Score | Low (mixed hex, sizing) | High (token-based) |
| Animation Quality | None | Scroll-triggered + micro |
| Mobile Experience | Partial | Fully responsive |

---

*Plan authored by: Senior UI/UX Designer*  
*Project: Mostech Business Solutions — About Us Redesign*  
*Revision: v1.0 — September 2026*
