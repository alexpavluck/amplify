---
name: AMPLIFY
description: Making AI work for NTD programme leaders
colors:
  ink: "#0B0F1A"
  ink-2: "#4B5163"
  ink-hover: "#262C3B"
  ground: "#FFFFFF"
  muted: "#F4F4F6"
  tile: "#EBECF0"
  line: "#BFC3CD"
  night: "#0B0F1A"
  night-tile: "#171C29"
  night-ink: "#FFFFFF"
  night-ink-2: "#B4B9C6"
  gold: "#EFBF29"
  gold-hover: "#F6CF55"
  sky: "#5EA4DA"
  sky-deep: "#2568A0"
  level-beginner-bg: "#E3F0FA"
  level-beginner-ink: "#2568A0"
  level-intermediate-bg: "#FBF0C8"
  level-intermediate-ink: "#8A6400"
  level-advanced-bg: "#F8E3E3"
  level-advanced-ink: "#8B0000"
typography:
  display:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.6rem, 1rem + 5.4vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.25rem + 2.5vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.4vw, 1.375rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.4vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  small:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.1em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "12px"
  xl: "16px"
  card: "20px"
  core: "30px"
  pill: "999px"
spacing:
  pad: "clamp(1rem, 3.2vw, 2rem)"
  section: "clamp(4rem, 2.75rem + 4.5vw, 7.5rem)"
  wrap: "1160px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.sm}"
    padding: "0.95rem 1.4rem"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
  button-soft:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.95rem 1.4rem"
  button-soft-hover:
    backgroundColor: "{colors.tile}"
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.95rem 1.4rem"
  button-gold-hover:
    backgroundColor: "{colors.gold-hover}"
  badge-interactive:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.15rem 0.55rem"
  session-card:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "1rem 1.1rem 1.05rem"
    width: "206px"
  session-card-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  course-card:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  info-tile:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "1rem 1.15rem"
  panel-night:
    backgroundColor: "{colors.night}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.xl}"
---

# Design System: AMPLIFY

## Overview

**Creative North Star: "The Shared Desk"**

AMPLIFY looks like a desk that a cohort of peers gathers around to work on real problems. The learner's problem sits at the centre, literally so in the session hub, where eight sessions orbit a dark core tile labelled "Your problem" over a faint graph-paper grid. The surfaces are warm, open and hands-on: soft tinted cards you can pick up, plain near-black ink for what matters, and a gold reserved for the things you can act on now. It should feel like a working space that invites people in, not a brochure about AI.

Density is relaxed and generous. Sections breathe with large fluid gaps, and headlines are big, tight and confident without being loud. Everything else, such as facts, rosters, problem-statement examples and course cards, sits in tidy grids of rounded tiles. One family, Instrument Sans, carries every role, and hierarchy comes from size, weight and tight tracking rather than font contrast. Motion is quiet: content rises gently into view once, and the hub itself stays still.

The whole page works in English and French. Layout must tolerate French copy, which typically runs 15–30% longer, without truncation or broken rows.

**Key Characteristics:**
- A light white ground with cool grey tiles; a near-black "night" band for strong contrast moments (the strong problem example, the footer)
- Ink is the action colour; gold marks "interactive", "now" and "act here"; sky blue is the brand's secondary voice (logo letters, focus rings, mentor and Cohort 2 callouts)
- Tactile, friendly components: soft radii, tinted fills, gentle lift and movement on hover
- A single sans family with tight negative tracking on big type
- The learner's problem visually at the centre

## Colors

A restrained cool-neutral palette with near-black ink, one warm gold accent and a soft sky-blue secondary, taken directly from the AMPLIFY logo.

### Primary
- **Desk Ink** (`ink`): text, primary buttons, the hub's core tile, selected session cards, the total row in the roster. It is the colour of action as well as of reading. Its hover state lifts to **Lifted Ink** (`ink-hover`).
- **Harvest Gold** (`gold`): the one warm note. It marks interactive modules (the "Interactive" badge with its play icon, and the module panel border), the Cohort 2 "Coming in Dec 2026" pill, the session label in a selected session card, and text selection. Hover: **Bright Harvest** (`gold-hover`).

