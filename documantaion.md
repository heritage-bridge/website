# Heritage Bridge Project Structure

The original single-file page is now organized by responsibility while preserving the existing DOM IDs, CSS classes, hash routes, and browser-side behavior.

## Entry Point

- `index.html` contains the document metadata, third-party styles/scripts, local stylesheet reference, and application mount point.
- `assets/js/bootstrap.js` loads the HTML partials in their original order and starts the application after the DOM is complete.

## HTML Partials

- `partials/chrome.html` contains the loader, navigation, and opening application container.
- `partials/home.html` contains the home page and its feature sections.
- `partials/heritage.html` contains the heritage archive page.
- `partials/site.html` contains the dynamically populated site profile container.
- `partials/map.html` contains the map page.
- `partials/research.html` contains the research library page.
- `partials/academy.html` contains the academy and lesson containers.
- `partials/events.html` contains the events timeline page.
- `partials/works.html` contains the digital works page.
- `partials/story.html` contains the story page.
- `partials/team.html` contains the team page.
- `partials/footer.html` contains the shared footer and overlay container.

## CSS and JavaScript

- `assets/css/design-system.css` contains the complete design system and responsive styles.
- `assets/js/app.js` contains the data, renderers, interactions, maps, router, and existing application behavior.

There was no Java source in the original project. The executable code was browser JavaScript, so it was extracted as `assets/js/app.js` rather than renamed to Java classes, which would not run in this browser application.

## Running Locally

Because the page loads HTML partials with `fetch`, serve the project through a local HTTP server instead of opening `index.html` directly:

```text
python -m http.server 4173
```

Then open `http://localhost:4173/index.html`.
# Heritage Bridge — Project Technical Documentation

**Scope of this document:** everything below is derived directly from the single provided file, `index.html` (5,407 lines). No external repository, build system, backend, or version-control history was supplied, so those areas are explicitly marked *Not determinable from the provided project files.*

---

## 1. Executive Overview

**Project name:** Heritage Bridge (a placeholder/temporary brand name — the code centralizes it in one JS constant, `BRAND.name`, so it can be renamed without touching templates).

**Purpose:** A single-page website presenting a fictional/prototype digital-heritage initiative: documentation, 3D preservation, research publishing, an open educational "Academy," an events timeline, and a showcase of games/apps/web projects — all themed around real-world heritage sites in Iraq and Armenia.

**Problem it addresses (as designed):** Gives cultural-heritage documentation work (photogrammetry, research papers, fieldwork, teaching material) a unified, premium editorial presentation instead of a generic museum-website template, per the accompanying design brief (Document 2).

**Target users:** Prospective partners, researchers, students, and the project's own team — anyone evaluating or browsing the initiative's documented sites, publications, courses, and media.

**Main features:**
- Curated homepage (featured sites, research, projects, events, team)
- Filterable **Heritage Archive** of documented sites
- Individual **Heritage Site** case-study pages with embedded Sketchfab 3D viewers
- **Interactive Leaflet map** (Iraq & Armenia) with custom "point-cloud" markers
- **Research Library** with search/filter and a reader overlay
- **Academy**: a structured course (modules → lessons → quizzes → notes) in the style of The Odin Project
- **Events** vertical timeline
- **Digital Works** showcase (Games / Applications / Web Projects) with case studies
- **Our Story**, **Team**, and **Partners** pages
- Light/Dark theme toggle, hash-based client-side routing, entrance animations

**Main technologies:** Vanilla HTML/CSS/JavaScript, Tailwind CSS (via CDN browser build), Leaflet.js (maps), Google Fonts (Fraunces + Inter + JetBrains Mono), Sketchfab (embedded 3D viewer, external), Pexels (hotlinked stock imagery), CARTO basemap tiles, YouTube embed.

**Overall architecture:** A **single static HTML file** functioning as a client-side single-page application (SPA). All "pages" are `<section>` elements toggled by a hand-rolled hash router; all content (sites, research, events, team, course material) is hard-coded in in-page JavaScript arrays/objects; there is no build step, no server, no database, and no API layer.

**Current project status:** Functionally complete front-end **prototype/demo**. All data is fictional placeholder content (explicitly a temporary brand and illustrative dataset per Document 2's brief). No backend, authentication, persistence (besides `localStorage` for theme/notes/lesson-progress), or automated tests are present.

---

## 2. Project Purpose & Objectives

Per the design brief supplied (Document 2, "Heritage Bridge — Master Website Design Prompt"), the objective was to design a **premium, non-generic digital heritage institution website** with:

- An "Editorial + Architectural + Cinematic" art direction, avoiding stereotypical museum/heritage design clichés (beige, gold, ornamental fonts).
- A specific earth/digital color palette and both light and dark modes.
- A modular navigation and content system so sections (countries, courses, projects) can grow later.
- Sketchfab-based 3D integration rather than a custom-built viewer.
- Desktop-first responsive priority.

`index.html` is the implementation of that brief: a working, browsable prototype that fulfils the structural requirements (hero, mega-menu navigation, archive, map, research library, academy, events timeline, works showcase, story/team/partners, footer) using placeholder/fictional data.

---

## 3. Technology Stack

| Technology | Version / Source | Purpose | Where Used | Notes |
|---|---|---|---|---|
| HTML5 | — | Document structure / SPA shell | Whole file | Single file, no templating engine |
| CSS3 (custom) | — | Design system, animations, responsive layout | `<style>` block, lines 20–4064 | ~4,000 lines of hand-written CSS using CSS custom properties |
| Tailwind CSS | `@tailwindcss/browser@4` via `cdn.jsdelivr.net` | Utility classes available in markup | Loaded globally via `<script>` in `<head>` | Browser/JIT build — compiles in the browser at runtime; **not used for the core design system**, which is bespoke CSS |
| Leaflet.js | `1.9.4` via `unpkg.com` | Interactive map rendering | Heritage Map page, homepage map preview | Loaded via CDN `<script>`/`<link>` |
| Google Fonts | Fraunces (variable), Inter, JetBrains Mono | Typography (serif editorial headings / sans body / mono labels) | Global CSS `font-family` rules | Loaded via `<link>` in `<head>` |
| Sketchfab (embed) | External iframe | 3D model viewer | Heritage Site pages (`#s-3d` section) | Uses public Sketchfab model IDs baked into site data (`sketchfab` field); not a self-hosted viewer, per design-brief requirement (§13) |
| Pexels images | Hotlinked via `PX(id, w)` helper | All photography | Every image `src` in the app | Not self-hosted; relies on `images.pexels.com` remaining available |
| CARTO basemap tiles | `basemaps.cartocdn.com` (light/dark "nolabels") | Map tile layer | Leaflet maps, theme-aware | Switched by `tileUrl()` based on current theme |
| YouTube (embed) | `youtube.com/embed/...` | Documentation film playback | One example on the Al-Saa'a Church site page | Loaded on click, not on page load |
| Browser `localStorage` | Native Web API | Client-side persistence | Theme preference (`hb_theme`), Academy lesson progress (`hb_progress`, implied), per-lesson notes (`hb_note_<lessonId>`) | No server-side persistence exists |
| `IntersectionObserver` | Native Web API | Scroll-reveal animations, table-of-contents active-state tracking | `observeReveals()`, site-page TOC tracker | |
| `requestAnimationFrame` | Native Web API | Loader animation, hero point-cloud canvas animation, animated stat counters | Loader IIFE, `heroCloud()` IIFE, `countUp()` | |
| `<canvas>` 2D API | Native | Loader "point-cloud reconstruction" animation and hero rotating point-cloud graphic | `#loaderCanvas`, `#heroCloud` | |

**Dependency/compatibility considerations:**
- All third-party libraries are loaded from public CDNs at runtime with no version pinning beyond what's in the URL (Leaflet is pinned to 1.9.4; Tailwind's `@4` browser build could receive breaking point-releases silently since it is not pinned to an exact patch version).
- The app requires network access to `cdn.jsdelivr.net`, `unpkg.com`, `fonts.googleapis.com`/`fonts.gstatic.com`, `images.pexels.com`, `basemaps.cartocdn.com`, `sketchfab.com`, and `youtube.com` to render fully. There is no offline/self-hosted fallback for any of these.

---

## 4. Project Structure

The entire deliverable is **one file**:

