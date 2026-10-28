# GAVPS Foundation

Public website for GAVPS Foundation — Giving Aid to Various People of the Society.

## Development

You need Node.js and npm. The site is a React app. A Node.js server stores form submissions in MySQL.

```sh
npm install
cp .env.example .env
npm run db:init
npm run dev
```

Open http://localhost:3000. The API listens on port 3001 during development, and the React dev server proxies `/api` to it.

Run tests with `npm test`. Build the React app with `npm run build`, then serve it with `npm start`.

## Built with

- React
- React Router
- Node.js
- MySQL
- TypeScript
- Tailwind CSS

## GAVPS Foundation website

Public pages use React. Form submissions are validated in the browser and again by the Node.js server, then stored in MySQL. Start locally with `npm install`, `npm run db:init`, and `npm run dev`.

Brand tokens live in the global stylesheet. The official logo and campaign photos are served from `public/images`. Current campaign photos are AI-generated illustrations. Public pages include the homepage, services and details, events and details, gallery, newsroom, donor interest, volunteering, contact, partnerships, team, impact, donations and privacy.

Volunteer, donor, contact, partnership and update-interest forms validate on both client and server and store privately in MySQL. The API accepts inserts only. The same email is limited to five submissions per hour. Consent is required. Submissions do not trigger email delivery yet.

### Still required before public launch
- Verified foundation description, statistics, programme details, team profiles and legal information.
- Approved real photographs, permission-based stories, actual events and press PDFs.
- Official address, telephone, email, social links and location map.
- Approved privacy notice, retention schedule and official privacy contact.
- Verified payment provider, donation terms and tax eligibility before accepting funds.
- Email sending configuration for notifications and newsletter delivery.
- Admin sign-in and role-restricted content management are a future phase: implement protected roles and server-authorized access before exposing submissions. No admin UI or account is currently provisioned.
- Separate English/Hindi translation resources for complete site translation; the current switch translates main navigation labels only.