### Secondary
- **Logo Sky** (`sky`): the blue letters of the AMPLIFY wordmark ("MPL" and "FY"), focus outlines, graph-paper lines (at 14–28% alpha), list bullet dots, the mentor banner and Cohort 2 call-to-action backgrounds (mixed at 14% into white with a 40% border), the Claude Teams module border, and icons (banner icons, footer email icon).
- **Deep Sky** (`sky-deep`): sky blue when it has to be read as text, such as the "Who should apply" labels. Logo Sky is only about 2.7:1 on white, so it never carries text.

### Neutral
- **Paper White** (`ground`): page ground and raised panels.
- **Desk Grey** (`muted`): tinted tiles, session cards, soft buttons and muted sections.
- **Tile Grey** (`tile`): hover fill for soft surfaces, and media wells behind images.
- **Hairline** (`line`): borders, dashed hub connector lines, fact-grid dividers and the dashed "coming soon" frame.
- **Quiet Ink** (`ink-2`): secondary text, metadata and nav links.
- **Night** (`night`) / **Night Tile** (`night-tile`) with **Night Ink** (`night-ink`) and **Night Ink 2** (`night-ink-2`): the dark band used for the strong problem-statement example and the footer.

### Level tags
Short-course level pills pair a pale tint with a deep ink of the same hue: Beginner in blue (`level-beginner-*`), Intermediate in amber (`level-intermediate-*`), Advanced in red (`level-advanced-*`). Use them only for difficulty level.

### Named Rules
**The Gold Means Go Rule.** Gold marks only what is interactive, current or next to act on. Never use it for decoration or for body headings.

**The Sky Is Not Text Rule.** Logo Sky is for marks, lines, tints and icons. Text in a sky voice uses Deep Sky.

**The Logo Colours Rule.** When "AMPLIFY" is set as type, it follows the logo: A and I in Desk Ink, MPL and FY in Logo Sky.

**The Ink Acts Rule.** The default call-to-action is ink-filled. A gold button exists, but it is reserved for a single standout action, not for routine links.

## Typography

**Display Font:** Instrument Sans (with ui-sans-serif, system-ui, -apple-system, Segoe UI fallbacks)
**Body Font:** Instrument Sans
**Label Font:** Instrument Sans, in uppercase small caps-style labels

**Character:** One humanist-grotesque family does everything. Big type is set semibold with strongly negative tracking (never tighter than −0.04em), so headlines feel compact and decisive. Body copy stays open and readable at 17px.

### Hierarchy
- **Display** (600, `clamp(2.6rem, 1rem + 5.4vw, 5.5rem)`, line-height 1, −0.04em): the hero headline only, balanced and centred within about 15em. It drops to 2.1rem under 480px.
- **Headline** (600, `clamp(2rem, 1.25rem + 2.5vw, 3.25rem)`, 1.04, −0.035em): section headings, balanced.
- **Title** (600, `clamp(1.125rem, 1rem + 0.4vw, 1.375rem)`, 1.2): card and panel titles. Panel titles scale up to 1.5–2rem. Short-course card titles are 1.45rem.
- **Lead** (400, same fluid size as Title, 1.45): intro paragraphs under headings, with a maximum width of 40em.
- **Body** (400, 1.0625rem, 1.55): running text, kept to about 44–46em per line.
- **Small** (400, 0.9375rem, in Quiet Ink): metadata, captions, hints and nav links.
- **Label** (700, 0.7rem, 0.1–0.12em tracking, uppercase): data labels only, such as fact-grid terms, "Who should apply" tags and level pills. Never a label above a heading.

Running text stays at about 65–75 characters per line. Counts and figures use tabular numerals.

### Named Rules
**The No Full Stop Rule.** Headings never end with a period, in English or in French.