```
index.html          (5,407 lines — the complete application)
├── <head>                       Meta tags, favicon (inline SVG data URI), CDN <script>/<link> tags, <style> block
├── <style> ... </style>          (lines 20–4064)   — full CSS design system
├── <body>
│   ├── #loader                  (4070–4090)  Point-cloud loading screen (canvas animation)
│   ├── <header id="nav">        (4092–4128)  Site header: logo, nav links (populated by JS), theme toggle, burger menu
│   ├── <main id="app">          (4130–4923)  All "pages" as sibling <section class="page" id="page-*">:
│   │     ├── #page-home         Hero + featured content blocks
│   │     ├── #page-heritage     Filterable archive grid
│   │     ├── #page-site         Single-site case-study (rendered dynamically into #siteView)
│   │     ├── #page-map          Interactive Leaflet map
│   │     ├── #page-research     Research Library (filters + list + featured item)
│   │     ├── #page-academy      Academy home (#academyHome) + lesson view (#lessonView)
│   │     ├── #page-events       Vertical timeline (#timeline)
│   │     ├── #page-works        Digital Works grid (#worksHome) + case study view (#caseView)
│   │     ├── #page-story        Our Story, milestones, partners
│   │     └── #page-team         Team grid
│   ├── #overlay / #ovPanel      (4924–4927)  Modal overlay used for event & research detail popups
│   └── <script> ... </script>    (4928–5406)  All application logic, data, and rendering functions
```

There is no separate CSS file, no separate JS file, no images folder, no `package.json`, no build tooling, no `.git` directory, and no server-side code in the provided upload. Everything — design tokens, content data, and behavior — lives inside this one HTML document.

### Directory/file role summary

| Item | Role | Should it normally be modified? |
|---|---|---|
| `<style>` block | Design system: CSS variables, typography, component classes, responsive rules, animations | Yes, deliberately — this is the design system a developer edits to restyle the site |
| `const BRAND` | Single source of truth for the project name | Yes — this is the intended rename point (see §21) |
| `const SITES`, `RESEARCH`, `WORKS`, `EVENTS`, `TEAM`, `MILESTONES`, `COURSE`, `NAV` | All content data | Yes — these arrays are the de facto "CMS." Editing them is the primary way to add/change content |
| Render functions (`renderHome`, `renderArchive`, `renderSite`, `renderLib`, `renderLesson`, `renderTimeline`, `renderWorks`, `renderCase`, `initPreviewMap`, `initMainMap`) | Templating layer that turns data into DOM via template literals | Modify carefully — many are string-concatenation HTML generators; a change to a data shape must be mirrored here |
| `route()` and `addEventListener('hashchange', route)` | Client-side router | Central; touching this affects every page transition |
| Inline favicon (`data:image/svg+xml,...` in `<head>`) | Generated site icon | Cosmetic; can be swapped for a real favicon file if the project moves off single-file delivery |

No build/output/generated files exist to distinguish, since there is no build step.

---

## 5. System Architecture

Heritage Bridge is a **client-only, hash-routed SPA rendered from static template literals** — there is no framework (no React/Vue/etc.) and no virtual DOM; every "page" is produced by directly setting `element.innerHTML` from JavaScript template strings.

```
Browser loads index.html
        ↓
<head> CDN resources load (Tailwind runtime, fonts, Leaflet)
        ↓
Inline <style> applies design system (CSS variables per light/dark theme)
        ↓
<script> executes top-to-bottom:
   1. BRAND, PX(), esc() helpers defined
   2. Content data constants defined (SITES, RESEARCH, WORKS, EVENTS, TEAM, MILESTONES, COURSE, NAV)
   3. NAV is rendered into the header's mega-menu
   4. Theme is restored from localStorage / OS preference
   5. Loader canvas animation runs, then reveals #app and triggers countUp()
   6. Hero point-cloud canvas animation starts
   7. Render-helper functions defined (siteCard, statusTag, fmtDate, etc.)
   8. Home page content rendered immediately (renderHome IIFE)
   9. Archive/Research filter state objects (H, R) initialized and bound to filter inputs
  10. route() defined, bound to 'hashchange', and invoked once on load
        ↓
route() reads location.hash, decides which .page section is 'active',
   calls the matching render*() function, updates nav highlight state,
   scrolls to top, (re)initializes maps if needed, and observes new
   elements for scroll-reveal animation
        ↓
User interaction (clicks, filter inputs, theme toggle) triggers either
   a hash change (→ route() re-runs) or a direct DOM re-render
   (e.g. renderArchive(), renderLib()) without a full page reload
```

**Major components and responsibilities:**

| Component | Responsibility |
|---|---|
| Router (`route()`) | Parses `location.hash` into `page`, sub-segment, and query params; shows/hides page sections; triggers per-page render calls; manages nav active-state and compact-header behavior |
| Data layer (`SITES`, `RESEARCH`, `WORKS`, `EVENTS`, `TEAM`, `MILESTONES`, `COURSE`) | In-memory "database" — plain JS arrays/objects, no persistence, no schema validation |
| Render functions | Pure(ish) functions that take data + filter state and produce HTML strings via template literals, then inject them with `innerHTML` |
| Filter/search state objects (`H` for Heritage, `R` for Research) | Mutable objects holding current filter values; mutated by input event listeners, then trigger a re-render |
| Map subsystem (`initPreviewMap`, `initMainMap`, `markerFor`, `updateTiles`) | Wraps Leaflet: creates map instances lazily, builds custom point-cloud-styled markers, swaps tile URLs on theme change |
| Overlay subsystem (`openOverlay`, `closeOverlay`) | Generic modal used for event detail and research-item detail views |
| Academy subsystem (`renderPathCard`, `renderLesson`, `showAcademyHome`, `ALL_LESSONS`) | Flattens the nested `COURSE.modules[].lessons[]` structure, renders lesson content, quiz, notes (via `localStorage`), and progress tracking |
| Theme subsystem | Reads/writes `data-theme` attribute on `<html>`, persists to `localStorage('hb_theme')`, defaults to OS `prefers-color-scheme` |
| Loader / hero canvas | Purely decorative canvas animations (`<canvas id="loaderCanvas">`, `<canvas id="heroCloud">`) with no data dependency |

**Data flow:** Entirely one-directional and synchronous within the browser: `data constant → render function → innerHTML string → DOM`. There is no network request for content data (only for images/fonts/map tiles/embeds), no API calls, and no external database.

**External integrations:** Sketchfab (3D model iframe embeds, keyed by a `sketchfab` model ID per site), Pexels (image hotlinking), CARTO (map tiles), Google Fonts, YouTube (one embedded video), Leaflet CDN, Tailwind CDN.

**User interaction flow (example — browsing a heritage site):**
```
User clicks a site card on Home or Heritage Archive
        ↓
Anchor href="#/site/<id>" changes location.hash
        ↓
hashchange event fires → route() runs
        ↓
route() detects page === 'site' → calls renderSite(seg[1])
        ↓
renderSite() looks up the site by id in SITES, builds a large HTML
   string (hero, story, optional 3D viewer iframe, documentation
   method steps, technical record table, optional gallery/video,
   related research, related sites) and injects it into #siteView
        ↓
Table-of-contents links wire up smooth-scroll handlers;
   IntersectionObserver tracks which section is in view
        ↓
observeReveals() registers new .reveal elements for entrance animation
```

---

## 6. Component & Module Documentation

Because this is a single script with no module system (no ES modules, no bundler), "components" below are the discrete functions/IIFEs in the `<script>` block, in the order they appear.

