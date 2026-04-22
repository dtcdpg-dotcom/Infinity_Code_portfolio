# Infinity Code Portfolio

Creative one-page company portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Web3Forms (contact submissions)

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit Company Details

Update all company content from a single config file:

- `src/config/company.ts`

You can change:

- Company name, tagline, headline, description
- Contact info (email, phone, location, links)
- Services list
- Stats values
- Portfolio projects, screenshots, source/live links

## Web3Forms Setup

1. Create a `.env.local` file.
2. Add your Web3Forms key:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

The contact form posts directly to `https://api.web3forms.com/submit`.

If the env variable is missing, the form uses the placeholder key in `src/config/company.ts`.

## Build

```bash
npm run build
npm run start
```
