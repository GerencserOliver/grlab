import React from 'react'
import { Helmet } from 'react-helmet'
import CTA from '../../components/CTA'
import ScrollAnimation from '../../components/ScrollAnimation'
import IntroAnimation from '../../components/IntroAnimation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>GM | Contact</title>
        <meta
          name='description'
          content='Get in touch with me to discuss your project. Professional website development services using React and Tailwind CSS.'
        />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://www.grlab.hu/contact' />
      </Helmet>
        <IntroAnimation />
        <ScrollAnimation />
        <section className='flex items-center justify-center'>
          <div className='container mx-auto max-w-[1570px] flex flex-col md:flex-row px-4 md:px-10 z-1'>
            <div className='scroll-in w-full md:w-4/6 text-center md:text-left'>
              <h2 className='text-black font-bold font-poppins text-xl mb-6'>
                {t('contact.subtitle')}
              </h2>
              <h1 className='text-black font-bold font-poppins text-3xl sm:text-5xl md:text-8xl mb-6'>
                {t('contact.title')}
              </h1>
            </div>
          </div>
          <div className="flex-col items-center space-y-4 text-black mt-10 hidden md:block fixed left-0 z-10">
            <div className="flex flex-col items-center space-y-4 text-white p-12 mt-72">
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
        <CTA />
    </div>
  )
}

export default Contact
