import { Helmet } from 'react-helmet';
import CTA from '../../components/CTA';
import ScrollAnimation from '../../components/ScrollAnimation';
import IntroAnimation from '../../components/IntroAnimation';
import Projects from '../../components/Portfolio/Projects';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Referenciák | GRLab</title>
        <meta
          name='description'
          content='Tekintse meg weboldal-, webalkalmazás- és üzleti rendszer projektjeinket. Egyedi digitális megoldások magyar vállalkozásoknak.'
        />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://www.grlab.hu/portfolio' />
      </Helmet>
      <IntroAnimation />
      <ScrollAnimation />
      <section className='border-b border-[#dfe7e1] bg-[#f5f7f4]'>
        <div className='container mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-16 md:flex-row md:items-end md:px-10 md:py-24'>
          <div className='scroll-in w-full md:w-2/3'>
            <p className='mb-5 text-sm font-bold uppercase tracking-[0.18em] text-orange-700'>
              {t('portfolio.tagline')}
            </p>
            <h1 className='mb-5 font-poppins text-4xl font-extrabold leading-tight text-[#102a2d] sm:text-5xl md:text-7xl'>
              {t('portfolio.title')}
            </h1>
            <p className='max-w-2xl text-lg leading-relaxed text-[#315b5d] md:text-xl'>{t('portfolio.description')}</p>
          </div>
          <div className='w-full md:w-1/3 md:text-right'>
            <Link to='/contact' className='inline-flex w-full justify-center rounded-full bg-orange-700 px-7 py-4 font-poppins text-lg font-bold text-white transition-colors hover:bg-orange-800 md:w-auto'>
              {t('portfolio.requestQuote')}
            </Link>
          </div>
        </div>
      </section>
      <Projects />
      <CTA />
    </div>
  );
};

export default Portfolio;
