# Google Play listing copy (English)

Use these in Play Console. Replace `[PLAY_URL]` when the app is published.

## App name (30 characters max)

ProntoExpat

## Short description (80 characters max)

Step-by-step guidance for expats navigating Italian bureaucracy and daily life.

## Full description

Moving to Italy or already living here? Italian bureaucracy and daily life can feel overwhelming. ProntoExpat replaces hours of unreliable searching with fast, source-cited answers and a clear, personalized path through visas, documents, housing, healthcare and everyday admin. Free to use. No ads.

**What you get**

• **Free triage** — Answer a few questions and get a tailored checklist for your situation  
• **Tasks** — Track bureaucracy milestones and see what to do next  
• **Resources** — Guides and articles with links to trusted sources  
• **Your path** — Prioritized steps based on your profile and comune when you share it  

**Important**

ProntoExpat provides general information and organizational tools only. It is **not legal advice**, **not immigration advice**, and **not affiliated with any Italian government body**. Always verify requirements with official sources or qualified professionals.

**Privacy**

We respect your data. Read our Privacy Policy on the web or in the app (Profile → Legal).

**Contact**

ordinaedev@gmail.com

## Graphic assets (this folder)

| File | Spec |
|------|------|
| `icon-512.png` | High-res icon, 512×512 — `npm run generate:store-assets` from legacy masters |
| `feature-graphic*.png`, `store-banner.png` | Hand-maintained listing art (1024×500) |
| `playstore_assets/*.png` | Real device captures for Play + landing gallery |

Regenerate launcher PNGs: `npm run generate:app-icons`. Play listing icons only: `npm run generate:store-assets`. Verify captures: `npm run test:device-screenshots`. Workflow: [`../README.md`](../README.md).

## Category suggestions

Primary: **Lifestyle** or **Productivity**  
Tags: Italy, expat, immigration, bureaucracy, checklist
