# Public site repo (`ordinae/prontoexpat`)

The main app repo stays **private**. This folder is published as the **root** of [ordinae/prontoexpat](https://github.com/ordinae/prontoexpat) on GitHub Pages.

## Live URLs

Custom domain (canonical):

| Page | URL |
| ---- | --- |
| Home | [https://prontoexpat.ordinae.app/](https://prontoexpat.ordinae.app/) |
| Privacy (Play Console) | [https://prontoexpat.ordinae.app/privacy.html](https://prontoexpat.ordinae.app/privacy.html) |
| Account deletion (Play Console) | [https://prontoexpat.ordinae.app/account-deletion.html](https://prontoexpat.ordinae.app/account-deletion.html) |
| Data deletion requests | [https://prontoexpat.ordinae.app/data-deletion-request.html](https://prontoexpat.ordinae.app/data-deletion-request.html) |
| Terms | [https://prontoexpat.ordinae.app/terms.html](https://prontoexpat.ordinae.app/terms.html) |

Legacy GitHub Pages URL (`ordinae.github.io/prontoexpat/…`) may redirect to the custom domain after Pages DNS is configured.

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
2. **Custom domain:** `prontoexpat.ordinae.app` (Cloudflare CNAME → `ordinae.github.io`, DNS only).
3. Push to `main`; workflow **Deploy GitHub Pages** runs from `.github/workflows/pages.yml`.
4. If the first deploy fails with 404, enable Pages then **re-run** the workflow.

Do not commit Supabase keys or other secrets in the public repo.

## Source-of-truth rule (Lesson 5.9)

1. **Private app repo:** run `npm run build:landing-page`; commit the generated HTML under `landing-page/` when legal or marketing copy changes.
2. **Publish:** push to `main` on the private repo — [`.github/workflows/publish-public-site.yml`](../.github/workflows/publish-public-site.yml) copies this folder to `ordinae/prontoexpat` and triggers Pages.
3. **Do not** hand-edit HTML only on the public repo without syncing back to the private build pipeline.

Play marketing PNGs are edited in `assets/store/play/` (not regenerated from SVG). See [`assets/store/README.md`](./assets/store/README.md).