| Name | Type | Purpose | Inputs | Outputs / Side effects |
|---|---|---|---|---|
| `BRAND` | constant object | Central brand name | — | Written into `.brand-name` elements and `document.title` |
| `PX(id, w=1400)` | helper function | Builds a Pexels image URL from a photo ID and width | `id`, optional `w` | Returns a URL string |
| `esc(s)` | helper function | HTML-escapes a string (`& < > "`) | any value (stringified) | Returns escaped string; used everywhere user-visible data is interpolated into `innerHTML` to avoid breaking markup |
| `SITES` | data array | 13 heritage site records (Iraq & Armenia) | — | Consumed by archive, map, site pages, research cross-references |
| `siteById(id)` | helper | Look up a site record by id | `id` | Returns a `SITES` entry or `undefined` |
| `RESEARCH` | data array | 8 publication records | — | Consumed by Research Library, site pages, homepage |
| `WORKS` | data array | 6 "Digital Works" (Games/Applications/Web Projects) records | — | Consumed by Works page, homepage |
| `EVENTS` | data array | 8 timeline events | — | Consumed by Events timeline, homepage, overlay |
| `TEAM` | data array | 6 team member records | — | Consumed by Team page, homepage |
| `MILESTONES` | data array | 5 yearly milestones | — | Consumed by Our Story page |
| `COURSE` | nested object | One course (`Digital Heritage Documentation`) with 6 modules, each with 2 lessons (12 lessons total), each lesson containing prose, a task, a quiz, and resources | — | Consumed by Academy |
| `ALL_LESSONS` | derived array | Flattened list of every lesson across all modules, each tagged with its module index/title | `COURSE` | Used for "next/previous lesson" navigation in `renderLesson` |
| `NAV` | data array | 5 mega-menu sections (Explore/Research/Learn/Experiences/About), each with sub-items | — | Rendered once into `#navLinks` at load time |
| Theme block | script | Restores saved/OS theme, wires `#themeToggle` click handler | `localStorage`, `matchMedia` | Sets `html[data-theme]`, persists to `localStorage`, calls `updateTiles()` |
| `loader()` IIFE | animation | Draws an animated "point-cloud reconstruction" on `#loaderCanvas`, updates `#loaderMeta` text, then fades/removes `#loader` and calls `onLoaded()` | — | DOM/canvas side effects only |
| `onLoaded()` | function | Triggers the stat counter animation once loading completes | — | Calls `countUp()` |
| `heroCloud()` IIFE | animation | Renders a slowly rotating decorative point-cloud graphic on the homepage hero `<canvas id="heroCloud">` | — | Continuous `requestAnimationFrame` loop |
| `countUp()` | function | Animates any `[data-count]` element from 0 to its target number with an ease-out cubic curve | — | Mutates `textContent` of matched elements; guarded by a `counted` flag so it only runs once |
| Footer watermark IIFE | script | Sets footer watermark text to the first word of `BRAND.name` | `BRAND` | DOM mutation |
| `observeReveals(scope=document)` | function | Registers all not-yet-visible `.reveal`/`.tl-item` elements in `scope` with a shared `IntersectionObserver` (`io`) so they animate in on scroll | `scope` | Adds elements to `io` |
| `renderHome()` IIFE | render | Builds all homepage sub-sections: featured sites grid, "Our Work" list, featured research, featured projects, event previews, team preview | `SITES`, `RESEARCH`, `WORKS`, `EVENTS`, `TEAM` | Sets `innerHTML` of `#featGrid`, `#workList`, `#homeResearch`, `#homeProjects`, `#homeEvents`, `#homeTeam` |
| `fmtDate(d)` | helper | Formats a `"YYYY-MM"` string into `"Mon YYYY"` | `d` | Returns formatted string |
| `statusTag(s)` / `siteCard(s, cls, i)` | render helpers | Produce a status badge and a site preview card, respectively | site object, css class, index | Return HTML strings |
| `H` | state object | Current Heritage Archive filter values (`q, country, type, period, status, d3, gal`) | — | Mutated by filter input listeners |
| `initArchive()` IIFE | setup | Populates the type/period `<select>` options from `SITES`, binds all filter inputs to update `H` and call `renderArchive()` | `SITES` | DOM listeners attached |
| `renderArchive()` | render | Filters `SITES` against `H`, updates the result count, renders the archive grid (or an "empty" state) | `H`, `SITES` | Sets `#hCount` and `#archGrid` innerHTML |
| `renderSite(id)` | render | Builds the entire single-site case-study page (hero, TOC, story, 3D viewer, documentation method, technical record, gallery, video, related research, related sites) | `id` (from route) | Sets `#siteView` innerHTML; attaches TOC smooth-scroll handlers and an `IntersectionObserver` for active-section tracking |
| `R` | state object | Current Research Library filter/sort values | — | Mutated by filter input listeners |
| `initLib()` IIFE | setup | Populates type/topic/site `<select>` options from `RESEARCH`/`SITES`, binds filters | `RESEARCH`, `SITES` | DOM listeners attached |
| `renderLib()` | render | Filters and sorts `RESEARCH`, renders a "featured" item plus a list | `R`, `RESEARCH` | Sets `#rCount`, `#libFeature`, `#libList` |
| `openResearch(id)` | render | Opens the generic overlay with a single research item's full detail | `id` | Calls `openOverlay()` |
| `markerFor(s)` | map helper | Builds a Leaflet marker with a custom "point-cloud" divIcon and a tooltip for a given site | site object | Returns a `L.Marker` |
| `initPreviewMap()` / `initMainMap()` | map setup | Lazily create the homepage preview map and the full Map page's Leaflet map, add tile layer + markers | — | Creates/reuses module-scoped `mapPrev`/`mapMain` Leaflet instances |
| `renderMapSide()` / `setMapCountry(c)` | map render | Render the country/site list sidebar on the Map page; fly the map to bounds for a selected country | `mapCountry`, `SITES` | DOM + Leaflet `flyToBounds` |
| `updateTiles()` | map helper | Re-applies the correct light/dark tile URL to both maps when the theme changes | — | Calls `tilePrev.setUrl()`/`tileMain.setUrl()` |
| `renderPathCard()` | render | Renders the Academy's single learning-path card with per-module progress bars | `COURSE`, `progress` (localStorage-derived) | Sets `#pathCard` innerHTML |
| `renderLesson(id)` | render | Renders a full lesson view: content paragraphs, task, quiz (interactive radio + feedback), mark-done button, resources sidebar, notes textarea (persisted per-lesson to `localStorage`) | `id`, `ALL_LESSONS` | Sets `#lessonView` innerHTML; attaches quiz/notes/mark-done listeners |
| `showAcademyHome()` | render | Toggles visibility between the Academy overview and lesson view | — | Shows `#academyHome`, hides `#lessonView`, re-renders the path card |
| `renderTimeline()` IIFE | render | Groups `EVENTS` by year and renders the vertical timeline | `EVENTS` | Sets `#timeline` innerHTML |
| `openEvent(id)` | render | Opens the overlay with a single event's detail, including two "related" images pulled from adjacent `EVENTS` entries | `id`, `EVENTS` | Calls `openOverlay()` |
| `renderWorks(tab)` | render | Renders the Digital Works tab bar and filtered grid | `tab`, `WORKS` | Sets `#worksTabs`, `#worksGrid` |
| `renderCase(id)` | render | Renders a single Digital Work's full case study | `id`, `WORKS` | Sets `#caseView` innerHTML |
| `openOverlay(html)` / `closeOverlay()` | modal control | Show/hide the shared `#overlay`/`#ovPanel` modal, lock/unlock page scroll | HTML string | DOM class toggles |
| `route()` | router | Central hash-based router (see §5, §9 for full flow) | `location.hash` | Toggles page visibility, calls the appropriate render function(s), updates nav state, scroll position, and map initialization |

**Error handling across components:** None of the above functions perform explicit error handling (no `try/catch`, no user-facing error states beyond the "No sites/research match these filters" empty states). A malformed or missing `id` in the URL (e.g., `#/site/does-not-exist`) is handled defensively in `renderSite` only, via `siteById(id) || SITES[0]` (falls back to the first site rather than showing an error). Other lookups (`renderCase`, `openEvent`, `openResearch`) use `Array.find()` without a fallback and would throw a runtime error (`Cannot read properties of undefined`) if given an unknown id — see §14 and §15.

---

## 7. Data Flow

There is no server round-trip for content; all "data flow" is in-memory JavaScript. The general shape for any content type:

```
Static data constant (e.g. SITES[])
        ↓
Optional filter/sort state object (H or R) applied via Array.filter()/sort()
        ↓
Render function maps filtered records → HTML template-literal strings
   (interpolating fields, always passed through esc() for text content)
        ↓
innerHTML assignment → browser parses and displays markup
        ↓
Post-render wiring: event listeners (clicks, TOC scroll), 
   IntersectionObserver registration for reveal animation
```

### Key in-memory data structures (JS object shapes, inferred from the data literals — no formal schema/types exist)

**Site record** (`SITES[]`):
```
{
  id, name, alt?, location, country, type, period, year?,
  status: 'Documented' | 'In progress' | 'Planned',
  has3d: boolean, gallery: boolean, video?: boolean,
  lat, lng, img, imgs: string[],
  short, story: string[],
  sketchfab?: string,          // Sketchfab model id
  tech: { [label]: value },    // free-form key/value technical metadata
  research: string[]           // ids referencing RESEARCH
}
```

