// Client-safe business constants (no server-only imports), shared by the
// Navbar/Footer (client components) and the JSON-LD builders (server).
// NOTE: the street address is intentionally only used in JSON-LD, never rendered in the UI.
export const BUSINESS = {
  phone: '+36704316723',
  phoneDisplay: '+36 70 431 6723',
  phoneHref: 'tel:+36704316723',
  email: 'info@grlab.hu',
  emailHref: 'mailto:info@grlab.hu',
  streetAddress: 'Galgóczi Erzsébet utca 14',
  postalCode: '9012',
  locality: 'Győr',
  region: 'Győr-Moson-Sopron',
  country: 'HU',
};

// Public Google Business Profile (shown on the reviews block). Replace with the direct
// review link (g.page/... or the "Write a review" short link) when you have it.
export const GOOGLE_PROFILE_URL = 'https://www.google.com/search?kgmid=/g/11p1g_qc4r&q=GRLab';

export const ABOUT_PATH = '/rolunk';
export const PRIVACY_PATH = '/adatkezelesi-tajekoztato';
