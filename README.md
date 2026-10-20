# ProntoExpat public site

Static HTML for ProntoExpat: a short marketing home page plus **privacy policy**, **terms of service**, and **account deletion** instructions. There is no server or API; everything is pre-rendered files.

These public pages satisfy common **Google Play** listing requirements: a browser-accessible privacy policy URL and a separate account-deletion URL that match the in-app policy.

| What | Where |
| ---- | ----- |
| Home (pitch, Play CTAs, screenshots) | `index.html` |
| Legal pages (English) | `privacy.html`, `terms.html`, `account-deletion.html` |
| Legal + home in other app languages | `/{locale}/` (10 locales at build time) |

Legal wording matches the in-app Privacy Policy and Terms. Visual style matches the app (Civic Blueprint palette, DM Sans, horizontal logo).

**Deploy:** push this folder to [ordinae/prontoexpat](https://github.com/ordinae/prontoexpat); GitHub Pages via `.github/workflows/pages.yml`. Details: [PUBLIC-REPO.md](./PUBLIC-REPO.md).

**Live site:** [https://ordinae.github.io/prontoexpat/](https://ordinae.github.io/prontoexpat/) · Play URLs: [privacy](https://ordinae.github.io/prontoexpat/privacy.html), [account deletion](https://ordinae.github.io/prontoexpat/account-deletion.html).

Legal and home HTML are generated from the private ProntoExpat app repo; treat this folder as publish output unless you are applying a deliberate hotfix.