**Research record** (`RESEARCH[]`):
```
{ id, title, type, authors, date: 'YYYY-MM', country, site: siteId|'',
  topic, tags: string[], img, abstract }
```

**Work record** (`WORKS[]`):
```
{ id, cat: 'Games'|'Applications'|'Web Projects', name, type, tech, img, imgs,
  short, overview, why, problem, concept, features: string[], results,
  links: { demo?, github?, web? } }
```

**Event record** (`EVENTS[]`):
```
{ id, year, date, name, location, type, img, short, detail }
```

**Team record** (`TEAM[]`):
```
{ name, role, inst, spec, skills: string[], img, links: {[label]:url}, story }
```

**Course structure** (`COURSE`):
```
{ id, title, img, modules: [
    { title, lessons: [
        { id, title, dur, p: string[], task, 
          quiz: { q, opts: string[], a: index },
          res: [ [type, label], ... ] }
    ]}
]}
```

There is **no database** in the traditional sense (no tables, no primary/foreign key constraints enforced by any engine) — cross-references between records (e.g., a site's `research: ['r1','r3']` array referencing `RESEARCH` ids, or a research item's `site: 'al-saa-church'` referencing `SITES`) are informal string-id links resolved at render time via `Array.find()`/`Array.filter()`, with no referential-integrity checking.

**Example workflow — Research filtering:**
```
Input: user types in #rSearch or changes a <select>
   ↓
Processing: bound listener updates R.q/R.type/R.country/R.site/R.topic
   ↓
renderLib() filters RESEARCH against R, sorts by R.sort
   ↓
Transformation: filtered list mapped to HTML card/row markup
   ↓
Output: #rCount, #libFeature, #libList updated in the DOM
```

---

## 8. Feature Documentation

### 8.1 Homepage
- **Purpose:** Curated entry point; not an exhaustive index.
- **How it works:** `renderHome()` picks a fixed, hand-selected subset of ids from each data array (e.g., 5 specific site ids for the featured grid, 4 specific research ids) and renders them into designated containers.
- **Files/components:** `#page-home` section markup (lines 4133–4389), `renderHome()`.
- **Possible failure cases:** If a hard-coded id referenced by `renderHome()` (e.g., `'al-saa-church'`) is ever removed from `SITES`, `siteById()` returns `undefined` and the subsequent template literal will render `undefined` values into the markup (not throw, since `esc(undefined)` stringifies to `"undefined"`).
- **Extending:** Add new entries to the underlying data arrays; update the hard-coded id lists inside `renderHome()` to feature them.

### 8.2 Heritage Archive (`#page-heritage`)
- **Purpose:** Browse/filter all documented sites.
- **How it works:** `initArchive()` populates dropdown options dynamically from `SITES` (types, periods) and binds `input` events on search/selects/toggle-chips to mutate the `H` state object, then calls `renderArchive()`. Filtering is done client-side with `Array.filter()` combining free-text search (name/location/type/period/short description) with dropdown/toggle constraints.
- **User interaction:** Text search, 4 dropdown filters (country, type, period, status), 2 toggle chips (3D available, Gallery).
- **Failure cases:** No matches → explicit "No sites match these filters" empty state (handled).
- **Extending:** Add a new `SITES` entry with all required fields; new `type`/`period` values automatically appear as filter options because they're derived via `[...new Set(...)]`.

### 8.3 Heritage Site page (`#page-site`)
- **Purpose:** Full case-study for one site.
- **How it works:** `renderSite(id)` builds hero, sticky table-of-contents, story, conditionally-rendered 3D viewer (`s.has3d`), documentation methodology (5 static steps), technical record table (from `s.tech`), conditionally-rendered gallery/video, cross-referenced research, and related sites (same country or type).
- **Backend logic:** None — pure client-side lookup/render.
- **Data involved:** One `SITES` entry, plus derived `RESEARCH` entries where `research.site === id`, plus up to 3 related `SITES` entries.
- **Failure cases:** Unknown id silently falls back to `SITES[0]` (see §6, §14).
- **Extending:** New `tech` keys automatically appear as rows in the technical-record table (it iterates `Object.entries(s.tech)`), so no template change is needed for new metadata fields.

### 8.4 Interactive Heritage Map (`#page-map`, plus homepage preview)
- **Purpose:** Geospatial browsing of sites in Iraq and Armenia.
- **How it works:** Leaflet map with a custom `pc-marker` (point-cloud-styled) divIcon per site; markers are theme-aware via CARTO's light/dark "nolabels" tile sets; clicking a marker navigates to that site's page; a country selector flies the viewport to bounds.
- **Failure cases:** If Leaflet/CDN fails to load, the map containers remain empty with no explicit error message to the user (unhandled).
- **Extending:** New countries: add sites with new `country` values; `mapCountries`/`renderMapSide` derive country groupings from `SITES` at render time, so most map logic scales automatically. Country-specific colored markers rely on a CSS class named after `s.country.toLowerCase()` (see `.pc-marker.iraq`/`.pc-marker.armenia` — a new country would need a matching CSS rule added, or would fall back to the default marker style).

### 8.5 Research Library (`#page-research`)
- **Purpose:** Searchable/filterable publication archive with an overlay reader.
- **How it works:** Analogous to the Heritage Archive filtering pattern, plus a sort control (`newest`/`oldest`/`A–Z`) and a "featured" (first result) + "list" (remaining results) split layout.
- **Failure cases:** Empty-state handled ("No research matches these filters").
- **Extending:** New `type`/`topic` filter values are automatically derived from the data, same pattern as Heritage Archive.

### 8.6 Academy (`#page-academy`)
- **Purpose:** Structured open course ("Digital Heritage Documentation" — 6 modules, 12 lessons).
- **How it works:** `renderPathCard()` shows overall/per-module progress computed from a `progress` set (persisted lesson-completion ids, expected in `localStorage`, referenced but its initialization was not located within the excerpted sections reviewed — see note below). `renderLesson(id)` renders one lesson's content, an inline multiple-choice quiz with immediate right/wrong feedback (`quizMsg`), a "mark complete" toggle button, a resources sidebar, and a free-text notes `<textarea>` that auto-loads/saves to `localStorage` under a per-lesson key (`hb_note_<lessonId>`).
- **User interaction:** Answer quiz → instant feedback; toggle lesson completion; type notes (persisted on the fly); navigate next/previous lesson via `ALL_LESSONS`.
- **Data involved:** `COURSE`, `ALL_LESSONS`.
- **Failure cases:** `renderLesson(undefined)` (e.g., visiting `#/academy/lesson/` with no id) would fail to find a match in `ALL_LESSONS.find(...)` and throw at the point the code dereferences the lesson object — unhandled. *Note: the exact declaration/initialization of the `progress` variable referenced by `renderPathCard`/`renderLesson` was not captured in the reviewed excerpt of lines 5300–5384; its precise mechanics (e.g., `Set` vs. array, exact localStorage key name) are* **Not determinable with full certainty from the excerpt reviewed** — a maintainer should grep the file directly for `progress` and `hb_progress` to confirm.
- **Extending:** Add a module/lesson object to `COURSE.modules[]`; `ALL_LESSONS` is derived automatically via `flatMap`, so navigation/progress tracking picks up new lessons without further changes, provided the lesson object matches the existing shape.

### 8.7 Events (`#page-events`)
- **Purpose:** Vertical timeline of fieldwork, awards, conferences, hackathons.
- **How it works:** `renderTimeline()` groups `EVENTS` by year (preserving `EVENTS` array order, so events should be listed newest-first in the source data for the timeline to read chronologically-descending), rendering a year marker followed by that year's events. Clicking an event opens the shared overlay via `openEvent(id)`.
- **Failure cases:** `openEvent()` uses `EVENTS.find()` without a fallback — an invalid id throws.
- **Extending:** Add a new `EVENTS` entry.

### 8.8 Digital Works (`#page-works`)
- **Purpose:** Showcase of Games / Applications / Web Projects with tabbed filtering and full case studies.
- **How it works:** `renderWorks(tab)` filters `WORKS` by category tab; `renderCase(id)` renders a single project's full case-study narrative (overview, why, problem, concept, features, results, links).
- **Failure cases:** `renderCase()` uses `WORKS.find()` without a fallback — invalid id throws.
- **Extending:** Add a new `WORKS` entry with a `cat` matching one of the three existing categories (or a new category, which would require adding a corresponding tab-rendering rule if tabs are not auto-derived — confirm against `renderWorks` source before relying on this).

