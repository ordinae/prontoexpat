# Store marketing assets

| Path | How to update |
| ---- | ------------- |
| `play/playstore_assets/*.png` | Real device captures for Play listing + landing gallery. Replace files in place. |
| `play/feature-graphic*.png`, `play/store-banner.png` | Hand-edited listing art (1024×500 banner, hero variants). |
| `play/icon-512*.png` | Regenerate from launcher masters: `npm run generate:app-icons` then `npm run generate:store-assets` |

**Do not** run old SVG rasterization — scaffold sources were removed in Lesson 5.9 (Oct 2026).

After PNG changes: `npm run build:landing-page` from repo root, then merge to `main` (CI publishes `landing-page/` to GitHub Pages).

Guard: `npm run test:device-screenshots`.
