# Google Play marketing badges

Official **Get it on Google Play** badge PNGs from Google’s badge CDN (Partner Marketing Hub / [Play badge guidelines](https://play.google.com/intl/en_us/badges/)).

- Do not recolor, crop, or alter these files.
- Minimum on-screen height: 28px (we use ~48px in CSS).
- Localized filenames match Google’s locale codes (`en`, `it`, `zh-cn`, etc.).
- The landing page hero always uses `en_badge_web_generic.png` so size and alignment stay consistent; `alt` / `aria-label` remain translated.

To refresh assets from Google (if badges are updated):

```bash
npm run download:play-badges
```
