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
