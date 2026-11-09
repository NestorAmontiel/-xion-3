# Xion 3.0 — first preview deployment

This is a preview of the imported Xion directory. Search and listing pages work from bundled CMS data without Supabase. Reviews and community posting are NOT enabled until auth, schema, and moderation are completed. Do not invite public submissions yet.

## Recommended: use a new repository

Keep the old ConneXion repository untouched until its contents are reviewed. On GitHub create a new **private** repository named `xion-3` (without initializing a README). Unzip the downloaded archive. Upload the **contents inside** the `xion3` folder to the repository root (not the outer folder). Do not upload `.env.local` or `node_modules`.

## Publish a preview with Vercel

1. Sign in to Vercel using GitHub.
2. Add New → Project → import `xion-3`.
3. Framework preset: Next.js; Root Directory: `./` (if the `app` folder is at the repository root).
4. Leave Supabase environment variables empty for the preview.
5. Deploy and open the generated `.vercel.app` URL.
6. Verify: homepage loads, search/filter works, program cards open, and community page loads. Community/review submission should say Supabase is not connected.

If deployment fails, save the build log and share it for a targeted fix. This package has not been independently built or browser-tested in this environment.

## Next: production backend

Create a Supabase project, inspect `supabase/schema.sql` before applying it, add authentication UI and server-side authorization, and import normalized CMS data to the database. Never commit service role keys or passwords. Do not activate community submissions until moderation and abuse controls are implemented.
