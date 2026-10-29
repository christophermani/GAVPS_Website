## Foundation architecture
- Public pages are React routes in `src/App.tsx`. Shared UI stays in `src/components`.
- The Node.js server in `server/index.ts` accepts form posts at `/api/submissions`, validates them, and inserts into MySQL. There is no public read of personal submissions. The same email is limited to five submissions per hour.
- Payment collection remains disabled until official payment details and terms are supplied; never simulate donation processing.
