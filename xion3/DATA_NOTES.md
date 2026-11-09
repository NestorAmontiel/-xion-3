# Xion CMS migration notes

Imported the user-provided Xion.xlsx workbook: **12 groups, 60 locations, 88 programs** (including records marked inactive). The discovery UI displays only active program rows. Source records are preserved in `data/cms.json`.

## Data quality and privacy
- Provider links, descriptions, scholarships and costs originate from the spreadsheet and have **not been independently verified**.
- Location contact names, phone numbers and emails are retained in the local JSON for migration but are **not shown on the public UI**. Before deploying, remove personal contact fields from publicly bundled JSON or move them to a server-only store.
- The original CMS contains placeholders and potential inconsistent city/category values. Review before launch.
- External URLs are opened in new tabs; audit all destinations before publishing.
- No real user accounts, live forum, moderation backend, or verified review system is activated without Supabase configuration.

## Next integration
Connect Supabase, implement login/signup, move listings into database with a migration script, test RLS, build moderation and organization claim flow, and verify responsive behavior.
