# Design Guidelines: Two Leaps, One Russia

## Design Approach

**Hybrid System with Era-Specific Theming**: Foundation based on clean, content-focused design systems (similar to Medium, Wikipedia) enhanced with distinctive dual-era visual identity. The site requires serious academic credibility while delivering immersive historical storytelling through contrasting aesthetics.

## Typography

**Primary Font**: Crimson Text (serif) for headings - evokes historical gravitas
**Secondary Font**: Inter (sans-serif) for body text - modern readability
**Data/Stats**: IBM Plex Mono for numbers and statistics

Hierarchy:
- Hero Titles: text-5xl to text-7xl, font-bold
- Section Headers: text-3xl to text-4xl, font-semibold
- Body Text: text-base to text-lg, leading-relaxed
- Captions: text-sm, tracking-wide

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 24 for consistent rhythm (p-4, gap-8, py-12, mt-16, py-24)

**Grid System**: 
- Full-width sections with max-w-7xl containers
- Comparison layouts: 2-column grid (lg:grid-cols-2) for Imperial vs Soviet juxtaposition
- Timeline: Single column max-w-4xl for chronological clarity
- Data sections: 3-4 column grids for infographics

## Era-Specific Visual Themes

**Imperial Russia Section**:
- Sepia-toned archival imagery
- Ornate decorative borders (subtle)
- Vintage document textures as backgrounds
- Muted earth tones as accents

**Soviet Era Section**:
- Bold red (#DC2626) and black contrast
- Constructivist geometric patterns
- Angular, industrial typography treatments
- High-contrast photography

**Neutral Zones** (Homepage intro, Sources):
- Clean white/off-white backgrounds
- Professional gray tones for neutrality

## Component Library

**Navigation**: Fixed top bar with era toggle (Imperial/Soviet switch), transparent on hero with blur backdrop, solid on scroll

**Homepage Split Hero**: 
- Full viewport height (min-h-screen)
- Vertical 50/50 split at desktop (lg:grid-cols-2)
- Left: Imperial sepia-toned industrial scene (railways, factories)
- Right: Soviet constructivist poster imagery (workers, machinery)
- Center divider with animated timeline marker
- Overlaid title spans both sections

**Timeline Component**:
- Vertical timeline with alternating left/right event cards
- Color-coded events (Imperial sepia vs Soviet red)
- Expandable detail panels on click
- Decade markers with horizontal dividers

**Comparison Module**:
- Side-by-side cards with equal height
- Headers: "Capitalism & Reform" vs "Plan & Dictatorship"
- Icon-based category rows (funding, methods, outcomes)
- Toggle view for mobile: tabbed interface

**Data Visualizations**:
- Line charts for industrial output trends
- Bar graphs for comparative statistics
- Human cost infographics with iconography
- Population impact flowcharts

**Presentation Hub Cards**:
- Grid of thematic sections (3 columns desktop)
- Each card features era-appropriate imagery
- Hover reveals detailed description
- Click expands to full narrative

**Sources Catalog**:
- Filterable bibliography grid
- Archive/document preview thumbnails
- Citation format display
- Download/reference links

## Images

**Hero Section**: Large split hero image required
- Left side: Sepia-toned photograph of Imperial-era railway construction or factory (1900s aesthetic)
- Right side: Soviet constructivist poster or heroic worker photography (1930s propaganda style)

**Section Images**:
- Timeline: Archival photographs for each major event
- Comparison: Industrial output imagery (factories, machinery) for both eras
- Price of Progress: Human-scale photography (workers, breadlines, etc.)
- Presentation Hub: Historical photographs paired with each theme

**Image Treatment**: 
- Imperial images: Sepia filter, vignette edges, subtle grain
- Soviet images: High contrast, saturated reds, sharp edges
- All images include captions with historical context and dates

## Interactions

**Minimal Animation Budget**:
- Timeline scroll reveals (fade in events)
- Comparison module stat counter animations
- Hero split-screen subtle parallax (very subtle)
- Chart data draw-in animations on view

**No animations** on: Navigation, buttons, general scrolling, text reveals

## Accessibility

- High contrast maintained in both era themes
- Text minimum 16px, maximum line width for readability
- ARIA labels for timeline events and interactive charts
- Keyboard navigation for all interactive elements
- Alt text for all historical images with proper context

## Mobile Adaptations

- Split hero stacks vertically (Imperial top, Soviet bottom)
- Timeline condenses to single-column center alignment
- Comparison module uses tabs instead of side-by-side
- Navigation collapses to hamburger with era selector in menu
- All sections use py-12 on mobile, py-20 to py-24 on desktop