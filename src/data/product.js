export const AFTER_RAIN = {
  slug: 'after-rain',
  name: 'AFTER RAIN',
  collection: 'The signature fragrance',
  description:
    'A woody, aromatic fragrance shaped by bergamot, oud, leather and a touch of sweetness.',
  notes: {
    top: ['Sicilian / Italian bergamot', 'Pink pepper', 'Davana'],
    heart: ['Agarwood (oud)', 'White amber', 'Rosemary'],
    base: ['Leather', 'Musk'],
  },
  variants: [
    { id: 'after-rain-50', size: '50 ml', price: 1199 },
  ],
  image: '/perfume-bottle.png',
};

export const formatPrice = (amount) => `₹${amount.toLocaleString('en-IN')}`;