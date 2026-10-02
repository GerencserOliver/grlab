import React from 'react';
import { Helmet } from 'react-helmet';
import ScrollAnimation from '../../components/ScrollAnimation';
import IntroAnimation from '../../components/IntroAnimation';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import CTA from '../../components/CTA';
import WebsiteDev from '../../components/WebsiteDev/Introduction';
import Guarantee from '../../components/WebsiteDev/Guarantee';
import Prices from '../../components/WebsiteDev/Prices';
import Services from '../../components/Services';
import Questions from '../../components/WebsiteDev/Questions';
import WebsiteBuilding from '../../components/WebsiteDev/WebsiteBuilding';

import Construction from '../../images/Construction illustration of webdevelopment.webp';

import { useTranslation } from 'react-i18next';

const Website = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>GRLab | Website Development</title>
        <meta
          name="description"
          content="Professional website development services using React and Tailwind CSS. Explore my portfolio and see how I can bring your ideas to life!"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.grlab.hu/website" />
      </Helmet>

      <IntroAnimation />
      <ScrollAnimation />
      <section className='border-b border-[#dfe7e1] bg-[#f5f7f4]'>
        <div className='container mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-16 md:flex-row md:items-end md:px-10 md:py-24'>
          <div className='scroll-in w-full md:w-2/3'>
            <p className='mb-5 text-sm font-bold uppercase tracking-[0.18em] text-orange-700'>
              {t('wdhero.subtitle')}
            </p>
            <h1 className='mb-5 font-poppins text-4xl font-extrabold leading-tight text-[#102a2d] sm:text-5xl md:text-7xl'>
              {t('wdhero.title')}
            </h1>
            <p className='max-w-3xl text-lg leading-relaxed text-[#315b5d] md:text-xl'>
              {t('wdhero.description')}
            </p>
          </div>
          <div className='w-full md:w-1/3 md:text-right'>
            <Link to='/contact' className='inline-flex w-full justify-center rounded-full bg-orange-700 px-7 py-4 font-poppins text-lg font-bold text-white transition-colors hover:bg-orange-800 md:w-auto'>
              {t('wdhero.button_text')}
            </Link>
          </div>
        </div>
        <div className="items-center space-y-4 text-black right-0 z-10">
          <img src={Construction} alt="
          Construction Site illustration of a website under construction"
          className='w-full aspect-[16/7] object-cover' loading='lazy' />
        </div>

      </section>
      <WebsiteDev />
      <Guarantee />
      <Services />
      <Prices />
      <WebsiteBuilding />
      <Questions />
      <CTA />
    </div>
  )
}

export default Website;
