const PAYMENT_URL = 'https://pages.razorpay.com/pl_TsT9b3JCYsKJWf/view';
export default function RazorpayPaymentButton() {
  return (
    <a
      href={PAYMENT_URL}
      target="_blank"
      rel="noreferrer"
      className="btn-luxury-primary inline-flex w-full items-center justify-center px-6 py-4 text-[10px] uppercase tracking-[0.22em]"
    >
      BUY NOW
    </a>
  );
}
