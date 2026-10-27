# SAANJH PARFUMS — AFTER RAIN

Editorial ecommerce storefront for SAANJH PARFUMS' signature fragrance, AFTER RAIN.

## Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- Lenis (smooth scroll)
- Lucide React

## Razorpay checkout

The site uses Razorpay's hosted Payment Button, which collects customer information and payment
details directly in Razorpay. No customer form, order database, or custom payment backend is
used by the site.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`, select AFTER RAIN, and click the Razorpay payment button under
**BUY NOW**. Razorpay collects the remaining customer and payment details.

The Payment Button ID is configured in `src/components/RazorpayPaymentButton.jsx`. Manage orders,
customer details, and payment status in the Razorpay dashboard.

## Production

```bash
npm run build
npm run preview
```

## Deploy to Netlify

This is a Vite static site and uses a hosted Razorpay payment page, so Netlify does not need
a backend or Razorpay environment variables.

1. Push the repository to GitHub.
2. In Netlify, choose **Add new site** → **Import an existing project**.
3. Select the GitHub repository.
4. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `20` or newer
5. Choose **Deploy site**.

The `public/_redirects` file keeps client-side routes such as `/product/after-rain` working when
opened directly. After deployment, set your custom domain in **Domain management** if needed.
