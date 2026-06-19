# Introduction to Linux for Windows Admins

A [Marp](https://marp.app/) presentation for the **Fredericksburg Linux Users Group (FREDLUG)**.

Audience: Windows system administrators who want to understand Linux without starting from scratch.
The presentation maps every Linux concept to its Windows equivalent — services, logs, networking,
software management, and more — while making the case that Linux skills are no longer optional.

**FREDLUG** meets every 4th Saturday of the month at Howell Branch Library, Stafford, VA.
Events: https://heylo.group/fredlug

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm (included with Node.js)

Install the Marp CLI:

```bash
npm install
```

---

## Building the presentation

### HTML (default — for presenting in a browser)

```bash
npm run build
```

Output: `slides.html` — open in any browser. Use arrow keys or click to advance slides.

### Live preview while editing

```bash
npm run serve
```

Opens a local server with hot-reload. Useful when editing `slides.md`.

### Watch mode (rebuilds HTML on save)

```bash
npm run watch
```

### PDF export

```bash
npm run build:pdf
```

Requires a Chromium-based browser installed (Marp uses it for rendering).

### PowerPoint export

```bash
npm run build:pptx
```

---

## Project structure

```
slides.md          — all slide content (edit this)
images/            — local images referenced in slides
scripts/           — build helpers (copied from FREDLUG template)
package.json       — npm scripts and Marp CLI dependency
```

---

## Slide authoring notes

- Slides are separated by `---`
- Speaker notes go in HTML comments `<!-- like this -->` **outside** any code fences
- Marp directives use `<!-- _class: ... -->` syntax
- Local images go in `images/` and are referenced as `![](images/filename.png)`
- The XKCD sandwich image is loaded from its live URL and requires internet access to render
