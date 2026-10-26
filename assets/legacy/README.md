# App icon masters (pre–zoom)

Original 1024×1024 launcher, splash, and notification PNGs before home-screen zoom (June 2025).

| Use | Source |
|-----|--------|
| **Play Store** `icon-512.png` | `ios-light.png` via `npm run generate:store-assets` |
| **Phone launcher** | `npm run generate:app-icons` scales from these masters → `mobile/assets/icons/` (fill ~0.72, alpha trim only; splash uses separate fill) |

Do not delete this folder; `generate:app-icons` and Play icon export depend on it.