**The Heading Speaks Rule.** No eyebrow or kicker above a heading. Any fact it carried (a date, a constraint) goes directly under the heading as a plain sentence-case line.

**The One Family Rule.** Hierarchy comes from size, weight and tracking within Instrument Sans. Don't introduce a second display face on the main site.

## Layout

The page uses a centred wrap of 1160px with fluid side padding (`clamp(1rem, 3.2vw, 2rem)`). Sections are separated by a large fluid gap (`clamp(4rem, 2.75rem + 4.5vw, 7.5rem)`). Section intros sit in a 44rem column, either left-aligned or centred.

Content is arranged in simple asymmetric two-column grids: 5fr/6fr for the problem section, 1fr/2fr for the session detail panel and 1fr/1fr for Cohort 1 and Cohort 2. Facts sit in compact tile grids: a two-column country roster, a five-column fact strip, a four-up slide strip and a three-up short-course grid.

**The session hub** places cards absolutely around a centre core on a 620px stage, joined by dashed lines. Under 980px it collapses to the core above a 4-column grid (600–980px), then a 2-column grid. The connector lines are hidden.

Breakpoints that recur: 1000px (course grid drops to two columns), 980px (hub collapse), 900px (two-column sections stack; the fact strip becomes 2×N), 860px (nav links hide), 560px (course grid drops to one column), 520px and 480px (compact nav and type).

## Elevation & Depth

Surfaces are mostly flat and tonal: grey tiles on white, white panels on grey and a dark night band. Shadows appear for three jobs only: the floating glass nav, the open session detail panel (which lifts off the page as the selected card) and hover lift on short-course cards. Shadows are soft, ink-tinted and long, never hard or grey-black.

### Shadow Vocabulary
- **Floating nav** (`inset 0 0 0 1px rgba(255,255,255,.7), 0 1px 3px rgba(11,15,26,.08), 0 10px 30px -10px rgba(11,15,26,.28)`): the pill nav, deepening slightly on scroll.
- **Raised panel** (`0 0 0 1px rgba(11,15,26,.05), 0 2px 6px rgba(11,15,26,.06), 0 24px 60px -20px rgba(11,15,26,.30)`): the open session detail panel.
- **Card hover** (`0 16px 40px rgba(20,26,38,.09)`): short-course cards on hover, together with a 4px rise.

### Named Rules
**The Lift On Purpose Rule.** Surfaces rest flat. A shadow means "this floats" (nav), "this is selected" (panel) or "you can pick this up" (hover).

## Shapes

Corners are soft and friendly throughout and grow with the size of the element: 6px for buttons, 10–12px for tiles and session cards, 16px for panels and example blocks, 20px for short-course cards and 30px for the hub's core tile. Pills (999px) are used for the nav bar, the language toggle, badges and level tags. Small round gold dots mark list items. The dashed hairline is a recurring motif: the hub connectors and the "coming soon" frame both use it to suggest something in progress.

## Components

### Buttons
Tactile and friendly: solid fills, a slight press-in and an arrow that nudges forward.
- **Shape:** gently rounded (6px). Buttons in the nav are pills.
- **Primary (ink):** Desk Ink fill with white text, weight 500, padding 0.95rem × 1.4rem. Hover lifts to Lifted Ink.
- **Soft:** Desk Grey fill with ink text, used for secondary actions such as "Setup guide". Hover shows Tile Grey.
- **Gold:** Harvest Gold fill with ink text, reserved for a single standout action.
- **States:** `:active` scales to 0.97. A trailing "→" moves 3px right on hover. Focus shows a 2px sky outline offset by 3px.

### Badges & Tags
- **Interactive badge:** a gold pill with ink text (0.72rem, 700) with a small filled play-triangle SVG and the word "Interactive".
- **Level tag:** an uppercase pill (0.7rem, 700, 0.09em tracking) in its level's tint and ink pair.
- **Language toggle:** a pill with a hairline border and two segments. The active segment is ink-filled with white text and exposes `aria-pressed`.

