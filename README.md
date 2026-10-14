# FloraClient — Development

**DEV:** `linuxofpower/FloraClient-Dev`, branch `main`.

**Original source / production-side repository:** `yaMorozYaroslav/FloraDevClient-relocate-`, branch `master`.

This is a separate development repository with independent Git history. The source repository is preserved. Code changes are prepared and validated in DEV; production owners separately review and approve any production changes. Do not automatically deploy production from this repository.

## Migration evidence

- Source tree: `bbf6239327299cabe5491012590b1cc773f556d2`.
- All 88 original tracked source paths were imported to the migration branch.
- `.env.local.example` was replaced with a public-safe placeholder.
- Original Next.js boilerplate README was replaced by this development guidance.
- `app/api/create-payment-intent/route.ts` was adjusted so Stripe initializes only on actual requests, allowing CI builds without payment credentials.
- These are a source snapshot and reviewed changes, **not** a transfer of prior Git commit history, branches or tags.

## Local usage

Requires Node.js 22 and Corepack / Yarn 4.4.0:

```bash
corepack enable
yarn install --immutable
yarn build
yarn dev
```

Configure the payment secret outside Git. Run the DEV CI workflow before merging; no deployment should occur from CI.
