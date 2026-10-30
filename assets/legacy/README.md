# App icon masters (pre–zoom)

Original 1024×1024 launcher, splash, and notification PNGs before home-screen zoom (June 2025).

| Use | Source |
|-----|--------|
| **Play Store** `icon-512.png` | `ios-light.png` via `npm run generate:store-assets` |
| **Phone launcher** | `npm run generate:app-icons` scales from these masters → `mobile/assets/icons/` (fill ~0.49 launcher / ~0.48 adaptive; launcher art shifted up ~2.5% for optical center; splash uses separate fill) |

Do not delete this folder; `generate:app-icons` and Play icon export depend on it.
