# Family Museum — Interactive Ancestral Archive

A research-led, explorable family-history museum. The project combines a documented family tree with social history, historic places, occupations, migration and clearly-labelled contextual reconstruction.

## Current build — v0.9

The museum is no longer designed as a sequence of identical neutral galleries. Each major branch now has an environmental treatment based on the world the family would actually have inhabited.

### Environmental galleries

- **Cape Origins / Living at the Cape** — limewashed colonial-farm interior, timber structure and hearth atmosphere.
- **Huguenot Passage** — timber ship-deck environment evoking the 1688 refugee voyage rather than a conventional museum room.
- **Raunds Workshop** — shoemaker / shoe-closing workroom with bench, dark timber floor and sewing-machine silhouette.
- **Yorkshire Industrial Room** — darker mining-household environment with range/fireplace and industrial tones.
- **Britain to South Africa / Ivy’s World** — warmer mid-century domestic environment to frame migration and social mobility.
- **Archive & Connections** — deliberately darker evidence room for unresolved questions, sources and methodology.

## Women of the Family wing

A dedicated four-room wing corrects the tendency of conventional family trees to make women visible only through husbands or changing surnames.

1. **Cape & Huguenot Women** — Sara Jacob, Isabeau le Long, Sara du Buis and women’s role in migration, household survival and kin networks.
2. **Raunds Workroom** — Sarah Webb, shoe closing, home work, paid labour and the double burden of household work.
3. **Sarah at Gretna** — wartime munitions work, wages, danger, female autonomy and state supervision.
4. **Ivy’s World** — Ivy Moore, migration, remembered property/upward mobility and the distinction between family memory and documentary proof.

## Research principles

- Primary or strongly corroborated material is labelled as documented/supported.
- Family memory is preserved but not silently promoted to fact.
- Historic images and reconstructed environments are labelled as context unless they depict the specific person/place being claimed.
- Living relatives have identifying details reduced in the public build.
- Social context includes class, gender, labour, migration, religion, colonialism and apartheid where those systems materially shaped the family’s world.

## Existing research features

- Detailed branch-by-branch family tree.
- Timeline and migration map.
- Occupations, places, records and museum-object prompts.
- Evidence-confidence labels.
- Huguenot, Cape, Whitney/Whiteman, Moore/Adamson, Barnard/Boyce and McMillan research lines.
- Notable-family-tradition gallery for the Roger Moore connection, explicitly marked as unproven until a shared ancestor is identified.
- Anthropology rooms comparing household life, work, class and mobility across generations.

## Run locally

This is a static JavaScript site. Serve the folder rather than opening `index.html` directly.

### Python

```bash
cd family-museum-3d
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Live deployment

The repository is connected to a Render static site on the `main` branch.

## Next build priorities

1. Replace more generic silhouettes with historically sourced visual props and textures for each environment.
2. Add verified family photographs and scans as soon as identities are confirmed.
3. Build a floor-plan / wing-navigation screen so visitors can choose a route rather than only using the horizontal gallery bar.
4. Add exact relationship-path highlighting — “How am I related to this person?”
5. Add ambient but optional sound design: ship timbers/wind, workshop stitching, mining-household fire, factory machinery, Cape farm ambience.
6. Develop a true first-person/WebGL mode only after the stable accessible museum remains intact as a fallback.
7. Continue source validation, especially Ivy’s property story, the Sydney Moore parentage problem, the second Swart/Boyce branch and the McMillan line.

## Privacy

Exact birth dates, addresses and other identifying details for living relatives should remain in the private research archive and be redacted in any public deployment by default.
