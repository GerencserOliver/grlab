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

// Direct 'write a review' link of the Google Business Profile.
export const GOOGLE_REVIEW_URL = 'https://g.page/r/CZbmGpszeKpvEBM/review';
// Public Google Business Profile / knowledge panel (to read all reviews).
export const GOOGLE_PROFILE_URL = 'https://www.google.com/search?kgmid=/g/11p1g_qc4r&q=GRLab';

// Official company social profiles (also listed in the Organization JSON-LD `sameAs` in layout.js).
export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/company/grlab-gyor',
  facebook: 'https://www.facebook.com/profile.php?id=61596553672951',
};

export const ABOUT_PATH = '/about';
export const PRIVACY_PATH = '/privacy-policy';
