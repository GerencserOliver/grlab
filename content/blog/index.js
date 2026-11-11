// Blog registry. To publish a post:
//   1. copy content/blog/_template.js to content/blog/posts/<slug>.js and fill it in
//   2. import it below and add it to the `posts` array
// Newest first is NOT required: posts are sorted by `publishedAt` automatically.

import mennyibeKerulWeboldal from './posts/mennyibe-kerul-weboldal-keszitese-gyor';
import googleCegprofilHelyiSeo from './posts/google-cegprofil-beallitas-helyi-seo-gyor';
import egyediSzoftverfejlesztes from './posts/egyedi-szoftverfejlesztes-vagy-kesz-rendszer';
import hogyanGyorsitjaFel from './posts/hogyan-gyorsitja-fel-a-vallalkozasodat-egy-egyedi-webalkalmazas';

export const posts = [
  mennyibeKerulWeboldal,
  googleCegprofilHelyiSeo,
  egyediSzoftverfejlesztes,
  hogyanGyorsitjaFel,
];
