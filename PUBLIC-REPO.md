# Public site repo (`ordinae/prontoexpat`)

The main app repo stays **private**. This folder is published as the **root** of [ordinae/prontoexpat](https://github.com/ordinae/prontoexpat) on GitHub Pages.

## Live URLs

| Page | URL |
| ---- | --- |
| Home | [https://ordinae.github.io/prontoexpat/](https://ordinae.github.io/prontoexpat/) |
| Privacy (Play Console) | [https://ordinae.github.io/prontoexpat/privacy.html](https://ordinae.github.io/prontoexpat/privacy.html) |
| Account deletion (Play Console) | [https://ordinae.github.io/prontoexpat/account-deletion.html](https://ordinae.github.io/prontoexpat/account-deletion.html) |
| Terms | [https://ordinae.github.io/prontoexpat/terms.html](https://ordinae.github.io/prontoexpat/terms.html) |

## Publish from the private app repo

```bash
# repo root
npm run build:landing-page
cd landing-page
git add -A
git commit -m "Update public site"
git push origin main
```

Remote in `landing-page/` should be `git@github.com:ordinae/prontoexpat.git`.

## One-time Pages setup

1. Public repo **Settings → Pages → Source: GitHub Actions**.
2. Push to `main`; workflow **Deploy GitHub Pages** runs from `.github/workflows/pages.yml`.
3. If the first deploy fails with 404, enable Pages then **re-run** the workflow.

Do not commit Supabase keys or other secrets in the public repo.
