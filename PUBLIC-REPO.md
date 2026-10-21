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

### Automatic (recommended)

On every push to **`main`** that touches locales or `landing-page/`, the workflow [`.github/workflows/publish-public-site.yml`](../.github/workflows/publish-public-site.yml) runs `npm run build:landing-page` and pushes the result to this repository’s `main` branch. That triggers **Deploy GitHub Pages** below.

**One-time:** add a GitHub Actions secret on the **private** `pronto-expat` repo:

| Secret | Value |
| --- | --- |
| `ORDINAE_PRONTOEXPAT_DEPLOY_TOKEN` | Fine-grained PAT (or classic PAT) with **Contents: Read and write** on `ordinae/prontoexpat` only |

Create the token under the GitHub account or org that owns `ordinae/prontoexpat`. You can also run the workflow manually (**Actions → Publish public site → Run workflow**).

### Manual

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
