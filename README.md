# Tetelestai Community Centered Service (TCCS)

A simple, modern website for Tetelestai Community Centered Service. The site shares our story and mission, highlights our core values and ministries, and provides ways to connect with us.

## What’s on the site

- Hero section with our mission statement
- About: our journey and purpose
- Vision and Core Values
- Ministries overview
- Contact form (powered by Web3Forms)
- Header and footer with quick navigation

## Tech used

- Next.js (App Router) + TypeScript
- Tailwind CSS for styling
- next/image for optimized images

## Notes

- Background and logo images are served from the `public/` folder and optimized with `next/image`.
- The contact form uses Web3Forms. Set `NEXT_PUBLIC_FORM_ACCESS_KEY` in your environment if you want to enable submissions.

## Deployment

Deployed on Netlify. Static assets are optimized and the hero background is preloaded for faster first paint.