### Cards / Containers
- **Session card:** a 206px Desk Grey card with 12px corners. It shows "Session N" in small Quiet Ink, a semibold title and a cue row. Hover tints it to Tile Grey, adds a 2px inset ink ring and lifts it 2px with a soft ink shadow. Pressing settles it back down (scale 0.98). Selected (`aria-pressed`) turns it ink-filled with a gold session label and a soft shadow. The lift applies to the button, never to the positioned list item.
- **Short-course card:** white with a hairline border and 20px corners. A Tile Grey media well holds a screenshot with rounded top corners. The body contains meta (duration and level), title, summary and stacked actions. Hover raises it 4px with a soft shadow and slightly zooms the image.
- **Info tiles:** Desk Grey tiles with 10–12px corners for roster rows, "Who should apply" items and the like. The total or summary tile inverts to ink.
- **Night panel:** the strong problem-statement example, with 16px corners on Night. It uses a gold status dot and a definition-list layout.
- **Callout:** the mentor banner and the Cohort 2 call to action, with a sky tint (14%), a sky border (40%) and 12–16px corners. A drawn icon sits in an ink circle, followed by the title, then a plain meta line for the key fact, then a supporting line.

### Navigation
A floating glass pill, sticky 0.75rem from the top. It is translucent white (82%) with an 18px backdrop blur and the floating-nav shadow, and becomes more translucent on scroll. It holds the logo (26px tall), small Quiet Ink links that darken on hover, the EN/FR toggle and a pill ink button. Under 860px the links hide. Under 520px the bar compacts to 3.25rem with an 18px logo.

### Session Hub (signature)
The core of the homepage. A 136px ink tile with 30px corners holds the course mark, labelled "Your problem / at the centre of every session". Eight session cards orbit it on a graph-paper backdrop of sky lines on 120px and 24px grids, with a radial fade at the edges. Dashed hairline connectors turn solid ink when their session is selected. Choosing a card opens a raised detail panel below. The panel is a 1fr/2fr grid with the story text, and any module links appear in gold- or sky-bordered module boxes. The hub does not animate.

## Do's and Don'ts

### Do:
- **Do** keep the learner's problem visually central wherever a surface explains the course.
- **Do** use Desk Ink for primary actions and Harvest Gold only for interactive or "act now" markers.
- **Do** set every heading in Instrument Sans semibold with negative tracking, and never end a heading with a period, in English or French.
- **Do** render "AMPLIFY" in the logo colours (A and I in ink; MPL and FY in sky) when it appears as display type.
- **Do** keep surfaces flat at rest and lift them only to signal floating, selected or pickable.
- **Do** check every layout with the French copy, which runs longer.
- **Do** respect `prefers-reduced-motion`: rises and transitions collapse to instant.
- **Do** draw icons as inline SVG (24px grid, 2px round stroke in `currentColor`, or a simple filled shape such as the play triangle), sized to about 1em.
- **Do** keep running text to about 65–75 characters per line and set counts in tabular numerals.

### Don't:
- **Don't** spread gold across decorative elements or large fills. Its scarcity is what makes it a signal.
- **Don't** add a second display typeface to the main site.
- **Don't** put an eyebrow or kicker label above a heading.
- **Don't** use emoji or unicode glyphs (▶ ★ 👥 ✓) as icons. Typographic arrows in link text are fine.
- **Don't** set text in Logo Sky. Use Deep Sky.
- **Don't** use hard, grey-black or stacked heavy shadows. Shadows stay ink-tinted and soft.
- **Don't** animate the session hub (no float, orbit or pointer parallax).
- **Don't** treat the session-module palette (cobalt `#2557d6` in `/course-1`, `/course-2`) or the short-course theme (Inter Tight, Noto Sans, IBM Plex Mono, teal-blue `#16638E`) as a licence to change the homepage. They are accepted sub-themes for app-like surfaces. New sub-pages should start from this system unless they extend an existing sub-theme.
