import { Helmet } from 'react-helmet';
import ScrollAnimation from '../../components/ScrollAnimation';
import IntroAnimation from '../../components/IntroAnimation';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import Business from '../../images/Business image illustrating partner.webp';
import CTA from '../../components/CTA';
import Important from '../../components/SEO/Important';
import Rivals from '../../components/SEO/Rivals';
import Services from '../../components/SEO/Services';
import SEOProcess from '../../components/SEO/SEOProcess';
import SEOQuestions from '../../components/SEO/SEOQuestions';

const SEO = () => {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <div>
      <Helmet>
        <title>SEO Szolgáltatások | GRLab</title>
        <meta
          name="description"
          content="Fedezze fel SEO szolgáltatásainkat, amelyek segítenek weboldala láthatóságának növelésében és a keresőmotorokban való jobb helyezés elérésében. Növelje online jelenlétét és vonzza a célközönséget."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.grlab.hu/seo" />
      </Helmet>
      <IntroAnimation />
      <ScrollAnimation />
      <section className="border-b border-[#dfe7e1] bg-[#f5f7f4]">
        <div className="container mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-16 md:flex-row md:items-end md:px-10 md:py-24">
          <div className="scroll-in w-full md:w-2/3">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-orange-700">
              {t('seo.subtitle')}
            </p>
            <h1 className="mb-5 font-poppins text-4xl font-extrabold leading-tight text-[#102a2d] sm:text-5xl md:text-7xl">
              {t('seo.title')}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-[#315b5d] md:text-xl">
              {t('seo.description')}
            </p>
          </div>
          <div className="w-full md:w-1/3 md:text-right">
            <Link to="/contact" className="inline-flex w-full justify-center rounded-full bg-orange-700 px-7 py-4 font-poppins text-lg font-bold text-white transition-colors hover:bg-orange-800 md:w-auto">
              {t('seo.cta')}
            </Link>
          </div>
        </div>
        <div className="mt-10 items-center space-y-4 text-black right-0 z-10">
          <img src={Business} alt={t('seo.imageAlt')} className="aspect-[16/7] w-full object-cover" loading="lazy" />
        </div>
      </section>
      <Important />
      <Services />
      <Rivals />
      <SEOProcess />
      <SEOQuestions />
      <CTA />
    </div>
  );
}

export default SEO;
