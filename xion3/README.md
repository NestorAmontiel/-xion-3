# Xion 3.0 — working application foundation

A Next.js 15 / React 19 discovery and community app styled for an Airbnb-inspired discovery experience. The initial UI runs without credentials using **clearly marked illustrative listings**. The real database is Supabase with row-level security and moderation queues.

## Start locally

1. Install Node.js 20.9+.
2. In this folder: `npm install` then `npm run dev`.
3. Open `http://localhost:3000`.
4. For a database, create a Supabase project, run `supabase/schema.sql` in the SQL editor, copy `.env.example` to `.env.local`, and enter the **public** Supabase project URL and anon key. Never put a service-role key in browser variables.
5. Restart `npm run dev`. Only approved/published records appear publicly.

## What is implemented

- Responsive branded landing page, category/city/search/scholarship filters.
- Dynamic program detail pages.
- Community discussion feed and submission form.
- Program reviews and submission form.
- Supabase database tables for organizations, programs, reviews, posts, threaded comments, favorites, reports, and user profiles.
- Row-level security, user ownership checks, pending moderation by default.

## What is NOT implemented yet

- Sign-in/sign-up UI (writes correctly require an authenticated session; forms explain this).
- Admin moderation dashboard, organization management UI, comments UI, favorites UI, map UI, multilingual UI, notifications, photo uploads, anti-spam controls, and production tests.
- Live import from your Google Sheets; the shared URL could not be read from this environment. Demo listings are **not verified local programs**.
- A deployment or integration with your Framer account.

## Importing existing CMS

Export your Google Sheets as CSV files and map Groups → organizations, Locations → city/coordinates, Programs → programs. Import organizations first and use generated IDs to connect programs. Validate contact info, URLs, availability, age ranges and scholarship claims before publishing. Do not publish demo records as factual listings.

## Before a public launch

Build authentication, moderator tooling, organization claim/verification, rate limiting, content reporting/removal, youth privacy safeguards, accessibility audits, email confirmation, automated tests, backups and monitoring. Consider adults-only accounts at first and prohibit identifying information about minors in public posts.
