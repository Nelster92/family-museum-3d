# Family Museum — 3D Ancestral Archive

A working Three.js prototype for an explorable family-history museum.

## What is included

- Five 3D gallery rooms: Cape Origins, Huguenot Passage, Raunds Workshop, Yorkshire Industrial Room, and McMillan Wing.
- Clickable framed ancestor exhibits.
- Evidence-confidence labels (documented / strong lead / family information).
- Story, occupation, places, records, and source links for each exhibit.
- Privacy-first handling of living relatives.
- Architecture ready for photographs, scans, ships, churches, historic landmarks and a relationship-path graph.

## Run locally

Because this uses JavaScript modules, serve the folder rather than double-clicking `index.html`.

### Python

```bash
cd family-museum-3d
python -m http.server 8080
```

Open http://localhost:8080

### Node

Any static server works, e.g. `npx serve .`.

## Deploy

This project is static and can be deployed to Render, GitHub Pages, Netlify, Cloudflare Pages, Vercel, or similar.

## Next build

1. Replace placeholder framed text exhibits with sourced photographs / document scans.
2. Add a genealogy graph so “How am I related?” can illuminate the exact ancestor path.
3. Add floor-plan navigation, first-person optional mode, and accessible non-3D fallback.
4. Add migration-room maps and ship exhibits (Oosterland, Schelde, China).
5. Link Drive-hosted source assets when the Google Drive connection is available.
6. Add a data-validation layer that requires a source and confidence for every relationship.

## Privacy

Exact birth dates, addresses and other identifying data for living relatives should stay in the private research archive and be redacted in any public deployment by default.
