// Starting prices in HUF, GROSS (VAT included). Text (names, descriptions, delivery
// times, feature lists) lives in messages/trust.<locale>.json -> pricing.items.<id>.
// To change a price, edit the number here - every page (and the JSON-LD) follows.

export const PACKAGES = [
  { id: 'landing', price: 79900 },
  { id: 'company', price: 149000 },
  { id: 'shop', price: 249000 },
  { id: 'webapp', price: 390000 },
  { id: 'ecosystem', price: 990000, highlighted: true },
  { id: 'gbp', price: 29900 },
];

export const MAINTENANCE = { id: 'maintenance', price: 9900 };

export const CURRENCY_CODE = 'HUF';
