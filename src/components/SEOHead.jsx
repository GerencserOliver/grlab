import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const seoData = {
  '/': {
    title: 'GRLab | Egyedi digitális megoldások',
    description:
      'Egyedi weboldalak, webalkalmazások és digitális üzleti rendszerek vállalkozásoknak Győrben és Magyarországon.',
  },
  '/website': {
    title: 'Weboldal készítés | GRLab',
    description:
      'Modern, reszponzív weboldalak és egyedi webes megoldások vállalkozásoknak. Ismerd meg a GRLab webfejlesztési szolgáltatásait.',
  },
  '/seo': {
    title: 'SEO szolgáltatások | GRLab',
    description:
      'Keresőoptimalizálás vállalkozásoknak: technikai SEO, weboldal-optimalizálás és online láthatóság fejlesztése.',
  },
  '/portfolio': {
    title: 'Referenciák és projektek | GRLab',
    description:
      'Tekintsd meg a GRLab webfejlesztési projektjeit, referenciáit és egyedi digitális megoldásait.',
  },
  '/contact': {
    title: 'Kapcsolat | GRLab',
    description:
      'Vedd fel a kapcsolatot a GRLabbal weboldalfejlesztés, SEO vagy egyedi digitális megoldások ügyében.',
  },
};

function SEOHead() {
  const { pathname } = useLocation();
  const page = seoData[pathname] || seoData['/'];

  return (
    <Helmet>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta name="robots" content="index, follow" />
      <link
        rel="canonical"
        href={`https://www.grlab.hu${pathname === '/' ? '/' : pathname}`}
      />
    </Helmet>
  );
}

export default SEOHead;
