# Karifala Business Website

A professional, mobile-responsive business website for Karifala Abdulai Conteh in Sierra Leone. The site presents his sales, installation, digital support, and customer-contact services in a clean, trustworthy format and is built with Next.js App Router.

## Project summary

- Business owner: Karifala Abdulai Conteh
- Brand name used on site: Karifala Digital & Technical Services
- Core services: sales, mobile money recruitment, telecommunications support, digital account assistance, TV installation, solar installation, CCTV installation
- Contact details: +23275300500, contehkarifalaa@gmail.com
- Contact route: WhatsApp, telephone, email, and service inquiry form

## Technology stack

- Next.js 16 App Router
- React 19
- JavaScript
- Tailwind CSS
- Lucide React
- Motion for React

## Installation

```bash
npm install
```

## Local development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Production build

```bash
npm run build
npm run start
```

## Environment variables

Copy the example environment file and update values as needed:

```bash
copy .env.example .env.local
```

Example values:

```env
RESEND_API_KEY=your_server_side_api_key
CONTACT_EMAIL=contehkarifalaa@gmail.com
NEXT_PUBLIC_SITE_URL=https://example.com
```

Important notes:

- Keep API keys server-side only.
- Do not expose private keys in browser code.
- The contact form currently returns a clear message when email delivery is not configured, and directs users to call or use WhatsApp instead.
- Replace the placeholder site URL before deploying to production.

## Deployment to Vercel

1. Create a separate GitHub repository for this project.
2. Push the project to GitHub.
3. Import the repository into Vercel.
4. Configure the environment variables in the Vercel project settings.
5. Deploy the project.
6. Test the live site after deployment.

## Notes

- The website intentionally avoids making unsupported claims about qualifications, registrations, guarantees, or operational details that were not provided.
- The optional 1xBet promotion is intentionally omitted from the main business website unless legal and platform requirements are verified.
- Real project photographs or updated business details can be replaced in the public image folder and site content as they become available.
