---
name: Zip imports can drop attached_assets
description: Imported/zip-uploaded Replit projects can be missing the attached_assets directory even when source code still references it via the @assets alias.
---

When setting up an imported project, a Vite build failure on an `@assets/...` import doesn't mean the code is broken — the `attached_assets/` directory (object-storage-style local assets, not committed the same way as source) is sometimes excluded from zip exports.

**Why:** happened during import setup of a pnpm-workspace site where `@assets/<hash>.jpg` (a logo) was referenced in code but the whole `attached_assets/` folder was absent from the uploaded zip.

**How to apply:** grep for `@assets/` (or the project's equivalent alias) across the frontend before/while restarting workflows. If files are missing, generate a placeholder to unblock the build and clearly flag in replit.md (Gotchas section) that the real asset needs to be re-uploaded — don't silently invent permanent content for user-facing media.