### 8.9 Our Story (`#page-story`)
- **Purpose:** Narrative "About" page with milestones and (optional) partners section.
- **How it works:** Mostly static markup plus a rendered `#milestones` list driven by the `MILESTONES` array; a `#partners` anchor section supports deep-linking (`#/story#partners`).

### 8.10 Team (`#page-team`)
- **Purpose:** Full team roster with personal stories.
- **How it works:** `#teamFull` rendered from `TEAM` (rendering function not shown in the excerpted line ranges but implied by the `team-full` container and the `TEAM` data array's `story` field, matching the homepage's `renderHome` pattern).

### 8.11 Theme toggle
- **Purpose:** Light/Dark mode switch.
- **How it works:** Toggles `html[data-theme]`, persists to `localStorage('hb_theme')`, defaults to `prefers-color-scheme` media query on first visit; also triggers `updateTiles()` to swap map tile URLs.

---

## 9. User Workflows

### Workflow: Browsing from Home to a Heritage Site's 3D model
1. User loads `index.html` → loader animation plays → `#app` revealed.
2. User clicks a featured site card on the homepage.
3. Browser navigates to `#/site/<id>`; `hashchange` fires.
4. `route()` parses the path, calls `renderSite(id)`.
5. `renderSite()` builds and injects the full case-study page, including (if `has3d`) a Sketchfab `<iframe>` pointed at `https://sketchfab.com/models/<sketchfab-id>/embed?...`.
6. User scrolls or clicks a table-of-contents link to jump to "Explore in 3D"; the embedded Sketchfab viewer loads and is fully interactive (rotate/zoom) independent of the host page's JS.

### Workflow: Filtering the Research Library and opening a paper
1. User navigates to `#/research`.
2. `route()` calls `renderLib()` (and, if URL query params `type`/`site` are present, pre-sets those filters first — this supports deep links like `#/research?type=Report`).
3. User types in the search box or changes a filter `<select>`; the bound `input` listener updates `R` and calls `renderLib()` again.
4. `renderLib()` re-filters/sorts `RESEARCH`, re-renders the featured item and list.
5. User clicks a research row → `openResearch(id)` builds detail HTML and calls `openOverlay()`, which reveals the shared modal and locks page scroll.
6. User closes the modal (`closeOverlay()`), which unlocks scroll.

