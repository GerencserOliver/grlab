import React from 'react';
import { Helmet } from 'react-helmet';
import ScrollAnimation from '../../components/ScrollAnimation';
import IntroAnimation from '../../components/IntroAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
        <title>GM | SEO Services</title>
        <meta
          name="description"
          content="Professional SEO services to help you rank higher on Google. Increase your website traffic and grow your business with our SEO strategies."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.grlab.hu/seo" />
      </Helmet>
      
      <IntroAnimation />
      <ScrollAnimation />
      <section>
        <div className="container mx-auto max-w-[1570px] flex flex-col md:flex-row px-4 md:px-10 z-1">
          <div className="scroll-in w-full md:w-4/6 text-center md:text-left">
            <h2 className="text-black font-bold font-poppins text-xl mb-6">
              {t('seo.subtitle')}
            </h2>
            <h1 className="text-black font-bold font-poppins text-3xl sm:text-5xl md:text-8xl mb-6">
              {t('seo.title')}
            </h1>
            <p className="text-teal-700 font-poppins text-lg sm:text-xl md:text-3xl mb-6">
              {t('seo.description')}
            </p>
          </div>
          <div className="md:w-2/6">
            <button className="bg-orange-700 hover:bg-gray-800 text-white text-base sm:text-lg md:text-xl w-full font-bold font-poppins md:px-24 px-6 py-6 mt-4 rounded-full mb-16 md:mb-0">
              <Link to="/contact">{t('seo.cta')}</Link>
            </button>
          </div>
        </div>
        <div className="items-center space-y-4 text-black mt-10 right-0 z-10">
          <img src={Business} alt="
            Hand shaking with a business partner in a meeting illustrating the importance of SEO services for businesses
          " className="w-full object-cover h-[800px]" />
        </div>
        <div className="flex-col items-center space-y-4 text-black mt-10 hidden md:block fixed left-0 z-10 top-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center space-y-4 text-white p-12">
            {/* Email Link */}
            <a
              href="mailto:gmwebsitedesign@gmail.com"
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black rounded-full p-3"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-white h-8" />
            </a>

            {/* Facebook Link */}
            <a
              href="https://www.facebook.com/oliver.gerencser.5/"
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black rounded-full p-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-white h-8" />
            </a>

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/oliveerphd/"
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black rounded-full p-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-white h-8" />
            </a>
          </div>
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
};

export default SEO;