### Workflow: Completing an Academy lesson
1. User navigates to `#/academy` → `showAcademyHome()` renders the path card with progress bars.
2. User clicks into a lesson → `#/academy/lesson/<id>` → `route()` calls `renderLesson(id)`.
3. Lesson content, task, and quiz render. User selects a quiz answer → immediate correct/incorrect feedback shown in `#quizMsg`.
4. User optionally types notes → auto-saved to `localStorage` per lesson id as they type (implementation detail: the textarea's saved value is read from `localStorage.getItem('hb_note_' + l.id)` at render time; the save-on-input handler itself was not located in the excerpted script portions — confirm in source before relying on real-time save behavior).
5. User clicks "Mark lesson as complete" → toggles completion state, updates progress bar back on the Academy home / path card the next time it renders.

---

## 10. Configuration

There is no external configuration file, `.env`, or build-time config in the provided project — all configuration is inline in the HTML/JS.

| "Configuration" item | Location | Notes |
|---|---|---|
| Brand name | `const BRAND = { name: 'Heritage Bridge' }` (script, near top) | Single point of change for the site's displayed name |
| Color tokens | CSS `:root { --forest, --olive, --earth, --sand, --lime, --clay, ... }` | Matches the palette specified in Document 2 §04 |
| Light/Dark theme variables | `html[data-theme="light"] { ... }` / `html[data-theme="dark"] { ... }` | Full separate variable sets, not a simple inversion, per Document 2 §05 |
| Nav height, radius, easing curves | CSS `:root` custom properties (`--nav-h`, `--radius`, `--ease`, `--ease-out`) | |
| Map default view | `initPreviewMap()`/`initMainMap()`: `.setView([38.6, 44.2], 5)` | Hard-coded center/zoom over the Iraq–Armenia region |
| Map tile URLs | `tileUrl()` function, `basemaps.cartocdn.com` | Theme-dependent |
| Sketchfab embed URL pattern | `renderSite()`: `` `https://sketchfab.com/models/${s.sketchfab}/embed?autostart=0&ui_theme=dark&ui_infos=0&ui_watermark=0&...` `` | Query params control the embedded viewer's chrome |
| YouTube video ID | Hard-coded (`ScMzIvxBSi4`) inside one site's video section markup | Not parameterized per-site; only wired for one example |
| `localStorage` keys | `hb_theme`, `hb_note_<lessonId>`, and (implied) a progress key | No key-naming constant/config object centralizes these |

**Credentials/secrets:** None found. No API keys, tokens, or passwords appear anywhere in the file — all third-party services used (Pexels image hotlinking, Sketchfab embeds, CARTO tiles, Google Fonts, YouTube embed, Leaflet/Tailwind CDN scripts) are consumed as public, keyless endpoints/embeds.

---

## 11. Installation & Setup

**Prerequisites:** A modern web browser with JavaScript enabled and internet access (for the CDN-hosted fonts, Tailwind runtime, Leaflet, Pexels images, map tiles, and Sketchfab/YouTube embeds). No Node.js, package manager, or server runtime is required to *view* the file as-is.

**Steps to run locally:**
1. Ensure `index.html` is on disk.
2. Open it directly in a browser (double-click, or `file://` URL), **or**, to avoid potential `file://` restrictions on some browsers/features, serve it via any static file server, e.g.:
   ```bash
   npx serve .
   # or
   python3 -m http.server 8000
   ```
3. Navigate to the served URL (e.g., `http://localhost:8000/index.html`).

**Build:** Not applicable — there is no build step, bundler, or transpilation. Tailwind is compiled in-browser at runtime by its CDN "browser" build.

**Testing:** Not applicable — no test files, test runner, or test configuration exist in the provided upload (see §19).

**Database setup:** Not applicable — no database exists.

**API setup:** Not applicable — no backend API exists; all "API-like" integrations (Sketchfab, map tiles, fonts) are public, keyless third-party embeds/CDNs consumed directly by the browser.

---

## 12. Development Workflow

**Not determinable from the provided project files.** No `.git` directory, README, `package.json`, CI configuration, or contribution guide was supplied. Editing this project in practice means directly modifying `index.html` in a text editor and reloading the browser — there is no hot-reload, linting, or formatting tooling evidenced in the file.

---

## 13. Maintenance Guide

**Updating content (the common case):** Edit the relevant data constant (`SITES`, `RESEARCH`, `WORKS`, `EVENTS`, `TEAM`, `MILESTONES`, `COURSE`) directly in the `<script>` block. Because render functions consume these arrays generically (via `.map()`/`.filter()`/`Object.entries()`), most additions (new site, new research paper, new team member, new event, new lesson) require **no template changes**, only a new object literal matching the existing shape.

**Updating design:** All visual design lives in the single `<style>` block using CSS custom properties for theme-able values (colors, radii, easing). Changing a `--variable` in `:root` or a theme block (`html[data-theme="light"]`/`"dark"]`) cascades everywhere that variable is used.

**Changing configuration:** See §10 — most "configuration" values are literal constants scattered through the script (map center/zoom, Sketchfab embed query params, brand name) rather than centralized; a maintainer should search for the specific literal to change it.

**Fixing bugs:** Because everything is one file with global functions and mutable module-scope state (`H`, `R`, `mapPrev`, `mapMain`, etc.), the most sensitive areas to change carefully are:
- `route()` — touches every page transition; a mistake here can break navigation site-wide.
- `renderSite()` / `renderLesson()` / `renderCase()` — very large template-literal functions; a single unescaped backtick, `${}`, or unclosed tag can silently corrupt the rendered page.
- The `esc()` helper — used pervasively to prevent broken markup from data containing quotes/angle-brackets; any new interpolation of external/user data should also be wrapped in `esc()`.

**Adding new modules/sections:** Add a new `<section class="page" id="page-newsection">` to `<main id="app">`, add `'newsection'` to the `known` array inside `route()`, add a rendering branch in `route()`, and add a link into the `NAV` array (or as standalone header markup) so users can reach it. See §14 for full extension steps.

**Updating data structures:** If a field is added to a record type (e.g., a new `tech` key on a site, or a new `tags` field on `WORKS`), most listing/detail templates that iterate generically (e.g., `Object.entries(s.tech)`) will pick it up automatically; templates that reference specific named fields (e.g., `w.links.demo`) require an explicit template edit.

**Replacing APIs/services:** Swapping the 3D provider away from Sketchfab, the map provider away from Leaflet/CARTO, or the image host away from Pexels would each require rewriting the corresponding render function's markup (`renderSite`'s viewer block, the map init functions, or the `PX()` helper and every `img`/`imgs` field's semantics) — these integrations are not behind an abstraction layer.

**Deprecated code:** None explicitly marked; there is no changelog or deprecation annotations in the file.

---

## 14. Feature Extension Guide

Recommended workflow for adding a new feature, based on the existing architecture:

1. **Identify the appropriate data array** (or create a new one, following the existing object-literal pattern) for the new content type.
2. **Add a new `<section class="page" id="page-<name>">`** inside `<main id="app">` with whatever static scaffolding (filters UI, containers with `id`s) the feature needs.
3. **Write a `render<Name>()` function** that reads the data array (and any needed filter-state object) and injects HTML into the container `id`s via template literals — always passing free-text/user-controlled values through `esc()`.
4. **Register the page in `route()`:**
   - Add the new page name to the `known` array.
   - Add an `if (page === '<name>') render<Name>(...)` branch.
   - If the page needs its own sub-route (like `site/<id>` or `academy/lesson/<id>`), branch on `seg[1]` as the existing `site`/`academy`/`works` pages do.
5. **Add navigation entry:** extend the `NAV` array (auto-renders into the mega-menu) or add bespoke header/footer links.
6. **Add validation/defensive lookups:** follow the `siteById(id) || SITES[0]` fallback pattern (or add an explicit "not found" state) rather than an unguarded `Array.find()`, to avoid the runtime errors described in §15.
7. **Add CSS:** extend the existing `<style>` block using established custom properties (`--ink`, `--muted`, `--accent`, `--radius`, etc.) so light/dark theming stays consistent, following the editorial card/section patterns already used (`.fcard`, `.pcard`, `.acard`, `.lib-row`, etc.).
8. **Test manually** across both themes and by directly navigating to deep-linked hash URLs (there is no automated test suite — see §19).
9. **Update this documentation** to reflect the new feature.

---

## 15. Debugging & Troubleshooting

| Symptom | Likely cause | Where to investigate | Recommended fix |
|---|---|---|---|
| Site page shows the wrong site or "undefined" values | Unknown `id` in `#/site/<id>` | `renderSite()`; `siteById()` | `renderSite` already falls back to `SITES[0]` — confirm this is the desired behavior, or add an explicit "site not found" view |
| Blank/broken overlay or a thrown JS error when clicking an event, research item, or work case | `EVENTS.find()`, `RESEARCH.find()`, or `WORKS.find()` returning `undefined` for a bad/stale id (e.g., from a bookmarked or hand-typed URL) | `openEvent(id)`, `openResearch(id)`, `renderCase(id)` | Add `?? null` guards / early-return "not found" states, mirroring `renderSite`'s fallback pattern |
| Map does not appear | Leaflet CDN failed to load (offline, ad-blocker, CSP), or `#mapPreview`/`#mapMain` container not yet in the DOM when `initPreviewMap`/`initMainMap` runs | Network tab for `unpkg.com` requests; confirm `route()` calls the init function only when the corresponding page is active | Verify network access to `unpkg.com`; the code already lazily initializes maps only when their page is visited |
| Images fail to load / broken image icons | Hotlinked Pexels URLs are unavailable, rate-limited, or IDs are wrong | `PX(id, w)` calls in data arrays | Confirm Pexels photo IDs are still valid; consider self-hosting images for production use |
| 3D viewer shows blank/errors | Invalid or unpublished Sketchfab model id in `sketchfab` field, or third-party cookies/embeds blocked | `renderSite()`'s `s-3d` block; browser console for iframe errors | Verify the Sketchfab model id and its embed/privacy settings allow iframe embedding on the deployed domain |
| Theme flips unexpectedly on load | `prefers-color-scheme` OS setting differs from the last explicit choice, and `localStorage` was cleared | Theme-restoration block near top of `<script>` | Expected behavior when no saved preference exists; confirm `localStorage` persistence works in the target browser (not in private/incognito mode with storage disabled) |
| Quiz/notes/progress not saving between visits | Browser blocking `localStorage` (private browsing, storage quota, or browser settings) | `localStorage` calls throughout the Academy code | No `try/catch` around `localStorage` calls exists — a `SecurityError` in restrictive contexts would throw uncaught; wrap these calls defensively if this is a concern |
| Layout looks broken on narrow screens | Design is explicitly desktop-first per the brief (Document 2 §27); mobile CSS may be incomplete | `<style>` block's media queries | Confirmed intentional priority, not necessarily a bug — see §16 Known Limitations |
| Tailwind utility classes in markup don't behave as expected after a Tailwind version bump | The Tailwind CDN URL is pinned only to major version `@4`, not an exact release | `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4">` in `<head>` | Pin to an exact version if reproducibility across time matters |

**Confirmed problems** are the ones above tied to unguarded `Array.find()` calls (`openEvent`, `openResearch`, `renderCase`) — verified directly in the source. **Potential risks** are the CDN-version-drift and `localStorage`-availability items, which are architecturally likely but not concretely reproduced from the static file alone.

---

## 16. Error Handling

- **Client-side JS errors:** No global error handler (`window.onerror`), no `try/catch` blocks anywhere in the script, and no error-boundary concept (this isn't a component framework). A runtime exception in any render function will typically only break that function's remaining execution and log to the browser console — sibling functionality (routing itself, other already-rendered sections) generally continues to work since each render function operates independently on `innerHTML` of its own container.
- **Data lookups:** As detailed in §15, only `renderSite()` has an explicit fallback (`siteById(id) || SITES[0]`); `openEvent`, `openResearch`, and `renderCase` do not, and will throw if given an id absent from their respective arrays.
- **User-facing "empty state" handling:** Present and intentional in the two filterable listing views — `renderArchive()` (`'<div class="empty">No sites match these filters.</div>'`) and `renderLib()` (`'<div class="empty">No research matches these filters.</div>'`). No equivalent empty state exists for the Works/Events listings, though those aren't user-filterable in the same way.
- **Validation:** No form validation exists in this file (there is no contact form or data-entry form visible in the provided markup beyond the Academy's read-only quiz radios and free-text notes field, neither of which is "submitted" anywhere).
- **Logging:** No structured logging exists; only implicit browser console errors from uncaught exceptions.
- **Recovery mechanisms:** None beyond the browser's default behavior (reloading the page resets all render state; `localStorage`-backed values like theme/notes/progress persist across reloads).

---

## 17. Security Analysis

**Authentication / Authorization:** None exist. There are no user accounts, login forms, or protected routes — consistent with Document 2's explicit statement that the Academy's "Initial Version" requires no login (§16 of the brief).

**Input handling / XSS considerations:**
- The app renders large amounts of HTML via `innerHTML` from template literals. All *known, hard-coded* data fields (titles, names, descriptions) that could plausibly contain HTML-sensitive characters are passed through the `esc()` helper before interpolation, which is a reasonable, deliberate mitigation for the fixed dataset shipped in the file.
- However, some fields (e.g., `s.tech` values, `w.tech`, `r.type`) are interpolated **without** `esc()` in places (for example, `Object.entries(s.tech).map(([k, val]) => `<div><span>${k}</span><span>${val}</span></div>`)`) — since this data is currently hard-coded and trusted, it is not an active vulnerability *today*, but **if this data were ever sourced from an external API, CMS, or user submission without adding escaping, it would become a stored-XSS vector.** This should be flagged for any future backend integration (see §22).
- The **notes textarea** in the Academy (`localStorage.getItem('hb_note_' + l.id)`) is read back and inserted directly into a template literal as the `<textarea>`'s content (`>${...}</textarea>`) without `esc()`. Since the value only ever comes from the same browser's own prior `localStorage` write (not from another user or a network source), this is a low-risk self-XSS-only path under the app's current architecture, but is worth noting if notes are ever synced server-side.

**Secrets management:** No secrets are present or required by the app as built (see §10).

**API security:** Not applicable — no first-party API exists. Third-party embeds (Sketchfab, YouTube, CARTO tiles, Pexels) are all public/keyless and loaded client-side; no credentials are transmitted.

**File handling:** No file upload functionality exists.

**Third-party trust surface:** The app loads executable JavaScript from two external CDNs at runtime (`cdn.jsdelivr.net` for Tailwind, `unpkg.com` for Leaflet) with no Subresource Integrity (`integrity` attribute) hashes on either `<script>` tag. This means the app implicitly trusts those CDNs not to serve a compromised or altered script — a **potential (not confirmed) vulnerability** worth flagging for a production deployment; adding SRI hashes or self-hosting these libraries would reduce this exposure.

**Recommended improvements (not currently implemented):**
- Add Subresource Integrity attributes (or self-host) for the Tailwind and Leaflet `<script>`/`<link>` tags.
- Escape all interpolated values consistently (currently inconsistent — some fields via `esc()`, some not) in case data ever originates from a non-trusted source.
- If a backend/CMS is introduced later, apply the same escaping discipline server-side and treat all persisted content as untrusted on render.

---

## 18. Testing

**No test framework, test files, or test configuration exist anywhere in the provided project.** There are no unit tests, integration tests, end-to-end tests, or CI test runs evidenced.

**Manual testing procedure (inferred, not documented in-project):** The only practical way to verify functionality is to open the file in a browser and manually exercise each route/hash (`#/`, `#/heritage`, `#/site/<id>`, `#/map`, `#/research`, `#/academy`, `#/academy/lesson/<id>`, `#/events`, `#/works`, `#/works/case/<id>`, `#/story`, `#/team`), each filter control, both theme modes, and the interactive widgets (quiz, notes, map markers, overlay open/close).

**Where new tests should be added (recommendation):** Given the current architecture (global functions operating on the DOM, no module exports), introducing automated tests would likely require either (a) refactoring render functions to be pure (data-in, HTML-string-out) and testable in isolation with a tool like Vitest/Jest plus jsdom, or (b) adding browser-based end-to-end tests (e.g., Playwright/Cypress) that drive the actual rendered page and assert on DOM content per route. Neither currently exists.

---

## 19. Dependency Map

```
route()
 → depends on: known page list, all render*() functions, nav DOM elements
 → renders: renderSite / renderArchive / renderLib / renderLesson / renderWorks /
            renderCase / showAcademyHome (dispatch depends on the URL path)

renderHome()
 → depends on: SITES, RESEARCH, WORKS, EVENTS, TEAM
 → uses: siteCard(), statusTag(), fmtDate()

renderArchive() / initArchive()
 → depends on: SITES, filter state H

renderSite()
 → depends on: SITES (via siteById), RESEARCH (filtered by site id)
 → embeds: Sketchfab iframe (external), optional YouTube iframe (external)

renderLib() / initLib() / openResearch()
 → depends on: RESEARCH, SITES (for cross-linking), filter state R
 → uses: openOverlay()

Map subsystem (initPreviewMap, initMainMap, markerFor, renderMapSide, setMapCountry, updateTiles)
 → depends on: SITES, Leaflet (external library), CARTO tiles (external service), current theme

renderPathCard() / renderLesson() / showAcademyHome()
 → depends on: COURSE, ALL_LESSONS, localStorage (progress + per-lesson notes)

renderTimeline() / openEvent()
 → depends on: EVENTS
 → uses: openOverlay()

renderWorks() / renderCase()
 → depends on: WORKS

Theme subsystem
 → depended on by: Map subsystem (updateTiles), all CSS (via data-theme attribute)

esc()
 → depended on by: nearly every render function (shared escaping utility)

openOverlay()/closeOverlay()
 → depended on by: openEvent(), openResearch()
```

**Highly central components** (changing these has the widest blast radius):
- **`route()`** — the single dispatcher for all page transitions; any structural change to `known`, the page-branching logic, or the nav-active-state map affects every page.
- **`esc()`** — used throughout nearly every render function; changing its escaping behavior affects all rendered content simultaneously.
- **`SITES`** — referenced by the homepage, archive, map, research cross-links, and works/team indirectly through shared design patterns; it is the most-referenced data array.
- **CSS custom properties in `:root`/theme blocks** — a change to a core token (e.g., `--accent`, `--radius`) cascades across the entire visual system in both themes at once.

---

## 20. Change Impact Analysis

```
Changing the Heritage Site data shape (SITES[])
 → Home page (featured grid)
 → Heritage Archive (filters + cards)
 → Site page (hero, story, tech table, gallery)
 → Map (markers, tooltips)
 → Research Library (site cross-reference display)
 → Related-sites suggestions on other site pages

Changing route()/known[] page list
 → Every navigation link across the site (NAV mega-menu, all internal <a href="#/...">)
 → Nav active-state highlighting (navMap)
 → Body's data-page attribute (used by CSS for page-specific styling, e.g. lesson/case layouts)

Changing the theme CSS variables
 → All pages simultaneously (global design tokens)
 → Map tile URLs (tileUrl() reads root.dataset.theme)
 → Loader/hero canvas colors (if they reference CSS variables — confirm in the <style> block before assuming)

Changing BRAND.name
 → document.title
 → All elements with class .brand-name
 → Footer watermark (first word only)
 → Any hard-coded template strings that reference "BRAND.name" directly (e.g., research author attribution
   "BRAND.name + ' Documentation Unit'", site page's "Documented by ${BRAND.name} Documentation Unit")
 → Does NOT change: any hard-coded literal text elsewhere that was not written through BRAND.name
   (a manual search for literal "Heritage Bridge" strings is needed to catch any remaining hard-coded mentions)

Changing the Academy's COURSE structure
 → ALL_LESSONS (auto-derives, so mostly safe)
 → renderPathCard() progress calculation
 → renderLesson()'s next/previous-lesson navigation (order-dependent on ALL_LESSONS)
 → Any external links from other pages into #/academy/lesson/<id> (NAV item currently points to '1-1' —
   would break if lesson '1-1' is removed/renamed)

Changing Leaflet/map provider
 → initPreviewMap, initMainMap, markerFor, renderMapSide, setMapCountry, updateTiles
 → All CSS classes styling .pc-marker, .hb-tip (Leaflet-specific tooltip class)
```

---

## 21. Known Limitations & Technical Debt

| Item | Status |
|---|---|
| Entire app is one 5,407-line HTML file with no modularization, no build step, no package manifest | **Confirmed** |
| No automated tests of any kind | **Confirmed** |
| No backend, database, authentication, or persistence beyond `localStorage` | **Confirmed** |
| All content (sites, research, events, team, course) is fictional/placeholder data hard-coded in JS | **Confirmed** (also stated as intentional in Document 2's brief — "temporary name," replaceable branding) |
| Several `Array.find()` lookups (`openEvent`, `openResearch`, `renderCase`) have no fallback/guard for missing ids and will throw on an invalid deep link | **Confirmed** |
| Inconsistent use of the `esc()` HTML-escaping helper across different render functions (some fields escaped, some not) | **Confirmed** |
| No Subresource Integrity on external CDN `<script>`/`<link>` tags (Tailwind, Leaflet) | **Confirmed** |
| Hotlinked third-party imagery (Pexels) with no fallback if the source becomes unavailable or IDs change | **Confirmed** |
| Design is explicitly desktop-first (per Document 2's own brief); full mobile-responsive parity is not guaranteed | **Confirmed by design intent**, actual mobile rendering quality is **Not determinable from static inspection alone** (would require rendering in a mobile viewport) |
| The exact mechanism/variable backing Academy "progress" tracking (`progress` variable's declaration/localStorage key) was not located within the specific line ranges reviewed | **Potential gap in this review — Not fully determinable without further direct grep of the file; recommend a maintainer verify** |
| No centralized configuration object for scattered literals (map center, Sketchfab embed query params, YouTube video id, localStorage key names) | **Confirmed** |
| No i18n/translation system despite several data fields mentioning multiple languages (e.g., a game described as supporting "Arabic, Armenian, English and French") — that claim lives only inside descriptive text, not as actual functional localization of the site UI | **Confirmed** |
| Hard-coded YouTube video id example wired to only one specific site's video block, not generalized as a per-site field | **Confirmed** |

---

## 22. Development Conventions

**Inferred from the code (no explicit style guide is present in the project):**

- **Naming:** `camelCase` for JS variables/functions; short, terse function names (`fmtDate`, `esc`, `PX`); DOM element ids in `camelCase` (`hSearch`, `rType`, `libFeature`) prefixed by a loose "page namespace" letter for filter state ids on the Heritage (`h*`) and Research (`r*`) pages.
- **Data-id conventions:** Heritage site ids are kebab-case slugs (`al-saa-church`, `erbil-citadel`); research ids are short codes (`r1`…`r8`); event ids similarly (`e1`…`e8`); work ids are kebab-case slugs (`clock-tower`, `khachkar-app`).
- **CSS conventions:** BEM-influenced but not strict BEM; utility-ish component classes (`.fcard`, `.pcard`, `.acard`, `.res-row`, `.lib-row`, `.tl-item`) each with dedicated rules in the shared stylesheet; CSS custom properties for all theme-able values; `.reveal`/`.img-reveal` marker classes used for scroll-triggered entrance animation, toggled to `.in` by the shared `IntersectionObserver`.
- **Code organization:** Data constants first, then one-time setup (nav render, theme init, loader, hero canvas), then reusable render-helper functions, then one dedicated block per "page" (home → heritage → site → research → academy → events → works → map helpers interleaved), then the router at the very end, wired to `hashchange` and invoked once immediately.
- **Commenting practices:** Sparse, but present at major section boundaries via `/* ---------------- SECTION NAME ---------------- */`-style banner comments, and a longer explanatory header comment at the top of the CSS design-system block and the top of the `<script>` block.
- **HTML templating style:** Large template literals with inline conditional expressions (`s.has3d ? \`...\` : ''`) and inline `.map().join('')` patterns rather than any templating library.

---

## 23. Git & Version Control

**Not determinable from the provided project files.** No `.git` directory, `.gitignore`, commit history, or branch information was included in the upload. No recommendations can be made beyond generic best practice (a `.gitignore` is not strictly needed for this file-only project, but would become relevant the moment a build tool or `node_modules` is introduced).

---

## 24. Deployment

**Not determinable from the provided project files** — no deployment configuration, hosting platform reference, environment variable list, or CI/CD pipeline is present. Because the project is a fully static single HTML file with no build step, it is compatible in principle with any static-file host (e.g., GitHub Pages, Netlify, Vercel static hosting, S3 + CloudFront, or a plain web server) simply by uploading `index.html` — but no such configuration exists in the provided materials to document.

---

## 25. Quick Developer Reference

| Looking for... | Go to... |
|---|---|
| Main application logic / router | `<script>` block, `route()` function (near the end, ~line 5384) |
| Content data (the de facto CMS) | `<script>` block, `SITES` / `RESEARCH` / `WORKS` / `EVENTS` / `TEAM` / `MILESTONES` / `COURSE` constants (~lines 4941–5122) |
| UI / page markup | `<main id="app">`, one `<section class="page" id="page-*">` per page (~lines 4130–4923) |
| Design system / CSS | `<style>` block (~lines 20–4064) |
| Navigation structure | `NAV` array (~script, after `COURSE`) and the mega-menu render line that follows it |
| Brand name | `const BRAND` (top of `<script>`) |
| Authentication | Not present anywhere |
| Assets | No local asset folder — all images are hotlinked Pexels URLs via `PX()`; fonts loaded via Google Fonts `<link>`; favicon is an inline `data:image/svg+xml` URI in `<head>` |
| Tests | Not present anywhere |
| Where to start fixing a bug | Identify the affected page → find its `render<Name>()` function → check the relevant data array and any filter-state object involved |
| Where to start adding a feature | §14 Feature Extension Guide |

---

## 26. New Developer Onboarding

1. **Understand the project purpose:** Read §1–§2 of this document and, if available, the original design brief (Document 2, "Heritage Bridge — Master Website Design Prompt") to understand the intended art direction and content strategy.
2. **Install prerequisites:** None beyond a modern browser; optionally Node.js or Python if you want to run a local static file server (§11).
3. **Set up the environment:** Just have `index.html` on disk; internet access is required for full fidelity (fonts, Tailwind, Leaflet, images, Sketchfab, map tiles).
4. **Run the project:** Open `index.html` directly or serve it locally (§11).
5. **Understand the architecture:** Read §5 (System Architecture) and trace one full workflow end-to-end, e.g., §9's "Home → Site → 3D model" walkthrough, by opening the file, opening browser DevTools, and watching `route()` execute as you navigate.
6. **Explore the main components:** Skim §6's component table while having the actual `<script>` block open side-by-side; locate each named function in the file.
7. **Run tests:** Not applicable — none exist (§19).
8. **Make a small modification:** Suggested first exercise — add a new entry to `TEAM` (or `EVENTS`) following the existing object shape exactly, reload the page, and confirm it appears on both the relevant listing page and (if applicable) the homepage preview.
9. **Understand the development workflow:** Not documented beyond direct file editing; there is no formal process to follow in the provided materials (§12).

---

## 27. Final Project Health Overview

**Architecture quality:** Coherent for a single-file, no-build prototype — the router/data/render separation is a clear, understandable pattern even without a framework. However, it is not architected for scale beyond a hand-maintained demo: no modules, no bundler, no component reuse across the ~4,000 lines of CSS and ~500 lines of dense JS beyond shared helper functions.

**Maintainability:** Moderate. Content updates (adding a site, paper, event, or team member) are low-risk and well-supported by the generic, data-driven render functions. Structural changes (new page types, changed data shapes referenced by name rather than iterated generically) require careful, manual template edits across a single very large file, with no compiler/linter/tests to catch mistakes.

**Extensibility:** Reasonably good for *content* (arrays are designed to be added to) and *design tokens* (CSS variables are consistently used); weaker for *new page types or data shapes*, which require coordinated edits to `route()`, a new render function, and new CSS with no scaffolding tool to help.

**Code organization:** Logical section-by-section layout with banner comments, but everything lives in one file, which will become increasingly hard to navigate and merge collaboratively as it grows.

**Documentation quality (of the source project itself, prior to this document):** Minimal — a handful of inline banner comments; no README, no architecture doc, no data-schema doc existed before this document was produced.

**Testing maturity:** None. This is the single largest gap for any team intending to maintain or extend this project with confidence.

**Security considerations:** Low inherent risk today because all data is hard-coded and trusted, but the inconsistent escaping discipline and the lack of Subresource Integrity on CDN scripts are the two concrete items worth addressing, especially before any future move to server-sourced or user-submitted content (§17).

**Technical debt:** Concentrated in three areas — (1) missing input-safety guards on several `Array.find()` lookups, (2) the single-monolithic-file structure itself, and (3) the complete absence of automated testing.

**Main risks:**
1. Broken deep links (`#/works/case/<bad-id>`, `#/events` overlay with a bad id, `#/research?open=<bad-id>`) throw unhandled JS errors.
2. Reliance on multiple external CDNs/services (Tailwind, Leaflet, Google Fonts, Pexels, CARTO, Sketchfab, YouTube) with no fallback if any becomes unavailable.
3. No test coverage means regressions during future edits will not be caught automatically.

**Recommended priorities (in order):**
1. Add defensive fallbacks/guards to the unguarded `Array.find()` lookups identified in §15/§21.
2. Decide on a modularization strategy (even a lightweight one — separate `.css`/`.js` files, or a minimal bundler) before the file grows further, to make collaborative development and testing feasible.
3. Introduce at least a minimal automated test layer (e.g., Playwright smoke tests hitting each hash route) given how easy it currently is for a template-literal typo to silently break a whole page.
4. Apply consistent `esc()` usage across all interpolated fields, and add Subresource Integrity to the CDN `<script>`/`<link>` tags, before this prototype is treated as production-ready.
5. If real content is going to replace the placeholder data, plan the migration to a proper data source (CMS/API) now, since the current architecture assumes trusted, hard-coded data and does not defend against externally-sourced HTML.

---

*Document generated by direct inspection of the single supplied file, `index.html`. Where information could not be confirmed from the provided materials, it has been explicitly marked "Not determinable from the provided project files" per the requested documentation standard, rather than inferred or invented.*